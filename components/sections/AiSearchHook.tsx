import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { TickIcon } from "@/components/icons/StatusIcons";

export function AiSearchHook() {
  return (
    <Section className="bg-transparent">
      <Container className="grid md:grid-cols-12 gap-8 md:gap-10 items-stretch">
        <div className="md:col-span-6 flex flex-col items-start">
          <Kicker className="self-start">AI SEARCH ERA</Kicker>
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-sans font-bold tracking-tight">
            Is your business ready for AI search?
          </h2>
          <p className="mt-4 text-ink-muted font-mono text-sm max-w-xl">
            Discovery is shifting from “keywords” to “understanding.” We build
            sites with clear structure and clean data so AI tools can surface
            your business with confidence.
          </p>
        </div>

        <div className="md:col-span-6 h-full">
          <div className="border border-grid/15 bg-white h-full flex flex-col">
            <div className="px-5 py-4 border-b border-grid/15 flex items-center justify-between">
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                Structured Data
              </div>
              <div className="flex flex-wrap items-center gap-2 text-primary font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em]">
                <TickIcon className="h-4 w-4" />
                Ready
              </div>
            </div>
            <pre className="flex-1 p-5 text-[10px] sm:text-[11px] leading-relaxed font-mono text-ink-muted whitespace-pre-wrap break-words overflow-x-hidden sm:whitespace-pre sm:overflow-x-auto no-scrollbar">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nodecraft Client",
  "areaServed": ["US", "EU"],
  "sameAs": ["LinkedIn", "Google Business Profile"]
}`}
            </pre>
          </div>
        </div>
      </Container>
    </Section>
  );
}

