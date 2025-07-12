import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ColorfulSection from "@/components/ColorfulSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ColorfulSection />
      </main>
      <Footer />
    </>
  );
}
