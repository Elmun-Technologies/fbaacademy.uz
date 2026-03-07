import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import YouTubeEmbed from "@/components/youtube-embed";
import { courses, teachers, testimonials, stats, whyUsFeatures, graduateResults } from "@/lib/data";
import {
  Code, TrendingUp, Briefcase, FolderOpen, Users, Award,
  ArrowRight, Star, CheckCircle2, Sparkles, GraduationCap, Clock, BookOpen, Scale, Calculator, Quote
} from "lucide-react";

const iconMap: Record<string, any> = { Code, TrendingUp, Briefcase, FolderOpen, Users, Award };

const courseHighlights = [
  { icon: Award, title: "ACCA", sub: "Applied Knowledge · Skills · Strategic Professional", color: "from-blue-500 to-cyan-500", path: "/course/acca" },
  { icon: TrendingUp, title: "DipIFR", sub: "Diploma in International Financial Reporting Standards", color: "from-emerald-500 to-teal-500", path: "/course/dipifr" },
  { icon: BookOpen, title: "Financial Modeling", sub: "DCF · Kompaniya baholash · Investitsiya tahlili", color: "from-violet-500 to-purple-600", path: "/course/financial-modeling" },
  { icon: Scale, title: "Huquqshunoslik", sub: "Fuqarolik · Mehnat · Soliq · Tijorat huquqi", color: "from-amber-500 to-orange-500", path: "/course/jurisprudence" },
  { icon: Calculator, title: "1C: Buxgalteriya", sub: "Buxgalteriya dasturini professional o'rganing", color: "from-rose-500 to-pink-600", path: "/course/1c-course" },
];

const FEATURED_IDS = ["acca", "dipifr", "financial-modeling", "1c-course"];
const COURSE_BADGES: Record<string, { label: string; color: string }> = {
  acca: { label: "Top", color: "bg-purple-600" },
  dipifr: { label: "Xalqaro", color: "bg-indigo-600" },
  "financial-modeling": { label: "Mashhur", color: "bg-emerald-600" },
  "1c-course": { label: "Amaliy", color: "bg-blue-600" },
};

export default function Home() {
  useSEO({
    title: "FBA Academy — ACCA, DipIFR, Financial Modeling, Huquqshunoslik, 1C kurslari | O'zbekiston",
    description: "FBA Academy — O'zbekistondagi yetakchi moliya ta'lim platformasi. ACCA, DipIFR, Financial Modeling, Huquqshunoslik va 1C: Buxgalteriya kurslari. 5000+ bitiruvchi, 92% ishga joylashish.",
    keywords: "ACCA kurslari O'zbekiston, DipIFR Toshkent, Financial Modeling kursi, 1C Buxgalteriya, Huquqshunoslik kursi, moliya sertifikati, xalqaro sertifikat, Big Four, buxgalteriya kurslari Toshkent",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "FBA Academy — Bosh sahifa",
        "description": "O'zbekistondagi yetakchi moliya va buxgalteriya ta'lim platformasi. ACCA, DipIFR, Financial Modeling, 1C Buxgalteriya kurslari.",
        "url": "https://fbaacademy.uz/",
        "isPartOf": { "@type": "WebSite", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": "https://fbaacademy.uz/" }]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "FBA Academy kurslari",
        "description": "O'zbekistondagi professional moliya va buxgalteriya kurslari",
        "url": "https://fbaacademy.uz/courses",
        "numberOfItems": 5,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ACCA", "url": "https://fbaacademy.uz/course/acca", "description": "ACCA xalqaro moliyaviy hisobot sertifikati. 3 bosqich: Applied Knowledge, Applied Skills, Strategic Professional." },
          { "@type": "ListItem", "position": 2, "name": "DipIFR", "url": "https://fbaacademy.uz/course/dipifr", "description": "Diploma in International Financial Reporting Standards — ACCA DipIFR xalqaro diplom." },
          { "@type": "ListItem", "position": 3, "name": "Financial Modeling", "url": "https://fbaacademy.uz/course/financial-modeling", "description": "Excel, DCF, kompaniya baholash va investitsiya tahlili. Real loyihalar bilan amaliy ko'nikmalar." },
          { "@type": "ListItem", "position": 4, "name": "1C: Buxgalteriya", "url": "https://fbaacademy.uz/course/1c-course", "description": "1C: Buxgalteriya 8.3 versiyasini boshlash. O'zbek bozori uchun sertifikatlash." },
          { "@type": "ListItem", "position": 5, "name": "Huquqshunoslik", "url": "https://fbaacademy.uz/course/jurisprudence", "description": "Biznes va soliq huquqi. Fuqarolik, Mehnat, Tijorat va Soliq kodekslari bo'yicha." }
        ]
      }
    ],
    faqItems: [
      { question: "FBA Academy qanday kurslar taklif etadi?", answer: "FBA Academy ACCA, DipIFR, Financial Modeling, 1C: Buxgalteriya va Huquqshunoslik kurslarini taklif etadi. Barcha kurslar amaliy va xalqaro sertifikatga yo'naltirilgan." },
      { question: "Kurslar online yoki oflaynda o'tiladimi?", answer: "Kurslar onlayn formatda o'tkaziladi. Har hafta yangi leksiyalar, amaliy topshiriqlar va Q&A sessiyalar mavjud." },
      { question: "Qancha vaqtda kursni tugatish mumkin?", answer: "Kurs davomiyligi 3 oydan 12 oygacha, kurs turiga qarab. ACCA to'liq dasturi 12-18 oy, DipIFR 4-6 oy." },
      { question: "Bitiruvchilar qancha maosh oladi?", answer: "ACCA sertifikatlangan mutaxassislar O'zbekistonda o'rtacha 3-8 mln so'm, xalqaro kompaniyalarda 1000-3000 USD maosh oladi." },
      { question: "To'lov qanday amalga oshiriladi?", answer: "Click, Payme, bank o'tkazmasi yoki naqd to'lov orqali. Oy sayin to'lash ham mumkin." }
    ]
  });

  const featuredCourses = FEATURED_IDS.map(id => courses.find(c => c.id === id)).filter(Boolean) as typeof courses;

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 pb-20 pt-16 sm:pb-28 sm:pt-24" data-testid="section-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm font-semibold text-purple-200 backdrop-blur-sm" data-testid="badge-hero-label">
                <Sparkles className="h-3.5 w-3.5" /> O'zbekistondagi #1 moliya ta'lim platformasi
              </div>
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl" data-testid="text-hero-title">
                Xalqaro sertifikatlar bilan{" "}
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">karyerangizni</span>{" "}
                yangi bosqichga olib chiqing
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300" data-testid="text-hero-subtitle">
                ACCA, DipIFR, Financial Modeling, 1C va Huquqshunoslik bo'yicha professional kurslar. Big Four kompaniyalariga ishga kirish imkoniyati.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/courses">
                  <Button size="lg" className="gap-2 rounded-full bg-amber-400 px-7 text-base font-bold text-black shadow-lg hover:bg-amber-300" data-testid="button-hero-courses">
                    Kurslarni ko'rish <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="/contacts">
                  <Button size="lg" variant="outline" className="gap-2 rounded-full border-white/30 px-7 text-base text-white hover:bg-white/10" data-testid="button-hero-consultation">
                    Bepul konsultatsiya
                  </Button>
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center" data-testid={`stat-hero-${stat.label}`}>
                    <div className="text-3xl font-extrabold text-white sm:text-4xl">{stat.value}</div>
                    <div className="mt-0.5 text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {courseHighlights.map((item) => (
                <a key={item.path} href={item.path}>
                  <div className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 hover:shadow-xl" data-testid={`card-highlight-${item.title.toLowerCase().replace(/\s|:/g, "-")}`}>
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mb-1 text-base font-extrabold text-white">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-400">{item.sub}</p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-purple-300 font-medium">
                      Batafsil <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO — WHY US ── */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24" data-testid="section-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">FBA Academy haqida</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-video-title">
                Nima uchun biz bilan o'qish kerak?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Tajribali mutaxassislar bilan jonli darslar, real loyihalar va kafolatlangan ishga joylashish yordami.
              </p>
              <ul className="mt-6 space-y-3">
                {["Big Four firmalar bilan hamkorlik", "Jonli darslar va amaliyot", "0% bo'lib to'lash imkoniyati", "Sertifikat va ishga joylashish yordami"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/about" className="mt-8 inline-block">
                <Button variant="outline" className="gap-2 rounded-full border-white/30 text-white hover:bg-white/10" data-testid="button-learn-more-about">
                  Biz haqimizda <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <YouTubeEmbed videoId="PU8ZCSuHWXE" title="FBA Academy — Ta'lim platformasi haqida" />
            </div>
          </div>
        </div>
      </section>

      {/* ── POPULAR COURSES ── */}
      <section className="bg-[#111] py-20 sm:py-24" data-testid="section-popular-courses">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Kurslar</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-popular-title">
                Eng mashhur dasturlar
              </h2>
            </div>
            <a href="/courses">
              <Button variant="outline" className="gap-1.5 rounded-full border-white/30 text-white hover:bg-white/10" data-testid="button-view-all-courses">
                Barcha kurslar <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course) => {
              const badge = COURSE_BADGES[course.id];
              return (
                <a key={course.id} href={`/course/${course.id}`}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-zinc-900 transition-transform duration-300 hover:-translate-y-2" data-testid={`card-course-${course.id}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
                      {badge && (
                        <span className={`absolute left-3 top-3 rounded-full ${badge.color} px-3 py-1 text-xs font-bold text-white shadow-lg`}>
                          {badge.label}
                        </span>
                      )}
                      {course.discount && (
                        <span className="absolute right-3 top-3 rounded-full bg-rose-600 px-2.5 py-1 text-xs font-bold text-white">
                          -{course.discount}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="mb-2 text-base font-extrabold uppercase tracking-wide text-white" data-testid={`text-course-title-${course.id}`}>
                        {course.title}
                      </h3>
                      <p className="flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-2">{course.shortDescription}</p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-zinc-500">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                        <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-400" /> {course.rating}</span>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                        {course.oldPrice && <span className="text-xs text-zinc-500 line-through">{course.oldPrice}</span>}
                        <span className="text-base font-extrabold text-white">{course.price} <span className="text-xs font-normal text-zinc-500">UZS</span></span>
                      </div>
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/70 px-4 py-2 text-xs font-bold text-amber-400 transition-all group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black">
                          Batafsil <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24" data-testid="section-why-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Afzalliklar</div>
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-why-us-title">
              Nima uchun aynan biz?
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUsFeatures.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={i} className="group rounded-2xl border border-white/10 bg-zinc-900 p-7 transition-all duration-300 hover:border-purple-500/40 hover:scale-[1.02]" data-testid={`card-feature-${i}`}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VIDEO — GRADUATES ── */}
      <section className="bg-[#111] py-20 sm:py-24" data-testid="section-video-graduates">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 overflow-hidden rounded-2xl shadow-2xl lg:order-1">
              <YouTubeEmbed videoId="eTriMFVGcYg" title="FBA Academy bitiruvchilari muvaffaqiyati" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Bitiruvchilar</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-video-graduates-title">
                Bitiruvchilarimiz muvaffaqiyati
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                5000+ bitiruvchimiz Deloitte, PwC, KPMG, EY kabi yirik kompaniyalarda muvaffaqiyatli ishlamoqda.
              </p>
              <a href="/case-studies" className="mt-8 inline-block">
                <Button variant="outline" className="gap-2 rounded-full border-white/30 text-white hover:bg-white/10" data-testid="button-view-graduates">
                  Natijalarni ko'rish <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRADUATE STORIES ── */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24" data-testid="section-graduates">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Natijalar</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-graduates-title">
                Bitiruvchilarimiz natijasi
              </h2>
            </div>
            <a href="/case-studies">
              <Button variant="outline" className="gap-1.5 rounded-full border-white/30 text-white hover:bg-white/10" data-testid="button-view-cases">
                Barchasi <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {graduateResults.map((grad) => (
              <article key={grad.id} className="group overflow-hidden rounded-2xl bg-zinc-900" data-testid={`card-grad-${grad.id}`}>
                <div className="relative h-52 overflow-hidden">
                  <img src={grad.avatar} alt={grad.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-bold text-white">{grad.courseName}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-white" data-testid={`text-grad-name-${grad.id}`}>{grad.name}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm flex-wrap">
                    <span className="text-zinc-500">{grad.beforeRole}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span className="font-bold text-purple-400">{grad.afterRole}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs font-bold text-emerald-400">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {grad.salaryIncrease}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HELP / CTA CARDS ── */}
      <section className="bg-[#111] py-20 sm:py-24" data-testid="section-help">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-help-title">
              Qayerdan boshlashni bilmasangiz
            </h2>
            <p className="mt-4 text-lg text-zinc-400">Biz sizga to'g'ri yo'nalishni topishda yordam beramiz</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/60 to-zinc-900 p-8" data-testid="card-help-consultation">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 shadow-lg">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-extrabold text-white">Yo'nalishni aniqlang</h3>
              <p className="mb-7 leading-relaxed text-zinc-400">
                ACCA, DipIFR yoki boshqa yo'nalishlardan qaysi biri sizga mos? Bepul konsultatsiya oling va to'g'ri qaror qabul qiling.
              </p>
              <a href="/contacts">
                <Button className="gap-2 rounded-full bg-emerald-600 px-6 font-bold text-white shadow-lg hover:bg-emerald-500" data-testid="button-help-profession">
                  Bepul konsultatsiya <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/60 to-zinc-900 p-8" data-testid="card-help-free">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-extrabold text-white">Barcha kurslar</h3>
              <ul className="mb-7 space-y-2">
                {["ACCA (Applied Knowledge, Skills, Professional)", "DipIFR — IFRS diplomi", "Financial Modeling", "Huquqshunoslik", "1C: Buxgalteriya"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/courses">
                <Button className="gap-2 rounded-full bg-blue-600 px-6 font-bold text-white shadow-lg hover:bg-blue-500" data-testid="button-help-free">
                  Kurslarni ko'rish <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEACHERS ── */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24" data-testid="section-teachers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Ekspertlar</div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-teachers-title">
                Mentorlar jamoasi
              </h2>
            </div>
            <a href="/teachers">
              <Button variant="outline" className="gap-1.5 rounded-full border-white/30 text-white hover:bg-white/10" data-testid="button-all-teachers">
                Barchasi <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <article key={teacher.id} className="group overflow-hidden rounded-2xl bg-zinc-900" data-testid={`card-teacher-${teacher.id}`}>
                <div className="h-60 overflow-hidden">
                  <img src={teacher.avatar} alt={teacher.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-white" data-testid={`text-teacher-name-${teacher.id}`}>{teacher.name}</h3>
                  <p className="text-sm font-semibold text-purple-400">{teacher.role}</p>
                  <p className="mt-1 text-xs text-zinc-500">{teacher.experience}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#111] py-20 sm:py-24" data-testid="section-testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Fikrlar</div>
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-testimonials-title">
              Talabalar fikrlari
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div key={t.id} className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-6" data-testid={`card-testimonial-${t.id}`}>
                <Quote className="mb-4 h-6 w-6 text-purple-500 opacity-70" />
                <p className="flex-1 text-sm leading-relaxed text-zinc-400">{t.text}</p>
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover object-top ring-2 ring-purple-500/30" loading="lazy" />
                  <div>
                    <div className="text-sm font-bold text-white" data-testid={`text-testimonial-name-${t.id}`}>{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.role}</div>
                  </div>
                </div>
                <span className="mt-3 inline-block self-start rounded-full border border-white/10 px-3 py-0.5 text-xs text-zinc-400">{t.courseName}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="border-y border-white/5 bg-[#0d0d0d] py-12" data-testid="section-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Hamkor kompaniyalar</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {["Deloitte", "PwC", "KPMG", "EY", "BDO", "Grant Thornton", "UzCard", "Kapitalbank", "Artel", "Payme"].map((p) => (
              <span key={p} className="text-base font-extrabold text-zinc-600 transition-colors hover:text-zinc-400" data-testid={`text-partner-${p.toLowerCase()}`}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-800 to-pink-800 py-20 sm:py-24" data-testid="section-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl" data-testid="text-cta-title">
                Hoziroq boshlang — kelajagingiz shu yerdan boshlanadi
              </h2>
              <p className="mt-3 text-lg text-purple-200">Birinchi qadam sifatida bepul konsultatsiya oling</p>
            </div>
            <a href="/contacts" className="shrink-0">
              <Button size="lg" className="gap-2 rounded-full bg-amber-400 px-10 text-base font-extrabold text-black shadow-2xl hover:bg-amber-300" data-testid="button-cta-consultation">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
}
