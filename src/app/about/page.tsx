"use client";

import AboutHero from "@/components/AboutHero";
import ThreeColumnFeatures from "@/components/ThreeColumnFeatures";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const AboutPage = () => {
  const featuresData = [
    {
      title: "Qualified",
      description:
        "As a certified Eating Psychology Coach and Life Coach, I'm qualified and passionate about helping people out of negative eating habits and into freedom, body confidence and good self-image. I love helping others find the boldness to wear what they love, eat what they fancy and do what their passionate about.",
    },
    {
      title: "Personal",
      description:
        "First and foremost I'm a wife and mother, so I'm currently living out my dream. I'm also a photographer and qualified Zumba Instructor. I love getting offline and into nature. So most weekends you'll find our little family in the woods, hanging in a hammock, making a fire and drinking tea together.",
    },
    {
      title: "Faith",
      description:
        "I'm a Christian and therefore believe that you were created with love, care and there is purpose to your life. If that's what you believe too, I'm happy to help you find more intentionality in your faith life. But if you're not feeling it, we can leave the God-chat out of our sessions and focus on you.",
    },
  ];

  return (
    <main>
      <Header />
      <AboutHero
        title="Ciao, sono Martina Vecchio."
        subtitle="Una formatrice e consulente filosofica basata a Pescara, Italia."
        imageSrc="/images/profile.jpeg"
        imageAlt="Martina Vecchio sitting on a wall with graffiti in a natural setting"
      />

      <ThreeColumnFeatures
        sectionTitle="What I like about me:"
        columns={
          featuresData as [
            (typeof featuresData)[0],
            (typeof featuresData)[1],
            (typeof featuresData)[2]
          ]
        }
        backgroundColor="bg-gray-50"
        textColor="text-gray-900"
      />

      <Footer />
    </main>
  );
};

export default AboutPage;
