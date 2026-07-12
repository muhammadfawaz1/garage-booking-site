import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-electric/25 bg-white/[0.055] p-6 backdrop-blur",
        "shadow-[0_0_0_1px_rgba(56,138,221,0.15),0_0_18px_rgba(56,138,221,0.1)]",
        "transition duration-300 hover:-translate-y-1 hover:border-electric/60 hover:bg-white/[0.075] hover:shadow-[0_0_0_1px_rgba(56,138,221,0.35),0_0_28px_rgba(56,138,221,0.22)]",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-electric/40 before:to-transparent before:opacity-60 before:transition before:duration-300 hover:before:opacity-100 hover:before:via-electric/60",
        className
      )}
    >
      {children}
    </div>
  );
}