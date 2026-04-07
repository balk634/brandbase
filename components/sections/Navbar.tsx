"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { masterConfig } from "@/config/master";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatePresence, motion } from "@/components/ui/motion-lite";
import { IconArrowRight } from "@tabler/icons-react";
import { CalButton } from "@/components/ui/CalBooking";

import Image from "next/image";

export function Navbar() {
    const headerRef = useRef<HTMLElement | null>(null);
    const desktopCloseTimerRef = useRef<number | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    const toggleMobileDropdown = (name: string) => {
        setOpenMobileDropdown(prev => prev === name ? null : name);
    };

    const closeMobileMenu = useCallback(() => {
        setIsMenuOpen(false);
        setOpenMobileDropdown(null);
    }, []);

    const clearDesktopCloseTimer = useCallback(() => {
        if (desktopCloseTimerRef.current === null) return;
        window.clearTimeout(desktopCloseTimerRef.current);
        desktopCloseTimerRef.current = null;
    }, []);

    const openDesktopMenu = (name: string) => {
        clearDesktopCloseTimer();
        setOpenDesktopDropdown(name);
    };

    const queueDesktopMenuClose = (name: string) => {
        clearDesktopCloseTimer();
        desktopCloseTimerRef.current = window.setTimeout(() => {
            setOpenDesktopDropdown((prev) => (prev === name ? null : prev));
            desktopCloseTimerRef.current = null;
        }, 140);
    };

    const closeAllMenus = useCallback(() => {
        clearDesktopCloseTimer();
        setOpenDesktopDropdown(null);
        closeMobileMenu();
    }, [clearDesktopCloseTimer, closeMobileMenu]);

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => {
            closeAllMenus();
        });
        return () => window.cancelAnimationFrame(frame);
    }, [pathname, closeAllMenus]);

    useEffect(() => {
        const onPointerDown = (event: PointerEvent) => {
            if (!headerRef.current) return;
            if (headerRef.current.contains(event.target as Node)) return;
            closeAllMenus();
        };

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key !== "Escape") return;
            closeAllMenus();
        };

        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
            clearDesktopCloseTimer();
        };
    }, [closeAllMenus, clearDesktopCloseTimer]);

    return (
        <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-grid/15 bg-paper">
            <Container className="h-16 grid grid-cols-[auto,1fr,auto] items-center gap-3">
                {/* Logo */}
                <Link href="/" className="mi-nav-item flex items-center gap-2" aria-label="Home" onClick={closeAllMenus}>
                    <Image 
                        src="/brand/logo-dark.svg" 
                        alt="BrandBase — High-performance websites and marketing" 
                        width={masterConfig.logo.header.width ?? 138} 
                        height={masterConfig.logo.header.height} 
                        className="w-auto"
                        style={{ height: `${masterConfig.logo.header.height}px` }}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center justify-center gap-2 min-w-0">
                    {masterConfig.navigation.map((item) => {
                        const hasSubItems = item.subItems && item.subItems.length > 0;
                        const isMainActive = pathname === item.href || (hasSubItems && item.subItems?.some(sub => pathname === sub.href));
                        const isDesktopOpen = openDesktopDropdown === item.name;

                        return (
                            <div key={item.name} className="flex items-center">
                                {hasSubItems ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => openDesktopMenu(item.name)}
                                        onMouseLeave={() => queueDesktopMenuClose(item.name)}
                                        onFocusCapture={() => openDesktopMenu(item.name)}
                                        onBlurCapture={(event) => {
                                            const nextTarget = event.relatedTarget as Node | null;
                                            if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
                                                setOpenDesktopDropdown((prev) => (prev === item.name ? null : prev));
                                            }
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={[
                                                "mi-nav-link relative flex items-center gap-1.5 px-4 xl:px-5 py-2 text-xs font-mono uppercase whitespace-nowrap",
                                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                                                isMainActive || isDesktopOpen
                                                    ? "text-ink"
                                                    : "text-ink-muted hover:text-ink",
                                            ].join(" ")}
                                            onClick={() => setOpenDesktopDropdown(null)}
                                        >
                                            <span
                                                className={[
                                                    "relative inline-block",
                                                    "after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-px after:bg-primary after:w-full after:origin-center after:scale-x-0 after:transition-transform after:duration-200",
                                                    isMainActive || isDesktopOpen ? "after:scale-x-100" : "",
                                                ].join(" ")}
                                            >
                                                {item.name}
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className={`opacity-60 transition-transform duration-300 ${isDesktopOpen ? "rotate-180" : ""}`}
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </Link>

                                        <div
                                            className={[
                                                "absolute left-0 top-full z-50 pt-2 perspective-[1000px]",
                                                "transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                                                isDesktopOpen
                                                    ? "opacity-100 translate-y-0 pointer-events-auto visible"
                                                    : "opacity-0 -translate-y-2 pointer-events-none invisible",
                                            ].join(" ")}
                                            aria-hidden={!isDesktopOpen}
                                        >
                                            <div className="bg-paper border border-grid/15 w-[min(320px,calc(100vw-2rem))] origin-top overflow-hidden relative">
                                                {/* Top subtle highlight */}
                                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                                                <div className="flex flex-col py-2">
                                                    {item.subItems?.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            className={[
                                                                "mi-nav-item group/sub flex items-center justify-between px-6 py-3.5 relative",
                                                                "hover:bg-grid/[0.03] transition-colors duration-200",
                                                                pathname === sub.href ? "bg-grid/[0.03]" : "",
                                                            ].join(" ")}
                                                            onClick={() => setOpenDesktopDropdown(null)}
                                                        >
                                                            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-ink-muted group-hover/sub:text-primary transition-colors duration-200 z-10">
                                                                {sub.name}
                                                            </span>
                                                            <motion.div
                                                                initial={{ x: -4, opacity: 0 }}
                                                                whileHover={{ x: 0, opacity: 1 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="text-primary z-10 opacity-0 group-hover/sub:opacity-100 transition-all duration-200"
                                                                aria-hidden="true"
                                                            >
                                                                <IconArrowRight className="w-3.5 h-3.5" />
                                                            </motion.div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={[
                                            "mi-nav-link relative flex items-center px-4 xl:px-5 py-2 text-xs font-mono uppercase whitespace-nowrap",
                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                                            isMainActive ? "text-ink" : "text-ink-muted hover:text-ink",
                                        ].join(" ")}
                                    >
                                        <span
                                            className={[
                                                "relative inline-block",
                                                "after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-px after:bg-primary after:w-full after:origin-center after:scale-x-0 after:transition-transform after:duration-200",
                                                isMainActive ? "after:scale-x-100" : "",
                                            ].join(" ")}
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* Right Side */}
                <div className="flex items-center justify-end gap-2">
                    <CalButton variant="primary" size="sm" className="hidden sm:inline-flex">
                        Get in Touch
                    </CalButton>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => {
                            setIsMenuOpen((prev) => {
                                const next = !prev;
                                setOpenDesktopDropdown(null);
                                if (!next) setOpenMobileDropdown(null);
                                return next;
                            });
                        }}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        {isMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </Button>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen ? (
                    <motion.div
                        className="lg:hidden fixed top-16 left-0 w-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-paper border-b border-grid/15"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <nav className="flex flex-col divide-y divide-grid/10">
                            {masterConfig.navigation.map((item) => {
                                const hasSubItems = item.subItems && item.subItems.length > 0;
                                const isOpen = openMobileDropdown === item.name;

                                return (
                                    <div key={item.name} className="flex flex-col">
                                        {hasSubItems ? (
                                            <>
                                                <div className="flex items-center justify-between px-4 py-4">
                                                    <Link
                                                        href={item.href}
                                                        className="mi-nav-item flex items-center gap-3 text-xs font-mono uppercase text-ink flex-1 min-w-0"
                                                        onClick={closeMobileMenu}
                                                    >
                                                        <span className="truncate">{item.name}</span>
                                                    </Link>
                                                    <button
                                                        onClick={() => toggleMobileDropdown(item.name)}
                                                        className="mi-nav-item h-10 w-10 grid place-items-center text-ink border border-grid/15 hover:bg-grid/5 transition-colors"
                                                        aria-label="Toggle dropdown"
                                                        aria-expanded={isOpen}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                                            aria-hidden="true"
                                                        >
                                                            <path d="m6 9 6 6 6-6" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                                    <div className="overflow-hidden border-t border-grid/10">
                                                        <div className="flex flex-col">
                                                            {item.subItems?.map((sub) => (
                                                                <Link
                                                                    key={sub.name}
                                                                    href={sub.href}
                                                                    className="mi-nav-item px-4 py-3 pl-12 text-sm text-ink-muted hover:text-ink hover:bg-grid/5 transition-colors border-b border-grid/10 last:border-b-0"
                                                                    onClick={closeMobileMenu}
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="mi-nav-item px-4 py-4 flex items-center gap-3 text-xs font-mono uppercase text-ink hover:bg-grid/5 transition-colors"
                                                onClick={closeMobileMenu}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>

                        <div className="p-4 border-t border-grid/10 bg-paper">
                                <CalButton variant="primary" size="lg" className="w-full" onClick={closeMobileMenu}>
                                    Get in Touch
                                </CalButton>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
}
