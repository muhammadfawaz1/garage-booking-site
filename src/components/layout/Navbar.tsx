"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi GOGO TYRE, I need a tyre quote.")}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-graphite/84 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="GOGO TYRE home">
          <span className="relative h-11 w-36 sm:w-44">
            <Image
              src={site.logo}
              alt="GOGO TYRE logo"
              fill
              sizes="(min-width: 640px) 176px, 144px"
              className="object-contain brightness-125 contrast-110 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
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

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-volt px-5 text-sm font-black text-graphite shadow-volt transition hover:bg-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp Quote
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
        <div id="mobile-menu" className="border-t border-white/10 bg-graphite/96 px-4 pb-6 pt-2 xl:hidden">
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
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-volt px-5 text-sm font-black text-graphite"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}