import { motion } from "@/components/ui/motion-lite";
import { IconScale, IconInfinity, IconShieldCheck, IconTrendingUp, type IconProps } from "@tabler/icons-react";
import type { ComponentType } from "react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { masterConfig } from "@/config/master";

type AdvantageItem = {
  id: string;
  title: string;
  body: string;
  Icon: ComponentType<IconProps>;
};

const items: AdvantageItem[] = [
  {
    id: "01",
    title: "Transparent Productized Pricing",
    body: "No hidden retainers or surprise invoices. You see exactly what is included and what it costs before we start.",
    Icon: IconScale,
  },
  {
    id: "02",
    title: "One Partner Across Web + Growth",
    body: "We treat your website and marketing as one system. Strategy, design, build, and growth execution stay aligned to the same conversion goal.",
    Icon: IconInfinity,
  },
  {
    id: "03",
    title: "Reliability Without Tech Headaches",
    body: "Hosting, maintenance, updates, and fixes are handled by us so your team can focus on operations and sales.",
    Icon: IconShieldCheck,
  },
  {
    id: "04",
    title: "Reporting That Drives Decisions",
    body: "Clear weekly visibility into what is working, what is not, and what we are changing next for compounding growth.",
    Icon: IconTrendingUp,
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function UnfairAdvantage() {
  const hoverLift = masterConfig.ui.microInteractions.cardHoverLiftPx;

  return (
    <Section className="bg-transparent">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="mb-14 max-w-3xl">
            <Kicker>THE UNFAIR ADVANTAGE</Kicker>
            <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight text-ink">
              Built for Business Owners,
              <br className="hidden sm:block" /> The BrandBase Way.
            </h2>
            <p className="mt-5 text-sm md:text-base text-ink-muted leading-relaxed max-w-2xl">
              A standardized operating model designed to remove friction from execution, reporting, and growth.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
            {items.map((item) => (
              <motion.article
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -hoverLift, transition: { duration: 0.16, ease: "easeOut" } }}
                data-mi-card
                className="mi-card border border-grid/15 bg-white group flex flex-col h-full"
              >
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                      {item.id}
                    </span>
                    <div
                      data-mi-icon
                      className="mi-card-icon h-10 w-10 border border-primary/20 bg-primary/5 grid place-items-center text-primary shrink-0"
                    >
                      <item.Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl tracking-tight text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed flex-1">{item.body}</p>
                </div>

              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
