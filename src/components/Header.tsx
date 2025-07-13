"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isServicesActive = () => {
    return pathname.startsWith("/servizi/");
  };

  const services = [
    { name: "Crescita Personale", slug: "crescita-personale" },
    { name: "Formazione Aziendale", slug: "formazione-aziendale" },
    { name: "Orientamento alla Scelta", slug: "orientamento-scelta" },
    { name: "Consulenza Filosofica", slug: "consulenza-filosofica" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark-900/90 backdrop-blur-md py-2 px-12">
      <div className="mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <Link href="/">FORMARTI</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className="text-white  font-semibold tracking-wide px-4 py-2 focus:outline-none"
            >
              <span
                className={`relative focus:outline-none nav-underline ${
                  isActive("/") ? "active" : ""
                }`}
              >
                HOME
              </span>
            </Link>
            <Link
              href="/about"
              className="text-white font-semibold tracking-wide px-4 py-2 focus:outline-none"
            >
              <span
                className={`relative focus:outline-none nav-underline ${
                  isActive("/about") ? "active" : ""
                }`}
              >
                CHI SONO
              </span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative text-white font-semibold tracking-wide px-4 py-2"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer servizi-hover">
                <span
                  className={`relative nav-underline ${
                    isServicesActive() ? "active" : ""
                  }`}
                >
                  SERVIZI
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-dark-900/95 backdrop-blur-md border border-dark-600 rounded-lg shadow-lg">
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/servizi/${service.slug}`}
                          className="block px-4 py-3 text-white  hover:bg-dark-800/50  font-medium"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/coaching"
              className="text-white   font-semibold tracking-wide px-4 py-2 focus:outline-none"
            >
              <span
                className={`relative focus:outline-none nav-underline ${
                  isActive("/coaching") ? "active" : ""
                }`}
              >
                PER TE
              </span>
            </Link>
            <Link
              href="/contact"
              className="text-white   font-semibold tracking-wide px-4 py-2 focus:outline-none"
            >
              <span
                className={`relative focus:outline-none nav-underline ${
                  isActive("/contact") ? "active" : ""
                }`}
              >
                CONTATTI
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white  "
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-900/95 backdrop-blur-md border-t border-dark-600 mt-2">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white   font-semibold tracking-wide py-2"
              >
                HOME
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white   font-semibold tracking-wide py-2"
              >
                CHI SONO
              </Link>

              {/* Mobile Services Section */}
              <div className="space-y-2">
                <div className="text-white font-semibold tracking-wide py-2">
                  SERVIZI
                </div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servizi/${service.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white   font-medium py-2"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/coaching"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white   font-semibold tracking-wide py-2"
              >
                PER TE
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white   font-semibold tracking-wide py-2"
              >
                CONTATTI
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
