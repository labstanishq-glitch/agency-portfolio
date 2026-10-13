"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { quoteBudgetRanges, quoteServiceOptions, site } from "@/lib/data";

const serviceOptions = [...quoteServiceOptions];

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  details: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  details: "",
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) {
    errors.email = "Business email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.service) errors.service = "Select the service you need.";
  if (!values.details.trim()) {
    errors.details = "Project details are required.";
  }
  return errors;
}

function buildMailtoUrl(values: FormState): string {
  const subject = encodeURIComponent(`Quote request: ${values.service}`);
  const lines = [
    `Full name: ${values.name}`,
    `Email: ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    `Service: ${values.service}`,
    values.budget ? `Budget: ${values.budget}` : null,
    "",
    "Project details:",
    values.details,
  ].filter((line) => line !== null);

  const body = encodeURIComponent(lines.join("\n"));
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-light-cream placeholder:text-muted/55 outline-none transition-[border-color,box-shadow] duration-200 focus:border-accent/70 focus:ring-2 focus:ring-accent/15";

const labelClass = "mb-2 block text-[0.8125rem] font-medium text-light-cream/95";

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "delivered" }
  | { kind: "mailto" }
  | { kind: "error"; message: string };

type QuoteRequestModalProps = {
  open: boolean;
  initialService: string;
  onClose: () => void;
};

export function QuoteRequestModal({
  open,
  initialService,
  onClose,
}: QuoteRequestModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [values, setValues] = useState<FormState>({
    ...initialForm,
    service: initialService,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>({ kind: "idle" });

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const openMailtoDraft = (formValues: FormState) => {
    window.location.href = buildMailtoUrl(formValues);
    setSubmitState({ kind: "mailto" });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitState({ kind: "submitting" });

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setSubmitState({ kind: "delivered" });
        return;
      }

      const data = (await res.json().catch(() => null)) as {
        reason?: string;
        contactEmail?: string;
      } | null;

      if (res.status === 503 && data?.reason === "not_configured") {
        openMailtoDraft(values);
        return;
      }

      setSubmitState({
        kind: "error",
        message:
          data?.reason === "delivery_failed"
            ? "We couldn't deliver your request online. Use email instead."
            : "Something went wrong. Try again or email us directly.",
      });
    } catch {
      setSubmitState({
        kind: "error",
        message: "Network error. Check your connection or send your request by email.",
      });
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Close quote form"
            className="absolute inset-0 bg-[#0B0D0F]/75 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[min(92vh,820px)] w-full max-w-lg flex-col border border-border bg-background shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
              <div>
                <p className="eyebrow text-[0.625rem] text-accent">Quote request</p>
                <h2
                  id={titleId}
                  className="mt-1 font-display text-xl font-semibold tracking-[-0.02em] text-light-cream sm:text-2xl"
                >
                  Get a tailored quote
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-sm border border-border p-2 text-muted transition-colors hover:border-light-cream/30 hover:text-light-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Close"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
              {submitState.kind === "delivered" ? (
                <div className="border border-border bg-surface/30 p-6 text-center sm:p-8" role="status">
                  <p className="font-display text-lg font-semibold text-light-cream sm:text-xl">
                    Quote request received
                  </p>
                  <p className="mx-auto mt-3 max-w-sm text-[0.875rem] leading-relaxed text-muted">
                    We&apos;ll review your details and follow up at{" "}
                    <span className="text-light-cream/90">{values.email}</span>.
                  </p>
                  <button
                    type="button"
                    className="mt-6 text-[0.8125rem] font-medium text-accent transition-colors hover:text-[#ff7d35]"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              ) : submitState.kind === "mailto" ? (
                <div className="border border-border bg-surface/30 p-6 text-center sm:p-8" role="status">
                  <p className="font-display text-lg font-semibold text-light-cream sm:text-xl">
                    Complete your request in email
                  </p>
                  <p className="mx-auto mt-3 max-w-sm text-[0.875rem] leading-relaxed text-muted">
                    Your email app should open with a draft addressed to{" "}
                    <span className="text-light-cream/90">{site.email}</span>. Send
                    the message to submit your quote request.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-2.5 text-sm font-medium text-[#0B0D0F] transition-colors hover:bg-[#ff7d35]"
                      onClick={() => openMailtoDraft(values)}
                    >
                      Open email draft again
                    </button>
                    <button
                      type="button"
                      className="text-[0.8125rem] font-medium text-muted transition-colors hover:text-light-cream"
                      onClick={onClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5" noValidate>
                  {submitState.kind === "error" ? (
                    <p
                      className="rounded-sm border border-accent/40 bg-accent/10 px-4 py-3 text-[0.8125rem] leading-relaxed text-light-cream"
                      role="alert"
                    >
                      {submitState.message}{" "}
                      <button
                        type="button"
                        className="font-medium text-accent underline-offset-2 hover:underline"
                        onClick={() => openMailtoDraft(values)}
                      >
                        Send by email
                      </button>
                    </p>
                  ) : null}

                  <div>
                    <label htmlFor="quote-name" className={labelClass}>
                      Full name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="quote-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className={inputClass}
                      value={values.name}
                      onChange={(e) => setValues({ ...values, name: e.target.value })}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "quote-name-error" : undefined}
                    />
                    {errors.name ? (
                      <p id="quote-name-error" className="mt-1.5 text-xs text-accent">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="quote-email" className={labelClass}>
                      Business email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={inputClass}
                      value={values.email}
                      onChange={(e) => setValues({ ...values, email: e.target.value })}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "quote-email-error" : undefined}
                    />
                    {errors.email ? (
                      <p id="quote-email-error" className="mt-1.5 text-xs text-accent">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="quote-company" className={labelClass}>
                      Company / business name
                    </label>
                    <input
                      id="quote-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className={inputClass}
                      value={values.company}
                      onChange={(e) => setValues({ ...values, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-service" className={labelClass}>
                      Service needed <span className="text-accent">*</span>
                    </label>
                    <select
                      id="quote-service"
                      name="service"
                      className={`${inputClass} appearance-none`}
                      value={values.service}
                      onChange={(e) => setValues({ ...values, service: e.target.value })}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? "quote-service-error" : undefined}
                    >
                      <option value="">Select a package</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service ? (
                      <p id="quote-service-error" className="mt-1.5 text-xs text-accent">
                        {errors.service}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="quote-budget" className={labelClass}>
                      Budget range
                    </label>
                    <select
                      id="quote-budget"
                      name="budget"
                      className={`${inputClass} appearance-none`}
                      value={values.budget}
                      onChange={(e) => setValues({ ...values, budget: e.target.value })}
                    >
                      <option value="">Select a range (optional)</option>
                      {quoteBudgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quote-details" className={labelClass}>
                      Project details <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="quote-details"
                      name="details"
                      rows={4}
                      className={`${inputClass} min-h-[112px] resize-y`}
                      value={values.details}
                      onChange={(e) => setValues({ ...values, details: e.target.value })}
                      aria-invalid={Boolean(errors.details)}
                      aria-describedby={errors.details ? "quote-details-error" : undefined}
                    />
                    {errors.details ? (
                      <p id="quote-details-error" className="mt-1.5 text-xs text-accent">
                        {errors.details}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={submitState.kind === "submitting"}
                      className="inline-flex w-full items-center justify-center rounded-sm bg-accent px-8 py-3 text-sm font-medium text-[#0B0D0F] transition-colors duration-200 hover:bg-[#ff7d35] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {submitState.kind === "submitting"
                        ? "Sending…"
                        : "Submit quote request"}
                    </button>
                    <button
                      type="button"
                      className="text-[0.8125rem] font-medium text-muted transition-colors hover:text-light-cream"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
