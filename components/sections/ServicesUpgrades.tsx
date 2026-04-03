import type { ComponentType } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SquareTickIcon } from "@/components/icons/StatusIcons";
import { cn } from "@/lib/utils";
import { IconStack2, IconRocket, IconTrendingUp, type IconProps } from "@tabler/icons-react";

type UpgradeKind = "build" | "launch" | "scale";

type Upgrade = {
  id: string;
  tag: string;
  title: string;
  bestFor: string;
  kind: UpgradeKind;
  problem: string;
  upgrade: string;
  typical: string[];
  brandbase: string[];
  deliverables: string[];
  Icon: ComponentType<IconProps>;
};

const upgrades: Upgrade[] = [
  {
    id: "01",
    tag: "BUILD",
    title: "Establish a brand that commands premium pricing.",
    bestFor: "Startups without a brand, or established businesses with an outdated identity.",
    kind: "build",
    problem:
      "Without a distinct brand, you're invisible in a crowded market. Customers default to competitors who look more credible, even if your product is better.",
    upgrade:
      "We build brand systems from scratch: identity, guidelines, pitch decks, and strategic positioning that makes your market take notice.",
    typical: [
      "No brand guidelines.",
      "DIY logo and colors.",
      "Inconsistent across channels.",
    ],
    brandbase: [
      "Complete brand system.",
      "Investor-ready pitch materials.",
      "Strategic market positioning.",
    ],
    deliverables: [
      "Brand Identity (Logo, Colors, Typography).",
      "Brand Guidelines Document.",
      "Investor Pitch Deck.",
      "Competitive Analysis + Positioning.",
      "Brand Voice + Messaging Framework.",
      "Social Media Brand Kit.",
    ],
    Icon: IconStack2,
  },
  {
    id: "02",
    tag: "LAUNCH",
    title: "Ship a digital product that converts from day one.",
    bestFor: "Businesses launching a new product or rebuilding an outdated web presence.",
    kind: "launch",
    problem:
      "A beautiful site is useless if it doesn't convert. Most web projects focus on aesthetics and ignore the architecture that drives leads, sales, and retention.",
    upgrade:
      "We design and build conversion-first digital products - fast, accessible, and optimized for every device and search engine.",
    typical: [
      "Template-based design.",
      "Slow load times.",
      "No analytics or tracking.",
    ],
    brandbase: [
      "Custom UI/UX research.",
      "Sub-second load times.",
      "Full analytics + event tracking.",
    ],
    deliverables: [
      "UI/UX Design (Figma).",
      "Custom Web Development (Next.js/React).",
      "CMS Integration.",
      "Performance Optimization.",
      "SEO Foundation + Schema.",
      "Deployment + CI/CD Pipeline.",
    ],
    Icon: IconRocket,
  },
  {
    id: "03",
    tag: "SCALE",
    title: "Turn ad spend into predictable, compounding revenue.",
    bestFor: "Brands spending on ads without clear ROI, or businesses ready to scale acquisition.",
    kind: "scale",
    problem:
      "Running ads without strategy is expensive. Without proper targeting, creative testing, and funnel optimization, most ad spend is wasted.",
    upgrade:
      "We build performance marketing engines: strategy, execution, and optimization across every channel that matters to your audience.",
    typical: [
      "Boosted posts as strategy.",
      "No landing page optimization.",
      "No attribution or tracking.",
    ],
    brandbase: [
      "Full-funnel ad strategy.",
      "A/B tested landing pages.",
      "Multi-touch attribution.",
    ],
    deliverables: [
      "Performance Marketing Strategy.",
      "Google Ads + Meta Ads Campaigns.",
      "Landing Page Design + Development.",
      "Conversion Rate Optimization.",
      "Monthly Reporting + Insights.",
      "Social Media Management.",
    ],
    Icon: IconTrendingUp,
  },
];

const compareStyles = {
  typical: {
    border: "border-grid/15",
    bg: "bg-paper/50",
    dot: "bg-grid/25",
    label: "text-ink-muted",
  },
  brandbase: {
    border: "border-green-800/25",
    bg: "bg-green-800/5",
    dot: "bg-green-800/70",
    label: "text-green-800",
  },
  problem: {
    border: "border-red-500/25",
    bg: "bg-red-500/10",
    label: "text-red-700/80",
  },
} as const;

function CheckRow({ item }: { item: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-0.5 h-6 w-6 shrink-0 border border-primary/25 bg-white grid place-items-center text-primary"
      >
        <SquareTickIcon className="h-5 w-5" />
      </span>
      <span className="leading-relaxed">{item}</span>
    </li>
  );
}

function UpgradeBlock({ item }: { item: Upgrade }) {
  return (
    <div className="border border-grid/15 bg-white hover:border-primary/30 transition-colors duration-300">
      <div className="p-7 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-muted">
                {item.id}. {item.tag}
              </div>
              <span className="h-1.5 w-1.5 bg-primary/70" aria-hidden="true" />
            </div>
 <h3 className="h3 mt-4 font-serif text-2xl md:text-3xl tracking-tight text-ink">
              {item.title.split(' ').map((word, i, arr) => 
                  i === arr.length - 1 ? <em key={i} className="font-serif-10 italic">{word}</em> : <span key={i}>{word} </span>
              )}
            </h3>
            <p className="mt-3 text-[13px] text-ink-muted leading-relaxed max-w-3xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mr-2">
                Best for:
              </span>
              {item.bestFor}
            </p>
          </div>

          <div
            className={cn(
              "h-12 w-12 border border-primary/25 bg-paper/60 grid place-items-center text-ink shrink-0"
            )}
            aria-hidden="true"
          >
            <item.Icon className="h-6 w-6" />
          </div>
        </div>
      </div>

      <div className="border-t border-grid/15 grid divide-y md:divide-y-0 md:grid-cols-3 md:divide-x divide-grid/15 items-stretch">
        <div className="p-7 md:p-8 flex flex-col">
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
            Compare
          </div>
          <div className="mt-4 flex flex-col gap-3 flex-1">
            <div
              className={cn(
                "border p-5 flex-1",
                compareStyles.typical.border,
                compareStyles.typical.bg
              )}
            >
              <div className={cn("font-mono text-[10px] uppercase tracking-[0.35em]", compareStyles.typical.label)}>
                Typical
              </div>
              <ul className="mt-4 space-y-2 text-[12px] leading-relaxed text-ink/75">
                {item.typical.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed">
                    <span
                      className={cn("mt-2 h-1.5 w-1.5 shrink-0", compareStyles.typical.dot)}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn("border p-5 flex-1", compareStyles.brandbase.border, compareStyles.brandbase.bg)}
            >
              <div className={cn("font-mono text-[10px] uppercase tracking-[0.35em]", compareStyles.brandbase.label)}>
                BrandBase
              </div>
              <ul className="mt-4 space-y-2 text-[12px] leading-relaxed text-ink/80">
                {item.brandbase.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed">
                    <span
                      className={cn("mt-2 h-1.5 w-1.5 shrink-0", compareStyles.brandbase.dot)}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-7 md:p-8 flex flex-col">
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
            Deliverables
          </div>
          <div className="mt-4 border border-grid/15 bg-paper/40 p-5 flex-1">
            <ul className="space-y-7 md:space-y-8 text-[12px] text-ink/80">
              {item.deliverables.map((deliverable) => (
                <CheckRow key={deliverable} item={deliverable} />
              ))}
            </ul>
          </div>
        </div>

        <div className="p-7 md:p-8 flex flex-col">
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
            Why it matters
          </div>
          <div className="mt-4 flex flex-col gap-3 flex-1">
            <div
              className={cn(
                "border p-5 flex-1",
                compareStyles.problem.border,
                compareStyles.problem.bg
              )}
            >
              <div className={cn("font-mono text-[10px] uppercase tracking-[0.35em]", compareStyles.problem.label)}>
                The Risk
              </div>
              <p className="mt-3 text-[12px] text-ink-muted leading-relaxed">{item.problem}</p>
            </div>

            <div className={cn("border p-5 flex-1", compareStyles.brandbase.border, compareStyles.brandbase.bg)}>
              <div className={cn("font-mono text-[10px] uppercase tracking-[0.35em]", compareStyles.brandbase.label)}>
                The Upgrade
              </div>
              <p className="mt-3 text-[12px] text-ink-muted leading-relaxed">{item.upgrade}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesUpgrades() {
  return (
    <Section className="bg-transparent">
      <Container>
        <div className="mb-12 max-w-4xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
            BUSINESS UPGRADES
          </div>
 <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight">
            Three upgrades. Three <em className="font-serif-10 italic">outcomes.</em>
          </h2>
          <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">
            We don&apos;t deliver tasks. We deliver strategic outcomes across Build, Launch, and
            Scale, each designed to compound the value of the others.
          </p>
        </div>

        <div className="grid gap-4">
          {upgrades.map((item) => (
            <UpgradeBlock key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
