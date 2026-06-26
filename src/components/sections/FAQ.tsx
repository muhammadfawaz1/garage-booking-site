import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FAQProps = {
  items: { question: string; answer: string }[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Straight answers before you book"
          text="Quick guidance on common tyre questions. For vehicle-specific advice, WhatsApp your tyre size or registration."
          align="center"
        />
        <div className="mt-10 divide-y divide-white/10 rounded-lg border border-white/10 bg-white/[0.04]">
          {items.map((item) => (
            <details key={item.question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold text-white">
                {item.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-volt transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 leading-7 text-chrome">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
