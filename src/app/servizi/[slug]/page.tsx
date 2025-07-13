import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import type { Metadata } from "next";

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  sections: {
    title: string;
    content: string;
  }[];
  benefits: string[];
  callToAction: string;
}

const servicesData: Record<string, ServiceData> = {
  "crescita-personale": {
    title: "Crescita Personale",
    subtitle: "Scopri il tuo potenziale e diventa la persona che vuoi essere",
    description:
      "La crescita personale è il processo di cambiamento e sviluppo che ci porta a diventare la persona che vogliamo essere. Questo processo può essere guidato da un coach personale, che ci aiuta a superare i nostri limiti e a raggiungere i nostri obiettivi.",
    backgroundColor: "bg-blue-400",
    textColor: "text-white",
    sections: [
      {
        title: "Cos'è la Crescita Personale?",
        content:
          "La crescita personale è un percorso di autodiscoverta e sviluppo che ti permette di esplorare le tue potenzialità, superare i limiti e costruire una vita più autentica e soddisfacente. È un processo continuo di apprendimento e trasformazione che coinvolge tutti gli aspetti della tua esistenza.",
      },
      {
        title: "Come Funziona?",
        content:
          "Attraverso sessioni di coaching personalizzate, lavoriamo insieme per identificare i tuoi obiettivi, riconoscere i pattern limitanti e sviluppare strategie concrete per il cambiamento. Utilizzo tecniche di consulenza filosofica per aiutarti a riflettere profondamente sui tuoi valori e le tue aspirazioni.",
      },
      {
        title: "Percorso Personalizzato",
        content:
          "Ogni percorso è unico e progettato sulle tue specifiche esigenze. Partiremo da dove sei ora per arrivare dove vuoi essere, con un approccio graduale e sostenibile che rispetta i tuoi tempi e le tue circostanze.",
      },
    ],
    benefits: [
      "Maggiore consapevolezza di sé",
      "Miglioramento dell'autostima",
      "Sviluppo di strategie per gestire lo stress",
      "Chiarezza sui propri obiettivi di vita",
      "Superamento di blocchi e paure limitanti",
      "Crescita della resilienza emotiva",
    ],
    callToAction: "Inizia il tuo percorso di crescita personale oggi",
  },
  "formazione-aziendale": {
    title: "Formazione Aziendale",
    subtitle: "Sviluppa le competenze del tuo team per un successo duraturo",
    description:
      "Sviluppo delle competenze trasversali e soft skills per team e aziende. Miglioriamo la comunicazione, la leadership e la collaborazione attraverso percorsi formativi personalizzati che valorizzano il potenziale umano e professionale.",
    backgroundColor: "bg-green-400",
    textColor: "text-white",
    sections: [
      {
        title: "Formazione per il Successo Aziendale",
        content:
          "Le competenze trasversali sono fondamentali per il successo di qualsiasi organizzazione. Offro percorsi formativi personalizzati che sviluppano le soft skills essenziali per team più efficaci, comunicazione migliore e leadership autentica.",
      },
      {
        title: "Approccio Integrato",
        content:
          "Combino metodologie di coaching aziendale con principi di filosofia pratica per creare programmi formativi che non solo migliorano le performance, ma anche il benessere e la soddisfazione lavorativa dei partecipanti.",
      },
      {
        title: "Risultati Misurabili",
        content:
          "Ogni programma è progettato con obiettivi chiari e KPI misurabili. Monitoriamo i progressi e adattiamo il percorso per garantire risultati concreti e duraturi per la tua organizzazione.",
      },
    ],
    benefits: [
      "Miglioramento della comunicazione interna",
      "Sviluppo di competenze di leadership",
      "Aumento della collaborazione e del team building",
      "Gestione efficace dei conflitti",
      "Crescita della motivazione e dell'engagement",
      "Sviluppo di una cultura aziendale positiva",
    ],
    callToAction: "Trasforma il tuo team con la formazione aziendale",
  },
  "orientamento-scelta": {
    title: "Orientamento alla Scelta",
    subtitle: "Trova la tua direzione e prendi decisioni consapevoli",
    description:
      "Supporto nella definizione del percorso professionale e personale. Ti aiuto a esplorare le tue passioni, valutare le opzioni e prendere decisioni consapevoli per costruire un futuro allineato ai tuoi valori e obiettivi.",
    backgroundColor: "bg-purple-500",
    textColor: "text-white",
    sections: [
      {
        title: "Orientamento Professionale e Personale",
        content:
          "Prendere decisioni importanti sulla propria carriera e vita può essere complesso. Offro supporto specializzato per aiutarti a esplorare le tue passioni, valutare le opzioni disponibili e prendere decisioni consapevoli e allineate con i tuoi valori.",
      },
      {
        title: "Metodologia Strutturata",
        content:
          "Utilizzo strumenti di assessment, tecniche di coaching e riflessione filosofica per aiutarti a comprendere meglio te stesso, le tue motivazioni e i tuoi obiettivi. Questo processo ti permette di fare scelte più informate e autentiche.",
      },
      {
        title: "Supporto Continuo",
        content:
          "L'orientamento non si ferma alla decisione iniziale. Ti accompagno nel processo di implementazione e ti supporto nei momenti di dubbio o cambiamento, garantendo che tu mantenga la rotta verso i tuoi obiettivi.",
      },
    ],
    benefits: [
      "Chiarezza sui propri valori e priorità",
      "Esplorazione sistematica delle opzioni disponibili",
      "Sviluppo di competenze decisionali",
      "Riduzione dell'ansia legata alle scelte",
      "Maggiore fiducia nelle proprie decisioni",
      "Allineamento tra scelte e valori personali",
    ],
    callToAction: "Scopri la tua direzione con l'orientamento personalizzato",
  },
  "consulenza-filosofica": {
    title: "Consulenza Filosofica",
    subtitle: "Rifletti profondamente per vivere con maggiore consapevolezza",
    description:
      "Riflessione filosofica per la vita personale e aziendale. Esploriamo valori, etica e significato attraverso il dialogo per sviluppare una maggiore consapevolezza di sé e costruire una filosofia solida per decisioni personali e prodotti commerciali.",
    backgroundColor: "bg-teal-400",
    textColor: "text-white",
    sections: [
      {
        title: "La Filosofia come Strumento di Vita",
        content:
          "La consulenza filosofica non è solo teoria accademica, ma uno strumento pratico per la vita quotidiana. Attraverso il dialogo socratico e la riflessione critica, ti aiuto a esplorare le grandi domande dell'esistenza e a sviluppare una tua personale filosofia di vita.",
      },
      {
        title: "Applicazione Pratica",
        content:
          "Applico principi filosofici a situazioni concrete, sia personali che professionali. Questo approccio ti permette di affrontare dilemmi etici, chiarire i tuoi valori e prendere decisioni più consapevoli e autentiche.",
      },
      {
        title: "Dialogo e Riflessione",
        content:
          "La consulenza filosofica si basa sul dialogo maieutico, dove attraverso domande mirate e riflessioni condivise, arriviamo insieme a nuove comprensioni e prospettive. È un processo collaborativo di scoperta e crescita.",
      },
    ],
    benefits: [
      "Sviluppo del pensiero critico",
      "Maggiore consapevolezza etica",
      "Chiarezza sui propri valori fondamentali",
      "Capacità di affrontare questioni esistenziali",
      "Miglioramento delle competenze argomentative",
      "Crescita della saggezza pratica",
    ],
    callToAction: "Inizia il tuo percorso di consulenza filosofica",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = servicesData[params.slug];

  if (!service) {
    return {
      title: "Servizio non trovato - FORMARTI | Martina Vecchio",
    };
  }

  return {
    title: `${service.title} - FORMARTI | Martina Vecchio`,
    description: service.description,
    openGraph: {
      title: `${service.title} - FORMARTI | Martina Vecchio`,
      description: service.description,
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ServiceDetailHero
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          backgroundColor={service.backgroundColor}
          textColor={service.textColor}
        />
        <ServiceDetailContent
          sections={service.sections}
          benefits={service.benefits}
          callToAction={service.callToAction}
          backgroundColor={service.backgroundColor}
        />
      </main>
      <Footer />
    </>
  );
}
