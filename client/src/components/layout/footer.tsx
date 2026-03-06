import { useState } from "react";
import { Phone, Mail, MapPin, Check } from "lucide-react";
import { SiTelegram, SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";
import { useLanguage } from "@/contexts/language-context";

const COURSE_LINKS = [
  { href: "/courses", label: "Barcha kurslar" },
  { href: "/course/acca", label: "ACCA" },
  { href: "/course/dipifr", label: "DipIFR" },
  { href: "/course/financial-modeling", label: "Financial Modeling" },
  { href: "/course/1c-course", label: "1C: Buxgalteriya" },
  { href: "/course/jurisprudence", label: "Huquqshunoslik" },
];

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="border-t bg-slate-900 text-slate-300" data-testid="footer">
      {/* Newsletter strip */}
      <div className="border-b border-slate-800 bg-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="text-sm font-extrabold text-white">{t.common.subscribe}</div>
              <div className="text-xs text-slate-400 mt-0.5">{t.common.subscribeDesc}</div>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-full bg-green-600/20 border border-green-500/30 px-5 py-2.5 text-sm font-semibold text-green-300" data-testid="footer-subscribe-success">
                <Check className="h-4 w-4" /> Muvaffaqiyatli obuna bo'ldingiz!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto" data-testid="footer-subscribe-form">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.common.emailPlaceholder}
                  className="flex-1 rounded-full border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none sm:w-56"
                  data-testid="input-footer-email"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-purple-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-purple-700 transition-colors"
                  data-testid="button-footer-subscribe"
                >
                  {t.common.subscribeBtn}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="mb-4 inline-flex items-center gap-2" data-testid="link-footer-logo">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                <span className="text-sm font-extrabold text-white">F</span>
              </div>
              <span className="text-lg font-extrabold text-white" data-testid="text-footer-brand">FBA Academy</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{t.footer.description}</p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { href: "https://t.me/fbaacademy", icon: SiTelegram, id: "link-telegram", label: "Telegram" },
                { href: "https://instagram.com/fbaacademy", icon: SiInstagram, id: "link-instagram", label: "Instagram" },
                { href: "https://facebook.com/fbaacademy", icon: SiFacebook, id: "link-facebook", label: "Facebook" },
                { href: "https://youtube.com/@fbaacademy", icon: SiYoutube, id: "link-youtube", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-purple-600 hover:text-white"
                  data-testid={social.id}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Courses — native <a> for full page reload (SEO) */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-courses-title">{t.footer.courses}</h4>
            <ul className="space-y-2.5">
              {COURSE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-slate-400 transition-colors hover:text-white" data-testid={`link-footer-${href.split("/").pop()}`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company — native <a> for full page reload (SEO) */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-company-title">{t.footer.company}</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: t.nav.about },
                { href: "/teachers", label: t.nav.teachers },
                { href: "/career", label: t.footer.career },
                { href: "/achievements", label: t.nav.results },
                { href: "/partnership", label: t.footer.partnership },
                { href: "/corporate", label: t.footer.corporate },
                { href: "/blog", label: t.nav.blog },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-slate-400 transition-colors hover:text-white" data-testid={`link-footer-${href.replace("/", "")}`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-contacts-title">{t.footer.contacts}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-purple-400" />
                <a href="tel:+998781138090" className="hover:text-white transition-colors" data-testid="text-phone">
                  +998 78 113 80 90
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-purple-400" />
                <a href="mailto:fbaacademyuz1@gmail.com" className="hover:text-white transition-colors" data-testid="text-email">
                  fbaacademyuz1@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-purple-400" />
                <span data-testid="text-address">Toshkent sh., Yunusabad tumani</span>
              </li>
            </ul>

            <div className="mt-5">
              <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Til / Язык / Language</div>
              <div className="flex gap-3">
                {[
                  { flag: "🇺🇿", label: "O'z" },
                  { flag: "🇷🇺", label: "Ру" },
                  { flag: "🇬🇧", label: "En" },
                ].map((l) => (
                  <span key={l.label} className="text-xs text-slate-500 flex items-center gap-1" data-testid={`footer-lang-${l.label}`}>
                    {l.flag} {l.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-500" data-testid="text-copyright">
              &copy; 2026 FBA Academy. {t.footer.copyright}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a href="/grants" className="text-xs text-slate-500 transition-colors hover:text-white" data-testid="link-footer-grants">{t.footer.promotions}</a>
              <a href="/faq" className="text-xs text-slate-500 transition-colors hover:text-white" data-testid="link-footer-faq">FAQ</a>
              <a href="/blog" className="text-xs text-slate-500 transition-colors hover:text-white" data-testid="link-footer-blog-bottom">Blog</a>
              <span className="text-xs text-slate-500" data-testid="link-footer-privacy">{t.footer.privacy}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
