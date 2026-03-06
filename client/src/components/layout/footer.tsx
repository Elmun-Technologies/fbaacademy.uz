import { Link } from "wouter";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { SiTelegram, SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-300 dark:bg-background dark:border-border" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                <span className="text-sm font-extrabold text-white">F</span>
              </div>
              <span className="text-lg font-extrabold text-white" data-testid="text-footer-brand">FBA Academy</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              ACCA, DipIFR, Financial Modeling, 1C va Huquqshunoslik bo'yicha professional kurslar.
            </p>
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

          <div>
            <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-courses-title">Kurslar</h4>
            <ul className="space-y-2.5">
              <li><Link href="/courses" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-all-courses">Barcha kurslar</Link></li>
              <li><Link href="/course/acca" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-acca">ACCA</Link></li>
              <li><Link href="/course/dipifr" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-dipifr">DipIFR</Link></li>
              <li><Link href="/course/financial-modeling" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-fm">Financial Modeling</Link></li>
              <li><Link href="/course/1c-course" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-1c">1C: Buxgalteriya</Link></li>
              <li><Link href="/course/jurisprudence" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-law">Huquqshunoslik</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-company-title">Kompaniya</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-about">Biz haqimizda</Link></li>
              <li><Link href="/teachers" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-teachers">O'qituvchilar</Link></li>
              <li><Link href="/career" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-career">Ishga joylashish</Link></li>
              <li><Link href="/case-studies" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-cases">Natijalar</Link></li>
              <li><Link href="/partnership" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-partnership">Hamkorlik</Link></li>
              <li><Link href="/corporate" className="text-sm text-slate-400 transition-colors hover:text-white" data-testid="link-footer-corporate">Korporativ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-white" data-testid="text-footer-contacts-title">Kontaktlar</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-purple-400" />
                <span data-testid="text-phone">+998 90 123 45 67</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-purple-400" />
                <span data-testid="text-email">info@fbaacademy.uz</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-purple-400" />
                <span data-testid="text-address">Toshkent sh., Amir Temur ko'chasi, 108-uy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-500" data-testid="text-copyright">
              &copy; 2026 FBA Academy. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/grants" className="text-xs text-slate-500 transition-colors hover:text-white" data-testid="link-footer-grants">Aksiyalar</Link>
              <Link href="/faq" className="text-xs text-slate-500 transition-colors hover:text-white" data-testid="link-footer-faq">FAQ</Link>
              <Link href="/blog" className="text-xs text-slate-500 transition-colors hover:text-white" data-testid="link-footer-blog">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
