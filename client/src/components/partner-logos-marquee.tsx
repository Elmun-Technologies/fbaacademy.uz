import PartnerCompanyTile from "@/components/partner-company-tile";
import { PARTNER_COMPANY_DISPLAY_ORDER } from "@/lib/partner-logos";
import { cn } from "@/lib/utils";

type PartnerLogosMarqueeProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  /** Tailwind `from-*` color for edge fade, e.g. `from-[#0d0d0d]` */
  fadeFrom?: string;
  testId?: string;
  headingClassName?: string;
  compactHeading?: boolean;
};

export default function PartnerLogosMarquee({
  title,
  subtitle,
  className,
  fadeFrom = "from-[#0d0d0d]",
  testId = "section-partner-logos-marquee",
  headingClassName,
  compactHeading = false,
}: PartnerLogosMarqueeProps) {
  const names = [...PARTNER_COMPANY_DISPLAY_ORDER];

  return (
    <section className={cn("overflow-hidden", className)} data-testid={testId}>
      {(title || subtitle) && (
        <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", subtitle ? "mb-8" : "mb-6")}>
          {title ? (
            <h2
              className={cn(
                compactHeading
                  ? "text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 sm:text-sm"
                  : "text-2xl font-extrabold text-white sm:text-3xl",
                headingClassName,
              )}
            >
              {title}
            </h2>
          ) : null}
          {subtitle ? <p className="mt-2 text-sm text-zinc-400 sm:text-base">{subtitle}</p> : null}
        </div>
      )}

      <div className="relative">
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent sm:w-20",
            fadeFrom,
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent sm:w-20",
            fadeFrom,
          )}
        />
        <div className="flex animate-marquee gap-4 sm:gap-6" style={{ width: "max-content" }}>
          {names.map((name, i) => (
            <PartnerCompanyTile key={`${name}-${i}`} name={name} className="border-0" />
          ))}
          {names.map((name, i) => (
            <PartnerCompanyTile key={`${name}-${i}-dup`} name={name} className="border-0" />
          ))}
        </div>
      </div>
    </section>
  );
}
