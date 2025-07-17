import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Security from "@/components/Security";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-instrument-sans)] gap-8">
      <div id="hero" className="w-full h-full">
        <HeroSection />
      </div>
      <div id="about" className="mt-32 mb-48">
        <About />
      </div>
      <div id="security" className="mt-16 mb-48">
        <Security />
      </div>
      <div id="features" className="mb-36">
        <Features />
      </div>
      <div id="faq" className="mb-32">
        <FAQ />
      </div>
      <div id="contact" className="mb-20">
        <ContactUs />
      </div>
    </div>
  );
}
