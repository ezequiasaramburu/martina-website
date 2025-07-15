"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const [showFormarti, setShowFormarti] = useState<boolean>(false);
  const [showSubtitle, setShowSubtitle] = useState<boolean>(false);
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const words = ["Umani", "prima", "che", "risorse"];

  useEffect(() => {
    // First show FORMARTI and subtitle at the same time
    const formartiTimer = setTimeout(() => {
      setShowFormarti(true);
      setShowSubtitle(true);
    }, 300); // Start FORMARTI and subtitle animations after 300ms

    // Then start the word-by-word animation for "Umani prima che risorse"
    const wordsTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleWords((prev) => {
          if (prev < words.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 300); // Delay between each word appearing

      return () => clearInterval(interval);
    }, 400); // Start words animation after FORMARTI appears (300ms + 500ms delay)

    return () => {
      clearTimeout(formartiTimer);
      clearTimeout(wordsTimer);
    };
  }, [words.length]);

  return (
    <section className="hero-section h-[65vh] flex flex-col items-center justify-center text-center bg-dark-900 relative overflow-hidden px-4">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-8">
        {/* JOIO Logo/Image - placeholder for now */}
        <div className="joio-logo mb-4 md:mb-6">
          {/* This will be replaced with the actual JOIO image */}
          <div
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[12rem] font-bold text-white tracking-wider transition-all duration-900 ease-out ${
              showFormarti
                ? "opacity-100 scale-100 transform"
                : "opacity-0 scale-75 transform"
            }`}
          >
            FORMARTI
          </div>
        </div>

        {/* Tagline */}
        <div className="tagline space-y-3 md:space-y-4">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-accent-teal font-light tracking-[0.2em] md:tracking-[0.3em] uppercase">
            <span
              className={`inline-block transition-all duration-800 ease-out ${
                showSubtitle
                  ? "opacity-100 translate-x-0 transform"
                  : "opacity-0 -translate-x-full transform"
              }`}
            >
              Educatrice Professionale
            </span>
            <span
              className={`inline-block transition-all duration-800 ease-out ${
                showSubtitle
                  ? "opacity-100 translate-x-0 transform"
                  : "opacity-0 translate-x-full transform"
              }`}
            >
              <span className="mx-2">e</span>
              Formatrice Aziendale
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 ease-out ${
                  index < visibleWords
                    ? "opacity-100 scale-100 transform"
                    : "opacity-0 scale-50 transform"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {word}
                {index < words.length - 1 && "\u00A0"}
              </span>
            ))}
          </h2>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-800 to-transparent"></div>
    </section>
  );
};

export default Hero;
