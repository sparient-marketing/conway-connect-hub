# Conway Connect

PROJECT CONTEXT (paste first, once, to set the system's understanding):
Build a modern municipal government website for the City of Conway, South Carolina — 

a historic river town (est. 1732), home to Coastal Carolina University, and known for 

year-round signature events: "City of Halloween" and "Christmas in Conway." 

This is a REDESIGN of an outdated 2015-era municipal site (conwaysc.gov). The new site 

must feel like a trustworthy, modern local government resource FIRST, and a charming 

destination-city brand SECOND. Residents doing routine tasks (pay a bill, find a form, 

report an issue) should never feel like they're navigating a tourism site. Visitors 

looking for events should never feel like they've landed on a bureaucratic form portal. 

The design has to serve both without compromise.

Tech assumptions: React + Tailwind. Fully responsive (mobile-first). WCAG 2.1 AA 

compliant — this is a legal requirement for the client, not optional. Build accessible 

by default: proper heading hierarchy, alt text placeholders, visible focus states, 

sufficient color contrast, keyboard navigable menus.

DESIGN SYSTEM:
Establish this design system and apply it consistently across every screen:

BRAND COLORS (official City of Conway colors — do not substitute):

- Primary Green: #215731 (Pantone 357) — headers, primary nav, primary buttons, footer

- Secondary Tan/Brown: #8B634B (Pantone 876) — accents, secondary buttons, icons, dividers

- Neutral White: #FFFFFF — primary background

- Neutral Off-white: #F7F6F3 — section backgrounds, card backgrounds

- Text Dark: #1E2421 — body copy (not pure black — softer, warmer)

- Text Muted: #5C6660 — secondary text, captions, metadata

- Alert/Emergency Red: #B3261E — reserved ONLY for emergency banners/alerts, never decorative

- Success/Confirmation Green (lighter tint of primary): #4A7A5C — form confirmations, success states

Do not introduce a bright "event" accent color (like orange for Halloween) into the 

core UI chrome — keep the civic shell neutral and let event-specific LANDING PAGES 

carry seasonal accent colors instead (see section 4). This keeps the government site 

credible while still letting Halloween/Christmas content feel festive on its own pages.

TYPOGRAPHY:

- Headings: A confident, slightly humanist serif or serif-adjacent display font 

  (e.g., "Fraunces," "Source Serif 4," or "Lora") — signals "historic river town," 

  not generic tech startup

- Body: A clean, highly legible sans-serif (e.g., "Inter," "Source Sans 3") — optimized 

  for accessibility and long-form reading (agendas, notices, forms)

- Minimum body text: 16px, line-height 1.6

- Clear type scale: H1 40-48px / H2 32px / H3 24px / H4 20px / Body 16-18px / Small 14px

SPACING & LAYOUT:

- 8px base spacing unit, 12-column responsive grid

- Generous whitespace — the old site is dense and cluttered; the new one should breathe

- Max content width 1280px, centered, with full-bleed hero/banner sections only

COMPONENTS TO DEFINE ONCE, REUSE EVERYWHERE:

- Primary button (filled green, white text, rounded-md, hover darkens)

- Secondary button (outlined tan/brown, hover fills)

- Card component (white bg, subtle shadow, rounded-lg, used for news/events/departments)

- Alert banner (dismissible, color-coded by severity: info/warning/emergency)

- Breadcrumb trail component

- Tag/category pill component (used for event filtering)

- Accessible dropdown nav component with keyboard support


GLOBAL SITE CHROME (build once, applies to every page):
HEADER (sticky on scroll, collapses to hamburger under 1024px):

- Top utility bar (thin strip above main header): language selector (Google Translate-

  style widget placeholder, prominent not hidden), "Pay a Bill" quick link, "Report an 

  Issue" quick link, social icons

- Main header: City seal/logo (left), primary nav (center/right), prominent search icon 

  that expands into a full-width AI-powered search bar overlay

- Primary nav top-level items: Government | Departments | Business | Residents | 

  Visitors & Events | I Want To... 

- "I Want To..." is a mega-menu shortcut hub (pay a bill, apply for a permit, find a 

  job, report a problem, view agendas, contact council) — this solves the RFQ's ask 

  for "citizen-focused services" being easy to find

ALERT BANNER SLOT:

- Full-width banner slot directly under header, hidden when empty, shows for 

  emergency alerts / public notices / seasonal event countdowns (e.g., "43 days until 

  City of Halloween — See the full schedule"). Dismissible, but reappears per session 

  if severity = emergency.

FOOTER:

- 4-column layout: (1) City contact info + address + seal, (2) Quick Links 

  (Departments, Agendas, Ordinances, Employment), (3) Resources (Forms, FAQs, Public 

  Notices, GIS Data, Procurement), (4) Connect (social icons, newsletter signup, 

  "Download our App" badges — placeholder for future PWA/app)

- Bottom strip: copyright, accessibility statement link, privacy policy link, sitemap 

  link, ADA compliance link

AI ASSISTANT ENTRY POINT:

- Small persistent chat bubble, bottom-right, all pages — "Ask Conway" branded 

  assistant. Opens a chat panel (mock the UI, doesn't need real AI logic) with a 

  friendly greeting and 3-4 suggested quick questions ("How do I pay my water bill?", 

  "When is trash pickup?", "What's happening this weekend?")

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fe6b0e6d-4ed4-4c43-a5b6-528d635cf168).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
