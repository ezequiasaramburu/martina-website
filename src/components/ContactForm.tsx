"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const ContactFormContent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Execute reCAPTCHA
      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA not available");
      }

      const recaptchaToken = await executeRecaptcha("contact_form");

      if (!recaptchaToken) {
        throw new Error("Failed to verify reCAPTCHA");
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Martina",
        recaptcha_token: recaptchaToken,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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

        {submitStatus === "success" && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-center font-medium">
              Messaggio inviato con successo! Ti risponderò presto.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-center font-medium">
              Errore durante l&apos;invio del messaggio. Riprova più tardi.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
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
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors text-dark-900 bg-white placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors text-dark-900 bg-white placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="tua.email@esempio.com"
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
              required
              value={formData.subject}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors text-dark-900 bg-white placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Ambito di interesse"
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
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors resize-vertical text-dark-900 bg-white placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Descrivi i tuoi obiettivi, i tuoi problemi o le tue domande..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-dark-900 text-white px-8 py-3 font-semibold tracking-wide hover:bg-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 transition-colors border-2 border-dark-900 hover:border-accent-teal disabled:opacity-50 disabled:cursor-not-allowed cta-button cta-dark"
              style={{
                background: isSubmitting ? "#6b7280" : "#0f0f0f",
                color: "#ffffff",
                border: isSubmitting
                  ? "2px solid #6b7280"
                  : "2px solid #0f0f0f",
              }}
            >
              {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!recaptchaSiteKey) {
    console.warn("reCAPTCHA site key not found");
    return <ContactFormContent />;
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      <ContactFormContent />
    </GoogleReCaptchaProvider>
  );
};

export default ContactForm;
