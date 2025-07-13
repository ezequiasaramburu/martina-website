interface ServiceDetailHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundColor: string;
  textColor: string;
}

const ServiceDetailHero = ({
  title,
  subtitle,
  description,
  backgroundColor,
  textColor,
}: ServiceDetailHeroProps) => {
  return (
    <section
      className={`${backgroundColor} ${textColor} py-20 lg:py-32 px-8 relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto">
          {subtitle}
        </p>
        <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto opacity-90">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
