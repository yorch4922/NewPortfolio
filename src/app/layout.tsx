import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Nunito, Merriweather } from "next/font/google";
import { cookies } from "next/headers";
import CookieConsent from "@/components/CookieConsent";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const storedConsent = cookieStore.get("analytics-consent")?.value;
  const initialConsent =
    storedConsent === "granted" || storedConsent === "denied"
      ? storedConsent
      : null;

  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${merriweather.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <CookieConsent initialConsent={initialConsent} />
        <Analytics />
      </body>
    </html>
  );
}
