import { useSEO } from "@/hooks/use-seo";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import LeadForm from "@/components/lead-form";
import { Handshake, Building2, Users, Gift, CheckCircle2, TrendingUp, Globe } from "lucide-react";

export default function Partnership() {
  useSEO({
    title: "Hamkorlik — Korporativ, Affiliate, Ta'lim | FBA Academy",
    description: "FBA Academy bilan hamkorlik qiling: korporativ treninglar, affiliate dastur, universitetlar bilan hamkorlik va sponsorlik imkoniyatlari.",
    keywords: "FBA Academy hamkorlik, ACCA korporativ trening, ta'lim muassasa hamkorlik",
    breadcrumb: [{ name: "Hamkorlik", url: "https://fbaacademy.uz/partnership" }],
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Hamkorlik" }]} light />
          </div>
          <Badge className="mb-4 rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">Hamkorlik</Badge>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-partnership-title">Hamkorlik</h1>
          <p className="max-w-2xl text-slate-300">
            FBA Academy bilan hamkorlik qiling va birgalikda yanada ko'proq insonlarga yordam bering
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-partnership-types">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Hamkorlik turlari</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Building2, title: "Korporativ hamkorlik", desc: "Kompaniyalar uchun maxsus chegirmalar va korporativ ta'lim dasturlari.", benefits: ["Maxsus narxlar", "Individual dastur", "Moslashuvchan jadval"], gradient: "from-blue-500 to-cyan-500" },
              { icon: Users, title: "Affiliate dastur", desc: "FBA Academy kurslarini tavsiya qiling va har bir talabadan komissiya oling.", benefits: ["20% komissiya", "Shaxsiy hisobot", "Tavsiya havolasi"], gradient: "from-purple-500 to-pink-500" },
              { icon: Globe, title: "Ta'lim muassasalari", desc: "Universitetlar va kollejlar bilan hamkorlik.", benefits: ["Akademik chegirmalar", "Birgalikdagi sertifikat", "Professor almashish"], gradient: "from-emerald-500 to-teal-500" },
              { icon: Gift, title: "Sponsorlik", desc: "FBA Academy tadbirlarini qo'llab-quvvatlash va brendingizni tanitish.", benefits: ["Brend ko'rinishi", "Networking", "CSR hisoboti"], gradient: "from-amber-500 to-orange-500" },
              { icon: TrendingUp, title: "Investitsiya", desc: "FBA Academy rivojlanishiga investitsiya qiling.", benefits: ["Daromad ulushi", "Boshqaruv kengashi", "Strategik qarorlar"], gradient: "from-indigo-500 to-violet-500" },
              { icon: Handshake, title: "Texnologik hamkorlik", desc: "Platforma va texnologiya sohasida hamkorlik.", benefits: ["API integratsiya", "Data sharing", "Birgalikdagi R&D"], gradient: "from-rose-500 to-pink-500" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-lg dark:bg-card" data-testid={`card-partnership-${i}`}>
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-md`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
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

      <section className="py-16 sm:py-20" data-testid="section-partnership-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-8 text-center shadow-lg dark:border-purple-800 dark:from-purple-950/30 dark:to-pink-950/30">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
              <Handshake className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold">Hamkorlik so'rovi</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">So'rovingizni qoldiring, biz tez orada bog'lanamiz</p>
            <LeadForm source="partnership" buttonText="So'rov yuborish" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
