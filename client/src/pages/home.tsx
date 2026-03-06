import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { courses, teachers, testimonials, stats, categories, whyUsFeatures, graduateResults } from "@/lib/data";
import {
  Code, TrendingUp, Palette, Briefcase, FolderOpen, Users, Award,
  ArrowRight, Clock, Star, Play, Target, ArrowUpRight
} from "lucide-react";

const iconMap: Record<string, any> = { Code, TrendingUp, Palette, Briefcase, FolderOpen, Users, Award };

const categoryColors: Record<string, string> = {
  acca: "bg-blue-50 dark:bg-blue-950/20",
  finance: "bg-emerald-50 dark:bg-emerald-950/20",
  law: "bg-amber-50 dark:bg-amber-950/20",
  accounting: "bg-violet-50 dark:bg-violet-950/20",
};

export default function Home() {
  useSEO({
    title: "FBA Academy - ACCA, DipIFR, Moliya va Buxgalteriya kurslari",
    description: "FBA Academy — O'zbekistondagi yetakchi ta'lim platformasi. ACCA, DipIFR, Financial Modeling, 1C va Huquqshunoslik kurslari.",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]" data-testid="text-hero-title">
                Xalqaro sertifikatlar bilan karyerangizni yangi bosqichga olib chiqing
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground" data-testid="text-hero-subtitle">
                ACCA, DipIFR, Financial Modeling, 1C va Huquqshunoslik bo'yicha professional kurslar
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/courses">
                  <Button size="lg" variant="outline" className="gap-2 rounded-full text-base" data-testid="button-hero-courses">
                    Mashhur dasturlar
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/courses?category=${cat.slug}`}>
                  <div className={`group cursor-pointer rounded-2xl ${categoryColors[cat.slug]} p-5 sm:p-6 transition-all duration-200`} data-testid={`card-category-${cat.slug}`}>
                    <h3 className="mb-1 font-semibold text-foreground">{cat.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-6 sm:p-8 dark:bg-emerald-950/20" data-testid="card-hero-photo">
              <div className="mb-4 overflow-hidden rounded-xl">
                <img src="/images/hero-bg.png" alt="FBA Academy" className="h-44 w-full object-cover sm:h-52" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ekspertlar bilan jonli muloqot formati, savollarni muhokama qilish va murakkab mavzularni tushunish
              </p>
              <Link href="/contacts">
                <Button variant="outline" className="mt-4 gap-2 rounded-full" data-testid="button-hero-consultation">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/about">
                <div className="group cursor-pointer rounded-2xl bg-blue-50 p-5 sm:p-6 h-full flex flex-col justify-between dark:bg-blue-950/20" data-testid="card-hero-universities">
                  <h3 className="font-semibold text-foreground">Xalqaro sertifikatlar</h3>
                  <ArrowRight className="mt-4 h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
              <Link href="/corporate">
                <div className="group cursor-pointer rounded-2xl bg-blue-50 p-5 sm:p-6 h-full flex flex-col justify-between dark:bg-blue-950/20" data-testid="card-hero-corporate">
                  <h3 className="font-semibold text-foreground">Korporativ ta'lim</h3>
                  <ArrowRight className="mt-4 h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 sm:py-20" data-testid="section-popular-courses">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-popular-title">
              Eng mashhur dasturlar
            </h2>
            <Link href="/courses">
              <Button variant="outline" className="gap-1 rounded-full" data-testid="button-view-all-courses">
                Barcha kurslar <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.slice(0, 4).map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className="group cursor-pointer border-0 bg-slate-50 dark:bg-card transition-all duration-200 hover-elevate h-full overflow-visible" data-testid={`card-course-${course.id}`}>
                  <div className="p-4 pb-3">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="rounded-full text-xs">{course.category}</Badge>
                      {course.discount && (
                        <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">-{course.discount}</span>
                      )}
                    </div>
                    <h3 className="mb-2 font-semibold leading-snug text-foreground" data-testid={`text-course-title-${course.id}`}>{course.title}</h3>
                    <p className="mb-3 text-xs text-muted-foreground line-clamp-2">{course.shortDescription}</p>
                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/30">
                      <span className="text-xs text-muted-foreground">{course.duration}</span>
                      <span className="text-sm font-bold text-foreground">{course.price} <span className="text-xs font-normal text-muted-foreground">UZS</span></span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Stories */}
      <section className="py-16 sm:py-20" data-testid="section-graduates">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-graduates-title">
              Bitiruvchilarimiz<br />
              tarixi bilan tanishing
            </h2>
            <Link href="/case-studies">
              <Button variant="outline" className="gap-1 rounded-full" data-testid="button-view-cases">
                Barchasi <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {graduateResults.slice(0, 3).map((grad) => (
              <Card key={grad.id} className="border-0 bg-slate-50 dark:bg-card overflow-hidden" data-testid={`card-grad-${grad.id}`}>
                <div className="relative">
                  <img src={grad.avatar} alt={grad.name} className="h-52 w-full object-cover" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <Badge variant="outline" className="rounded-full bg-white/90 backdrop-blur-sm text-xs">{grad.courseName}</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground" data-testid={`text-grad-name-${grad.id}`}>
                    {grad.beforeRole}dan {grad.afterRole}ga
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{grad.story}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 sm:py-20" data-testid="section-help">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-help-title">
            Qayerdan boshlashni bilmasangiz
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-6 sm:p-8 dark:bg-emerald-950/20" data-testid="card-help-consultation">
              <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">
                Express-konsultatsiyada yo'nalishni aniqlang
              </h3>
              <p className="mb-5 text-sm text-muted-foreground leading-relaxed">
                ACCA, DipIFR yoki boshqa yo'nalishlardan qaysi biri sizga mos? Anketani to'ldiring va bepul maslahat oling
              </p>
              <Link href="/contacts">
                <Button variant="outline" className="gap-2 rounded-full" data-testid="button-help-profession">
                  Yo'nalishni tanlash
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl bg-blue-50 p-6 sm:p-8 dark:bg-blue-950/20" data-testid="card-help-free">
              <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">
                Barcha kurslarimiz bilan tanishing
              </h3>
              <ul className="mb-5 space-y-1 text-sm text-muted-foreground">
                <li>ACCA (3 bosqich)</li>
                <li>DipIFR — IFRS diplomi</li>
                <li>Financial Modeling, 1C, Huquqshunoslik</li>
              </ul>
              <Link href="/courses">
                <Button variant="outline" className="gap-2 rounded-full" data-testid="button-help-free">
                  Kurslarni ko'rish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20" data-testid="section-stats">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} data-testid={`stat-${stat.label}`}>
                <div className="text-3xl font-extrabold text-foreground sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-16 sm:py-20" data-testid="section-teachers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-teachers-title">O'qituvchilar</h2>
            <Link href="/teachers">
              <Button variant="outline" className="gap-1 rounded-full" data-testid="button-all-teachers">
                Barchasi <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <div key={teacher.id} data-testid={`card-teacher-${teacher.id}`}>
                <div className="mb-3 overflow-hidden rounded-2xl">
                  <img src={teacher.avatar} alt={teacher.name} className="aspect-[3/4] w-full object-cover" />
                </div>
                <h3 className="font-semibold text-foreground" data-testid={`text-teacher-name-${teacher.id}`}>{teacher.name}</h3>
                <p className="text-sm text-muted-foreground">{teacher.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20" data-testid="section-testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-testimonials-title">Talabalar fikrlari</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <Card key={t.id} className="border-0 bg-slate-50 p-5 dark:bg-card" data-testid={`card-testimonial-${t.id}`}>
                <div className="mb-4 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-medium text-foreground" data-testid={`text-testimonial-name-${t.id}`}>{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20" data-testid="section-why-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-why-us-title">Nima uchun aynan biz?</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUsFeatures.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={i} className="rounded-2xl bg-slate-50 p-6 dark:bg-card" data-testid={`card-feature-${i}`}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-background">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-10 sm:py-12" data-testid="section-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl" data-testid="text-cta-title">
              Savollar qoldimi? — yordam beramiz
            </h2>
            <Link href="/contacts">
              <Button variant="outline" size="lg" className="gap-2 rounded-full" data-testid="button-cta-consultation">
                Konsultatsiya olish
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
