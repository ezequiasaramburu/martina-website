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
            Send a Message
          </h2>
          <p className="text-lg text-dark-900/90 font-light leading-relaxed max-w-2xl mx-auto">
            Ready to start your journey? Send me a message and let&apos;s chat
            about how I can help you build confidence and create positive
            change.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-dark-900 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors"
                placeholder="Your full name"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-dark-900 mb-2"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors"
              placeholder="What would you like to discuss?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-dark-900 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors resize-vertical"
              placeholder="Tell me about your goals, challenges, or any questions you have..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-accent-teal text-white px-8 py-3 font-semibold tracking-wide hover:bg-accent-teal/90 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
