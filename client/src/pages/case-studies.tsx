import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { graduateResults } from "@/lib/data";
import { ArrowRight, TrendingUp, Quote } from "lucide-react";

export default function CaseStudies() {
  useSEO({
    title: "Muvaffaqiyat Tarixi — ACCA, DipIFR Bitiruvchilar | FBA Academy",
    description: "FBA Academy ACCA, DipIFR va Financial Modeling bitiruvchilarining real muvaffaqiyat tarixi. Big Four firmalarga kirishdan to karyera o'sishiga.",
    keywords: "ACCA muvaffaqiyat, DipIFR bitiruvchi, FBA Academy success story, moliya karyera O'zbekiston",
    breadcrumb: [{ name: "Muvaffaqiyat tarixi", url: "https://fbaacademy.uz/case-studies" }],
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Muvaffaqiyat tarixi" }]} light />
          </div>
          <div className="mb-4 inline-block rounded-full border border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm font-semibold text-purple-200 backdrop-blur-sm">Natijalar</div>
          <h1 className="mb-4 text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl" data-testid="text-case-studies-title">Bitiruvchilar natijalari</h1>
          <p className="mb-10 max-w-2xl text-slate-300">
            Bizning bitiruvchilarimiz haqiqiy natijalarni ko'rsatmoqda. Ularning muvaffaqiyat tarixi bilan tanishing.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "92%", label: "Ishga joylashish" },
              { value: "3x", label: "O'rtacha maosh o'sishi" },
              { value: "5000+", label: "Bitiruvchilar" },
              { value: "3 oy", label: "O'rtacha ish topish" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm" data-testid={`stat-case-${i}`}>
                <div className="text-3xl font-extrabold text-white">{item.value}</div>
                <div className="mt-1 text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0d] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">Muvaffaqiyat tarixi</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {graduateResults.map((grad) => (
              <div key={grad.id} className="rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8" data-testid={`card-case-${grad.id}`}>
                <div className="flex items-start gap-4">
                  <img src={grad.avatar} alt={grad.name} className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-purple-500/30" />
                  <div className="flex-1">
                    <h3 className="text-lg font-extrabold text-white" data-testid={`text-case-name-${grad.id}`}>{grad.name}</h3>
                    <span className="mt-1 inline-block rounded-full bg-purple-600/30 px-3 py-0.5 text-xs font-semibold text-purple-300">{grad.courseName}</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-800 p-3">
                  <div className="flex-1 text-center">
                    <div className="text-xs text-zinc-500">Oldin</div>
                    <div className="text-sm font-semibold text-zinc-300">{grad.beforeRole}</div>
                  </div>
                  <TrendingUp className="h-5 w-5 shrink-0 text-emerald-500" />
                  <div className="flex-1 text-center">
                    <div className="text-xs text-zinc-500">Hozir</div>
                    <div className="text-sm font-semibold text-purple-400">{grad.afterRole}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-bold text-emerald-400">{grad.salaryIncrease}</span>
                </div>

                <div className="mt-3 flex items-start gap-2">
                  <Quote className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
                  <p className="text-sm italic leading-relaxed text-zinc-400">"{grad.story}"</p>
                </div>

                {grad.company !== "Mustaqil" && (
                  <div className="mt-3 text-xs text-zinc-500">
                    Hozirgi ish joyi: <span className="font-bold text-zinc-300">{grad.company}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-900 via-[#1e1060] to-slate-900 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">Keyingi qadam</div>
              <h2 className="text-4xl font-extrabold uppercase text-white sm:text-5xl">Muvaffaqiyat tarixi sizniki bo'lsin</h2>
            </div>
            <a href="/contacts">
              <Button size="lg" className="gap-2 rounded-full bg-amber-400 px-8 font-bold text-black hover:bg-amber-300" data-testid="button-case-cta">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
