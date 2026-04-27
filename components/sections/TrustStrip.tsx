"use client";

import { Section } from "@/components/ui/Section";

const SERVICES = [
    "Email Marketing",
    "CRM Setup",
    "Custom Dashboards",
    "E-commerce Management",
    "Brand Guidelines",
    "SEO Optimization",
    "Meta Ads",
    "Google Ads",
    "Social Media Management",
    "Content Strategy",
    "Conversion Tracking",
    "Analytics & Reporting",
    "Landing Pages",
    "Marketing Automation",
    "Brand Strategy",
];

// We need enough clones to fill the screen and then some for the loop to appear seamless.
// Since CSS will animate it, 2 sets is usually enough if it's long, let's use 4 to be safe.
const CLONE_COUNT = 4;
const MARQUEE_ITEMS = Array.from({ length: SERVICES.length * CLONE_COUNT }, (_, i) =>
    SERVICES[i % SERVICES.length]
);

export function TrustStrip() {
    return (
        <Section className="py-5 md:py-7 lg:py-8 bg-ink overflow-hidden border-b border-grid/15 flex flex-col items-center cursor-default select-none">
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 0.75rem)); }
                }
                .animate-scroll {
                    animation: scroll 60s linear infinite;
                    will-change: transform;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .animate-scroll {
                        animation: none;
                    }
                }
            `}</style>
            <div className="relative flex w-full">
                <div className="w-full overflow-hidden">
                    <div
                        className="flex w-max whitespace-nowrap animate-scroll"
                        style={{ gap: "1.5rem" }}
                    >
                        {MARQUEE_ITEMS.map((service, idx) => (
                            <div
                                key={`${service}-${idx}`}
                                className="flex shrink-0 items-center gap-6 md:gap-10 lg:gap-12 opacity-70 hover:opacity-100 transition-opacity cursor-default"
                            >
                                <span className="font-mono font-semibold text-lg md:text-xl lg:text-2xl tracking-tight uppercase text-white whitespace-nowrap">
                                    {service}
                                </span>
                                <span className="w-1.5 h-1.5 bg-white rounded-sm flex-shrink-0" aria-hidden="true" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
