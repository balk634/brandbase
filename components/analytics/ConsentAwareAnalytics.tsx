"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from '@next/third-parties/google';

type ConsentAwareAnalyticsProps = {
  googleAnalyticsId?: string;
  microsoftClarityId?: string;
};

declare global {
  interface Window {
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
    // Load analytics 3 seconds after page load completes to further defer JS execution
    const handleLoad = () => {
      setTimeout(() => setShouldLoad(true), 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* Google Analytics via @next/third-parties */}
      {googleAnalyticsId && (
        <GoogleAnalytics gaId={googleAnalyticsId} />
      )}

      {/* Microsoft Clarity */}
      {microsoftClarityId && (
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${microsoftClarityId}");
            `,
          }}
        />
      )}
    </>
  );
}
