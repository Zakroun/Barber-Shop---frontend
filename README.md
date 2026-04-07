# ✂️ Barber Royale — Premium Barber Shop Website

> **Style. Précision. Excellence.**

Full-stack premium barber shop website: React (Vite) + Node.js/Express, bilingual (FR/EN), Framer Motion animations, booking form with Nodemailer.

---

## 🚀 Quick Start

### Frontend
```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # Production build

---

## 📁 Structure

```
src/
├── components/
│   ├── layout/         Navbar, Footer
│   ├── ui/             Button, SectionHeader, WhatsAppButton, Reveal
│   └── sections/       Hero, Services, Team, Gallery, CTA, Contact
├── pages/              Home, Services, Team, Gallery, Contact
├── data/               Services, team, gallery data
├── locales/            fr.json, en.json
└── i18n/               i18next config

---

## 🌍 i18n
Default: **French** — toggle to **English** via navbar flag.
Edit translations in `src/locales/fr.json` and `src/locales/en.json`.

## 🎨 Colors
- Black `#000000` · Red `#E10600` · Silver `#C0C0C0`
- Fonts: Montserrat (headings) · Poppins (UI) · Inter (body)
