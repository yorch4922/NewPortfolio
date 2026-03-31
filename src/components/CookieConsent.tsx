"use client";

import { useState } from "react";
import Script from "next/script";

type ConsentState = "granted" | "denied" | null;

type CookieConsentProps = {
  initialConsent: ConsentState;
};

export default function CookieConsent({ initialConsent }: CookieConsentProps) {
  const [consent, setConsent] = useState<ConsentState>(initialConsent);

  const handleConsent = (nextConsent: Exclude<ConsentState, null>) => {
    document.cookie = `analytics-consent=${nextConsent}; path=/; max-age=31536000; samesite=lax`;
    setConsent(nextConsent);
  };

  return (
    <>
      {consent === "granted" && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vysxj4i9qm");
          `}
        </Script>
      )}

      {consent === null && (
        <div
          role="region"
          aria-label="Cookie consent banner"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-gray-200 bg-white/95 backdrop-blur-sm"
        >
          <div className="container-custom py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p id="cookie-consent-title" className="text-sm font-bold text-text-primary">
                Analytics preferences
              </p>
              <p id="cookie-consent-description" className="text-sm text-text-primary">
                This site uses analytics cookies to improve usability. You can accept or reject analytics tracking.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleConsent("denied")}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-bold text-text-primary hover:bg-gray-50 transition-colors"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => handleConsent("granted")}
                className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-bold hover:brightness-110 transition-all"
              >
                Accept analytics
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
