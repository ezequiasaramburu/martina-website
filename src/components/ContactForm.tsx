"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-dark-900 mb-6 leading-tight">
            Invia un messaggio
          </h2>
          <p className="text-lg text-dark-900/90 font-light leading-relaxed max-w-4xl mx-auto">
            Sono qui per supportarti nel tuo percorso di potenzamento personale
            e professionale.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-dark-900 mb-2"
              >
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors text-dark-900 bg-white placeholder-gray-500"
                placeholder="Il tuo nome"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-dark-900 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors text-dark-900 bg-white placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-dark-900 mb-2"
            >
              Oggetto *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors text-dark-900 bg-white placeholder-gray-500"
              placeholder="Cosa vorresti discutere?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-dark-900 mb-2"
            >
              Messaggio *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors resize-vertical text-dark-900 bg-white placeholder-gray-500"
              placeholder="Descrivi i tuoi obiettivi, i tuoi problemi o le tue domande..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-dark-900 text-white px-8 py-3 font-semibold tracking-wide hover:bg-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 transition-colors border-2 border-dark-900 hover:border-accent-teal"
              style={{
                background: "#0f0f0f",
                color: "#ffffff",
                border: "2px solid #0f0f0f",
              }}
            >
              Invia messaggio
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
