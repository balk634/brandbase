import Link from "next/link";
import Image from "next/image";
import { HeroImage } from "@/components/ui/HeroImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { StandardFAQSection } from "@/components/sections/StandardFAQSection";
import { buildPageMetadata } from "@/lib/seoMetadata";
import {
  IconChefHat,
  IconReceipt,
  IconClock,
  IconMessage2,
  IconDatabase,
  IconDeviceDesktop,
  IconCheck,
  IconCircleCheck,
  IconExclamationCircle,
  IconUsers,
  IconSettings,
  IconCalendarEvent,
  IconTools,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";

export const metadata = buildPageMetadata({
  title: "Restaurant Management System | Orders, Kitchen & Menu Control",
  description:
    "Stop losing orders to paper tickets and manual errors. Our Restaurant Management System handles live orders, kitchen display, dynamic menus, and table reservations — built for independent cafés and restaurants.",
  path: "/management-solutions/food-hospitality",
});

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInLeft = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInRight = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const staggerSlow = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const deliverables: { title: string; image: string; bullets: { text: string; Icon: ComponentType<{ className?: string }> }[]; Icon: ComponentType<{ className?: string }> }[] = [
  {
    title: "Live Order Dashboard",
    image: "/res/jpg/active kitchen order boards.jpg",
    Icon: IconReceipt,
    bullets: [
      { text: "View incoming online, phone, or walk-in orders in real time.", Icon: IconClock },
      { text: "Manage preparation states and dispatch stages in one view.", Icon: IconCheck },
    ]
  },
  {
    title: "Kitchen Display System (KDS)",
    image: "/res/jpg/tablet display systems.jpg",
    Icon: IconDeviceDesktop,
    bullets: [
      { text: "Orders appear directly on kitchen tablets, replacing paper tickets.", Icon: IconDeviceDesktop },
      { text: "Drastically reduce wait times and order miscommunication.", Icon: IconUsers },
    ]
  },
  {
    title: "Dynamic Menu & Availability",
    image: "/res/jpg/dynamic menu clipboards.jpg",
    Icon: IconChefHat,
    bullets: [
      { text: "Instantly update menu prices or mark items 'Sold Out' in one tap.", Icon: IconSettings },
      { text: "Sync updates immediately to your digital QR and online menus.", Icon: IconCheck },
    ]
  },
  {
    title: "Real-Time Inventory Sync",
    image: "/res/jpg/stock sync database.jpg",
    Icon: IconDatabase,
    bullets: [
      { text: "Automatically deduct stock ingredients as orders complete.", Icon: IconDatabase },
      { text: "Low-ingredient warnings sent automatically to the chef's dashboard.", Icon: IconExclamationCircle },
    ]
  },
  {
    title: "Table & Reservation Logs",
    image: "/res/jpg/table reservation.jpg",
    Icon: IconCalendarEvent,
    bullets: [
      { text: "Track booking timings, seat availability, and guest check-ins.", Icon: IconUsers },
      { text: "Integrated SMS/WhatsApp confirmations sent automatically to guests.", Icon: IconMessage2 },
    ]
  },
  {
    title: "Offline Order Support",
    image: "/res/jpg/offline order sheets.jpg",
    Icon: IconTools,
    bullets: [
      { text: "Log phone and take-away walk-in orders directly into your system.", Icon: IconTools },
      { text: "Consolidate all transaction records into one unified daily register.", Icon: IconCheck },
    ]
  },
];

const fitItems: { text: string; fit: boolean; Icon: ComponentType<{ className?: string }> }[] = [
  { text: "Independent restaurants, cafés, cloud kitchens, and bakeries.", fit: true, Icon: IconCircleCheck },
  { text: "Cafes wanting a fast digital ordering system synced to their menu.", fit: true, Icon: IconCircleCheck },
  { text: "Teams looking to eliminate paper ticket queues in the kitchen.", fit: true, Icon: IconCircleCheck },
  { text: "Large multi-location chains already bound to platforms like Petpooja or POSist.", fit: false, Icon: IconExclamationCircle },
  { text: "Outlets requiring offline cash-register physical integration.", fit: false, Icon: IconExclamationCircle },
];

const whyUsItems: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
  { Icon: IconChefHat, title: "Sold-Out Updates in Under 2 Seconds", copy: "When an item sells out, every waiter on the floor still selling it costs you an awkward conversation and a lost table impression. We let your chef mark it unavailable instantly — across QR menus and the dashboard simultaneously." },
  { Icon: IconMessage2, title: "Direct Table Confirmations, No Phone Calls", copy: "Manual reservation calls take time your staff doesn't have. Send booking confirmations and invoice receipts straight to the guest's WhatsApp in one tap." },
  { Icon: IconDatabase, title: "Only the Features You Actually Use", copy: "Most POS platforms charge you for loyalty programs, payroll, and analytics dashboards you never open. We build only what your restaurant runs on — nothing you'll need to train staff to avoid." },
  { Icon: IconClock, title: "Kitchen and Front-of-House in Sync", copy: "Wrong orders and delayed tables happen when the kitchen doesn't know what was promised. Connect your front desk and kitchen display so both sides work from the same live information." },
];

const processSteps: { step: string; title1: string; title2: string; copy: string; Icon: ComponentType<{ className?: string }> }[] = [
  { step: "01", title1: "Kitchen", title2: "Discovery", copy: "We study your kitchen stations, menu items, table seating maps, and order flow stages.", Icon: IconUsers },
  { step: "02", title1: "Base Custom", title2: "Configuration", copy: "We customize categories, menu items, database alerts, and kitchen screens inside the core engine.", Icon: IconSettings },
  { step: "03", title1: "WhatsApp &", title2: "QR Sync", copy: "We configure digital QR menus and setup WhatsApp triggers for table bookings and receipt shares.", Icon: IconMessage2 },
  { step: "04", title1: "Handoff &", title2: "Go-Live", copy: "We mount kitchen tablets, run test orders, train your chef and staff, and go live for service.", Icon: IconChefHat },
];

const faqItems = [
  { q: "Do we need specific POS hardware?", a: "No. Our Base operates on any standard tablet, iPad, computer, or mobile screen. You don't need to buy expensive, proprietary POS terminals." },
  { q: "How do customers access the digital menu?", a: "We provide high-quality QR table stands. Guests scan them with their phones to view your live synced menu and order directly if enabled." },
  { q: "Can we track ingredients inventory?", a: "Yes. The system tracks raw ingredients. You can map menu recipes to deduct ingredients dynamically upon order completion." },
  { q: "What happens if our internet drops?", a: "We build offline caching into the order system so staff can continue registering tables and orders locally, syncing once the connection returns." },
];

export default function FoodHospitalityBasePage() {
  return (
    <main className="relative text-ink pb-20">
      <ServiceSchema
        name="Restaurant Management System — Food & Hospitality Base"
        description="Stop losing orders to paper tickets and manual errors. Our Restaurant Management System handles live orders, kitchen display, dynamic menus, and table reservations — built for independent cafés, restaurants, and cloud kitchens."
        path="/management-solutions/food-hospitality"
        offers={[
          {
            name: "Restaurant Operations Backend",
            description: "Custom dashboard to manage live orders, kitchen display, and table booking logs.",
          },
          {
            name: "Dynamic QR Menu Sync",
            description: "Instant menu updates and pricing synced to guest QR codes.",
          }
        ]}
      />
      {/* ── 1. HERO ── */}
      <Section className="bg-transparent pt-4 md:pt-8 lg:pt-12 pb-16 md:pb-24 relative z-10 border-b border-grid/10">
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <motion.div variants={fadeInLeft}>
                  <Kicker>FOOD & HOSPITALITY BASE</Kicker>
                </motion.div>
                <motion.h1 variants={fadeInLeft} className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
                  Stop Losing Orders to <em className="font-serif-20 italic">Paper Tickets & Manual Errors.</em>
                </motion.h1>
                <motion.p variants={fadeInLeft} className="mt-5 text-xs md:text-sm text-ink-muted/80 leading-relaxed max-w-lg border-l-2 border-primary/30 pl-4 italic">
                  Right now, kitchen orders get lost between the waiter and the cook. Menu prices go out of date because no one updated the printed board. Stock runs out because no one counted what was sold last night.
                </motion.p>
                <motion.p variants={fadeInLeft} className="mt-5 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg">
                  Every order goes straight to the kitchen display the moment it&apos;s placed. Menu updates take one tap. Stock deducts automatically when an item is served — so your kitchen runs on facts, not guesswork.
                </motion.p>
                <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-4">
                  <CalButton variant="primary" size="lg">
                    See it built for your restaurant
                  </CalButton>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#deliverables">Explore Deliverables</Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div variants={fadeInRight} className="relative order-first lg:order-none">
                <div className="relative overflow-hidden">
                  <div
                    className={`relative ${masterConfig.ui.heroImages.className}`}
                    style={{
                      maxWidth: masterConfig.ui.heroImages.maxWidth,
                      aspectRatio: masterConfig.ui.heroImages.aspectRatio,
                    }}
                  >
                    <HeroImage
                      src="/res/jpg/hero res.jpg"
                      alt="Food & Hospitality Base: Custom Restaurant Management Dashboard"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* ── 2. WHAT WE DELIVER ── */}
      <Section id="deliverables" className="bg-transparent relative z-10 py-16 md:py-24 border-b border-grid/10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="mb-16 md:mb-20">
              <Kicker>DELIVERABLES</Kicker>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">Operations software configured for your <em className="font-serif-10 italic">restaurant.</em></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-grid/15 border border-grid/15">
              {deliverables.map((item) => (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  whileHover={{ y: -2, transition: { duration: 0.18 } }}
                  className="bg-white p-7 md:p-8 flex flex-col group cursor-default h-full"
                >
                  <div className="w-full aspect-video mb-6 border border-grid/15 bg-paper/40 flex items-center justify-center overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <h3 className="font-serif text-xl md:text-2xl tracking-tight text-ink">{item.title}</h3>
                  </div>
                  <div className="space-y-4 flex-1">
                    {item.bullets.map((b) => (
                      <div key={b.text} className="flex items-center gap-3">
                        <span className="h-7 w-7 shrink-0 border border-grid/15 bg-paper/60 grid place-items-center text-ink-muted group-hover:text-primary group-hover:border-primary/20 transition-colors duration-300">
                          <b.Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm text-ink-muted leading-relaxed">{b.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* ── 3. IS THIS FOR YOU? + WHY US ── */}
      <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="border border-grid/15 bg-white">
              <div className="grid lg:grid-cols-2">
                <div className="p-7 md:p-10 border-b lg:border-b-0 lg:border-r border-grid/15 flex flex-col">
                  <motion.div variants={fadeInUp}>
                    <Kicker className="mb-6">IS THIS FOR YOU?</Kicker>
                    <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">The right <em className="font-serif-10 italic">fit.</em></h3>
                  </motion.div>
                  <div className="flex-1 divide-y divide-grid/10">
                    {fitItems.map((item) => (
                      <motion.div key={item.text} variants={fadeInLeft} whileHover={{ x: 3, transition: { duration: 0.16 } }} className="mi-row flex items-center gap-4 py-4 first:pt-0 last:pb-0 cursor-default">
                        <div className={`h-8 w-8 grid place-items-center shrink-0 ${item.fit ? "border border-emerald-500/25 bg-emerald-500/5 text-emerald-600" : "border border-red-500/25 bg-red-500/10 text-red-600"}`}>
                          <item.Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">{item.fit ? "Perfect for" : "Not for"}</span>
                          <p className="text-sm text-ink mt-0.5 leading-relaxed">{item.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div variants={fadeInUp} className="mt-8 pt-6 border-t border-grid/10">
                    <div className="flex items-center gap-3 text-sm text-ink-muted">
                      <div className="h-8 w-8 border border-primary/25 bg-primary/5 grid place-items-center text-primary shrink-0"><IconDeviceDesktop className="h-4 w-4" /></div>
                      <span className="italic">Not sure? Book a free 15-minute consultation and we&apos;ll explain our customization roadmap.</span>
                    </div>
                  </motion.div>
                </div>
                <div className="p-7 md:p-10 flex flex-col">
                  <motion.div variants={fadeInUp}>
                    <Kicker className="mb-6">WHY BRANDBASE</Kicker>
                    <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">Why restaurants choose <em className="font-serif-10 italic">us.</em></h3>
                  </motion.div>
                  <div className="flex-1 divide-y divide-grid/10">
                    {whyUsItems.map((item) => (
                      <motion.div key={item.title} variants={fadeInLeft} whileHover={{ x: 3, transition: { duration: 0.16 } }} className="mi-row flex items-center gap-4 py-4 first:pt-0 last:pb-0 cursor-default">
                        <div className="h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary shrink-0"><item.Icon className="h-4 w-4" /></div>
                        <div>
                          <p className="text-sm font-semibold text-ink">{item.title}</p>
                          <p className="text-sm text-ink-muted mt-0.5 leading-relaxed">{item.copy}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* ── 4. PROCESS ── */}
      <Section className="bg-transparent border-b border-grid/10 py-16 md:py-24 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerSlow}>
            <div className="mb-16">
              <Kicker>OUR PROCESS</Kicker>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">From layout mapping to live kitchen <em className="font-serif-10 italic">control.</em></h2>
              <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">A transparent, 4-step workflow designed to customize your database and train your kitchen staff on time.</p>
            </div>
            <div className="relative">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-0 md:gap-y-8 lg:gap-y-0 relative" style={{ columnGap: "3rem" }}>
                {processSteps.map((item, i) => (
                  <div key={item.step} className={`relative flex flex-col items-stretch ${i < processSteps.length - 1 ? "pb-0" : ""}`}>
                    <motion.div variants={fadeInUp} whileHover={{ y: -2, transition: { duration: 0.18 } }} className="relative border border-grid/15 bg-white p-7 md:p-8 flex flex-col h-full group cursor-default hover:border-primary/30 hover:bg-paper/40 transition-colors duration-300">
                      <div className="flex flex-col items-start gap-5 mb-8">
                        <div className="font-mono text-5xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors duration-300">
                          {item.step}
                        </div>
                        <div className="h-10 w-10 shrink-0 border border-grid/15 bg-paper/60 grid place-items-center text-primary group-hover:border-primary/30 transition-colors duration-300">
                          <item.Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl tracking-tight text-ink mb-3 leading-[1.1]">
                        {item.title1} <br />
                        <em className="font-serif-20 italic">{item.title2}</em>
                      </h3>
                      <p className="text-[13px] text-ink-muted leading-relaxed flex-1">
                        {item.copy}
                      </p>
                    </motion.div>
                    {i < processSteps.length - 1 && (
                      <>
                        <div aria-hidden="true" className="flex md:hidden absolute left-1/2 -bottom-4 -translate-x-1/2 z-20 nc-process-connector nc-process-connector--vertical">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div aria-hidden="true" className="hidden lg:flex absolute top-1/2 -right-12 -translate-y-1/2 z-20 nc-process-connector">
                          <span />
                          <span />
                          <span />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <StandardFAQSection items={faqItems} withBottomBorder />

      {/* ── 6. CTA ── */}
      <Section className="bg-transparent py-16 md:py-24 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="border border-grid/15 bg-white overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-grid/15">
                  <motion.div variants={fadeInUp}>
                    <Kicker className="mb-6">NEXT STEP</Kicker>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter mb-6">Ready to digitize table reservations and kitchen display? <em className="font-serif-10 italic">works?</em></h2>
                    <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">Tell us about your seat counts, menu size, and workflow goals. We will get back to you with a clear roadmap within 24 hours.</p>
                    <motion.div variants={fadeInUp} className="NC-CTA-Action-Group mt-10 flex flex-wrap gap-4">
                      <CalButton variant="primary" size="lg" className="NC-CTA-Action-Primary w-full sm:w-auto sm:min-w-[220px]">
                        Book a call
                      </CalButton>
                      <Button asChild variant="outline" size="lg" className="NC-CTA-Action-Secondary">
                        <Link href="/pricing">View Pricing</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div variants={scaleIn} className="p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center">
                  <div className="divide-y divide-grid/10">
                    {[
                      { label: "Response Time", value: "Within 24 hours" },
                      { label: "Build Timeline", value: "14 to 28 days" },
                      { label: "QR Menu Sync", value: "Instant dashboard updates" },
                      { label: "Table Bookings", value: "Auto SMS/WhatsApp logs" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-4 sm:py-5 first:pt-0 last:pb-0">
                        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">{stat.label}</span>
                        <span className="font-serif text-ink">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
