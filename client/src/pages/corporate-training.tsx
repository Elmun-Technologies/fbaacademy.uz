import { useSEO } from "@/hooks/use-seo";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { partnerCompanies } from "@/lib/data";
import { BarChart3, Users, Target, Award, BookOpen, Building2, CheckCircle2 } from "lucide-react";

export default function CorporateTraining() {
  useSEO({
    title: "Korporativ treninglar — ACCA, IFRS, Moliya | FBA Academy",
    description: "Kompaniyangiz moliya va buxgalteriya jamoasi uchun ACCA, DipIFR, IFRS va Financial Modeling bo'yicha korporativ treninglar. Moslashuvchan jadval, xalqaro sertifikatlar.",
    keywords: "korporativ trening ACCA, IFRS trening kompaniya, moliya treningi O'zbekiston",
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge className="mb-4 rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">Korporativ</Badge>
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-corporate-title">Korporativ treninglar</h1>
              <p className="mb-6 max-w-lg text-slate-300 leading-relaxed">
                Jamoangizning malakasini oshiring. Sizning kompaniyangiz ehtiyojlariga moslashtirilgan maxsus ta'lim dasturlari.
              </p>
              <div className="space-y-3">
                {[
                  "Kompaniya ehtiyojlariga moslashtirilgan dastur",
                  "Tajribali mentorlar tomonidan olib boriladi",
                  "Amaliy loyihalar va real case-lar",
                  "Natijani o'lchaydigan KPI tizimi",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8 dark:bg-card" data-testid="card-corporate-form">
              <h3 className="mb-1 text-lg font-bold text-foreground">Bepul konsultatsiya</h3>
              <p className="mb-4 text-sm text-muted-foreground">Jamoangiz uchun maxsus dastur tuzamiz</p>
              <LeadForm source="corporate" buttonText="So'rov yuborish" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-corporate-directions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Yo'nalishlar</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Award, title: "ACCA treningi", desc: "Kompaniya buxgalter va moliyachilariga ACCA Applied Knowledge, Skills, Professional darajalarida trening.", gradient: "from-blue-500 to-cyan-500" },
              { icon: BarChart3, title: "IFRS / DipIFR", desc: "Moliyaviy hisobotlarni xalqaro IFRS standartlariga o'tkazish bo'yicha jamoaviy treninglar.", gradient: "from-emerald-500 to-teal-500" },
              { icon: Target, title: "Financial Modeling", desc: "Moliya bo'limi jamoasi uchun DCF, kompaniya baholash va investitsiya tahlili treningi.", gradient: "from-violet-500 to-purple-600" },
              { icon: BookOpen, title: "1C: Buxgalteriya", desc: "Kompaniyangiz uchun 1C: Buxgalteriya 8.3 ni to'liq joriy etish va xodimlarni o'qitish.", gradient: "from-amber-500 to-orange-500" },
              { icon: Users, title: "Huquqiy savodxonlik", desc: "Moliya, mehnat va soliq huquqi bo'yicha jamoaviy treninglar.", gradient: "from-rose-500 to-pink-500" },
              { icon: Building2, title: "Maxsus dasturlar", desc: "Sizning kompaniyangiz ehtiyojlariga individual ravishda ishlab chiqilgan maxsus ta'lim dasturi.", gradient: "from-indigo-500 to-violet-500" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-md dark:bg-card" data-testid={`card-corp-direction-${i}`}>
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-md`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 dark:bg-slate-900/50" data-testid="section-corporate-how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Qanday ishlaydi?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Tahlil", desc: "Kompaniya ehtiyojlarini aniqlaymiz" },
              { step: "02", title: "Dastur", desc: "Maxsus o'quv dasturini tuzamiz" },
              { step: "03", title: "Trening", desc: "Professional mentorlar o'qitadi" },
              { step: "04", title: "Natija", desc: "KPI asosida natijani o'lchaymiz" },
            ].map((item, i) => (
              <div key={i} data-testid={`step-corp-${i}`}>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white shadow-md">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-corporate-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Bizga ishonishadi</h2>
          <div className="flex flex-wrap gap-3">
            {partnerCompanies.map((company) => (
              <div key={company} className="rounded-full border-2 bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm dark:bg-card">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
