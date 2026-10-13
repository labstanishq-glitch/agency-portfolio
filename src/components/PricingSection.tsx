"use client";

import { useState } from "react";
import { websitePackages, websiteQuoteServiceLabel } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { QuoteRequestModal } from "@/components/QuoteRequestModal";

export function PricingSection() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState(
    websiteQuoteServiceLabel(websitePackages[0]?.name ?? "Starter"),
  );
  const [quoteSession, setQuoteSession] = useState(0);

  const openQuote = () => {
    setQuoteService(websiteQuoteServiceLabel(websitePackages[0]?.name ?? "Starter"));
    setQuoteSession((session) => session + 1);
    setQuoteOpen(true);
  };

  return (
    <section
      id="discuss"
      className="section-pad scroll-mt-24 border-t border-border bg-surface/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="border border-border/80 bg-surface/20 p-8 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:p-12">
            <SectionHeading
              title="Let's Discuss Your Project"
              subtitle="Every project is different. Let's discuss your requirements and create a solution tailored to your goals."
              className="mb-0 lg:max-w-xl"
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
              <Button href="#book" className="w-full sm:w-auto">
                Book a Consultation
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={openQuote}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </Reveal>
      </div>

      <QuoteRequestModal
        key={quoteSession}
        open={quoteOpen}
        initialService={quoteService}
        onClose={() => setQuoteOpen(false)}
      />
    </section>
  );
}
