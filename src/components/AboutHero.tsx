"use client";

import Image from "next/image";

interface AboutHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

const AboutHero = ({ title, subtitle, imageSrc, imageAlt }: AboutHeroProps) => {
  return (
    <section className="min-h-[65vh] relative">
      {/* Mobile/Tablet Layout - Stacked */}
      <div className="block xl:hidden">
        <div className="flex flex-col">
          {/* Image on top */}
          <div className="relative w-full h-[40vh] md:h-[50vh]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Text below */}
          <div className="bg-dark-900 p-8 md:p-12 flex items-center">
            <div className="max-w-2xl text-left">
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Overlapping */}
      <div className="hidden xl:flex items-center justify-center px-4 lg:px-8 min-h-[65vh]">
        <div className="relative w-full max-w-6xl flex items-center justify-center ml-16 lg:ml-32">
          {/* Image positioned to the right */}
          <div className="relative w-full lg:w-3/5 h-[65vh] lg:h-[70vh] ml-auto lg:ml-32 opacity-70">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="60vw"
              priority
            />
          </div>

          {/* Overlapping text box */}
          <div className="absolute left-4 lg:left-12 top-1/2 transform -translate-y-1/2 bg-dark-900 p-8 lg:p-10 max-w-sm lg:max-w-md shadow-2xl">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
