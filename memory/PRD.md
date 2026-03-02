# Intentio Nova - One Page Corporate Website

## Problem Statement
One-page corporate website in Italian for Intentio Nova sagl (brand: Intentio, payoff: "evoluzione consapevole"). Target: HR, entrepreneurs, managers. Services: training, coaching, team coaching, assessment. Human-AImpact program. Primary goal: convert visits into contacts via form.

## Architecture
- **Frontend**: React + Tailwind CSS + shadcn/ui + Framer Motion
- **Backend**: FastAPI + MongoDB + Brevo email API
- **Fonts**: Outfit (headings), Inter (body), Playfair Display (partner logos)
- **Colors**: Violet #6D28D9 (primary), Blue #1E40AF (secondary), Dark #1E1B4B (impact section)

## What's Been Implemented (Dec 2025)
- Sticky header with anchor navigation + CTA
- Hero section with animated network canvas background (dots/nodes)
- Human-AImpact badge
- Trust/logos section (5 placeholder logos)
- Services section (3 cards: formazione, coaching, assessment)
- Typical situations section (6 pills)
- Human-AImpact dark section with 3 feature cards
- 4-step method timeline with output sidebar
- Partner ecosystem (Kitsap + Ariadne with external links)
- Observable results section (4 cards)
- Full contact form (nome, azienda, ruolo, email, telefono, area_interesse dropdown, obiettivo, tempistiche dropdown, privacy consent)
- Form submission saves to MongoDB + sends email via Brevo (admin notification + user confirmation)
- Server-side privacy consent validation
- Footer with full company details
- Mobile responsive design
- Smooth scroll navigation

## Core Requirements (Static)
- Italian language throughout
- Professional, clean, Swiss corporate aesthetic
- CTA "Richiedi un contatto" always visible
- Form saves to MongoDB + sends email via Brevo
- External links open in new tab
- Mobile first responsive

## Backlog
- P1: Replace trust logo placeholders with actual client logos
- P1: Privacy Policy page content
- P2: Cookie consent banner
- P2: Form analytics/tracking
- P3: Multi-language support
- P3: Blog/insights section
