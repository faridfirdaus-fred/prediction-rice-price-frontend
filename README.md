# Rice Price Prediction Frontend

Web frontend for a rice price prediction service. It collects a target year and month from the user, calls the prediction API, and visualizes the result.

The backend lives in [rice-price-interpolation-backend](https://github.com/faridfirdaus-fred/rice-price-interpolation-backend).

## Features

- **Prediction form** for a target year and month
- **Chart visualization** of predicted and historical prices
- **Historical data view** for dates up to December 2023
- **Responsive UI** built with Tailwind CSS and shadcn/ui components

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI components | shadcn/ui, Radix UI |
| Styling | Tailwind CSS v4 |
| Charts | Recharts |
| Forms | React Hook Form + Zod |
| HTTP client | Axios |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Environment variables

Create `.env.local`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | Base URL of the prediction backend |

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
app/             # Pages and route handlers
components/      # UI components
components/ui/   # shadcn/ui primitives
lib/             # Helpers and API client
```

## Deployment

Deployable to Vercel. Set `NEXT_PUBLIC_API_URL` to the deployed backend URL.
