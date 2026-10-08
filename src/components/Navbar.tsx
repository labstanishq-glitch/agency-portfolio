"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const shellClass = scrolled
    ? "border-border bg-background/92 shadow-[0_1px_0_rgba(250,243,225,0.06)]"
    : "border-transparent bg-background/70";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between border-b px-1 py-2.5 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-300 sm:px-2 ${shellClass}`}
        aria-label="Main"
      >
        <Link
          href="/"
          className="font-display text-[0.7rem] font-semibold tracking-[0.22em] text-light-cream transition-colors hover:text-cream sm:text-xs"
        >
          {site.name}
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-[0.8125rem] font-medium text-muted transition-colors duration-200 hover:text-light-cream"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="#book"
            className="inline-flex items-center rounded-sm border border-accent/80 bg-accent px-4 py-2 text-[0.8125rem] font-medium text-[#0B0D0F] transition-[background-color,border-color] duration-200 hover:border-accent hover:bg-[#ff7d35]"
          >
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center border border-border text-light-cream transition-colors hover:border-light-cream/25 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-background/96 backdrop-blur-sm md:hidden"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-full flex-col px-6 pt-20 pb-10">
              <ul className="flex flex-col gap-5">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduced ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      className="font-display text-2xl font-semibold tracking-tight text-light-cream"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="#book"
                className="mt-8 inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-[#0B0D0F]"
                onClick={() => setOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
