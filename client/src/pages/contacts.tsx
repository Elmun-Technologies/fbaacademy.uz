import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { LazyLeadForm, DeferredLeadForm } from "@/components/lazy-lead-form";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle, HelpCircle, BookOpen, ChevronRight } from "lucide-react";
import { SiTelegram, SiInstagram, SiYoutube, SiLinkedin, SiFacebook } from "react-icons/si";
import { useLanguage } from "@/contexts/language-context";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, CONTACT_EMAIL, CONTACT_EMAIL_HREF, CONTACT_ADDRESS, SOCIAL_LINKS } from "@/lib/constants";

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Telefon",
    value: CONTACT_PHONE_DISPLAY,
    sub: "Dush–Shan: 9:00–19:00",
    color: "from-blue-500 to-cyan-500",
    href: CONTACT_PHONE_TEL,
    cta: "Qo'ng'iroq qilish",
  },
  {
    icon: Mail,
    title: "Email",
    value: CONTACT_EMAIL,
    sub: "24 soat ichida javob",
    color: "from-brand to-brand-accent",
    href: CONTACT_EMAIL_HREF,
    cta: "Xat yozish",
  },
  {
    icon: MapPin,
    title: "Manzil",
    value: CONTACT_ADDRESS.uz,
    sub: "O'zbekiston",
    color: "from-emerald-500 to-teal-500",
    href: "https://maps.app.goo.gl/AiqFnk6TfANB5tW5A",
    cta: "Xaritada ko'rish",
  },
  {
    icon: Clock,
    title: "Ish vaqti",
    value: "Dushanba — Shanba",
    sub: "9:00 dan 19:00 gacha",
    color: "from-amber-500 to-orange-500",
    href: undefined,
    cta: undefined,
  },
];

const SOCIAL_CHANNELS = [
  {
    icon: SiTelegram,
    name: "Telegram",
    handle: "@fbaacademy_admin",
    desc: "To'g'ridan-to'g'ri adminga yozing",
    href: "https://t.me/fbaacademy_admin",
    color: "from-blue-500 to-blue-600",
    hoverBorder: "hover:border-blue-500/50",
  },
  {
    icon: SiInstagram,
    name: "Instagram",
    handle: "@fbaacademyuz",
    desc: "Bitiruvchi muvaffaqiyatlari",
    href: "https://www.instagram.com/fbaacademyuz/",
    color: "from-brand-accent to-rose-600",
    hoverBorder: "hover:border-brand-accent/50",
  },
  {
    icon: SiYoutube,
    name: "YouTube",
    handle: "FBA Academy",
    desc: "Bepul video darslar",
    href: "https://www.youtube.com/@FBAAcademy",
    color: "from-red-500 to-red-600",
    hoverBorder: "hover:border-red-500/50",
  },
  {
    icon: SiLinkedin,
    name: "LinkedIn",
    handle: "FBA Academy",
    desc: "Karyera va yangiliklar",
    href: SOCIAL_LINKS.linkedin,
    color: "from-blue-700 to-blue-800",
    hoverBorder: "hover:border-blue-600/50",
  },
  {
    icon: SiFacebook,
    name: "Facebook",
    handle: "@fbaacademyuz",
    desc: "Maqolalar va e'lonlar",
    href: SOCIAL_LINKS.facebook,
    color: "from-indigo-600 to-blue-700",
    hoverBorder: "hover:border-indigo-500/50",
  },
];

const QUICK_LINKS = [
  { label: "ACCA kursi", href: "/course/acca", color: "text-brand-accent" },
  { label: "DipIFR", href: "/course/dipifr", color: "text-indigo-400" },
  { label: "МСФО", href: "/course/msfo", color: "text-emerald-400" },
  { label: "Financial Analyst", href: "/courses", color: "text-blue-400" },
  { label: "Ko'p so'raladigan savollar", href: "/faq", color: "text-zinc-300" },
];

export default function Contacts() {
  const { lang } = useLanguage();
  const tt = (en: string, uz: string, ru: string) => (lang === "uz" ? uz : lang === "ru" ? ru : en);

  const CONTACT_CARDS_I18N = [
    {
      icon: Phone,
      title: tt("Phone", "Telefon", "Телефон"),
      value: CONTACT_PHONE_DISPLAY,
      sub: tt("Mon–Sat: 9:00–19:00", "Dush–Shan: 9:00–19:00", "Пн–Сб: 9:00–19:00"),
      color: "from-blue-500 to-cyan-500",
      href: CONTACT_PHONE_TEL,
      cta: tt("Call now", "Qo'ng'iroq qilish", "Позвонить"),
    },
    {
      icon: Mail,
      title: "Email",
      value: CONTACT_EMAIL,
      sub: tt("Response within 24 hours", "24 soat ichida javob", "Ответ в течение 24 часов"),
      color: "from-brand to-brand-accent",
      href: CONTACT_EMAIL_HREF,
      cta: tt("Send email", "Xat yozish", "Написать"),
    },
    {
      icon: MapPin,
      title: tt("Address", "Manzil", "Адрес"),
      value: tt(CONTACT_ADDRESS.en, CONTACT_ADDRESS.uz, CONTACT_ADDRESS.ru),
      sub: tt("Uzbekistan", "O'zbekiston", "Узбекистан"),
      color: "from-emerald-500 to-teal-500",
      href: "https://maps.app.goo.gl/AiqFnk6TfANB5tW5A",
      cta: tt("Open in Maps", "Xaritada ko'rish", "Открыть на карте"),
    },
    {
      icon: Clock,
      title: tt("Working hours", "Ish vaqti", "Режим работы"),
      value: tt("Monday — Saturday", "Dushanba — Shanba", "Понедельник — Суббота"),
      sub: tt("9:00 to 19:00", "9:00 dan 19:00 gacha", "С 9:00 до 19:00"),
      color: "from-amber-500 to-orange-500",
      href: undefined,
      cta: undefined,
    },
  ];

  const SOCIAL_CHANNELS_I18N = [
    {
      icon: SiTelegram,
      name: "Telegram",
      handle: "@fbaacademy_admin",
      desc: tt("Write directly to admin", "To'g'ridan-to'g'ri adminga yozing", "Напишите напрямую администратору"),
      href: SOCIAL_LINKS.telegramAdmin,
      color: "from-blue-500 to-blue-600",
      hoverBorder: "hover:border-blue-500/50",
    },
    {
      icon: SiInstagram,
      name: "Instagram",
      handle: "@fbaacademyuz",
      desc: tt("Graduate success stories", "Bitiruvchi muvaffaqiyatlari", "Истории выпускников"),
      href: "https://www.instagram.com/fbaacademyuz/",
      color: "from-brand-accent to-rose-600",
      hoverBorder: "hover:border-brand-accent/50",
    },
    {
      icon: SiYoutube,
      name: "YouTube",
      handle: "FBA Academy",
      desc: tt("Free video lessons", "Bepul video darslar", "Бесплатные видеоуроки"),
      href: "https://www.youtube.com/@FBAAcademy",
      color: "from-red-500 to-red-600",
      hoverBorder: "hover:border-red-500/50",
    },
    {
      icon: SiLinkedin,
      name: "LinkedIn",
      handle: "FBA Academy",
      desc: tt("Career news", "Karyera va yangiliklar", "Карьера и новости"),
      href: SOCIAL_LINKS.linkedin,
      color: "from-blue-700 to-blue-800",
      hoverBorder: "hover:border-blue-600/50",
    },
    {
      icon: SiFacebook,
      name: "Facebook",
      handle: "@fbaacademyuz",
      desc: tt("Articles and announcements", "Maqolalar va e'lonlar", "Статьи и объявления"),
      href: SOCIAL_LINKS.facebook,
      color: "from-indigo-600 to-blue-700",
      hoverBorder: "hover:border-indigo-500/50",
    },
  ];

  const QUICK_LINKS_I18N = [
    { label: tt("ACCA course", "ACCA kursi", "Курс ACCA"), href: "/course/acca", color: "text-brand-accent" },
    { label: "DipIFR", href: "/course/dipifr", color: "text-indigo-400" },
    { label: "МСФО", href: "/course/msfo", color: "text-emerald-400" },
    { label: "Financial Analyst", href: "/courses", color: "text-blue-400" },
    { label: tt("Frequently asked questions", "Ko'p so'raladigan savollar", "Частые вопросы"), href: "/faq", color: "text-zinc-300" },
  ];

  useSEO({
    title: tt(`Contact — FBA Academy | Tashkent, ${CONTACT_PHONE_DISPLAY}`, `Bog'lanish — FBA Academy | Toshkent, ${CONTACT_PHONE_DISPLAY}`, `Контакты — FBA Academy | Ташкент, ${CONTACT_PHONE_DISPLAY}`),
    description: tt(
      `Contact FBA Academy. Get a free consultation on ACCA, DipIFR, МСФО and Financial Analyst courses. Tashkent, Shaykhantakhur. Tel: ${CONTACT_PHONE_DISPLAY}.`,
      `FBA Academy bilan bog'laning. ACCA, DipIFR, МСФО, Financial Analyst kurslari haqida bepul konsultatsiya. Toshkent, Shayxontohur. Tel: ${CONTACT_PHONE_DISPLAY}.`,
      `Свяжитесь с FBA Academy. Бесплатная консультация по курсам ACCA, DipIFR, МСФО, Financial Analyst. Ташкент, Шайхантахур. Тел: ${CONTACT_PHONE_DISPLAY}.`
    ),
    keywords: tt(
      "FBA Academy contact, ACCA consultation, finance education Tashkent, DipIFR enrollment",
      "FBA Academy kontakt, ACCA konsultatsiya, moliya ta'lim Toshkent, DipIFR ro'yxatdan o'tish, bog'lanish",
      "контакты FBA Academy, консультация ACCA, обучение финансам Ташкент, регистрация DipIFR"
    ),
    breadcrumb: [{ name: tt("Contact", "Bog'lanish", "Контакты"), url: "https://fbaacademy.uz/contacts" }],
    speakable: ["[data-speakable='contacts-title']", "[data-speakable='contacts-desc']"],
    jsonLd: {
      "@type": "LocalBusiness",
      "@id": "https://fbaacademy.uz/#localbusiness",
      "name": "FBA Academy",
      "description": "O'zbekistondagi yetakchi moliya ta'lim platformasi. ACCA, DipIFR, МСФО, Financial Analyst kurslari.",
      "url": "https://fbaacademy.uz",
      "image": "https://fbaacademy.uz/og-image.svg",
      "telephone": CONTACT_PHONE_TEL.replace("tel:", ""),
      "email": CONTACT_EMAIL,
      "priceRange": "$$",
      "currenciesAccepted": "UZS",
      "paymentAccepted": "Cash, Bank Transfer, Click, Payme",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Beshyog'och ko'ch., 1/1, U-Tower, 1-qavat",
        "addressLocality": "Toshkent",
        "addressRegion": "Toshkent viloyati",
        "postalCode": "100000",
        "addressCountry": "UZ",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.29682,
        "longitude": 69.23563,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00",
        },
      ],
      "sameAs": [
        "https://t.me/fbaacademyuz",
        "https://www.instagram.com/fbaacademyuz/",
        "https://www.youtube.com/@FBAAcademy",
        "https://www.facebook.com/fbaacademyuz/",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900 pb-16 pt-4 sm:pb-24 sm:pt-24" data-testid="section-contacts-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: tt("Contact", "Bog'lanish", "Контакты") }]} light />
          </div>
          <div className="mb-4 inline-block rounded-full border border-brand-accent/30 bg-brand/20 px-4 py-1.5 text-sm font-semibold text-brand-accent-light backdrop-blur-sm">
            {tt("Get in touch", "Biz bilan aloqa", "Связь с нами")}
          </div>
          <h1 className="mb-4 text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white md:text-6xl lg:text-7xl" data-testid="text-contacts-title" data-speakable="contacts-title">
            {tt("Contact us", "Bog'laning", "Свяжитесь с нами")}
          </h1>
          <p className="max-w-xl text-lg text-slate-300" data-speakable="contacts-desc">
            {tt(
      "Have questions or interested in a course? We are happy to help and respond quickly.",
      "Savollaringiz bormi? Kurslardan biri qiziqtirdimi? Biz javob berishdan mamnunmiz — tez yordam beramiz.",
      "Есть вопросы? Заинтересовал курс? Мы с радостью ответим и быстро поможем."
    )}
          </p>

          {/* Quick action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CONTACT_PHONE_TEL}
              className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              data-testid="button-hero-call"
            >
              <Phone className="h-4 w-4 text-blue-300" />
              {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={SOCIAL_LINKS.telegramAdmin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-blue-600/80 border border-blue-500/50 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-blue-600"
              data-testid="button-hero-telegram"
            >
              <SiTelegram className="h-4 w-4" />
              {tt("Via Telegram", "Telegram orqali", "Через Telegram")}
            </a>
          </div>
        </div>
      </section>

      {/* ===== 4 CONTACT CARDS ===== */}
      <section className="bg-[#0d0d0d] py-10" data-testid="section-contact-cards">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS_I18N.map((item, i) => (
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
                    className="mt-4 flex items-center gap-1.5 text-xs font-bold text-brand-accent transition-colors hover:text-brand-accent-light"
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
                    <MessageCircle className="h-5 w-5 text-brand-accent" />
                    <h2 className="text-xl font-extrabold text-white">{tt("Free consultation", "Bepul konsultatsiya", "Бесплатная консультация")}</h2>
                  </div>
                  <p className="text-sm text-zinc-400">
                    {tt(
      "Our specialist will contact you within 1 hour and answer all questions",
      "Mutaxassisimiz 1 soat ichida bog'lanadi va barcha savollarni javoblaydi",
      "Наш специалист свяжется в течение 1 часа и ответит на все вопросы"
    )}
                  </p>
                </div>

              <LazyLeadForm source="contacts" />

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                <span className="mt-0.5 text-lg">💡</span>
                <p className="text-xs text-amber-200 leading-relaxed">
                  {tt(
      "The consultation is completely free. No obligations — just answers and clear guidance.",
      "Konsultatsiya mutlaqo bepul. Hech qanday majburiyat yo'q — faqat savol-javob va to'g'ri yo'l ko'rsatish.",
      "Консультация полностью бесплатна. Никаких обязательств — только ответы и правильное направление."
    )}
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900" data-testid="card-map">
                <iframe
                  src="https://maps.google.com/maps?q=41.29682,69.23563&z=17&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={tt("FBA Academy location — Shaykhantakhur, Tashkent", "FBA Academy manzili — Shayxontohur, Toshkent", "Расположение FBA Academy — Шайхантахур, Ташкент")}
                  data-testid="iframe-map"
                />
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <p className="font-bold text-white">FBA Academy</p>
                      <p className="text-sm text-zinc-400">{tt(CONTACT_ADDRESS.en, CONTACT_ADDRESS.uz, CONTACT_ADDRESS.ru)}</p>
                      <a
                        href="https://maps.app.goo.gl/AiqFnk6TfANB5tW5A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                        data-testid="link-open-maps"
                      >
                        {tt("Open in Google Maps", "Google Maps da ochish", "Открыть в Google Maps")} <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working hours detail */}
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5" data-testid="card-working-hours">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-amber-400" />
                  <h3 className="font-bold text-white">{tt("Working hours", "Ish vaqti", "Режим работы")}</h3>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      day: tt("Monday — Friday", "Dushanba — Juma", "Понедельник — Пятница"),
                      time: "9:00 — 19:00",
                      active: true,
                    },
                    { day: tt("Saturday", "Shanba", "Суббота"), time: "9:00 — 19:00", active: true },
                    { day: tt("Sunday", "Yakshanba", "Воскресенье"), time: tt("Day off", "Dam olish kuni", "Выходной"), active: false },
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
          <h2 className="mb-2 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">{tt("Social channels", "Ijtimoiy tarmoqlar", "Социальные сети")}</h2>
          <p className="mb-8 text-zinc-400">{tt("News, free lessons and graduate success stories", "Yangiliklar, bepul darslar va bitiruvchi muvaffaqiyatlari", "Новости, бесплатные уроки и истории успеха выпускников")}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {SOCIAL_CHANNELS_I18N.map((ch, i) => (
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
                <BookOpen className="h-5 w-5 text-brand-accent" />
                <h3 className="font-extrabold text-white">{tt("Our courses", "Kurslarimiz", "Наши курсы")}</h3>
              </div>
              <div className="space-y-1">
                {QUICK_LINKS_I18N.filter(l => l.href.startsWith("/course")).map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-zinc-800"
                    data-testid={`link-quick-${i}`}
                  >
                    <span className={`text-sm font-semibold ${link.color}`}>{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-zinc-600" />
                  </Link>
                ))}
                <Link
                  href="/courses"
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-zinc-300 transition-colors hover:bg-zinc-800"
                  data-testid="link-all-courses"
                >
                  {tt("All courses", "Barcha kurslar", "Все курсы")} <ChevronRight className="h-4 w-4 text-zinc-600" />
                </Link>
              </div>
            </div>

            {/* FAQ + CTA */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6" data-testid="card-quick-faq">
                <div className="mb-3 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-amber-400" />
                  <h3 className="font-extrabold text-white">{tt("Frequently asked questions", "Ko'p so'raladigan savollar", "Частые вопросы")}</h3>
                </div>
                <p className="mb-4 text-sm text-zinc-400 leading-relaxed">
                  {tt("Answers about payment, study format, certificates and more.", "To'lov, o'qish formati, sertifikat va ko'proq narsalar haqida javoblar.", "Ответы по оплате, формату обучения, сертификатам и другим вопросам.")}
                </p>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-sm font-bold text-amber-300 transition-all hover:bg-amber-500/20"
                  data-testid="link-faq"
                >
                  {tt("FAQ page", "FAQ sahifasi", "Страница FAQ")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-6" data-testid="card-cta-final">
                <h3 className="mb-1 text-lg font-extrabold text-white">{tt("Still not sure?", "Hali aniqlik yo'qmi?", "Остались сомнения?")}</h3>
                <p className="mb-4 text-sm text-brand-accent-light">{tt("Our manager will call and help you choose the right course", "Menejerimiz qo'ng'iroq qiladi va to'g'ri kursni tanlashga yordam beradi", "Наш менеджер позвонит и поможет выбрать правильный курс")}</p>
                <a
                  href={CONTACT_PHONE_TEL}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-dark transition-all hover:bg-brand-light"
                  data-testid="button-cta-call"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
