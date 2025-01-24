# Next.js Starter Kit with Drizzle ORM and Tailwind CSS

A modern web application starter template built with Next.js, Drizzle ORM, and Tailwind CSS.

## Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager
- PostgreSQL database

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-project-name.git
cd your-project-name
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your database credentials and other configuration.

4. Set up the database:

```bash
npm run db:push
# or
yarn db:push
```

5. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## Features

- ⚡ Next.js 13+ with App Router
- 🎨 Tailwind CSS for styling
- 🗃️ Drizzle ORM for database operations
- 🔒 Environment variable configuration
- 📱 Responsive design

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `db:push` - Push database schema changes
- `lint` - Run ESLint

## License

MIT
