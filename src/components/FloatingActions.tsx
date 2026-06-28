"use client";

import { useState } from "react";
import { MessageCircle, Phone, MapPin, X } from "lucide-react";
import { site } from "@/data/site";

const actions = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.523 5.853L.057 23.215a.75.75 0 0 0 .908.908l5.42-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.236-1.385l-.374-.217-3.876 1.046 1.052-3.826-.234-.386A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
    href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need a tyre quote.")}`,
    bg: "bg-[#25D366]",
    hoverBg: "hover:bg-[#1ebe5d]",
    shadow: "shadow-[0_4px_20px_rgba(37,211,102,0.5)]",
  },
  {
    key: "phone",
    label: "Call us",
    icon: <Phone className="h-5 w-5" aria-hidden="true" />,
    href: site.phoneHref,
    bg: "bg-volt",
    hoverBg: "hover:bg-white hover:text-graphite",
    shadow: "shadow-[0_4px_20px_rgba(190,255,0,0.4)]",
  },
  {
    key: "map",
    label: "Directions",
    icon: <MapPin className="h-5 w-5" aria-hidden="true" />,
    href: site.mapsUrl,
    bg: "bg-blue-500",
    hoverBg: "hover:bg-blue-400",
    shadow: "shadow-[0_4px_20px_rgba(59,130,246,0.5)]",
  },
];

export function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* Action buttons — visible when open */}
      {actions.map((action, i) => (
        <a
          key={action.key}
          href={action.href}
          target="_blank"
          rel="noreferrer"
          aria-label={action.label}
          className={[
            "group relative flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-300",
            action.bg,
            action.hoverBg,
            action.shadow,
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-75 opacity-0",
          ].join(" ")}
          style={{ transitionDelay: open ? `${i * 60}ms` : `${(actions.length - 1 - i) * 40}ms` }}
        >
          {action.icon}
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-full bg-graphite px-3 py-1 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            {action.label}
          </span>
        </a>
      ))}

      {/* Main toggle button */}
      <button
        type="button"
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={[
          "flex h-14 w-14 items-center justify-center rounded-full text-graphite shadow-[0_4px_24px_rgba(190,255,0,0.5)] transition-all duration-300",
          "bg-volt hover:bg-white",
          open ? "rotate-45" : "rotate-0",
        ].join(" ")}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}