import { useSEO } from "@/hooks/use-seo";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import LeadForm from "@/components/lead-form";
import { partnerCompanies } from "@/lib/data";
import {
  BarChart3, Users, Target, Award, BookOpen, Building2,
  CheckCircle2, ArrowRight, Sparkles, Clock, Shield,
} from "lucide-react";

const DIRECTIONS = [
  { icon: Award, title: "ACCA treningi", desc: "Kompaniya buxgalter va moliyachilariga ACCA Applied Knowledge, Skills, Professional darajalarida trening.", color: "from-blue-500 to-cyan-500" },
  { icon: BarChart3, title: "IFRS / DipIFR", desc: "Moliyaviy hisobotlarni xalqaro IFRS standartlariga o'tkazish bo'yicha jamoaviy treninglar.", color: "from-emerald-500 to-teal-500" },
  { icon: Target, title: "Financial Modeling", desc: "Moliya bo'limi jamoasi uchun DCF, kompaniya baholash va investitsiya tahlili treningi.", color: "from-violet-500 to-purple-600" },
  { icon: BookOpen, title: "1C: Buxgalteriya", desc: "Kompaniyangiz uchun 1C: Buxgalteriya 8.3 ni to'liq joriy etish va xodimlarni o'qitish.", color: "from-amber-500 to-orange-500" },
  { icon: Users, title: "Huquqiy savodxonlik", desc: "Moliya, mehnat va soliq huquqi bo'yicha jamoaviy treninglar.", color: "from-rose-500 to-pink-500" },
  { icon: Building2, title: "Maxsus dasturlar", desc: "Sizning kompaniyangiz ehtiyojlariga individual ravishda ishlab chiqilgan maxsus ta'lim dasturi.", color: "from-indigo-500 to-violet-500" },
];

const PROCESS = [
  { num: "01", title: "Tahlil", desc: "Kompaniya ehtiyojlari va xodimlar darajasini aniqlaymiz.", color: "from-blue-500 to-cyan-500" },
  { num: "02", title: "Dastur", desc: "Maxsus o'quv dasturini tuzib, siz bilan kelishib olamiz.", color: "from-purple-500 to-pink-500" },
  { num: "03", title: "Trening", desc: "Professional mentorlar siz tanlagan formatda o'qitadi.", color: "from-emerald-500 to-teal-500" },
  { num: "04", title: "Natija", desc: "KPI asosida o'sish ko'rsatkichlarini o'lchaymiz.", color: "from-amber-500 to-orange-500" },
];

const WHY_US = [
  { icon: Shield, title: "Moslashuvchan format", desc: "Online, offline yoki aralash format — siz tanlaysiz." },
  { icon: Clock, title: "Qulay jadval", desc: "Ishchi soatlarga mos vaqtlarda darslar tashkil qilinadi." },
  { icon: Award, title: "Xalqaro sertifikat", desc: "O'qitish yakuni o'quvchilarga xalqaro sertifikat beriladi." },
  { icon: BarChart3, title: "KPI tizimi", desc: "Natijalarni o'lchaydigan hisobot tizimi bilan ishlashadi." },
];

export default function CorporateTraining() {
  useSEO({
    title: "Korporativ Treninglar — ACCA, IFRS, Moliya | FBA Academy",
    description: "Kompaniyangiz moliya va buxgalteriya jamoasi uchun ACCA, DipIFR, IFRS va Financial Modeling bo'yicha korporativ treninglar. Moslashuvchan jadval, xalqaro sertifikatlar.",
    keywords: "korporativ trening ACCA, IFRS trening kompaniya, moliya treningi O'zbekiston, korporativ ta'lim",
    breadcrumb: [{ name: "Korporativ treninglar", url: "https://fbaacademy.uz/corporate" }],
  });

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14"
        data-testid="section-corporate-hero"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <Breadcrumb items={[{ label: "Korporativ treninglar" }]} light />
          </div>
          <Badge className="mb-5 inline-flex rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Korporativ
          </Badge>
          <h1
            className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            data-testid="text-corporate-title"
          >
            Jamoangiz{" "}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              malakasini oshiring
            </span>
          </h1>
          <p className="mb-10 max-w-xl text-lg text-slate-300 leading-relaxed">
            Kompaniyangiz ehtiyojlariga moslashtirilgan maxsus ta'lim dasturlari. Tajribali mentorlar, amaliy loyihalar, xalqaro sertifikatlar.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { value: "50+", label: "Hamkor kompaniya" },
              { value: "6", label: "Ta'lim yo'nalishi" },
              { value: "100%", label: "Moslashuvchan jadval" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm" data-testid={`stat-corp-${i}`}>
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECTIONS ────────────────────────────────────────── */}
      <section className="py-14 sm:py-20" data-testid="section-directions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-directions-title">
            Trening yo'nalishlari
          </h2>
          <p className="mb-10 max-w-xl text-zinc-400">
            Kompaniyangiz ehtiyojiga ko'ra bitta yoki bir nechta yo'nalishni tanlang.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DIRECTIONS.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-zinc-900" data-testid={`card-direction-${i}`}>
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />
                <div className="p-6">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-corp-process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-process-title">
            Qanday ishlaydi?
          </h2>
          <p className="mb-10 text-zinc-400">Jamoangiz uchun ideal dastur yaratishning 4 bosqichi</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, i) => (
              <div key={i} className="relative" data-testid={`step-corp-${i}`}>
                {i < PROCESS.length - 1 && (
                  <div className="absolute left-6 top-6 hidden h-0.5 w-full bg-zinc-700 lg:block" />
                )}
                <div className="relative">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-sm font-extrabold text-white shadow-md`}>
                    {item.num}
                  </div>
                  <h3 className="font-extrabold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-corp-why">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-why-title">
            Nima uchun FBA Academy?
          </h2>
          <p className="mb-10 text-zinc-400 max-w-xl">
            Korporativ treninglarimiz natijaga yo'naltirilgan va o'lchanadigan.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-7" data-testid={`card-why-corp-${i}`}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20">
                  <item.icon className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ───────────────────────────────────────────── */}
      <section className="bg-[#111] py-12 sm:py-16" data-testid="section-corp-clients">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-bold uppercase tracking-wider text-zinc-400">Bizga ishonishadi</p>
          <div className="flex flex-wrap gap-3">
            {partnerCompanies.map((c) => (
              <div key={c} className="rounded-full border border-white/10 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-300" data-testid={`corp-partner-${c}`}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM CTA ──────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-corp-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-form-title">
                Bepul konsultatsiya oling
              </h2>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                Jamoangiz uchun maxsus dastur tuzamiz. So'rov qoldiring — 24 soat ichida bog'lanamiz.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Kompaniya ehtiyojlariga moslashtirilgan dastur",
                  "Tajribali mentorlar tomonidan olib boriladi",
                  "Amaliy loyihalar va real case'lar",
                  "Natijani o'lchaydigan KPI tizimi",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8" data-testid="card-corp-form">
              <h3 className="mb-1 text-lg font-extrabold text-white">So'rov yuborish</h3>
              <p className="mb-6 text-sm text-zinc-400">Jamoangiz uchun maxsus dastur tuzamiz</p>
              <LeadForm source="corporate" buttonText="So'rov yuborish" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
