# Takunda's portfolio

Next.js App Router with React, TypeScript, Tailwind CSS, ESLint, and Prettier.
Next.js provides the development server and build tooling; Vite is not used.

## Development

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

- `src/app/page.tsx`: home page, currently a minimal starter.
- `src/app/layout.tsx`: shared document layout and metadata.
- `src/app/globals.css`: global styles and Tailwind entry point.
- `takunda-portfolio-complete.html`: approved design reference, preserved unchanged.

## Checks and formatting

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

Run `npm run format` to format source files. Prettier sorts Tailwind classes using
`prettier-plugin-tailwindcss`. The original HTML mockup is excluded from formatting.

Run `npm start` to serve the production build after `npm run build`.
