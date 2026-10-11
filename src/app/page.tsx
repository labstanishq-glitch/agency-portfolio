import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyUs } from "@/components/WhyUs";
import { AboutSection } from "@/components/AboutSection";
import { BookCallSection } from "@/components/BookCallSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { PageEntrance } from "@/components/PageEntrance";

export default function Home() {
  return (
    <PageEntrance>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <SelectedWork />
        <Services />
        <PricingSection />
        <ProcessSection />
        <WhyUs />
        <AboutSection />
        <BookCallSection />
        <FinalCta />
      </main>
      <Footer />
    </PageEntrance>
  );
}
