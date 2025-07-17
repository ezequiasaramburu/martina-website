import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ColorfulSection from "@/components/ColorfulSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Umani prima che risorse. Scopri il mio approccio come educatrice e formatrice e alla consulenza filosofica per la crescita personale e professionale. Servizi di formazione personalizzata, formazione aziendale e orientamento carriera.",
  keywords: [
    "educatrice e formatrice personale",
    "consulenza filosofica",
    "crescita personale",
    "formazione aziendale",
    "educatrice e formatrice online",
    "sviluppo leadership",
    "orientamento carriera",
  ],
  openGraph: {
    description:
      "Umani prima che risorse. Scopri il mio approccio come educatrice e formatrice e alla consulenza filosofica per la crescita personale e professionale.",
    url: "https://martinavecchio.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Martina Vecchio - Educatrice e Consulente Filosofico",
      },
    ],
  },
  alternates: {
    canonical: "https://martinavecchio.com",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ColorfulSection />
      </main>
      <Footer />
    </>
  );
}
