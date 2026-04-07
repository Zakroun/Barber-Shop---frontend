# ✂️ Barber Royale — Frontend

> React + Vite · Tailwind CSS · Framer Motion · i18next

Premium barber shop website — bilingual (FR/EN), animated, fully responsive.

---

## ⚡ Quick Start

```bash
npm install
npm run dev       # → http://localhost:5173
npm run build     # Production build → /dist
npm run preview   # Preview production build
```

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Sticky nav + language switcher + mobile menu
│   │   └── Footer.jsx          # Footer with links, contact, barber pole
│   ├── ui/
│   │   ├── index.jsx           # Button, SectionHeader, Reveal, Stat, SkeletonCard
│   │   └── WhatsAppButton.jsx  # Floating animated WhatsApp CTA
│   └── sections/
│       ├── HeroSection.jsx     # Full-screen hero with stats & CTAs
│       ├── ServicesSection.jsx # 6 service cards (reusable: preview mode)
│       ├── TeamSection.jsx     # Barber grid with hover overlay
│       ├── GallerySection.jsx  # Filterable photo gallery
│       ├── CTASection.jsx      # Bold red call-to-action banner
│       └── ContactSection.jsx  # Booking form + contact info
├── pages/
│   ├── Home.jsx                # Hero + Services + Team + Gallery + CTA
│   ├── Services.jsx            # Full services page
│   ├── Team.jsx                # Full team page
│   ├── Gallery.jsx             # Full gallery with filters
│   └── Contact.jsx             # Contact + booking form page
├── data/
│   └── index.js                # Services, team members, gallery items
├── locales/
│   ├── fr.json                 # French translations (default)
│   └── en.json                 # English translations
├── i18n/
│   └── config.js               # i18next initialization
├── App.jsx                     # Router + AnimatePresence page transitions
└── main.jsx                    # Entry point
```

---

## 🌍 Internationalization (i18n)

Default language is **French**. Toggle to English via the flag button in the navbar — instant switch, no reload.

**Add or edit translations** in:
- `src/locales/fr.json`
- `src/locales/en.json`

**Use in any component:**
```jsx
import { useTranslation } from 'react-i18next';

const { t, i18n } = useTranslation();

t('nav.home')                    // → "Accueil" or "Home"
i18n.changeLanguage('en')        // switch language
i18n.language                    // current language: 'fr' | 'en'
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary background | `#000000` |
| Surface | `#0d0d0d` / `#060606` |
| Accent red | `#E10600` |
| Accent red dark | `#B80500` |
| Silver | `#C0C0C0` |
| Text muted | `#737373` |

**Fonts** (loaded from Google Fonts):
| Role | Font |
|------|------|
| Headings | Montserrat Black 900 |
| UI / Buttons | Poppins Medium 500 |
| Body text | Inter Regular 400 |

**Tailwind custom tokens** (in `tailwind.config.js`):
```js
colors: {
  'brand-red': '#E10600',
  'brand-red-dark': '#B80500',
  'brand-silver': '#C0C0C0',
}
fontFamily: {
  montserrat: ['Montserrat', 'sans-serif'],
  poppins:    ['Poppins', 'sans-serif'],
  inter:      ['Inter', 'sans-serif'],
}
```

---

## 🧩 Reusable Components

### `<Button>`
```jsx
import { Button } from '../components/ui';

<Button to="/contact" variant="primary" size="md">Réserver</Button>
<Button variant="outline">Voir Services</Button>
<Button href="https://..." variant="ghost">Lien externe</Button>
```
Props: `variant` (primary | outline | ghost) · `size` (sm | md | lg) · `to` · `href` · `onClick`

### `<SectionHeader>`
```jsx
<SectionHeader
  label="Excellence & Précision"   // small red label above
  title="Nos Services"              // large heading
  subtitle="Description..."         // optional paragraph
  center={true}                     // centered by default
/>
```

### `<Reveal>`
Scroll-triggered animation wrapper using Framer Motion:
```jsx
<Reveal delay={0.2} direction="up">   // up | left | right | fade
  <YourComponent />
</Reveal>
```

### `<ServicesSection preview />` / `<TeamSection preview />`
Pass `preview` prop to show only the first 3 items (used on Home page).

---

## 🗺️ Routing

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Landing page |
| `/services` | `Services` | All 6 services |
| `/team` | `Team` | 4 barber profiles |
| `/gallery` | `Gallery` | Filterable gallery |
| `/contact` | `Contact` | Booking form |

Page transitions use Framer Motion `AnimatePresence` in `App.jsx`.

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `react` + `react-dom` | UI framework |
| `react-router-dom` v6 | Client-side routing |
| `framer-motion` | Animations & page transitions |
| `react-icons` | GiScissors, GiRazor, FaWhatsapp, etc. |
| `i18next` + `react-i18next` | Bilingual FR/EN support |
| `tailwindcss` v3 | Utility-first CSS |

---

## 🔧 Customization

### Change barber info (services, team, gallery)
Edit `src/data/index.js` — all data is centralized there.

### Change colors
Update CSS custom values directly in Tailwind classes or `tailwind.config.js`.

### Add a new language
```js
// src/i18n/config.js
import ar from '../locales/ar.json';

resources: {
  fr: { translation: fr },
  en: { translation: en },
  ar: { translation: ar },   // ← add this
}
```

### Connect to real backend
In `ContactSection.jsx`, the form POSTs to `http://localhost:5000/api/contact`.
Change this URL for staging/production:
```js
const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, { ... });
```
Then set `VITE_API_URL=https://your-api.com` in a `.env` file.

---

## 🚀 Build & Deploy

```bash
npm run build        # Outputs to /dist
```

Deploy `/dist` to any static host:
- **Vercel**: connect repo → auto-deploys
- **Netlify**: drag & drop `/dist` or connect repo
- **GitHub Pages**: use `gh-pages` package

For React Router to work on Netlify, add:
```
# public/_redirects
/*    /index.html   200
```

---

## 💬 WhatsApp Button

Pre-configured in `WhatsAppButton.jsx`:
```
https://wa.me/212625702587?text=Hello%2C%20I%20want%20to%20book%20an%20appointment
```
Change the number or message directly in the component.

---

*Barber Royale Frontend © 2025*