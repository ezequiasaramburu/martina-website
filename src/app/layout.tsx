import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import StructuredData, { organizationData } from "@/components/StructuredData";
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
    default: "FORMARTI - Martina Vecchio | Coaching e Consulenza Filosofica",
    template: "%s | FORMARTI - Martina Vecchio",
  },
  description:
    "Umani prima che risorse. Accompagnamento professionale nella crescita personale e aziendale attraverso coaching, consulenza filosofica e formazione con Martina Vecchio. Laureata in Filosofia e Scienze dell'Educazione.",
  keywords: [
    "coaching personale",
    "consulenza filosofica",
    "crescita personale",
    "formazione aziendale",
    "sviluppo professionale",
    "orientamento carriera",
    "coaching Italia",
    "Martina Vecchio",
    "filosofia pratica",
    "leadership coaching",
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
    title: "FORMARTI - Martina Vecchio | Coaching e Consulenza Filosofica",
    description:
      "Umani prima che risorse. Accompagnamento professionale nella crescita personale e aziendale attraverso coaching, consulenza filosofica e formazione.",
    url: "https://martinavecchio.com",
    siteName: "FORMARTI",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Martina Vecchio - Coach e Consulente Filosofico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORMARTI - Martina Vecchio | Coaching e Consulenza Filosofica",
    description:
      "Umani prima che risorse. Accompagnamento professionale nella crescita personale e aziendale attraverso coaching e consulenza filosofica.",
    images: ["/images/profile.jpeg"],
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
  verification: {
    google: "your-google-verification-code-here",
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
          src="https://www.googletagmanager.com/gtag/js?id=G-EYXQ3KKT3V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EYXQ3KKT3V');
          `}
        </Script>

        <StructuredData type="Organization" data={organizationData} />

        <div className="min-h-screen bg-dark-900">{children}</div>
      </body>
    </html>
  );
}
