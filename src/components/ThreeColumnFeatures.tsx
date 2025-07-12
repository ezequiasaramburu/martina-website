"use client";

interface FeatureColumn {
  title: string;
  description: string;
}

interface ThreeColumnFeaturesProps {
  sectionTitle: string;
  columns: [FeatureColumn, FeatureColumn, FeatureColumn];
  backgroundColor?: string;
  textColor?: string;
}

const ThreeColumnFeatures = ({
  sectionTitle,
  columns,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-900",
}: ThreeColumnFeaturesProps) => {
  return (
    <section className={`${backgroundColor} py-20 px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-light ${textColor} text-center mb-16 leading-tight`}
        >
          {sectionTitle}
        </h2>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {columns.map((column, index) => (
            <div
              key={index}
              className={`text-left ${
                index < columns.length - 1
                  ? "md:border-r md:border-gray-200 md:pr-8 lg:pr-12"
                  : ""
              }`}
            >
              <h3
                className={`text-2xl md:text-3xl font-light ${textColor} mb-6`}
              >
                {column.title}
              </h3>
              <p
                className={
                  "text-dark-600 font-light leading-relaxed text-base md:text-lg"
                }
              >
                {column.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnFeatures;
