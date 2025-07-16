import { CheckCircle, Layers } from "lucide-react";
import Link from "next/link";

interface ServiceDetailContentProps {
  sections: {
    title: string;
    subtitle?: string;
    content: string | string[];
  }[];
  benefits: string[];
  callToAction: string;
  backgroundColor: string;
  textColor: string;
}

const ServiceDetailContent = ({
  sections,
  benefits,
  callToAction,
  backgroundColor,
}: ServiceDetailContentProps) => {
  const getIconColor = (bgColor: string) => {
    const colorMap: { [key: string]: string } = {
      "bg-blue-400": "text-blue-400",
      "bg-green-400": "text-green-400",
      "bg-purple-500": "text-purple-500",
      "bg-teal-400": "text-teal-400",
      "bg-pink-500": "text-pink-500",
    };
    return colorMap[bgColor] || "text-blue-500";
  };

  const iconColor = getIconColor(backgroundColor);
  return (
    <div className="bg-gray-50 text-gray-900">
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index < sections.length - 1
                    ? "md:border-r md:border-gray-200 md:pr-8"
                    : ""
                }`}
              >
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-left text-gray-900">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-lg font-medium mb-1 text-left text-gray-800">
                    {section.subtitle}
                  </p>
                )}
                {Array.isArray(section.content) ? (
                  <ul className="text-base md:text-lg leading-relaxed text-left text-gray-700 space-y-4">
                    {section.content.map((item, itemIndex) => {
                      const parts = item.split("<br/>");
                      const mainItem = parts[0];
                      const subItems = parts
                        .slice(1)
                        .filter((part) => part.trim());

                      return (
                        <li key={itemIndex} className="flex items-start">
                          {subItems.length > 0 ? (
                            <div className="flex-shrink-0 mr-3 mt-0.5">
                              <Layers className={`h-5 w-5 ${iconColor}`} />
                            </div>
                          ) : (
                            <span className={`${iconColor} mr-3 mt-1`}>→</span>
                          )}
                          <div>
                            <span
                              dangerouslySetInnerHTML={{ __html: mainItem }}
                            />
                            {subItems.length > 0 && (
                              <ul className="mt-2 space-y-1">
                                {subItems.map((subItem, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="flex items-start"
                                  >
                                    <span
                                      className={`${iconColor} mr-2 mt-0.5`}
                                    >
                                      →
                                    </span>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: subItem,
                                      }}
                                    />
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-base md:text-lg leading-relaxed text-left text-gray-700">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-gray-900">
            Benefici del Percorso
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle
                  className={`w-6 h-6 mt-1 flex-shrink-0 ${iconColor}`}
                />
                <p className="text-lg text-gray-700 font-bold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">
            {callToAction}
          </h2>
          <Link
            href="/contact"
            className={`inline-block ${backgroundColor} px-8 py-4 font-semibold text-lg`}
            style={{ color: "white" }}
          >
            Contattami Ora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailContent;
