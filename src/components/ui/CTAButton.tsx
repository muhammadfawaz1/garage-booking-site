import Link from "next/link";
import { ArrowRight, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "quote";
  icon?: "arrow" | "phone" | "send" | "whatsapp" | "pin";
  iconPosition?: "left" | "right";
  className?: string;
  external?: boolean;
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.48 1.34 5L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.08c-.24.68-1.4 1.33-1.93 1.4-.5.07-1.12.1-1.8-.11-.42-.13-.95-.3-1.64-.6-2.88-1.24-4.76-4.16-4.9-4.35-.14-.19-1.17-1.55-1.17-2.96 0-1.4.73-2.09 1-2.38.24-.28.53-.35.71-.35.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.57.81 1.98.88 2.12.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.86.27.14.44.2.51.32.07.11.07.65-.17 1.33Z" />
    </svg>
  );
}

const icons = {
  arrow: ArrowRight,
  phone: Phone,
  send: Send,
  whatsapp: WhatsAppIcon,
  pin: MapPin
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  iconPosition = "right",
  className,
  external
}: CTAButtonProps) {
  const Icon = icons[icon];
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt",
    variant === "primary" &&
      "bg-volt text-graphite shadow-volt hover:bg-white hover:shadow-glow",
    variant === "secondary" &&
      "border border-white/20 bg-white/10 text-white hover:border-electric/70 hover:bg-electric/15",
    variant === "ghost" && "text-chrome hover:text-white",
    variant === "quote" &&
      "border-2 border-volt/50 bg-graphite text-volt shadow-[0_0_25px_-4px_rgba(190,255,60,0.45)] hover:border-volt hover:bg-volt hover:text-graphite hover:shadow-volt",
    className
  );

  const iconEl = (
    <Icon
      className={cn("h-4 w-4 transition", iconPosition === "right" && "group-hover:translate-x-0.5")}
      aria-hidden="true"
    />
  );

  return (
    <Link href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {iconPosition === "left" && iconEl}
      {children}
      {iconPosition === "right" && iconEl}
    </Link>
  );
}