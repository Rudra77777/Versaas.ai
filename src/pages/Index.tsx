import VortexBackground from "@/components/VortexBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VoiceDemo from "@/components/VoiceDemo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <VortexBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <VoiceDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
