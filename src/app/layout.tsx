import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import StructuredData, { organizationData } from "@/components/StructuredData";
import RecaptchaProvider from "@/components/RecaptchaProvider";
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
  metadataBase: new URL("https://martinavecchio.com"),
  title: {
    default: "FORMARTI - Martina Vecchio | Educatrice e Consulente Filosofica",
    template: "%s | Martina Vecchio",
  },
  description:
    "Umani prima che risorse. Accompagnamento professionale nella crescita personale e aziendale attraverso educatrice e formatrice, consulenza filosofica e formazione con Martina Vecchio. Laureata in Filosofia e Scienze dell'Educazione.",
  keywords: [
    "educatrice e formatrice personale",
    "consulenza filosofica",
    "crescita personale",
    "formazione aziendale",
    "sviluppo professionale",
    "orientamento carriera",
    "educatrice e formatrice Italia",
    "Martina Vecchio",
    "filosofia pratica",
    "leadership educatrice e formatrice",
    "team building",
    "consulenza HR",
    "benessere organizzativo",
    "mindfulness aziendale",
    "gestione conflitti",
    "intelligenza emotiva",
  ],
  authors: [{ name: "Martina Vecchio", url: "https://martinavecchio.com" }],
  creator: "Martina Vecchio",
  publisher: "FORMARTI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "FORMARTI - Martina Vecchio | Educatrice e Consulente Filosofica",
    description:
      "Umani prima che risorse. Accompagnamento professionale nella crescita personale e aziendale attraverso educatrice e formatrice, consulenza filosofica e formazione.",
    url: "https://martinavecchio.com",
    siteName: "FORMARTI",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "https://martinavecchio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Martina Vecchio - Coach e Consulente Filosofico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORMARTI - Martina Vecchio | Educatrice e Consulente Filosofica",
    description:
      "Umani prima che risorse. Accompagnamento professionale nella crescita personale e aziendale attraverso educatrice e formatrice e consulenza filosofica.",
    images: [
      "https://martinavecchio.com/og-image.jpg",
      "https://martinavecchio.com/twitter-card.jpg",
    ],
    creator: "@martinavecchio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://martinavecchio.com",
  },
  category: "Education & Training",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-509LMV9KRK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-509LMV9KRK');
          `}
        </Script>

        <StructuredData type="Organization" data={organizationData} />

        <RecaptchaProvider>
          <div className="min-h-screen bg-dark-900">{children}</div>
        </RecaptchaProvider>
      </body>
    </html>
  );
}
