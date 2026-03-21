"use client";

import { useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "cookie-consent-analytics";

type ConsentState = "granted" | "denied" | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(() => {
    const storedValue = window.localStorage.getItem(CONSENT_KEY);
    if (storedValue === "granted" || storedValue === "denied") {
      return storedValue;
    }
    return null;
  });

  const handleConsent = (nextConsent: Exclude<ConsentState, null>) => {
    window.localStorage.setItem(CONSENT_KEY, nextConsent);
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
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <div className="container-custom py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-text-primary">
              Este sitio monitorea el comportamiento de navegación para mejorar la experiencia de usuario. Puedes aceptar o rechazar cookies analíticas.
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleConsent("denied")}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-bold text-text-primary hover:bg-gray-50 transition-colors"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={() => handleConsent("granted")}
                className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-bold hover:brightness-110 transition-all"
              >
                Aceptar analíticas
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
