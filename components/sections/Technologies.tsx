"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";

interface TechItem {
    name: string;
    logo: string;
    scale?: number;
}

const DEFAULT_SCALE = 1.0;

const ALL_TECHS: TechItem[] = [
    { name: "Ahrefs", logo: "/brandstrip/ahrefs.svg", scale: 1.0 },
    { name: "Appwrite", logo: "/brandstrip/appwrite.svg", scale: 1.0 },
    { name: "AWS", logo: "/brandstrip/aws.svg", scale: 0.7 },
    { name: "Azure", logo: "/brandstrip/azure.svg", scale: 1.2 },
    { name: "Claude", logo: "/brandstrip/claude.svg", scale: 1.0 },
    { name: "Cloudflare", logo: "/brandstrip/cloudflare.svg", scale: 0.8 },
    { name: "Docker", logo: "/brandstrip/docker.svg", scale: 1.0 },
    { name: "Figma", logo: "/brandstrip/figma.svg", scale: 0.82 },
    { name: "Firebase", logo: "/brandstrip/firebase.svg", scale: 1.0 },
    { name: "Google Ads", logo: "/brandstrip/google-ads.svg", scale: 1.2 },
    { name: "Google Analytics", logo: "/brandstrip/google-analytics.svg", scale: 0.8 },
    { name: "Google Cloud", logo: "/brandstrip/google-cloud.svg", scale: 1.0 },
    { name: "Google Tag Manager", logo: "/brandstrip/google-tag-manager.svg", scale: 1.3 },
    { name: "Hostinger", logo: "/brandstrip/hostinger.svg", scale: 1.0 },
    { name: "HubSpot", logo: "/brandstrip/hubspot.svg", scale: 0.8 },
    { name: "Illustrator", logo: "/brandstrip/illustrator.svg", scale: 1.1 },
    { name: "Instagram", logo: "/brandstrip/instagram.svg", scale: 0.9 },
    { name: "LinkedIn Ads", logo: "/brandstrip/linkedin-ads.svg", scale: 1.3 },
    { name: "Mailchimp", logo: "/brandstrip/mailchimp.svg", scale: 1.0 },
    { name: "Meta", logo: "/brandstrip/meta.svg", scale: 0.8 },
    { name: "n8n", logo: "/brandstrip/n8n.svg", scale: 0.8 },
    { name: "Netlify", logo: "/brandstrip/netlify.svg", scale: 1.0 },
    { name: "Next.js", logo: "/brandstrip/nextjs.svg", scale: 0.8 },
    { name: "Node.js", logo: "/brandstrip/nodejs.svg", scale: 1.0 },
    { name: "OpenAI", logo: "/brandstrip/openai.svg", scale: 1.0 },
    { name: "Paytm", logo: "/brandstrip/paytm.svg", scale: 0.6 },
    { name: "PostgreSQL", logo: "/brandstrip/postgresql.svg", scale: 1 },
    { name: "Razorpay", logo: "/brandstrip/razorpay.svg", scale: 1.0 },
    { name: "React", logo: "/brandstrip/react.svg", scale: 0.8 },
    { name: "Semrush", logo: "/brandstrip/semrush.svg", scale: 1.2 },
    { name: "SQLite", logo: "/brandstrip/sqlite.svg", scale: 1.0 },
    { name: "Supabase", logo: "/brandstrip/supabase.svg", scale: 1.0 },
    { name: "Tailwind CSS", logo: "/brandstrip/tailwindcss.svg", scale: 1.1 },
    { name: "Vercel", logo: "/brandstrip/vercel.svg", scale: 0.8 },
    { name: "Vite", logo: "/brandstrip/vite.svg", scale: 0.8 },
    { name: "WhatsApp", logo: "/brandstrip/whatsapp.svg", scale: 1.35 },
    { name: "Zapier", logo: "/brandstrip/zapier.svg", scale: 1.0 },
    { name: "Zoho", logo: "/brandstrip/zoho.svg", scale: 0.8 },
];

// Count the number divided by 2 to split them dynamically
const mid = Math.ceil(ALL_TECHS.length / 2);
const ROW_1_TECHS = ALL_TECHS.slice(0, mid);
const ROW_2_TECHS = ALL_TECHS.slice(mid);

// Clone each row exactly once for seamless infinite scrolling
const ROW_1_ITEMS = [...ROW_1_TECHS, ...ROW_1_TECHS];
const ROW_2_ITEMS = [...ROW_2_TECHS, ...ROW_2_TECHS];

export function Technologies() {
    return (
        <Section className="bg-transparent pt-12 pb-24 md:pt-20 md:pb-40 overflow-hidden relative">
            <Container>
                <div className="mb-14 max-w-3xl">
                    <Kicker>Platforms &amp; Technologies</Kicker>
                    <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight text-ink">
                        Powered by <em className="font-serif-10 italic">Industry Leading</em> Platforms
                    </h2>
                    <p className="mt-5 text-sm md:text-base text-ink-muted leading-relaxed max-w-2xl">
                        We use battle-tested platforms and slick technologies to power SEO, performance marketing, and website development with scalable execution and measurable growth wins.
                    </p>
                </div>
            </Container>

            {/* Marquee Tracks */}
            <div
                className="flex flex-col relative w-full overflow-hidden mask-horizontal-faded"
                style={{ gap: "4.5rem" }}
            >
                {/* Row 1 - Left to Right */}
                <div className="relative flex w-full overflow-hidden">
                    <div
                        className="flex items-center w-max tech-marquee-ltr"
                        style={{ gap: "6rem" }}
                    >
                        {ROW_1_ITEMS.map((tech, idx) => {
                            const scale = tech.scale !== undefined ? tech.scale : DEFAULT_SCALE;
                            return (
                                <div
                                    key={`r1-${idx}`}
                                    className="flex shrink-0 items-center justify-center w-28 h-10 md:w-32 md:h-11 overflow-visible"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        style={{ transform: `scale(${scale})` }}
                                        className="w-full h-full object-contain opacity-85 hover:opacity-100 transition-all duration-300 will-change-transform"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Row 2 - Right to Left */}
                <div className="relative flex w-full overflow-hidden">
                    <div
                        className="flex items-center w-max tech-marquee-rtl"
                        style={{ gap: "6rem" }}
                    >
                        {ROW_2_ITEMS.map((tech, idx) => {
                            const scale = tech.scale !== undefined ? tech.scale : DEFAULT_SCALE;
                            return (
                                <div
                                    key={`r2-${idx}`}
                                    className="flex shrink-0 items-center justify-center w-28 h-10 md:w-32 md:h-11 overflow-visible"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        style={{ transform: `scale(${scale})` }}
                                        className="w-full h-full object-contain opacity-85 hover:opacity-100 transition-all duration-300 will-change-transform"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Gradient masks for smooth fade on edges */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#f8f8f0ff] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#f8f8f0ff] to-transparent pointer-events-none z-10" />
        </Section>
    );
}
