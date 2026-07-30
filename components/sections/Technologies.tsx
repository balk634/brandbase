"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";

interface TechItem {
    name: string;
    logo: string;
    scale?: number;
}

const DEFAULT_SCALE = 1.0;

const ALL_TECHS: TechItem[] = [
    { name: "Appwrite", logo: "/logos/appwrite.svg", scale: 1.0 },
    { name: "AWS", logo: "/logos/aws.svg", scale: 0.7 },
    { name: "C++", logo: "/logos/C++ (CPlusPlus).svg", scale: 0.9 },
    { name: "Claude", logo: "/logos/claude.svg", scale: 1.0 },
    { name: "Cloudflare", logo: "/logos/cloudflare.svg", scale: 0.8 },
    { name: "Docker", logo: "/logos/docker.svg", scale: 1.0 },
    { name: "Figma", logo: "/logos/figma.svg", scale: 0.82 },
    { name: "Firebase", logo: "/logos/firebase.svg", scale: 1.0 },
    { name: "Google Analytics", logo: "/logos/Google_Analytics.svg", scale: 0.8 },
    { name: "HubSpot", logo: "/logos/hubspot.svg", scale: 0.8 },
    { name: "MongoDB", logo: "/logos/MongoDB_Logo.svg", scale: 1.0 },
    { name: "n8n", logo: "/logos/n8n.svg", scale: 0.8 },
    { name: "Netlify", logo: "/logos/netlify.svg", scale: 1.0 },
    { name: "Next.js", logo: "/logos/nextjs.svg", scale: 0.8 },
    { name: "Node.js", logo: "/logos/nodejs.svg", scale: 1.0 },
    { name: "OpenAI", logo: "/logos/openai.svg", scale: 1.0 },
    { name: "Oracle", logo: "/logos/Oracle.svg", scale: 0.85 },
    { name: "Paytm", logo: "/logos/paytm.svg", scale: 0.6 },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", scale: 1 },
    { name: "Python", logo: "/logos/Python.svg", scale: 1.0 },
    { name: "Razorpay", logo: "/logos/razorpay.svg", scale: 1.0 },
    { name: "React", logo: "/logos/react.svg", scale: 0.8 },
    { name: "Resend", logo: "/logos/resend.svg", scale: 0.95 },
    { name: "SQLite", logo: "/logos/sqlite.svg", scale: 1.0 },
    { name: "Supabase", logo: "/logos/supabase.svg", scale: 1.0 },
    { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg", scale: 1.1 },
    { name: "Twilio", logo: "/logos/Twilio-logo-red.svg", scale: 0.9 },
    { name: "Vercel", logo: "/logos/vercel.svg", scale: 0.8 },
    { name: "Vite", logo: "/logos/vite.svg", scale: 0.8 },
    { name: "WhatsApp", logo: "/logos/whatsapp.svg", scale: 1.35 },
    { name: "Zapier", logo: "/logos/zapier.svg", scale: 1.0 },
];

export function Technologies() {
    const allowedTechs = (masterConfig.sections?.techStackStrip || []).map((t: string) => t.toLowerCase());
    const filteredTechs = ALL_TECHS.filter(tech => allowedTechs.includes(tech.name.toLowerCase()));

    // Count the number divided by 2 to split them dynamically
    const mid = Math.ceil(filteredTechs.length / 2);
    const ROW_1_TECHS = filteredTechs.slice(0, mid);
    const ROW_2_TECHS = filteredTechs.slice(mid);

    // Clone each row 4x for seamless infinite scrolling on all screen sizes
    const ROW_1_ITEMS = [...ROW_1_TECHS, ...ROW_1_TECHS, ...ROW_1_TECHS, ...ROW_1_TECHS];
    const ROW_2_ITEMS = [...ROW_2_TECHS, ...ROW_2_TECHS, ...ROW_2_TECHS, ...ROW_2_TECHS];

    return (
        <Section className="bg-transparent pt-12 pb-24 md:pt-20 md:pb-40 overflow-hidden relative">
            <Container>
                <div className="mb-14 max-w-3xl">
                    <Kicker>INFRASTRUCTURE</Kicker>
                    <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight text-ink">
                        Private databases. WhatsApp API.{" "}
                        <em className="font-serif-10 italic">Payment gateways.</em>
                    </h2>
                    <p className="mt-5 text-sm md:text-base text-ink-muted leading-relaxed max-w-2xl">
                        We don&apos;t hand you a login to someone else&apos;s platform. Your system runs on
                        private, secured infrastructure — PostgreSQL databases, Appwrite backends,
                        WhatsApp Business API, and Razorpay/Paytm billing — all fully managed with
                        zero per-user licensing fees.
                    </p>
                </div>
            </Container>

            {/* Marquee Tracks */}
            <div
                className="flex flex-col relative w-full overflow-hidden mask-horizontal-faded"
                style={{ gap: "3.5rem" }}
            >
                {/* Gradient masks for smooth fade on edges (only overlay marquee tracks) */}
                <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#f8f8f0] to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#f8f8f0] to-transparent pointer-events-none z-10" />

                {/* Row 1 - Left to Right */}
                <div className="relative flex w-full overflow-hidden">
                    <div
                        className="flex items-center w-max tech-marquee-ltr gap-12 md:gap-24"
                    >
                        {ROW_1_ITEMS.map((tech, idx) => {
                            const scale = tech.scale !== undefined ? tech.scale : DEFAULT_SCALE;
                            return (
                                <div
                                    key={`r1-${idx}`}
                                    className="flex shrink-0 items-center justify-center w-24 h-9 md:w-32 md:h-11 overflow-visible"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        style={{ transform: `scale(${scale})` }}
                                        className="w-full h-full object-contain opacity-85 hover:opacity-100 transition-all duration-300 will-change-transform"
                                        width={128}
                                        height={44}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Row 2 - Right to Left */}
                <div className="relative flex w-full overflow-hidden">
                    <div
                        className="flex items-center w-max tech-marquee-rtl gap-12 md:gap-24"
                    >
                        {ROW_2_ITEMS.map((tech, idx) => {
                            const scale = tech.scale !== undefined ? tech.scale : DEFAULT_SCALE;
                            return (
                                <div
                                    key={`r2-${idx}`}
                                    className="flex shrink-0 items-center justify-center w-24 h-9 md:w-32 md:h-11 overflow-visible"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        style={{ transform: `scale(${scale})` }}
                                        className="w-full h-full object-contain opacity-85 hover:opacity-100 transition-all duration-300 will-change-transform"
                                        width={128}
                                        height={44}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
}
