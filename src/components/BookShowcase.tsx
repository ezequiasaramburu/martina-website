"use client";

import Image from "next/image";

interface BookShowcaseProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
}

const BookShowcase = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink,
}: BookShowcaseProps) => {
  return (
    <section className="bg-dark-800 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Book Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 320px, 384px"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8">
              {description}
            </p>

            {/* Call to Action Button */}
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-teal text-white px-8 py-4 font-medium text-lg cta-button cta-accent"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;
