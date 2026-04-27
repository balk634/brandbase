"use client";

import { useEffect, useState } from "react";
import { IconBrandWhatsapp, IconX } from "@tabler/icons-react";

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
}

export function WhatsAppButton({ phoneNumber, message = "Hi! I'd like to know more about your services." }: WhatsAppButtonProps) {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Only set the initial states in a timeout to avoid sync setState in effect causing cascading renders immediately
        const mountTimer = setTimeout(() => {
            setMounted(true);
            setIsMobile(window.innerWidth < 768);

            // Check if previously dismissed
            const dismissed = sessionStorage.getItem("wa-dismissed") === "true";
            if (dismissed) {
                setIsDismissed(true);
            }
        }, 0);

        // Slide in from bottom after 1 second (helps with initial page load)
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(mountTimer);
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDismiss = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem("wa-dismissed", "true");
    };

    if (!mounted || isDismissed) return null;

    // Format phone number (remove +, spaces, etc)
    const cleanPhone = phoneNumber.replace(/[^\d]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://${isMobile ? 'api' : 'web'}.whatsapp.com/send?phone=${cleanPhone}&text=${encodedMessage}`;

    return (
        <div
            className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
        >
            <div className="relative group">
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-3 w-48 p-3 bg-white border border-grid/15 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:block hidden">
                    <p className="text-xs font-sans text-ink leading-relaxed">
                        Have a question? Chat with us on WhatsApp.
                    </p>
                    {/* Triangle pointer */}
                    <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-grid/15 transform rotate-45" />
                </div>

                {/* Main Button */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200 group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
                    aria-label="Chat with us on WhatsApp"
                >
                    {/* Ripple Effect Background */}
                    <div className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-20 group-hover:hidden" />

                    <IconBrandWhatsapp size={28} strokeWidth={1.5} />
                </a>

                {/* Dismiss Button - Desktop Only */}
                <button
                    onClick={handleDismiss}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-paper border border-grid/15 rounded-full flex items-center justify-center text-ink-muted hover:text-ink hover:bg-grid/5 transition-colors opacity-0 group-hover:opacity-100 focus-visible:opacity-100 sm:flex hidden"
                    aria-label="Dismiss WhatsApp button"
                >
                    <IconX size={12} strokeWidth={2} />
                </button>
            </div>
        </div>
    );
}
