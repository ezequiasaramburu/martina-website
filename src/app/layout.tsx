import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FORMARTI - Martina Vecchio | Coaching e Consulenza Filosofica",
  description:
    "Umani prima che risorse. Accompagnamento nella crescita personale e professionale attraverso coaching e consulenza filosofica con Martina Vecchio.",
  keywords: [
    "coaching",
    "consulenza filosofica",
    "crescita personale",
    "formazione",
    "Martina Vecchio",
    "sviluppo professionale",
    "filosofia pratica",
  ],
  authors: [{ name: "Martina Vecchio" }],
  openGraph: {
    title: "FORMARTI - Martina Vecchio | Coaching e Consulenza Filosofica",
    description:
      "Umani prima che risorse. Accompagnamento nella crescita personale e professionale attraverso coaching e consulenza filosofica.",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "FORMARTI - Martina Vecchio | Coaching e Consulenza Filosofica",
    description:
      "Umani prima che risorse. Accompagnamento nella crescita personale e professionale attraverso coaching e consulenza filosofica.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-dark-900">{children}</div>
      </body>
    </html>
  );
}
