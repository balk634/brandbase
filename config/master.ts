/**
 * Master Configuration File
 */
export const masterConfig = {
  // ==========================================
  // 1. GLOBAL METADATA & SEO
  // ==========================================
  // Controls how the site appears in search engines and social media shares.
  metadata: {
    title: "BrandBase | Conversion-First Websites & Performance Marketing",
    description:
      "BrandBase builds fast, conversion-first websites with clean tracking and SEO foundations—then scales results with performance marketing. Pay monthly or commission custom builds.",
    baseUrl: "https://brandbase.in",
    keywords: [
      "web design agency india",
      "next.js development agency",
      "conversion-first websites",
      "performance marketing agency india",
      "meta ads management india",
      "google ads management india",
      "local seo services india",
      "ecommerce website development india",
      "website redesign services",
      "conversion rate optimization agency",
      "pay monthly website plans",
      "digital marketing agency india",
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
          alt: "BrandBase — Conversion-first websites and performance marketing",
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
    phone: "+91 9113702669",
    // Used for the self-hosted Cal.com booking system.
    calcomUrl: "https://booking.brandbase.in",
    calcomSlug: "brandbase/30min",
    calcomNamespace: "30min",
    address: {
      street: "Pluto B 504, Suncity Complex,",
      locality: "Powai",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400076",
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

  // Logo sizing configuration
  logo: {
    header: {
      // Height in pixels for the header logo (width auto)
      height: 34,
      // Optional: set explicit width (null for auto)
      width: null as number | null,
    },
    footer: {
      height: 32,
      width: null as number | null,
    },
  },

  // ==========================================
  // 4. TEAM & ABOUT
  // ==========================================
  // Populates the "About Us" section and team member cards.
  about: {
    team: [
      {
        name: "Balkrishna",
        role: "Technical Lead",
        image: "/photos/balkrishna.jpg",
        description: "Focuses on client acquisition, high-level brand strategy, and overseeing the creative vision."
      },
      {
        name: "Harshwardhan Pawar",
        role: "Head of Content",
        image: "/photos/harsh.jpg",
        description: "Handles social media management, brand voice, and the narrative copy for the pitch decks."
      },
      {
        name: "Shweta Dwivedi",
        role: "Operations & Project Manager",
        image: "/photos/shweta.jpg",
        description: "Keeps the team on schedule, manages client communication, and ensures seamless delivery."
      },
      {
        name: "Vinit Sen",
        role: "Lead UI/UX Designer",
        image: "/photos/vinit.jpg",
        description: "Handles the visual identity, website interfaces, and pitch deck design."
      },
      {
        name: "Shivam Sawarn",
        role: "Strategy Consultant",
        image: "/photos/shivam.jpg",
        description: "Focuses on building the server infrastructure, applications, and digital products."
      },
      {
        name: "Shivalay Rathore",
        role: "Head of Growth",
        image: "/photos/shivalay.jpg",
        description: "Focuses on running paid ads, performance marketing, and conversion rate optimization (CRO)."
      },

    ]
  },

  // ==========================================
  // 5. NAVIGATION MENUS
  // ==========================================
  // Controls the links in the Header, Footer, and Legal sections.
  navigation: [
    {
      name: "Website Solutions",
      href: "/website-solutions",
      subItems: [
        { name: "Premium Static Websites", href: "/website-solutions/premium-static-websites" },
        { name: "Custom Web Design", href: "/website-solutions/custom-web-design" },
        { name: "eCommerce Development", href: "/website-solutions/ecommerce-development" },
        { name: "Website Redesign", href: "/website-solutions/website-redesign" }
      ]
    },
    {
      name: "Digital Marketing",
      href: "/digital-marketing",
      subItems: [
        { name: "Performance Marketing", href: "/digital-marketing/performance-marketing" },
        { name: "Social Media Management", href: "/digital-marketing/social-media-management" },
        { name: "Local SEO & Google Maps", href: "/digital-marketing/local-seo-google-maps" }
      ]
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ],
  footerColumns: [
    {
      title: "Website Solutions",
      links: [
        { name: "Website Solutions", href: "/website-solutions" },
        { name: "Premium Static", href: "/website-solutions/premium-static-websites" },
        { name: "Custom Web Design", href: "/website-solutions/custom-web-design" },
        { name: "eCommerce Services", href: "/website-solutions/ecommerce-development" },
        { name: "Website Redesign", href: "/website-solutions/website-redesign" },
      ]
    },
    {
      title: "Digital Marketing",
      links: [
        { name: "Digital Marketing", href: "/digital-marketing" },
        { name: "Performance Marketing", href: "/digital-marketing/performance-marketing" },
        { name: "Social Media Management", href: "/digital-marketing/social-media-management" },
        { name: "Local SEO Solutions", href: "/digital-marketing/local-seo-google-maps" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About BrandBase", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Pricing", href: "/pricing" },
        { name: "Insights Blog", href: "/blog" },
        { name: "Contact us", href: "/contact" },
      ]
    },
    {
      title: "Legal Information",
      links: [
        { name: "Impressum", href: "/impressum" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Settings", href: "/cookies" },
      ]
    }
  ],

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
      home: "hero/home-hero.webp",
      websiteSolutions: "hero/website-solutions-hero.webp",
      websiteSolutionsPremiumStatic: "hero/premium-static-hero.webp",
      websiteSolutionsCustomEnterprise: "hero/custom-enterprise-hero.webp",
      websiteSolutionsEcommerce: "hero/ecommerce-hero.webp",
      websiteSolutionsRedesignRescue: "hero/redesign-rescue-hero.webp",
      socialMediaGrowth: "hero/digital-marketing-hero.webp",
      socialMediaGrowthPerformanceMarketing: "hero/performance-marketing-hero.webp",
      socialMediaGrowthManagement: "hero/social-management-hero.webp",
      socialMediaGrowthLocalSeo: "hero/local-seo-hero.webp",
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
  // 7. CAREERS PAGE
  // ==========================================
  careers: {
    // Open roles for the agency, categorized by department. 
    // These roles are dynamically mapped and rendered on the /careers page.
    openRoles: [
      // --- Design Department ---
      {
        title: "Senior Product Designer",
        location: "Global/Hybrid",
        type: "Part-time",
        department: "Design",
        // Role Focus: Lead the UI/UX design for scalable web applications and premium brand identities.
      },
      // --- Engineering Department ---
      {
        title: "Frontend Engineer (Next.js)",
        location: "Global/Hybrid",
        type: "Part-time",
        department: "Engineering",
        // Role Focus: Build high-performance, responsive web interfaces using React and Next.js.
      },
      // --- Marketing Department ---
      {
        title: "Growth Strategist",
        location: "Global / Hybrid",
        type: "Part-time",
        department: "Marketing",
        // Role Focus: Develop and execute performance marketing campaigns across multiple channels to drive scale.
      }
    ]
  },

  // ==========================================
  // 8. SECTION-SPECIFIC CONTENT
  // ==========================================
  // Granular content for specific landing page and service sections.
  sections: {
    hero: {
      tag: "WEBSITE + MARKETING",
      headline: "A website that converts. Marketing that compounds.",
      subheadline:
        "We build fast, conversion-first websites with clean tracking and SEO foundations, then scale results with performance marketing. Clear plan. Measurable results.",
      imageSrc: "hero1.jpg?v=20260307-2",
      grayscale: false,
      stats: [
        { label: "CLIENTS SERVED", value: "40+" },
        { label: "INDUSTRIES", value: "12" },
        { label: "AVG ROI", value: "4.2x" },
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
        quote: "Their local SEO got my salon ranking #1 on Google Maps within 6 weeks. Foot traffic is up 40% and I didn\u2019t have to touch a single setting.",
        author: "Priya S.",
        role: "Salon Owner",
        location: "Pune, India",
      },
      {
        quote: "We needed a site that actually converted our traffic. The new design did exactly that within the first week.",
        author: "Founder",
        role: "E-Commerce",
        location: "Mumbai, India",
      },
      {
        quote: "For the first time, our ad spend is actually yielding predictable returns. The Meta campaigns they run are surgical.",
        author: "CEO",
        role: "Retail Brand",
        location: "Patna, India",
      },
      {
        quote: "Straightforward process. No tech jargon, just clear milestones and they delivered on time. One partner for everything.",
        author: "Director",
        role: "Real Estate",
        location: "Hyderabad, India",
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
      {
        quote: "Their performance marketing team cut our customer acquisition cost in half. The weekly reports are crystal clear.",
        author: "Marketing Manager",
        role: "SaaS Startup",
        location: "Bengaluru, India",
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
        a: "100%. Once your custom project is paid, or your initial monthly contract matures, you own the domain, the code, and all ad accounts. No hostage situations.",
      },
      {
        q: "Can I start small and scale up?",
        a: "Absolutely. Most clients start with a Pay-Monthly website or a single ad campaign, then expand into full-stack marketing once they see the numbers. We grow with you.",
      },
    ],
    // Used by the homepage Trust Strip marquee
    techStackStrip: [
      "FIGMA",
      "NEXT.JS",
      "VITE",
      "REACT",
      "TYPESCRIPT",
      "TAILWIND CSS",
      "NODE.JS",
      "POSTGRESQL",
      "SUPABASE",
      "APPWRITE",
      "AWS",
      "DOCKER",
      "CLOUDFLARE",
      "VERCEL",
      "SHOPIFY",
      "RAZORPAY",
      "META ADS",
      "GOOGLE ADS",
      "GOOGLE ANALYTICS",
      "MICROSOFT CLARITY",
      "PAYTM",
      "HUBSPOT",
      "ZOHO",
      "MAILCHIMP",
    ],

  },
};
