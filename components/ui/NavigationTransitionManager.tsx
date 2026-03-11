"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    finished: Promise<void>;
    ready: Promise<void>;
    updateCallbackDone: Promise<void>;
  };
};

function getHeaderOffset() {
  const header = document.querySelector("header");
  if (!(header instanceof HTMLElement)) return 88;
  return Math.max(56, Math.ceil(header.getBoundingClientRect().height) + 12);
}

function smoothScrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  const lenis = (window as Window & { __lenis?: { scrollTo: (value: number, opts?: { duration?: number }) => void } }).__lenis;

  if (lenis?.scrollTo) {
    lenis.scrollTo(top, { duration: 1 });
    return;
  }

  window.scrollTo({ top, behavior: "smooth" });
}

export function NavigationTransitionManager() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const scrollFromCurrentHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      smoothScrollToHash(hash);
    };

    const frame = window.requestAnimationFrame(scrollFromCurrentHash);
    window.addEventListener("hashchange", scrollFromCurrentHash);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollFromCurrentHash);
    };
  }, [pathname]);

  useEffect(() => {
    const onClickCapture = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as Element | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.getAttribute("rel")?.includes("external")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const currentPath = window.location.pathname;
      const currentSearch = window.location.search;
      const isSamePath = url.pathname === currentPath && url.search === currentSearch;

      if (isSamePath && url.hash) {
        event.preventDefault();
        if (window.location.hash !== url.hash) {
          window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
        }
        smoothScrollToHash(url.hash);
        return;
      }

      if (isSamePath && !url.hash) return;

      event.preventDefault();
      const nextHref = `${url.pathname}${url.search}${url.hash}`;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const doc = document as ViewTransitionDocument;

      if (!prefersReducedMotion && typeof doc.startViewTransition === "function") {
        doc.startViewTransition(() => {
          router.push(nextHref);
        });
        return;
      }

      router.push(nextHref);
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, [router]);

  return null;
}
