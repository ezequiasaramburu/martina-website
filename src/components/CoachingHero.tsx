"use client";

const CoachingHero = () => {
  return (
    <section className="bg-gradient-to-br from-teal-400 via-blue-400 to-purple-500 py-20 lg:py-32 px-8 relative overflow-hidden">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-dark-900 bg-opacity-20"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
          Io non posso insegnare niente a nessuno, <br />
          posso solo aiutarli a pensare.
          <span className="text-right text-xs md:text-md lg:text-lg text-white/70 font-medium italic lg:ml-12 md:ml-8 ml-4">
            Socrate
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/95 font-light leading-relaxed max-w-2xl mx-auto">
          Scopri le diverse modalità di incontro per il tuo percorso di crescita
          personale e professionale. Ogni approccio è pensato per adattarsi alle
          tue esigenze specifiche.
        </p>
      </div>
    </section>
  );
};

export default CoachingHero;
