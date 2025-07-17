import Script from "next/script";

interface StructuredDataProps {
  type: "Organization" | "Person" | "Service" | "Website";
  data: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };

    return JSON.stringify(baseData);
  };

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getStructuredData() }}
    />
  );
};

export default StructuredData;

// Predefined structured data for common pages
export const organizationData = {
  name: "FORMARTI",
  legalName: "Martina Vecchio",
  url: "https://martinavecchio.com",
  description:
    "Servizi di coaching personale, consulenza filosofica e formazione aziendale per la crescita personale e professionale.",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Martina Vecchio",
    jobTitle: "Coach e Consulente Filosofico",
    description:
      "Laureata in Filosofia e Scienze dell'Educazione, specializzata in consulenza filosofica e coaching.",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@formarti.it",
    url: "https://martinavecchio.com/contact",
  },
  areaServed: "Italia",
  serviceType: [
    "Coaching Personale",
    "Consulenza Filosofica",
    "Formazione Aziendale",
    "Orientamento Carriera",
    "Team Building",
    "Leadership Coaching",
  ],
  image: "https://martinavecchio.com/images/profile.jpeg",
  logo: "https://martinavecchio.com/favicon.ico",
  sameAs: [
    "https://www.linkedin.com/in/martina-vecchio",
    "https://www.instagram.com/martina_vecchio_formazione",
  ],
};

export const personData = {
  name: "Martina Vecchio",
  jobTitle: "Coach e Consulente Filosofico",
  description:
    "Laureata in Filosofia e Scienze dell'Educazione, specializzata in consulenza filosofica e coaching per la crescita personale e professionale.",
  url: "https://martinavecchio.com",
  image: "https://martinavecchio.com/og-image.jpg",
  worksFor: {
    "@type": "Organization",
    name: "FORMARTI",
    url: "https://martinavecchio.com",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Università - Filosofia",
    },
    {
      "@type": "EducationalOrganization",
      name: "Università - Scienze dell'Educazione e della Formazione",
    },
  ],
  knowsAbout: [
    "Coaching",
    "Consulenza Filosofica",
    "Formazione Aziendale",
    "Crescita Personale",
    "Leadership",
    "Team Building",
    "Filosofia Pratica",
  ],
  sameAs: [
    "https://www.linkedin.com/in/martina-vecchio",
    "https://www.instagram.com/martina_vecchio_formazione",
  ],
};
