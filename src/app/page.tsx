import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ColorfulSection from "@/components/ColorfulSection";
import RootLayout from "./layout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <main>
        <Hero />
        <ColorfulSection />
      </main>
      <Footer />
    </RootLayout>
  );
}
