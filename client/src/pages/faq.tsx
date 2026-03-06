import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import { faqItems } from "@/lib/data";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FAQ() {
  useSEO({
    title: "Savol-javob (FAQ) - FBA Academy",
    description: "FBA Academy haqida ko'p beriladigan savollar va javoblar. Kurslar, to'lov, sertifikat va ishga joylashish.",
  });

  const categories = [...new Set(faqItems.map((f) => f.category))];

  return (
    <Layout>
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-faq-title">Savol-javob</h1>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            Ko'p beriladigan savollarga javoblarni bu yerda topishingiz mumkin
          </p>

          <div className="mx-auto max-w-3xl">
            {categories.map((cat) => (
              <div key={cat} className="mb-8" data-testid={`faq-category-${cat}`}>
                <h2 className="mb-4 text-lg font-semibold">{cat}</h2>
                <Accordion type="multiple" className="space-y-3">
                  {faqItems
                    .filter((f) => f.category === cat)
                    .map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id} className="rounded-xl border-0 bg-slate-50 px-5 dark:bg-card" data-testid={`accordion-faq-page-${faq.id}`}>
                        <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-xl rounded-2xl bg-slate-50 p-6 text-center sm:p-8 dark:bg-card" data-testid="card-faq-contact">
            <MessageCircle className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
            <h3 className="text-lg font-semibold">Savolingizga javob topmadingizmi?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Biz bilan bog'laning va mutaxassislarimiz sizga yordam beradi</p>
            <Link href="/contacts">
              <Button variant="outline" className="mt-4 gap-2 rounded-full" data-testid="button-faq-contact">
                Bog'lanish <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
