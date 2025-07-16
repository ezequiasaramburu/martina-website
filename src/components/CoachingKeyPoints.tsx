"use client";

import { UserCheck, Monitor, Shuffle } from "lucide-react";

interface KeyPoint {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  keywords: string[];
  color: string;
}

const CoachingKeyPoints = () => {
  const keyPoints: KeyPoint[] = [
    {
      icon: UserCheck,
      title: "Presenza",
      keywords: ["Standard", "Collaborativa", "Frontale"],
      color: "text-pink-500",
    },
    {
      icon: Monitor,
      title: "E-learning",
      keywords: ["Flessibile", "Inmediata", "Comoda"],
      color: "text-blue-500",
    },
    {
      icon: Shuffle,
      title: "Blended",
      keywords: ["Esperenziale", "Integrata", "Complementare"],
      color: "text-green-400",
    },
  ];

  return (
    <section className="bg-gray-50 pt-10 pb-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {keyPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className={`h-12 w-12 ${point.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {point.title}
                </h3>
                <div className="space-y-2">
                  {point.keywords.map((keyword, keywordIndex) => (
                    <div
                      key={keywordIndex}
                      className="text-gray-700 font-medium text-lg"
                    >
                      {keyword}
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

export default CoachingKeyPoints;
