"use client";

import Link from "next/link";
import CoachingKeyPoints from "./CoachingKeyPoints";
import CoachingAdvantages from "./CoachingAdvantages";

const CoachingModalities = () => {
  return (
    <>
      <section className="bg-gray-50 pt-20 pb-10 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-900 text-center leading-tight">
            Modalità di Erogazione
          </h2>

          <CoachingKeyPoints />

          <CoachingAdvantages />
        </div>
      </section>
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900 italic">
            {"Osserva. Scegli. Agisci."}
          </h2>
          <Link
            href="/contact"
            className={`inline-block bg-dark-900 px-8 py-4 font-semibold text-lg`}
            style={{ color: "white" }}
          >
            Contattami Ora
          </Link>
        </div>
      </section>
    </>
  );
};

export default CoachingModalities;
