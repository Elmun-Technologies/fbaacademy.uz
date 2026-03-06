import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { Handshake, Building2, Users, Gift, ArrowRight, CheckCircle2, TrendingUp, Globe } from "lucide-react";

export default function Partnership() {
  useSEO({
      title: "Hamkorlik - FBA Academy",
      description: "FBA Academy bilan hamkorlik imkoniyatlari. Korporativ, affiliate, ta'lim muassasalari va texnologik hamkorlik.",
    });

  return (
    <Layout>
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl" data-testid="text-partnership-title">Hamkorlik</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            FBA Academy bilan hamkorlik qiling va birgalikda yanada ko'proq insonlarga yordam bering
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-partnership-types">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold">Hamkorlik turlari</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Building2, title: "Korporativ hamkorlik", desc: "Kompaniyalar uchun maxsus chegirmalar va korporativ ta'lim dasturlari. Jamoangizni professional darajaga olib chiqing.", benefits: ["Maxsus narxlar", "Individual dastur", "Moslashuvchan jadval"] },
              { icon: Users, title: "Affiliate dastur", desc: "FBA Academy kurslarini tavsiya qiling va har bir talabadan komissiya oling. Daromad manbaingizni kengaytiring.", benefits: ["20% komissiya", "Shaxsiy hisobot", "Marketing materiallar"] },
              { icon: Globe, title: "Ta'lim muassasalari", desc: "Universitetlar va kollejlar bilan hamkorlik. Talabalarga zamonaviy ko'nikmalarni o'rgatish.", benefits: ["Akdemik chegirmalar", "Birgalikdagi sertifikat", "Professor almashish"] },
              { icon: Gift, title: "Sponsorlik", desc: "FBA Academy tadbirlarini qo'llab-quvvatlash va brendingizni keng auditoriyaga tanitish.", benefits: ["Brend ko'rinishi", "Networking", "CSR hisoboti"] },
              { icon: TrendingUp, title: "Investitsiya", desc: "FBA Academy rivojlanishiga investitsiya qiling va ta'lim sohasining kelajagiga hissa qo'shing.", benefits: ["Daromad ulushi", "Boshqaruv kengashi", "Strategik qarorlar"] },
              { icon: Handshake, title: "Texnologik hamkorlik", desc: "Platforma va texnologiya sohasida hamkorlik. Birgalikda innovatsion yechimlar yarating.", benefits: ["API integratsiya", "Data sharing", "Birgalikdagi R&D"] },
            ].map((item, i) => (
              <Card key={i} className="border-card-border bg-card p-6" data-testid={`card-partnership-${i}`}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                  <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/50 py-16" data-testid="section-partnership-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <Card className="border-card-border bg-card p-6 sm:p-8 text-center">
              <Handshake className="mx-auto mb-3 h-10 w-10 text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-bold">Hamkorlik so'rovi</h2>
              <p className="mt-2 mb-6 text-sm text-muted-foreground">So'rovingizni qoldiring, biz tez orada bog'lanamiz</p>
              <LeadForm source="partnership" buttonText="So'rov yuborish" />
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
