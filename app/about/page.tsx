import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "About Nodecraft | Team, Process & Principles",
  description:
    "Meet the Nodecraft team and see how we combine strategy, design, engineering, and performance marketing to build measurable growth systems.",
  path: "/about",
});

function GoldilocksVenn() {
  return (
    <div className="group border border-grid/15 bg-paper/40 aspect-square sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] w-full flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out pointer-events-none" />

      <svg viewBox="0 0 400 300" className="w-full h-full max-w-[320px] sm:max-w-sm relative z-10" aria-hidden="true">
        <defs>
          <pattern id="dot-grid-venn" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-grid/20" />
          </pattern>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" className="text-primary" />
            <stop offset="100%" stopColor="currentColor" className="text-primary/40" />
          </linearGradient>
        </defs>

        <rect width="400" height="300" fill="url(#dot-grid-venn)" className="opacity-20 transition-opacity duration-1000" />

        <g className="opacity-20 transition-opacity duration-1000">
          <path d="M 0 150 L 400 150" stroke="currentColor" className="text-grid" strokeWidth="0.5" />
          <path d="M 200 0 L 200 300" stroke="currentColor" className="text-grid" strokeWidth="0.5" />
        </g>

        <g className="transform origin-[165px_150px] transition-transform duration-1000 ease-out md:hover:scale-105">
          <circle cx="165" cy="150" r="90" fill="currentColor" className="text-red-500/10" />
          <circle cx="165" cy="150" r="90" fill="none" stroke="currentColor" className="text-red-500/60" strokeWidth="1.5" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-80" dur="20s" repeatCount="indefinite" />
          </circle>
          <text x="105" y="154" fontFamily="monospace" fontSize="9" fill="currentColor" className="text-red-600 font-bold tracking-widest uppercase" textAnchor="middle">Agency</text>
        </g>

        <g className="transform origin-[235px_150px] transition-transform duration-1000 ease-out md:hover:scale-105">
          <circle cx="235" cy="150" r="90" fill="currentColor" className="text-orange-500/10" />
          <circle cx="235" cy="150" r="90" fill="none" stroke="currentColor" className="text-orange-500/60" strokeWidth="1.5" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="80" dur="20s" repeatCount="indefinite" />
          </circle>
          <text x="295" y="154" fontFamily="monospace" fontSize="9" fill="currentColor" className="text-orange-600 font-bold tracking-widest uppercase" textAnchor="middle">Freelancer</text>
        </g>

        <g className="transform origin-[200px_150px] transition-transform duration-1000 ease-out md:hover:scale-[1.15]">
          <path d="M 200 66 A 90 90 0 0 0 200 234 A 90 90 0 0 0 200 66" fill="currentColor" className="text-green-800/20" />
          <path d="M 200 66 A 90 90 0 0 0 200 234 A 90 90 0 0 0 200 66" fill="transparent" stroke="currentColor" className="text-green-800" strokeWidth="2.5" />
          <text x="200" y="154" fontFamily="sans-serif" fill="currentColor" className="text-green-900 font-bold" fontSize="13" textAnchor="middle" letterSpacing="2.5">NODECRAFT</text>
        </g>

        <g className="opacity-60">
          <path d="M 200 15 L 200 50" stroke="currentColor" className="text-green-800" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="200" cy="15" r="3" fill="currentColor" className="text-green-800" />
          <circle cx="200" cy="15" r="8" fill="none" stroke="currentColor" className="text-green-800/60" strokeDasharray="2 4" strokeWidth="1.5">
            <animateTransform attributeName="transform" type="rotate" from="0 200 15" to="360 200 15" dur="6s" repeatCount="indefinite" />
          </circle>
        </g>

        <g className="opacity-60">
          <path d="M 200 285 L 200 250" stroke="currentColor" className="text-green-800" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="200" cy="285" r="3" fill="currentColor" className="text-green-800" />
          <circle cx="200" cy="285" r="8" fill="none" stroke="currentColor" className="text-green-800/60" strokeDasharray="2 4" strokeWidth="1.5">
            <animateTransform attributeName="transform" type="rotate" from="360 200 285" to="0 200 285" dur="6s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative">
      <Section className="bg-transparent py-8 md:py-10 lg:py-12">
        <Container>
          <div className="border border-grid/15 bg-white">
            <div className="p-4 sm:p-8 md:p-12">
              <div className="text-center">
                <Kicker className="mx-auto text-xs md:text-sm px-6 py-2.5 bg-primary/5 border-primary/30 text-primary"> ABOUT NODECRAFT </Kicker>
              </div>

              <h1 className="mt-8 text-center text-2xl sm:text-4xl md:text-6xl font-sans font-bold leading-[0.95] tracking-tighter text-ink break-words">
                We build websites that convert, then help you scale what works.
              </h1>
              <p className="mt-6 text-center text-lg md:text-xl text-ink-muted leading-relaxed max-w-3xl mx-auto">
                Nodecraft is a cross-disciplinary team for website strategy, design, engineering, and performance marketing. Website first. Marketing second. Always measured.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-transparent py-8 md:py-10 lg:py-12">
        <Container>
          <div className="border border-grid/15 bg-white">
            <div className="p-4 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-center">
                <div className="lg:col-span-7 min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.35em] text-ink-muted">
                    ORIGIN
                  </div>
                  <h2 className="mt-4 font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink break-words">
                    The &quot;Goldilocks&quot; Problem.
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

                    <div className="border border-green-800/25 bg-green-800/5 p-4 sm:p-5 min-w-0">
                      <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.35em] text-green-800 break-words leading-relaxed">
                        03. NODECRAFT
                      </div>
                      <div className="mt-2 text-sm text-ink-muted leading-relaxed break-words">
                        Integrated. Talent across brand, product, and marketing - working as one team with the speed of a startup and the standards of a tier-one firm.
                      </div>
                    </div>
                  </div>


                </div>

                <div className="lg:col-span-5 min-w-0">
                  <GoldilocksVenn />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-transparent py-8 md:py-10 lg:py-12">
        <Container>
          <div className="border border-grid/15 bg-white overflow-hidden">
            <div className="p-4 sm:p-8 md:p-12">
              <div className="max-w-3xl min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.35em] text-ink-muted">
                  {"// LEADERSHIP & EXPERTISE"}
                </div>
                <h2 className="mt-4 font-sans text-3xl md:text-4xl font-bold tracking-tight text-ink">
                  Built by practitioners.
                </h2>
                <div className="mt-5 space-y-4 text-ink-muted leading-relaxed">
                  <p>Nodecraft is led by a cross-disciplinary team of strategists, engineers, and creatives who care about the fundamentals: clarity, speed, measurement, and conversion.</p>
                  <p>We don&apos;t ship websites as a one-off deliverable. We build a system you can improve over time, then use marketing to scale what the data proves is working.</p>
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
                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary mb-2">
                          {member.role}
                        </div>
                        <h3 className="font-sans font-bold text-xl tracking-tight text-ink">
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
          </div>
        </Container>
      </Section>



      <Section className="bg-transparent border-b-0 py-8 md:py-10 lg:py-12">
        <Container>
          <div className="max-w-4xl mx-auto border border-grid/15 bg-white p-10 md:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold tracking-tighter text-ink">
              Ready to build your website engine?
            </h2>
            <div className="mt-10">
              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[260px]">
                <Link href="/contact">Book a call</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}



