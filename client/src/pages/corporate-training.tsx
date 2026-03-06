import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { partnerCompanies } from "@/lib/data";
import { BarChart3, Users, Target, Lightbulb, Shield, Building2, CheckCircle2 } from "lucide-react";

export default function CorporateTraining() {
  useSEO({
    title: "Korporativ treninglar - FBA Academy",
    description: "Kompaniyangiz jamoasi uchun maxsus ta'lim dasturlari. Moslashuvchan jadval va individual yondashuv.",
  });

  return (
    <Layout>
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-corporate-title">Korporativ treninglar</h1>
              <p className="mb-6 max-w-lg text-muted-foreground leading-relaxed">
                Jamoangizning malakasini oshiring. Sizning kompaniyangiz ehtiyojlariga moslashtirilgan maxsus ta'lim dasturlari.
              </p>
              <div className="space-y-3">
                {[
                  "Kompaniya ehtiyojlariga moslashtirilgan dastur",
                  "Tajribali mentorlar tomonidan olib boriladi",
                  "Amaliy loyihalar va real case-lar",
                  "Natijani o'lchaydigan KPI tizimi",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 sm:p-8 dark:bg-card" data-testid="card-corporate-form">
              <h3 className="mb-1 text-lg font-semibold text-foreground">Bepul konsultatsiya</h3>
              <p className="mb-4 text-sm text-muted-foreground">Jamoangiz uchun maxsus dastur tuzamiz</p>
              <LeadForm source="corporate" buttonText="So'rov yuborish" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-corporate-directions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Yo'nalishlar</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BarChart3, title: "Digital Marketing", desc: "SMM, targetli reklama, SEO, analitika bo'yicha jamoaviy treninglar." },
              { icon: Lightbulb, title: "IT & Dasturlash", desc: "Frontend, Backend, Mobile va Data Science yo'nalishlari bo'yicha." },
              { icon: Target, title: "Sotuv va Boshqaruv", desc: "Sotuv texnikalari, jamoani boshqarish, CRM tizimlarini o'rgatish." },
              { icon: Users, title: "Soft Skills", desc: "Muloqot, prezentatsiya, vaqtni boshqarish va jamoaviy ishlash." },
              { icon: Shield, title: "Kiberxavfsizlik", desc: "Kompaniya ma'lumotlarini himoyalash va xavfsizlik protokollari." },
              { icon: Building2, title: "Maxsus dasturlar", desc: "Sizning kompaniyangiz uchun individual ravishda ishlab chiqilgan dastur." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 p-6 dark:bg-card" data-testid={`card-corp-direction-${i}`}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-background">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-corporate-how">
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
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
                  {item.step}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-corporate-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Bizga ishonishadi</h2>
          <div className="flex flex-wrap gap-3">
            {partnerCompanies.map((company) => (
              <div key={company} className="rounded-full bg-slate-50 px-5 py-2.5 text-sm font-medium text-muted-foreground dark:bg-card">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
