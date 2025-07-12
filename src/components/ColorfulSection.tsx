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
    id: "self-esteem",
    title: "Self-Esteem",
    description:
      "Ever feel the pressure to love yourself, but don't know where to start? Self-love requires practise. Let's make time for you, change those negative thought patterns and pursue your passions.",
    backgroundColor: "bg-blue-400",
    textColor: "text-white",
    type: "text",
  },
  {
    id: "self-esteem-image",
    title: "",
    backgroundColor: "bg-pink-400",
    textColor: "text-white",
    image: "/images/book-journal.jpg", // You'll need to add this image
    imageAlt: 'Blue journal with "MY SECRET PLAN TO RULE THE WORLD" text',
    type: "image",
  },
  {
    id: "minimalism",
    title: "Minimalism",
    description:
      "Whether it's digital or physical decluttering you're after, we can work together to create more boundaries, balance and simplicity. Let's stop scrolling > start enjoying!",
    backgroundColor: "bg-green-400",
    textColor: "text-white",
    type: "text",
  },
  {
    id: "minimalism-image",
    title: "",
    backgroundColor: "bg-pink-500",
    textColor: "text-white",
    image: "/images/yellow-phone.jpg", // You'll need to add this image
    imageAlt: "Hands holding a yellow phone with blue nails",
    type: "image",
  },
  {
    id: "eating-image",
    title: "",
    backgroundColor: "bg-orange-500",
    textColor: "text-white",
    image: "/images/cherries-hand.jpg", // You'll need to add this image
    imageAlt: "Hand holding cherries with red mesh bag",
    type: "image",
  },
  {
    id: "eating",
    title: "Eating",
    description:
      "Ditch the diets, emotional eating and the punishing work outs at the gym. We'll talk about where you picked up negative beliefs, find peace with food and drop the shame.",
    backgroundColor: "bg-teal-400",
    textColor: "text-white",
    type: "text",
  },
  {
    id: "style",
    title: "Style",
    description:
      "Too many clothes and not enough to wear? What you wear can change how you feel, so we'll discover your personal style and create a capsule wardrobe. Let your clothes work for you.",
    backgroundColor: "bg-purple-500",
    textColor: "text-white",
    type: "text",
  },
  {
    id: "style-image",
    title: "",
    backgroundColor: "bg-yellow-500",
    textColor: "text-white",
    image: "/images/yellow-hoodie.jpg", // You'll need to add this image
    imageAlt: "Person wearing a yellow hoodie",
    type: "image",
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
      <p className="text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-md">
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
  return (
    <section className="colorful-section w-full">
      <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 w-full">
        {sectionData.map((section) => (
          <div key={section.id} className="relative w-full aspect-square">
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
