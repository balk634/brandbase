"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "@/components/ui/motion-lite";

import {
  IconHeartbeat,
  IconSchool,
  IconBuildingStore,
  IconMessage2,
  IconReceipt,
  IconUsers,
  IconDatabase,
  IconCoins,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   DATA – Four industry tabs mapped to existing dashboard images
   ────────────────────────────────────────────────────────────── */

const SYSTEM_TYPES = [
  {
    id: "clinic",
    label: "CLINIC",
    Icon: IconHeartbeat,
    heading: "CLINIC MANAGEMENT SYSTEM",
    copy: "Patient records, live queue tracker, WhatsApp recalls, and billing — all in one unified screen.",
    href: "/management-solutions/health",
    activeBorder: "border-rose-500/50",
    activeBg: "bg-rose-500/10",
    activeText: "text-rose-400",
    arrowColor: "text-rose-400",
    thumbnails: [
      { src: "/dashboard/med base.jpg", alt: "Patient queue and medical records interface", label: "Patient Records" },
      { src: "/dashboard/medbase.jpg", alt: "Appointment scheduler and clinic dashboard", label: "Queue Tracker" },
    ],
  },
  {
    id: "coaching",
    label: "COACHING CENTER",
    Icon: IconSchool,
    heading: "COACHING MANAGEMENT SYSTEM",
    copy: "Batch schedules, student profiles, attendance tracking, and automated fee reminders in one place.",
    href: "/management-solutions/education",
    activeBorder: "border-emerald-500/50",
    activeBg: "bg-emerald-500/10",
    activeText: "text-emerald-400",
    arrowColor: "text-emerald-400",
    thumbnails: [
      { src: "/dashboard/edu dashboard 1.jpg", alt: "Student batch overview and schedules", label: "Batch Overview" },
      { src: "/dashboard/edu dashboard 2.jpg", alt: "Detailed student profile and assignment tracking", label: "Student Profile" },
    ],
  },
  {
    id: "restaurant",
    label: "RESTAURANT / CAFE",
    Icon: IconBuildingStore,
    heading: "RESTAURANT MANAGEMENT SYSTEM",
    copy: "Digital menu management, active kitchen orders, table reservations, and staff roles.",
    href: "/management-solutions/food-hospitality",
    activeBorder: "border-amber-500/50",
    activeBg: "bg-amber-500/10",
    activeText: "text-amber-400",
    arrowColor: "text-amber-400",
    thumbnails: [
      { src: "/dashboard/table-menu.jpg", alt: "Digital menu and catalog management", label: "Menu Management" },
      { src: "/dashboard/table-reservation.jpg", alt: "Live table booking and reservation dashboard", label: "Reservations Grid" },
    ],
  },
];

const SYSTEM_FEATURES = [
  { text: "Built for your specific industry", Icon: IconBuildingStore },
  { text: "WhatsApp automation built-in", Icon: IconMessage2 },
  { text: "GST invoices in one tap", Icon: IconReceipt },
  { text: "Staff role-based access", Icon: IconUsers },
  { text: "Private database — your data", Icon: IconDatabase },
  { text: "No per-seat monthly fees", Icon: IconCoins },
];

/* ──────────────────────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────────────────────── */

export function DashboardShowcase() {
  const [active, setActive] = useState(0);
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);
  const current = SYSTEM_TYPES[active];
  const currentImage = current.thumbnails[activeThumbnailIndex];

  const handleTabClick = (idx: number) => {
    setActive(idx);
    setActiveThumbnailIndex(0);
  };

  return (
    <section
      id="dashboard"
      className="w-full bg-ink pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden scroll-mt-24 relative"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl"
        >
          <Kicker className="border-white/15 bg-white/8 text-white/80">
            WHAT YOUR SYSTEM LOOKS LIKE
          </Kicker>
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight text-white leading-[1.05]">
            A complete business system,{" "}
            <em className="font-serif-10 italic text-white/50">not just another pretty dashboard.</em>
          </h2>
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-2xl">
            This is a fully custom operational engine built to run your entire business. From private databases and automated WhatsApp recall engines to staff access levels and live booking calendars, everything is engineered to work together in one unified platform.
          </p>
        </motion.div>

        {/* 2-col layout */}
        <div className="grid lg:grid-cols-[480px_1fr] gap-10 lg:gap-16 items-start">

          {/* Left: system tabs + features */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* Tabs */}
            <div className="flex flex-col gap-2">
              {SYSTEM_TYPES.map((type, idx) => {
                const Icon = type.Icon;
                const isActive = active === idx;
                return (
                  <button
                    key={type.id}
                    onClick={() => handleTabClick(idx)}
                    className={[
                      "mi-btn flex items-start gap-4 p-4 border text-left transition-all duration-300 w-full relative group",
                      isActive
                        ? "border-white/15 bg-white/5"
                        : "border-white/5 bg-transparent hover:border-white/10 hover:bg-white/[0.02]",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "h-10 w-10 shrink-0 grid place-items-center border transition-all duration-300 mi-card-icon",
                        isActive
                          ? `${type.activeBorder} ${type.activeBg} ${type.activeText}`
                          : "border-white/15 bg-white/[0.03] text-white/40 group-hover:border-white/25 group-hover:bg-white/[0.05] group-hover:text-white/60",
                      ].join(" ")}
                    >
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0 pr-6">
                      <span
                        className={[
                          "block font-mono text-[10px] uppercase tracking-[0.25em] transition-colors duration-300",
                          isActive ? "text-white" : "text-white/65",
                        ].join(" ")}
                      >
                        {type.heading}
                      </span>
                      <p
                        className={[
                          "mt-1.5 text-[12px] leading-relaxed transition-all duration-300 line-clamp-2",
                          isActive ? "text-white/80" : "text-white/60 group-hover:text-white/75",
                        ].join(" ")}
                      >
                        {type.copy}
                      </p>
                    </div>
                    {isActive && (
                      <span
                        className={[
                          "absolute right-4 top-5 text-[15px] font-medium transition-transform duration-300",
                          type.arrowColor,
                        ].join(" ")}
                      >
                        →
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feature checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {SYSTEM_FEATURES.map((f, idx) => {
                const FeatureIcon = f.Icon;
                return (
                  <li key={idx} className="flex items-center gap-3 group/item">
                    <div className="h-8 w-8 shrink-0 bg-primary text-white grid place-items-center transition-all duration-200 group-hover/item:bg-primary/80">
                      <FeatureIcon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <span className="text-[12px] text-white/70 leading-snug group-hover/item:text-white transition-colors duration-200">{f.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                asChild
                variant="primary"
                size="lg"
                className="sm:min-w-[220px]"
              >
                <Link href={current.href}>
                  Explore {current.label.charAt(0) + current.label.slice(1).toLowerCase()} System →
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: screenshot viewer */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="flex flex-col gap-4 order-1 lg:order-2"
          >
            {/* Main image */}
            <div
              className="relative w-full border border-white/10 overflow-hidden bg-white/5"
              style={{ aspectRatio: "1920 / 912" }}
            >
              <AnimatePresence>
                <motion.div
                  key={`${current.id}-${activeThumbnailIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 768px) 100vw, 55vw"
                    quality={70}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
            </div>

            {/* Sub-thumbnails */}
            <div className="grid grid-cols-2 gap-3">
              {current.thumbnails.map((thumb, idx) => {
                const isThumbActive = activeThumbnailIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveThumbnailIndex(idx)}
                    className={[
                      "relative aspect-[16/9] border transition-all duration-300 overflow-hidden bg-white/5 text-left group",
                      isThumbActive
                        ? `${current.activeBorder} ring-1 ring-white/5`
                        : "border-white/5 hover:border-white/15",
                    ].join(" ")}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.alt}
                      fill
                      className={[
                        "object-cover object-top transition-all duration-500 opacity-40 group-hover:opacity-75",
                        isThumbActive ? "scale-100" : "scale-95 group-hover:scale-100",
                      ].join(" ")}
                      sizes="(max-width: 768px) 30vw, 15vw"
                    />
                  </button>
                );
              })}
            </div>

            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/60">
              {current.heading} · {currentImage.label} · Live screenshot
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
