# Personal Portfolio Website

A responsive portfolio site for showcasing work across digital advertising, analytics, and frontend development. It includes About, Services, and Projects pages, plus a contact form.

## Features

- Responsive pages with animated sections and theme support
- Project and case-study showcase
- Contact form with optional SMTP email delivery

## Built With

- React, TypeScript, and Vite
- Tailwind CSS and shadcn/ui components
- Express, Wouter, and Framer Motion

## Local Development

Requires Node.js and npm.

```sh
npm install
cp .env.example .env
npm run dev
```

Add valid SMTP settings to `.env` to enable contact-form email delivery. Keep real credentials in `.env` and never commit them.

To create a production build:

```sh
npm run build
```

## Deployment

The repository includes a Vercel configuration. Import the repository into Vercel and use the configured build settings. Add any required SMTP values through the Vercel project's Environment Variables settings; do not put secret values in source files or this README.