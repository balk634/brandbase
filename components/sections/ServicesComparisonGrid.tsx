import { motion } from "@/components/ui/motion-lite";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import {
  BracketsIcon,
  BuildingIcon,
  ChatLinesIcon,
  GhostIcon,
  HourglassIcon,
  MessageOffIcon,
  ReceiptIcon,
  SparkIcon,
  TagIcon,
  UserIcon,
  UsersIcon,
  type SvgProps,
  CodeIcon,
} from "@/components/icons/BetterIcons";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

type ItemTone = "neutral" | "danger" | "brandbase";

function ComparisonItem({
  Icon,
  children,
  tone = "neutral",
}: {
  Icon: ComponentType<SvgProps>;
  children: string;
  tone?: ItemTone;
}) {
  const iconWrap =
    tone === "brandbase"
      ? "border border-green-800/20 bg-green-800/5"
      : tone === "danger"
        ? "border border-red-500/25 bg-red-500/10"
        : "border border-grid/15 bg-paper/60";

  const iconColor =
    tone === "brandbase" ? "text-green-800" : tone === "danger" ? "text-red-700" : "text-ink";

  return (
    <li className="flex items-center gap-3">
      <span className={cn("h-7 w-7 shrink-0 grid place-items-center", iconWrap)}>
        <Icon className={cn("h-4 w-4", iconColor)} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function ServicesComparisonGrid() {
  return (
    <Section className="bg-transparent">
      <Container>
        <div className="mb-12 max-w-4xl">
 <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif-10 tracking-tight">
            Why Business Owners choose BrandBase.
          </h2>
        </div>

        <div className="border border-grid/15 bg-white overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-grid/15 text-ink-muted bg-paper/30">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em]">
                  The Freelancer
                </div>
                <div className="h-9 w-9 border border-grid/15 bg-paper/60 grid place-items-center text-ink">
                  <UserIcon className="h-5 w-5" />
                </div>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed">
                <ComparisonItem Icon={MessageOffIcon} tone="danger">
                  Unreliable communication.
                </ComparisonItem>
                <ComparisonItem Icon={CodeIcon} tone="danger">
                  Spaghetti Code.
                </ComparisonItem>
                <ComparisonItem Icon={GhostIcon} tone="danger">
                  Disappears after launch.
                </ComparisonItem>
              </ul>
              <div className="mt-8 pt-6 border-t border-grid/15 font-mono text-xs italic tracking-wide">
                Result: High Risk.
              </div>
            </div>

            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-grid/15 text-ink-muted bg-paper/30">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em]">
                  The Big Agency
                </div>
                <div className="h-9 w-9 border border-grid/15 bg-paper/60 grid place-items-center text-ink">
                  <BuildingIcon className="h-5 w-5" />
                </div>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed">
                <ComparisonItem Icon={HourglassIcon} tone="danger">
                  Slow turnaround.
                </ComparisonItem>
                <ComparisonItem Icon={UsersIcon} tone="danger">
                  Junior staff doing the work.
                </ComparisonItem>
                <ComparisonItem Icon={ReceiptIcon} tone="danger">
                  Expensive Retainers.
                </ComparisonItem>
              </ul>
              <div className="mt-8 pt-6 border-t border-grid/15 font-mono text-xs italic tracking-wide">
                Result: Low ROI.
              </div>
            </div>

            <motion.div
              initial={{ backgroundColor: "rgba(240, 253, 244, 0)", color: "#111827" }}
              whileInView={{ backgroundColor: "#F0FDF4", color: "#166534" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 md:p-8"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] opacity-85">
                  BrandBase
                </div>
                <div className="h-9 w-9 border border-green-800/20 bg-green-800/5 grid place-items-center">
                  <SparkIcon className="h-5 w-5 text-green-800" />
                </div>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed opacity-95">
                <ComparisonItem Icon={ChatLinesIcon} tone="brandbase">
                  Direct Partner Access.
                </ComparisonItem>
                <ComparisonItem Icon={BracketsIcon} tone="brandbase">
                  Full-Service Creative + Tech.
                </ComparisonItem>
                <ComparisonItem Icon={TagIcon} tone="brandbase">
                  Custom Strategic Pricing.
                </ComparisonItem>
              </ul>
              <div className="mt-8 pt-6 border-t border-green-800/15 font-mono text-xs italic tracking-wide opacity-95">
                Result: High Impact.
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
