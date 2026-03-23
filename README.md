This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form Setup

The contact form submits to `POST /api/contact`.

Create a `.env.local` file with:

```bash
CONTACT_TO_EMAIL=jorgeyaelorga@gmail.com
CONTACT_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
CONTACT_WEBHOOK_URL=your_webhook_url
CONTACT_WEBHOOK_SECRET=your_shared_secret
CONTACT_WEBHOOK_TIMEOUT_MS=10000
RESEND_API_KEY=your_resend_api_key
```

Delivery behavior:

- If `CONTACT_WEBHOOK_URL` is set, each message is sent there (ideal for Google Sheets).
- If `RESEND_API_KEY` is set, an email notification is also sent.
- If both are set, both channels are attempted.
- If neither is set, UI falls back to `mailto`.

### Google Sheets via Apps Script webhook

1. Create a Google Sheet with columns like:
   `submittedAt | name | email | message | source | userAgent | ip`
2. Open `Extensions -> Apps Script` and paste this:

```javascript
const SHEET_NAME = "Leads";
const WEBHOOK_SECRET = "replace-with-your-shared-secret";

function doPost(e) {
  const secret = e?.parameter?.secret;
  if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "Unauthorized" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const payload = JSON.parse(e.postData.contents || "{}");
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  sheet.appendRow([
    payload.submittedAt || new Date().toISOString(),
    payload.name || "",
    payload.email || "",
    payload.message || "",
    payload.source || "",
    payload.userAgent || "",
    payload.ip || "",
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy as `Web app` with access `Anyone with the link`.
4. Use that URL as `CONTACT_WEBHOOK_URL`.
5. Set the same value in `CONTACT_WEBHOOK_SECRET`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
