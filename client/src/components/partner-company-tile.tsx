import { partnerCompanyLogoSrc } from "@/lib/partner-logos";
import { cn } from "@/lib/utils";

type PartnerCompanyTileProps = {
  name: string;
  className?: string;
};

export default function PartnerCompanyTile({ name, className }: PartnerCompanyTileProps) {
  const src = partnerCompanyLogoSrc(name);
  const id = name.replace(/\s+/g, "-").toLowerCase();

  if (!src) return null;

  return (
    <div
      className={cn(
        "group ix-tile flex h-20 w-44 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white px-2 shadow-md sm:h-24 sm:w-52 sm:px-3",
        className,
      )}
      data-testid={`partner-${id}`}
    >
      <img
        src={src}
        alt={`${name} logo`}
        className="ix-media-strong h-14 w-auto max-w-[96%] object-contain object-center sm:h-[4.25rem]"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
