"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium tracking-wide transition-[color,background-color,border-color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-[#0B0D0F] hover:bg-[#ff7d35] focus-visible:outline-accent",
  secondary:
    "border border-border bg-transparent text-light-cream hover:border-light-cream/35 hover:bg-surface/40",
  ghost:
    "text-light-cream hover:text-accent px-0 py-0 rounded-none font-medium",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  type = "button",
  onClick,
}: ButtonProps) {
  const reduced = useReducedMotion();
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = reduced ? (
    <span className={classes}>{children}</span>
  ) : (
    <motion.span
      className={classes}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
