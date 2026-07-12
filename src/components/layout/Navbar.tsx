"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need a tyre quote.")}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-white/10 bg-graphite/84 backdrop-blur-xl">

      {/* Subtle tire texture, contained within the navbar only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-80 opacity-[0.14] [mask-image:linear-gradient(to_left,black,transparent)] lg:block"
        style={{
          backgroundImage: "url('/images/optimized/tyre.webp')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-40px center",
          backgroundSize: "260px auto",
          filter: "brightness(2.6) contrast(1.1) grayscale(20%)",
        }}
      />

      <nav className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="GOGO TYRE home">
          <span className="relative h-11 w-36 sm:w-44">
            <Image
              src={site.logo}
              alt="GOGO TYRE logo"
              fill
              sizes="(min-width: 640px) 176px, 144px"
              className="object-contain [mix-blend-mode:screen]"
              priority
            />
          </span>
          <span className="hidden text-[0.66rem] font-bold uppercase tracking-[0.2em] text-volt sm:block">Norwich</span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-semibold text-chrome transition hover:bg-white/10 hover:text-white",
                pathname === link.href && "bg-white/10 text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop: icon-only WhatsApp button */}
        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Quote"
            className="rounded-lg p-2 text-[#25D366] transition hover:bg-white/10"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="relative z-10 border-t border-white/10 bg-graphite/96 px-4 pb-6 pt-2 xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-semibold text-chrome transition hover:bg-white/10 hover:text-white",
                  pathname === link.href && "bg-white/10 text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile: icon-only WhatsApp link */}
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Quote"
              className="mt-3 inline-flex min-h-12 items-center justify-center rounded-lg text-[#25D366] transition hover:bg-white/10"
            >
              <WhatsAppIcon className="h-7 w-7" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}