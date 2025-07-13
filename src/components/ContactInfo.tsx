"use client";

import { Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      color: "text-green-400",
      info: "formartinavecchio@gmail.com",
      description: "Invia un'email in qualsiasi momento",
    },
    {
      icon: MapPin,
      title: "Dove sono?",
      info: "Italia",
      color: "text-blue-400",
      description: "Offro sia sessioni in presenza che online",
    },
    {
      icon: Clock,
      title: "Tempo di risposta",
      info: "Entro 24 ore",
      color: "text-pink-500",
      description: "Rispondo a tutte le richieste rapidamente e personalmente",
    },
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {contactDetails.map((detail, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <detail.icon className={`w-8 h-8 ${detail.color}`} />
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
            Se non ora, quando? Se non tu, chi?
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
