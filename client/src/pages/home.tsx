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
  ArrowRight, Clock, Star, ChevronRight, CheckCircle2, Sparkles, Play
} from "lucide-react";

const iconMap: Record<string, any> = { Code, TrendingUp, Palette, Briefcase, FolderOpen, Users, Award };

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
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-background to-indigo-50 dark:from-purple-950/20 dark:via-background dark:to-indigo-950/20" data-testid="section-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.06),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge variant="secondary" className="mb-6" data-testid="badge-hero-new">
                <Sparkles className="mr-1.5 h-3 w-3" /> 2026 - Yangi kurslar
              </Badge>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl" data-testid="text-hero-title">
                Zamonaviy kasblarni{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  0 dan o'rganing
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground" data-testid="text-hero-subtitle">
                Marketing, IT va dizayn yo'nalishlari bo'yicha amaliy kurslar. Professional mentorlar bilan real loyihalar ustida ishlang.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {categories.map((cat) => {
                  const Icon = iconMap[cat.icon];
                  return (
                    <Link key={cat.slug} href={`/courses?category=${cat.slug}`}>
                      <Button variant="secondary" className="gap-2" data-testid={`button-cat-${cat.slug}`}>
                        <Icon className="h-4 w-4" />
                        {cat.name}
                      </Button>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} data-testid={`stat-${stat.label}`}>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="border-card-border bg-card p-6 sm:p-8" data-testid="card-hero-form">
                <h3 className="mb-1 text-lg font-semibold">Bepul konsultatsiya oling</h3>
                <p className="mb-5 text-sm text-muted-foreground">Mutaxassislarimiz sizga mos kursni tanlashda yordam beradi</p>
                <LeadForm source="hero" buttonText="Konsultatsiya olish" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-20" data-testid="section-categories">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-categories-title">Yo'nalishlar</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Sizga mos yo'nalishni tanlang va professional darajada o'rganing</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon];
              return (
                <Link key={cat.slug} href={`/courses?category=${cat.slug}`}>
                  <div className={`group relative rounded-2xl bg-gradient-to-br ${cat.gradient} p-6 text-white transition-all duration-300 hover-elevate cursor-pointer h-full`} data-testid={`card-category-${cat.slug}`}>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{cat.name}</h3>
                    <ul className="mb-4 space-y-1.5">
                      {categorySubcourses[cat.slug]?.map((sub) => (
                        <li key={sub} className="flex items-center gap-2 text-sm text-white/85">
                          <ChevronRight className="h-3 w-3" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1 text-sm font-medium text-white/90">
                      Batafsil <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-card/50 py-16 sm:py-20" data-testid="section-popular-courses">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className="group border-card-border bg-card transition-all duration-300 hover-elevate cursor-pointer h-full" data-testid={`card-course-${course.id}`}>
                  <div className={`h-2 rounded-t-md bg-gradient-to-r ${course.gradient}`} />
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" data-testid={`badge-category-${course.id}`}>{course.category}</Badge>
                      <Badge variant="outline" data-testid={`badge-level-${course.id}`}>{course.level}</Badge>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold leading-snug" data-testid={`text-course-title-${course.id}`}>{course.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{course.shortDescription}</p>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" /> {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {course.oldPrice && (
                          <span className="text-xs text-muted-foreground line-through" data-testid={`text-old-price-${course.id}`}>{course.oldPrice} UZS</span>
                        )}
                        <span className="font-semibold text-foreground" data-testid={`text-price-${course.id}`}>{course.price} UZS</span>
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
      <section className="py-16 sm:py-20" data-testid="section-why-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-why-us-title">Nima uchun biz?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">FBA Academyni tanlashingiz uchun 4 ta muhim sabab</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUsFeatures.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              return (
                <Card key={i} className="border-card-border bg-card p-6 text-center" data-testid={`card-feature-${i}`}>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                    <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Graduate Results */}
      <section className="bg-card/50 py-16 sm:py-20" data-testid="section-results">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-results-title">Bitiruvchilar natijalari</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Bizning bitiruvchilarimiz haqiqiy natijalarni ko'rsatmoqda</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "O'rtacha maosh o'sishi", value: "3x", sub: "kurs tugagandan so'ng" },
              { label: "Ishga joylashish", value: "92%", sub: "3 oy ichida" },
              { label: "Bitiruvchilar", value: "5000+", sub: "2020-yildan beri" },
              { label: "Hamkor kompaniyalar", value: "50+", sub: "O'zbekiston bo'ylab" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border/50 bg-background p-6 text-center" data-testid={`stat-result-${i}`}>
                <div className="mb-1 text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{item.value}</div>
                <div className="font-medium text-foreground">{item.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-16 sm:py-20" data-testid="section-teachers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="border-card-border bg-card p-5" data-testid={`card-teacher-${teacher.id}`}>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                  <Users className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold" data-testid={`text-teacher-name-${teacher.id}`}>{teacher.name}</h3>
                <p className="text-sm text-muted-foreground">{teacher.role}</p>
                <p className="mt-1 text-xs text-muted-foreground">{teacher.experience}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {teacher.courses.slice(0, 2).map((c) => (
                    <Badge key={c} variant="secondary" className="text-xs">{c}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="bg-card/50 py-16 sm:py-20" data-testid="section-process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-process-title">O'quv jarayoni</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Kurslarimizda o'rganish jarayoni qanday tashkil etilgan</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Nazariy darslar", desc: "Video darslar va materiallar bilan nazariy bilim oling" },
              { step: "02", title: "Amaliy mashqlar", desc: "Har bir mavzu bo'yicha amaliy topshiriqlar bajaring" },
              { step: "03", title: "Loyiha ishlash", desc: "Real loyihalar ustida ishlang va portfolioingizni tuzing" },
              { step: "04", title: "Sertifikat", desc: "Kursni tugatib, FBA Academy sertifikatini oling" },
            ].map((item, i) => (
              <div key={i} className="relative text-center" data-testid={`step-${i}`}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20" data-testid="section-testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-testimonials-title">Talabalar fikrlari</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Kurslarimizni tugatgan talabalar nima deydi</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <Card key={t.id} className="border-card-border bg-card p-5" data-testid={`card-testimonial-${t.id}`}>
                <div className="mb-3 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-medium text-sm" data-testid={`text-testimonial-name-${t.id}`}>{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                  <div className="text-xs text-muted-foreground">{t.courseName}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden" data-testid="section-cta">
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700">
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl" data-testid="text-cta-title">Kelajagingizni bugundan boshlang</h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-white/80">
                Bepul konsultatsiya oling va sizga mos kursni tanlashda yordam beramiz
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contacts">
                  <Button size="lg" variant="secondary" className="gap-2 text-base" data-testid="button-cta-consultation">
                    Bepul konsultatsiya
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="outline" className="gap-2 text-base border-white/30 text-white bg-white/10" data-testid="button-cta-courses">
                    Kurslarni ko'rish
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
