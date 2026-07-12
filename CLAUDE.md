# CLAUDE.md

## Project Overview

Barberplug — barbershop website for a Sofia-based barbershop.
Frontend only (React + Vite). All work lives in `frontend/`.
No backend. No test suite yet.

## Commands (run from `frontend/`)

npm run dev # Dev server at localhost:5173
npm run build # Production build
npm run lint # ESLint

## Structure

frontend/src/
pages/ # Home, Location — each owns its layout
components/ # Navbar, NavbarSimple, Footer, Map, Button
components/LocationCards/ # Per-city cards (SofiaCard, etc.)
assets/logo/ # Solid + transparent logo variants
assets/home/ # Hero and grid images
assets/locations/ # Per-city wallpapers

## Conventions

- Plain CSS co-located with components (no modules, no Tailwind)
- Scroll animations use useEffect + window scroll listeners, not CSS scroll timelines
- New cities: add a LocationCards/<City>Card/ with its own CSS + wallpaper in assets/locations/
- Map component uses an `isSofia: true` flag pattern — future cities follow same approach
- Booking links go to Fresha (fresha.com/bg)
- Facebook/Twitter social links are placeholder # hrefs

## Known Issues

- Navbar logo links to hardcoded http://localhost:5173/ — must change to <Link to="/"> before production
