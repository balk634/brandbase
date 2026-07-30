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
  IconHeartbeat,
  IconUsers,
  IconMessage2,
  IconReceipt,
  IconDatabase,
  IconUserCheck,
  IconCheck,
  IconDeviceDesktop,
  IconShieldCheck,
  IconClock,
  IconActivity,
  IconPhoneCall,
  IconCircleCheck,
  IconExclamationCircle,
  IconCalendarEvent,
  IconSettings,
  IconCloud,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";

export const metadata = buildPageMetadata({
  title: "Clinic Management System | Patient Records, Queue & Billing",
  description:
    "Stop losing patients who simply forget to come back. Our Clinic Management System handles patient records, live queues, billing, and automatic WhatsApp recalls — built specifically for your specialty clinic.",
  path: "/management-solutions/health",
});

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInLeft = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInRight = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const staggerSlow = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const deliverables: { title: string; image: string; bullets: { text: string; Icon: ComponentType<{ className?: string }> }[]; Icon: ComponentType<{ className?: string }> }[] = [
  {
    title: "Patient Records & Digital History",
    image: "/health/jpg/cabinet transitioning.jpg",
    Icon: IconHeartbeat,
    bullets: [
      { text: "Complete searchable profiles for visit history, diagnoses, & prescriptions.", Icon: IconActivity },
      { text: "Secure file uploads for reports, X-rays, and test results.", Icon: IconShieldCheck },
    ]
  },
  {
    title: "Live Queue Management",
    image: "/health/jpg/patient token.jpg",
    Icon: IconUsers,
    bullets: [
      { text: "Real-time dashboard tracking patients currently in the clinic.", Icon: IconClock },
      { text: "Smooth transition status from waiting to consultation and billing.", Icon: IconCheck },
    ]
  },
  {
    title: "Automated Follow-Up Recalls",
    image: "/health/jpg/automatic message logs.jpg",
    Icon: IconMessage2,
    bullets: [
      { text: "Native WhatsApp recall reminders sent automatically to patients due for check-ups.", Icon: IconPhoneCall },
      { text: "Custom recall rules mapped dynamically to patient treatments.", Icon: IconSettings },
    ]
  },
  {
    title: "GST-Compliant Billing",
    image: "/health/jpg/receipt tape.jpg",
    Icon: IconReceipt,
    bullets: [
      { text: "Generate professional invoices automatically at the checkout screen.", Icon: IconCheck },
      { text: "Send structured invoice receipts directly to the patient's WhatsApp.", Icon: IconMessage2 },
    ]
  },
  {
    title: "Inventory & Stock Management",
    image: "/health/jpg/storage boxes.jpg",
    Icon: IconDatabase,
    bullets: [
      { text: "Auto-deduction of medicines and consumables after every prescription.", Icon: IconCheck },
      { text: "Low-stock notifications so you never run out of critical supplies.", Icon: IconExclamationCircle },
    ]
  },
  {
    title: "Patient Self-Service Portal",
    image: "/health/jpg/patient accessing portals.jpg",
    Icon: IconUserCheck,
    bullets: [
      { text: "Secure online logins for patients to access prescriptions and test files.", Icon: IconCloud },
      { text: "Self-booking interface synced live with the doctor's calendar.", Icon: IconCalendarEvent },
    ]
  },
];

const fitItems: { text: string; fit: boolean; Icon: ComponentType<{ className?: string }> }[] = [
  { text: "Solo clinics, multi-doctor practices, and specialty clinics (dental, ortho, physician, skin).", fit: true, Icon: IconCircleCheck },
  { text: "Clinics wanting to transition from paper registers or Excel spreadsheets.", fit: true, Icon: IconCircleCheck },
  { text: "Practitioners looking for software tailored to their exact clinical workflow.", fit: true, Icon: IconCircleCheck },
  { text: "Large hospital chains needing enterprise-grade multi-branch infrastructure.", fit: false, Icon: IconExclamationCircle },
  { text: "Clinics looking for simple mass-email marketing software.", fit: false, Icon: IconExclamationCircle },
];

const whyUsItems: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
  { Icon: IconSettings, title: "Built Around Your Speciality", copy: "Dental clinics need tooth maps; dermatologists need skin chart uploads. We configure the exact database fields your clinical workflow requires — not a generic form template you bend your practice around." },
  { Icon: IconMessage2, title: "Native WhatsApp Recalls — Not Email", copy: "Patients ignore email. We send recall reminders, invoices, and booking confirmations directly to their WhatsApp number — the channel they actually check." },
  { Icon: IconShieldCheck, title: "Your Data, Fully Private", copy: "Your clinical records live in an isolated, encrypted database. You own every patient record completely. No seat licensing, no data hostage situations, no third-party access." },
  { Icon: IconClock, title: "Faster Than Excel for Busy Staff", copy: "If your assistant has to click more than three times to log a patient visit, they&apos;ll fall back to the paper register. We build interfaces that are genuinely faster than the old way." },
];

const processSteps: { step: string; title1: string; title2: string; copy: string; Icon: ComponentType<{ className?: string }> }[] = [
  { step: "01", title1: "Workflow", title2: "Discovery", copy: "We map your assistant intake, physician check, billing, and prescription tracking to design database structures.", Icon: IconUsers },
  { step: "02", title1: "Base", title2: "Customization", copy: "We configure the clinical core engine's templates, tooth/skin maps, or billing rates specifically for you.", Icon: IconSettings },
  { step: "03", title1: "WhatsApp &", title2: "Sync Setup", copy: "We wire the booking engine on your front website and configure official WhatsApp triggers for recalls.", Icon: IconMessage2 },
  { step: "04", title1: "Team Handoff &", title2: "Launch", copy: "We upload your legacy data (if any), train your clinic staff, and run live verification checks during consulting hours.", Icon: IconActivity },
];

const faqItems = [
  { q: "Can we import our existing patient list from Excel?", a: "Yes. We clean, format, and upload your legacy patient list and historical visits from Excel or CSV directly into the new Base." },
  { q: "How do WhatsApp recall reminders trigger?", a: "When a doctor selects a recall schedule (e.g., '6-month dental cleanup'), the Base schedules a background trigger that sends a WhatsApp reminder automatically 6 months later." },
  { q: "Do you charge licensing fees per doctor or per user?", a: "No. BrandBase does not charge seat-licensing fees. You pay a flat setup fee and a standard hosting/WhatsApp API infrastructure fee." },
  { q: "Is patient data safe and private?", a: "Yes. Your clinical database is isolated, encrypted, and backed up daily. We configure access controls so only authorized clinical staff can view patient histories." },
];

export default function HealthBasePage() {
  return (
    <main className="relative text-ink pb-20">
      <ServiceSchema
        name="Clinic Management System — Health Base"
        description="Stop losing patients who forget to follow up. Our Clinic Management System handles patient records, live queues, GST billing, and automatic WhatsApp recalls — built specifically for your specialty clinic."
        path="/management-solutions/health"
        offers={[
          {
            name: "Clinic Operations Backend",
            description: "Custom database matching patient clinical charts, queue status, and billing.",
          },
          {
            name: "WhatsApp Recall Integration",
            description: "Automated recalls and checkout invoice messages sent to patient WhatsApp lines.",
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
                  <Kicker>HEALTH BASE</Kicker>
                </motion.div>
                <motion.h1 variants={fadeInLeft} className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
                  Stop Losing Patients Who <em className="font-serif-20 italic">Simply Forget.</em>
                </motion.h1>
                <motion.p variants={fadeInLeft} className="mt-5 text-xs md:text-sm text-ink-muted/80 leading-relaxed max-w-lg border-l-2 border-primary/30 pl-4 italic">
                  Right now, if a patient doesn&apos;t book their follow-up before leaving, no one follows up. Paper registers don&apos;t send reminders. Spreadsheets don&apos;t refill your medicines before they run out.
                </motion.p>
                <motion.p variants={fadeInLeft} className="mt-5 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg">
                  Every patient gets a digital record, a queue token, and an automatic WhatsApp reminder when their follow-up is due — so no one falls through the cracks, and your clinic runs itself between appointments.
                </motion.p>
                <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-4">
                  <CalButton variant="primary" size="lg">
                    See it built for your clinic
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
                      src="/health/jpg/hero.jpg"
                      alt="Health Base: Custom Clinic Management System Dashboard"
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
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">Clinical backend systems tailored to your <em className="font-serif-10 italic">practice.</em></h2>
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
                    <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">Why clinicians choose <em className="font-serif-10 italic">us.</em></h3>
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
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">From layout mapping to clinical <em className="font-serif-10 italic">launch.</em></h2>
              <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">A transparent, 4-step workflow designed to customize your database and train your front-desk assistant on time.</p>
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter mb-6">Ready to digitize patient records and automate <em className="font-serif-10 italic">recalls?</em></h2>
                    <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">Tell us about your clinic layout, practitioner count, and specific charts. We will get back to you with a clear roadmap within 24 hours.</p>
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
                      { label: "Custom charts", value: "Included in scope" },
                      { label: "Staff training", value: "1-on-1 handoff sessions" },
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
