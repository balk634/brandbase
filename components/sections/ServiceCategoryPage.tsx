import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { HeroImagePanel } from "@/components/ui/HeroImagePanel";
import { motion } from "@/components/ui/motion-lite";
import { IconArrowRight, IconCheck, IconX, type IconProps } from "@tabler/icons-react";
import { BoxPattern } from "@/components/ui/BoxPattern";
import type { ComponentType } from "react";

type ServiceItem = {
  name: string;
  href: string;
  summary: string;
  timeline: string;
  bestFor: string;
  bullets: string[];
  Icon: ComponentType<IconProps>;
};

type PillarItem = {
  title: string;
  copy: string;
  Icon: ComponentType<IconProps>;
};

type ProcessItem = {
  step: string;
  title: string;
  copy: string;
};

type ComparisonRow = {
  feature: string;
  values: [string, string, string];
};

type FaqItem = {
  q: string;
  a: string;
};

type ServiceCategoryPageProps = {
  kicker: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  heroAlt: string;
  highlights: string[];
  services: [ServiceItem, ServiceItem, ServiceItem];
  pillars: PillarItem[];
  process: ProcessItem[];
  comparisonTitle: string;
  comparisonRows: ComparisonRow[];
  fitTitle: string;
  fitGood: string[];
  fitNot: string[];
  faq: FaqItem[];
  ctaTitle: string;
  ctaCopy: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function ServiceCategoryPage({
  kicker,
  headline,
  subheadline,
  heroImage,
  heroAlt,
  highlights,
  services,
  pillars,
  process,
  comparisonTitle,
  comparisonRows,
  fitTitle,
  fitGood,
  fitNot,
  faq,
  ctaTitle,
  ctaCopy,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
}: ServiceCategoryPageProps) {
  return (
    <main className="relative">
      {/* 1. Hero */}
      <Section className="bg-transparent pt-8 md:pt-12 lg:pt-16">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="border border-grid/15 bg-white p-6 md:p-10 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div variants={fadeUp}>
                  <Kicker className="bg-primary/5 border-primary/30 text-primary">{kicker}</Kicker>
                  <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-ink">
                    {headline.split(' ').map((word, i, arr) => 
                        i === arr.length - 1 ? <em key={i} className="font-serif-20 italic">{word}</em> : <span key={i}>{word} </span>
                    )}
                  </h1>
                  <p className="mt-5 text-sm sm:text-sm md:text-base text-ink-muted leading-relaxed max-w-2xl">
                    {subheadline}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {highlights.map((item) => (
                      <span
                        key={item}
                        className="border border-grid/15 bg-paper/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                      <Link href={ctaPrimaryHref} className="gap-2">
                        {ctaPrimaryLabel}
                        
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                      <Link href="#service-tracks">View service tracks</Link>
                    </Button>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="order-first lg:order-none">
                  <HeroImagePanel src={`/${heroImage}`} alt={heroAlt} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 2. Service Tracks */}
      <Section id="service-tracks" className="bg-transparent">
        <Container>
          <div className="border border-grid/15 bg-white p-6 md:p-10">
            <div className="mb-8 md:mb-10">
              <Kicker>SERVICE TRACKS</Kicker>
              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-ink">
                Pick the execution lane that matches your growth <em className="font-serif-10 italic">stage.</em>
              </h2>
            </div>

            <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="mi-card border border-grid/15 bg-paper/25 p-5 md:p-6 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
 <h3 className="font-serif text-xl tracking-tight text-ink">{service.name}</h3>
                      <p className="mt-3 text-sm text-ink-muted leading-relaxed">{service.summary}</p>
                    </div>
                    <div data-mi-icon className="mi-card-icon h-10 w-10 shrink-0 border border-primary/25 bg-primary/5 text-primary grid place-items-center">
                      <service.Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-2">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="mi-row flex items-start gap-2.5 text-sm text-ink-muted">
                        <IconCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-grid/15">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">Typical timeline</div>
                    <div className="mt-1.5 text-sm text-ink">{service.timeline}</div>
                    <div className="mt-3 text-xs text-ink-muted leading-relaxed">
                      <span className="text-ink">Best for: </span>
                      {service.bestFor}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={service.href}>Explore {service.name}</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Why This Works */}
      <Section className="bg-transparent">
        <Container>
          <div className="border border-grid/15 bg-white p-6 md:p-10">
            <Kicker>WHY THIS MODEL WORKS</Kicker>
            <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="mi-card border border-grid/15 bg-paper/30 p-5 md:p-6">
                  <div data-mi-icon className="mi-card-icon h-10 w-10 border border-primary/25 bg-primary/5 text-primary grid place-items-center">
                    <pillar.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-sans text-xl font-semibold tracking-tight text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed">{pillar.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Delivery Framework */}
      <Section className="bg-transparent">
        <Container>
          <div className="border border-grid/15 bg-white p-6 md:p-10">
            <Kicker>DELIVERY FRAMEWORK</Kicker>
            <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-ink">
              A structured system from strategy to consistent <em className="font-serif-10 italic">execution.</em>
            </h2>

            <div className="mt-8 grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="relative mi-card border border-grid/15 bg-paper/25 p-5 md:p-6">
                  <BoxPattern />
                  <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">{item.step}</div>
 <h3 className="h3 mt-3 text-lg font-serif text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Comparison Matrix */}
      <Section className="bg-transparent">
        <Container>
          <div className="border border-grid/15 bg-white p-6 md:p-10">
            <Kicker>SCOPE MATRIX</Kicker>
            <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-ink">
              {comparisonTitle.split(' ').map((word, i, arr) => 
                  i === arr.length - 1 ? <em key={i} className="font-serif-10 italic">{word}</em> : <span key={i}>{word} </span>
              )}
            </h2>

            <div className="mt-8 overflow-x-auto no-scrollbar">
              <div className="min-w-[620px] sm:min-w-[700px] lg:min-w-[740px] border border-grid/15">
                <div className="grid grid-cols-4 border-b border-grid/15 bg-paper/35">
                  <div className="p-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">Capability</div>
                  {services.map((service) => (
                    <div key={service.name} className="p-4 border-l border-grid/15 font-mono text-[10px] uppercase tracking-[0.2em] text-ink">
                      {service.name}
                    </div>
                  ))}
                </div>

                {comparisonRows.map((row) => (
                  <div key={row.feature} className="grid grid-cols-4 border-b border-grid/10 last:border-b-0">
                    <div className="p-4 text-sm text-ink">{row.feature}</div>
                    {row.values.map((value, idx) => (
                      <div key={`${row.feature}-${idx}`} className="p-4 border-l border-grid/10 text-sm text-ink-muted">
                        {value}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Fit */}
      <Section className="bg-transparent">
        <Container>
          <div className="border border-grid/15 bg-white p-6 md:p-10">
            <Kicker>FIT CHECK</Kicker>
            <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-ink">
              {fitTitle.split(' ').map((word, i, arr) => 
                  i === arr.length - 1 ? <em key={i} className="font-serif-10 italic">{word}</em> : <span key={i}>{word} </span>
              )}
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border border-green-800/20 bg-green-800/5 p-5 md:p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-green-900/80">Great fit</div>
                <div className="mt-4 grid gap-3">
                  {fitGood.map((item) => (
                    <div key={item} className="mi-row flex items-start gap-2.5 text-sm text-green-900/80">
                      <IconCheck className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-red-500/25 bg-red-500/5 p-5 md:p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-red-700/90">Not ideal</div>
                <div className="mt-4 grid gap-3">
                  {fitNot.map((item) => (
                    <div key={item} className="mi-row flex items-start gap-2.5 text-sm text-red-700/85">
                      <IconX className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. FAQ */}
      <Section className="bg-transparent">
        <Container>
          <div className="border border-grid/15 bg-white p-6 md:p-10">
            <Kicker>FAQ</Kicker>
            <div className="mt-6 grid md:grid-cols-2 gap-4 md:gap-6">
              {faq.map((item) => (
                <article key={item.q} className="mi-card border border-grid/15 bg-paper/25 p-5 md:p-6">
                  <h3 className="font-sans text-lg font-semibold tracking-tight text-ink">{item.q}</h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Final CTA */}
      <Section className="bg-transparent pt-8 pb-16 md:pb-24 border-b-0">
        <Container>
          <div className="border border-grid/15 bg-ink text-paper p-6 md:p-10 lg:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter">
                {ctaTitle.split(' ').map((word, i, arr) => 
                    i === arr.length - 1 ? <em key={i} className="font-serif-10 italic">{word}</em> : <span key={i}>{word} </span>
                )}
            </h2>
            <p className="mt-5 max-w-3xl text-paper/75 text-sm sm:text-sm md:text-base leading-relaxed">{ctaCopy}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="w-full sm:w-auto sm:min-w-[220px] bg-paper text-ink hover:bg-paper/90">
                <Link href={ctaPrimaryHref}>{ctaPrimaryLabel}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[220px] border-paper/30 text-paper hover:bg-paper/10">
                <Link href={ctaSecondaryHref}>{ctaSecondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}


