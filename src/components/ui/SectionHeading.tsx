import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  titleClassName?: string;
};

export function SectionHeading({ eyebrow, title, text, align = "left", titleClassName }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-volt">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "text-balance font-industrial uppercase text-3xl font-normal leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-5xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-chrome sm:text-lg">{text}</p> : null}
    </div>
  );
}