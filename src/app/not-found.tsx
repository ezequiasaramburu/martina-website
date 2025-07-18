"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="min-h-full flex flex-col items-center justify-center text-center bg-dark-900 relative overflow-hidden px-4">
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8 w-full max-w-4xl mx-auto pb-10">
            {/* 404 Number */}
            <div
              className={`text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-accent-teal tracking-wider transition-all duration-900 ease-out ${
                isVisible
                  ? "opacity-100 scale-100 transform"
                  : "opacity-0 scale-75 transform"
              }`}
            >
              404
            </div>

            {/* Error Message */}
            <div
              className={`space-y-4 transition-all duration-800 ease-out w-full flex flex-col items-center ${
                isVisible
                  ? "opacity-100 translate-y-0 transform"
                  : "opacity-0 translate-y-8 transform"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-[0.1em] uppercase text-center">
                Pagina Non Trovata
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/80 font-light tracking-[0.2em] uppercase max-w-md text-center mx-auto">
                La pagina che stai cercando non esiste o è stata spostata
              </p>
            </div>

            {/* Action Button */}
            <div
              className={`flex justify-center mt-8 transition-all duration-800 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 transform"
                  : "opacity-0 translate-y-8 transform"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Link
                href="/"
                className="flex items-center gap-2 bg-accent-teal text-dark-900 px-6 py-3 font-semibold tracking-wide uppercase hover:bg-accent-teal/90 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 focus:ring-offset-dark-900 cta-button cta-accent"
              >
                <Home className="w-5 h-5" />
                Torna alla Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
