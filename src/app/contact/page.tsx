import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Entra in contatto con me per iniziare il tuo percorso di crescita personale e professionale. Prenota una consulenza gratuita di coaching o consulenza filosofica. Rispondi entro 24 ore.",
  keywords: [
    "contatta coach",
    "prenota consulenza",
    "coaching gratuito",
    "consulenza filosofica",
    "appuntamento online",
    "crescita personale",
    "consulenza gratuita",
  ],
  openGraph: {
    description:
      "Entra in contatto con me per iniziare il tuo percorso di crescita personale e professionale. Prenota una consulenza gratuita.",
    url: "https://martinavecchio.com/contact",
    images: [
      {
        url: "https://martinavecchio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contatta Martina Vecchio per coaching",
      },
    ],
  },
  alternates: {
    canonical: "https://martinavecchio.com/contact",
  },
};

const ContactPage = () => {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactInfo />

      <Footer />
    </main>
  );
};

export default ContactPage;
