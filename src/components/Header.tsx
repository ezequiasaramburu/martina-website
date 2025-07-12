"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-900/90 backdrop-blur-md py-2 px-12">
      <div className="mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <Link href="/" className="hover:text-accent-teal transition-colors">
              FORMARTI
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className="text-white hover:text-accent-teal transition-colors font-semibold tracking-wide px-4 py-2 focus:outline-none"
            >
              <span
                className={`relative focus:outline-none ${
                  isActive("/") ? "border-b-2 border-white" : "hover-underline"
                }`}
              >
                HOME
              </span>
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent-teal transition-colors font-semibold tracking-wide px-4 py-2 focus:outline-none"
            >
              <span
                className={`relative focus:outline-none ${
                  isActive("/about")
                    ? "border-b-2 border-white"
                    : "hover-underline"
                }`}
              >
                CHI SONO
              </span>
            </Link>
            <Link
              href="/coaching"
              className="text-white hover:text-accent-teal transition-colors font-semibold tracking-wide px-4 py-2 focus:outline-none"
            >
              <span
                className={`relative focus:outline-none ${
                  isActive("/coaching")
                    ? "border-b-2 border-white"
                    : "hover-underline"
                }`}
              >
                PER TE
              </span>
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-accent-teal transition-colors font-semibold tracking-wide px-4 py-2 focus:outline-none"
            >
              <span
                className={`relative focus:outline-none ${
                  isActive("/contact")
                    ? "border-b-2 border-white"
                    : "hover-underline"
                }`}
              >
                CONTATTI
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-accent-teal transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
