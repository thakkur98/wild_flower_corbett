# wild_flower_corbett — Dummy Website

A dummy hotel website built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Redux Toolkit**.

## Features

- **Home**: Hero, featured rooms, amenities, CTA
- **Rooms**: List all rooms with cards; click through to room detail
- **Room detail**: Images, description, amenities, date picker to add to booking cart
- **Cart**: Review items, confirm booking (dummy — no real payment)
- **My Bookings**: List of confirmed dummy bookings (from Redux)
- **About** & **Contact**: Static content and a simple contact form (submit shows success message only)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Redux Toolkit + React-Redux (rooms data, cart, bookings)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### If the app doesn’t load on localhost

1. **Free port 3000** if something else is using it:
   ```bash
   # Find what’s on port 3000 (macOS)
   lsof -ti:3000
   # Stop it (use the PID from above, or)
   kill $(lsof -ti:3000)
   ```
2. **Start the dev server** and wait until you see **“Ready in …”**:
   ```bash
   npm run dev
   ```
3. Open **http://localhost:3000** in your browser (after “Ready” appears).
4. If you see **“EMFILE: too many open files”**, run this once then start again:
   ```bash
   ulimit -n 10240
   npm run dev
   ```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — run ESLint

## Redux State

- **rooms**: List of dummy rooms (from `roomsSlice`)
- **cart**: Items added from room detail (check-in, check-out, guests, nights)
- **bookings**: Confirmed bookings after “Confirm Booking” on cart (dummy only)

All data is in-memory; no backend or database.

