import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { courses, teachers, testimonials, stats, categories, whyUsFeatures } from "@/lib/data";
import {
  Code, TrendingUp, Palette, Briefcase, FolderOpen, Users, Award,
  ArrowRight, Clock, Star, ChevronRight, CheckCircle2, Sparkles, Play,
  GraduationCap, Target, Zap
} from "lucide-react";

const iconMap: Record<string, any> = { Code, TrendingUp, Palette, Briefcase, FolderOpen, Users, Award };

const categoryImages: Record<string, string> = {
  programming: "/images/course-programming.png",
  marketing: "/images/course-marketing.png",
  design: "/images/course-design.png",
  business: "/images/course-business.png",
};

const categorySubcourses: Record<string, string[]> = {
  programming: ["Web Dasturlash", "Python", "Mobile Development", "Data Science"],
  marketing: ["SMM", "Targetli reklama", "SEO", "Email marketing"],
  design: ["Grafik dizayn", "UI/UX", "Motion dizayn", "Brending"],
  business: ["Biznes boshqaruv", "Startap", "Moliyaviy savodxonlik", "Sotuv"],
};

export default function Home() {
  useSEO({
    title: "FBA Academy - Zamonaviy kasblarni o'rganing | Marketing, IT, Dizayn",
    description: "FBA Academy — O'zbekistondagi yetakchi ta'lim platformasi. Marketing, IT va dizayn yo'nalishlari bo'yicha amaliy kurslar.",
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[680px]" data-testid="section-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <img src="/images/hero-bg.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300 backdrop-blur-sm" data-testid="badge-hero-new">
                <Sparkles className="h-3.5 w-3.5" /> 2026 - Yangi kurslar mavjud
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]" data-testid="text-hero-title">
                Zamonaviy kasblarni<br />
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  0 dan o'rganing
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300" data-testid="text-hero-subtitle">
                Marketing, IT va dizayn yo'nalishlari bo'yicha amaliy kurslar. Professional mentorlar bilan real loyihalar ustida ishlang.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {categories.map((cat) => {
                  const Icon = iconMap[cat.icon];
                  return (
                    <Link key={cat.slug} href={`/courses?category=${cat.slug}`}>
                      <Button variant="outline" size="sm" className="gap-2 rounded-full border-white/10 bg-white/5 text-white/90 backdrop-blur-sm" data-testid={`button-cat-${cat.slug}`}>
                        <Icon className="h-4 w-4 text-purple-400" />
                        {cat.name}
                      </Button>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} data-testid={`stat-${stat.label}`}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl sm:p-8" data-testid="card-hero-form">
                <h3 className="mb-1 text-lg font-semibold text-white">Bepul konsultatsiya oling</h3>
                <p className="mb-5 text-sm text-slate-400">Mutaxassislarimiz sizga mos kursni tanlashda yordam beradi</p>
                <LeadForm source="hero" buttonText="Konsultatsiya olish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 sm:py-24" data-testid="section-categories">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-categories-title">Yo'nalishlar</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">Sizga mos yo'nalishni tanlang va professional darajada o'rganing</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon];
              return (
                <Link key={cat.slug} href={`/courses?category=${cat.slug}`}>
                  <div className="group relative cursor-pointer overflow-hidden rounded-2xl" data-testid={`card-category-${cat.slug}`}>
                    <div className="aspect-[4/5]">
                      <img src={categoryImages[cat.slug]} alt={cat.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-80`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-white">{cat.name}</h3>
                      <ul className="space-y-1">
                        {categorySubcourses[cat.slug]?.slice(0, 3).map((sub) => (
                          <li key={sub} className="flex items-center gap-1.5 text-sm text-white/80">
                            <ChevronRight className="h-3 w-3" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex items-center gap-1 text-sm font-medium text-white">
                        Batafsil <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24 dark:from-slate-900/50 dark:to-background" data-testid="section-popular-courses">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-popular-title">Eng mashhur kurslar</h2>
              <p className="mt-3 text-muted-foreground">Talabalarimiz orasida eng ko'p tanlangan kurslar</p>
            </div>
            <Link href="/courses">
              <Button variant="outline" className="hidden gap-1 sm:flex" data-testid="button-view-all-courses">
                Barcha kurslar <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className="group border-card-border bg-card transition-all duration-300 hover-elevate cursor-pointer h-full overflow-visible" data-testid={`card-course-${course.id}`}>
                  <div className="relative overflow-hidden rounded-t-md">
                    <img src={course.image} alt={course.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge variant="secondary" className="bg-white/90 text-slate-800 dark:bg-slate-900/90 dark:text-slate-200 backdrop-blur-sm">{course.category}</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-semibold leading-snug" data-testid={`text-course-title-${course.id}`}>{course.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{course.shortDescription}</p>
                    <div className="flex items-center justify-between gap-2 flex-wrap border-t border-border/50 pt-3">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {course.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {course.oldPrice && (
                          <span className="text-xs text-muted-foreground line-through" data-testid={`text-old-price-${course.id}`}>{course.oldPrice}</span>
                        )}
                        <span className="font-bold text-foreground" data-testid={`text-price-${course.id}`}>{course.price} <span className="text-xs font-normal text-muted-foreground">UZS</span></span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/courses">
              <Button variant="outline" className="gap-1" data-testid="button-view-all-courses-mobile">
                Barcha kurslar <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24" data-testid="section-why-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-why-us-title">Nima uchun aynan biz?</h2>
              <p className="mt-3 max-w-md text-muted-foreground">FBA Academyni tanlashingiz uchun 4 ta muhim sabab</p>
              <div className="mt-8 space-y-5">
                {whyUsFeatures.map((feature, i) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div key={i} className="flex gap-4" data-testid={`card-feature-${i}`}>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                        <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={stat.label} className={`rounded-2xl border border-border/50 bg-card p-6 ${i === 0 ? 'mt-8' : i === 3 ? '-mt-4' : ''}`} data-testid={`stat-why-${stat.label}`}>
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24 dark:from-slate-900/50 dark:to-background" data-testid="section-teachers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-teachers-title">O'qituvchilar</h2>
              <p className="mt-3 text-muted-foreground">Sohasining tajribali mutaxassislari sizga yo'l ko'rsatadi</p>
            </div>
            <Link href="/teachers">
              <Button variant="outline" className="hidden gap-1 sm:flex" data-testid="button-all-teachers">
                Barchasi <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="group" data-testid={`card-teacher-${teacher.id}`}>
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img src={teacher.avatar} alt={teacher.name} className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex flex-wrap gap-1.5">
                      {teacher.courses.slice(0, 1).map((c) => (
                        <span key={c} className="rounded-md bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-sm">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold" data-testid={`text-teacher-name-${teacher.id}`}>{teacher.name}</h3>
                <p className="text-sm text-muted-foreground">{teacher.role}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{teacher.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-20 sm:py-24" data-testid="section-process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-process-title">O'quv jarayoni</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Kurslarimizda o'rganish jarayoni qanday tashkil etilgan</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Nazariy darslar", desc: "Video darslar va materiallar bilan nazariy bilim oling", icon: Play },
              { step: "02", title: "Amaliy mashqlar", desc: "Har bir mavzu bo'yicha amaliy topshiriqlar bajaring", icon: Code },
              { step: "03", title: "Loyiha ishlash", desc: "Real loyihalar ustida ishlang va portfolioingizni tuzing", icon: Target },
              { step: "04", title: "Sertifikat", desc: "Kursni tugatib, FBA Academy sertifikatini oling", icon: Award },
            ].map((item, i) => (
              <div key={i} className="relative" data-testid={`step-${i}`}>
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/20">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Qadam {item.step}</span>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24 dark:from-slate-900/50 dark:to-background" data-testid="section-testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-testimonials-title">Talabalar fikrlari</h2>
            <p className="mt-3 text-muted-foreground">Kurslarimizni tugatgan talabalar nima deydi</p>
          </div>

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-extrabold">4.9 <span className="text-lg font-normal text-muted-foreground">/ 5</span></div>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">O'rtacha baho</p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-extrabold">5000+</div>
              <p className="mt-2 text-sm text-muted-foreground">Mamnun bitiruvchilar</p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-extrabold">96%</div>
              <p className="mt-2 text-sm text-muted-foreground">Kurslardan mamnun talabalar</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <Card key={t.id} className="border-card-border bg-card p-5" data-testid={`card-testimonial-${t.id}`}>
                <div className="mb-4 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-sm" data-testid={`text-testimonial-name-${t.id}`}>{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="mb-3 flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-xs font-medium text-muted-foreground">{t.rating}/5</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                <div className="mt-3 text-xs text-muted-foreground">{t.courseName}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Results Stats */}
      <section className="py-20 sm:py-24" data-testid="section-results">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-700 p-8 sm:p-12 lg:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl" data-testid="text-results-title">Bitiruvchilar natijalari</h2>
                <p className="mt-3 max-w-md text-white/70">
                  Bizning bitiruvchilarimiz haqiqiy natijalarni ko'rsatmoqda — maoshlar oshdi, yangi ish joylar topildi
                </p>
                <Link href="/case-studies">
                  <Button size="lg" variant="secondary" className="mt-6 gap-2" data-testid="button-results-link">
                    Batafsil <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "O'rtacha maosh o'sishi", value: "3x" },
                  { label: "Ishga joylashish", value: "92%" },
                  { label: "Bitiruvchilar", value: "5000+" },
                  { label: "Hamkor kompaniyalar", value: "50+" },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm" data-testid={`stat-result-${i}`}>
                    <div className="text-3xl font-extrabold text-white">{item.value}</div>
                    <div className="mt-1 text-sm text-white/70">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative" data-testid="section-cta">
        <div className="bg-slate-950">
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl" data-testid="text-cta-title">Kelajagingizni bugundan boshlang</h2>
                <p className="mt-4 max-w-md text-lg text-slate-400">
                  Bepul konsultatsiya oling va sizga mos kursni tanlashda yordam beramiz. Birinchi qadam siz bilan boshlanadi.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/contacts">
                    <Button size="lg" className="gap-2 text-base" data-testid="button-cta-consultation">
                      Bepul konsultatsiya
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/courses">
                    <Button size="lg" variant="outline" className="gap-2 text-base border-slate-700 text-slate-300" data-testid="button-cta-courses">
                      Kurslarni ko'rish
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
                <h3 className="mb-1 text-lg font-semibold text-white">Tez so'rov qoldiring</h3>
                <p className="mb-5 text-sm text-slate-400">Mutaxassislarimiz 15 daqiqa ichida qo'ng'iroq qiladi</p>
                <LeadForm source="cta" buttonText="Yuborish" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
