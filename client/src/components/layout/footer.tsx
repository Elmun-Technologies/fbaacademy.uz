import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiTelegram, SiInstagram, SiFacebook, SiYoutube, SiLinkedin } from "react-icons/si";
import { useLanguage } from "@/contexts/language-context";
import { COMPANY_LOGO_URL } from "@/lib/branding";
import { resolveBundledPublicUrl } from "@/lib/public-media";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, CONTACT_EMAIL, CONTACT_EMAIL_HREF, CONTACT_ADDRESS, SOCIAL_LINKS } from "@/lib/constants";

const COURSE_LINKS = [
  { href: "/courses", uz: "Barcha kurslar", ru: "Все курсы", en: "All courses" },
  { href: "/course/acca", uz: "ACCA", ru: "ACCA", en: "ACCA" },
  { href: "/course/dipifr", uz: "DipIFR", ru: "DipIFR", en: "DipIFR" },
  { href: "/course/msfo", uz: "МСФО", ru: "МСФО", en: "IFRS Course" },
  { href: "/courses", uz: "Financial Analyst", ru: "Financial Analyst", en: "Financial Analyst" },
];

export default function Footer() {
  const { t, lang } = useLanguage();
  const gl = (item: { uz: string; ru: string; en: string }) =>
    lang === "ru" ? item.ru : lang === "en" ? item.en : item.uz;

  return (
    <footer className="border-t bg-slate-900 text-slate-300" data-testid="footer">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="ix-logo mb-4 inline-flex items-center" data-testid="link-footer-logo">
              <img
                src={resolveBundledPublicUrl(COMPANY_LOGO_URL)}
                alt="FBA Academy"
                className="h-14 w-auto max-w-[200px] rounded-md object-contain object-left"
                width={200}
                height={48}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{t.footer.description}</p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { href: SOCIAL_LINKS.telegram, icon: SiTelegram, id: "link-telegram", label: "Telegram" },
                { href: SOCIAL_LINKS.instagram, icon: SiInstagram, id: "link-instagram", label: "Instagram" },
                { href: SOCIAL_LINKS.facebook, icon: SiFacebook, id: "link-facebook", label: "Facebook" },
                { href: SOCIAL_LINKS.youtube, icon: SiYoutube, id: "link-youtube", label: "YouTube" },
                { href: SOCIAL_LINKS.linkedin, icon: SiLinkedin, id: "link-linkedin", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="ix-icon-btn flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-brand hover:text-white"
                  data-testid={social.id}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links block (mobile: 2 columns) */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-courses-title">{t.footer.courses}</h4>
              <ul className="space-y-2.5">
                {COURSE_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-slate-400 ix-link" data-testid={`link-footer-${item.href.split("/").pop()}`}>
                      {gl(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-company-title">{t.footer.company}</h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/about", label: t.nav.about },
                  { href: "/teachers", label: t.nav.teachers },
                  { href: "/career", label: t.footer.career },
                  { href: "/case-studies", label: t.nav.results },
                  { href: "/partnership", label: t.footer.partnership },
                  { href: "/corporate", label: t.footer.corporate },
                  { href: "/blog", label: t.nav.blog },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-slate-400 ix-link" data-testid={`link-footer-${href.replace("/", "")}`}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-4">
            <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-contacts-title">{t.footer.contacts}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-brand-accent" />
                <a href={CONTACT_PHONE_TEL} className="hover:text-white transition-colors" data-testid="text-phone">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-brand-accent" />
                <a href={CONTACT_EMAIL_HREF} className="hover:text-white transition-colors" data-testid="text-email">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-accent" />
                <span data-testid="text-address">
                  {lang === "ru" ? CONTACT_ADDRESS.ru : lang === "en" ? CONTACT_ADDRESS.en : CONTACT_ADDRESS.uz}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-500" data-testid="text-copyright">
              &copy; 2026 FBA Academy. {t.footer.copyright}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/faq" className="text-xs text-slate-500 ix-link" data-testid="link-footer-faq">{t.nav.faq}</Link>
              <Link href="/blog" className="text-xs text-slate-500 ix-link" data-testid="link-footer-blog-bottom">{t.nav.blog}</Link>
              <Link href="/privacy" className="text-xs text-slate-500 ix-link" data-testid="link-footer-privacy">{t.footer.privacy}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
