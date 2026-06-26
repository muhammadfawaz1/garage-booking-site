import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-electric/50 hover:bg-white/[0.075]",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-electric/70 before:to-transparent",
        className
      )}
    >
      {children}
    </div>
  );
}
