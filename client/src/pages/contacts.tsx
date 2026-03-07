import { useSEO } from "@/hooks/use-seo";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import LeadForm from "@/components/lead-form";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle, HelpCircle, BookOpen, ChevronRight } from "lucide-react";
import { SiTelegram, SiInstagram, SiYoutube } from "react-icons/si";

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+998 78 113 80 90",
    sub: "Dush–Shan: 9:00–18:00",
    color: "from-blue-500 to-cyan-500",
    href: "tel:+998781138090",
    cta: "Qo'ng'iroq qilish",
  },
  {
    icon: Mail,
    title: "Email",
    value: "fbaacademy@gmail.com",
    sub: "24 soat ichida javob",
    color: "from-purple-500 to-pink-500",
    href: "mailto:fbaacademy@gmail.com",
    cta: "Xat yozish",
  },
  {
    icon: MapPin,
    title: "Manzil",
    value: "Yunusabad, Toshkent",
    sub: "O'zbekiston, 100000",
    color: "from-emerald-500 to-teal-500",
    href: "https://maps.google.com/?q=41.2995,69.2401",
    cta: "Xaritada ko'rish",
  },
  {
    icon: Clock,
    title: "Ish vaqti",
    value: "Dushanba — Shanba",
    sub: "9:00 dan 18:00 gacha",
    color: "from-amber-500 to-orange-500",
    href: undefined,
    cta: undefined,
  },
];

const SOCIAL_CHANNELS = [
  {
    icon: SiTelegram,
    name: "Telegram",
    handle: "@fbaacademy",
    desc: "Yangiliklar va bepul darslar",
    href: "https://t.me/fbaacademy",
    color: "from-blue-500 to-blue-600",
    hoverBorder: "hover:border-blue-500/50",
  },
  {
    icon: SiInstagram,
    name: "Instagram",
    handle: "@fbaacademy_uz",
    desc: "Bitiruvchi muvaffaqiyatlari",
    href: "https://instagram.com/fbaacademy",
    color: "from-pink-500 to-rose-600",
    hoverBorder: "hover:border-pink-500/50",
  },
  {
    icon: SiYoutube,
    name: "YouTube",
    handle: "FBA Academy",
    desc: "Bepul video darslar",
    href: "https://youtube.com/@fbaacademy",
    color: "from-red-500 to-red-600",
    hoverBorder: "hover:border-red-500/50",
  },
];

const QUICK_LINKS = [
  { label: "ACCA kursi", href: "/course/acca", color: "text-purple-400" },
  { label: "DipIFR kursi", href: "/course/dipifr", color: "text-indigo-400" },
  { label: "Financial Modeling", href: "/course/financial-modeling", color: "text-emerald-400" },
  { label: "1C: Buxgalteriya", href: "/course/1c-course", color: "text-blue-400" },
  { label: "Huquqshunoslik", href: "/course/jurisprudence", color: "text-amber-400" },
  { label: "Ko'p so'raladigan savollar", href: "/faq", color: "text-zinc-300" },
];

export default function Contacts() {
  useSEO({
    title: "Bog'lanish — FBA Academy | Toshkent, +998 78 113 80 90",
    description: "FBA Academy bilan bog'laning. ACCA, DipIFR, Financial Modeling kurslari haqida bepul konsultatsiya. Toshkent, Yunusabad. Tel: +998 78 113 80 90.",
    keywords: "FBA Academy kontakt, ACCA konsultatsiya, moliya ta'lim Toshkent, DipIFR ro'yxatdan o'tish, bog'lanish",
    breadcrumb: [{ name: "Bog'lanish", url: "https://fbaacademy.uz/contacts" }],
    jsonLd: {
      "@type": "LocalBusiness",
      "@id": "https://fbaacademy.uz/#localbusiness",
      "name": "FBA Academy",
      "description": "O'zbekistondagi yetakchi moliya ta'lim platformasi. ACCA, DipIFR, Financial Modeling kurslari.",
      "url": "https://fbaacademy.uz",
      "image": "https://fbaacademy.uz/og-image.svg",
      "telephone": "+998781138090",
      "email": "fbaacademy@gmail.com",
      "priceRange": "$$",
      "currenciesAccepted": "UZS",
      "paymentAccepted": "Cash, Bank Transfer, Click, Payme",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Yunusabad tumani",
        "addressLocality": "Toshkent",
        "addressRegion": "Toshkent viloyati",
        "postalCode": "100000",
        "addressCountry": "UZ",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.2995,
        "longitude": 69.2401,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00",
        },
      ],
      "sameAs": [
        "https://t.me/fbaacademy",
        "https://instagram.com/fbaacademy",
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "5000",
        "bestRating": "5",
      },
    },
  });

  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 py-16 sm:py-24" data-testid="section-contacts-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Bog'lanish" }]} light />
          </div>
          <div className="mb-4 inline-block rounded-full border border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm font-semibold text-purple-200 backdrop-blur-sm">
            Biz bilan aloqa
          </div>
          <h1 className="mb-4 text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl lg:text-7xl" data-testid="text-contacts-title">
            Bog'laning
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            Savollaringiz bormi? Kurslardan biri qiziqtirdimi? Biz javob berishdan mamnunmiz — tez yordam beramiz.
          </p>

          {/* Quick action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+998781138090"
              className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              data-testid="button-hero-call"
            >
              <Phone className="h-4 w-4 text-blue-300" />
              +998 78 113 80 90
            </a>
            <a
              href="https://t.me/fbaacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-blue-600/80 border border-blue-500/50 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-blue-600"
              data-testid="button-hero-telegram"
            >
              <SiTelegram className="h-4 w-4" />
              Telegram orqali
            </a>
          </div>
        </div>
      </section>

      {/* ===== 4 CONTACT CARDS ===== */}
      <section className="bg-[#0d0d0d] py-10" data-testid="section-contact-cards">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300 hover:border-white/25 hover:shadow-xl"
                data-testid={`card-contact-${i}`}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{item.title}</p>
                <p className="mt-1 text-base font-bold text-white leading-snug">{item.value}</p>
                <p className="mt-0.5 text-xs text-zinc-400">{item.sub}</p>
                {item.href && item.cta && (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-4 flex items-center gap-1.5 text-xs font-bold text-purple-400 transition-colors hover:text-purple-300"
                    data-testid={`link-contact-card-${i}`}
                  >
                    {item.cta} <ArrowRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORM + MAP ===== */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-form-map">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Form */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8" data-testid="card-contact-form">
              <div className="mb-5">
                <div className="mb-1 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-purple-400" />
                  <h2 className="text-xl font-extrabold text-white">Bepul konsultatsiya</h2>
                </div>
                <p className="text-sm text-zinc-400">
                  Mutaxassisimiz 1 soat ichida bog'lanadi va barcha savollarni javoblaydi
                </p>
              </div>

              <LeadForm source="contacts" />

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                <span className="mt-0.5 text-lg">💡</span>
                <p className="text-xs text-amber-200 leading-relaxed">
                  Konsultatsiya mutlaqo bepul. Hech qanday majburiyat yo'q — faqat savol-javob va to'g'ri yo'l ko'rsatish.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900" data-testid="card-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0!2d69.2701!3d41.3365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIwJzExLjQiTiA2OcKwMTYnMTIuNCJF!5e0!3m2!1suz!2suz!4v1699999999999!5m2!1suz!2suz"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FBA Academy manzili — Yunusabad, Toshkent"
                  data-testid="iframe-map"
                />
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <p className="font-bold text-white">FBA Academy</p>
                      <p className="text-sm text-zinc-400">Yunusabad tumani, Toshkent, O'zbekiston</p>
                      <a
                        href="https://maps.google.com/?q=41.2995,69.2401"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                        data-testid="link-open-maps"
                      >
                        Google Maps da ochish <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working hours detail */}
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5" data-testid="card-working-hours">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-amber-400" />
                  <h3 className="font-bold text-white">Ish vaqti</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Dushanba — Juma", time: "9:00 — 18:00", active: true },
                    { day: "Shanba", time: "10:00 — 16:00", active: true },
                    { day: "Yakshanba", time: "Dam olish kuni", active: false },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-sm" data-testid={`row-hours-${i}`}>
                      <span className="text-zinc-400">{row.day}</span>
                      <span className={`font-semibold ${row.active ? "text-white" : "text-zinc-600"}`}>{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL CHANNELS ===== */}
      <section className="bg-[#0d0d0d] py-14" data-testid="section-social">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-3xl font-extrabold uppercase tracking-tight text-white">Ijtimoiy tarmoqlar</h2>
          <p className="mb-8 text-zinc-400">Yangiliklar, bepul darslar va bitiruvchi muvaffaqiyatlari</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {SOCIAL_CHANNELS.map((ch, i) => (
              <a
                key={i}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-5 transition-all duration-300 ${ch.hoverBorder} hover:shadow-xl`}
                data-testid={`link-social-${ch.name.toLowerCase()}`}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${ch.color} shadow-lg transition-transform group-hover:scale-110`}>
                  <ch.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white">{ch.name}</p>
                  <p className="text-sm text-zinc-400">{ch.handle}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{ch.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-zinc-300" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="bg-[#111] py-14" data-testid="section-quick-links">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Courses */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6" data-testid="card-quick-courses">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-400" />
                <h3 className="font-extrabold text-white">Kurslarimiz</h3>
              </div>
              <div className="space-y-1">
                {QUICK_LINKS.filter(l => l.href.startsWith("/course")).map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-zinc-800"
                    data-testid={`link-quick-${i}`}
                  >
                    <span className={`text-sm font-semibold ${link.color}`}>{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-zinc-600" />
                  </a>
                ))}
                <a
                  href="/courses"
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-zinc-300 transition-colors hover:bg-zinc-800"
                  data-testid="link-all-courses"
                >
                  Barcha kurslar <ChevronRight className="h-4 w-4 text-zinc-600" />
                </a>
              </div>
            </div>

            {/* FAQ + CTA */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6" data-testid="card-quick-faq">
                <div className="mb-3 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-amber-400" />
                  <h3 className="font-extrabold text-white">Ko'p so'raladigan savollar</h3>
                </div>
                <p className="mb-4 text-sm text-zinc-400 leading-relaxed">
                  To'lov, o'qish formati, sertifikat va ko'proq narsalar haqida javoblar.
                </p>
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-sm font-bold text-amber-300 transition-all hover:bg-amber-500/20"
                  data-testid="link-faq"
                >
                  FAQ sahifasi <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-700 p-6" data-testid="card-cta-final">
                <h3 className="mb-1 text-lg font-extrabold text-white">Hali aniqlik yo'qmi?</h3>
                <p className="mb-4 text-sm text-purple-100">Menejerimiz qo'ng'iroq qiladi va to'g'ri kursni tanlashga yordam beradi</p>
                <a
                  href="tel:+998781138090"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-purple-700 transition-all hover:bg-purple-50"
                  data-testid="button-cta-call"
                >
                  <Phone className="h-4 w-4" />
                  +998 78 113 80 90
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
