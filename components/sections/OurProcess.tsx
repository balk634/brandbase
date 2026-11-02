import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CalButton } from "@/components/ui/CalBooking";
import { motion } from "@/components/ui/motion-lite";
import type { ComponentType } from "react";
import {
  IconSearch,
  IconLayoutDashboard,
  IconRocket,
  IconRefresh,
  type IconProps,
} from "@tabler/icons-react";
import { BoxPatternServer } from "@/components/ui/BoxPatternServer";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

type Step = {
  number: string;
  Icon: ComponentType<IconProps>;
  title: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    number: "01",
    Icon: IconSearch,
    title: "We map how your business runs",
    description:
      "A 15-minute scoping call where we learn your exact workflow — how staff take records, how you track payments, where follow-ups fall through the cracks. You get a clear scope, not a generic pitch.",
    image: "/01.jpg",
  },
  {
    number: "02",
    Icon: IconLayoutDashboard,
    title: "We design your system, field by field",
    description:
      "We configure your database tables, dashboard screens, staff access roles, and WhatsApp message templates around your exact process. Every decision is built around how your team works — not a template.",
    image: "/02.jpg",
  },
  {
    number: "03",
    Icon: IconRocket,
    title: "We go live and train your team",
    description:
      "Your system deploys to a private database. If you have a website, we connect it directly. Your staff gets a guided walkthrough — most are fully independent within a day.",
    image: "/03.jpg",
  },
  {
    number: "04",
    Icon: IconRefresh,
    title: "We refine as your operation grows",
    description:
      "Add a new doctor, a new batch, a new service bay? We update your system within hours. Ongoing hosting, WhatsApp API support, and feature additions — we stay involved as your operations scale.",
    image: "/04.jpg",
  },
];

export function OurProcess() {
  return (
    <Section className="bg-transparent border-t border-grid/10">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="mb-14 max-w-3xl">
            
            <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight text-ink">
              From a 15-minute call to a{" "}
              <em className="font-serif-10 italic">live, working system.</em>
            </h2>
            <p className="mt-4 text-ink-muted text-sm max-w-2xl leading-relaxed">
              No requirements documents, no months of back-and-forth. We move fast because
              we&apos;ve built for clinics, coaching centers, and garages before — we know what needs
              to be built before you finish describing the problem.
            </p>
          </motion.div>

          <div className="relative">
            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-0 md:gap-y-8 lg:gap-y-0 relative"
              style={{ columnGap: "3rem" }}
            >
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col items-stretch ${i < steps.length - 1 ? "pb-0" : ""}`}
                >
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -2, transition: { duration: 0.18 } }}
                    className="relative border border-grid/15 bg-paper/40 p-4 md:p-5 flex flex-col h-full group cursor-default hover:border-primary/30 hover:bg-white transition-colors duration-300"
                  >
                    <BoxPatternServer />

                    {/* Step image */}
                    <div className="w-full aspect-video mb-6 bg-paper/20 flex items-center justify-center overflow-hidden relative">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* Step number + icon */}
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <span className="font-mono text-3xl text-ink/10 font-bold leading-none">
                        {step.number}
                      </span>
                      <div className="h-8 w-8 border border-grid/15 bg-white grid place-items-center">
                        <step.Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="font-serif text-lg tracking-tight text-ink leading-tight mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[12px] text-ink-muted leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <CalButton variant="primary" size="lg">
              Start your scoping call
            </CalButton>
            <p className="text-ink-muted/70 text-xs font-mono uppercase tracking-[0.2em]">
              15 minutes · No commitment · Real person responds
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
