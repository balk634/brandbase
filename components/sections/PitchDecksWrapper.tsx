'use client';

import dynamic from 'next/dynamic';

const PitchDecksClient = dynamic(() => import('./PitchDecksClient'), {
    ssr: false,
});

export default function PitchDecksWrapper() {
    return <PitchDecksClient />;
}
