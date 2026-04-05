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
        <div className="fixed bottom-6 right-6 z-[100] bg-white border border-grid/15 p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.1)] rounded-none animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[calc(100vw-3rem)] w-80">
            <div className="flex justify-between items-start mb-4">
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink/40 font-bold">Privacy Settings</div>
                <button
                    type="button"
                    onClick={decline}
                    className="text-ink/30 hover:text-ink transition-colors p-1"
                    aria-label="Close cookie notice"
                >
                    <IconX size={14} aria-hidden="true" />
                </button>
            </div>
            <p className="text-[13px] text-ink mb-6 leading-relaxed">
                We use cookies to improve your experience and analyze traffic. By clicking &quot;Accept&quot;, you agree to our use of cookies.
            </p>
            <div className="flex gap-3">
                <Button variant="primary" size="sm" onClick={accept} className="w-full h-10 font-mono uppercase tracking-widest text-[10px]">
                    Accept cookies
                </Button>
            </div>
        </div>
    );
}
