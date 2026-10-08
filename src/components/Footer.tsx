import Link from "next/link";
import { site } from "@/lib/data";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Book a Call", href: "#book" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-sm font-bold tracking-[0.2em] text-light-cream">
              {site.name}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Digital products, websites and automation for businesses that
              want clarity, craft and systems that actually work.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-muted">
              NAVIGATE
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light-cream/90 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-muted">
              CONNECT
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-light-cream/90 transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-cream/90 transition-colors hover:text-accent"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-cream/90 transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-8 text-xs text-muted">
          © {site.year} Your Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
