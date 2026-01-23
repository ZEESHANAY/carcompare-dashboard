import Hero from "@/components/sections/Hero";
import BentoGrid from "@/components/sections/BentoGrid";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Brands from "@/components/sections/Brands";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Stats Bar */}
      <Stats />

      {/* Section 3: Bento Grid Features */}
      <BentoGrid />

      {/* Section 4: How It Works */}
      <HowItWorks />

      {/* Section 5: Features Grid */}
      <Features />

      {/* Section 6: Brands Showcase */}
      <Brands />

      {/* Section 7: Testimonials */}
      <Testimonials />

      {/* Section 8: CTA */}
      <CTA />
    </>
  );
}
