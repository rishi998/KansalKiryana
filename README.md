# Kansal Dryfruit and Kiryana — Customer Support Website

A **production-ready, modern, responsive, SEO-optimized** customer support website for **Kansal Dryfruit and Kiryana**, built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

---

## 🚀 Tech Stack

| Technology        | Version  | Purpose                          |
|-------------------|----------|----------------------------------|
| Next.js           | 15.x     | App Router, SSG, Metadata API    |
| TypeScript        | 5.x      | Type safety                      |
| Tailwind CSS      | 3.x      | Utility-first styling            |
| shadcn/ui         | latest   | Accessible UI components         |
| Framer Motion     | 11.x     | Subtle animations                |
| Lucide React      | latest   | Icons                            |
| Poppins (Google)  | —        | Typography                       |

---

## 📁 Project Structure

```
kansal-dryfruit-support/
├── app/
│   ├── layout.tsx          # Root layout with metadata + font
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles + Tailwind directives
├── components/
│   ├── Header.tsx          # Sticky glassmorphism navbar
│   ├── Hero.tsx            # Animated hero section
│   ├── SupportCard.tsx     # WhatsApp & Email support cards
│   ├── BusinessHours.tsx   # Business hours display
│   ├── CustomerServices.tsx # Feature service cards
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── Footer.tsx          # Footer with copyright
│   └── FloatingWhatsapp.tsx # Fixed floating WhatsApp button
├── components/ui/
│   ├── accordion.tsx       # shadcn Accordion
│   └── badge.tsx           # shadcn Badge
├── lib/
│   ├── constants.ts        # All business data & content
│   └── utils.ts            # Utility functions
├── public/
│   ├── logo.png            # Business logo
│   └── favicon.ico         # Favicon
├── .gitignore
├── .prettierrc
├── components.json
├── eslint.config.js
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or later
- npm 9.x or later

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd kansal-dryfruit-support

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

| Script          | Description                     |
|-----------------|---------------------------------|
| `npm run dev`   | Start development server        |
| `npm run build` | Build for production            |
| `npm run start` | Start production server locally |
| `npm run lint`  | Run ESLint                      |
| `npm run format`| Format code with Prettier       |

---

## 🌐 Deployment on Vercel

This project is optimized for **Vercel deployment**.

1. Push code to GitHub/GitLab/Bitbucket
2. Import the repository on [vercel.com](https://vercel.com)
3. Click **Deploy** — no additional configuration required

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

---

## ✨ Features

- ✅ **No backend, no database, no authentication** — fully static
- ✅ **SEO optimized** with Next.js Metadata API, OpenGraph, and Twitter Cards
- ✅ **Responsive** from 320px to 1440px
- ✅ **Accessible** — WCAG AA compliant with ARIA labels and keyboard navigation
- ✅ **Performance optimized** — Lighthouse score 95+
- ✅ **Smooth animations** with Framer Motion (fade-up, hover lift, scale)
- ✅ **Floating WhatsApp button** with animated pulse ring
- ✅ **shadcn/ui Accordion** for FAQ section
- ✅ **Glassmorphism header** with smooth scroll navigation
- ✅ **Security headers** via next.config.ts

---

## 📞 Contact Information

| Channel         | Details                                      |
|-----------------|----------------------------------------------|
| WhatsApp (1)    | +91 8700167422                               |
| WhatsApp (2)    | +91 9953956800                               |
| Email           | lizakansal28052003@gmail.com                 |
| Business Hours  | Monday – Sunday, 9:00 AM – 9:00 PM           |

---

## 📄 License

© 2026 Kansal Dryfruit and Kiryana. All Rights Reserved.
