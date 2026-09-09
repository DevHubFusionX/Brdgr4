import HeroSection from "@/components/landing/HeroSection";
import TrustSection from "@/components/landing/TrustSection";
import ValueMetricsSection from "@/components/landing/ValueMetricsSection";
import EngineSection from "@/components/landing/EngineSection";
import DualPathSection from "@/components/landing/DualPathSection";
import EcosystemSection from "@/components/landing/EcosystemSection";
import PricingPreview from "@/components/landing/PricingPreview";
import CtaSection from "@/components/landing/CtaSection";
import SectionBlurReveal from "@/components/ui/SectionBlurReveal";

export default function LandingPage() {
  return (
    <>
      <HeroSection />

      <SectionBlurReveal deferred={false}>
        <EngineSection />
      </SectionBlurReveal>

      <SectionBlurReveal>
        <TrustSection />
      </SectionBlurReveal>

      <SectionBlurReveal>
        <ValueMetricsSection />
      </SectionBlurReveal>

      <SectionBlurReveal>
        <DualPathSection />
      </SectionBlurReveal>

      <SectionBlurReveal>
        <EcosystemSection />
      </SectionBlurReveal>

      <SectionBlurReveal>
        <PricingPreview />
      </SectionBlurReveal>

      <SectionBlurReveal>
        <CtaSection />
      </SectionBlurReveal>
    </>
  );
}
