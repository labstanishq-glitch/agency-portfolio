"use client";

import { useState } from "react";
import {
  type PricingMarket,
  type TieredOffering,
  type WebsitePackage,
  maintenancePlans,
  pricingDisclaimers,
  seoPlans,
  webAppOfferings,
  websitePackages,
} from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

const markets: { id: PricingMarket; label: string }[] = [
  { id: "india", label: "India" },
  { id: "international", label: "International" },
];

function formatTierPrice(
  offering: TieredOffering,
  market: PricingMarket,
  perMonth?: boolean,
): string {
  if (!offering.prices) return "Custom quote";
  const amount = offering.prices[market];
  const prefix = offering.pricePrefix ? `${offering.pricePrefix} ` : "";
  const suffix = perMonth ? " per month" : "";
  return `${prefix}${amount}${suffix}`;
}

function WebsitePackageCard({
  pkg,
  market,
}: {
  pkg: WebsitePackage;
  market: PricingMarket;
}) {
  const variant = pkg.ctaLabel === "Get started" ? "primary" : "secondary";

  return (
    <article
      className={`flex h-full flex-col border bg-transparent p-6 sm:p-7 ${
        pkg.featured
          ? "border-accent/50 bg-surface/20"
          : "border-border/80"
      }`}
    >
      {pkg.featured ? (
        <p className="eyebrow text-[0.625rem] text-accent">Most popular</p>
      ) : (
        <p className="eyebrow text-[0.625rem]">Website</p>
      )}
      <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-light-cream">
        {pkg.name}
      </h3>
      <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-light-cream sm:text-[1.75rem]">
        {pkg.prices[market]}
      </p>
      <ul className="mt-6 flex-1 space-y-2.5 text-[0.875rem] leading-relaxed text-muted sm:text-[0.9375rem]">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href="#book" variant={variant} className="w-full sm:w-auto">
          {pkg.ctaLabel}
        </Button>
      </div>
    </article>
  );
}

function TierRow({
  offering,
  market,
  perMonth,
}: {
  offering: TieredOffering;
  market: PricingMarket;
  perMonth?: boolean;
}) {
  const variant = offering.ctaLabel === "Get started" ? "primary" : "secondary";

  return (
    <li className="flex flex-col gap-4 border border-border/80 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="min-w-0">
        <h4 className="font-display text-base font-semibold tracking-[-0.02em] text-light-cream sm:text-lg">
          {offering.name}
        </h4>
        <p className="mt-1 text-[0.9375rem] text-muted">
          {formatTierPrice(offering, market, perMonth)}
        </p>
      </div>
      <Button href="#book" variant={variant} className="shrink-0">
        {offering.ctaLabel}
      </Button>
    </li>
  );
}

export function PricingSection() {
  const [market, setMarket] = useState<PricingMarket>("india");

  return (
    <section
      id="pricing"
      className="section-pad scroll-mt-24 border-t border-border bg-surface/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              title="Straightforward pricing. Built around your goals."
              subtitle="All figures below are starting prices. Complex scope, integrations and timelines receive a custom quote after we understand your goals."
              className="mb-0 lg:max-w-xl"
            />
            <div
              role="radiogroup"
              aria-label="Pricing region"
              className="flex shrink-0 rounded-sm border border-border p-1"
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  setMarket((current) =>
                    current === "india" ? "international" : "india",
                  );
                }
              }}
            >
              {markets.map((option) => {
                const selected = market === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setMarket(option.id)}
                    className={`rounded-sm px-4 py-2 text-[0.8125rem] font-medium transition-[color,background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      selected
                        ? "bg-accent text-[#0B0D0F]"
                        : "text-muted hover:text-light-cream"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="mt-12 sm:mt-14">
            <p className="eyebrow mb-5">Website development</p>
            <ul className="grid gap-5 lg:grid-cols-3 lg:gap-px lg:border lg:border-border">
              {websitePackages.map((pkg) => (
                <li key={pkg.id} className="lg:bg-background">
                  <WebsitePackageCard pkg={pkg} market={market} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-14 sm:mt-16">
            <p className="eyebrow mb-5">Web apps and dashboards</p>
            <ul className="grid gap-4">
              {webAppOfferings.map((offering) => (
                <TierRow key={offering.name} offering={offering} market={market} />
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-14 sm:mt-16 lg:grid-cols-2 lg:gap-10">
          <Reveal delay={0.08}>
            <div>
              <p className="eyebrow mb-5">Monthly maintenance</p>
              <ul className="grid gap-4">
                {maintenancePlans.map((plan) => (
                  <TierRow
                    key={plan.name}
                    offering={plan}
                    market={market}
                    perMonth
                  />
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="eyebrow mb-5">Monthly SEO</p>
              <ul className="grid gap-4">
                {seoPlans.map((plan) => (
                  <TierRow key={plan.name} offering={plan} market={market} />
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-14 border-t border-border pt-10 sm:mt-16">
            <p className="eyebrow mb-4">Commercial conditions</p>
            <ul className="max-w-3xl space-y-2.5 text-[0.875rem] leading-relaxed text-muted sm:text-[0.9375rem]">
              {pricingDisclaimers.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="text-muted/60" aria-hidden>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
