import { ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    title: "Leverless fitting equipment",
    text: "Modern machinery reduces manual contact with the wheel lip during fitting.",
    icon: Wrench
  },
  {
    title: "Rim-safe approach",
    text: "A careful fitting process helps protect alloy wheels and premium finishes.",
    icon: ShieldCheck
  },
  {
    title: "No levers, no scratches",
    text: "Cleaner tyre fitting for drivers who care about the condition of their wheels.",
    icon: Sparkles
  }
];

export function ModernEquipment() {
  return (
    <section className="relative isolate overflow-hidden py-20">

      {/* Section base — slightly lighter than pure black for separation */}
      <div className="absolute inset-0 bg-[#0e0e10]" />

      {/* Background image — low opacity so only atmosphere comes through */}
      <img
        src="/images/Homepage_Services_Overview_Image.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.23]"
      />

      {/* Heavy dark overlay — keeps image as texture, not photo */}
      <div className="absolute inset-0 bg-graphite/[0.88]" />

      {/* Left fade — darkens behind the text so it stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 via-graphite/40 to-transparent" />

      {/* Top/bottom fades to blend with adjacent sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-graphite/60 via-transparent to-graphite/60" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Modern equipment"
            title="Built for clean, rim-safe tyre fitting."
            text="GOGO TYRE focuses on new tyres fitted with equipment and processes designed for today's wheels, including alloys that deserve more care than old-school lever methods."
          />
          <div className="grid gap-5">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <GlowCard key={point.title} className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-volt/40 bg-volt/10 text-volt shadow-[0_0_12px_rgba(180,255,0,0.15)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span>
                    <h3 className="text-lg font-black text-white">{point.title}</h3>
                    <p className="mt-2 leading-7 text-chrome">{point.text}</p>
                  </span>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}