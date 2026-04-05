"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { IconX } from "@tabler/icons-react";

export function CookieConsent() {
    const [show, setShow] = useState(false);
    const timerRef = useRef<number | null>(null);

    const notifyConsentChange = () => {
        window.dispatchEvent(new Event("cookie-consent-updated"));
    };

    const accept = () => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
        localStorage.setItem("cookie-consent", "accepted");
        notifyConsentChange();
        setShow(false);
    };

    const decline = () => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
        localStorage.setItem("cookie-consent", "declined");
        notifyConsentChange();
        setShow(false);
    };

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setShow(true);

            // Auto-accept after 5 seconds
            timerRef.current = window.setTimeout(() => {
                accept();
            }, 5000);

            return () => {
                if (timerRef.current) window.clearTimeout(timerRef.current);
            };
        }
    }, []);

    if (!show) return null;

    return (
        <div
            className="fixed z-[60] bg-white border border-primary/20 p-4 sm:p-6"
            style={{
                bottom: "max(1rem, env(safe-area-inset-bottom))",
                right: "max(1rem, env(safe-area-inset-right))",
                width:
                    "min(24rem, calc(100vw - max(1rem, env(safe-area-inset-left)) - max(1rem, env(safe-area-inset-right))))",
            }}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="font-mono text-xs uppercase tracking-widest text-ink font-bold">Cookie settings</div>
                <button
                    type="button"
                    onClick={decline}
                    className="text-ink-muted hover:text-ink"
                    aria-label="Close cookie notice"
                >
                    <IconX size={14} aria-hidden="true" />
                </button>
            </div>
            <p className="text-xs text-ink-muted mb-6 leading-relaxed">
                We use cookies to improve your experience and analyze site traffic.
                By clicking &quot;Accept&quot;, you agree to our use of cookies.
            </p>
            <div className="flex gap-2">
                <Button variant="primary" size="sm" onClick={accept} className="w-full">
                    Accept
                </Button>
            </div>
        </div>
    );
}
