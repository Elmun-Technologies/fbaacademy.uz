import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import YouTubeEmbed from "@/components/youtube-embed";
import { stats, partnerCompanies } from "@/lib/data";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

export default function About() {
  useSEO({
    title: "Biz haqimizda — FBA Academy | ACCA, DipIFR, Moliya ta'limi",
    description: "FBA Academy — O'zbekistondagi yetakchi moliya va buxgalteriya ta'lim platformasi. 2020-yildan beri 5000+ talabalarga ACCA, DipIFR va boshqa xalqaro sertifikatlar bo'yicha ta'lim berib kelmoqdamiz.",
    keywords: "FBA Academy haqida, ACCA ta'lim O'zbekiston, DipIFR kurslari, moliya ta'limi",
    breadcrumb: [{ name: "Biz haqimizda", url: "https://fbaacademy.uz/about" }],
    jsonLd: {
      "@type": "AboutPage",
      "name": "FBA Academy haqida",
      "description": "FBA Academy — O'zbekistondagi yetakchi moliya ta'lim platformasi. 2020-yildan beri 5000+ talabalarga ACCA, DipIFR va boshqa xalqaro sertifikatlar bo'yicha ta'lim berib kelmoqdamiz.",
      "url": "https://fbaacademy.uz/about",
      "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "FBA Academy",
        "foundingDate": "2020",
        "numberOfEmployees": { "@type": "QuantitativeValue", "value": 30 },
        "alumni": { "@type": "QuantitativeValue", "value": 5000 },
        "award": "O'zbekistondagi yetakchi moliya ta'lim platformasi 2024",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Amir Temur ko'chasi, 108",
          "addressLocality": "Toshkent",
          "addressCountry": "UZ",
        },
      },
    },
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-16 sm:py-24" data-testid="section-about-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Biz haqimizda" }]} light />
          </div>
          <Badge className="mb-4 rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">Biz haqimizda</Badge>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid="text-about-title">
            O'zbekistondagi #1<br />
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">moliya ta'lim platformasi</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-slate-300 leading-relaxed">
            2020-yildan beri 5000+ talabalarga ACCA, DipIFR, Financial Modeling, Huquqshunoslik va 1C: Buxgalteriya bo'yicha ta'lim berib kelmoqdamiz.
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

      {/* Mission/Vision/Values */}
      <section className="py-16 sm:py-20" data-testid="section-mission">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Maqsadimiz",
                text: "Har bir insonga xalqaro darajadagi moliya va buxgalteriya ta'limini qulay va samarali usulda yetkazib berish.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Eye,
                title: "Viziyamiz",
                text: "O'zbekistonda ACCA, DipIFR va boshqa xalqaro sertifikatlar bo'yicha eng ishonchli ta'lim markazi bo'lish.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Heart,
                title: "Qadriyatlarimiz",
                text: "Sifat, amaliyot, natija va talabalar muvaffaqiyati — biz uchun eng muhim qadriyatlar. Har bir talaba bizning g'ururumiz.",
                color: "from-emerald-500 to-teal-500",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-lg sm:p-8 dark:bg-card" data-testid={`card-mission-${i}`}>
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube intro video */}
      <section className="bg-slate-50 py-16 sm:py-20" data-testid="section-about-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full border-purple-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">Platforma haqida</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-about-video-title">
                Nima uchun FBA Academy?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Big Four (Deloitte, PwC, KPMG, EY) firma mutaxassislari va xalqaro sertifikatlangan o'qituvchilar bilan ishlaysiz. Har bir kurs real amaliyot va professional bilimga asoslangan.
              </p>
              <ul className="mt-6 space-y-2">
                {["ACCA va DipIFR bo'yicha O'zbekistondagi eng tajribali o'qituvchilar", "Big Four firmalarga ishga joylashtirishda yordam", "0% bo'lib to'lash va grant imkoniyatlari", "Onlayn va offline formatda"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shadow-2xl rounded-2xl overflow-hidden">
              <YouTubeEmbed videoId="R0eCSc9Efqc" title="FBA Academy — platforma haqida" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20" data-testid="section-about-timeline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-extrabold sm:text-3xl">Bizning yo'limiz</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              { year: "2020", title: "Asos solingan", desc: "FBA Academy 3 nafar o'qituvchi va 50 ta talaba bilan faoliyatni boshladi. ACCA kurslari bilan boshlandi." },
              { year: "2021", title: "Kengayish", desc: "DipIFR va Financial Modeling kurslari qo'shildi. Online ta'lim platformasi ishga tushirildi." },
              { year: "2022", title: "1000+ bitiruvchi", desc: "Birinchi 1000 ta bitiruvchi. 20+ hamkor kompaniyalar bilan shartnomalar imzolandi." },
              { year: "2023", title: "Korporativ treninglar", desc: "Yirik kompaniyalar uchun maxsus korporativ ta'lim dasturlari ishga tushirildi. Huquqshunoslik kursi qo'shildi." },
              { year: "2024", title: "5000+ talaba", desc: "Platforma 5000+ talabaga xizmat ko'rsatmoqda. 1C: Buxgalteriya kursi qo'shildi." },
              { year: "2025-2026", title: "Yangi bosqich", desc: "ACCA Applied Knowledge, Applied Skills va Strategic Professional kurslari alohida bosqichlarga bo'lindi. Hamkor kompaniyalar soni 50+ ga yetdi." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4" data-testid={`timeline-${i}`}>
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </div>
                  {i < 5 && <div className="mt-2 h-full w-0.5 bg-purple-200 dark:bg-purple-800" />}
                </div>
                <div className="pb-4">
                  <Badge variant="outline" className="mb-1 rounded-full border-2 text-xs font-bold">{item.year}</Badge>
                  <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-slate-50 py-14 sm:py-16" data-testid="section-partners">
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-14 sm:py-16" data-testid="section-about-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Bizga qo'shiling</h2>
              <p className="mt-2 text-purple-100">Bepul konsultatsiya oling va karyerangizni yangi bosqichga olib chiqing</p>
            </div>
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
