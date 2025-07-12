"use client";

import { Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      info: "formartinavecchio@gmail.com",
      description:
        "Invia un'email in qualsiasi momento - Rispondo entro 24 ore",
    },
    {
      icon: MapPin,
      title: "Località",
      info: "Pescara, Italia",
      description: "Basata a Pescara, offro sia sessioni in persona che online",
    },
    {
      icon: Clock,
      title: "Tempo di risposta",
      info: "Entro 24 ore",
      description: "Rispondo a tutte le richieste rapidamente e personalmente",
    },
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-dark-900 mb-6 leading-tight">
            Contattami
          </h2>
          <p className="text-lg text-dark-900/90 font-light leading-relaxed max-w-2xl mx-auto">
            Sono qui per supportarti nel tuo percorso verso una migliore fiducia
            e fiducia. Contattami e iniziamo la conversazione.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {contactDetails.map((detail, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <detail.icon className="w-8 h-8 text-dark-900 opacity-60" />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 mb-2">
                {detail.title}
              </h3>
              <p className="text-lg font-medium text-dark-900 mb-3">
                {detail.info}
              </p>
              <p className="text-sm text-dark-900/60 font-light leading-relaxed">
                {detail.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h3 className="text-2xl font-light text-dark-900 mb-4">
            Pronto ad iniziare?
          </h3>
          <p className="text-dark-900/90 font-light leading-relaxed max-w-2xl mx-auto">
            Prendere il primo passo è spesso la parte più difficile. Sono qui
            per aiutarti a iniziare il tuo percorso. Sia che tu stia cercando di
            lavorare sulla tua fiducia, sui tuoi comportamenti alimentari, su
            minimalismo o su personalità, sono felice di aiutarti a creare un
            cambiamento positivo nella tua vita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
