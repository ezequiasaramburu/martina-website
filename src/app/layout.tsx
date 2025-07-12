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
  title: "JOIO Life Coaching - Joy on the Inside & Out",
  description:
    "Transform your life with JOIO Life Coaching. Discover joy on the inside and out through personalized coaching sessions focused on self-esteem, personal growth, and life fulfillment.",
  keywords: [
    "life coaching",
    "self-esteem",
    "personal growth",
    "joy",
    "transformation",
    "life fulfillment",
  ],
  authors: [{ name: "JOIO Life Coaching" }],
  openGraph: {
    title: "JOIO Life Coaching - Joy on the Inside & Out",
    description:
      "Transform your life with JOIO Life Coaching. Discover joy on the inside and out.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JOIO Life Coaching - Joy on the Inside & Out",
    description:
      "Transform your life with JOIO Life Coaching. Discover joy on the inside and out.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-dark-900">{children}</div>
      </body>
    </html>
  );
}
