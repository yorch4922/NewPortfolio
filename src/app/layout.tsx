import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Nunito, Merriweather } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jorge Oropeza | UX Designer & Researcher",
  description: "UX Design with an Anthropological Touch. Portfolio of Jorge Oropeza, a specialist in participatory design and qualitative research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vysxj4i9qm");
        `}
      </Script>
      <body
        className={`${nunito.variable} ${merriweather.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
