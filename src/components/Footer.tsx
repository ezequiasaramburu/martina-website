"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white font-light text-sm md:text-base">
            © {currentYear} Martina Vecchio. All rights reserved.
          </div>
          <div className="text-white/80 font-light text-sm md:text-base text-center md:text-right">
            <div>Educatrice Professionale e Formatrice Aziendale</div>
            <div className="text-white/60 text-xs mt-1">Italia</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
