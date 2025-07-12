"use client";

import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
