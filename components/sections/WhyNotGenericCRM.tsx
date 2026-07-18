"use client";


import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { motion } from "@/components/ui/motion-lite";
import {
  IconUsers,
  IconCoins,
  IconUserCheck,
  IconMessage2,
  IconDatabase,
  IconAdjustments,
} from "@tabler/icons-react";


const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const THEM_VS_US = [
  {
    Icon: IconUsers,
    them: "Built for SaaS sales teams chasing leads",
    us: "Built for clinics, coaching centers, and restaurants serving real people",
  },
  {
    Icon: IconCoins,
    them: "Charges ₹1,500–₹8,000 per user, per month",
    us: "Flat infrastructure hosting — no per-seat fees, ever",
  },
  {
    Icon: IconUserCheck,
    them: "Requires a dedicated admin to configure",
    us: "Your staff uses it on day one, with role-based access from the start",
  },
  {
    Icon: IconMessage2,
    them: "Email campaigns and sales pipelines you'll never use",
    us: "WhatsApp automations, queue tracking, and GST billing you use daily",
  },
  {
    Icon: IconDatabase,
    them: "Your data stored on their servers, subject to their terms",
    us: "Your data lives on your private, secured database — it's yours",
  },
  {
    Icon: IconAdjustments,
    them: "One rigid template that bends your workflow to fit the software",
    us: "Custom database fields, screens, and flows built around how you actually work",
  },
];


export function WhyNotGenericCRM() {
  return (
    <section className="w-full bg-paper border-t border-grid/10 overflow-hidden">
      <Container>
        <div className="py-20 md:py-28">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mb-16 grid md:grid-cols-2 gap-10 md:gap-16 items-end"
          >
            <div>
              <motion.div variants={fadeUp}>
                <Kicker>WHY NOT A GENERIC CRM</Kicker>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink leading-[1.05]"
              >
                Zoho and HubSpot weren&apos;t built{" "}
                <em className="font-serif-10 italic">for your business.</em>
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-sm md:text-base text-ink-muted leading-relaxed">
              Generic CRMs exist to manage leads, email lists, and sales forecasts for software companies.
              They were not designed for a 2-doctor clinic tracking patient history, a coaching center
              chasing fee dues, or a restaurant managing table reservations.
              We build what those tools can&apos;t.
            </motion.p>
          </motion.div>

          {/* DESKTOP: Comparison Table (md and up) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="hidden md:block border border-grid/15 bg-white overflow-hidden"
          >
            {/* Column Headers */}
            <div className="grid grid-cols-2">
              <div className="p-4 md:p-5 border-b border-r border-grid/15 flex items-center gap-2 bg-red-50/30">
                <div className="h-5 w-5 border border-red-500/25 bg-red-500/10 grid place-items-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-600/70">
                  Generic CRM (Zoho, HubSpot)
                </span>
              </div>
              <div className="p-4 md:p-5 border-b border-grid/15 flex items-center gap-2 bg-emerald-50/30">
                <div className="h-5 w-5 border border-emerald-500/25 bg-emerald-500/5 grid place-items-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-600/70">
                  BrandBase Custom System
                </span>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-grid/10">
              {THEM_VS_US.map((row, idx) => {
                const RowIcon = row.Icon;
                return (
                  <div key={idx} className="grid grid-cols-2">
                    {/* Left Column: Them */}
                    <motion.div
                      variants={fadeInLeft}
                      whileHover={{ x: 3, transition: { duration: 0.16 } }}
                      className="mi-row flex items-center gap-4 p-5 md:p-6 border-r border-grid/10 cursor-default"
                    >
                      <div className="h-8 w-8 border border-red-500/25 bg-red-500/10 grid place-items-center flex-shrink-0 text-red-600">
                        <RowIcon className="h-4 w-4" />
                      </div>
                      <p className="text-[13px] text-ink-muted leading-relaxed">{row.them}</p>
                    </motion.div>

                    {/* Right Column: Us */}
                    <motion.div
                      variants={fadeInLeft}
                      whileHover={{ x: 3, transition: { duration: 0.16 } }}
                      className="mi-row flex items-center gap-4 p-5 md:p-6 cursor-default"
                    >
                      <div className="h-8 w-8 border border-emerald-500/25 bg-emerald-500/5 grid place-items-center flex-shrink-0 text-emerald-600">
                        <RowIcon className="h-4 w-4" />
                      </div>
                      <p className="text-[13px] text-ink leading-relaxed font-medium">{row.us}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* MOBILE: Separate Blocks (less than md) */}
          <div className="flex flex-col gap-6 md:hidden">
            {/* Them Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
              className="border border-grid/15 bg-white overflow-hidden"
            >
              <div className="p-4 flex items-center gap-2 bg-red-50/30 border-b border-grid/15">
                <div className="h-5 w-5 border border-red-500/25 bg-red-500/10 grid place-items-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-600/70">
                  Generic CRM (Zoho, HubSpot)
                </span>
              </div>
              <div className="divide-y divide-grid/10">
                {THEM_VS_US.map((row, idx) => {
                  const RowIcon = row.Icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeInLeft}
                      whileHover={{ x: 3, transition: { duration: 0.16 } }}
                      className="mi-row flex items-center gap-4 p-5 cursor-default"
                    >
                      <div className="h-8 w-8 border border-red-500/25 bg-red-500/10 grid place-items-center flex-shrink-0 text-red-600">
                        <RowIcon className="h-4 w-4" />
                      </div>
                      <p className="text-[13px] text-ink-muted leading-relaxed">{row.them}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Us Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
              className="border border-grid/15 bg-white overflow-hidden"
            >
              <div className="p-4 flex items-center gap-2 bg-emerald-50/30 border-b border-grid/15">
                <div className="h-5 w-5 border border-emerald-500/25 bg-emerald-500/5 grid place-items-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-600/70">
                  BrandBase Custom System
                </span>
              </div>
              <div className="divide-y divide-grid/10">
                {THEM_VS_US.map((row, idx) => {
                  const RowIcon = row.Icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeInLeft}
                      whileHover={{ x: 3, transition: { duration: 0.16 } }}
                      className="mi-row flex items-center gap-4 p-5 cursor-default"
                    >
                      <div className="h-8 w-8 border border-emerald-500/25 bg-emerald-500/5 grid place-items-center flex-shrink-0 text-emerald-600">
                        <RowIcon className="h-4 w-4" />
                      </div>
                      <p className="text-[13px] text-ink leading-relaxed font-medium">{row.us}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
