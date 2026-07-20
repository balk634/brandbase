import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { CalButton } from "@/components/ui/CalBooking";
import { IconClock } from "@tabler/icons-react";

export function FinalCTA() {
  return (
    <Section id="final-cta" className="bg-ink border-b-0">
      <Container>
        <div className="border border-white/10 bg-white/5 overflow-hidden">
          <div className="p-8 md:p-12 lg:p-14 flex flex-col items-center text-center">
            <Kicker className="border-white/20 bg-white/10 text-white/90">READY TO START?</Kicker>
            
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter text-white">
              Tell us how your business runs.<br />
              Get a clear system <em className="font-serif-10 italic text-white/90">scope.</em>
            </h2>
            
            <p className="mt-4 text-white/70 leading-relaxed max-w-2xl text-sm">
              We&apos;ll review your operational workflow, spot where manual steps slow you down, and outline the exact features and fields your custom system needs to go paperless.
            </p>

            <div className="mt-8 w-full max-w-2xl flex flex-col sm:flex-row gap-4 justify-center">
              <CalButton variant="primary" size="lg" className="sm:min-w-[240px]">
                Book a scoping call
              </CalButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <IconClock className="h-4 w-4 text-primary" strokeWidth={1.5} />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Response within 24h</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
