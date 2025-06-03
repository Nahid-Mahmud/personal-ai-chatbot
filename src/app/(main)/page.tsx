import About from "@/components/home/About";
import CtaSection from "@/components/home/CtaSection";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="dark:bg-[#09122C] dark:text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* about section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* Benefits Section */}
      <WhyChooseUs />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
