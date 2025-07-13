"use client";

import Link from "next/link";

interface DetailSection {
  title: string;
  items: string[];
}

interface CoachingModalityProps {
  title: string;
  subtitle: string;
  accentColor: string;
  sections: DetailSection[];
}

const CoachingModalityCard = ({
  title,
  subtitle,
  accentColor,
  sections,
}: CoachingModalityProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className={`${accentColor} p-6 text-white`}>
        <div className="flex items-center mb-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
            <p className="text-lg font-medium opacity-90">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 grid grid-rows-3 gap-6 flex-1">
        {sections.map((section, index) => (
          <div key={index} className="flex-1 space-y-3">
            <h4 className="text-base font-medium text-gray-900 border-b border-gray-200 pb-2">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1 text-sm">•</span>
                  <span className="text-gray-700 font-light leading-relaxed text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const CoachingModalities = () => {
  const modalities: CoachingModalityProps[] = [
    {
      title: "Consulenza 1:1",
      subtitle: "Coaching individuale personalizzato",
      accentColor: "bg-blue-500",
      sections: [
        {
          title: "Ideale per:",
          items: [
            "Chi vuole un percorso personalizzato di crescita (professionale o personale)",
            "Manager, freelance, professionisti in transizione o in fase di cambiamento",
            "Persone che hanno bisogno di lavorare su una difficoltà specifica (es. gestione dello stress, disorientamento, autostima)",
          ],
        },
        {
          title: "Come si struttura:",
          items: [
            "Sessioni settimanali o quindicinali (durata 60–90 minuti)",
            "Obiettivi chiari e concordati insieme",
            "Utilizzo di tecniche di coaching, ascolto attivo, feedback mirati, strumenti pratici (es. journaling, esercizi tra le sessioni)",
            "Percorso flessibile, modulabile su misura",
          ],
        },
        {
          title: "Vantaggi:",
          items: [
            "Altissima personalizzazione",
            "Maggiore profondità e introspezione",
            "Possibilità di affrontare anche blocchi emotivi o relazionali",
          ],
        },
      ],
    },
    {
      title: "Formazione in aula",
      subtitle: "Corsi strutturati su soft skills",
      accentColor: "bg-green-500",
      sections: [
        {
          title: "Ideale per:",
          items: [
            "Team aziendali, gruppi di lavoro o professionisti che vogliono migliorare una competenza specifica (es. comunicazione, gestione dei conflitti, intelligenza emotiva)",
            "Contesti in cui è importante uniformare il linguaggio e creare una base comune di conoscenza",
          ],
        },
        {
          title: "Come si struttura:",
          items: [
            "Lezioni in presenza (o e-learning) con parti teoriche ed esercitazioni pratiche",
            "Durata: da mezza giornata a 2–3 giornate",
            "Materiali di supporto (slide, workbook, test autovalutativi)",
            "Focus sulla valutazione dei bisogni formativi",
          ],
        },
        {
          title: "Vantaggi:",
          items: [
            "Stimola l'apprendimento collettivo",
            "Favorisce il confronto tra pari, il feedback sulle prestazioni e risparmio di tempo e costi",
            "Creazione di senso di appartenenza e di gruppo",
          ],
        },
      ],
    },
    {
      title: "Workshop esperienziali",
      subtitle: "Laboratori pratici coinvolgenti",
      accentColor: "bg-purple-500",
      sections: [
        {
          title: "Ideale per:",
          items: [
            "Sviluppare una cultura di responsabilità condivisa all'interno di un team",
            "Favorire il confronto e la riflessione sul processo decisionale e dilemmi etici aziendali",
            "Situazioni in cui è importante 'fare esperienza' diretta (es. role playing, mindfulness, esercizi corporei sulla gestione dell'ansia, ecc.)",
          ],
        },
        {
          title: "Come si struttura:",
          items: [
            "Attività pratiche, esercitazioni in gruppo e simulazioni",
            "Facilitazione con materiali didattici, brainstorming, attività all'aperto",
            "Spazi per la riflessione personale e la condivisione",
            "Durata: 3 ore – 1 giornata",
          ],
        },
        {
          title: "Vantaggi:",
          items: [
            "Apprendimento esperienziale (learning by doing)",
            "Forte coinvolgimento emotivo e motivazionale",
            "Alto impatto trasformativo e di motivazione",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <section className="bg-gray-50 pt-20 pb-10 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 text-center mb-16 leading-tight">
            Modalità di Formazione
          </h2>

          {/* Modalities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {modalities.map((modality, index) => (
              <CoachingModalityCard key={index} {...modality} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/contact"
            className={`inline-block px-8 bg-dark-900 py-4 font-semibold text-lg`}
            style={{ color: "white" }}
          >
            Contattami Ora
          </Link>
        </div>
      </section>
    </>
  );
};

export default CoachingModalities;
