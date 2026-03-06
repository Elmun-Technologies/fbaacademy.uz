import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import { stats, partnerCompanies } from "@/lib/data";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

export default function About() {
  useSEO({
    title: "Biz haqimizda - FBA Academy",
    description: "FBA Academy — O'zbekistondagi yetakchi ta'lim platformasi. 2020-yildan beri minglab insonlarga yangi kasb egallashda yordam bermoqdamiz.",
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">Biz haqimizda</Badge>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid="text-about-title">FBA Academy</h1>
          <p className="mb-10 max-w-2xl text-lg text-slate-300">
            O'zbekistondagi yetakchi ta'lim platformasi. 2020-yildan beri minglab insonlarga xalqaro sertifikatlar bilan karyera qurishda yordam bermoqdamiz.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm" data-testid={`stat-about-${stat.label}`}>
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: Target, title: "Maqsadimiz", text: "Har bir insonga zamonaviy kasb egallash imkoniyatini berish va ularning professional rivojlanishiga hissa qo'shish.", color: "from-purple-500 to-pink-500" },
              { icon: Eye, title: "Viziyamiz", text: "O'zbekistonda eng ishonchli va samarali ta'lim platformasiga aylanish, global standartlarga mos kurslar taqdim etish.", color: "from-blue-500 to-cyan-500" },
              { icon: Heart, title: "Qadriyatlarimiz", text: "Sifat, amaliyot, natija va talabalar muvaffaqiyati — biz uchun eng muhim qadriyatlar.", color: "from-emerald-500 to-teal-500" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-lg sm:p-8 dark:bg-card" data-testid={`card-mission-${i}`}>
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 dark:bg-slate-900/50" data-testid="section-about-timeline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-extrabold sm:text-3xl">Bizning yo'limiz</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              { year: "2020", title: "Asos solingan", desc: "FBA Academy 3 nafar o'qituvchi va 50 ta talaba bilan faoliyatni boshladi." },
              { year: "2021", title: "Kengayish", desc: "10+ yangi kurslar qo'shildi va online ta'lim platformasi ishga tushirildi." },
              { year: "2022", title: "1000+ bitiruvchi", desc: "Birinchi 1000 ta bitiruvchi va 20+ hamkor kompaniyalar." },
              { year: "2023", title: "Korporativ treninglar", desc: "Yirik kompaniyalar uchun maxsus korporativ ta'lim dasturlari ishga tushirildi." },
              { year: "2024", title: "5000+ talaba", desc: "Platforma 5000+ talabaga xizmat ko'rsata boshladi." },
              { year: "2025-2026", title: "Yangi bosqich", desc: "AI va Data Science yo'nalishlari qo'shildi. Xalqaro sertifikatlash boshlandi." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4" data-testid={`timeline-${i}`}>
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </div>
                  {i < 5 && <div className="mt-2 h-full w-0.5 bg-purple-200 dark:bg-purple-800" />}
                </div>
                <div className="pb-2">
                  <Badge variant="outline" className="mb-1 rounded-full border-2 text-xs font-bold">{item.year}</Badge>
                  <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl">Hamkor kompaniyalar</h2>
          <div className="flex flex-wrap gap-3">
            {partnerCompanies.map((company) => (
              <div key={company} className="rounded-full border-2 bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm dark:bg-card" data-testid={`partner-${company}`}>
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Bizga qo'shiling</h2>
            <Link href="/contacts">
              <Button size="lg" className="gap-2 rounded-full bg-white px-8 font-bold text-purple-700 shadow-lg hover:bg-slate-100" data-testid="button-about-cta">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
