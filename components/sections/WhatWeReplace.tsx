"use client";

import { useEffect, useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { motion } from "@/components/ui/motion-lite";
import {
  IconClipboard,
  IconMessage2,
  IconTable,
  IconFiles,
  IconAlertTriangle,
  IconClock,
  IconSend,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";
import Image from "next/image";

// ─── Animated Counter Hook/Component ───────────────────────────────────────

function AnimatedCounter({ value, duration = 1200 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Extract number and suffix (like %, ×, etc.)
  const numericMatch = value.match(/(\d+)/);
  const suffix = value.replace(/\d+/g, "");
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = 0;
          const end = target;
          if (start === end) {
            setCount(end);
            return;
          }
          const startTime = performance.now();

          const updateCount = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const current = Math.floor(easeProgress * (end - start) + start);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {suffix === "×" ? `${count}×` : `${count}${suffix}`}
    </span>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────

const BEFORE_ITEMS = [
  {
    Icon: IconClipboard,
    label: "Paper patient registers",
    detail: "Lost, damaged, or unreadable by the next staff shift.",
  },
  {
    Icon: IconMessage2,
    label: "WhatsApp groups for coordination",
    detail: "Messages scroll out of sight. Nothing is tracked.",
  },
  {
    Icon: IconTable,
    label: "Excel sheets for fees & billing",
    detail: "One formula error and your accounts are wrong for weeks.",
  },
  {
    Icon: IconFiles,
    label: "Separate files for each student / patient",
    detail: "Finding any record takes longer than the service itself.",
  },
  {
    Icon: IconAlertTriangle,
    label: "Manual follow-up calls for reminders",
    detail: "Your staff makes 40 calls. 30 go unanswered.",
  },
];

const AFTER_STATS = [
  { value: "80%", label: "Reduction in overall manual admin time", Icon: IconClock },
  { value: "3×", label: "follow-ups sent automatically through WhatsApp", Icon: IconSend },
  { value: "0", label: "Paper registers or spreadsheets in use", Icon: IconFileText },
  { value: "100%", label: "Records searchable in under 5 seconds", Icon: IconSearch },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function WhatWeReplace() {
  return (
    <section className="w-full bg-transparent overflow-hidden">
      <Container>
        <div className="py-20 md:py-28 border-t border-grid/15">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mb-16 max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <Kicker>
                WHAT WE REPLACE
              </Kicker>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight text-ink leading-[1.05]"
            >
              Most Indian businesses still run on{" "}
              <em className="font-serif-10 italic text-ink/75">things that break.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-ink-muted leading-relaxed max-w-xl">
              Not because the owners aren&apos;t capable — but because no one built the right tool for
              a 3-doctor clinic or a 200-student coaching center. Generic CRMs are built for
              SaaS companies. We build for the businesses that make cities work.
            </motion.p>
          </motion.div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-0 border border-grid/15">

            {/* Left: Before */}
            <div className="border-b lg:border-b-0 lg:border-r border-grid/15 flex flex-col">
              <div className="p-6 md:p-8 border-b border-grid/15 bg-red-500/[0.04]">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-red-700 font-semibold">
                  Before — The daily reality
                </span>
              </div>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={stagger}
                className="flex-1 flex flex-col gap-3 p-4 md:p-6 bg-paper/20"
              >
                {BEFORE_ITEMS.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={fadeUp}
                    className="flex-1 flex flex-col items-start justify-center gap-3 p-5 md:p-6 group bg-white border border-red-200/50 hover:border-red-400/50 hover:shadow-[0_4px_12px_rgba(239,68,68,0.02)] transition-all duration-300 ease-in-out mi-row"
                  >
                    <div className="h-9 w-9 shrink-0 border border-red-400/30 bg-red-50 text-red-500 grid place-items-center transition-all duration-300 ease-in-out group-hover:border-red-500/60 group-hover:bg-red-100 group-hover:text-red-600 mi-card-icon">
                      <item.Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-ink leading-snug transition-colors duration-300 ease-in-out group-hover:text-red-700">{item.label}</div>
                      <div className="mt-1 text-xs text-ink-muted/85 leading-relaxed transition-colors duration-300 ease-in-out group-hover:text-red-900/85">{item.detail}</div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Right: After */}
            <div className="flex flex-col">
              <div className="p-6 md:p-8 border-b border-grid/15 bg-emerald-500/[0.04]">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-emerald-700 font-semibold">
                  After — With a custom system
                </span>
              </div>
              <div className="relative w-full aspect-[16/9] md:aspect-[2.5/1] border-b border-grid/15 overflow-hidden">
                <Image
                  src="/home/jpg/what we replace green.jpg"
                  alt="Operations transformed with custom system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                  quality={55}
                />
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={stagger}
                className="grid grid-cols-2 divide-x divide-y divide-emerald-100/50 flex-1 bg-emerald-50/[0.04]"
              >
                {AFTER_STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className="flex flex-col justify-between p-6 md:p-8 bg-white hover:bg-white hover:-translate-y-1 transition-all duration-300 ease-in-out group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-7 w-7 border border-emerald-500/25 bg-emerald-500/5 grid place-items-center rounded-none relative overflow-hidden">
                        <span className="absolute inset-0 m-auto w-1.5 h-1.5 bg-emerald-500 rounded-none animate-ping opacity-75" />
                        <span className="relative w-1.5 h-1.5 bg-emerald-500 rounded-none" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-3 text-emerald-600/80">
                        <stat.Icon className="h-7 w-7" strokeWidth={1.25} />
                      </div>
                      <div className="inline-flex items-center justify-center bg-emerald-600 text-white font-serif text-2xl md:text-3xl px-3.5 py-1.5 rounded-none min-w-[56px] h-[44px] tracking-tight">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <div className="mt-3 text-sm text-ink-muted leading-relaxed font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
