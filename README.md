# Bruce Portfolio

Bruce Portfolio is a modern personal portfolio website built to showcase Bruce's work, expertise, and professional brand across digital advertising, analytics, and frontend development.

The site presents a polished, responsive experience for potential clients, collaborators, and employers. It includes sections for an introduction, services, featured work, and contact information so visitors can quickly understand Bruce's background and reach out.

## Project Summary

This project serves as a digital resume and marketing site in one. It is designed to:

- highlight Bruce's experience and capabilities
- present key services and areas of specialization
- showcase selected projects and case studies
- provide a clear way to contact him through LinkedIn and other channels
- deliver a modern, mobile-friendly experience with smooth animations and theme support

## Features

- Responsive single-page portfolio experience
- About, Services, and Projects sections
- Project showcase with visual case-study-style cards
- Contact section with direct professional outreach links
- Dark mode and light mode support
- Smooth motion effects for a polished presentation

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Wouter for client-side routing
- Framer Motion for animation
- Lucide React for icons

## Project Structure

```text
.
├── client/
│   ├── public/          # static assets and images
│   └── src/
│       ├── components/ # reusable UI and page sections
│       ├── hooks/      # theme and utility hooks
│       ├── pages/      # route-based pages
│       ├── App.tsx     # app router setup
│       └── main.tsx    # entry point
├── package.json
├── vite.config.*
├── tailwind.config.*
├── tsconfig.*
├── README.md
└── vercel.json
```

## Local Development

Requirements:

- Node.js
- npm

Install dependencies and start the app:

```bash
npm install
npm run dev
```

The site runs locally on:

```text
http://localhost:5000
```

## Production Build

To generate a production build:

```bash
npm run build
```

To run TypeScript validation:

```bash
npm run check
```

## Deployment

This project includes Vercel configuration and can be deployed directly to Vercel by importing the repository into the Vercel dashboard and using the configured build settings.

## License

This project is licensed under the MIT License.