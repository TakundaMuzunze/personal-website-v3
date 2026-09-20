# Takunda Muzunze — Portfolio

My personal portfolio, showcasing selected work, personal projects and my experience as a software engineer. Built with Next.js App Router, React, TypeScript and Tailwind CSS, and hosted on Netlify.

## Features

- Project cards with expandable contributions and outcomes.
- About, experience and skills sections.
- Responsive navigation and a saved light/dark theme.
- Hero typewriter and entrance animations with reduced-motion support.
- Email contact form using Nodemailer, shared validation and client-side toast feedback.

## Run locally

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

To enable email delivery, add your Gmail SMTP credentials to `.env.local`:

```dotenv
SMTP_SENDER_EMAIL=you@gmail.com
SMTP_RECEIVER_EMAIL=you@example.com
SMTP_PASSWORD=your-gmail-app-password
```

The sender uses a Gmail app password; replies go to the visitor's email address. These variables are server-only and must stay out of Git.

## Updating content

- `src/data/FeaturedProjects.ts` — selected work and contribution details.
- `src/data/PersonalProjects.ts` — personal projects, screenshots and links.
- `src/data/AboutMe.ts` — bio, experience and skills.
- `public/images` — project images.

Page sections live in `src/components/sections`, shared components in `src/components/ui`, and theme colours in `src/app/globals.css`.

## Checks and production

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

Use `npm run format` to format files and `npm start` to preview the production build.

Set the same SMTP variables in Netlify for the deployed contact form. Production Turbopack disk caching is disabled to avoid retaining environment values in build-cache artifacts.
