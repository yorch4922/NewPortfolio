import { NextResponse } from "next/server";

const DEFAULT_TO_EMAIL = "jorgeyaelorga@gmail.com";
const DEFAULT_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";
const MAX_NAME_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 4000;
const DEFAULT_WEBHOOK_TIMEOUT_MS = 10000;

type DeliveryChannel = "webhook" | "email";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildMailtoUrl(params: {
  toEmail: string;
  name: string;
  email: string;
  message: string;
}) {
  const { toEmail, name, email, message } = params;
  const subject = `Portfolio inquiry from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  const query = new URLSearchParams({ subject, body }).toString();
  return `mailto:${toEmail}?${query}`;
}

function parseWebhookTimeout(value: string | undefined) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return DEFAULT_WEBHOOK_TIMEOUT_MS;
  }
  return Math.min(parsed, 30000);
}

function isLocalWebhookUrl(rawUrl: string) {
  try {
    const parsed = new URL(rawUrl);
    return ["localhost", "127.0.0.1", "::1"].includes(parsed.hostname);
  } catch {
    return false;
  }
}

function joinWarnings(parts: string[]) {
  return parts.filter(Boolean).join(" ");
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? null;
  }
  return request.headers.get("x-real-ip");
}

function buildWebhookUrl(rawUrl: string, secret: string | undefined) {
  const endpoint = new URL(rawUrl);
  if (secret) {
    endpoint.searchParams.set("secret", secret);
  }
  return endpoint.toString();
}

async function sendToWebhook(params: {
  webhookUrl: string;
  webhookSecret?: string;
  webhookTimeoutMs: number;
  payload: Record<string, unknown>;
}) {
  const { webhookUrl, webhookSecret, webhookTimeoutMs, payload } = params;
  const targetUrl = buildWebhookUrl(webhookUrl, webhookSecret);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), webhookTimeoutMs);

  try {
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      return { ok: false, error: `Webhook failed with status ${response.status}.` };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Webhook delivery failed." };
  } finally {
    clearTimeout(timeout);
  }
}

async function sendToEmail(params: {
  resendApiKey: string;
  toEmail: string;
  fromEmail: string;
  name: string;
  email: string;
  message: string;
}) {
  const { resendApiKey, toEmail, fromEmail, name, email, message } = params;
  const subject = `Portfolio inquiry from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        text,
        reply_to: email,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return { ok: false, error: `Email failed with status ${response.status}.` };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Email delivery failed." };
  }
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const body = (payload ?? {}) as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const company = String(body.company ?? "").trim();

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (name.length > MAX_NAME_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: "One or more fields are too long." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();
  const webhookSecret = process.env.CONTACT_WEBHOOK_SECRET?.trim();
  const webhookTimeoutMs = parseWebhookTimeout(process.env.CONTACT_WEBHOOK_TIMEOUT_MS);
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? DEFAULT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? DEFAULT_FROM_EMAIL;
  const isProduction =
    process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";

  const deliveredTo: DeliveryChannel[] = [];
  const deliveryErrors: string[] = [];
  const configWarnings: string[] = [];

  const shouldSkipWebhook = webhookUrl
    ? isProduction && isLocalWebhookUrl(webhookUrl)
    : false;

  if (shouldSkipWebhook) {
    configWarnings.push(
      "CONTACT_WEBHOOK_URL points to localhost and was skipped in production.",
    );
  }

  if (resendApiKey && fromEmail === DEFAULT_FROM_EMAIL) {
    configWarnings.push(
      "CONTACT_FROM_EMAIL is using the default sender; configure a verified production sender.",
    );
  }

  if (webhookUrl && !shouldSkipWebhook) {
    const webhookPayload = {
      submittedAt: new Date().toISOString(),
      name,
      email,
      message,
      source: "portfolio-contact-form",
      userAgent: request.headers.get("user-agent"),
      ip: getClientIp(request),
    };

    try {
      const webhookResult = await sendToWebhook({
        webhookUrl,
        webhookSecret,
        webhookTimeoutMs,
        payload: webhookPayload,
      });

      if (webhookResult.ok) {
        deliveredTo.push("webhook");
      } else {
        deliveryErrors.push(webhookResult.error ?? "Webhook delivery failed.");
      }
    } catch {
      deliveryErrors.push("Webhook URL is invalid.");
    }
  }

  if (resendApiKey) {
    const emailResult = await sendToEmail({
      resendApiKey,
      toEmail,
      fromEmail,
      name,
      email,
      message,
    });

    if (emailResult.ok) {
      deliveredTo.push("email");
    } else {
      deliveryErrors.push(emailResult.error ?? "Email delivery failed.");
    }
  }

  if (deliveryErrors.length > 0) {
    console.warn("[contact] delivery issues detected", {
      deliveredTo,
      deliveryErrors,
      webhookConfigured: Boolean(webhookUrl),
      resendConfigured: Boolean(resendApiKey),
      skippedLocalWebhookInProduction: shouldSkipWebhook,
    });
  }

  if (deliveredTo.length === 0) {
    const hasConfiguredChannel = Boolean(webhookUrl || resendApiKey);
    const baseWarning = hasConfiguredChannel
      ? "Automated delivery failed. Fallback mode enabled."
      : "No automated delivery channel configured. Fallback mode enabled.";
    const warning = joinWarnings([baseWarning, ...configWarnings]);

    return NextResponse.json(
      {
        ok: true,
        delivered: false,
        fallback: "mailto",
        mailtoUrl: buildMailtoUrl({ toEmail, name, email, message }),
        warning,
      },
      { status: hasConfiguredChannel ? 202 : 200 },
    );
  }

  const successWarning = joinWarnings([
    deliveryErrors.length > 0 ? "Partial delivery completed." : "",
    ...configWarnings,
  ]);

  return NextResponse.json({
    ok: true,
    delivered: true,
    deliveredTo,
    warning: successWarning || undefined,
  });
}
