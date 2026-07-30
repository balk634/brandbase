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
  IconSchool,
  IconUsers,
  IconVideo,
  IconCalendarEvent,
  IconUserPlus,
  IconReceipt,
  IconCheck,
  IconDeviceDesktop,
  IconShieldCheck,
  IconClock,
  IconCircleCheck,
  IconExclamationCircle,
  IconMessage2,
  IconSettings,
  IconClipboardCheck,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";

export const metadata = buildPageMetadata({
  title: "Coaching Management System | Batches, Fees & Attendance",
  description:
    "Stop chasing fee dues and losing admissions to WhatsApp chaos. Our Coaching Management System manages batches, video courses, attendance, and automated parent reminders — built for coaching centers.",
  path: "/management-solutions/education",
});

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInLeft = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInRight = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const staggerSlow = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const deliverables: { title: string; image: string; bullets: { text: string; Icon: ComponentType<{ className?: string }> }[]; Icon: ComponentType<{ className?: string }> }[] = [
  {
    title: "Batch & Class Management",
    image: "/education/jpg/classroom desk layout.jpg",
    Icon: IconSchool,
    bullets: [
      { text: "Organize students into class batches and assign active schedules.", Icon: IconSchool },
      { text: "Dynamic batch listings synced live to your website admissions.", Icon: IconCheck },
    ]
  },
  {
    title: "Video Course Hosting & Sales",
    image: "/education/jpg/digital video tape.jpg",
    Icon: IconVideo,
    bullets: [
      { text: "Host and secure recorded classes for repetitive student purchase.", Icon: IconShieldCheck },
      { text: "Integrated payment gates to unlock courses instantly.", Icon: IconReceipt },
    ]
  },
  {
    title: "Live Class Scheduling",
    image: "/education/jpg/scheduling calendars.jpg",
    Icon: IconCalendarEvent,
    bullets: [
      { text: "Publish class agendas and share link buttons directly in-app.", Icon: IconCheck },
      { text: "Auto-notify students about active times via dashboard alerts.", Icon: IconClock },
    ]
  },
  {
    title: "Admissions & Inquiry Tracking",
    image: "/education/jpg/admissions funnel.jpg",
    Icon: IconUserPlus,
    bullets: [
      { text: "Capture lead contact information from website forms in one log.", Icon: IconUsers },
      { text: "WhatsApp triggers to follow up on inquiries automatically.", Icon: IconMessage2 },
    ]
  },
  {
    title: "Fee Collection & Reminders",
    image: "/education/jpg/pending fee registers.jpg",
    Icon: IconReceipt,
    bullets: [
      { text: "Automated logs tracking paid, pending, and overdue fee milestones.", Icon: IconCheck },
      { text: "Send structured fee due reminders directly to parent WhatsApp numbers.", Icon: IconMessage2 },
    ]
  },
  {
    title: "Simple Attendance marking",
    image: "/education/jpg/student attendance logs.jpg",
    Icon: IconClipboardCheck,
    bullets: [
      { text: "Assistants mark daily student attendance with a single click.", Icon: IconCircleCheck },
      { text: "Attendance summary reports readable by student profiles.", Icon: IconCheck },
    ]
  },
];

const fitItems: { text: string; fit: boolean; Icon: ComponentType<{ className?: string }> }[] = [
  { text: "Independent tutors, small coaching institutes, and training centers.", fit: true, Icon: IconCircleCheck },
  { text: "Institutes wanting to replace scattered paper fee registers and WhatsApp groups.", fit: true, Icon: IconCircleCheck },
  { text: "Educators seeking to sell pre-recorded material without expensive platform costs.", fit: true, Icon: IconCircleCheck },
  { text: "Large multi-branch coaching chains requiring enterprise Learning Management Systems.", fit: false, Icon: IconExclamationCircle },
  { text: "Teams requiring automated grading or AI exam evaluation tools.", fit: false, Icon: IconExclamationCircle },
];

const whyUsItems: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
  { Icon: IconSettings, title: "Simple Enough for Any Staff Member", copy: "Massive LMS tools like Moodle are confusing even for educators. We build student records, batch lists, and fee logs that any receptionist can use without training videos." },
  { Icon: IconMessage2, title: "Fee Reminders That Actually Get Paid", copy: "A WhatsApp message to a parent's phone is opened within minutes. An email reminder gets ignored for days. We send dues directly where parents actually respond." },
  { Icon: IconShieldCheck, title: "Your Video Courses, Fully Protected", copy: "Students who share your recording links cost you future sales. We host your videos behind payment gates — only students who paid can stream, and unauthorized sharing is blocked." },
  { Icon: IconClock, title: "Instant Admin Handoff", copy: "Your receptionist marks attendance in two clicks, logs a fee payment in three, and tracks new admissions without touching a spreadsheet. Daily admin takes minutes, not an hour." },
];

const processSteps: { step: string; title1: string; title2: string; copy: string; Icon: ComponentType<{ className?: string }> }[] = [
  { step: "01", title1: "Admissions", title2: "Discovery", copy: "We map your inquiry states, student registration data, and fee intervals (monthly/one-time).", Icon: IconUsers },
  { step: "02", title1: "Base Custom", title2: "Configuration", copy: "We set up course structures, batch timetables, and invoice templates inside the education engine.", Icon: IconSettings },
  { step: "03", title1: "WhatsApp &", title2: "Gateway Sync", copy: "We configure Razorpay or Paytm integrations and setup WhatsApp templates for billing and reminders.", Icon: IconMessage2 },
  { step: "04", title1: "Staff Onboarding &", title2: "Launch", copy: "We upload your current batch lists, run verification checks, and train your staff on how to use the dashboard.", Icon: IconClipboardCheck },
];

const faqItems = [
  { q: "Can we track multiple subjects and batches?", a: "Yes. You can assign students to specific subjects, batches, or schedules. A single student can be linked to multiple active batches." },
  { q: "How are fee reminders sent?", a: "The system reads unpaid invoice records and can trigger a custom WhatsApp reminder message to the student or parent's phone number on specified dates." },
  { q: "Where are our video files hosted?", a: "We integrate with secure, cost-effective storage clouds (like Cloudflare Stream or AWS). Videos stream fast with high piracy protection, keeping server costs low." },
  { q: "Do you take a percentage of our course sales?", a: "No. All payments go directly through your gateway accounts. BrandBase takes 0% commission on your course sales." },
];

export default function EducationBasePage() {
  return (
    <main className="relative text-ink pb-20">
      <ServiceSchema
        name="Coaching Management System — Education Base"
        description="Stop chasing fee dues and losing admissions to WhatsApp chaos. Our Coaching Management System manages batches, video courses, attendance, and automated parent fee reminders — built for coaching centers and independent tutors."
        path="/management-solutions/education"
        offers={[
          {
            name: "Coaching Center Backend",
            description: "Custom dashboard to manage student records, batch timetables, and inquiries.",
          },
          {
            name: "Video Course Hosting",
            description: "Secure video hosting integrated directly with course payment systems.",
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
                  <Kicker>EDUCATION BASE</Kicker>
                </motion.div>
                <motion.h1 variants={fadeInLeft} className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
                  Stop Losing Students to <em className="font-serif-20 italic">Fee Chaos & Forgetfulness.</em>
                </motion.h1>
                <motion.p variants={fadeInLeft} className="mt-5 text-xs md:text-sm text-ink-muted/80 leading-relaxed max-w-lg border-l-2 border-primary/30 pl-4 italic">
                  Right now, fee reminders go out on a WhatsApp group that everyone mutes. Attendance is marked on a register no one reviews. Admissions inquiries come in through five different channels and fall through the cracks.
                </motion.p>
                <motion.p variants={fadeInLeft} className="mt-5 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg">
                  Every batch, student, and fee due date lives in one place. Reminders go directly to the parent&apos;s WhatsApp. Video courses are gated and paid automatically — no chasing, no manual invoicing.
                </motion.p>
                <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-4">
                  <CalButton variant="primary" size="lg">
                    See it built for your academy
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
                      src="/education/jpg/edu hero.jpg"
                      alt="Education Base: Custom Coaching Center management dashboard"
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
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">Operations software configured for your <em className="font-serif-10 italic">academy.</em></h2>
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
                    <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">Why educators choose <em className="font-serif-10 italic">us.</em></h3>
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
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">From enrollment workflows to course <em className="font-serif-10 italic">sales.</em></h2>
              <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">A transparent, 4-step workflow designed to customize your database and train your administrative staff on time.</p>
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter mb-6">Ready to digitize batch logs and automate fee <em className="font-serif-10 italic">collection?</em></h2>
                    <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">Tell us about your student counts, class batches, and billing requirements. We will get back to you with a clear roadmap within 24 hours.</p>
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
                      { label: "Recorded Hosting", value: "High-speed streaming ready" },
                      { label: "Fee Reminders", value: "Automated WhatsApp alerts" },
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
