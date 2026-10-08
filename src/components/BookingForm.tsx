"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { contactMethods, needOptions } from "@/lib/data";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  details: string;
  contactMethod: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  need: "",
  details: "",
  contactMethod: "Either",
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.need) errors.need = "Please select what you need.";
  if (!values.details.trim()) errors.details = "Tell us a bit about your project.";
  if (!values.contactMethod) errors.contactMethod = "Choose a contact method.";
  return errors;
}

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-light-cream placeholder:text-muted/55 outline-none transition-[border-color,box-shadow] duration-200 focus:border-accent/70 focus:ring-2 focus:ring-accent/15";

const labelClass = "mb-2 block text-[0.8125rem] font-medium text-light-cream/95";

export function BookingForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Hook for future API / calendar integration
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        className="border border-border bg-surface/30 p-8 text-center sm:p-12"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        role="status"
      >
        <p className="font-display text-xl font-semibold text-light-cream sm:text-2xl">
          Thank you — we&apos;ve received your message.
        </p>
        <p className="mx-auto mt-4 max-w-md text-[0.875rem] leading-relaxed text-muted sm:text-[0.9375rem]">
          We&apos;ll review your details and get back to you shortly using your
          preferred contact method.
        </p>
        <button
          type="button"
          className="mt-8 text-[0.8125rem] font-medium text-accent transition-colors hover:text-[#ff7d35]"
          onClick={() => {
            setSubmitted(false);
            setValues(initial);
            setErrors({});
          }}
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 border border-border bg-background/40 p-5 sm:grid-cols-2 sm:gap-6 sm:p-8"
      noValidate
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          Name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className={inputClass}
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="mt-1.5 text-xs text-accent">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Business / Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={inputClass}
          value={values.company}
          onChange={(e) => setValues({ ...values, company: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1.5 text-xs text-accent">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          WhatsApp / Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="need" className={labelClass}>
          What do you need? <span className="text-accent">*</span>
        </label>
        <select
          id="need"
          name="need"
          className={`${inputClass} appearance-none`}
          value={values.need}
          onChange={(e) => setValues({ ...values, need: e.target.value })}
          aria-invalid={Boolean(errors.need)}
          aria-describedby={errors.need ? "need-error" : undefined}
        >
          <option value="">Select an option</option>
          {needOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.need ? (
          <p id="need-error" className="mt-1.5 text-xs text-accent">
            {errors.need}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="details" className={labelClass}>
          Project details <span className="text-accent">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
          value={values.details}
          onChange={(e) => setValues({ ...values, details: e.target.value })}
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? "details-error" : undefined}
        />
        {errors.details ? (
          <p id="details-error" className="mt-1.5 text-xs text-accent">
            {errors.details}
          </p>
        ) : null}
      </div>

      <fieldset className="sm:col-span-2">
        <legend className={labelClass}>Preferred contact method</legend>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
          {contactMethods.map((method) => (
            <label
              key={method}
              className="flex cursor-pointer items-center gap-2.5 text-[0.875rem] text-muted"
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={values.contactMethod === method}
                onChange={(e) =>
                  setValues({ ...values, contactMethod: e.target.value })
                }
                className="h-3.5 w-3.5 accent-[#FF6D1F]"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex sm:col-span-2 sm:justify-start">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-sm bg-accent px-8 py-3 text-sm font-medium text-[#0B0D0F] transition-colors duration-200 hover:bg-[#ff7d35] sm:w-auto"
        >
          Book a Call
        </button>
      </div>
    </form>
  );
}
