import Link from "next/link";
import { site } from "@/lib/data";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Discuss", href: "#discuss" },
  { label: "About", href: "#about" },
  { label: "Book a Call", href: "#book" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-light-cream">
              {site.name}
            </p>
            <p className="mt-4 max-w-sm text-[0.875rem] leading-relaxed text-muted">
              Digital products, websites and automation for businesses that
              want clarity, craft and systems that actually work.
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="eyebrow text-[0.625rem]">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.875rem] text-light-cream/85 transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className="eyebrow text-[0.625rem]">Connect</p>
            <ul className="mt-4 space-y-2.5 text-[0.875rem]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-light-cream/85 transition-colors duration-200 hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-cream/85 transition-colors duration-200 hover:text-accent"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-cream/85 transition-colors duration-200 hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-6 text-xs text-muted/90">
          © {site.year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
