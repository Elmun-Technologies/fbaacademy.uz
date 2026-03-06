import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiTelegram, SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-background" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <span className="text-lg font-bold" data-testid="text-footer-brand">FBA Academy</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              ACCA, DipIFR, Financial Modeling, 1C va Huquqshunoslik bo'yicha professional kurslar.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a href="https://t.me/fbaacademy" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-muted-foreground transition-colors dark:bg-slate-800" data-testid="link-telegram">
                <SiTelegram className="h-3.5 w-3.5" />
              </a>
              <a href="https://instagram.com/fbaacademy" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-muted-foreground transition-colors dark:bg-slate-800" data-testid="link-instagram">
                <SiInstagram className="h-3.5 w-3.5" />
              </a>
              <a href="https://facebook.com/fbaacademy" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-muted-foreground transition-colors dark:bg-slate-800" data-testid="link-facebook">
                <SiFacebook className="h-3.5 w-3.5" />
              </a>
              <a href="https://youtube.com/fbaacademy" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-muted-foreground transition-colors dark:bg-slate-800" data-testid="link-youtube">
                <SiYoutube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold" data-testid="text-footer-courses-title">Kurslar</h4>
            <ul className="space-y-2.5">
              <li><Link href="/courses" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-all-courses">Barcha kurslar</Link></li>
              <li><Link href="/course/acca" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-acca">ACCA</Link></li>
              <li><Link href="/course/dipifr" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-dipifr">DipIFR</Link></li>
              <li><Link href="/course/financial-modeling" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-fm">Financial Modeling</Link></li>
              <li><Link href="/course/1c-course" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-1c">1C: Buxgalteriya</Link></li>
              <li><Link href="/course/jurisprudence" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-law">Huquqshunoslik</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold" data-testid="text-footer-company-title">Kompaniya</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-about">Biz haqimizda</Link></li>
              <li><Link href="/teachers" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-teachers">O'qituvchilar</Link></li>
              <li><Link href="/career" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-career">Ishga joylashish</Link></li>
              <li><Link href="/case-studies" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-cases">Natijalar</Link></li>
              <li><Link href="/partnership" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-partnership">Hamkorlik</Link></li>
              <li><Link href="/corporate" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-corporate">Korporativ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold" data-testid="text-footer-contacts-title">Kontaktlar</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span data-testid="text-phone">+998 90 123 45 67</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span data-testid="text-email">info@fbaacademy.uz</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span data-testid="text-address">Toshkent sh., Amir Temur ko'chasi, 108-uy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground" data-testid="text-copyright">
              &copy; 2026 FBA Academy. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/grants" className="text-xs text-muted-foreground transition-colors" data-testid="link-footer-grants">Aksiyalar</Link>
              <Link href="/faq" className="text-xs text-muted-foreground transition-colors" data-testid="link-footer-faq">FAQ</Link>
              <Link href="/blog" className="text-xs text-muted-foreground transition-colors" data-testid="link-footer-blog">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
