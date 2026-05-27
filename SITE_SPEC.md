# Grúas Vargas — Site Specification
**Version:** 1.0 | **Date:** 2026-05-19 | **Author:** Josue Vargas

> **Purpose of this document:** Complete design, content, and technical specification for the Grúas Vargas website rebuild. All decisions made here should be treated as the source of truth before any component is written.

---

## 0. Project Intent

This is a real business website for Grúas Vargas S.A. (Guatemala), a crane rental and sales company with 30+ years of operation. The site must serve two audiences simultaneously:

1. **Business clients** — companies and individuals looking to rent or purchase cranes, forklifts, and heavy machinery in Guatemala. Primary goal is trust and lead generation.
2. **Recruiters and hiring managers** — the project is a portfolio centerpiece for SWE/frontend/product applications in 2026. It must demonstrate frontend engineering excellence.

The design target is: **cinematic, industrial, premium, trustworthy** — closer to a Porsche product page or a SpaceX launch site than a local contractor directory.

---

## 1. Brand Identity

### 1.1 Brand Colors (Non-Negotiable)
The machines are painted orange, dark green, and green — in that order. The palette is refined here for digital use but stays true to the physical brand.

```
Design Token         Hex         Usage
─────────────────────────────────────────────────────────
--color-orange       #D4560F     Primary brand accent, CTAs, highlights
--color-orange-warm  #E8651A     Hover states, hover glows
--color-green-dark   #1B3D2B     Brand secondary, footers, deep sections
--color-green        #2E6B4A     Brand tertiary, tags, accents
--color-green-light  #4A9B6E     Icon accents, subtle highlights

--color-black        #080808     Page background (cinematic base)
--color-steel        #111111     Card/panel backgrounds
--color-iron         #1E1E1E     Borders, dividers
--color-ash          #5A5A5A     Muted text, disabled states
--color-fog          #9A9A9A     Captions, secondary labels
--color-cream        #F0EBE3     Warm white — primary text on dark
--color-white        #FAFAF9     Pure text, high-contrast elements
```

**Color Philosophy:** The site is predominantly dark — near-black backgrounds with warm cream text. Orange is used sparingly and intentionally (CTAs, active states, pull-quote accents). Green signals trust, service categories, and confirmations. This is NOT a light/white site.

### 1.2 Typography System

**Font Stack:**

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Hero | **Bebas Neue** | 400 (it's all caps mono-weight) | Massive hero text, section titles |
| Heading | **Barlow Condensed** | 700, 800 | Section headers, card titles |
| Subheading / UI | **Barlow** | 500, 600 | Nav items, labels, tags |
| Body | **Inter** | 400, 500 | Paragraphs, descriptions |
| Mono / Data | **Space Mono** | 400 | Specs, tonnage data, measurements |

All fonts via Google Fonts. Load with `font-display: swap`.

**Type Scale (fluid, clamp-based):**
```
--text-xs:    clamp(0.75rem, 1vw, 0.875rem)
--text-sm:    clamp(0.875rem, 1.2vw, 1rem)
--text-base:  clamp(1rem, 1.5vw, 1.125rem)
--text-lg:    clamp(1.125rem, 2vw, 1.375rem)
--text-xl:    clamp(1.375rem, 2.5vw, 1.75rem)
--text-2xl:   clamp(1.75rem, 3vw, 2.25rem)
--text-3xl:   clamp(2.25rem, 4vw, 3rem)
--text-4xl:   clamp(3rem, 6vw, 5rem)
--text-hero:  clamp(4rem, 10vw, 10rem)
```

**Typography Rules:**
- Bebas Neue is ONLY for display text. Never use it for body copy.
- All-caps labels use `letter-spacing: 0.15em` minimum.
- Line height for display text: 0.9–1.0. For body: 1.6–1.7.
- No more than 3 font weights visible on any single screen.

### 1.3 Design Principles

1. **Scale is the message.** Cranes are enormous. The site should feel enormous. Use full-viewport sections, oversized type, and edge-to-edge photography. Never shrink the experience.

2. **Dark base, warm accents.** The cinematic feeling comes from dark-dominant pages where light (cream text, orange accents) feels like illumination — not a dark mode toggle.

3. **Typography carries identity.** Bebas Neue + Barlow Condensed should be immediately recognizable as the brand voice. Typography does the heavy lifting; imagery amplifies it.

4. **Restraint is premium.** Orange appears maximum 2–3 times per viewport. Whitespace (darkspace) is generous. No section should feel visually crowded.

5. **Motion is purposeful.** Every animation has a reason. Reveals create reveal. Parallax creates depth. Counters create credibility. No motion exists only to look clever.

6. **Real photography over everything.** Stock imagery is a last resort. When real photos are available, they lead. They get cinematic treatment: grain overlay, vignette, careful contrast.

### 1.4 Texture & Visual Language
- Subtle film grain overlay on hero sections (CSS noise texture, ~3–5% opacity)
- Industrial grid/dot patterns as section backgrounds at low opacity
- Horizontal rule dividers: 1px, `--color-iron`, with optional orange dot at center
- Photo treatment: high contrast, slightly desaturated, warm grade
- Icon style: thin stroke (1.5–2px), `lucide-react`, cream or orange color

---

## 2. Motion & Animation Philosophy

### 2.1 Core Principles
- **Everything enters once.** Elements animate in on scroll, never loop.
- **Stagger is character.** Lists, grids, and stat groups animate in with 60–80ms stagger between items.
- **Speed is premium.** Fast entrances (300–500ms), slow parallax (continuous), instant hover response.
- **No bounce.** Easing is `easeOut` or custom cubic-bezier. Never spring bounce on business content.

### 2.2 Motion Tokens
```
--ease-out:     cubic-bezier(0.16, 1, 0.3, 1)   // smooth deceleration
--ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1)    // standard
--ease-cinematic: cubic-bezier(0.25, 0.46, 0.45, 0.94) // film-like

--duration-fast:   200ms
--duration-base:   350ms
--duration-slow:   600ms
--duration-cinematic: 1000ms
```

### 2.3 Animation Inventory

| Interaction | Behavior |
|---|---|
| Page load | Branded loading screen → logo reveal → fade out |
| Section entrance | Fade up, Y: 40px → 0, opacity: 0 → 1 |
| Hero text | Character-by-character reveal (Bebas Neue headlines only) |
| Counters | Count up from 0 when scrolled into view |
| Parallax | Background images move at 0.4× scroll speed |
| Cards (hover) | translateY(-6px), box-shadow elevate, 250ms |
| Magnetic buttons | Subtle cursor-follow magnetic effect (±15px max) |
| Nav links | Underline draw from left, orange color |
| Image reveal | Clip-path wipe from left (cinematic curtain) |
| Section transitions | Overlap scroll with opacity crossfade |
| Custom cursor | Dot + ring, ring scales on hover, fills on click |

### 2.4 What to Avoid
- Horizontal scroll sections (hurts mobile, annoys users)
- Looping animations in body content (distracting)
- Transition delays longer than 100ms on interactive elements
- Any animation that blocks content access
- Heavy JS-only scroll hijacking

---

## 3. Site Architecture

### 3.1 Pages & Routes

```
/                          → Home (landing page, full narrative)
/nosotros                  → About Us
/galeria                   → Gallery / Projects

/gruas/renta               → Cranes for Rent
/gruas/venta               → Cranes for Sale

/montacargas/renta         → Forklifts for Rent
/montacargas/venta         → Forklifts for Sale

/maquinaria/renta          → Machinery for Rent
/maquinaria/venta          → Machinery for Sale

/camiones/renta            → Trucks / Lowboys for Rent
/camiones/venta            → Trucks / Lowboys for Sale

/accesorios                → Accessories & Rigging

/contacto                  → Contact Page (standalone)
```

**Language toggle:** `/es` and `/en` prefixes OR a language context stored in React state/localStorage. Recommend React Context + i18next. Default language: Spanish.

### 3.2 Navigation Structure

**Primary Nav (Desktop — sticky, transparent → solid on scroll):**
```
[LOGO]  Inicio  Equipos ▾  Galería  Nosotros  Contacto  [ES | EN]  [Solicitar Cotización →]
```

**Equipos Megamenu:**
```
┌─────────────────────────────────────────────────────┐
│  GRÚAS          MONTACARGAS    MAQUINARIA           │
│  · Renta        · Renta        · Renta              │
│  · Venta        · Venta        · Venta              │
│                                                     │
│  CAMIONES           ACCESORIOS                      │
│  · Renta            · Ver catálogo                  │
│  · Venta                                            │
└─────────────────────────────────────────────────────┘
```

**Mobile Nav:** Full-screen slide-in overlay. Dark background, large touch targets, language toggle at bottom. No hamburger menu inside hamburger menu.

### 3.3 Footer Structure
```
Col 1: Logo + tagline + social icons (Facebook, TikTok, WhatsApp)
Col 2: Servicios (quick links to equipment pages)
Col 3: Empresa (Nosotros, Galería, Contacto)
Col 4: Contacto (addresses, phone, email, WhatsApp button)

Bottom bar: © 2025 Grúas Vargas S.A. | Diseñado por JV — Josue Vargas [links to portfolio]
```

---

## 4. Page Specifications

### 4.1 Home Page

The home page is a cinematic, scroll-driven narrative. It tells the story: **scale → credibility → services → trust → action.**

#### Section 1: Hero (Full Viewport)
- **Background:** Autoplay muted looped video of crane operation at golden hour. Fallback: single dramatic full-bleed photo.
- **Overlay:** Dark gradient (bottom 40% fades to `--color-black`). Subtle film grain.
- **Content (centered, then left-aligned):**
  - Eyebrow label: `GRÚAS VARGAS S.A.` — Barlow Condensed, 14px, cream, letter-spacing 0.25em
  - Main headline: Bebas Neue, `--text-hero`, two lines max. Example: `LEVANTAMOS LO IMPOSIBLE` / `WE LIFT THE IMPOSSIBLE`
  - Subtext: Inter 500, `--text-lg`, fog color. One sentence max.
  - CTA buttons: `[Solicitar Cotización]` (orange, filled) + `[Ver Equipos]` (cream, outlined)
- **Bottom bar:** Floating horizontal strip with 3 stats: `30+ AÑOS` / `115 TONELADAS` / `3 UBICACIONES` — separated by vertical lines.
- **Scroll indicator:** Animated down arrow or scroll text.

#### Section 2: Numbers / Credibility Bar
- Full-width dark section, no padding.
- 4 animated counters: **30+ años de experiencia**, **115T capacidad máxima**, **3 ubicaciones**, **24/7 servicio**
- Numbers animate up when scrolled into view (countUp).
- Typography: Bebas Neue for numbers, Barlow for labels.
- Thin orange line above and below.

#### Section 3: Services Overview
- Dark background with subtle industrial grid texture.
- Section header: `NUESTROS SERVICIOS` — Bebas Neue, oversized, with small eyebrow.
- 6-card grid (3×2 on desktop, 2×3 on tablet, 1×6 on mobile).
- Each card: full-bleed image, dark gradient, icon, service name, short line, hover reveals arrow/CTA.
- Categories: Renta de Grúas, Venta de Equipo, Montacargas, Maquinaria Pesada, Transporte, Asistencia Vial.

#### Section 4: Featured Equipment (Horizontal Scroll Cards)
- "EQUIPO DESTACADO" — showcase 3–4 hero pieces of equipment.
- Large cards (~500px tall on desktop), full-bleed photo, specs overlay on hover.
- Smooth horizontal drag scroll on mobile.

#### Section 5: About / Story
- Split layout: left = large crane photo with parallax. Right = text.
- Eyebrow: `DESDE 1990`
- Headline: `Más de 30 años moviendo Guatemala` (bilingual)
- 2–3 short paragraphs about the company. No fluff.
- Locations mentioned: Zacapa, Izabal, Petén.
- CTA: `Conocer más →`

#### Section 6: Why Choose Us (Industrial Feature Strip)
- 4 horizontal feature blocks with icon + short title + 1-line description.
- Dark steel background, cream text, orange icons.
- Features: Flota certificada / Operadores especializados / Respuesta 24/7 / Cobertura nacional

#### Section 7: Gallery Teaser
- Masonry or CSS grid of 6 photos from real job sites.
- Hover: slight zoom + dark overlay + "Ver galería →" prompt.
- Full-width `[Ver Galería Completa]` button below.

#### Section 8: Contact / CTA Strip
- Full-width dark section.
- Large Bebas Neue headline: `¿LISTO PARA TU PRÓXIMO PROYECTO?`
- WhatsApp primary CTA (green, icon) + Email secondary CTA.
- Background: subtle diagonal line industrial texture.

---

### 4.2 Equipment Category Pages (Renta / Venta)

These pages handle: `/gruas/renta`, `/montacargas/venta`, etc.

#### Page Hero (shorter — 50vh)
- Full-bleed photo or video of that equipment type.
- Overlay with category name in Bebas Neue.
- Breadcrumb: `Inicio → Grúas → Renta`
- Tab switcher: `[RENTA] [VENTA]` — switches between the two views without full page reload.

#### Inventory Grid
- Filter bar: by capacity, type, availability (when data exists). For now: visual-only tabs.
- Cards: Image (16:9), Equipment name (Barlow Condensed), key spec badges (tonnage, reach), short description, `[Solicitar Información]` button.
- Placeholder cards for unpopulated inventory — show skeleton with "Próximamente" state.
- Load: 6 items initial, `[Cargar más]` button below.

#### Individual Equipment Card Detail (modal or page)
- When data is populated: model, specs table, image gallery (swiper), availability badge, WhatsApp/form CTA.

---

### 4.3 Gallery / Proyectos Page

This page is a portfolio within a portfolio — showcasing real job sites.

#### Layout
- Masonry image grid (CSS columns, no JS library needed).
- Lightbox on click (simple Framer Motion overlay).
- Optional: category filter tabs (Grúas / Montacargas / Maquinaria / Proyectos Especiales).
- Each image: real site photo. Caption optional.
- Hero: short cinematic text — `NUESTRO TRABAJO HABLA POR SÍ MISMO`

---

### 4.4 About / Nosotros Page

#### Sections:
1. **Hero** — Full-bleed photo of the team or yard, headline `DESDE 1990`
2. **Story** — Timeline from 1990 to present. Horizontal scroll timeline (desktop) / vertical (mobile).
3. **Mission & Vision** — 2-column split, clean and direct.
4. **Locations** — 3 location cards with address, region photo, embedded map link.
5. **Team** (optional, if photos available) — headshots or just roles.

---

### 4.5 Contact Page

#### Layout: 2-column
- **Left:** Contact info — Phone, WhatsApp (primary CTA), Email, 3 location addresses.
- **Right:** Contact form.

#### Form Fields:
```
Nombre completo *
Empresa (opcional)
Correo electrónico *
Teléfono / WhatsApp *
Tipo de equipo needed [dropdown]
Mensaje / Descripción del proyecto *
[Enviar Solicitud →]
```

#### Backend Integration:
- Form submits to `/api/contact` — **Vercel Serverless Function** (not the Express server).
- `nodemailer` sends email to `gruasvargaszacapa@yahoo.es` via Yahoo SMTP.
- WhatsApp deep link button: `https://wa.me/50258653835?text=...` with pre-filled message.
- Form validation: client-side (required fields, email format) + server-side (in the serverless function).
- Success state: animated confirmation message.
- The `/backend/` folder remains for local development only. Production uses `/api/contact.js` as a Vercel serverless function.

---

## 5. Component System

### 5.1 Component Inventory

| Component | Description |
|---|---|
| `<Navbar />` | Sticky, transparent → dark on scroll. Desktop megamenu. Mobile overlay. Language toggle. |
| `<Hero />` | Video/image hero with configurable content. |
| `<StatCounter />` | Animated number counter, triggers on scroll into view. |
| `<ServiceCard />` | Image card with overlay text, hover reveal. |
| `<EquipmentCard />` | Inventory card with photo, name, specs, CTA. |
| `<GalleryGrid />` | Masonry grid with lightbox. |
| `<SectionHeader />` | Eyebrow + Bebas Neue headline + optional subtext. Reusable. |
| `<CTAStrip />` | Full-width CTA section with headline + buttons. |
| `<ContactForm />` | Controlled form with validation + submit handler. |
| `<WhatsAppButton />` | Floating + inline variant. Deep links to WhatsApp with message. |
| `<LanguageToggle />` | ES / EN switcher, updates i18n context. |
| `<LoadingScreen />` | Brand loading sequence on first page visit. |
| `<CustomCursor />` | Dot + ring cursor, scales on hover, tasteful. |
| `<ParallaxSection />` | Wrapper that applies CSS parallax to background images. |
| `<Footer />` | Full footer with 4-column layout. |
| `<SocialBar />` | Fixed floating social icons (right side). |
| `<Lightbox />` | Full-screen image viewer with Framer Motion. |

### 5.2 Design System Tokens (Tailwind Extension)
The Tailwind config should be extended with:
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: {
        orange: '#D4560F',
        'orange-warm': '#E8651A',
        'green-dark': '#1B3D2B',
        green: '#2E6B4A',
        'green-light': '#4A9B6E',
      },
      surface: {
        base: '#080808',
        steel: '#111111',
        iron: '#1E1E1E',
      },
      text: {
        cream: '#F0EBE3',
        fog: '#9A9A9A',
        ash: '#5A5A5A',
      }
    },
    fontFamily: {
      display: ['Bebas Neue', 'sans-serif'],
      heading: ['Barlow Condensed', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
    }
  }
}
```

---

## 6. Technical Architecture

### 6.1 Frontend Stack
- **React 19** + **React Router v7**
- **Vite** (build tool)
- **Tailwind CSS v3** (extended design tokens)
- **Framer Motion** (scroll animations, page transitions, counters)
- **react-i18next** (bilingual ES/EN) — **TO ADD**
- **Lucide React** (icons)
- **Swiper** (equipment image carousels only)

### 6.2 Backend Stack (Vercel Serverless)
- **Deployment:** Vercel (frontend + serverless functions in one repo)
- **Contact API:** `/api/contact.js` — Vercel Edge/Serverless Function, replaces Express for production
- **nodemailer** (contact form → email via Yahoo SMTP)
- **Local dev:** `/backend/server.js` (Express) still works via `npm run dev` in backend folder
- **No separate server to deploy** — Vercel handles everything

#### Vercel Project Structure Addition:
```
/api/
└── contact.js    ← Vercel serverless function (POST /api/contact)
vercel.json       ← Routing config (SPA fallback + API routes)
```

#### vercel.json:
```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 6.3 New Dependencies to Install
```bash
# Frontend
npm install react-i18next i18next i18next-browser-languagedetector

# No new backend deps needed — nodemailer already installed
```

### 6.4 Folder Structure (Target State)
```
src/
├── assets/
│   ├── images/          (organized by category)
│   └── videos/          (hero video, optimized webm + mp4)
├── components/
│   ├── ui/              (Button, Card, SectionHeader, Divider, etc.)
│   ├── layout/          (Navbar, Footer, SocialBar)
│   ├── sections/        (Hero, StatBar, Services, Gallery, etc.)
│   └── forms/           (ContactForm, WhatsAppButton)
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   └── equipment/       (GruasRenta, GruasVenta, etc.)
├── data/
│   └── equipment.js     (inventory data, bilingual)
├── i18n/
│   ├── index.js
│   └── locales/
│       ├── es.json
│       └── en.json
├── hooks/
│   ├── useScrollAnimation.js
│   ├── useCounter.js
│   └── useParallax.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

### 6.5 Performance Requirements
- Lighthouse score target: **90+ all categories**
- Images: WebP format, `loading="lazy"`, properly sized with `srcset`
- Video: `<video autoplay muted loop playsinline>`, WebM primary + MP4 fallback, compressed <10MB
- Fonts: Preloaded, `font-display: swap`
- Code splitting: Route-based lazy loading with `React.lazy` + `Suspense`
- No layout shifts: set explicit dimensions on images
- First Contentful Paint target: <2.5s on 4G

---

## 7. Bilingual Strategy (ES / EN)

### 7.1 Implementation
- Use `react-i18next` with a language context.
- Default language: **Spanish (es)**.
- Language persisted in `localStorage`.
- Language toggle in navbar: `ES | EN` — switching is instant, no page reload.
- URL strategy: keep same routes for both languages (no `/en/` prefix needed for this scale).

### 7.2 Translation Scope
- All UI text, navigation, CTAs, section headers.
- Page-level content (About, Contact, Services descriptions).
- Equipment names stay in their manufacturer names (no translation).
- Spec data (tonnage, dimensions) stays in international format.

### 7.3 File Structure
```json
// i18n/locales/es.json
{
  "nav": {
    "home": "Inicio",
    "equipment": "Equipos",
    "gallery": "Galería",
    "about": "Nosotros",
    "contact": "Contacto",
    "quote": "Solicitar Cotización"
  },
  "hero": {
    "eyebrow": "GRÚAS VARGAS S.A.",
    "headline": "LEVANTAMOS LO IMPOSIBLE",
    "subtext": "Más de 30 años brindando soluciones de izaje y transporte en Guatemala.",
    "cta_primary": "Solicitar Cotización",
    "cta_secondary": "Ver Equipos"
  }
  // ...
}
```

---

## 8. Contact & Lead Generation

### 8.1 WhatsApp Integration
- **Floating WhatsApp button:** Fixed bottom-right, always visible. Opens `wa.me` link.
- **CTA Strip button:** Full WhatsApp CTA on homepage.
- **Equipment page CTA:** "Consultar por WhatsApp" on every equipment card.
- Pre-filled message template: `"Hola, estoy interesado en [EQUIPO] para [RENTA/VENTA]. Me gustaría más información."`

### 8.2 Email Form
- Endpoint: `POST /api/contact`
- nodemailer sends to `gruasvargaszacapa@yahoo.es`
- Email template: clean HTML with company branding
- Required env vars: `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`
- Add `.env.example` to repo (no actual secrets committed)

### 8.3 Phone CTAs
- Click-to-call links: `<a href="tel:+50258653835">` on mobile
- PBX number prominent in navbar (desktop) and footer

---

## 9. Photography & Media Guidelines

### 9.1 Real Photo Usage
All real photos from the uncle's company fleet and job sites should be:
- Edited with consistent color grade: high contrast, slightly warm tone, slightly desaturated background
- Stored in `/public/images/` organized by category:
  ```
  /images/
  ├── gruas/      (crane photos)
  ├── montacargas/
  ├── maquinaria/
  ├── camiones/
  ├── projects/   (job site photos for gallery)
  └── hero/       (full-bleed hero images)
  ```
- Exported as WebP at 1920px wide for hero, 800px for cards
- Alt text in both ES and EN for accessibility

### 9.2 Video
- Hero video: Golden hour crane operation, 10–30 seconds, looped
- Format: WebM (primary) + MP4 (fallback)
- Max size: 10MB compressed (use HandBrake or ffmpeg)
- Autoplay, muted, loop, playsinline — no controls shown

### 9.3 Temporary Placeholders
Until real media is inserted:
- Use specific image slots with labeled placeholder components
- Dimensions are set correctly so layout doesn't shift when replaced
- Document which images need to be replaced in a `MEDIA_CHECKLIST.md`

---

## 10. Portfolio Showcase Notes

This section documents what a recruiter should observe when reviewing this project.

### 10.1 Technical Highlights to Showcase
| Feature | What it demonstrates |
|---|---|
| Custom design system (Tailwind tokens) | Frontend architecture, design thinking |
| Framer Motion scroll animations | Motion design, performance awareness |
| react-i18next bilingual | Internationalization, scalable code |
| Custom cursor + magnetic buttons | Advanced CSS/JS interaction engineering |
| Video hero with fallbacks | Media optimization, progressive enhancement |
| Parallax sections | CSS + scroll performance |
| Animated stat counters | Intersection Observer, Framer Motion |
| Working contact form + nodemailer | Full-stack integration |
| WhatsApp deep link system | Real-world product thinking |
| Responsive-first layouts | Mobile engineering quality |
| Lazy-loaded routes | Code splitting, performance |
| Lighthouse 90+ scores | Performance culture |

### 10.2 How to Present This Project
- GitHub README should include: live demo link, tech stack, screenshots, architecture notes
- Add to portfolio as "Full-stack marketing site for family business — real production traffic"
- Screenshot Lighthouse scores
- Record a 60-second walkthrough video showing scroll animations, mobile view, bilingual toggle
- Note the bilingual implementation and the full-stack contact form separately

---

## 11. Build Phases

### Phase 1 — Foundation (Design System + Layout Shell)
- [ ] Update Tailwind config with design tokens
- [ ] Load Google Fonts (Bebas Neue, Barlow Condensed, Inter, Space Mono)
- [ ] Build `<Navbar />` (new: transparent → solid, megamenu, mobile overlay)
- [ ] Build `<Footer />` (new layout)
- [ ] Set up `react-i18next` + locale files (ES/EN shell)
- [ ] Build `<SectionHeader />` reusable component
- [ ] Build `<Button />` component (variants: filled-orange, outline-cream, ghost)
- [ ] Global CSS: scrollbar style, selection color, body background

### Phase 2 — Home Page
- [ ] Video hero section with fallback image
- [ ] Stat counter bar (Framer Motion countUp)
- [ ] Services card grid with hover animations
- [ ] Featured equipment horizontal section
- [ ] About split section with parallax
- [ ] Gallery teaser (6 photos, masonry)
- [ ] WhatsApp CTA strip
- [ ] Loading screen (first visit only)
- [ ] Custom cursor component

### Phase 3 — Equipment Pages
- [ ] Shared equipment page layout (hero + filter bar + grid)
- [ ] `<EquipmentCard />` component
- [ ] Populate `equipment.js` data file with all categories
- [ ] Renta/Venta tab switcher
- [ ] Skeleton placeholder cards for unpopulated inventory

### Phase 4 — Supporting Pages
- [ ] Gallery page (masonry + lightbox)
- [ ] About/Nosotros page (timeline + locations)
- [ ] Contact page (form + WhatsApp + locations)

### Phase 5 — Backend & Integration
- [ ] Fix and test contact form (`POST /api/contact`)
- [ ] Add `express-validator` server-side validation
- [ ] HTML email template for nodemailer
- [ ] `.env.example` + deployment config
- [ ] WhatsApp deep link system (floating + inline)

### Phase 6 — Polish & Portfolio Prep
- [ ] Audit all animations (timing, easing, performance)
- [ ] Lighthouse audit + optimizations
- [ ] Full bilingual content audit (ES/EN complete)
- [ ] Mobile QA on real devices
- [ ] SEO: meta tags, og:image, structured data
- [ ] GitHub README with screenshots + live demo
- [ ] Record demo video

---

## 12. Open Questions / Decisions Pending

| # | Question | Status |
|---|---|---|
| 1 | Hero video files | ✅ Available — multiple videos provided by client |
| 2 | Full inventory data (models, specs, photos) | Pending — design uses placeholders |
| 3 | Deployment target | ✅ Vercel |
| 4 | Custom domain | Pending |
| 5 | Team photos for About page | Pending |
| 6 | Email credentials for nodemailer (Yahoo SMTP) | Needs `.env` setup before deploy |
| 7 | SEO requirements | Pending |
| 8 | Footer credit | ✅ "Diseñado por JV — Josue Vargas" |

### 9.1 Video Asset Instructions
Place video files in `public/videos/`. Required files:
```
public/
└── videos/
    ├── hero.webm        ← Primary (WebM, compressed <8MB, 1920×1080)
    ├── hero.mp4         ← Fallback (MP4, same compression)
    └── hero-mobile.mp4  ← Optional: portrait crop for mobile (9:16)
```
If your videos are large, compress with HandBrake or ffmpeg:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -an -movflags +faststart hero.mp4
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 33 -b:v 0 -an hero.webm
```

---

*End of specification. This document should be updated as decisions are made. Do not begin building any section without consulting the relevant spec section first.*
