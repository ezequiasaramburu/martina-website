"use client";

import Link from "next/link";
import { Layers, Award } from "lucide-react";

interface DetailSection {
  title: string;
  items: {
    text: string;
    icon: React.ComponentType<{ className?: string }>;
    subItems?: string[];
  }[];
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

      <div
        className="p-6 grid gap-6 flex-1"
        style={{ gridTemplateRows: "min-content min-content min-content" }}
      >
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
                    <div className="text-gray-700 font-light leading-relaxed text-md">
                      <span>{item.text}</span>
                      {item.subItems && (
                        <ul className="mt-2 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex items-start">
                              <span className={`${iconColor} mr-2 mt-0.5`}>
                                →
                              </span>
                              <span>{subItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
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
          title: "Come funziona il percorso individuale:",
          items: [
            {
              text: "Incontri regolari",
              subItems: [
                "1 sessione ogni 1 o 2 settimane",
                "Durata: 60–90 minuti",
              ],
              icon: Layers,
            },
            {
              text: "Obiettivi condivisi",
              subItems: [
                "Li definiamo insieme, in base ai tuoi bisogni",
                "Monitoriamo i progressi lungo il percorso",
              ],
              icon: Layers,
            },
            {
              text: "Strumenti concreti",
              subItems: [
                "Coaching, ascolto attivo, feedback",
                "Esercizi tra le sessioni: journaling, pratiche di consapevolezza, ecc.",
                "Differenziazione dalla seduta terapeutica psicologica. Percorso di supporto per migliorare il benessere quotidiano.",
              ],
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
      title: "Formazione",
      subtitle: "Corsi strutturati su soft skills",
      accentColor: "bg-green-400",
      sections: [
        {
          title: "Come si eroga la formazione:",
          items: [
            {
              text: "Lezioni in presenza o in e-learning",
              subItems: ["Durata modulabile di sessioni in ore"],
              icon: Layers,
            },
            {
              text: "Materiali inclusi",
              subItems: [
                "Slide, workbook operativi, test di autovalutazione e strumenti utili per integrare e consolidare i contenuti del corso.",
              ],
              icon: Layers,
            },
            {
              text: "Analisi dei bisogni",
              subItems: [
                "Ogni percorso parte da una valutazione preliminare dei bisogni formativi, per costruire contenuti rilevanti e personalizzati per il gruppo.",
              ],
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
          title: "Come si strutturano i workshop esperienziali:",
          items: [
            {
              text: "Attività pratiche e dinamiche di gruppo",
              subItems: [
                "Esercitazioni, simulazioni e role playing per imparare facendo",
                "Coinvolgimento attivo di tutti i partecipanti",
              ],
              icon: Layers,
            },
            {
              text: "Facilitazione interattiva",
              subItems: [
                "Uso di materiali didattici, brainstorming e attività all’aperto",
                "Metodi esperienziali per stimolare creatività e collaborazione",
              ],
              icon: Layers,
            },
            {
              text: " Durata modulabile",
              subItems: [
                "Workshop da 3 ore fino a 1 giornata intera",
                "Progettati per adattarsi agli obiettivi e al contesto del gruppo",
              ],
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
