import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { teachers, testimonials } from "@/lib/data";
import { ArrowRight, Star, Sparkles, BookOpen, Award, Users } from "lucide-react";

const WHY_TEACHERS = [
  { icon: Award, title: "Xalqaro sertifikatlar", desc: "Barcha mentorlarimiz ACCA, DipIFR yoki CFA kabi xalqaro sertifikatlarga ega.", color: "from-blue-500 to-cyan-500" },
  { icon: Users, title: "Big Four tajribasi", desc: "Deloitte, PwC, KPMG, EY kabi yetakchi firmalarida haqiqiy amaliyot.", color: "from-purple-500 to-pink-500" },
  { icon: BookOpen, title: "Amaliy yondashuv", desc: "Real loyihalar, case study'lar va mock imtihonlar bilan o'qitamiz.", color: "from-emerald-500 to-teal-500" },
];

export default function Teachers() {
  useSEO({
    title: "O'qituvchilar — ACCA, DipIFR, Moliya Ekspertlari | FBA Academy",
    description: "FBA Academy tajribali mentorlar jamoasi: ACCA, DipIFR, Financial Modeling va 1C bo'yicha sertifikatlangan ekspertlar. Big Four firmalarida ishlagan mutaxassislar.",
    keywords: "ACCA o'qituvchi, DipIFR mentor, moliya ekspert, FBA Academy ustoz",
    breadcrumb: [{ name: "O'qituvchilar", url: "https://fbaacademy.uz/teachers" }],
    jsonLd: [
      {
        "@type": "ItemList",
        name: "FBA Academy O'qituvchilari",
        numberOfItems: teachers.length,
        itemListElement: teachers.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Person",
            name: t.name,
            jobTitle: t.role,
            description: t.bio,
            image: t.avatar,
            worksFor: { "@type": "Organization", name: "FBA Academy" },
          },
        })),
      },
    ],
  });

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14"
        data-testid="section-teachers-hero"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <Breadcrumb items={[{ label: "O'qituvchilar" }]} light />
          </div>
          <Badge className="mb-5 inline-flex rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Ekspertlar jamoasi
          </Badge>
          <h1
            className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            data-testid="text-teachers-title"
          >
            Bizning{" "}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              o'qituvchilar
            </span>
          </h1>
          <p className="mb-10 max-w-xl text-lg text-slate-300 leading-relaxed">
            Barcha mentorlarimiz o'z sohasida 8+ yillik amaliy tajribaga ega, xalqaro sertifikatlangan mutaxassislar.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { value: "4", label: "Ekspert mentor" },
              { value: "45+", label: "Umumiy tajriba (yil)" },
              { value: "1000+", label: "O'qitilgan talabalar" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm" data-testid={`stat-teacher-${i}`}>
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACHER CARDS ─────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-teachers-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-extrabold sm:text-3xl" data-testid="text-teachers-grid-title">
            Jamoamiz bilan tanishing
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <article
                key={teacher.id}
                className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-card"
                data-testid={`card-teacher-${teacher.id}`}
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={teacher.avatar}
                    alt={`${teacher.name} — ${teacher.role}, FBA Academy`}
                    width={300}
                    height={256}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-800">
                      {teacher.experience}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-base font-extrabold" data-testid={`text-teacher-name-${teacher.id}`}>
                    {teacher.name}
                  </h2>
                  <p className="mt-0.5 text-sm font-semibold text-purple-600 dark:text-purple-400">{teacher.role}</p>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3">{teacher.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {teacher.courses.map((c) => (
                      <span key={c} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold dark:bg-slate-800">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OUR TEACHERS ──────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 dark:bg-slate-900/50" data-testid="section-why-teachers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-why-title">
            Nega bizning o'qituvchilar?
          </h2>
          <p className="mb-10 max-w-xl text-muted-foreground">
            Har bir mentor aniq natijaga yo'naltirilgan va talabalarning muvaffaqiyatiga shaxsan mas'ul.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {WHY_TEACHERS.map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6 shadow-sm dark:bg-card" data-testid={`card-why-${i}`}>
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT TESTIMONIALS ──────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-extrabold sm:text-3xl" data-testid="text-testimonials-title">
            Talabalarimiz nima deydi?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div key={t.id} className="flex flex-col rounded-xl border bg-white p-6 shadow-sm dark:bg-card" data-testid={`card-testimonial-${t.id}`}>
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="flex-1 text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3 border-t pt-4">
                  <img src={t.avatar} alt={t.name} width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 py-14 sm:py-16" data-testid="section-teachers-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Mentorlarimiz bilan tanishing</h2>
              <p className="mt-2 text-purple-100">Bepul konsultatsiya oling va o'qishni boshlang</p>
            </div>
            <Link href="/contacts">
              <Button size="lg" className="gap-2 rounded-full bg-white px-8 font-bold text-purple-700 hover:bg-slate-100" data-testid="button-teachers-cta">
                Bepul konsultatsiya <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
