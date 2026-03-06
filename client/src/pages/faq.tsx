import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { faqItems } from "@/lib/data";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FAQ() {
  useSEO({
    title: "Ko'p beriladigan savollar — ACCA, DipIFR, Kurslar | FBA Academy",
    description: "FBA Academy haqida savol va javoblar: ACCA, DipIFR, Financial Modeling kurslari, to'lov tartibi, xalqaro sertifikat va ishga joylashish haqida.",
    keywords: "ACCA savollar, DipIFR FAQ, FBA Academy kurslar narxi, moliya ta'limi savol",
    breadcrumb: [{ name: "Savol-javob", url: "https://fbaacademy.uz/faq" }],
    jsonLd: {
      "@type": "FAQPage",
      "name": "FBA Academy — Ko'p beriladigan savollar",
      "description": "ACCA, DipIFR, Financial Modeling kurslari haqida savol-javoblar",
      "mainEntity": faqItems.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  });

  const categories = [...new Set(faqItems.map((f) => f.category))];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-14 sm:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Savol-javob" }]} light />
          </div>
          <Badge className="mb-4 rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">FAQ</Badge>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-faq-title">Savol-javob</h1>
          <p className="max-w-2xl text-slate-300">
            Ko'p beriladigan savollarga javoblarni bu yerda topishingiz mumkin
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {categories.map((cat) => (
              <div key={cat} className="mb-10" data-testid={`faq-category-${cat}`}>
                <h2 className="mb-4 text-xl font-bold">{cat}</h2>
                <Accordion type="multiple" className="space-y-3">
                  {faqItems
                    .filter((f) => f.category === cat)
                    .map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border bg-white px-6 shadow-sm dark:bg-card" data-testid={`accordion-faq-page-${faq.id}`}>
                        <AccordionTrigger className="text-left font-semibold py-5">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border bg-gradient-to-r from-purple-50 to-pink-50 p-6 dark:border-purple-800 dark:from-purple-950/30 dark:to-pink-950/30">
            <h3 className="mb-2 font-bold">Kurslar haqida ko'proq o'qing:</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { href: "/course/acca", label: "ACCA kursi haqida" },
                { href: "/course/dipifr", label: "DipIFR kursi haqida" },
                { href: "/course/financial-modeling", label: "Financial Modeling kursi" },
                { href: "/blog/acca-imtihoniga-tayyorlanish", label: "ACCA tayyorlanish bo'yicha maqola" },
                { href: "/blog/dipifr-nima-va-nima-uchun", label: "DipIFR nima?" },
              ].map((l) => (
                <Link key={l.href} href={l.href}>
                  <span className="rounded-full border border-purple-200 bg-white px-4 py-1.5 font-medium text-purple-700 hover:bg-purple-50 cursor-pointer transition-colors" data-testid={`link-faq-related-${l.label}`}>{l.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-8 text-center shadow-lg dark:border-purple-800 dark:from-purple-950/30 dark:to-pink-950/30" data-testid="card-faq-contact">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold">Savolingizga javob topmadingizmi?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Biz bilan bog'laning va mutaxassislarimiz sizga yordam beradi</p>
            <Link href="/contacts">
              <Button className="mt-5 gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 font-semibold text-white shadow-md" data-testid="button-faq-contact">
                Bog'lanish <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
