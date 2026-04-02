import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { AutoScrollScroller } from "@/components/ui/AutoScrollScroller";
import { masterConfig } from "@/config/master";

const ACCENTS = [
  "bg-primary text-white",
  "bg-white border text-ink",
  "bg-primary/10 text-primary",
  "bg-ink text-white",
];

interface TestimonialItem {
  author: string;
  quote: string;
  role: string;
  location: string;
}

export function Testimonials() {
  const testimonials = masterConfig.sections.testimonials;

  return (
    <Section className="bg-transparent">
      <Container>
        <div className="mb-10 max-w-3xl">
          <Kicker>SOCIAL PROOF</Kicker>
 <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-serif-10 tracking-tighter">
            Trusted by founders and marketing leaders worldwide.
          </h2>
          <p className="mt-4 text-ink-muted font-mono text-sm max-w-2xl">
            Always scrolling. Hover to pause. Drag to browse.
          </p>
        </div>

        <AutoScrollScroller
          aria-label="Testimonials"
          className="mt-10"
          speedPxPerSecond={26}
          pauseOnHover
        >
          <div className="flex w-max items-stretch">
            <div className="flex items-stretch gap-8 pr-8">
              {testimonials.map((t: TestimonialItem, idx: number) => {
                const initials = t.author.charAt(0).toUpperCase();
                const accent = ACCENTS[idx % ACCENTS.length];

                return (
                  <figure
                    key={idx}
                    className="w-[85vw] max-w-[340px] sm:w-[420px] sm:max-w-none shrink-0 border border-grid/15 bg-white p-7 flex flex-col whitespace-normal h-full"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span
 className="h-6 w-6 text-primary shrink-0 opacity-50 mb-4 font-serif-10 text-2xl leading-none"
                        aria-hidden="true"
                      >
                        &ldquo;
                      </span>
                      <div className="flex items-center gap-1 text-primary/60">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className="font-sans text-sm leading-none"
                            aria-hidden="true"
                          >
                            ★
                          </span>
                        ))}
                        <span className="sr-only">5 out of 5</span>
                      </div>
                    </div>

                    <blockquote className="mt-6 font-mono text-[13px] leading-relaxed text-ink/90 whitespace-normal break-words flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <div className="mt-auto pt-6 border-t border-grid/15 flex items-center gap-4">
                      <div className={"h-10 w-10 shrink-0 grid place-items-center " + accent} aria-hidden="true">
 <span className="font-serif text-sm">{initials}</span>
                      </div>
                      <div className="flex flex-col">
 <div className="font-serif text-sm text-ink">{t.author}</div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">
                          {t.role}
                        </div>
                        <div className="mt-0.5 text-[10px] text-ink-muted/80">
                          {t.location}
                        </div>
                      </div>
                    </div>
                  </figure>
                );
              })}
            </div>
          </div>
        </AutoScrollScroller>
      </Container>
    </Section>
  );
}
