# Corbett Wild Flower Resort & Spa — Hotel Website

Hotel website for **Corbett Wild Flower Resort and Spa**, Ramnagar, Uttarakhand. Built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Redux Toolkit**.

**Repo:** [github.com/thakkur98/wild_flower_corbett](https://github.com/thakkur98/wild_flower_corbett)

## Features

- **Home**: Hero banner, welcome section, beautiful views & nature cards, featured rooms, gallery, amenities, CTA
- **Rooms**: Three categories — Jacuzzi Rooms, Pool View Rooms, Balcony with Garden View (with photos, prices in INR)
- **Room detail**: Image carousel with prev/next and thumbnails, description, amenities, Send inquiry / Call to book
- **Contact**: Inquiry form (mailto), Call button, location (Google Maps link), address
- **About**: Resort info, hotel amenities list, our values
- **How to book**: No payment online — inquiry or call; links to Contact and Rooms
- **Gallery**: Hotel and resort photos
- **Mobile**: Hamburger menu with full nav + Call + View on map

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Redux Toolkit + React-Redux (rooms, cart)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub (as **thakkur98**):
   ```bash
   git push -u origin main
   ```
   If the repo already has commits (e.g. only README), use:
   ```bash
   git push -u origin main --force
   ```

2. Go to [vercel.com](https://vercel.com) → Sign in with GitHub.

3. **Add New** → **Project** → Import **thakkur98/wild_flower_corbett**.

4. Framework: **Next.js** (auto-detected). Root: **./** → **Deploy**.

Vercel will build and deploy. Future pushes to `main` will auto-deploy.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint

## Config

- **Contact & location:** `src/lib/config.ts` (phone, email, address, mapUrl)
- **Rooms data:** `src/lib/data/rooms.ts` (names, descriptions, prices INR, images, amenities)
- **Currency:** INR (₹), formatted via `formatPrice()` from config
