# ValinzTech Website

Next.js website for ValinzTech with a working contact form API endpoint at `/api/contact`.

## Local development

1. Install dependencies:

```bash
npm install
```

2. Create your local environment file:

```bash
# macOS / Linux
cp .env.example .env.local

# Windows (PowerShell)
Copy-Item .env.example .env.local
```

3. Add your Resend credentials and email addresses in `.env.local`.

4. Start the dev server:

```bash
npm run dev
```

## Contact form email (Resend)

The API route `src/app/api/contact/route.ts` sends emails via Resend using `fetch`.

Required environment variables:

- `RESEND_API_KEY` - your Resend API key
- `CONTACT_TO_EMAIL` - destination inbox for form submissions
- `CONTACT_FROM_EMAIL` - verified sender identity (domain or Resend test sender)

Notes:

- In production, use a verified sending domain in Resend for better deliverability.
- Keep `reply_to` as the submitter email so you can reply directly from your inbox.

## Favicon setup

Favicon is already configured in `src/app/layout.tsx` via:

- `/favicon.ico`
- `/icon.svg`

To use your own favicon image, replace files at:

- `public/favicon.ico` (primary browser favicon, recommended 32x32 and 48x48 inside ICO)
- `src/app/icon.svg` (optional SVG fallback for modern browsers)

Recommended naming:

- `favicon.ico` in `public/`
- `icon.svg` in `src/app/`

After replacing, restart `npm run dev` or hard-refresh the browser (`Ctrl+F5`) if favicon is cached.

## Cloudflare deployment

When deployed on Cloudflare, add the same variables as project secrets/environment variables:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

After setting variables, redeploy so `/api/contact` can access them.
