
# Sara Johnson — Premium Creative Portfolio

## Important note on stack
Your brief lists Next.js, but this Lovable project runs on **TanStack Start (React 19 + Vite + Tailwind v4)**. It deploys cleanly to Vercel with zero config — I'll keep the same React/TS/Tailwind/Framer Motion/GSAP/R3F libraries you wanted, just without Next.js. All other requirements (routing, SEO, dark/light mode, animations, 3D) stay intact.

## Design direction
- **Theme**: dark luxury base (near-black `#0A0A0F`) with blush pink accent (`#F4C2C2` → `#E8A4B8`), soft aurora gradients (rose / lavender / cyan), glassmorphism panels, subtle grain.
- **Typography**: Instrument Serif (display) + Inter (body) for elegant editorial contrast.
- **Light mode**: warm ivory base with same blush accent, kept restrained.
- **Motion**: cinematic hero, mouse parallax, magnetic buttons, scroll storytelling, smooth page transitions, custom cursor, scroll progress bar, premium preloader.

## Tech & libraries
- TanStack Start (file routing) + TypeScript + Tailwind v4
- framer-motion, gsap (+ ScrollTrigger), lenis (smooth scroll)
- @react-three/fiber, @react-three/drei, three (3D background)
- lucide-react icons, shadcn for form primitives

## 3D background system
A single fixed-position R3F canvas (`<AuroraScene />`) behind all content:
- Floating glass spheres with refraction (MeshTransmissionMaterial)
- Animated gradient blobs (custom shader)
- Aurora wave plane (noise shader)
- Particle field reacting to mouse
- Volumetric light, depth fog, parallax via mouse + scroll
- Reduced-motion fallback to static gradient (perf + a11y)

## Route map
```
/                       Home (hero + about + skills + services + projects + testimonials + blog teaser + contact)
/projects               Full project index
/projects/reverie-ai    Case study
/projects/nova-agency   Case study
/projects/luxe-beauty   Case study
/projects/fitzone       Case study
/projects/bloom-cafe    Case study
/projects/skytravel     Case study
/projects/amazon-listing
/projects/youtube-growth
/about                  Long-form about + timeline
/services               Services detail
/blog                   Blog index (6 posts)
/blog/$slug             Individual posts
/contact                Contact page
```
Each route ships its own `head()` SEO meta (title, description, og:*, canonical).

## Page sections (Home)
1. **Preloader** — animated SVG monogram "SJ" → reveal
2. **Hero** — cinematic fullscreen: name, role, rotating titles (Manuscript Writer → Graphic Designer → UI/UX → Web → Video Editor), CTAs (View Portfolio / Hire Me / Download Resume), floating glass service cards with mouse parallax, animated counters (20+ / 10+ / 3+ / 5)
3. **About** — editorial split layout, portrait, narrative copy, capability chips
4. **Timeline** — vertical scroll-pinned journey (learning → freelance → internship)
5. **Skills** — 6 grouped glass cards (Web, Graphic, UI/UX, Video, Writing, Remote)
6. **Services** — 6 service cards with magnetic hover, icons
7. **Featured Projects** — interactive gallery (horizontal scroll on desktop, stacked mobile), 8 projects, each linking to case study
8. **Testimonials** — 6 reviews, marquee + featured pull-quote
9. **Blog teaser** — 6 cards (UI/UX Tips, Freelancing, Web Design, Graphic Design, Content Writing, Productivity)
10. **Contact** — headline, form (Name/Email/Project Type/Budget/Message), location + phone + email
11. **Footer** — © 2026, quick links, social (LinkedIn, Behance, Dribbble, Instagram)

## Case study template
Each `/projects/$slug` route:
- Hero banner with project visual + tags
- Overview, Challenge, Research, Wireframes, Design Process, UI Showcase, Before/After slider, Final Results (metric cards), Gallery (6–10 images), Testimonial, "Next project" CTA

## Generated project visuals
Original high-fidelity mockups generated per project using the image-gen tool, saved under `src/assets/` and externalized via Lovable Assets. Each project gets 8 images covering: hero shot, full landing mockup, desktop UI, mobile UI, branding/logo board, social posts, components/design system, dashboard or detail screen. No stock photos, no placeholders.

Estimated total: ~64 project images + 6 blog covers + 1 portrait + assorted decorative shapes.

## Global features
- Dark/light toggle (persists to localStorage, respects `prefers-color-scheme`)
- Custom cursor (desktop only, hidden on touch)
- Lenis smooth scroll + GSAP ScrollTrigger
- Scroll progress bar (top)
- Page transitions via framer-motion `AnimatePresence`
- Magnetic buttons + tilt cards
- Floating particles overlay
- Reduced-motion fallbacks throughout
- SEO: per-route meta, JSON-LD Person schema on home, sitemap.xml, robots.txt
- Resume download (generated PDF placeholder linked from hero)
- Contact form posts to a `createServerFn` that logs (no email provider configured yet)

## Vercel deployment
TanStack Start has a Vercel preset. I'll ensure `vite.config.ts` targets Vercel and add a brief README note. No `next.config.js` needed.

## Out-of-scope clarifications I'm assuming
- Contact form: stores submissions in-memory / logs only (no Cloud/email backend wired) unless you want Lovable Cloud enabled for real submissions.
- Resume PDF: generated placeholder PDF (you can swap your real file).
- Social links point to `#` until you provide real URLs.

## Build order
1. Install deps (framer-motion, gsap, three, @react-three/fiber, @react-three/drei, lenis)
2. Tokens + fonts in `src/styles.css`, theme provider, layout shell
3. 3D background + global UI (cursor, progress, preloader, nav, footer)
4. Home sections
5. Case study template + 6 case study routes (+ 2 short ones)
6. About / Services / Blog / Contact routes
7. Generate all project + blog imagery (batched)
8. SEO meta per route, sitemap, robots
9. Polish, responsive QA, reduced-motion pass

This is a large build — expect ~60–80 generated images and ~30 component/route files. Ready to start when you approve.
