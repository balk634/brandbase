import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import Image from "next/image";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { CalButton } from "@/components/ui/CalBooking";

export const metadata = buildPageMetadata({
  title: "About BrandBase | Custom Management Systems & Websites Team",
  description:
    "Meet the BrandBase team of builders and engineers. Learn how we build custom business management systems integrated with high-performance frontend websites.",
  path: "/about",
});


export default function AboutPage() {
  return (
    <main className="relative">
      <Section className="bg-transparent py-4 md:py-6 lg:py-8">
        <Container>
          <div className="border border-grid/15 bg-white">
            <div className="p-4 sm:p-8 md:p-12">
              <div className="text-center">
                <Kicker className="mx-auto"> ABOUT BRANDBASE </Kicker>
              </div>

              <h1 className="mt-8 text-center text-2xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink break-words">
                We build systems that run your operations, and websites that <em className="font-serif-20 italic">convert.</em>
              </h1>
              <p className="mt-6 text-center text-lg md:text-xl text-ink-muted leading-relaxed max-w-3xl mx-auto">
                BrandBase is a cross-disciplinary team of system architects, database engineers, and interface designers. Systems first. Websites second. Always custom.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-transparent py-4 md:py-6 lg:py-8">
        <Container>
          <div className="border border-grid/15 bg-white">
            <div className="p-4 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-center">
                <div className="lg:col-span-7 min-w-0">
                  <Kicker className="mb-4">
                    ORIGIN
                  </Kicker>
                  <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-ink break-words">
                    The &quot;Goldilocks&quot; <em className="font-serif-10 italic">Problem.</em>
                  </h2>
                  <p className="mt-5 text-base sm:text-lg text-ink-muted leading-relaxed break-words">
                    For years, business owners had two bad choices:
                  </p>

                  <div className="mt-6 grid gap-3">
                    <div className="border border-red-500/20 bg-red-500/5 p-4 sm:p-5 min-w-0">
                      <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.35em] text-red-600/80 break-words leading-relaxed">
                        01. THE BIG AGENCY
                      </div>
                      <div className="mt-2 text-sm text-ink-muted leading-relaxed">
                        Great quality, but costs $20k+ and takes 3 months.
                      </div>
                    </div>

                    <div className="border border-red-500/20 bg-red-500/5 p-4 sm:p-5 min-w-0">
                      <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.35em] text-red-600/80 break-words leading-relaxed">
                        02. THE MARKETPLACE FREELANCER
                      </div>
                      <div className="mt-2 text-sm text-ink-muted leading-relaxed">
                        Cheap, but communication is messy and quality is a gamble.
                      </div>
                    </div>

                    <div className="border border-emerald-500/25 bg-emerald-500/5 p-4 sm:p-5 min-w-0">
                      <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.35em] text-emerald-600 break-words leading-relaxed">
                        03. BRANDBASE
                      </div>
                      <div className="mt-2 text-sm text-ink-muted leading-relaxed break-words">
                        Integrated. Talent across backend engineering, database architecture, and user interface design - working as one team with the speed of a startup and the standards of a tier-one firm.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 min-w-0 flex justify-center">
                  {/* Image for Goldilocks problem (4:5) */}
                  <div className="w-full max-w-[380px] aspect-[4/5] bg-paper/40 flex items-center justify-center overflow-hidden relative">
                      <Image
                        src="/deliverables/goldilocks.webp"
                        alt="The Goldilocks Problem"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-transparent py-4 md:py-6 lg:py-8">
        <Container>
          <div className="border border-grid/15 bg-white overflow-hidden">
            {/* Leadership Section */}
            {masterConfig.about.showTeam && (
              <div className="p-4 sm:p-8 md:p-12">
                <div className="max-w-3xl min-w-0">
                  <Kicker className="mb-4">
                    LEADERSHIP & EXPERTISE
                  </Kicker>
                  <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-tight text-ink">
                    Built by <em className="font-serif-10 italic">practitioners.</em>
                  </h2>
                  <div className="mt-5 space-y-4 text-ink-muted leading-relaxed">
                    <p>BrandBase is led by a cross-disciplinary team of system builders, database engineers, and interface designers who care about the fundamentals: clarity, operations automation, and high-performance frontend web architectures.</p>
                    <p>We don&apos;t ship generic template code. We build custom operational systems (Clinic, Coaching, Restaurant) and frontend websites that are tailored to how your business actually runs.</p>
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {masterConfig.about.team.map((member, idx) => (
                    <div key={idx} className="group border border-grid/15 bg-white p-6 md:p-8">
                      <div className="w-24 h-24 aspect-square relative overflow-hidden mb-6 border border-grid/15 bg-paper/60">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-all duration-500 group-hover:grayscale"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div>
                          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.35em] text-primary">
                            {member.role}
                          </div>
                          <h3 className="font-serif text-xl tracking-tight text-ink">
                            {member.name}
                          </h3>
                        </div>
                        <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Philosophy Section */}
            {masterConfig.about.showPhilosophy && (
              <div className="p-4 sm:p-8 md:p-12 animate-fade-in">
                <div className="max-w-3xl min-w-0">
                  <Kicker className="mb-4">
                    OUR PHILOSOPHY
                  </Kicker>
                  <h2 className="mt-4 font-serif text-3xl md:text-4xl tracking-tight text-ink">
                    Built for <em className="font-serif-10 italic">operations.</em>
                  </h2>
                  <div className="mt-5 space-y-4 text-ink-muted leading-relaxed">
                    <p>At BrandBase, we believe that software should fit your business, not the other way around. We replace rigid spreadsheets, paper registers, and chaotic WhatsApp threads with clean, secure, custom management systems.</p>
                    <p>We build for operations first, then design and engineer high-performance frontend websites that integrate directly with your databases to convert visitors and automate bookings.</p>
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {[
                    {
                      number: "01",
                      title: "Custom Operational Logic",
                      description: "We map your real-world workflows into clean database schemas, automated notifications, role-based staff levels, and live tracking dashboards."
                    },
                    {
                      number: "02",
                      title: "Modern System Engineering",
                      description: "We build backend architectures on secure, private databases like PostgreSQL and Appwrite, integrated with fast Next.js frontends."
                    },
                    {
                      number: "03",
                      title: "Zero Licensing Hostage",
                      description: "We believe you should own your code and your records. We host on your private servers with zero per-seat monthly license fees."
                    }
                  ].map((pillar, idx) => (
                    <div key={idx} className="group border border-grid/15 bg-white p-6 md:p-8 flex flex-col justify-between hover:border-primary/45 transition-colors duration-300">
                      <div>
                        <div className="font-mono text-2xl font-bold text-primary/30 mb-4">{pillar.number}</div>
                        <h3 className="font-serif text-xl tracking-tight text-ink mb-3">{pillar.title}</h3>
                        <p className="text-sm text-ink-muted leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Section className="bg-transparent border-b-0 py-4 md:py-6 lg:py-8">
        <Container>
          <div className="max-w-4xl mx-auto border border-grid/15 bg-white p-10 md:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tighter text-ink">
              Ready to build your custom business <em className="font-serif-10 italic">system?</em>
            </h2>
            <div className="mt-10">
              <CalButton variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[260px]">
                Book a call
              </CalButton>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}



