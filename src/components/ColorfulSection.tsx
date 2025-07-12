"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

interface SectionData {
  id: string;
  title: string;
  description?: string;
  backgroundColor: string;
  textColor: string;
  image?: string;
  imageAlt?: string;
  type: "text" | "image";
}

const sectionData: SectionData[] = [
  {
    id: "self-esteem-image",
    title: "",
    backgroundColor: "bg-pink-400",
    textColor: "text-white",
    image: "/images/1.png",
    imageAlt: 'Blue journal with "MY SECRET PLAN TO RULE THE WORLD" text',
    type: "image",
  },
  {
    id: "self-esteem",
    title: "Crescita Personale",
    description:
      "La crescita personale è il processo di cambiamento e sviluppo che ci porta a diventare la persona che vogliamo essere. Questo processo può essere guidato da un coach personale, che ci aiuta a superare i nostri limiti e a raggiungere i nostri obiettivi.",
    backgroundColor: "bg-blue-400",
    textColor: "text-white",
    type: "text",
  },
  {
    id: "minimalism-image",
    title: "",
    backgroundColor: "bg-pink-500",
    textColor: "text-white",
    image: "/images/2.png",
    imageAlt: "Hands holding a yellow phone with blue nails",
    type: "image",
  },
  {
    id: "minimalism",
    title: "Formazione Aziendale",
    description:
      "Sviluppo delle competenze trasversali e soft skills per team e aziende. Miglioriamo la comunicazione, la leadership e la collaborazione attraverso percorsi formativi personalizzati che valorizzano il potenziale umano e professionale.",
    backgroundColor: "bg-green-400",
    textColor: "text-white",
    type: "text",
  },
  {
    id: "eating-image",
    title: "",
    backgroundColor: "bg-orange-500",
    textColor: "text-white",
    image: "/images/4.png",
    imageAlt: "Hand holding cherries with red mesh bag",
    type: "image",
  },
  {
    id: "eating",
    title: "Orientamento alla Scelta",
    description:
      "Supporto nella definizione del percorso professionale e personale. Ti aiuto a esplorare le tue passioni, valutare le opzioni e prendere decisioni consapevoli per costruire un futuro allineato ai tuoi valori e obiettivi.",
    backgroundColor: "bg-purple-500",
    textColor: "text-white",
    type: "text",
  },
  {
    id: "style-image",
    title: "",
    backgroundColor: "bg-yellow-500",
    textColor: "text-white",
    image: "/images/3.png",
    imageAlt: "Person wearing a yellow hoodie",
    type: "image",
  },
  {
    id: "style",
    title: "Consulenza Filosofica",
    description:
      "Riflessione filosofica per la vita personale e aziendale. Esploriamo valori, etica e significato attraverso il dialogo per sviluppare una maggiore consapevolezza di sé e costruire una filosofia solida per decisioni personali e prodoti comerciali.",
    backgroundColor: "bg-teal-400",
    textColor: "text-white",
    type: "text",
  },
];

const TextSquare = ({ section }: { section: SectionData }) => (
  <div
    className={`${section.backgroundColor} ${section.textColor} p-8 md:p-12 flex flex-col justify-center items-center text-center h-full`}
  >
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4">
      {section.title}
    </h2>
    {section.description && (
      <p className="text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-md">
        {section.description}
      </p>
    )}
  </div>
);

const ImageSquare = ({ section }: { section: SectionData }) => (
  <div
    className={`${section.backgroundColor} relative h-full flex items-center justify-center overflow-hidden`}
  >
    {section.image && (
      <Image
        src={section.image}
        alt={section.imageAlt || ""}
        fill
        className="object-cover"
      />
    )}
  </div>
);

const ColorfulSection = () => {
  const getGridPosition = (index: number, sectionId: string) => {
    // Grid positioning for desktop/tablet (md+)
    const positions = {
      "self-esteem-image": "md:row-start-1 md:col-start-1",
      "self-esteem": "md:row-start-1 md:col-start-2",
      "minimalism-image": "md:row-start-2 md:col-start-2",
      minimalism: "md:row-start-2 md:col-start-1",
      "eating-image": "md:row-start-3 md:col-start-1",
      eating: "md:row-start-3 md:col-start-2",
      "style-image": "md:row-start-4 md:col-start-2",
      style: "md:row-start-4 md:col-start-1",
    };
    return positions[sectionId as keyof typeof positions] || "";
  };

  return (
    <section className="colorful-section w-full">
      <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 w-full">
        {sectionData.map((section, index) => (
          <div
            key={section.id}
            className={`relative w-full aspect-square ${getGridPosition(
              index,
              section.id
            )}`}
          >
            {section.type === "text" ? (
              <TextSquare section={section} />
            ) : (
              <ImageSquare section={section} />
            )}
          </div>
        ))}
      </div>

      {/* Back to top button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default ColorfulSection;
