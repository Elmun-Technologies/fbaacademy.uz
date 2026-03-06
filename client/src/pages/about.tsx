import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
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
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl" data-testid="text-about-title">Biz haqimizda</h1>
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
            FBA Academy — O'zbekistondagi yetakchi ta'lim platformasi. 2020-yildan beri minglab insonlarga yangi kasb egallashda yordam bermoqdamiz.
          </p>

          <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} data-testid={`stat-about-${stat.label}`}>
                <div className="text-3xl font-extrabold text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              { icon: Target, title: "Maqsadimiz", text: "Har bir insonga zamonaviy kasb egallash imkoniyatini berish va ularning professional rivojlanishiga hissa qo'shish." },
              { icon: Eye, title: "Viziyamiz", text: "O'zbekistonda eng ishonchli va samarali ta'lim platformasiga aylanish, global standartlarga mos kurslar taqdim etish." },
              { icon: Heart, title: "Qadriyatlarimiz", text: "Sifat, amaliyot, natija va talabalar muvaffaqiyati — biz uchun eng muhim qadriyatlar." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 p-6 sm:p-8 dark:bg-card" data-testid={`card-mission-${i}`}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-background">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-about-timeline">
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
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                    {i + 1}
                  </div>
                  {i < 5 && <div className="mt-2 h-full w-px bg-border" />}
                </div>
                <div className="pb-2">
                  <span className="text-xs font-medium text-muted-foreground">{item.year}</span>
                  <h3 className="mt-0.5 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl">Hamkor kompaniyalar</h2>
          <div className="flex flex-wrap gap-3">
            {partnerCompanies.map((company) => (
              <div key={company} className="rounded-full bg-slate-50 px-5 py-2.5 text-sm font-medium text-muted-foreground dark:bg-card" data-testid={`partner-${company}`}>
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Bizga qo'shiling</h2>
            <Link href="/contacts">
              <Button variant="outline" size="lg" className="gap-2 rounded-full" data-testid="button-about-cta">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
