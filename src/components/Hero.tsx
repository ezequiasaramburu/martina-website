"use client";

const Hero = () => {
  return (
    <section className="hero-section h-[65vh] flex flex-col items-center justify-center text-center bg-dark-900 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* JOIO Logo/Image - placeholder for now */}
        <div className="joio-logo mb-6">
          {/* This will be replaced with the actual JOIO image */}
          <div className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white tracking-wider">
            FORMARTI
          </div>
        </div>

        {/* Tagline */}
        <div className="tagline space-y-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-accent-teal font-light tracking-[0.3em] uppercase">
            Educatrice Professionale e Formatrice Aziendale
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-[0.2em] uppercase">
            Umani prima che risorse
          </h2>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-800 to-transparent"></div>
    </section>
  );
};

export default Hero;
