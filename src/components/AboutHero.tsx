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
    <section className="min-h-[65vh] flex flex-col lg:flex-row">
      {/* Left side - Text content */}
      <div className="w-full lg:w-1/2 bg-dark-900 flex items-center justify-center px-8 lg:px-16 py-12 lg:py-0">
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full lg:w-1/2 relative h-[35vh] lg:h-auto lg:pt-20 bg-dark-800 lg:bg-transparent">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
};

export default AboutHero;
