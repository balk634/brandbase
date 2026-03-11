import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import PitchDecksWrapper from '@/components/sections/PitchDecksWrapper';
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
    title: "Investor Pitch Deck Design | Nodecraft",
    description:
        "Narrative-driven pitch deck design services for startups and growth companies seeking institutional capital.",
    path: "/pitchdecks",
});

export default function PitchDecksPage() {
    return (
        <main className="min-h-screen min-h-[100svh] pt-16 md:pt-24 pb-20">
            <Container>
                <div className="mb-16">
                    <Kicker>PRESENTATIONS</Kicker>
                    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-ink">
                        Investor Pitch Decks
                    </h1>
                    <p className="mt-6 text-lg text-ink-muted max-w-2xl leading-relaxed">
                        A curated gallery of narrative-driven presentations designed to communicate complex business models, secure institutional capital, and command the room.
                    </p>
                </div>

                <PitchDecksWrapper />
            </Container>
        </main>
    );
}

