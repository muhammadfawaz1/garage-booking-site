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
    <section className="bg-white/[0.025] py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Modern equipment"
            title="Built for clean, rim-safe tyre fitting."
            text="GOGO TYRE focuses on new tyres fitted with equipment and processes designed for today’s wheels, including alloys that deserve more care than old-school lever methods."
          />
          <div className="grid gap-5">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <GlowCard key={point.title} className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-volt/30 bg-volt/10 text-volt">
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
