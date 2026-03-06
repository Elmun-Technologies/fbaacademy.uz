import { Link } from "wouter";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import { SiTelegram, SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-card" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-indigo-600">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold" data-testid="text-footer-brand">FBA Academy</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Zamonaviy kasblarni 0 dan o'rganing. Marketing, IT va dizayn yo'nalishlari bo'yicha amaliy kurslar.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://t.me/fbaacademy" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-muted-foreground transition-colors hover-elevate" data-testid="link-telegram">
                <SiTelegram className="h-4 w-4" />
              </a>
              <a href="https://instagram.com/fbaacademy" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-muted-foreground transition-colors hover-elevate" data-testid="link-instagram">
                <SiInstagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com/fbaacademy" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-muted-foreground transition-colors hover-elevate" data-testid="link-facebook">
                <SiFacebook className="h-4 w-4" />
              </a>
              <a href="https://youtube.com/fbaacademy" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-muted-foreground transition-colors hover-elevate" data-testid="link-youtube">
                <SiYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold" data-testid="text-footer-courses-title">Kurslar</h4>
            <ul className="space-y-2.5">
              <li><Link href="/courses" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-all-courses">Barcha kurslar</Link></li>
              <li><Link href="/course/smm-mutaxassis" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-smm">SMM kursi</Link></li>
              <li><Link href="/course/web-dasturlash" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-web">Web dasturlash</Link></li>
              <li><Link href="/course/grafik-dizayn" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-design">Grafik dizayn</Link></li>
              <li><Link href="/course/biznes-boshqaruv" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-business">Biznes kursi</Link></li>
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
