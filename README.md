# Mohamed Elmoustapha — Personal Portfolio

> Memory bank and technical guide for this project. Intended for both human developers and AI assistants working in future sessions.

---

## Project Overview

A modern, SaaS-style single-page personal portfolio built to support internship and junior job applications. The design is intentionally clean and minimal — the goal is clarity and impact, not visual complexity.

- **Framework:** Next.js 16 (App Router) — follows Next.js 15 stable patterns (RSC, `app/` directory, `layout.tsx`, `page.tsx`)
- **Styling:** Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) + CSS custom properties for theming
- **Animations:** Framer Motion v12 — subtle only (`whileInView`, `whileHover`, `AnimatePresence`)
- **Theme:** `next-themes` for dark/light mode
- **Icons:** `lucide-react` v1 (note: `Github` and `Linkedin` were removed in v1 — inline SVG replacements live in `components/icons.tsx`)
- **Language:** TypeScript

---

## Current Tech Stack

### Frontend (this portfolio)
| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion v12 |
| Theme toggle | next-themes |
| Icons | lucide-react v1 + custom SVGs |
| Language | TypeScript 5 |

### Projects showcased (their own stacks)
| Project | Stack |
|---|---|
| BuBbLEMInD | Next.js, OpenAI, Stripe, PostgreSQL |
| AccuDash | Next.js, Prisma, PostgreSQL, NextAuth |
| Stock Management | React Native (Expo), Django REST API, PostgreSQL |
| Ch6ari | React Native (Expo), Supabase, TypeScript |

---

## Project Structure

```
my-cv/
├── app/
│   ├── globals.css        # CSS custom properties for light/dark, base reset
│   ├── layout.tsx         # Root layout — metadata, wraps with <Providers>
│   ├── page.tsx           # Single page — composes all section components
│   └── providers.tsx      # next-themes ThemeProvider (client boundary)
│
├── components/
│   ├── Navbar.tsx         # Fixed navbar — MediaQueryList-based responsive logic
│   ├── Hero.tsx           # Profile photo, name, CTA buttons, social links
│   ├── Projects.tsx       # Project cards with media preview (video/image/placeholder)
│   ├── Skills.tsx         # Grouped skill chips (Frontend / Backend / Tools)
│   ├── About.tsx          # Bio + highlight cards
│   ├── Contact.tsx        # Email, GitHub, LinkedIn link cards
│   ├── Footer.tsx         # Minimal footer + back-to-top
│   └── icons.tsx          # Inline SVG: GithubIcon, LinkedinIcon
│
└── public/
    ├── my-photo.png       # Profile photo used in Hero section
    └── projects/
        ├── bubblemind/    # Media for BuBbLEMInD
        ├── accudash/      # Media for AccuDash
        ├── stock-management/
        └── ch6ari/
```

---

## Theme System

Dark/light mode is driven entirely by CSS custom properties — no Tailwind `dark:` variants are used.

### How it works

1. `app/providers.tsx` wraps the app with `<ThemeProvider attribute="class">` from `next-themes`.
2. On toggle, next-themes adds/removes the `.dark` class on `<html>`.
3. `app/globals.css` defines two variable sets:

```css
:root        { --background: #ffffff; --accent: #6366f1; ... }
.dark        { --background: #0a0f1e; --accent: #818cf8; ... }
```

4. All components reference only `var(--background)`, `var(--foreground)`, `var(--accent)`, `var(--card)`, `var(--card-border)`, `var(--muted)`.

### Theme toggle — one button only

`Navbar.tsx` renders a single `<ThemeToggle>` component per viewport. Responsive switching is handled via a `MediaQueryList` listener that sets an `isDesktop` boolean in state — **not** via Tailwind responsive classes. This avoids the CSS specificity conflict where `style={{ display: "flex" }}` overrides `className="hidden md:flex"`.

The `ThemeToggle` component uses `resolvedTheme` (not `theme`) from `useTheme()` and renders a size-matched placeholder before mount to prevent hydration flicker.

---

## Media Conventions

Project visuals are stored in `public/projects/[slug]/`.

| File | Purpose |
|---|---|
| `preview.webm` | Video preview — preferred format (better compression than mp4) |
| `preview.png` | Static screenshot fallback |

### How to add media for a project

1. Place the file in `public/projects/[slug]/` (e.g. `public/projects/accudash/preview.webm`).
2. Open `components/Projects.tsx` and update the matching project entry:

```ts
{
  mediaSlug: "accudash",
  mediaType: "video",  // "video" | "image" | null
}
```

### Rendering logic (`MediaPreview` component)

- `mediaType: "video"` → `<video src="/projects/[slug]/preview.webm" autoPlay muted loop>` — hides itself via `onError` if the file is missing
- `mediaType: "image"` → Next.js `<Image>` with `onError` fallback to placeholder
- `mediaType: null` → gradient placeholder with project icon + "Preview coming soon"

All containers enforce `aspect-ratio: 16 / 9` so the grid stays aligned regardless of media presence.

---

## Profile Photo

`Hero.tsx` renders `/public/my-photo.png` using Next.js `<Image fill>` inside a circular container with a gradient accent ring:

```
/public/my-photo.png   ← replace this file to update the photo
```

The ring is implemented as `padding: 3px` on a `linear-gradient` background with an inner `overflow: hidden` circle — no border-image hacks needed.

---

## Key Technical Decisions

| Decision | Reason |
|---|---|
| Inline CSS custom properties over Tailwind utility classes | Single source of truth for colors; dark mode works with one `.dark` class toggle without duplicating utilities |
| `MediaQueryList` for responsive nav | Avoids inline `display` style overriding Tailwind `hidden` class (specificity conflict) |
| `resolvedTheme` instead of `theme` in toggle | `theme` can be `"system"` which doesn't map to an icon; `resolvedTheme` is always `"light"` or `"dark"` |
| `whileInView` with `once: true` | Animations fire once on scroll-in, no re-triggering on scroll-back |
| Framer Motion `ease` cast to `Easing` type | v12 made the `ease` string type strict — `"easeOut" as Easing` satisfies it |
| Custom `GithubIcon` / `LinkedinIcon` SVGs | lucide-react v1 dropped brand icons; inline SVGs are a zero-dependency replacement |

---

## Running Locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build check
```

---

## Future Plans

- Add live demo links once projects are deployed (update `demo:` field in `Projects.tsx`)
- Activate media previews for BuBbLEMInD and AccuDash as recordings become available
- Add more projects to the `projects` array in `Projects.tsx`
- Seeking internship and junior full-stack roles — contact via LinkedIn or email in the portfolio
