import reverie from "@/assets/project-reverie.jpg";
import nova from "@/assets/project-nova.jpg";
import luxe from "@/assets/project-luxe.jpg";
import fitzone from "@/assets/project-fitzone.jpg";
import bloom from "@/assets/project-bloom.jpg";
import skytravel from "@/assets/project-skytravel.jpg";
import amazon from "@/assets/project-amazon.jpg";
import youtube from "@/assets/project-youtube.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  accent: string;
  tagline: string;
  deliverables: string[];
  overview: string;
  challenge: string;
  research: string;
  process: string;
  results: { label: string; value: string }[];
  testimonial: { quote: string; name: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "reverie-ai",
    title: "Reverie AI",
    category: "SaaS Landing Page",
    year: "2025",
    image: reverie,
    accent: "from-fuchsia-400 to-violet-500",
    tagline: "An AI productivity suite that turned curiosity into conversions.",
    deliverables: ["Website Design", "UI/UX", "Responsive Layout", "Design System"],
    overview:
      "Reverie AI needed a launch page that felt as intelligent as the product. We designed a cinematic, glassmorphic experience that communicates the product's depth in under five seconds.",
    challenge:
      "The team had a powerful model but a flat marketing presence. Bounce rates were high and demo signups were stuck below 2%.",
    research:
      "Reviewed 24 competitor SaaS pages, ran 8 user interviews, and built a content map that prioritized the demo CTA above all else.",
    process:
      "Wireframes → low-fi prototype → high-fi mockups in Figma → motion direction → handoff with a 60-component design system.",
    results: [
      { label: "Demo signups", value: "+312%" },
      { label: "Avg. time on page", value: "3m 14s" },
      { label: "Lighthouse score", value: "98" },
    ],
    testimonial: {
      quote:
        "Sara translated a fuzzy vision into a page that felt inevitable. Our investor demos doubled in the first month.",
      name: "Ayaan Malik",
      role: "Founder, Reverie AI",
    },
  },
  {
    slug: "nova-agency",
    title: "Nova Agency",
    category: "Creative Agency Website",
    year: "2025",
    image: nova,
    accent: "from-orange-300 to-rose-500",
    tagline: "Editorial bravado for a studio that doesn't whisper.",
    deliverables: ["Branding", "Website Design", "Landing Page", "Motion"],
    overview:
      "Nova wanted a digital home that felt like a museum's opening night. We delivered a typography-led site with bold serifs, slow scroll storytelling, and an awards-grade attention to detail.",
    challenge: "Differentiate in a sea of identical agency portfolios.",
    research: "Mood-boarded 40 references across editorial print, gallery sites, and contemporary fashion.",
    process: "Brand kit refresh → site map → wireframes → motion prototypes in Figma + Framer.",
    results: [
      { label: "Inbound briefs", value: "+184%" },
      { label: "Press mentions", value: "11" },
      { label: "Avg. project value", value: "$48k" },
    ],
    testimonial: {
      quote: "It's the first website we've actually wanted to show off. Sara understood us better than we did.",
      name: "Hira Qureshi",
      role: "Creative Director, Nova",
    },
  },
  {
    slug: "luxe-beauty",
    title: "Luxe Beauty",
    category: "E-Commerce Website",
    year: "2024",
    image: luxe,
    accent: "from-rose-200 to-amber-300",
    tagline: "Quiet luxury meets a frictionless mobile checkout.",
    deliverables: ["Product Pages", "Mobile Experience", "UI Design", "Brand System"],
    overview:
      "A skincare brand needed an online flagship as considered as the bottle on a bathroom counter. We rebuilt the storefront end-to-end with a focus on tactile detail.",
    challenge: "Translate a premium retail experience into a high-converting mobile e-commerce flow.",
    research: "Heuristic audit of the current store, 6 in-context shopping interviews, conversion funnel deep-dive.",
    process: "IA rework → product page redesign → checkout simplification → motion + micro-interactions.",
    results: [
      { label: "Mobile conversion", value: "+96%" },
      { label: "Cart abandonment", value: "-41%" },
      { label: "AOV uplift", value: "+27%" },
    ],
    testimonial: {
      quote: "Our customers now compliment the website unprompted. That has never happened before.",
      name: "Sana Iqbal",
      role: "Head of E-commerce, Luxe Beauty",
    },
  },
  {
    slug: "fitzone",
    title: "FitZone",
    category: "Fitness Coaching Platform",
    year: "2024",
    image: fitzone,
    accent: "from-lime-300 to-emerald-500",
    tagline: "A coaching dashboard that makes data feel like a coach in your corner.",
    deliverables: ["Dashboard Design", "Responsive Website", "UX Flow", "Mobile App UI"],
    overview:
      "FitZone needed coaches and clients to live in the same product without anyone feeling lost. We designed a calm, data-rich dashboard plus a focused mobile experience.",
    challenge: "Dense data, two user roles, one product. Without overwhelm.",
    research: "Shadowed 4 coaches, interviewed 11 clients, mapped 6 critical journeys.",
    process: "Information architecture → wireflows → component library → polished UI → motion spec.",
    results: [
      { label: "Coach retention", value: "+58%" },
      { label: "Daily active users", value: "+143%" },
      { label: "Support tickets", value: "-62%" },
    ],
    testimonial: {
      quote: "Sara turned a messy spreadsheet of features into a product our coaches actually love opening.",
      name: "Daniyal Khan",
      role: "Co-founder, FitZone",
    },
  },
  {
    slug: "bloom-cafe",
    title: "Bloom Café",
    category: "Restaurant Website",
    year: "2024",
    image: bloom,
    accent: "from-amber-300 to-orange-500",
    tagline: "A neighbourhood café with a website worth lingering on.",
    deliverables: ["Brand Identity", "Menu Design", "Website", "Photography Direction"],
    overview:
      "Bloom wanted to feel like Sunday morning. We built a warm, editorial site with botanical illustrations, slow scroll moments, and a menu you want to read top-to-bottom.",
    challenge: "A small business with a big personality, a tiny budget, and no time for fluff.",
    research: "On-site visits, customer interviews while they waited for coffee, competitor menu teardown.",
    process: "Brand audit → palette + type → photography direction → site → printed menus to match.",
    results: [
      { label: "Online reservations", value: "+220%" },
      { label: "Instagram saves", value: "+410%" },
      { label: "Average ticket", value: "+18%" },
    ],
    testimonial: {
      quote: "We have regulars who say they came for the website. That sentence still surprises me.",
      name: "Ammar Sheikh",
      role: "Owner, Bloom Café",
    },
  },
  {
    slug: "skytravel",
    title: "SkyTravel",
    category: "Travel Booking Platform",
    year: "2023",
    image: skytravel,
    accent: "from-cyan-300 to-blue-500",
    tagline: "A booking flow that gets out of the way of the trip.",
    deliverables: ["Landing Page", "Mobile UI", "Booking Experience", "Design System"],
    overview:
      "SkyTravel's old flow took 14 steps to book a trip. We shipped a 4-step booking experience and a landing page that sells the destination, not the form.",
    challenge: "Booking complexity was killing conversion. The brand also felt clinical for a leisure product.",
    research: "Funnel analytics review, 9 booking interviews, competitive teardown across 12 OTAs.",
    process: "Flow simplification → mobile-first wireframes → high-fi screens → motion spec.",
    results: [
      { label: "Booking completion", value: "+87%" },
      { label: "Steps in flow", value: "14 → 4" },
      { label: "Mobile NPS", value: "+34" },
    ],
    testimonial: {
      quote: "The redesign paid for itself in three weeks. Sara's instinct for travel UX is rare.",
      name: "Zara Ahmed",
      role: "Product Lead, SkyTravel",
    },
  },
  {
    slug: "amazon-listing",
    title: "Amazon Listing Design",
    category: "E-Commerce Graphics",
    year: "2024",
    image: amazon,
    accent: "from-pink-300 to-rose-500",
    tagline: "A+ content that out-converts everyone else in the search results.",
    deliverables: ["A+ Content", "Product Graphics", "Conversion Optimization"],
    overview:
      "Designed full A+ Amazon listing assets for a skincare brand entering the US market — main images, infographics, lifestyle stack, comparison charts.",
    challenge: "Cut through a hyper-competitive category on the world's busiest marketplace.",
    research: "Top-50 competitor teardown, review-mining for objections, conversion benchmark study.",
    process: "Strategy doc → main image variants → infographic library → A/B testing plan.",
    results: [
      { label: "Click-through rate", value: "+72%" },
      { label: "Conversion rate", value: "+44%" },
      { label: "Ranking", value: "Page 1" },
    ],
    testimonial: {
      quote: "Hit page one in three weeks. Sara's listing pack is the best money I've spent on the brand.",
      name: "Imran Yusuf",
      role: "Founder, Indie Skincare Co.",
    },
  },
  {
    slug: "youtube-growth",
    title: "YouTube Growth Package",
    category: "Content Creator Branding",
    year: "2024",
    image: youtube,
    accent: "from-red-400 to-rose-600",
    tagline: "Thumbnails, channel branding, and edits that earned the click.",
    deliverables: ["Thumbnail Design", "Channel Branding", "Video Editing"],
    overview:
      "Full creator package for a tech reviewer — channel art, a thumbnail system that scales, and short-form edits tuned for retention.",
    challenge: "Stalled growth despite strong content. Thumbnails weren't earning the click.",
    research: "30-thumbnail teardown of top channels in the niche, retention curve analysis.",
    process: "Thumbnail system → channel art → edit style guide → batch production workflow.",
    results: [
      { label: "Subscribers (90d)", value: "+38k" },
      { label: "Avg. CTR", value: "11.4%" },
      { label: "Watch time", value: "+91%" },
    ],
    testimonial: {
      quote: "My channel grew more in 3 months with Sara than the previous year. The thumbnails alone changed everything.",
      name: "Bilal Raza",
      role: "Tech Creator, 220k subs",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
