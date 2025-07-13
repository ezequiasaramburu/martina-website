import CoachingHero from "@/components/CoachingHero";
import CoachingModalities from "@/components/CoachingModalities";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Per Te - FORMARTI | Martina Vecchio",
  description:
    "Scopri le diverse modalità di incontro per il tuo percorso di crescita personale e professionale. Coaching e consulenza filosofica personalizzati.",
  openGraph: {
    title: "Per Te - FORMARTI | Martina Vecchio",
    description:
      "Scopri le diverse modalità di incontro per il tuo percorso di crescita personale e professionale. Coaching e consulenza filosofica personalizzati.",
  },
};

const CoachingPage = () => {
  return (
    <main>
      <Header />
      <CoachingHero />
      <CoachingModalities />
      <Footer />
    </main>
  );
};

export default CoachingPage;
