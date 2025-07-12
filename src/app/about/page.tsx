"use client";

import AboutHero from "@/components/AboutHero";
import ThreeColumnFeatures from "@/components/ThreeColumnFeatures";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const AboutPage = () => {
  const featuresData = [
    {
      title: "Professionalità",
      description:
        "Mi sono laureata in Scienze dell’Educazione, della Formazione e in Filosofia. Ho approfondito la cura educativa e gli interventi di supporto in momenti di fragilità delle persone. La filosofia mi ha spinta a esplorare la ricerca di senso e la trasformazione. Il Master in Consulenza Filosofica ha unito teoria e pratica, permettendomi di accompagnare le persone valorizzando le loro potenzialità e domande in continua evoluzione.",
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
        subtitle="Siamo quello che facciamo? Il nostro nome? Le nostre passioni o i nostri vizi? I nostri pensieri più strani o quelle azioni che fanno di noi qualcuno da ammirare?"
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

      <Footer />
    </main>
  );
};

export default AboutPage;
