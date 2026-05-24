import { cn } from "@/lib/utils";
import { ix } from "@/lib/interactive-styles";

type InteractiveCardProps = React.ComponentPropsWithoutRef<"article"> & {
  strong?: boolean;
  bordered?: boolean;
};

export function InteractiveCard({ strong, bordered, className, ...props }: InteractiveCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl",
        strong ? ix.cardStrong : bordered ? ix.cardBorder : ix.card,
        className,
      )}
      {...props}
    />
  );
}

export function InteractiveCardMedia({
  className,
  strong,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & { strong?: boolean }) {
  return <img className={cn(strong ? ix.mediaStrong : ix.media, className)} {...props} />;
}

export function InteractivePillCta({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-amber-400/70 px-4 py-2 text-xs font-bold text-amber-400",
        ix.pillAmber,
        className,
      )}
      {...props}
    />
  );
}
