import { useState } from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Check } from "lucide-react";
import { SiTelegram, SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";
import { useLanguage } from "@/contexts/language-context";

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
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                <span className="text-sm font-extrabold text-white">F</span>
              </div>
              <span className="text-lg font-extrabold text-white" data-testid="text-footer-brand">FBA Academy</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{t.footer.description}</p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { href: "https://t.me/fbaacademy", icon: SiTelegram, id: "link-telegram" },
                { href: "https://instagram.com/fbaacademy", icon: SiInstagram, id: "link-instagram" },
                { href: "https://facebook.com/fbaacademy", icon: SiFacebook, id: "link-facebook" },
                { href: "https://youtube.com/fbaacademy", icon: SiYoutube, id: "link-youtube" },
              ].map((social) => (
                <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-purple-600 hover:text-white" data-testid={social.id}>
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-courses-title">{t.footer.courses}</h4>
            <ul className="space-y-2.5">
              <li><Link href="/courses" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-all-courses">{t.footer.allCourses}</Link></li>
              <li><Link href="/course/acca" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-acca">ACCA</Link></li>
              <li><Link href="/course/dipifr" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-dipifr">DipIFR</Link></li>
              <li><Link href="/course/financial-modeling" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-fm">Financial Modeling</Link></li>
              <li><Link href="/course/1c-course" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-1c">1C: Buxgalteriya</Link></li>
              <li><Link href="/course/jurisprudence" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-law">Huquqshunoslik</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-company-title">{t.footer.company}</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-about">{t.nav.about}</Link></li>
              <li><Link href="/teachers" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-teachers">{t.nav.teachers}</Link></li>
              <li><Link href="/career" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-career">{t.footer.career}</Link></li>
              <li><Link href="/case-studies" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-cases">{t.nav.results}</Link></li>
              <li><Link href="/partnership" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-partnership">{t.footer.partnership}</Link></li>
              <li><Link href="/corporate" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-corporate">{t.footer.corporate}</Link></li>
              <li><Link href="/blog" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-blog">{t.nav.blog}</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-contacts-title">{t.footer.contacts}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-purple-400" />
                <a href="tel:+998901234567" className="hover:text-white transition-colors" data-testid="text-phone">+998 90 123 45 67</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-purple-400" />
                <a href="mailto:info@fbaacademy.uz" className="hover:text-white transition-colors" data-testid="text-email">info@fbaacademy.uz</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-purple-400" />
                <span data-testid="text-address">Toshkent sh., Amir Temur ko'chasi, 108-uy</span>
              </li>
            </ul>

            {/* Languages in footer */}
            <div className="mt-5">
              <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Til / Язык / Language</div>
              <div className="flex gap-2">
                {[
                  { href: "/", flag: "🇺🇿", label: "O'zbekcha" },
                  { href: "/", flag: "🇷🇺", label: "Русский" },
                  { href: "/", flag: "🇬🇧", label: "English" },
                ].map((l) => (
                  <span key={l.label} className="text-xs text-slate-500 hover:text-white cursor-pointer transition-colors flex items-center gap-1" data-testid={`footer-lang-${l.label}`}>
                    {l.flag}
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
              <Link href="/grants" className="text-xs text-slate-500 transition-colors hover:text-white" data-testid="link-footer-grants">{t.footer.promotions}</Link>
              <Link href="/faq" className="text-xs text-slate-500 transition-colors hover:text-white" data-testid="link-footer-faq">FAQ</Link>
              <Link href="/blog" className="text-xs text-slate-500 transition-colors hover:text-white" data-testid="link-footer-blog-bottom">Blog</Link>
              <span className="text-xs text-slate-500 cursor-pointer hover:text-white transition-colors" data-testid="link-footer-privacy">{t.footer.privacy}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
