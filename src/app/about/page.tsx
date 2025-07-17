import AboutHero from "@/components/AboutHero";
import ThreeColumnFeatures from "@/components/ThreeColumnFeatures";
import BookShowcase from "@/components/BookShowcase";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Scopri chi sono: Martina Vecchio, laureata in Scienze dell'Educazione e Filosofia con Master in Consulenza Filosofica. Offro coaching e consulenza filosofica per accompagnarti nella crescita personale e professionale con professionalità ed etica.",
  keywords: [
    "Martina Vecchio",
    "coach certificato",
    "consulente filosofico",
    "laurea filosofia",
    "scienze educazione",
    "formazione professionale",
    "crescita personale",
  ],
  openGraph: {
    description:
      "Scopri chi sono: Martina Vecchio, laureata in Scienze dell'Educazione e Filosofia con Master in Consulenza Filosofica.",
    url: "https://martinavecchio.com/about",
    images: [
      {
        url: "https://martinavecchio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Martina Vecchio - Profilo professionale",
      },
    ],
  },
  alternates: {
    canonical: "https://martinavecchio.com/about",
  },
};

const AboutPage = () => {
  const featuresData = [
    {
      title: "Professionalità",
      description:
        "Sono laureata in Filosofia, Scienze dell'Educazione e della Formazione. Il Master in Consulenza Filosofica e antropologia esistenziale ha unito teoria e pratica, permettendomi di guardare le persone con occhi più profondi: non solo per ciò che fanno, ma per ciò che cercano di diventare.",
    },
    {
      title: "Personalità",
      description:
        '"Non mi fingo mai più intelligente, più bella, più giovane e più buona di quanto sono per apparire diversa, perché non ho bisogno di quelle menzogne. Vivo nell\'incredibile e indescrivibile lusso delle domande e delle risposte del mio tempo, che mi sono vicine e che sento come mie. Sono libera di vivere dove e come voglio, di leggere ciò che voglio, di pensare a tutto ciò che voglio come voglio, e di ascoltare chi voglio."',
    },
    {
      title: "Eticità",
      description:
        "Nel mio ruolo, l’etica professionale è il fondamento imprescindibile di ogni intervento. Credo profondamente che l'onestà intellettuale, la trasparenza e l’integrità siano la base per costruire spazi di apprendimento efficaci, relazioni autentiche e di fiducia con chi si accompagna nel percorso di crescita. Agisco sempre con responsabilità, ponendo al centro la persona e il suo benessere, nel rispetto delle diversità e della dignità di ciascuno.",
    },
  ];

  return (
    <main>
      <Header />
      <AboutHero
        title="Ciao, sono Martina Vecchio."
        subtitle="In FORMARTI c’è il mio nome, la mia visione, il desiderio profondo di far fiorire talenti, consapevolezze, possibilità. Non è solo un progetto professionale: è il mio modo di toccare vite, di contribuire al cambiamento, con empatia e presenza."
        imageSrc="/images/profile.jpeg"
        imageAlt="Martina Vecchio sitting on a wall with graffiti in a natural setting"
      />

      <ThreeColumnFeatures
        sectionTitle="Cosa ti piacerà di me:"
        columns={
          featuresData as [
            (typeof featuresData)[0],
            (typeof featuresData)[1],
            (typeof featuresData)[2]
          ]
        }
        backgroundColor="bg-gray-50"
        textColor="text-gray-900"
      />

      <BookShowcase
        title="Il mio e-book"
        description=" La filosofia che si fa pratica e diventa consulenza filosofica, strumento delle risorse umane che possono e devono prendere parola nelle aziende. Perché? Facile, perché la filosofia s'intende di niente e tutto, soprattutto di vita. E l'azienda che cos'è? Insieme di vite che danno vita ad altra vita."
        imageSrc="/images/book.jpg"
        imageAlt="Libro di Martina Vecchio"
        buttonText="Scopri di più"
        buttonLink="https://www.amazon.it/-/en/Martina-Vecchio-ebook/dp/B0CPMD38P8/ref=sr_1_1?crid=3GAGXFAU55UCS&dib=eyJ2IjoiMSJ9.iSDjPoqCfoNXUfvCdI3exg8cZjcO_Z36l0VYgKpf6bh-YF1FfD0lFrK9HzSwvYRPvCGZmivLomUKQ1RAi7AkGgVZn68G8fwElppn8HiBjkYs0oLjHTRL75WeMp1lW_DRLQOOAl9kbfcTEywywr0Kgy-BgY03HpIDNODBeOoUYJCkdYUzKHHHnXR7ge8g9Jsdm5a4kjRgKEqPamvAazqVaa5YQJUHNsvYTQ4Qqm1vjtha44Bi6iLzhPkersGV7ztDReuLSc1xUtFhM6RvKEO-fDle8cQrYpYtKVmMgH_tYaM.Ll41R--6tzJTOJ7iMCeFNRSNHwiIi_SJl-fDehanC0s&dib_tag=se&keywords=martina+vecchio&qid=1752678482&sprefix=martina+vecchio+%2Caps%2C123&sr=8-1"
      />

      <Footer />
    </main>
  );
};

export default AboutPage;
