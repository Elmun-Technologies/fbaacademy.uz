import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { teachers } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Teachers() {
  useSEO({
    title: "O'qituvchilar — ACCA, DipIFR, Moliya ekspertlari | FBA Academy",
    description: "FBA Academy tajribali mentorlar jamoasi: ACCA, DipIFR, Financial Modeling va 1C bo'yicha sertifikatlangan ekspertlar. Big Four firmalarida ishlagan mutaxassislar.",
    keywords: "ACCA o'qituvchi, DipIFR mentor, moliya ekspert, FBA Academy ustoz",
    breadcrumb: [{ name: "O'qituvchilar", url: "https://fbaacademy.uz/teachers" }],
    jsonLd: [
      {
        "@type": "ItemList",
        "name": "FBA Academy O'qituvchilari",
        "description": "ACCA, DipIFR, Financial Modeling va boshqa kurslar bo'yicha ekspert o'qituvchilar",
        "numberOfItems": teachers.length,
        "itemListElement": teachers.map((t, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "item": {
            "@type": "Person",
            "name": t.name,
            "jobTitle": t.role,
            "description": t.bio,
            "image": t.avatar,
            "worksFor": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
          },
        })),
      },
    ],
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "O'qituvchilar" }]} light />
          </div>
          <Badge className="mb-4 rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">Ekspertlar</Badge>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-teachers-page-title">Bizning o'qituvchilar</h1>
          <p className="max-w-xl text-slate-300">
            Barcha mentorlarimiz o'z sohasida 5+ yillik amaliy tajribaga ega mutaxassislar
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="border shadow-lg overflow-hidden" data-testid={`card-teacher-page-${teacher.id}`}>
                <div className="h-64 overflow-hidden">
                  <img src={teacher.avatar} alt={`${teacher.name} — ${teacher.role}, FBA Academy`} width={300} height={256} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-foreground" data-testid={`text-teacher-page-name-${teacher.id}`}>{teacher.name}</h2>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">{teacher.role}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{teacher.experience}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{teacher.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Mentorlarimiz bilan tanishing</h2>
            <Link href="/contacts">
              <Button size="lg" className="gap-2 rounded-full bg-white px-8 font-bold text-purple-700 shadow-lg hover:bg-slate-100" data-testid="button-teachers-cta">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
