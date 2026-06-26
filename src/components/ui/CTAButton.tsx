import Link from "next/link";
import { ArrowRight, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: "arrow" | "phone" | "send";
  className?: string;
  external?: boolean;
};

const icons = {
  arrow: ArrowRight,
  phone: Phone,
  send: Send
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  icon = "arrow",
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
    className
  );

  return (
    <Link href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}
      <Icon className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
