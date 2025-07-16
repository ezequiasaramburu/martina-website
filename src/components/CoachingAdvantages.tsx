"use client";

import { Award, User, GraduationCap, Users } from "lucide-react";

interface Advantage {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  benefits: string[];
  color: string;
}

const CoachingAdvantages = () => {
  const advantages: Advantage[] = [
    {
      icon: User,
      title: "Consulenza 1:1",
      benefits: [
        "Altissima personalizzazione",
        "Maggiore profondità e introspezione",
        "Possibilità di affrontare anche blocchi emotivi o relazionali",
      ],
      color: "text-blue-500",
    },
    {
      icon: GraduationCap,
      title: "Formazione",
      benefits: [
        "Stimola l'apprendimento collettivo",
        "Favorisce il confronto tra pari, il feedback sulle prestazioni e risparmio di tempo e costi",
        "Creazione di senso di appartenenza e di gruppo",
      ],
      color: "text-green-400",
    },
    {
      icon: Users,
      title: "Workshop esperienziali",
      benefits: [
        "Apprendimento esperienziale (learning by doing)",
        "Forte coinvolgimento emotivo e motivazionale",
        "Alto impatto trasformativo e di motivazione",
      ],
      color: "text-pink-500",
    },
  ];

  return (
    <section className="bg-gray-50 pt-0 pb-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className={`h-12 w-12 ${advantage.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <div className="space-y-3">
                  {advantage.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-start text-left"
                    >
                      <div className="flex-shrink-0 mr-3 mt-0.5">
                        <Award className={`h-5 w-5 ${advantage.color}`} />
                      </div>
                      <div className="text-gray-700 font-medium text-lg">
                        {benefit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoachingAdvantages;
