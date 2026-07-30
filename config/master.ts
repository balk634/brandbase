/**
 * Master Configuration File
 */
export const masterConfig = {
  // ==========================================
  // 1. GLOBAL METADATA & SEO
  // ==========================================
  // Controls how the site appears in search engines and social media shares.
  metadata: {
    title: "BrandBase | Custom Business Management Systems & Websites",
    description:
      "BrandBase builds custom industry business management systems and conversion-first websites to replace rigid generic CRMs and paper registers. Track client records, bookings, inventory, and GST billing.",
    baseUrl: "https://brandbase.in",
    keywords: [
      "next.js development agency",
      "conversion-first websites",
      "custom backend systems india",
      "custom crm systems india",
      "clinic management system india",
      "coaching center software",
      "restaurant management system india",
      "custom management software",
      "ecommerce website development india",
      "pay monthly website plans",
      "business workflow automation",
    ],
    authors: [{ name: "BrandBase", url: "https://brandbase.in" }],
    creator: "BrandBase",
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "https://brandbase.in",
      siteName: "BrandBase",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "BrandBase: Custom industry business management systems and conversion-first websites",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  },

  // ==========================================
  // X. ANALYTICS & TRACKING
  // ==========================================
  analytics: {
    googleAnalyticsId: "G-3F7BQR32LK",
    microsoftClarityId: "w7u3ctuvjz",
  },


  // ==========================================
  // 2. CONTACT & SOCIAL
  // ==========================================
  // Used in the Footer, Contact page, and Legal pages for global consistency.
  contact: {
    socialMedia: {
      enabled: true,
    },
    email: process.env.CONTACT_TO_EMAIL || "info@brandbase.in",
    phone: "+91 9939146979",
    // Used for the self-hosted Cal.com booking system.
    calcomUrl: "https://booking.brandbase.in",
    calcomSlug: "brandbase/30min",
    calcomNamespace: "30min",
    address: {
      street: "",
      locality: "",
      city: "Mumbai",
      state: "",
      postalCode: "",
      country: "India",
    },
    social: {
      linkedin: "https://www.linkedin.com/company/brandbase-in/",
      instagram: "https://www.instagram.com/brandbase.in/",
    },
  },

  // =========================================
  // 3. DESIGN SYSTEM & COLORS
  // ==========================================
  // Core theme variables mapped to Tailwind classes and components.
  colors: {
    background: "#f8f8f0ff",
    primary: "#3436c6",
    secondary: "#111827",
    muted: "#4B5563",
    grid: "#3A3A38",
    status: {
      online: "#16A34A",
      error: "#EF4444",
      accent: {
        coral: "#FF8C69",
        mint: "#9EFFBF",
        gold: "#F4D35E",
      },
    },
  },

  // ==========================================
  // 4. TEAM & ABOUT
  // ==========================================
  // Populates the "About Us" section and team member cards.
  about: {
    showTeam: false,
    showPhilosophy: true,
    team: [
      {
        name: "Balkrishna",
        role: "Technical Lead",
        image: "/team/balkrishna.jpg",
        description: "Focuses on client acquisition, Brand strategy, and overseeing the creative vision."
      },
      {
        name: "Harshwardhan Pawar",
        role: "Head of Content",
        image: "/team/harsh.jpg",
        description: "Handles social media management, brand voice, and the shaping narraative of the brand."
      },
      {
        name: "Shweta Dwivedi",
        role: "Operations & Project Manager",
        image: "/team/shweta.jpg",
        description: "Keeps the team on schedule, manages client communication, and ensures seamless delivery."
      },
      {
        name: "Vinit Sen",
        role: "Lead UI/UX Designer",
        image: "/team/vinit.jpg",
        description: "Handles the visual identity, website interfaces, and pitch deck design."
      },
      {
        name: "Shivam Sawarn",
        role: "Strategy Consultant",
        image: "/team/shivam.jpg",
        description: "Focuses on building the server infrastructure, applications, and digital products."
      },
      {
        name: "Shivalay Rathore",
        role: "Head of Growth",
        image: "/team/shivalay.jpg",
        description: "Focuses on running paid ads, performance marketing, and conversion rate optimization (CRO)."
      },

    ]
  },

  // ==========================================
  // 6. UI BEHAVIOR & ANIMATION
  // ==========================================
  // Global settings for visual effects, auto-scrolling, and scaling.
  ui: {
    pattern: {
      enabled: true,
      opacity: 0.1,
      sizePx: 760,
      drift: {
        enabled: false,
        durationSeconds: 40,
        shiftXPx: 640,
        shiftYPx: 640,
      },
    },
    boxPattern: {
      squareSize: 2,
      gap: 3,
      opacity: 0.04,
      scale: 2,
      // How many squares wide/high the pattern should be
      width: 12,
      height: 12,
    },
    // Hero image control:
    heroImages: {
      maxWidth: "440px",
      aspectRatio: "4/5",
      className: "relative mx-auto",
      home: "home/JPG/Home hero.jpg",
      websiteSolutions: "hero/website-solutions-hero.webp",
      websiteSolutionsPremiumStatic: "hero/premium-static-hero.webp",
      websiteSolutionsCustomEnterprise: "hero/custom-enterprise-hero.webp",
      websiteSolutionsEcommerce: "hero/ecommerce-hero.webp",
      operatingSystems: "hero/website-solutions-hero.webp",
      operatingSystemsHealth: "health/jpg/hero.jpg",
      operatingSystemsEducation: "education/jpg/edu hero.jpg",
      operatingSystemsFoodHospitality: "food-hospitality/jpg/hero res.jpg",
    },
    cursor: {
      color: "#16A34A",
      size: 32,
      strokeWidth: 1,
      radius: 4,
    },
    motion: {
      smoothScroll: true,
      scrollProgress: true,
      trustStrip: {
        autoScroll: true,
        durationSeconds: 300,
      },
    },
    microInteractions: {
      enabled: true,
      // Keep this simple: one easing curve used for card/icon/faq/list motion.
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      // Global motion tempo tuning (higher = smoother/slower).
      durationFastMs: 260,
      durationBaseMs: 380,
      durationSlowMs: 620,
      // Card hover vertical lift in px.
      cardHoverLiftPx: 2,
      // Button hover vertical lift in px.
      buttonLiftPx: 1,
      // Button press scale.
      buttonPressScale: 0.995,
      // Inline link arrow slide distance in px.
      linkSlidePx: 2,
      // FAQ row slide distance in px.
      faqSlidePx: 2,
      // General list row slide distance in px.
      listSlidePx: 2,
      // Icon scale on card hover.
      cardIconScale: 1.04,
    },
    processConnector: {
      // Connector between process step cards (desktop only).
      // Use a CSS color string. You can reference other CSS vars, e.g. "var(--color-primary)".
      dotColor: "var(--color-ink-muted)",
      dotSizePx: 5,
      dotOpacityMin: 0.05,
      dotOpacityMax: 0.8,
      durationMs: 1400,
      staggerMs: 160,
    },
  },

  // ==========================================
  // 8. SECTION-SPECIFIC CONTENT
  // ==========================================
  // Granular content for specific landing page and service sections.
  sections: {
    hero: {
      tag: "MANAGEMENT SYSTEMS + WEBSITES",
      headline: "Systems that run your operations. Websites that convert.",
      subheadline:
        "BrandBase builds custom industry management systems integrated directly with high-performance frontend websites. Manage patient records, live queues, batch schedules, job cards, billing, and inventory — without paper registers or rigid, generic CRMs.",
      imageSrc: "hero1.jpg?v=20260307-2",
      grayscale: false,
      stats: [
        { label: "CLIENTS SERVED", value: "40+" },
        { label: "MANUAL WORK CUT", value: "80%" },
        { label: "RETENTION", value: "94%" },
      ],
    },
    testimonials: [
      {
        quote: "The Pay-Monthly website took all the stress off my plate. No upfront cost, no tech headaches, and my bookings tripled in six weeks.",
        author: "Dr. Mehra",
        role: "Dental Clinic Owner",
        location: "Mumbai, India",
      },
      {
        quote: "We needed a site that actually converted our traffic. The new design did exactly that within the first week.",
        author: "Founder",
        role: "E-Commerce",
        location: "Mumbai, India",
      },
      {
        quote: "Straightforward process. No tech jargon, just clear milestones and they delivered on time. One partner for everything.",
        author: "Director",
        role: "Real Estate",
        location: "Mumbai, India",
      },
      {
        quote: "We were juggling multiple vendors before BrandBase. Now it's one team, one roadmap, and everything is aligned.",
        author: "Co-Founder",
        role: "D2C Brand",
        location: "Bengaluru, India",
      },
      {
        quote: "The custom e-commerce build they did handles 10x the traffic our old Shopify theme could. Revenue is up 65% this quarter.",
        author: "Operations Head",
        role: "Fashion E-Commerce",
        location: "New Delhi, India",
      },
    ],
    faq: [
      {
        q: "How does your pricing work?",
        a: "We offer flexible models. Choose our \u201cPay Monthly\u201d subscription for zero upfront cost, or our \u201cCustom Enterprise\u201d model for bespoke, complex builds. You only pay for what you need.",
      },
      {
        q: "How fast can we launch?",
        a: "Standard static sites launch in under 14 days. Custom enterprise or e-commerce builds typically take 14 to 28 days depending on integration complexity.",
      },
      {
        q: "Do I own my website and data?",
        a: "100%. Once your custom project is paid, or your initial monthly contract matures, you own the domain, the code, and all database records. No hostage situations.",
      },
      {
        q: "Can I start small and scale up?",
        a: "Absolutely. Most clients start with a custom website or a single Base, then integrate additional automated workflows as their operations grow. We build systems that adapt with you.",
      },
    ],
    // Used by the homepage Trust Strip marquee
    // Names must match entries in components/sections/Technologies.tsx → ALL_TECHS
    techStackStrip: [
      "Figma",
      "Next.js",
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "C++",
      "Python",
      "AWS",
      "Cloudflare",
      "Vercel",
      "OpenAI",
      "Claude",
      "Netlify",
      "Zapier",
      "n8n",
      "Google Analytics",
      "HubSpot",
      "Supabase",
      "Appwrite",
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "SQLite",
      "Docker",
      "Firebase",
      "WhatsApp",
      "Twilio",
      "Resend",
      "Razorpay",
      "Paytm",
    ],

  },
};
