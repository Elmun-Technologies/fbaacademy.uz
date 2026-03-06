import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { Handshake, Building2, Users, Gift, CheckCircle2, TrendingUp, Globe } from "lucide-react";

export default function Partnership() {
  useSEO({
    title: "Hamkorlik - FBA Academy",
    description: "FBA Academy bilan hamkorlik imkoniyatlari. Korporativ, affiliate, ta'lim muassasalari va texnologik hamkorlik.",
  });

  return (
    <Layout>
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-partnership-title">Hamkorlik</h1>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            FBA Academy bilan hamkorlik qiling va birgalikda yanada ko'proq insonlarga yordam bering
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-partnership-types">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Hamkorlik turlari</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Building2, title: "Korporativ hamkorlik", desc: "Kompaniyalar uchun maxsus chegirmalar va korporativ ta'lim dasturlari.", benefits: ["Maxsus narxlar", "Individual dastur", "Moslashuvchan jadval"] },
              { icon: Users, title: "Affiliate dastur", desc: "FBA Academy kurslarini tavsiya qiling va har bir talabadan komissiya oling.", benefits: ["20% komissiya", "Shaxsiy hisobot", "Marketing materiallar"] },
              { icon: Globe, title: "Ta'lim muassasalari", desc: "Universitetlar va kollejlar bilan hamkorlik.", benefits: ["Akademik chegirmalar", "Birgalikdagi sertifikat", "Professor almashish"] },
              { icon: Gift, title: "Sponsorlik", desc: "FBA Academy tadbirlarini qo'llab-quvvatlash va brendingizni tanitish.", benefits: ["Brend ko'rinishi", "Networking", "CSR hisoboti"] },
              { icon: TrendingUp, title: "Investitsiya", desc: "FBA Academy rivojlanishiga investitsiya qiling.", benefits: ["Daromad ulushi", "Boshqaruv kengashi", "Strategik qarorlar"] },
              { icon: Handshake, title: "Texnologik hamkorlik", desc: "Platforma va texnologiya sohasida hamkorlik.", benefits: ["API integratsiya", "Data sharing", "Birgalikdagi R&D"] },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 p-6 dark:bg-card" data-testid={`card-partnership-${i}`}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-background">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{item.desc}</p>
                <ul className="space-y-1.5">
                  {item.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-partnership-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl rounded-2xl bg-slate-50 p-6 sm:p-8 text-center dark:bg-card">
            <Handshake className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
            <h2 className="text-2xl font-bold">Hamkorlik so'rovi</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">So'rovingizni qoldiring, biz tez orada bog'lanamiz</p>
            <LeadForm source="partnership" buttonText="So'rov yuborish" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
