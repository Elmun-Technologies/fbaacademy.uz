import { cn } from "@/lib/utils";

/** Shared hover / motion class bundles — keep in sync with `index.css` `@layer components`. */
export const ix = {
  card: "ix-card",
  cardStrong: "ix-card-strong",
  cardBorder: "ix-card-border",
  media: "ix-media",
  mediaStrong: "ix-media-strong",
  link: "ix-link",
  linkAccent: "ix-link-accent",
  tile: "ix-tile",
  iconBtn: "ix-icon-btn",
  logo: "ix-logo",
  pillAmber: "ix-pill-amber",
  arrow: "ix-arrow",
  pageEnter: "page-enter",
} as const;

export function ixCn(...classes: Array<string | false | null | undefined>) {
  return cn(...classes);
}
