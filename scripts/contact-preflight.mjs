import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

function parseArg(name, defaultValue) {
  const prefixed = `--${name}=`;
  const match = process.argv.find((arg) => arg.startsWith(prefixed));
  return match ? match.slice(prefixed.length) : defaultValue;
}

function normalizeValue(value) {
  if (!value) return "";
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

async function loadEnvFile(fileName) {
  const filePath = path.join(repoRoot, fileName);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const pairs = {};
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const index = trimmed.indexOf("=");
      if (index <= 0) continue;
      const key = trimmed.slice(0, index).trim();
      const value = normalizeValue(trimmed.slice(index + 1));
      pairs[key] = value;
    }
    return pairs;
  } catch {
    return {};
  }
}

function isLocalWebhookUrl(rawUrl) {
  try {
    const parsed = new URL(rawUrl);
    return ["localhost", "127.0.0.1", "::1"].includes(parsed.hostname);
  } catch {
    return false;
  }
}

function displayList(title, items) {
  if (items.length === 0) return;
  console.log(`\n${title}`);
  for (const item of items) {
    console.log(`- ${item}`);
  }
}

async function main() {
  const mode = parseArg("mode", process.env.NODE_ENV || "development");
  const fromEnvFile = await loadEnvFile(".env.local");
  const fromDotEnv = await loadEnvFile(".env");

  const read = (key) =>
    normalizeValue(process.env[key] ?? fromEnvFile[key] ?? fromDotEnv[key] ?? "");

  const webhookUrl = read("CONTACT_WEBHOOK_URL");
  const webhookSecret = read("CONTACT_WEBHOOK_SECRET");
  const resendApiKey = read("RESEND_API_KEY");
  const fromEmail = read("CONTACT_FROM_EMAIL");
  const toEmail = read("CONTACT_TO_EMAIL");

  const errors = [];
  const warnings = [];
  const info = [];

  const hasWebhook = Boolean(webhookUrl);
  const hasResend = Boolean(resendApiKey);

  if (!hasWebhook && !hasResend) {
    errors.push(
      "No automated delivery channel configured. Set CONTACT_WEBHOOK_URL and/or RESEND_API_KEY.",
    );
  }

  if (hasWebhook) {
    try {
      new URL(webhookUrl);
    } catch {
      errors.push("CONTACT_WEBHOOK_URL is not a valid URL.");
    }

    if (mode === "production" && isLocalWebhookUrl(webhookUrl)) {
      errors.push(
        "CONTACT_WEBHOOK_URL points to localhost. Production must use a publicly reachable endpoint.",
      );
    }

    if (!webhookSecret) {
      warnings.push(
        "CONTACT_WEBHOOK_SECRET is empty. Webhook requests are not authenticated.",
      );
    }
  }

  if (hasResend) {
    if (!fromEmail) {
      warnings.push(
        "CONTACT_FROM_EMAIL is not set. Resend may reject or limit sends when using defaults.",
      );
    }
    if (fromEmail.includes("onboarding@resend.dev")) {
      warnings.push(
        "CONTACT_FROM_EMAIL uses onboarding@resend.dev. Replace with a verified production sender.",
      );
    }
  }

  if (!toEmail) {
    warnings.push("CONTACT_TO_EMAIL is empty. The API default recipient will be used.");
  }

  info.push(`Mode: ${mode}`);
  info.push(`Webhook channel: ${hasWebhook ? "configured" : "not configured"}`);
  info.push(`Email channel: ${hasResend ? "configured" : "not configured"}`);

  console.log("Contact Preflight");
  console.log("=================");
  for (const row of info) {
    console.log(row);
  }

  displayList("Warnings", warnings);
  displayList("Errors", errors);

  if (errors.length > 0) {
    process.exitCode = 1;
    return;
  }

  console.log("\nPreflight passed.");
}

await main();

