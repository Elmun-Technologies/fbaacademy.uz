import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import { faqItems } from "@/lib/data";
import { ArrowRight, HelpCircle, MessageCircle } from "lucide-react";

export default function FAQ() {
  useSEO({
      title: "Savol-javob (FAQ) - FBA Academy",
      description: "FBA Academy haqida ko'p beriladigan savollar va javoblar. Kurslar, to'lov, sertifikat va ishga joylashish.",
    });

  const categories = [...new Set(faqItems.map((f) => f.category))];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-purple-50/50 to-background dark:from-purple-950/10 dark:to-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
              <HelpCircle className="h-7 w-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-faq-title">Savol-javob</h1>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Ko'p beriladigan savollarga javoblarni bu yerda topishingiz mumkin
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            {categories.map((cat) => (
              <div key={cat} className="mb-8" data-testid={`faq-category-${cat}`}>
                <h2 className="mb-4 text-lg font-semibold">{cat}</h2>
                <Accordion type="multiple" className="space-y-3">
                  {faqItems
                    .filter((f) => f.category === cat)
                    .map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id} className="rounded-md border border-border/50 bg-card px-4" data-testid={`accordion-faq-page-${faq.id}`}>
                        <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-border/50 bg-card p-6 text-center sm:p-8" data-testid="card-faq-contact">
            <MessageCircle className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
            <h3 className="text-lg font-semibold">Savolingizga javob topmadingizmi?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Biz bilan bog'laning va mutaxassislarimiz sizga yordam beradi</p>
            <Link href="/contacts">
              <Button className="mt-4 gap-2" data-testid="button-faq-contact">
                Bog'lanish <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
