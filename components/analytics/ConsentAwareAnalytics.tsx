"use client";

import Script from "next/script";

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
  return (
    <>
      {/* Google Analytics - loads after hydration (won't block Speed Index) */}
      {googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
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

      {/* Microsoft Clarity - loads during idle time (no impact on Speed Index) */}
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
