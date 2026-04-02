import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_PORT = 34567;
const DEFAULT_SECRET = "test-secret";

const port = Number.parseInt(process.env.PORT ?? `${DEFAULT_PORT}`, 10);
const expectedSecret = process.env.CONTACT_WEBHOOK_SECRET ?? DEFAULT_SECRET;
const shouldPersist = process.env.SAVE_CONTACT_LEADS === "true";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outputFile = path.join(repoRoot, "tmp", "contact-leads.ndjson");

function json(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

async function persistPayload(payload) {
  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.appendFile(outputFile, `${JSON.stringify(payload)}\n`, "utf8");
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);

  if (request.method === "GET" && requestUrl.pathname === "/health") {
    json(response, 200, { ok: true, status: "healthy" });
    return;
  }

  if (request.method !== "POST") {
    json(response, 405, { ok: false, error: "Method not allowed." });
    return;
  }

  if (requestUrl.pathname !== "/") {
    json(response, 404, { ok: false, error: "Not found." });
    return;
  }

  const providedSecret = requestUrl.searchParams.get("secret") ?? "";
  if (expectedSecret && providedSecret !== expectedSecret) {
    json(response, 401, { ok: false, error: "Unauthorized." });
    return;
  }

  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  let payload;

  try {
    payload = JSON.parse(rawBody || "{}");
  } catch {
    json(response, 400, { ok: false, error: "Invalid JSON payload." });
    return;
  }

  const event = {
    receivedAt: new Date().toISOString(),
    payload,
  };

  console.log("\n[dev-webhook] Contact message received:");
  console.log(JSON.stringify(event, null, 2));

  if (shouldPersist) {
    await persistPayload(event);
    console.log(`[dev-webhook] Saved to ${outputFile}`);
  }

  json(response, 200, { ok: true });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`[dev-webhook] Listening on http://127.0.0.1:${port}/`);
  console.log(`[dev-webhook] Health check: http://127.0.0.1:${port}/health`);
  console.log(
    `[dev-webhook] Expected secret: ${expectedSecret ? "configured" : "not configured"}`,
  );
  if (!shouldPersist) {
    console.log("[dev-webhook] Persistence is off. Set SAVE_CONTACT_LEADS=true to write tmp/contact-leads.ndjson");
  }
});

