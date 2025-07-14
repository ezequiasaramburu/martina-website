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
      "<span class='font-bold'> Ti sei mai chiesto chi potresti diventare, se imparassi davvero ad ascoltarti? </span> <br /> <span class='font-bold'>Se smettessi di chiederti chi dovresti essere, e iniziassi a chiederti chi sei davvero? <br />Cosa cambierebbe nella tua vita se smettessi di avere paura del tuo potenziale?</span>",
    backgroundColor: "bg-blue-400",
    textColor: "text-white",
    sections: [
      {
        title: "Cos'è la Crescita Personale?",
        content:
          "È un percorso educativo e relazionale che favorisce la consapevolezza di sé, il riconoscimento delle proprie risorse e l’attivazione del potenziale individuale. Significa imparare ad ascoltarsi, superare blocchi interiori, acquisire competenze trasversali e orientarsi in modo più consapevole nelle scelte di vita. Non è un traguardo da raggiungere, ma un processo continuo che coinvolge la persona nella sua interezza: emozioni, pensieri, relazioni, valori e desideri.",
      },
      {
        title: "Come Funziona?",
        content:
          "Attraverso sessioni one-to-one personalizzate, utilizzo strumenti di coaching come il goal setting, l’analisi dei limiting beliefs e tecniche di empowerment personale. Lavoriamo insieme per definire obiettivi chiari, attivare le tue risorse interiori e sviluppare un action plan concreto e sostenibile. Ogni percorso è costruito su misura, con strumenti pratici per facilitare il cambiamento e la crescita, sia personale che professionale.",
      },
      {
        title: "Percorso Personalizzato",
        content:
          "Ogni persona ha una storia diversa, e tu hai la tua. Partiamo da ciò che sei oggi — le tue esperienze, i tuoi obiettivi, le tue sfide — per costruire insieme una strada su misura, concreta e flessibile. Il cammino sarà graduale, rispettoso dei tuoi tempi e delle tue risorse, pensato per accompagnarti passo dopo passo verso la versione di te che desideri diventare.",
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
      "Se guidi un’azienda, sai quanto contano le competenze tecniche — ma sai anche che da sole non bastano. La comunicazione interna, la gestione dei conflitti, la leadership, la capacità di affrontare il cambiamento: sono tutte competenze “umane” che fanno davvero la differenza nei risultati. La mia proposta formativa si rivolge a imprese che credono nel valore delle persone. Progetto percorsi su misura, basati su obiettivi chiari e condivisi, per sviluppare le soft skills del team e creare un ambiente di lavoro più collaborativo, motivato e consapevole.",
    backgroundColor: "bg-green-400",
    textColor: "text-white",
    sections: [
      {
        title: "Formazione per il Successo Aziendale",
        content:
          "Comunicazione efficace e ascolto attivo. Leadership collaborativa e gentile. Team building e coesione tra reparti. Intelligenza emotiva e gestione dei conflitti. Collaborazione tra generazioni (Millennial & Gen Z) Benessere organizzativo e prevenzione del burnout",
      },
      {
        title: "Approccio Integrato",
        content:
          "Il percorso formativo si sviluppa attraverso un approccio blended che combina momenti in presenza, attività digitali e di mindfulness, integrando sessioni di dialogo e riflessione guidata. Attraverso lezioni interattive, discussioni facilitanti e learning modules online, favorisco un coinvolgimento attivo e continuo dei partecipanti. Questo metodo stimola il pensiero critico, la condivisione di esperienze e il collaborative learning, permettendo di tradurre la riflessione in competenze concrete e comportamenti efficaci, applicabili nel contesto lavorativo.",
      },
      {
        title: "Risultati Misurabili",
        content:
          "Ogni programma è progettato con obiettivi chiari e KPI specifici. Monitorando costantemente i progressi, è possibile restituire l'efficacia della formazione attraverso report dettagliati, utili per comprendere concretamente i risultati raggiunti e valutare l’impatto della formazione sulla tua organizzazione.",
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
      "Ogni scelta educativa e professionale nasce dalla conoscenza di sé",
    description:
      "Se ti trovi in un momento di transizione o devi prendere una decisione importante sul tuo futuro, posso accompagnarti con un percorso strutturato di orientamento. Attraverso strumenti pedagogici, colloqui individuali e attività esplorative, ti aiuto a fare chiarezza sui tuoi interessi, valori e obiettivi, mettendo a fuoco le possibilità concrete a tua disposizione. Che si tratti di scegliere un percorso formativo, un cambio professionale o semplicemente ritrovare direzione, costruiremo insieme una visione coerente con chi sei e con ciò che vuoi diventare.",
    backgroundColor: "bg-purple-500",
    textColor: "text-white",
    sections: [
      {
        title: "Orientamento Professionale e Personale",
        content:
          "L’orientamento personale riguarda chi sono, cosa voglio e come voglio vivere. Le domande che emergono spesso sono: Chi sono oggi, oltre i ruoli che ricopro? Cosa mi fa sentire in equilibrio? Perché mi sento svuotato, non motivato o sempre in affanno? L’orientamento professionale si concentra su cosa fare, dove andare e come crescere nel lavoro. Le domande più frequenti sono: Che direzione voglio dare alla mia carriera? Sto facendo un lavoro che mi rappresenta? È il momento di cambiare? Ma verso cosa?",
      },
      {
        title: "Metodologia Strutturata",
        content:
          'Bilancio delle competenze Una metodologia strutturata molto usata nei contesti di orientamento professionale e programmi GOL. Analisi del percorso personale e professionale. Identificazione di competenze tecniche e trasversali. Progetto professionale e piano d’azione. Life Design Approach: Metodo sviluppato da psicologi e pedagogisti (es. Savickas, Guichard) che aiuta le persone a "progettare" la propria vita. Esplorazione del sé (valori, interessi, identità). Sperimentazione di micro-scelte e percorsi possibili. Costruzione di scenari futuri realistici e desiderabili',
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
