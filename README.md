# Takunda's portfolio

Personal portfolio built with Next.js, React, TypeScript and Tailwind CSS, featuring selected projects, experience, light/dark themes and an email contact form.

## Development

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). Project and about copy live in `src/data`; page sections live in `src/components/sections`.

## Contact form

Set these server-only variables in `.env.local` and in your hosting environment:

```dotenv
SMTP_SENDER_EMAIL=you@gmail.com
SMTP_RECEIVER_EMAIL=you@example.com
SMTP_PASSWORD=your-gmail-app-password
```

The form sends through Gmail using Nodemailer, with the visitor's address as Reply-To. Keep credentials out of Git and never use a `NEXT_PUBLIC_` prefix. On Netlify, use the Functions scope for these runtime credentials where available.

## Checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

Use `npm run format` to format files and `npm start` to serve a production build.
