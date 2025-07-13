import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ColorfulSection from "@/components/ColorfulSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - FORMARTI | Martina Vecchio",
  description:
    "Umani prima che risorse. Scopri il mio approccio al coaching e alla consulenza filosofica per la crescita personale e professionale.",
  openGraph: {
    title: "Home - FORMARTI | Martina Vecchio",
    description:
      "Umani prima che risorse. Scopri il mio approccio al coaching e alla consulenza filosofica per la crescita personale e professionale.",
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
