import { useSEO } from "@/hooks/use-seo";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { useLanguage } from "@/contexts/language-context";

export default function PrivacyPage() {
  const { t, lang } = useLanguage();
  const p = t.privacyPage;

  useSEO({
    title: `${p.title} | FBA Academy`,
    description: p.description,
    keywords:
      lang === "ru"
        ? "конфиденциальность FBA Academy, персональные данные"
        : lang === "en"
          ? "FBA Academy privacy, personal data"
          : "FBA Academy maxfiylik, shaxsiy ma'lumotlar",
    breadcrumb: [{ name: lang === "ru" ? "Конфиденциальность" : lang === "en" ? "Privacy" : "Maxfiylik siyosati", url: "/privacy" }],
  });

  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900 pb-12 pt-5 lg:pt-24" data-testid="section-privacy-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: p.title }]} light />
          <h1 className="mt-6 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-privacy-title">
            {p.title}
          </h1>
          <p className="mt-3 text-sm text-zinc-500">{p.updatedLabel}</p>
        </div>
      </section>

      <section className="bg-[#0d0d0d] py-12 sm:py-16" data-testid="section-privacy-body">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          {p.sections.map((section, i) => (
            <article key={i} data-testid={`privacy-section-${i}`}>
              <h2 className="text-lg font-extrabold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
