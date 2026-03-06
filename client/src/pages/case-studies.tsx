import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import { graduateResults } from "@/lib/data";
import { ArrowRight, TrendingUp, Users, Quote } from "lucide-react";

export default function CaseStudies() {
  useSEO({
      title: "Bitiruvchilar natijalari - FBA Academy",
      description: "FBA Academy bitiruvchilarining muvaffaqiyat tarixi. Real natijalar va kasbiy o'sish ko'rsatkichlari.",
    });

  return (
    <Layout>
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl" data-testid="text-case-studies-title">Bitiruvchilar natijalari</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Bizning bitiruvchilarimiz haqiqiy natijalarni ko'rsatmoqda. Ularning muvaffaqiyat tarixi bilan tanishing.
          </p>
        </div>
      </section>

      <section className="-mt-8 relative z-10 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              { value: "92%", label: "Ishga joylashish" },
              { value: "3x", label: "O'rtacha maosh o'sishi" },
              { value: "5000+", label: "Bitiruvchilar" },
              { value: "3 oy", label: "O'rtacha ish topish" },
            ].map((item, i) => (
              <Card key={i} className="border-card-border bg-card p-6 text-center" data-testid={`stat-case-${i}`}>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-case-stories">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold">Muvaffaqiyat tarixi</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {graduateResults.map((grad) => (
              <Card key={grad.id} className="border-card-border bg-card p-6 sm:p-8" data-testid={`card-case-${grad.id}`}>
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold" data-testid={`text-case-name-${grad.id}`}>{grad.name}</h3>
                    <div className="mt-1 flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary">{grad.courseName}</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-md bg-accent/50 p-3">
                  <div className="flex-1 text-center">
                    <div className="text-xs text-muted-foreground">Oldin</div>
                    <div className="text-sm font-medium">{grad.beforeRole}</div>
                  </div>
                  <TrendingUp className="h-5 w-5 text-emerald-500 shrink-0" />
                  <div className="flex-1 text-center">
                    <div className="text-xs text-muted-foreground">Hozir</div>
                    <div className="text-sm font-medium">{grad.afterRole}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{grad.salaryIncrease}</span>
                </div>

                <div className="mt-3 flex items-start gap-2">
                  <Quote className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                  <p className="text-sm text-muted-foreground italic">"{grad.story}"</p>
                </div>

                {grad.company !== "Mustaqil" && (
                  <div className="mt-3 text-xs text-muted-foreground">
                    Hozirgi ish joyi: <span className="font-medium text-foreground">{grad.company}</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-600 to-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Keyingi muvaffaqiyat tarixi sizniki bo'lsin</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">Hoziroq boshlang va karyerangizni o'zgartiring</p>
          <Link href="/contacts">
            <Button size="lg" variant="secondary" className="mt-6 gap-2" data-testid="button-case-cta">
              Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
