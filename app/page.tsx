import { HeroSection } from "@/components/hero-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/sections/footer";
import { MatrixBackground } from "@/components/ui/matrix-background";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <MatrixBackground />
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <TestimonialSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}