import CoachingHero from "@/components/CoachingHero";
import CoachingModalities from "@/components/CoachingModalities";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Scopri le diverse modalità di incontro per il tuo percorso di crescita personale e professionale. Coaching individuale, consulenza filosofica e sessioni di gruppo personalizzati per le tue esigenze.",
  keywords: [
    "coaching individuale",
    "consulenza filosofica",
    "sessioni online",
    "crescita personale",
    "coaching di gruppo",
    "sviluppo professionale",
    "modalità incontro",
  ],
  openGraph: {
    description:
      "Scopri le diverse modalità di incontro per il tuo percorso di crescita personale e professionale. Coaching e consulenza filosofica personalizzati.",
    url: "https://martinavecchio.com/coaching",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Servizi di coaching personalizzati",
      },
    ],
  },
  alternates: {
    canonical: "https://martinavecchio.com/coaching",
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
