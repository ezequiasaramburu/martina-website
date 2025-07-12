"use client";

import { Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      info: "hello@sjtreharne.com",
      description:
        "Send me an email anytime - I typically respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Auckland, New Zealand",
      description:
        "Based in the beautiful city of Auckland, offering both in-person and online sessions",
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "Within 24 hours",
      description: "I aim to respond to all inquiries quickly and personally",
    },
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-dark-900 mb-6 leading-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-dark-900/90 font-light leading-relaxed max-w-2xl mx-auto">
            I&apos;m here to support you on your journey to better self-esteem
            and confidence. Reach out and let&apos;s start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {contactDetails.map((detail, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <detail.icon className="w-8 h-8 text-dark-900 opacity-60" />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 mb-2">
                {detail.title}
              </h3>
              <p className="text-lg font-medium text-dark-900 mb-3">
                {detail.info}
              </p>
              <p className="text-sm text-dark-900/60 font-light leading-relaxed">
                {detail.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h3 className="text-2xl font-light text-dark-900 mb-4">
            Ready to Begin?
          </h3>
          <p className="text-dark-900/90 font-light leading-relaxed max-w-2xl mx-auto">
            Taking the first step is often the hardest part. I&apos;m here to
            make it as easy as possible. Whether you&apos;re looking to work on
            self-esteem, eating habits, minimalism, or personal style, I&apos;m
            excited to help you create positive change in your life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
