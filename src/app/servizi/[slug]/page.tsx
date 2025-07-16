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
    subtitle?: string;
    content: string | string[];
  }[];
  benefits: string[];
  callToAction: string;
}

const servicesData: Record<string, ServiceData> = {
  "crescita-personale": {
    title: "Crescita Personale",
    subtitle: "Scopri il tuo potenziale e diventa la persona che vuoi essere",
    description:
      "<span class='font-bold'> Ti sei mai chiesto chi potresti diventare, se imparassi davvero ad ascoltarti? </span> <br /> <span class='font-bold'>Se smettessi di chiederti chi dovresti essere, e iniziassi a chiederti chi sei davvero? <br />Cosa cambierebbe nella tua vita se smettessi di avere paura del tuo potenziale?</span>",
    backgroundColor: "bg-blue-400",
    textColor: "text-white",
    sections: [
      {
        title: "Cos'è?",
        content:
          "È un percorso educativo e relazionale che favorisce la consapevolezza di sé, il riconoscimento delle proprie risorse e l'attivazione del potenziale individuale. Significa imparare ad ascoltarsi, superare blocchi interiori, acquisire competenze trasversali e orientarsi in modo più consapevole nelle scelte di vita. Non è un traguardo da raggiungere, ma un processo continuo che coinvolge la persona nella sua interezza: emozioni, pensieri, relazioni, valori e desideri.",
      },
      {
        title: "Come Funziona",
        content: [
          "Incontri regolari<br/>1 sessione ogni 1-2 settimane <br/> Durata: 1h",
          "Obiettivi personalizzati<br/>Definiti insieme in base ai tuoi bisogni<br/>Monitoraggio costante dei progressi",
          "Strumenti pratici<br/>Coaching, ascolto attivo, feedback mirato<br/>Esercizi tra le sessioni: journaling, mindfulness, ecc.<br/>Non è terapia · Focus sul benessere quotidiano",
        ],
      },
      {
        title: "Percorso Personalizzato",
        content:
          "Ogni persona ha una storia diversa, e tu hai la tua. Partiamo da ciò che sei oggi, le tue esperienze, i tuoi obiettivi, le tue sfide per costruire insieme una strada su misura, concreta e flessibile. Il cammino sarà graduale, rispettoso dei tuoi tempi e delle tue risorse, pensato per accompagnarti passo dopo passo verso la versione di te che desideri diventare.",
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
    subtitle: "Persone soddisfatte, team più forti, risultati più solidi",
    description:
      "<span>Se guidi un’azienda, sai quanto contano le competenze tecniche — ma sai anche che da sola non bastano.</span> <br /> <span class='font-bold'>La comunicazione interna, la gestione dei conflitti, la leadership, la capacità di affrontare il cambiamento: sono tutte competenze “umane” che fanno davvero la differenza nei risultati. </span> <br /> <span>La mia proposta formativa si rivolge a imprese che credono nel valore delle persone. <br /> Progetto percorsi su misura, basati su obiettivi chiari e condivisi, per sviluppare le soft skills del team e creare un ambiente di lavoro più collaborativo, motivato e consapevole.</span>",
    backgroundColor: "bg-green-400",
    textColor: "text-white",
    sections: [
      {
        title: "Formazione per il Successo Aziendale",
        subtitle: "Progetto percorsi formativi su:",
        content: [
          "Comunicazione efficace e ascolto attivo",
          "Leadership collaborativa e gentile",
          "Team building e coesione tra reparti",
          "Intelligenza emotiva e gestione dei conflitti",
          "Collaborazione tra generazioni (Millennial & Gen Z)",
          "Benessere organizzativo e prevenzione del burnout",
        ],
      },
      {
        title: "Come Funziona",
        content: [
          "Corsi in presenza o e-learning<br/>Durata modulabile di sessioni in ore",
          "Materiali inclusi<br/>Slide, workbook operativi, test di autovalutazione e strumenti utili per integrare e consolidare i contenuti del corso",
          "Analisi dei bisogni<br/>Ogni percorso parte da una valutazione preliminare dei bisogni formativi, per costruire contenuti rilevanti e personalizzati per il gruppo",
        ],
      },
      {
        title: "Risultati Misurabili",
        content:
          "Ogni programma è progettato con obiettivi chiari e KPI specifici. Monitorando costantemente i progressi, è possibile restituire l'efficacia della formazione attraverso report dettagliati, utili per comprendere concretamente i risultati raggiunti e valutare l'impatto della formazione sulla tua organizzazione.",
      },
    ],
    benefits: [
      "Comunicazione interna potenziata per favorire il dialogo tra Millennials e Gen Z",
      "Leadership situazionale e management inclusivo",
      "Team building intergenerazionale per rafforzare la coesione del gruppo",
      "Strategie di gestione dei conflitti",
      "Pratiche di mindfulness per aumentare consapevolezza e concentrazione, riducendo lo stress",
      "Cultura organizzativa positiva e e orientata alla performance sostenibile",
    ],
    callToAction: "Trasforma il tuo team con la formazione aziendale",
  },
  "orientamento-scelta": {
    title: "Orientamento alla Scelta",
    subtitle:
      "<span class='font-bold'>Ogni scelta personale e professionale nasce dalla conoscenza di sé</span>",
    description:
      "Se ti trovi in un momento di transizione o devi prendere una decisione importante sul tuo futuro, posso accompagnarti con un percorso strutturato di orientamento. Attraverso strumenti pedagogici, colloqui individuali e attività esplorative, ti aiuto a fare chiarezza sui tuoi interessi, valori e obiettivi, mettendo a fuoco le possibilità concrete a tua disposizione.",
    backgroundColor: "bg-purple-500",
    textColor: "text-white",
    sections: [
      {
        title: "Orientamento Professionale e Personale",
        content: [
          "Chi sono oggi, oltre i ruoli che ricopro?",
          "Cosa mi fa sentire in equilibrio?",
          "Perché mi sento svuotato, non motivato o sempre in affanno?",
          "Che direzione voglio dare alla mia carriera?",
          "Sto facendo un lavoro che mi rappresenta?",
          "È il momento di cambiare? Ma verso cosa?",
        ],
      },
      {
        title: "Metodologia Strutturata",
        content: [
          "Metodo strutturato utilizzato anche nei programmi GOL: analisi del percorso personale e lavorativo e mappatura di competenze tecniche e soft skills",
          "Approccio pedagogico e psicologico (Savickas, Guichard) per progettare con consapevolezza la propria vita",
          "Costruzione di scenari futuri realistici e desiderabili",
        ],
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
    subtitle:
      "Non è terapia, né psicologia: è un percorso di chiarificazione e pensiero critico",
    description:
      "Riflessione filosofica per la vita personale e aziendale. Esploriamo valori, etica e significato attraverso il dialogo per sviluppare una maggiore consapevolezza di sé e costruire una filosofia solida per decision making e prodotti commerciali.",
    backgroundColor: "bg-teal-400",
    textColor: "text-white",
    sections: [
      {
        title: "La Filosofia come Strumento Strategico",
        subtitle:
          "Con strumenti filosofici, domande mirate e spazi di riflessione, esploriamo insieme:",
        content: [
          "I valori che vuoi esprimere nelle tue scelte",
          "I dilemmi etici e decisionali che ti bloccano o guidano il tuo progetto",
          "Il significato che attribuisci a successo, cambiamento, tempo e lavoro",
        ],
      },
      {
        title: "Come si strutturano i workshop esperienziali",
        content: [
          "Attività pratiche e dinamiche di gruppo<br/>Esercitazioni, simulazioni e role playing per imparare facendo<br/>Coinvolgimento attivo di tutti i partecipanti",
          "Facilitazione interattiva<br/>Uso di materiali didattici, brainstorming e attività all'aperto<br/>Metodi esperienziali per stimolare creatività e collaborazione",
        ],
      },
      {
        title: "Lasciati ispirare da",
        content: [
          "<span class='font-bold'>Google</span>: integra filosofia, mindfulness e leadership consapevole nei suoi programmi. Ha coinvolto filosofi ed esperti di etica su temi come AI, lavoro e significato personale.",
          "<span class='font-bold'>SAP & L'Oréal</span>: lavorano con filosofi e consulenti etici per affrontare dilemmi decisionali e sviluppare una governance più riflessiva e sostenibile.",
          "<span class='font-bold'>IKEA</span>: forma i leader attraverso riflessioni su valori e senso del lavoro, per allineare etica dichiarata e pratiche aziendali.",
        ],
      },
    ],
    benefits: [
      "Sviluppo del pensiero critico",
      "Maggiore consapevolezza etica",
      "Chiarezza sui propri valori fondamentali",
      "Capacità di affrontare questioni esistenziali",
      "Chiarificazione dei dilemmi etici legati all’uso dell’AI",
      "Crescita della saggezza pratica",
    ],
    callToAction: "Inizia il tuo percorso di consulenza filosofica",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

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

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

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
          textColor={service.textColor}
        />
      </main>
      <Footer />
    </>
  );
}
