import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Nunito, Merriweather } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const CookieConsent = dynamic(() => import("@/components/CookieConsent"), {
  ssr: false,
});

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
      <body
        className={`${nunito.variable} ${merriweather.variable} font-sans antialiased`}
      >
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
