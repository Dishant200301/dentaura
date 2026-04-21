# DentAura - Premium Dental Care Website

A modern, responsive dental care website built with React, TypeScript, and Tailwind CSS. Features a beautiful UI with smooth animations, comprehensive service listings, team profiles, and appointment booking functionality.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3 with custom animations
- **UI Components:** Radix UI primitives + shadcn/ui
- **Animations:** GSAP (GreenSock) + Framer Motion
- **Routing:** React Router DOM 6
- **Icons:** Lucide React
- **Form Handling:** React Hook Form with Zod validation
- **Notifications:** Sonner (toast notifications)
- **Testing:** Vitest with React Testing Library

## Prerequisites

- Node.js 18+ (recommended: 20.x)
- npm, yarn, or pnpm

## Installation & Build Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### 3. Production Build

```bash
npm run build
```

The built files will be in the `dist` directory.

### 4. Preview Production Build

```bash
npm run preview
```

### 5. Run Tests

```bash
npm run test
```

For watch mode:
```bash
npm run test:watch
```

### 6. Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── AppointmentForm.tsx
│   ├── SEO.tsx
│   └── ...
├── sections/           # Page sections
│   ├── home/          # Home page sections
│   ├── about/         # About page sections
│   ├── services/      # Services page sections
│   └── team/          # Team page sections
├── pages/             # Page components (routes)
├── data/              # Static data files
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── App.tsx            # Main app component
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page with hero, services, team, testimonials, FAQ |
| **About** | `/about` | About DentAura, vision, dental innovation, client testimonials |
| **Services** | `/services` | List of all dental services offered |
| **Service Details** | `/services/:id` | Detailed view of specific service |
| **Team** | `/team` | Meet our expert dentists and specialists |
| **Blog** | `/blog` | Dental insights, tips, and patient stories |
| **Blog Details** | `/blog/:slug` | Full blog post with author info |
| **Appointment** | `/appointment` | Book an appointment form |
| **Contact** | `/contact` | Contact form and clinic information |
| **Gallery** | `/gallery` | Before/after smile transformation gallery |
| **Privacy Policy** | `/privacy` | Privacy policy page |
| **Terms & Conditions** | `/terms` | Terms of service page |
| **404 Not Found** | `*` | 404 error page |

## Sections (Reusable Components)

### Home Sections (`src/sections/home/`)

| Section | File | Description |
|---------|------|-------------|
| Hero | `Hero.tsx` | Main landing hero with CTA buttons |
| About | `About.tsx` | Brief about section with stats counter |
| Services | `Services.tsx` | Featured services preview |
| Process | `Process.tsx` | 4-step process accordion |
| Before & After | `BeforeAfter.tsx` | Interactive slider gallery |
| Team | `Team.tsx` | Featured team members (3 cards) |
| Appointment | `Appointment.tsx` | Booking form section |
| Testimonials | `Testimonials.tsx` | Patient reviews grid |
| FAQ | `FAQ.tsx` | Frequently asked questions |
| Gallery | `Gallery.tsx` | Marquee image ticker |
| Blog | `Blog.tsx` | Latest blog posts preview |

### About Sections (`src/sections/about/`)

| Section | File | Description |
|---------|------|-------------|
| About Hero | `AboutHero.tsx` | Hero with mission statement |
| Vision | `Vision.tsx` | Company vision and values |
| Client Words | `ClientWords.tsx` | Client testimonials |
| Dental Innovation | `DentalInnovation.tsx` | Technology showcase |
| Vibe | `Vibe.tsx` | Clinic atmosphere |
| Video Section | `VideoSection.tsx` | Promotional video |

### Services Sections (`src/sections/services/`)

| Section | File | Description |
|---------|------|-------------|
| Service Page Hero | `ServicePageHero.tsx` | Hero with marquee gallery |
| Services Hero | `ServicesHero.tsx` | Services list hero |
| Service List | `ServiceList.tsx` | All services grid |

### Team Sections (`src/sections/team/`)

| Section | File | Description |
|---------|------|-------------|
| Team Grid | `TeamGrid.tsx` | All team members grid |

## Features

- **Responsive Design:** Fully responsive for mobile, tablet, and desktop
- **Smooth Animations:** GSAP scroll animations and Framer Motion transitions
- **SEO Optimized:** React Helmet Async for meta tags
- **Accessible:** Radix UI primitives for accessibility
- **Form Validation:** React Hook Form with Zod schema validation
- **Toast Notifications:** Sonner for user feedback
- **Image Optimization:** Lazy loading with blur placeholders
- **Infinite Marquee:** Smooth scrolling galleries

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run build:dev` | Create development build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## Design System

- **Primary Color:** `#0D1B15` (Dark green/black)
- **Accent Color:** `#D1FC71` (Lime green)
- **Background:** `#f5f4f7` (Light gray)
- **Font Display:** Custom display font for headings
- **Font Inter:** Inter for body text

## License

© 2026 DentAura. All rights reserved.
