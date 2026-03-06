import { useSEO } from "@/hooks/use-seo";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import LeadForm from "@/components/lead-form";
import { partnerCompanies } from "@/lib/data";
import {
  Handshake, Building2, Users, Gift, CheckCircle2,
  TrendingUp, Globe, ArrowRight, Sparkles,
} from "lucide-react";

const PARTNERSHIP_TYPES = [
  {
    icon: Building2, title: "Korporativ hamkorlik",
    desc: "Kompaniyalar uchun maxsus chegirmalar va korporativ ta'lim dasturlari.",
    benefits: ["Maxsus narxlar", "Individual dastur", "Moslashuvchan jadval"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users, title: "Affiliate dastur",
    desc: "FBA Academy kurslarini tavsiya qiling va har bir talabadan komissiya oling.",
    benefits: ["20% komissiya", "Shaxsiy hisobot paneli", "Tavsiya havolasi"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe, title: "Ta'lim muassasalari",
    desc: "Universitetlar va kollejlar bilan akademik hamkorlik.",
    benefits: ["Akademik chegirmalar", "Birgalikdagi sertifikat", "Professor almashish"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Gift, title: "Sponsorlik",
    desc: "FBA Academy tadbirlarini qo'llab-quvvatlash va brendingizni tanitish.",
    benefits: ["Brend ko'rinishi", "Networking imkoniyati", "CSR hisoboti"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: TrendingUp, title: "Strategik investitsiya",
    desc: "FBA Academy rivojlanishiga investitsiya qiling.",
    benefits: ["Daromad ulushi", "Boshqaruv kengashi", "Strategik qarorlar"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Handshake, title: "Texnologik hamkorlik",
    desc: "Platforma va texnologiya sohasida hamkorlik.",
    benefits: ["API integratsiya", "Data sharing", "Birgalikdagi R&D"],
    color: "from-rose-500 to-pink-500",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Murojaat qiling", desc: "Quyidagi forma orqali so'rov yuboring." },
  { num: "02", title: "Muzokaralar", desc: "Mutaxassislarimiz siz bilan bog'lanadi va shartlarni muhokama qiladi." },
  { num: "03", title: "Shartnoma", desc: "Hamkorlik shartnomasini imzolaymiz." },
  { num: "04", title: "Boshlaymiz", desc: "Birgalikda natijaga erisamiz." },
];

export default function Partnership() {
  useSEO({
    title: "Hamkorlik — Korporativ, Affiliate, Ta'lim | FBA Academy",
    description: "FBA Academy bilan hamkorlik qiling: korporativ treninglar, affiliate dastur, universitetlar bilan hamkorlik va sponsorlik imkoniyatlari.",
    keywords: "FBA Academy hamkorlik, ACCA korporativ trening, ta'lim muassasa hamkorlik, affiliate dastur",
    breadcrumb: [{ name: "Hamkorlik", url: "https://fbaacademy.uz/partnership" }],
  });

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14"
        data-testid="section-partnership-hero"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <Breadcrumb items={[{ label: "Hamkorlik" }]} light />
          </div>
          <Badge className="mb-5 inline-flex rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Hamkorlik
          </Badge>
          <h1
            className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            data-testid="text-partnership-title"
          >
            FBA Academy bilan{" "}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              hamkorlik qiling
            </span>
          </h1>
          <p className="mb-10 max-w-xl text-lg text-slate-300 leading-relaxed">
            Birgalikda yanada ko'proq insonlarga yordam bering va biznesingizni rivojlantiring.
          </p>
          <div className="flex flex-wrap gap-5">
            {[
              { value: "50+", label: "Hamkor kompaniyalar" },
              { value: "1000+", label: "Bitiruvchilar" },
              { value: "20%", label: "Affiliate komissiya" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm" data-testid={`stat-partner-${i}`}>
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP TYPES ─────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-partnership-types">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-types-title">
            Hamkorlik turlari
          </h2>
          <p className="mb-10 max-w-xl text-muted-foreground">
            Biznesingiz ehtiyojlariga mos hamkorlik shaklini tanlang.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERSHIP_TYPES.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-card"
                data-testid={`card-partnership-${i}`}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />
                <div className="p-6">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 dark:bg-slate-900/50" data-testid="section-process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-process-title">
            Hamkorlik jarayoni
          </h2>
          <p className="mb-10 text-muted-foreground">4 qadamda hamkorlikni boshlang</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative" data-testid={`step-partner-${i}`}>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-6 top-6 hidden h-0.5 w-full bg-slate-200 lg:block dark:bg-slate-700" />
                )}
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-extrabold text-white shadow-md">
                    {step.num}
                  </div>
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ──────────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-current-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-current-partners-title">
            Mavjud hamkorlar
          </h2>
          <p className="mb-8 text-muted-foreground">Bu kompaniyalar bizning bitiruvchilarimizga ishonishadi</p>
          <div className="flex flex-wrap gap-3">
            {partnerCompanies.map((c) => (
              <div key={c} className="rounded-full border bg-white px-5 py-2.5 text-sm font-semibold shadow-sm dark:bg-card" data-testid={`partner-pill-${c}`}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 dark:bg-slate-900/50" data-testid="section-partnership-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl" data-testid="text-form-title">
                Hamkorlik so'rovi
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                So'rovingizni qoldiring, mutaxassislarimiz 24 soat ichida bog'lanadi va qulay hamkorlik shaklini taklif qiladi.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "24 soat ichida javob",
                  "Bepul maslahat",
                  "Moslashuvchan shartlar",
                  "Uzoq muddatli hamkorlik",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-8 shadow-sm dark:bg-card">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                <Handshake className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-1 text-lg font-extrabold">So'rov yuborish</h3>
              <p className="mb-6 text-sm text-muted-foreground">Barcha maydonlarni to'ldiring</p>
              <LeadForm source="partnership" buttonText="So'rov yuborish" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
