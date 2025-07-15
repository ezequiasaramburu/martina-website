"use client";

import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white font-light text-sm md:text-base">
            © {currentYear} Martina Vecchio. Tutti i diritti riservati.
          </div>
          <div className="text-white/80 font-light text-sm md:text-base text-center md:text-right">
            <div>Educatrice Professionale e Formatrice Aziendale</div>
            <div className="text-white/60 text-xs mt-1 flex items-center justify-center md:justify-end gap-2">
              <a
                href="https://linkedin.com/in/martina-vecchio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <span>Italia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
