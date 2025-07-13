import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface ServiceDetailContentProps {
  sections: {
    title: string;
    content: string;
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
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Main Content Sections */}
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
                <p className="text-base md:text-lg leading-relaxed text-left text-gray-700">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-gray-900">
            Benefici del Percorso
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle
                  className={`w-6 h-6 mt-1 flex-shrink-0 ${
                    backgroundColor === "bg-blue-400"
                      ? "text-blue-400"
                      : backgroundColor === "bg-green-400"
                      ? "text-green-400"
                      : backgroundColor === "bg-purple-500"
                      ? "text-purple-500"
                      : "text-teal-400"
                  }`}
                />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
