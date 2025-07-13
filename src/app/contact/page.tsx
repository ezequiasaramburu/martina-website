import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti - FORMARTI | Martina Vecchio",
  description:
    "Entra in contatto con me per iniziare il tuo percorso di crescita personale e professionale. Prenota una consulenza di coaching o consulenza filosofica.",
  openGraph: {
    title: "Contatti - FORMARTI | Martina Vecchio",
    description:
      "Entra in contatto con me per iniziare il tuo percorso di crescita personale e professionale. Prenota una consulenza di coaching o consulenza filosofica.",
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
