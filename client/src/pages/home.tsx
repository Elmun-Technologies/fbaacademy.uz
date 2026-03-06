import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import YouTubeEmbed from "@/components/youtube-embed";
import { courses, teachers, testimonials, stats, whyUsFeatures, graduateResults } from "@/lib/data";
import {
  Code, TrendingUp, Briefcase, FolderOpen, Users, Award,
  ArrowRight, Star, CheckCircle2, Sparkles, GraduationCap, Clock, BookOpen, Scale, Calculator
} from "lucide-react";

const iconMap: Record<string, any> = { Code, TrendingUp, Briefcase, FolderOpen, Users, Award };

const courseHighlights = [
  {
    icon: Award,
    title: "ACCA",
    sub: "Applied Knowledge · Applied Skills · Strategic Professional",
    color: "from-blue-500 to-cyan-500",
    path: "/course/acca",
  },
  {
    icon: TrendingUp,
    title: "DipIFR",
    sub: "Diploma in International Financial Reporting Standards",
    color: "from-emerald-500 to-teal-500",
    path: "/course/dipifr",
  },
  {
    icon: BookOpen,
    title: "Financial Modeling",
    sub: "DCF · Kompaniya baholash · Investitsiya tahlili",
    color: "from-violet-500 to-purple-600",
    path: "/course/financial-modeling",
  },
  {
    icon: Scale,
    title: "Huquqshunoslik",
    sub: "Fuqarolik · Mehnat · Soliq · Tijorat huquqi",
    color: "from-amber-500 to-orange-500",
    path: "/course/jurisprudence",
  },
  {
    icon: Calculator,
    title: "1C: Buxgalteriya",
    sub: "Buxgalteriya dasturini professional o'rganing",
    color: "from-rose-500 to-pink-600",
    path: "/course/1c-course",
  },
];

export default function Home() {
  useSEO({
    title: "FBA Academy — ACCA, DipIFR, Financial Modeling, Huquqshunoslik, 1C kurslari | O'zbekiston",
    description: "FBA Academy — O'zbekistondagi yetakchi moliya ta'lim platformasi. ACCA, DipIFR, Financial Modeling, Huquqshunoslik va 1C: Buxgalteriya kurslari. 5000+ bitiruvchi, 92% ishga joylashish.",
    keywords: "ACCA, DipIFR, Financial Modeling, 1C Buxgalteriya, Huquqshunoslik, moliya kurslari, O'zbekiston",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "FBA Academy — Bosh sahifa",
      "description": "O'zbekistondagi yetakchi moliya va buxgalteriya ta'lim platformasi",
      "url": "https://fbaacademy.uz/",
      "isPartOf": {
        "@type": "WebSite",
        "name": "FBA Academy",
        "url": "https://fbaacademy.uz"
      }
    }
  });

  const featuredCourses = [
    courses.find(c => c.id === "acca"),
    courses.find(c => c.id === "dipifr"),
    courses.find(c => c.id === "financial-modeling"),
    courses.find(c => c.id === "1c-course"),
  ].filter(Boolean) as typeof courses;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 pb-20 pt-16 sm:pb-28 sm:pt-24" data-testid="section-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge className="mb-6 inline-flex rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm" data-testid="badge-hero-label">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" /> O'zbekistondagi #1 moliya ta'lim platformasi
              </Badge>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl" data-testid="text-hero-title">
                Xalqaro sertifikatlar bilan{" "}
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">karyerangizni</span>{" "}
                yangi bosqichga olib chiqing
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300" data-testid="text-hero-subtitle">
                ACCA, DipIFR, Financial Modeling, 1C va Huquqshunoslik bo'yicha professional kurslar. Big Four kompaniyalariga ishga kirish imkoniyati.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/courses">
                  <Button size="lg" className="gap-2 rounded-full bg-white px-7 text-base font-semibold text-slate-900 shadow-lg hover:bg-slate-100" data-testid="button-hero-courses">
                    Kurslarni ko'rish <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contacts">
                  <Button size="lg" variant="outline" className="gap-2 rounded-full border-white/30 px-7 text-base text-white hover:bg-white/10" data-testid="button-hero-consultation">
                    Bepul konsultatsiya
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center" data-testid={`stat-hero-${stat.label}`}>
                    <div className="text-2xl font-extrabold text-white sm:text-3xl">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course highlight cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {courseHighlights.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl" data-testid={`card-highlight-${item.title.toLowerCase().replace(/\s|:/g, "-")}`}>
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mb-1 text-base font-bold text-white">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-400">{item.sub}</p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-purple-300">
                      Batafsil <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube video section */}
      <section className="bg-slate-50 py-16 sm:py-20" data-testid="section-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full border-purple-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">
                FBA Academy haqida
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-video-title">
                Nima uchun biz bilan o'qish kerak?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Tajribali mutaxassislar bilan jonli darslar, real loyihalar va kafolatlangan ishga joylashish yordami. ACCA, DipIFR va boshqa xalqaro sertifikatlarni oling.
              </p>
              <ul className="mt-6 space-y-3">
                {["Big Four firmalar bilan hamkorlik", "Jonli darslar va amaliyot", "0% bo'lib to'lash imkoniyati", "Sertifikat va ishga joylashish yordami"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="mt-6 inline-block">
                <Button variant="outline" className="gap-2 rounded-full border-2 font-semibold" data-testid="button-learn-more-about">
                  Biz haqimizda <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="shadow-2xl rounded-2xl overflow-hidden">
              <YouTubeEmbed videoId="PU8ZCSuHWXE" title="FBA Academy — Ta'lim platformasi haqida" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 sm:py-20" data-testid="section-popular-courses">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge variant="outline" className="mb-3 rounded-full border-purple-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">Kurslar</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-popular-title">
                Eng mashhur dasturlar
              </h2>
            </div>
            <Link href="/courses">
              <Button variant="outline" className="gap-1.5 rounded-full border-2 font-semibold" data-testid="button-view-all-courses">
                Barcha kurslar <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className="group cursor-pointer border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full overflow-hidden" data-testid={`card-course-${course.id}`}>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge className="rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">{course.category}</Badge>
                      {course.discount && (
                        <Badge className="rounded-full bg-rose-100 text-rose-700 text-xs font-bold">-{course.discount}</Badge>
                      )}
                    </div>
                    <h3 className="mb-2 text-base font-bold leading-snug text-foreground" data-testid={`text-course-title-${course.id}`}>{course.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{course.shortDescription}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                      <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-500" /> {course.rating}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 border-t pt-3">
                      {course.oldPrice && (
                        <span className="text-xs text-muted-foreground line-through">{course.oldPrice}</span>
                      )}
                      <span className="text-base font-extrabold text-foreground">{course.price} <span className="text-xs font-normal text-muted-foreground">UZS</span></span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-16 sm:py-20" data-testid="section-why-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3 rounded-full border-purple-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">Afzalliklar</Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-why-us-title">Nima uchun aynan biz?</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUsFeatures.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={i} className="rounded-2xl border bg-white p-6 shadow-md" data-testid={`card-feature-${i}`}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Second YouTube video — Graduate Success */}
      <section className="py-16 sm:py-20" data-testid="section-video-graduates">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1 shadow-2xl rounded-2xl overflow-hidden">
              <YouTubeEmbed videoId="eTriMFVGcYg" title="FBA Academy bitiruvchilari muvaffaqiyati" />
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4 rounded-full border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
                Bitiruvchilar
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-video-graduates-title">
                Bitiruvchilarimiz muvaffaqiyati
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                5000+ bitiruvchimiz Deloitte, PwC, KPMG, EY kabi yirik kompaniyalarda va xalqaro tashkilotlarda muvaffaqiyatli ishlamoqda.
              </p>
              <Link href="/case-studies" className="mt-6 inline-block">
                <Button variant="outline" className="gap-2 rounded-full border-2 font-semibold" data-testid="button-view-graduates">
                  Natijalarni ko'rish <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Graduate Stories */}
      <section className="bg-slate-50 py-16 sm:py-20" data-testid="section-graduates">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge variant="outline" className="mb-3 rounded-full border-purple-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">Natijalar</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-graduates-title">
                Bitiruvchilarimiz muvaffaqiyati
              </h2>
            </div>
            <Link href="/case-studies">
              <Button variant="outline" className="gap-1.5 rounded-full border-2 font-semibold" data-testid="button-view-cases">
                Barchasi <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {graduateResults.map((grad) => (
              <Card key={grad.id} className="border shadow-md overflow-hidden" data-testid={`card-grad-${grad.id}`}>
                <div className="relative h-52 overflow-hidden">
                  <img src={grad.avatar} alt={grad.name} className="h-full w-full object-cover object-top" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge className="rounded-full bg-white/90 text-foreground text-xs font-semibold shadow-sm">{grad.courseName}</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground" data-testid={`text-grad-name-${grad.id}`}>{grad.name}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm flex-wrap">
                    <span className="text-muted-foreground">{grad.beforeRole}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-purple-500 shrink-0" />
                    <span className="font-semibold text-purple-600">{grad.afterRole}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {grad.salaryIncrease}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 sm:py-20" data-testid="section-help">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-help-title">
              Qayerdan boshlashni bilmasangiz
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 shadow-lg" data-testid="card-help-consultation">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 shadow-md">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-extrabold text-foreground">Yo'nalishni aniqlang</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                ACCA, DipIFR yoki boshqa yo'nalishlardan qaysi biri sizga mos? Bepul konsultatsiya oling va to'g'ri qaror qabul qiling.
              </p>
              <Link href="/contacts">
                <Button className="gap-2 rounded-full bg-emerald-600 px-6 text-white shadow-md hover:bg-emerald-700" data-testid="button-help-profession">
                  Bepul konsultatsiya <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg" data-testid="card-help-free">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 shadow-md">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-extrabold text-foreground">Barcha kurslar</h3>
              <ul className="mb-6 space-y-2 text-muted-foreground">
                {["ACCA (Applied Knowledge, Skills, Professional)", "DipIFR — IFRS diplomi", "Financial Modeling", "Huquqshunoslik", "1C: Buxgalteriya"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/courses">
                <Button className="gap-2 rounded-full bg-blue-600 px-6 text-white shadow-md hover:bg-blue-700" data-testid="button-help-free">
                  Kurslarni ko'rish <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="bg-slate-50 py-16 sm:py-20" data-testid="section-teachers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge variant="outline" className="mb-3 rounded-full border-purple-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">Ekspertlar</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-teachers-title">Mentorlar jamoasi</h2>
            </div>
            <Link href="/teachers">
              <Button variant="outline" className="gap-1.5 rounded-full border-2 font-semibold" data-testid="button-all-teachers">
                Barchasi <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="border shadow-md overflow-hidden group" data-testid={`card-teacher-${teacher.id}`}>
                <div className="h-56 overflow-hidden">
                  <img src={teacher.avatar} alt={teacher.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground" data-testid={`text-teacher-name-${teacher.id}`}>{teacher.name}</h3>
                  <p className="text-sm font-medium text-purple-600">{teacher.role}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{teacher.experience}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20" data-testid="section-testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3 rounded-full border-purple-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">Fikrlar</Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-testimonials-title">Talabalar fikrlari</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <Card key={t.id} className="border shadow-md p-6" data-testid={`card-testimonial-${t.id}`}>
                <div className="mb-4 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-purple-100" loading="lazy" />
                  <div>
                    <div className="font-semibold text-foreground" data-testid={`text-testimonial-name-${t.id}`}>{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                <Badge variant="outline" className="mt-4 rounded-full text-xs">{t.courseName}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y bg-white py-12" data-testid="section-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">Hamkor kompaniyalar</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {["Deloitte", "PwC", "KPMG", "EY", "BDO", "Grant Thornton", "UzCard", "Kapitalbank", "Artel", "Payme"].map((p) => (
              <span key={p} className="text-base font-bold text-slate-400" data-testid={`text-partner-${p.toLowerCase()}`}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 sm:py-20" data-testid="section-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6 sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl" data-testid="text-cta-title">
                Hoziroq boshlang — kelajagingiz shu yerdan boshlanadi
              </h2>
              <p className="mt-2 text-purple-100">Birinchi qadam sifatida bepul konsultatsiya oling</p>
            </div>
            <Link href="/contacts">
              <Button size="lg" className="gap-2 rounded-full bg-white px-8 text-base font-bold text-purple-700 shadow-lg hover:bg-slate-100 shrink-0" data-testid="button-cta-consultation">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
