import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Savol-javob" }]} light />
          </div>
          <div className="mb-4 inline-block rounded-full border border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm font-semibold text-purple-200 backdrop-blur-sm">FAQ</div>
          <h1 className="mb-3 text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl" data-testid="text-faq-title">Savol-javob</h1>
          <p className="max-w-2xl text-slate-300">
            Ko'p beriladigan savollarga javoblarni bu yerda topishingiz mumkin
          </p>
        </div>
      </section>

      <section className="bg-[#0d0d0d] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {categories.map((cat) => (
              <div key={cat} className="mb-10" data-testid={`faq-category-${cat}`}>
                <h2 className="mb-4 text-xl font-extrabold uppercase text-white">{cat}</h2>
                <Accordion type="multiple" className="space-y-3">
                  {faqItems
                    .filter((f) => f.category === cat)
                    .map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border border-white/10 bg-zinc-900 px-6" data-testid={`accordion-faq-page-${faq.id}`}>
                        <AccordionTrigger className="text-left font-semibold py-5 text-white hover:no-underline hover:text-purple-300">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-zinc-400 pb-5">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <h3 className="mb-3 font-extrabold text-white">Kurslar haqida ko'proq o'qing:</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { href: "/course/acca", label: "ACCA kursi haqida" },
                { href: "/course/dipifr", label: "DipIFR kursi haqida" },
                { href: "/course/financial-modeling", label: "Financial Modeling kursi" },
                { href: "/blog/acca-imtihoniga-tayyorlanish", label: "ACCA tayyorlanish bo'yicha maqola" },
                { href: "/blog/dipifr-nima-va-nima-uchun", label: "DipIFR nima?" },
              ].map((l) => (
                <a key={l.href} href={l.href}>
                  <span className="rounded-full border border-white/10 bg-zinc-800 px-4 py-1.5 font-medium text-zinc-300 hover:border-purple-500/40 hover:text-white cursor-pointer transition-colors" data-testid={`link-faq-related-${l.label}`}>{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-zinc-900 p-8 text-center" data-testid="card-faq-contact">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-white">Savolingizga javob topmadingizmi?</h3>
            <p className="mt-2 text-sm text-zinc-400">Biz bilan bog'laning va mutaxassislarimiz sizga yordam beradi</p>
            <a href="/contacts">
              <Button className="mt-5 gap-2 rounded-full bg-purple-600 px-6 font-semibold text-white hover:bg-purple-500" data-testid="button-faq-contact">
                Bog'lanish <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
