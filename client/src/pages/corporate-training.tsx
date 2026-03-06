import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { partnerCompanies } from "@/lib/data";
import { ArrowRight, Building2, Users, BarChart3, CheckCircle2, Target, Lightbulb, Shield } from "lucide-react";

export default function CorporateTraining() {
  useSEO({
      title: "Korporativ treninglar - FBA Academy",
      description: "Kompaniyangiz jamoasi uchun maxsus ta'lim dasturlari. Moslashuvchan jadval va individual yondashuv.",
    });

  return (
    <Layout>
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl" data-testid="text-corporate-title">Korporativ treninglar</h1>
              <p className="mt-4 max-w-lg text-lg text-white/80">
                Jamoangizning malakasini oshiring. Sizning kompaniyangiz ehtiyojlariga moslashtirilgan maxsus ta'lim dasturlari.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Kompaniya ehtiyojlariga moslashtirilgan dastur",
                  "Tajribali mentorlar tomonidan olib boriladi",
                  "Amaliy loyihalar va real case-lar",
                  "Natijani o'lchaydigan KPI tizimi",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-0 bg-white/95 dark:bg-card p-6 sm:p-8 backdrop-blur" data-testid="card-corporate-form">
              <h3 className="mb-1 text-lg font-semibold text-foreground">Bepul konsultatsiya</h3>
              <p className="mb-4 text-sm text-muted-foreground">Jamoangiz uchun maxsus dastur tuzamiz</p>
              <LeadForm source="corporate" buttonText="So'rov yuborish" />
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-corporate-directions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold">Yo'nalishlar</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BarChart3, title: "Digital Marketing", desc: "SMM, targetli reklama, SEO, analitika bo'yicha jamoaviy treninglar." },
              { icon: Lightbulb, title: "IT & Dasturlash", desc: "Frontend, Backend, Mobile va Data Science yo'nalishlari bo'yicha." },
              { icon: Target, title: "Sotuv va Boshqaruv", desc: "Sotuv texnikalari, jamoani boshqarish, CRM tizimlarini o'rgatish." },
              { icon: Users, title: "Soft Skills", desc: "Muloqot, prezentatsiya, vaqtni boshqarish va jamoaviy ishlash." },
              { icon: Shield, title: "Kiberxavfsizlik", desc: "Kompaniya ma'lumotlarini himoyalash va xavfsizlik protokollari." },
              { icon: Building2, title: "Maxsus dasturlar", desc: "Sizning kompaniyangiz uchun individual ravishda ishlab chiqilgan dastur." },
            ].map((item, i) => (
              <Card key={i} className="border-card-border bg-card p-6" data-testid={`card-corp-direction-${i}`}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                  <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/50 py-16" data-testid="section-corporate-how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold">Qanday ishlaydi?</h2>
          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Tahlil", desc: "Kompaniya ehtiyojlarini aniqlaymiz" },
              { step: "02", title: "Dastur", desc: "Maxsus o'quv dasturini tuzamiz" },
              { step: "03", title: "Trening", desc: "Professional mentorlar o'qitadi" },
              { step: "04", title: "Natija", desc: "KPI asosida natijani o'lchaymiz" },
            ].map((item, i) => (
              <div key={i} className="text-center" data-testid={`step-corp-${i}`}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-corporate-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold">Bizga ishonishadi</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partnerCompanies.map((company) => (
              <div key={company} className="flex h-12 items-center justify-center rounded-md border border-border/50 bg-card px-5 text-sm font-medium text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
