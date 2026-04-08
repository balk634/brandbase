'use client';

import { useState, useEffect } from "react";
import { IconX, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

const pitchDecks = [
    { id: 1, path: "/pitchdeck/1.pdf", thumb: "/pitchdeck/1_first_page.jpg" },
    { id: 2, path: "/pitchdeck/2.pdf", thumb: "/pitchdeck/2_first_page.jpg" },
    { id: 3, path: "/pitchdeck/3.pdf", thumb: "/pitchdeck/3_first_page.jpg" },
    { id: 4, path: "/pitchdeck/4.pdf", thumb: "/pitchdeck/4_first_page.jpg" },
    { id: 5, path: "/pitchdeck/5.pdf", thumb: "/pitchdeck/5_first_page.jpg" },
    { id: 6, path: "/pitchdeck/6.pdf", thumb: "/pitchdeck/6_first_page.jpg" },
    { id: 7, path: "/pitchdeck/7.pdf", thumb: "/pitchdeck/7_first_page.jpg" },
    { id: 8, path: "/pitchdeck/8.pdf", thumb: "/pitchdeck/8_first_page.jpg" },
    { id: 9, path: "/pitchdeck/9.pdf", thumb: "/pitchdeck/9_first_page.jpg" },
];

const bonusItem = {
    images: [
        "/pitchdeck/more work1.jpg",
        "/pitchdeck/more work2.jpg",
    ]
};

export default function PitchDecksClient() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <div className="mb-16">
            {/* 5x2 Grid Desktop / 2x5 Grid Mobile */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {/* PDF Items */}
                {pitchDecks.map((deck) => (
                    <a
                        key={deck.id}
                        href={deck.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-default aspect-video border border-grid/15 bg-white overflow-hidden relative flex flex-col items-center justify-center p-0 hover:-translate-y-1 transition-[transform]"
                    >
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />

                        {/* Static JPEG Thumbnail */}
                        <div className="w-full h-full relative z-10 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 origin-top overflow-hidden bg-grid/5 grid place-items-center">
                            <Image
                                src={deck.thumb}
                                alt={`Pitch Deck ${deck.id} Cover`}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 1024px) 50vw, 20vw"
                            />
                        </div>

                        {/* Overlay UI */}
                        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/70 backdrop-blur-sm">
                            <div className="font-mono text-[10px] uppercase tracking-widest text-ink font-bold text-center">
                                DECK {String(deck.id).padStart(2, '0')}
                            </div>
 <div className="mt-2 text-sm font-serif text-center text-primary transition-colors">
                                View Presentation
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <IconExternalLink className="w-4 h-4 text-primary" />
                            </div>
                        </div>
                    </a>
                ))}

                {/* Bonus Item (10th Grid) */}
                <div className="aspect-video border border-grid/15 bg-paper/50 overflow-hidden relative p-3">
                    <div className="w-full h-full grid grid-rows-3 gap-2">
                        {bonusItem.images.map((src, idx) => (
                            <div
                                key={src}
                                className={`relative w-full h-full rounded-sm overflow-hidden border border-grid/10 cursor-default transition-[transform] hover:scale-105 hover:rotate-0 hover:z-10 ${idx === 0 ? '-rotate-3 translate-x-1 translate-y-1' : 'rotate-3 -translate-x-1 -translate-y-1'}`}
                                onClick={() => setSelectedImage(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`More work ${idx + 1}`}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 50vw, 20vw"
                                />
                            </div>
                        ))}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <span className="font-mono text-[10px] xl:text-xs uppercase tracking-widest text-ink-muted text-center cursor-default">
                                And Many More...
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Bonus Image */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4 sm:p-8">
                    <div className="relative w-full h-full max-w-6xl flex flex-col bg-white border border-grid/15 rounded-sm overflow-hidden">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-grid/15 bg-paper/50">
                            <span className="font-mono text-xs tracking-widest uppercase text-ink-muted">
                                Image Viewer
                            </span>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="p-1 hover:bg-grid/10 rounded-sm transition-colors"
                                >
                                    <IconX className="w-5 h-5 text-ink" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 bg-gray-100 flex items-center justify-center p-4">
                            <div className="relative w-full h-full">
                                <Image
                                    src={selectedImage}
                                    alt="Enlarged screenshot"
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
