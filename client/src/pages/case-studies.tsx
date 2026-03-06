import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import { graduateResults } from "@/lib/data";
import { ArrowRight, TrendingUp, Quote } from "lucide-react";

export default function CaseStudies() {
  useSEO({
    title: "Bitiruvchilar natijalari - FBA Academy",
    description: "FBA Academy bitiruvchilarining muvaffaqiyat tarixi. Real natijalar va kasbiy o'sish ko'rsatkichlari.",
  });

  return (
    <Layout>
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-case-studies-title">Bitiruvchilar natijalari</h1>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            Bizning bitiruvchilarimiz haqiqiy natijalarni ko'rsatmoqda. Ularning muvaffaqiyat tarixi bilan tanishing.
          </p>

          <div className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "92%", label: "Ishga joylashish" },
              { value: "3x", label: "O'rtacha maosh o'sishi" },
              { value: "5000+", label: "Bitiruvchilar" },
              { value: "3 oy", label: "O'rtacha ish topish" },
            ].map((item, i) => (
              <div key={i} data-testid={`stat-case-${i}`}>
                <div className="text-3xl font-extrabold text-foreground">{item.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          <h2 className="mb-8 text-2xl font-extrabold">Muvaffaqiyat tarixi</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {graduateResults.map((grad) => (
              <div key={grad.id} className="rounded-2xl bg-slate-50 p-6 sm:p-8 dark:bg-card" data-testid={`card-case-${grad.id}`}>
                <div className="flex items-start gap-4">
                  <img src={grad.avatar} alt={grad.name} className="h-14 w-14 shrink-0 rounded-full object-cover" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground" data-testid={`text-case-name-${grad.id}`}>{grad.name}</h3>
                    <Badge variant="outline" className="mt-1 rounded-full">{grad.courseName}</Badge>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-xl bg-white p-3 dark:bg-background">
                  <div className="flex-1 text-center">
                    <div className="text-xs text-muted-foreground">Oldin</div>
                    <div className="text-sm font-medium text-foreground">{grad.beforeRole}</div>
                  </div>
                  <TrendingUp className="h-5 w-5 text-emerald-500 shrink-0" />
                  <div className="flex-1 text-center">
                    <div className="text-xs text-muted-foreground">Hozir</div>
                    <div className="text-sm font-medium text-foreground">{grad.afterRole}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{grad.salaryIncrease}</span>
                </div>

                <div className="mt-3 flex items-start gap-2">
                  <Quote className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                  <p className="text-sm text-muted-foreground italic leading-relaxed">"{grad.story}"</p>
                </div>

                {grad.company !== "Mustaqil" && (
                  <div className="mt-3 text-xs text-muted-foreground">
                    Hozirgi ish joyi: <span className="font-medium text-foreground">{grad.company}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 border-t pt-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">Keyingi muvaffaqiyat tarixi sizniki bo'lsin</h2>
              <Link href="/contacts">
                <Button variant="outline" size="lg" className="gap-2 rounded-full" data-testid="button-case-cta">
                  Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
