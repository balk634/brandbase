"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence } from "@/components/ui/motion-lite";

export function CookieConsent() {
    const [show, setShow] = useState(false);

    const notifyConsentChange = () => {
        window.dispatchEvent(new Event("cookie-consent-updated"));
    };

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setShow(!localStorage.getItem("cookie-consent"));
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, []);

    const accept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        notifyConsentChange();
        setShow(false);
    };

    const decline = () => {
        localStorage.setItem("cookie-consent", "declined");
        notifyConsentChange();
        setShow(false);
    };

    if (!show) return null;

    return (
        <AnimatePresence>
            {show && (
                <div
                    className="fixed z-[60] bg-white border border-grid/15 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-none animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
                    style={{
                        bottom: "max(1.5rem, env(safe-area-inset-bottom))",
                        right: "max(1.5rem, env(safe-area-inset-right))",
                        width:
                            "min(26rem, calc(100vw - max(2rem, env(safe-area-inset-left)) - max(2rem, env(safe-area-inset-right))))",
                    }}
                >
                    <div className="flex justify-between items-start mb-5">
                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink/40 font-bold">Privacy Settings</div>
                        <button
                            type="button"
                            onClick={decline}
                            className="text-ink/30 hover:text-ink transition-colors p-1"
                            aria-label="Close cookie notice"
                        >
                            <IconX size={16} aria-hidden="true" />
                        </button>
                    </div>
                    <h3 className="font-serif text-xl tracking-tight text-ink mb-3 leading-tight">
                        We use cookies to <em className="italic font-serif-10">optimize</em> your experience.
                    </h3>
                    <p className="text-[13px] text-ink-muted mb-8 leading-relaxed">
                        By clicking &quot;Accept&quot;, you agree to our use of cookies to improve site performance and analyze traffic.
                    </p>
                    <div className="flex gap-3">
                        <Button variant="primary" size="sm" onClick={accept} className="w-full h-11 font-mono uppercase tracking-widest text-[11px]">
                            Accept cookies
                        </Button>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
