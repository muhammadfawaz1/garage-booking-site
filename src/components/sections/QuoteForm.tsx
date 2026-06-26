"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { site } from "@/data/site";

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
          <select
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="h-12 rounded-lg border border-white/10 bg-graphite px-4 text-sm font-semibold text-white outline-none transition focus:border-volt"
          >
            <option>New tyres</option>
            <option>Puncture repair</option>
            <option>Wheel balancing</option>
            <option>TPMS sensor support</option>
            <option>Mobile tyre fitting</option>
            <option>Other tyre help</option>
          </select>
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
        <Send className="h-4 w-4" aria-hidden="true" />
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
