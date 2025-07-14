"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      "Dentro di te esiste un potenziale autentico e prezioso, pronto a emergere. Il mio ruolo è accompagnarti con cura e attenzione a ritrovarlo, senza giudizio né pressioni. Questo percorso non è terapia, ma un viaggio di scoperta e di consapevolezza, un tempo dedicato a te stesso per ascoltare chi sei davvero, abbracciare ciò che ti rende unico e scegliere con coraggio la direzione del tuo cammino. Insieme, passo dopo passo, libereremo le tue risorse nascoste, supereremo insieme gli ostacoli e costruiremo le competenze che ti permetteranno di vivere pienamente la vita che desideri.",
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
      "Non è solo una questione economica. Ogni team ha un potenziale unico, fatto di esperienze, talenti e generazioni diverse. La mia formazione aiuta le persone a comunicare meglio, lavorare in sinergia, assumere ruoli di leadership e affrontare le sfide con più consapevolezza. Costruisco percorsi su misura che favoriscono il dialogo tra Millennials e Gen Z, promuovendo una cultura aziendale inclusiva orientata ad un clima di benessere che permetta di rafforzare il senso di appartenenza andando oltre il compenso economico.",
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
      "La strada giusta è quella che scegli tu. Sei davanti a una scelta importante e ti senti incerto? Ti offro uno spazio sicuro e dedicato per esplorare passioni, dubbi e possibilità, sia nella vita personale che nel percorso professionale. Insieme analizzeremo i tuoi valori, le tue aspirazioni e le opportunità, per costruire un progetto di crescita che rispecchi davvero chi sei, aiutandoti a prendere decisioni autentiche.",
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
      "Pensiero critico per scelte consapevoli. Propongo un percorso di riflessione filosofica per persone e aziende, volto ad approfondire valori, etica e senso delle azioni. Supporto decisioni strategiche basate su solide fondamenta etiche, integrando temi cruciali come business ethics, responsabilità sociale e le sfide etiche dell’intelligenza artificiale. Un percorso per un equilibrio consapevole tra innovazione, valori e sostenibilità.",
    backgroundColor: "bg-teal-400",
    textColor: "text-white",
    type: "text",
  },
];

const TextSquare = ({ section }: { section: SectionData }) => {
  const getSlugFromTitle = (title: string) => {
    const slugMap: Record<string, string> = {
      "Crescita Personale": "crescita-personale",
      "Formazione Aziendale": "formazione-aziendale",
      "Orientamento alla Scelta": "orientamento-scelta",
      "Consulenza Filosofica": "consulenza-filosofica",
    };
    return slugMap[title];
  };

  const slug = getSlugFromTitle(section.title);

  return (
    <Link href={`/servizi/${slug}`} className="block h-full">
      <div
        className={`${section.backgroundColor} ${section.textColor} p-8 md:p-12 flex flex-col justify-center items-center text-center h-full hover:brightness-110 transition-all duration-300 cursor-pointer`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4">
          {section.title}
        </h2>
        {section.description && (
          <p className="text-md md:text-base lg:text-xl font-medium leading-relaxed max-w-md">
            {section.description}
          </p>
        )}
      </div>
    </Link>
  );
};

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
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={
          section.image === "/images/1.png" || section.image === "/images/2.png"
        }
      />
    )}
  </div>
);

const ColorfulSection = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(["self-esteem-image", "self-esteem"])
  );
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section-id");
            if (sectionId) {
              setVisibleSections((prev) => new Set(prev).add(sectionId));
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    // Observe all sections
    sectionRefs.current.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

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

  const getSlideDirection = (sectionId: string) => {
    const leftColumnSections = [
      "self-esteem-image",
      "minimalism",
      "eating-image",
      "style",
    ];
    const rightColumnSections = [
      "self-esteem",
      "minimalism-image",
      "eating",
      "style-image",
    ];

    if (leftColumnSections.includes(sectionId)) {
      return "slide-in-from-left";
    } else if (rightColumnSections.includes(sectionId)) {
      return "slide-in-from-right";
    }
    return "slide-in-from-left"; // fallback
  };

  const getAnimationClass = (sectionId: string) => {
    if (visibleSections.has(sectionId)) {
      return getSlideDirection(sectionId);
    }
    return "slide-hidden";
  };

  return (
    <section className="colorful-section w-full">
      <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 w-full">
        {sectionData.map((section, index) => (
          <div
            key={section.id}
            data-section-id={section.id}
            ref={(el) => {
              if (el) {
                sectionRefs.current.set(section.id, el);
                if (observerRef.current) {
                  observerRef.current.observe(el);
                }
              }
            }}
            className={`relative w-full aspect-square ${getGridPosition(
              index,
              section.id
            )} ${getAnimationClass(section.id)}`}
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
