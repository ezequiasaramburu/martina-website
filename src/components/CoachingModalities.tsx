"use client";

import Link from "next/link";
import { CheckCircle, Layers, Award } from "lucide-react";

interface DetailSection {
  title: string;
  items: { text: string; icon: React.ComponentType<{ className?: string }> }[];
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
  const colorMap: { [key: string]: string } = {
    "bg-blue-500": "text-blue-500",
    "bg-green-400": "text-green-400",
    "bg-pink-500": "text-pink-500",
  };

  const iconColor = colorMap[accentColor] || "text-gray-500";

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
      <div className="bg-dark-900 p-6 text-white">
        <div className="flex items-center mb-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-medium">{title}</h3>
            <p className="text-lg font-light">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-rows-3 gap-6 flex-1">
        {sections.map((section, index) => (
          <div key={index} className="flex-1 space-y-3">
            <h4 className="text-base font-medium text-gray-900 border-b border-gray-200 pb-2">
              {section.title}
            </h4>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => {
                const IconComponent = item.icon;
                return (
                  <li key={itemIndex} className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-0.5">
                      <IconComponent className={`h-5 w-5 ${iconColor}`} />
                    </div>
                    <span className="text-gray-700 font-light leading-relaxed text-sm">
                      {item.text}
                    </span>
                  </li>
                );
              })}
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
            {
              text: "Chi vuole un percorso personalizzato di crescita (professionale o personale)",
              icon: CheckCircle,
            },
            {
              text: "Manager, freelance, professionisti in transizione o in fase di cambiamento",
              icon: CheckCircle,
            },
            {
              text: "Persone che hanno bisogno di lavorare su una difficoltà specifica (es. gestione dello stress, disorientamento, autostima)",
              icon: CheckCircle,
            },
          ],
        },
        {
          title: "Come si struttura:",
          items: [
            {
              text: "Sessioni settimanali o quindicinali (durata 60–90 minuti)",
              icon: Layers,
            },
            {
              text: "Obiettivi chiari e concordati insieme",
              icon: Layers,
            },
            {
              text: "Utilizzo di tecniche di coaching, ascolto attivo, feedback mirati, strumenti pratici (es. journaling, esercizi tra le sessioni)",
              icon: Layers,
            },
            {
              text: "Percorso flessibile, modulabile su misura",
              icon: Layers,
            },
          ],
        },
        {
          title: "Vantaggi:",
          items: [
            {
              text: "Altissima personalizzazione",
              icon: Award,
            },
            {
              text: "Maggiore profondità e introspezione",
              icon: Award,
            },
            {
              text: "Possibilità di affrontare anche blocchi emotivi o relazionali",
              icon: Award,
            },
          ],
        },
      ],
    },
    {
      title: "Formazione in aula",
      subtitle: "Corsi strutturati su soft skills",
      accentColor: "bg-green-400",
      sections: [
        {
          title: "Ideale per:",
          items: [
            {
              text: "Team aziendali, gruppi di lavoro o professionisti che vogliono migliorare una competenza specifica (es. comunicazione, gestione dei conflitti, intelligenza emotiva)",
              icon: CheckCircle,
            },
            {
              text: "Contesti in cui è importante uniformare il linguaggio e creare una base comune di conoscenza",
              icon: CheckCircle,
            },
          ],
        },
        {
          title: "Come si struttura:",
          items: [
            {
              text: "Lezioni in presenza (o e-learning) con parti teoriche ed esercitazioni pratiche",
              icon: Layers,
            },
            {
              text: "Durata: da mezza giornata a 2–3 giornate",
              icon: Layers,
            },
            {
              text: "Materiali di supporto (slide, workbook, test autovalutativi)",
              icon: Layers,
            },
            {
              text: "Focus sulla valutazione dei bisogni formativi",
              icon: Layers,
            },
          ],
        },
        {
          title: "Vantaggi:",
          items: [
            {
              text: "Stimola l'apprendimento collettivo",
              icon: Award,
            },
            {
              text: "Favorisce il confronto tra pari, il feedback sulle prestazioni e risparmio di tempo e costi",
              icon: Award,
            },
            {
              text: "Creazione di senso di appartenenza e di gruppo",
              icon: Award,
            },
          ],
        },
      ],
    },
    {
      title: "Workshop esperienziali",
      subtitle: "Laboratori pratici coinvolgenti",
      accentColor: "bg-pink-500",
      sections: [
        {
          title: "Ideale per:",
          items: [
            {
              text: "Sviluppare una cultura di responsabilità condivisa all'interno di un team",
              icon: CheckCircle,
            },
            {
              text: "Favorire il confronto e la riflessione sul processo decisionale e dilemmi etici aziendali",
              icon: CheckCircle,
            },
            {
              text: "Situazioni in cui è importante 'fare esperienza' diretta (es. role playing, mindfulness, esercizi corporei sulla gestione dell'ansia, ecc.)",
              icon: CheckCircle,
            },
          ],
        },
        {
          title: "Come si struttura:",
          items: [
            {
              text: "Attività pratiche, esercitazioni in gruppo e simulazioni",
              icon: Layers,
            },
            {
              text: "Facilitazione con materiali didattici, brainstorming, attività all'aperto",
              icon: Layers,
            },
            {
              text: "Spazi per la riflessione personale e la condivisione",
              icon: Layers,
            },
            {
              text: "Durata: 3 ore – 1 giornata",
              icon: Layers,
            },
          ],
        },
        {
          title: "Vantaggi:",
          items: [
            {
              text: "Apprendimento esperienziale (learning by doing)",
              icon: Award,
            },
            {
              text: "Forte coinvolgimento emotivo e motivazionale",
              icon: Award,
            },
            {
              text: "Alto impatto trasformativo e di motivazione",
              icon: Award,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <section className="bg-gray-50 pt-20 pb-10 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 text-center mb-16 leading-tight">
            Modalità di Formazione
          </h2>

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
