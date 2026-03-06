import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/layout";
import { stats, partnerCompanies } from "@/lib/data";
import { Target, Eye, Heart, ArrowRight, Award, Users, BookOpen, TrendingUp } from "lucide-react";

export default function About() {
  useSEO({
      title: "Biz haqimizda - FBA Academy",
      description: "FBA Academy — O'zbekistondagi yetakchi ta'lim platformasi. 2020-yildan beri minglab insonlarga yangi kasb egallashda yordam bermoqdamiz.",
    });

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl" data-testid="text-about-title">Biz haqimizda</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            FBA Academy — O'zbekistondagi yetakchi ta'lim platformasi. 2020-yildan beri minglab insonlarga yangi kasb egallashda yordam bermoqdamiz.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="-mt-8 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-card-border bg-card p-6 text-center" data-testid={`stat-about-${stat.label}`}>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { icon: Target, title: "Maqsadimiz", text: "Har bir insonga zamonaviy kasb egallash imkoniyatini berish va ularning professional rivojlanishiga hissa qo'shish." },
              { icon: Eye, title: "Viziyamiz", text: "O'zbekistonda eng ishonchli va samarali ta'lim platformasiga aylanish, global standartlarga mos kurslar taqdim etish." },
              { icon: Heart, title: "Qadriyatlarimiz", text: "Sifat, amaliyot, natija va talabalar muvaffaqiyati — biz uchun eng muhim qadriyatlar." },
            ].map((item, i) => (
              <Card key={i} className="border-card-border bg-card p-6 sm:p-8" data-testid={`card-mission-${i}`}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                  <item.icon className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-card/50 py-16 sm:py-20" data-testid="section-about-timeline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">Bizning yo'limiz</h2>
          <div className="mx-auto max-w-3xl space-y-8">
            {[
              { year: "2020", title: "Asos solingan", desc: "FBA Academy 3 nafar o'qituvchi va 50 ta talaba bilan faoliyatni boshladi." },
              { year: "2021", title: "Kengayish", desc: "10+ yangi kurslar qo'shildi va online ta'lim platformasi ishga tushirildi." },
              { year: "2022", title: "1000+ bitiruvchi", desc: "Birinchi 1000 ta bitiruvchi va 20+ hamkor kompaniyalar." },
              { year: "2023", title: "Korporativ treninglar", desc: "Yirik kompaniyalar uchun maxsus korporativ ta'lim dasturlari ishga tushirildi." },
              { year: "2024", title: "5000+ talaba", desc: "Platforma 5000+ talabaga xizmat ko'rsata boshladi." },
              { year: "2025-2026", title: "Yangi bosqich", desc: "AI va Data Science yo'nalishlari qo'shildi. Xalqaro sertifikatlash boshlandi." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6" data-testid={`timeline-${i}`}>
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  {i < 5 && <div className="mt-2 h-full w-0.5 bg-border" />}
                </div>
                <div className="pb-2">
                  <span className="text-xs font-medium text-muted-foreground">{item.year}</span>
                  <h3 className="mt-1 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 sm:py-20" data-testid="section-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">Hamkor kompaniyalar</h2>
          <p className="mb-10 text-center text-muted-foreground">Bitiruvchilarimiz ishlaydigan yetakchi kompaniyalar</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partnerCompanies.map((company) => (
              <div key={company} className="flex h-14 items-center justify-center rounded-md border border-border/50 bg-card px-6 text-sm font-medium text-muted-foreground" data-testid={`partner-${company}`}>
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Bizga qo'shiling</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">
            Yangi kasbingizni bugundan boshlang. Bepul konsultatsiya oling.
          </p>
          <Link href="/contacts">
            <Button size="lg" variant="secondary" className="mt-6 gap-2" data-testid="button-about-cta">
              Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
