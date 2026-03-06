import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Muvaffaqiyat tarixi" }]} light />
          </div>
          <Badge className="mb-4 rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">Natijalar</Badge>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-case-studies-title">Bitiruvchilar natijalari</h1>
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Muvaffaqiyat tarixi</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {graduateResults.map((grad) => (
              <Card key={grad.id} className="border shadow-lg p-6 sm:p-8" data-testid={`card-case-${grad.id}`}>
                <div className="flex items-start gap-4">
                  <img src={grad.avatar} alt={grad.name} className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-purple-100 dark:ring-purple-900" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground" data-testid={`text-case-name-${grad.id}`}>{grad.name}</h3>
                    <Badge className="mt-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-semibold">{grad.courseName}</Badge>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-xl border bg-slate-50 p-3 dark:bg-slate-900/50">
                  <div className="flex-1 text-center">
                    <div className="text-xs text-muted-foreground">Oldin</div>
                    <div className="text-sm font-semibold text-foreground">{grad.beforeRole}</div>
                  </div>
                  <TrendingUp className="h-5 w-5 text-emerald-500 shrink-0" />
                  <div className="flex-1 text-center">
                    <div className="text-xs text-muted-foreground">Hozir</div>
                    <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">{grad.afterRole}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{grad.salaryIncrease}</span>
                </div>

                <div className="mt-3 flex items-start gap-2">
                  <Quote className="h-4 w-4 shrink-0 text-purple-400 mt-0.5" />
                  <p className="text-sm text-muted-foreground italic leading-relaxed">"{grad.story}"</p>
                </div>

                {grad.company !== "Mustaqil" && (
                  <div className="mt-3 text-xs text-muted-foreground">
                    Hozirgi ish joyi: <span className="font-bold text-foreground">{grad.company}</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Keyingi muvaffaqiyat tarixi sizniki bo'lsin</h2>
            <Link href="/contacts">
              <Button size="lg" className="gap-2 rounded-full bg-white px-8 font-bold text-purple-700 shadow-lg hover:bg-slate-100" data-testid="button-case-cta">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
