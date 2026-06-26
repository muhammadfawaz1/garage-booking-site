import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

export function StickyMobileCTA() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need a tyre quote.")}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-graphite/92 p-3 backdrop-blur-xl sm:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-volt px-4 text-sm font-black text-graphite"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={site.phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 text-sm font-black text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
      </div>
    </div>
  );
}
