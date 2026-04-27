"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { IconCookie, IconX } from "@tabler/icons-react";

export function CookieConsent() {
    const [show, setShow] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const timerRef = useRef<number | null>(null);

    const accept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        if (timerRef.current) window.clearTimeout(timerRef.current);

        // Notify analytics that consent was granted
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: "granted",
                ad_storage: "granted",
            });
        }

        setIsVisible(false);
        setTimeout(() => setShow(false), 300); // Wait for exit animation
    };

    const decline = () => {
        localStorage.setItem("cookie-consent", "declined");
        if (timerRef.current) window.clearTimeout(timerRef.current);
        setIsVisible(false);
        setTimeout(() => setShow(false), 300);
    };

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Wait 1 second before showing to ensure page load completes first
            const initialTimer = setTimeout(() => {
                setShow(true);
                // Slight delay for animation
                setTimeout(() => setIsVisible(true), 50);
            }, 1000);

            return () => clearTimeout(initialTimer);
        }
    }, []);

    if (!show) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 sm:bottom-6 sm:left-6 sm:right-auto z-50 p-4 transition-all duration-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
            <div className="bg-paper border border-grid/15 shadow-xl max-w-sm w-full p-5 relative overflow-hidden">
                <button
                    onClick={decline}
                    className="absolute top-3 right-3 text-ink-muted hover:text-ink transition-colors p-1"
                    aria-label="Close"
                >
                    <IconX size={16} strokeWidth={1.5} />
                </button>

                <div className="flex items-start gap-4 pr-6">
                    <div className="bg-primary/5 p-2 shrink-0">
                        <IconCookie className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="font-serif text-base text-ink mb-2">
                            Privacy & Cookies
                        </h3>
                        <p className="text-xs text-ink-muted leading-relaxed mb-4">
                            We use cookies to improve your experience and measure performance. By clicking &quot;Accept All&quot;, you agree to our use of cookies.
                            Read our <Link href="/privacy-policy" className="mi-link-inline text-ink">Privacy Policy</Link> to learn more.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Button onClick={accept} size="sm" className="w-full sm:w-auto text-xs py-1.5 h-8">
                                Accept All
                            </Button>
                            <Button onClick={decline} variant="outline" size="sm" className="w-full sm:w-auto text-xs py-1.5 h-8">
                                Decline
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
