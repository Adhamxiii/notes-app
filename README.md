# NoteForge

A modern note-taking web application built for developers — capture, organize, and manage dev notes, code snippets, and technical insights in one place.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [Contact Me](#contact-me)

## Description

**NoteForge** is a full-stack Next.js application designed as a developer-focused note platform. It includes a polished landing page, complete authentication flow, and a protected dashboard for authenticated users.

### Features

- **Landing page** — Hero section, feature highlights, and call-to-action with light/dark theme support
- **Authentication** — Sign up, sign in, email verification, forgot password, and reset password flows
- **Protected routes** — Dashboard access restricted to signed-in users via middleware
- **Transactional email** — Verification and password reset emails powered by Resend
- **Modern UI** — Built with Tailwind CSS, shadcn/ui components, and Motion animations

### Tech Stack

| Category  | Technologies                                                                       |
| --------- | ---------------------------------------------------------------------------------- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router, Turbopack)                          |
| Language  | TypeScript                                                                         |
| Styling   | Tailwind CSS 4, shadcn/ui                                                          |
| Auth      | [Better Auth](https://www.better-auth.com/)                                        |
| Database  | [Neon](https://neon.tech/) (PostgreSQL) + [Drizzle ORM](https://orm.drizzle.team/) |
| Email     | [Resend](https://resend.com/) + React Email                                        |
| Forms     | React Hook Form + Zod                                                              |

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (or yarn / pnpm / bun)
- A [Neon](https://neon.tech/) PostgreSQL database
- A [Resend](https://resend.com/) API key (for email verification and password reset)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Adhamxiii/notes-app.git
   cd notes-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:

   ```env
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   BETTER_AUTH_SECRET=your-secret-key-here
   BETTER_AUTH_URL=http://localhost:3000
   NEXT_PUBLIC_DATABASE_URL=your-neon-postgresql-connection-string
   RESEND_API_KEY=your-resend-api-key
   ```

   | Variable                   | Description                                       |
   | -------------------------- | ------------------------------------------------- |
   | `NEXT_PUBLIC_BASE_URL`     | Public URL of the app (used in client-side links) |
   | `BETTER_AUTH_SECRET`       | Secret key for Better Auth session encryption     |
   | `BETTER_AUTH_URL`          | Base URL for Better Auth callbacks                |
   | `NEXT_PUBLIC_DATABASE_URL` | Neon PostgreSQL connection string                 |
   | `RESEND_API_KEY`           | Resend API key for sending emails                 |

4. **Set up the database**

   Push the schema to your Neon database:

   ```bash
   npx drizzle-kit push
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Development

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the dev server with Turbopack |
| `npm run build` | Create a production build           |
| `npm run start` | Run the production server           |
| `npm run lint`  | Run ESLint                          |

### Application Routes

| Route              | Description                                        |
| ------------------ | -------------------------------------------------- |
| `/`                | Landing page                                       |
| `/signup`          | Create a new account                               |
| `/login`           | Sign in to an existing account                     |
| `/forget-password` | Request a password reset email                     |
| `/reset-password`  | Set a new password (via email link)                |
| `/dashboard`       | Protected user dashboard (requires authentication) |

### Authentication Flow

1. Sign up at `/signup` — a verification email is sent automatically.
2. Verify your email using the link in your inbox.
3. Sign in at `/login` and access the dashboard at `/dashboard`.
4. Use `/forget-password` if you need to reset your password.

## Live Demo

[here](https://notes-app-ivory-gamma-57.vercel.app/)

## Contributing

Contributions are welcome. To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request against the `main` branch

Please keep pull requests focused and include a clear description of what changed and why.

## Contact Me

**Adhamxiii**

- GitHub: [@Adhamxiii](https://github.com/Adhamxiii)
- Email: [adhamxiii22@gmail.com](mailto:adhamxiii22@gmail.com)
