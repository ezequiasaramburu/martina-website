import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ColorfulSection from "@/components/ColorfulSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Umani prima che risorse. Scopri il mio approccio al coaching e alla consulenza filosofica per la crescita personale e professionale. Servizi di coaching personalizzato, formazione aziendale e orientamento carriera.",
  keywords: [
    "coaching personale",
    "consulenza filosofica",
    "crescita personale",
    "formazione aziendale",
    "coaching online",
    "sviluppo leadership",
    "orientamento carriera",
  ],
  openGraph: {
    title: "Home - FORMARTI | Martina Vecchio",
    description:
      "Umani prima che risorse. Scopri il mio approccio al coaching e alla consulenza filosofica per la crescita personale e professionale.",
    url: "https://martinavecchio.com",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Martina Vecchio - Coach e Consulente Filosofico",
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
