# Intentio Nova - One Page Corporate Website

## Problem Statement
One-page corporate website in Italian for Intentio Nova sagl (brand: Intentio, payoff: "evoluzione consapevole"). Target: HR, entrepreneurs, managers. Services: training, coaching, team coaching, assessment. Human-AImpact program. Primary goal: convert visits into contacts via form.

## Architecture
- **Frontend**: React + Tailwind CSS + shadcn/ui + Framer Motion
- **Backend**: FastAPI + MongoDB + Brevo email API
- **Fonts**: Outfit (headings), Inter (body), Playfair Display (partner logos)
- **Colors**: Violet #6D28D9 (primary), Blue #1E40AF (secondary), Dark #1E1B4B (impact section)

## What's Been Implemented (Dec 2025)
### V2 - Complete Redesign (BearingPoint-inspired)
- Full-screen hero with professional image overlay + dark gradient
- Header transparent-to-white scroll behavior with logo inversion
- 3 narrative service pillars: Team Connection, Team Evolution, Teaming with AI (alternating image/text split layouts)
- Situations section (6 elegant cards)
- Human-AImpact immersive dark section
- 4-step method timeline
- Chi Siamo section with 3 team profile placeholders
- Partner ecosystem (Kitsap + Ariadne)
- Observable results with numbered cards
- CTA band "Tutto inizia da una conversazione"
- Contact form split layout (intro left, form right)
- Trust logos moved to bottom above footer
- Footer with full company details
- Brevo email integration (admin + user confirmation)
- Server-side privacy consent validation
- Mobile responsive design
- Anchor navigation

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
