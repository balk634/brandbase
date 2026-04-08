"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type ConsentAwareAnalyticsProps = {
  googleAnalyticsId?: string;
  microsoftClarityId?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function ConsentAwareAnalytics({
  googleAnalyticsId,
  microsoftClarityId,
}: ConsentAwareAnalyticsProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Only load analytics on actual user interaction
    // This perfectly shields LCP/TBT scores from heavy 3rd-party scripts on mobile
    const interactions = ["scroll", "mousemove", "touchstart", "keydown", "click"];
    
    const handleInteraction = () => {
      setShouldLoad(true);
      interactions.forEach((event) => window.removeEventListener(event, handleInteraction));
    };

    interactions.forEach((event) => window.addEventListener(event, handleInteraction, { once: true, passive: true }));

    return () => {
      interactions.forEach((event) => window.removeEventListener(event, handleInteraction));
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* Google Analytics - loads during idle time */}
      {googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                anonymize_ip: true,
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Microsoft Clarity - the ultimate 'load last' strategy */}
      {microsoftClarityId && (
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${microsoftClarityId}");
          `}
        </Script>
      )}
    </>
  );
}
