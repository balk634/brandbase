"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { IconX } from "@tabler/icons-react";

export function CookieConsent() {
    const [show, setShow] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const timerRef = useRef<number | null>(null);

    const notifyConsentChange = () => {
        window.dispatchEvent(new Event("cookie-consent-updated"));
    };

    const handleAction = useCallback((type: "accepted" | "declined") => {
        if (isExiting) return; // Prevent double triggers
        
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        
        // Save choice immediately for the logic
        localStorage.setItem("cookie-consent", type);

        // Start exit animation
        setIsExiting(true);
        
        // Remove from DOM AND trigger heavy analytics loading 
        // only AFTER the animation is complete to prevent jank.
        setTimeout(() => {
            setShow(false);
            notifyConsentChange();
        }, 500); // Matches duration-500
    }, [isExiting]);

    const accept = useCallback(() => handleAction("accepted"), [handleAction]);
    const decline = useCallback(() => handleAction("declined"), [handleAction]);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const isMobileOrTablet = typeof window !== "undefined" && window.innerWidth < 1024;
            if (isMobileOrTablet) {
                localStorage.setItem("cookie-consent", "accepted");
                notifyConsentChange();
                return;
            }

            // Defer showing to prevent synchronous cascading state updates in effect
            const initTimer = window.setTimeout(() => {
                setShow(true);
            }, 0);

            // Auto-accept after 5 seconds
            timerRef.current = window.setTimeout(() => {
                accept();
            }, 5000);

            return () => {
                window.clearTimeout(initTimer);
                if (timerRef.current) window.clearTimeout(timerRef.current);
            };
        }
    }, [accept]);

    if (!show) return null;

    return (
        <div
            className={`hidden lg:block fixed z-[60] bg-white border border-primary/20 p-4 sm:p-6 transition-all duration-500 ease-in-out ${
                isExiting ? "translate-y-[150%] opacity-0" : "translate-y-0 opacity-100"
            }`}
            style={{
                bottom: "max(1rem, env(safe-area-inset-bottom))",
                right: "max(1rem, env(safe-area-inset-right))",
                width:
                    "min(24rem, calc(100vw - max(1rem, env(safe-area-inset-left)) - max(1rem, env(safe-area-inset-right))))",
            }}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Cookie settings</div>
                <button
                    type="button"
                    onClick={decline}
                    className="text-ink hover:text-black transition-colors"
                    aria-label="Close cookie notice"
                >
                    <IconX size={14} aria-hidden="true" />
                </button>
            </div>
            <p className="text-xs text-ink mb-6 leading-relaxed">
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
