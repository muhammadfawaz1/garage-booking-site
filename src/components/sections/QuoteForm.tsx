"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, ChevronDown, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.48 1.34 5L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.08c-.24.68-1.4 1.33-1.93 1.4-.5.07-1.12.1-1.8-.11-.42-.13-.95-.3-1.64-.6-2.88-1.24-4.76-4.16-4.9-4.35-.14-.19-1.17-1.55-1.17-2.96 0-1.4.73-2.09 1-2.38.24-.28.53-.35.71-.35.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.57.81 1.98.88 2.12.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.86.27.14.44.2.51.32.07.11.07.65-.17 1.33Z" />
    </svg>
  );
}

type FormState = {
  name: string;
  phone: string;
  email: string;
  registration: string;
  tyreSize: string;
  service: string;
  preferredTime: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  registration: "",
  tyreSize: "",
  service: "New tyres",
  preferredTime: "",
  message: ""
};

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const whatsappMessage = useMemo(() => {
    return `Hi GOGO TYRE, I need a tyre quote.
Name: ${form.name}
Vehicle registration: ${form.registration}
Tyre size: ${form.tyreSize}
Service needed: ${form.service}
Preferred time: ${form.preferredTime}
Message: ${form.message}`;
  }, [form]);

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  function updateField(field: keyof FormState, value: string) {
    setSubmitted(false);
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Replace this demo success state with a real email/API integration when credentials are available.
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-glow sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" value={form.name} onChange={(value) => updateField("name", value)} required />
        <Field label="Phone" type="tel" value={form.phone} onChange={(value) => updateField("phone", value)} required />
        <Field label="Email" type="email" value={form.email} onChange={(value) => updateField("email", value)} />
        <Field
          label="Vehicle registration"
          value={form.registration}
          onChange={(value) => updateField("registration", value)}
          placeholder="AB12 CDE"
        />
        <Field
          label="Tyre size"
          value={form.tyreSize}
          onChange={(value) => updateField("tyreSize", value)}
          placeholder="205/55 R16"
        />
        <label className="grid gap-2 text-sm font-bold text-white">
          Service needed
          <div className="relative">
            <select
              value={form.service}
              onChange={(event) => updateField("service", event.target.value)}
              className="h-12 w-full cursor-pointer appearance-none rounded-lg border border-white/10 bg-graphite pl-4 pr-10 text-sm font-semibold text-white outline-none transition hover:border-white/30 focus:border-volt focus:ring-2 focus:ring-volt/25"
            >
              <option>New tyres</option>
              <option>Puncture repair</option>
              <option>Wheel balancing</option>
              <option>TPMS sensor support</option>
              <option>Mobile tyre fitting</option>
              <option>Other tyre help</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-volt transition"
              aria-hidden="true"
            />
          </div>
        </label>
        <Field
          label="Preferred date/time"
          value={form.preferredTime}
          onChange={(value) => updateField("preferredTime", value)}
          placeholder="Today after 2 PM"
          className="sm:col-span-2"
        />
        <label className="grid gap-2 text-sm font-bold text-white sm:col-span-2">
          Message
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={4}
            className="resize-none rounded-lg border border-white/10 bg-graphite px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-chrome/60 focus:border-volt"
            placeholder="Tell us what you need, where the vehicle is, or upload details by WhatsApp after submitting."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-volt px-5 text-sm font-black text-graphite shadow-volt transition hover:bg-white sm:w-auto"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Get Quote
      </button>

      {submitted ? (
        <div className="mt-5 rounded-lg border border-volt/30 bg-volt/10 p-4">
          <p className="flex items-center gap-2 font-bold text-white">
            <CheckCircle2 className="h-5 w-5 text-volt" aria-hidden="true" />
            Thanks. Your quote details are ready.
          </p>
          <p className="mt-2 text-sm leading-6 text-chrome">
            This demo form is not connected to email yet. Send the details directly on WhatsApp for the fastest response.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-black text-graphite transition hover:bg-volt"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Send on WhatsApp
          </a>
        </div>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

function Field({ label, value, onChange, type = "text", required, placeholder, className }: FieldProps) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-white ${className ?? ""}`}>
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-lg border border-white/10 bg-graphite px-4 text-sm font-semibold text-white outline-none transition placeholder:text-chrome/60 focus:border-volt"
      />
    </label>
  );
}