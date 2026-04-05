import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import type { ComponentType, ReactNode } from "react";
import { IconStack2, IconRocket, IconTrendingUp, type IconProps } from "@tabler/icons-react";

type ManifestKind = "build" | "launch" | "scale";

type Service = {
    id: string;
    label: string;
    category: string;
    detail: string;
    subpoints: string[];
    kind: ManifestKind;
    Icon: ComponentType<IconProps>;
};

const services: Service[] = [
    {
        id: "01",
        label: "PHASE",
        category: "BUILD",
        detail: "Establish the strategic foundation your business needs to compete.",
        subpoints: [
            "Brand Assessment & Strategy: Deep dive into market positioning.",
            "Brand Identity: Logo, color systems, typography, and visual language.",
            "Brand Guidelines: Comprehensive documentation for consistent execution.",
            "Investor Pitch Decks: Narrative-driven presentations that close rounds.",
            "CRM Setup: Integrating HubSpot or Zoho for streamlined operations.",
            "Strategic Consulting: Market positioning, competitive analysis, and GTM strategy.",
        ],
        kind: "build",
        Icon: IconStack2,
    },
    {
        id: "02",
        label: "PHASE",
        category: "LAUNCH",
        detail: "Design, build, and deploy digital products that convert.",
        subpoints: [
            "UI/UX Design: Research-driven interfaces optimized for conversion and usability.",
            "Advanced Web Development: Next.js, React, headless CMS, and custom integrations.",
            "E-Commerce Development: Scalable online storefronts optimized for sales.",
            "Landing Page Optimization: High-converting bespoke landing pages.",
            "Technical SEO: Architecture and metadata tuned for maximum visibility.",
            "Deployment: CI/CD pipelines, performance optimization, and monitoring.",
        ],
        kind: "launch",
        Icon: IconRocket,
    },
    {
        id: "03",
        label: "PHASE",
        category: "SCALE",
        detail: "Drive measurable growth through data-driven marketing.",
        subpoints: [
            "Performance Marketing: Full-funnel strategy across search, social, and display.",
            "Paid Ads: Google Ads, Meta Ads, TikTok, campaign setup, creative, and optimization.",
            "Social Media Management: Content strategy, scheduling, community engagement.",
            "Email Automation: Complex sequences that nurture leads and recover carts.",
            "Analytics & Tracking: Setup of robust tracking infrastructure for data-driven decisions.",
            "Conversion Rate Optimization: A/B testing, heatmaps, and funnel analysis.",
        ],
        kind: "scale",
        Icon: IconTrendingUp,
    },
];

function VisualShell({
    Icon,
    children,
}: {
    Icon: ComponentType<IconProps>;
    children: ReactNode;
}) {
    return (
        <div className="w-full border border-grid/15 bg-white aspect-[5/4] p-4 overflow-hidden">
            <div className="flex items-center justify-between">
                <div className="h-8 w-8 border border-grid/15 bg-paper/60 grid place-items-center text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.6} />
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-2 w-10 bg-grid/10" />
                    <div className="h-2 w-6 bg-grid/10" />
                </div>
            </div>
            <div className="mt-4">{children}</div>
        </div>
    );
}

function BuildDiagram() {
    return (
        <VisualShell Icon={IconStack2}>
            {/* Brand system: color swatches + typography blocks */}
            <div className="space-y-3">
                {/* Color palette row */}
                <div className="flex gap-1.5">
                    <div className="h-6 w-6 bg-primary/80 border border-primary/25" />
                    <div className="h-6 w-6 bg-primary/50 border border-primary/15" />
                    <div className="h-6 w-6 bg-primary/25 border border-grid/15" />
                    <div className="h-6 w-6 bg-ink/70 border border-grid/15" />
                    <div className="h-6 w-6 bg-ink/30 border border-grid/15" />
                </div>

                {/* Typography blocks */}
                <div className="border border-grid/15 bg-paper/50 p-2.5">
                    <div className="h-3 w-20 bg-ink/40" />
                    <div className="mt-2 h-2 w-full bg-grid/15" />
                    <div className="mt-1 h-2 w-4/5 bg-grid/10" />
                </div>

                {/* Logo placeholder + guidelines grid */}
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 border border-primary/20 bg-primary/5 p-2 grid place-items-center aspect-square">
                        <div className="h-5 w-5 border-2 border-primary/40 rounded-sm" />
                    </div>
                    <div className="col-span-2 border border-grid/15 bg-paper/40 p-2">
                        <div className="h-2 w-full bg-grid/10" />
                        <div className="mt-1.5 h-2 w-3/4 bg-grid/10" />
                        <div className="mt-1.5 h-2 w-1/2 bg-grid/10" />
                    </div>
                </div>
            </div>
        </VisualShell>
    );
}

function LaunchDiagram() {
    return (
        <VisualShell Icon={IconRocket}>
            {/* Browser mockup with code structure */}
            <div className="border border-grid/15 bg-paper/40">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-grid/15">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
                    <div className="ml-2 h-2 w-20 bg-grid/10 rounded-sm" />
                </div>
                {/* Page content */}
                <div className="p-2.5">
                    <div className="h-2.5 w-16 bg-primary/40" />
                    <div className="mt-2 h-2 w-full bg-grid/12" />
                    <div className="mt-1 h-2 w-5/6 bg-grid/10" />
                    <div className="mt-3 grid grid-cols-2 gap-1.5">
                        <div className="h-8 border border-primary/20 bg-primary/8" />
                        <div className="h-8 border border-grid/15 bg-paper/60" />
                    </div>
                    <div className="mt-2 h-5 w-16 border border-primary/25 bg-primary/15" />
                </div>
            </div>
        </VisualShell>
    );
}

function ScaleDiagram() {
    return (
        <VisualShell Icon={IconTrendingUp}>
            {/* Growth chart with data points */}
            <div className="border border-grid/15 bg-paper/50 p-3">
                <div className="flex items-center justify-between mb-2">
                    <div className="h-2 w-12 bg-grid/15" />
                    <div className="flex items-center gap-1">
                        <div className="h-2.5 w-2.5 bg-green-600/70" />
                        <div className="h-2 w-8 bg-grid/10" />
                    </div>
                </div>
                <svg viewBox="0 0 140 52" className="h-14 w-full" aria-hidden="true">
                    {/* Grid lines */}
                    <line x1="0" y1="13" x2="140" y2="13" stroke="rgba(58,58,56,0.08)" strokeWidth="1" />
                    <line x1="0" y1="26" x2="140" y2="26" stroke="rgba(58,58,56,0.08)" strokeWidth="1" />
                    <line x1="0" y1="39" x2="140" y2="39" stroke="rgba(58,58,56,0.08)" strokeWidth="1" />
                    {/* Area fill */}
                    <path
                        d="M4 42 C20 38, 32 34, 48 28 S 80 18, 100 12 S 125 6, 136 4 L136 48 L4 48 Z"
                        fill="rgba(15,23,42,0.08)"
                    />
                    {/* Line */}
                    <path
                        d="M4 42 C20 38, 32 34, 48 28 S 80 18, 100 12 S 125 6, 136 4"
                        fill="none"
                        stroke="rgba(15,23,42,0.65)"
                        strokeWidth="2.5"
                    />
                    {/* Data points */}
                    {[
                        [4, 42],
                        [28, 34],
                        [48, 28],
                        [72, 20],
                        [100, 12],
                        [136, 4],
                    ].map(([cx, cy]) => (
                        <circle
                            key={`${cx}-${cy}`}
                            cx={cx}
                            cy={cy}
                            r="3"
                            fill="rgba(15,23,42,0.65)"
                        />
                    ))}
                </svg>
                {/* Metrics row */}
                <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="border border-grid/15 bg-white p-1.5 text-center">
                        <div className="h-2 w-6 bg-primary/40 mx-auto" />
                    </div>
                    <div className="border border-grid/15 bg-white p-1.5 text-center">
                        <div className="h-2 w-8 bg-green-600/40 mx-auto" />
                    </div>
                    <div className="border border-grid/15 bg-white p-1.5 text-center">
                        <div className="h-2 w-5 bg-primary/30 mx-auto" />
                    </div>
                </div>
            </div>
        </VisualShell>
    );
}

function ManifestVisual({ kind }: { kind: ManifestKind }) {
    if (kind === "build") {
        return <BuildDiagram />;
    }

    if (kind === "launch") {
        return <LaunchDiagram />;
    }

    return <ScaleDiagram />;
}

export function ServicesManifest() {
    return (
        <Section id="approach" className="bg-transparent">
            <Container>
                <div className="mb-12 max-w-3xl">
                    <Kicker>THE BRANDBASE METHOD</Kicker>
 <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 scroll-mt-20">
                        Three phases. One outcome: <em className="font-serif-10 italic">growth.</em>
                    </h2>
                    <p className="text-ink-muted font-mono text-sm max-w-2xl">
                        We don&apos;t sell isolated services. We build integrated systems where brand, product, and marketing work together to compound results.
                    </p>
                </div>

                <div className="border-t border-grid/15">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-grid/15 items-start cursor-default group"
                        >
                            <div className="md:col-span-1 font-mono text-primary opacity-80">
                                {service.id}.
                            </div>
                            <div className="md:col-span-4">
                                <Kicker className="mb-4">
                                    {service.label}
                                </Kicker>
                                <div className="font-serif text-xl uppercase tracking-tight">
                                    <em className="font-serif-10 italic">{service.category}</em>
                                </div>
                            </div>
                            <div className="md:col-span-4 border-l border-dashed border-grid/15 pl-4 md:border-none md:pl-0 flex flex-col justify-between">
                                <div>
                                    <div className="font-mono text-sm text-ink-muted">{service.detail}</div>
                                    <ul className="mt-5 space-y-2.5 text-sm text-ink/80 list-disc pl-5 marker:text-primary">
                                        {service.subpoints.map((point) => (
                                            <li key={point} className="leading-relaxed">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="order-first md:order-last md:col-span-3 md:justify-self-end w-full max-w-[260px] md:max-w-[320px] lg:max-w-[360px] mb-8 md:mb-0">
                                <div className="scale-75 origin-left md:scale-100 md:origin-top-right transform-gpu transition-transform">
                                    <ManifestVisual kind={service.kind} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
