import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";

const FAQ_ITEMS: Record<Language, { id: string; question: string; answer: string; category: string }[]> = {
  uz: [
    {
      id: "faq-1",
      question: "ACCA sertifikati qancha vaqtda olinadi?",
      answer: "ACCA sertifikati odatda 2-3 yil ichida olinadi. Applied Knowledge (3 imtihon), Applied Skills (6 imtihon) va Strategic Professional (2-4 imtihon) bosqichlaridan iborat. FBA Academy'da har bir bosqichni alohida o'qishingiz mumkin.",
      category: "ACCA",
    },
    {
      id: "faq-2",
      question: "DipIFR imtihoni qachon o'tkaziladi?",
      answer: "DipIFR imtihoni yiliga 2 marta — iyun va dekabr oylarida o'tkaziladi. Biz sizni imtihonga to'liq tayyorlaymiz va ro'yxatdan o'tishda yordam beramiz.",
      category: "DipIFR",
    },
    {
      id: "faq-3",
      question: "Kurslar online yoki offline?",
      answer: "Kurslarimiz ham online, ham offline formatda mavjud. Online formatda jonli darslar, yozib olingan materiallar va amaliy mashqlar taqdim etiladi. Offline darslar Toshkentda o'tkaziladi.",
      category: "Umumiy",
    },
    {
      id: "faq-4",
      question: "To'lov qanday amalga oshiriladi?",
      answer: "To'lov naqd, bank kartasi yoki bo'lib-bo'lib to'lash orqali amalga oshiriladi. 0% bo'lib to'lash imkoniyati mavjud — 3 yoki 6 oyga bo'lishingiz mumkin.",
      category: "To'lov",
    },
    {
      id: "faq-5",
      question: "Kurs tugagach sertifikat beriladimi?",
      answer: "Ha, kursni muvaffaqiyatli tugatgan har bir talabaga FBA Academy sertifikati beriladi. ACCA va DipIFR kurslari uchun xalqaro imtihonlarga ham tayyorlaymiz.",
      category: "Sertifikat",
    },
    {
      id: "faq-6",
      question: "Ishga joylashishda yordam beriladimi?",
      answer: "Ha, biz bitiruvchilarimizga ish topishda faol yordam beramiz. Big Four firmalar, banklar, investitsiya kompaniyalari va yirik korporatsiyalar bilan hamkorlik qilamiz.",
      category: "Ishga joylashish",
    },
    {
      id: "faq-7",
      question: "1C kursida qaysi versiya o'rgatiladi?",
      answer: "Biz 1C: Buxgalteriya 8.3 versiyasini o'rgatamiz — bu O'zbekistonda eng keng tarqalgan versiya. Kurs davomida real kompaniya ma'lumotlari bilan ishlaysiz.",
      category: "1C",
    },
    {
      id: "faq-8",
      question: "Financial Modeling kursida qaysi dasturlar ishlatiladi?",
      answer: "Asosan Excel'da ishlaymiz (ilg'or formulalar, VBA). Bundan tashqari Power BI va Python (Pandas) asoslarini ham o'rganasiz.",
      category: "Financial Modeling",
    },
  ],
  ru: [
    {
      id: "faq-1",
      question: "Сколько времени занимает получение сертификата ACCA?",
      answer: "Сертификат ACCA обычно получают за 2–3 года. Программа включает этапы Applied Knowledge (3 экзамена), Applied Skills (6 экзаменов) и Strategic Professional (2–4 экзамена). В FBA Academy вы можете проходить каждый этап отдельно.",
      category: "ACCA",
    },
    {
      id: "faq-2",
      question: "Когда проводится экзамен DipIFR?",
      answer: "Экзамен DipIFR проводится 2 раза в год — в июне и декабре. Мы полностью подготовим вас к экзамену и поможем с регистрацией.",
      category: "DipIFR",
    },
    {
      id: "faq-3",
      question: "Курсы проходят онлайн или офлайн?",
      answer: "Наши курсы доступны как онлайн, так и офлайн. Онлайн-формат включает живые занятия, записанные материалы и практические задания. Офлайн-занятия проходят в Ташкенте.",
      category: "Общее",
    },
    {
      id: "faq-4",
      question: "Как производится оплата?",
      answer: "Оплата возможна наличными, банковской картой или в рассрочку. Доступна рассрочка 0% — на 3 или 6 месяцев.",
      category: "Оплата",
    },
    {
      id: "faq-5",
      question: "Выдаётся ли сертификат по окончании курса?",
      answer: "Да, каждый студент, успешно завершивший курс, получает сертификат FBA Academy. Для курсов ACCA и DipIFR мы также готовим к международным экзаменам.",
      category: "Сертификат",
    },
    {
      id: "faq-6",
      question: "Помогаете ли вы с трудоустройством?",
      answer: "Да, мы активно помогаем выпускникам найти работу. Мы сотрудничаем с фирмами Big Four, банками, инвестиционными компаниями и крупными корпорациями.",
      category: "Трудоустройство",
    },
    {
      id: "faq-7",
      question: "Какая версия 1C преподаётся на курсе?",
      answer: "Мы обучаем работе с 1C: Бухгалтерия 8.3 — это самая распространённая версия в Узбекистане. В ходе курса вы будете работать с данными реальных компаний.",
      category: "1C",
    },
    {
      id: "faq-8",
      question: "Какие программы используются на курсе Financial Modeling?",
      answer: "В основном работаем в Excel (продвинутые формулы, VBA). Также вы изучите основы Power BI и Python (Pandas).",
      category: "Financial Modeling",
    },
  ],
  en: [
    {
      id: "faq-1",
      question: "How long does it take to get an ACCA certificate?",
      answer: "The ACCA certificate is typically obtained within 2–3 years. The program consists of Applied Knowledge (3 exams), Applied Skills (6 exams) and Strategic Professional (2–4 exams) stages. At FBA Academy you can study each stage separately.",
      category: "ACCA",
    },
    {
      id: "faq-2",
      question: "When is the DipIFR exam held?",
      answer: "The DipIFR exam is held twice a year — in June and December. We will fully prepare you for the exam and assist with registration.",
      category: "DipIFR",
    },
    {
      id: "faq-3",
      question: "Are courses online or offline?",
      answer: "Our courses are available both online and offline. The online format includes live classes, recorded materials and practical exercises. Offline classes are held in Tashkent.",
      category: "General",
    },
    {
      id: "faq-4",
      question: "How is payment made?",
      answer: "Payment can be made by cash, bank card or in installments. A 0% installment plan is available — you can split the payment over 3 or 6 months.",
      category: "Payment",
    },
    {
      id: "faq-5",
      question: "Is a certificate issued upon course completion?",
      answer: "Yes, every student who successfully completes the course receives an FBA Academy certificate. For ACCA and DipIFR courses, we also prepare you for international exams.",
      category: "Certificate",
    },
    {
      id: "faq-6",
      question: "Do you help with job placement?",
      answer: "Yes, we actively help our graduates find employment. We partner with Big Four firms, banks, investment companies and large corporations.",
      category: "Career",
    },
    {
      id: "faq-7",
      question: "Which version of 1C is taught in the course?",
      answer: "We teach 1C: Accounting 8.3 — the most widely used version in Uzbekistan. During the course you will work with real company data.",
      category: "1C",
    },
    {
      id: "faq-8",
      question: "What software is used in the Financial Modeling course?",
      answer: "We mainly work in Excel (advanced formulas, VBA). You will also learn the basics of Power BI and Python (Pandas).",
      category: "Financial Modeling",
    },
  ],
};

const PAGE_TEXT: Record<
  Language,
  {
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    breadcrumb: string;
    title: string;
    subtitle: string;
    relatedTitle: string;
    relatedLinks: Array<{ href: string; label: string }>;
    noAnswerTitle: string;
    noAnswerDesc: string;
    contactBtn: string;
  }
> = {
  uz: {
    seoTitle: "Ko'p beriladigan savollar — ACCA, DipIFR, Kurslar | FBA Academy",
    seoDescription: "FBA Academy haqida savol va javoblar: ACCA, DipIFR, Financial Modeling kurslari, to'lov tartibi, xalqaro sertifikat va ishga joylashish haqida.",
    seoKeywords: "ACCA savollar, DipIFR FAQ, FBA Academy kurslar narxi, moliya ta'limi savol",
    breadcrumb: "Savol-javob",
    title: "Savol-javob",
    subtitle: "Ko'p beriladigan savollarga javoblarni bu yerda topishingiz mumkin",
    relatedTitle: "Kurslar haqida ko'proq o'qing:",
    relatedLinks: [
      { href: "/course/acca", label: "ACCA kursi haqida" },
      { href: "/course/dipifr", label: "DipIFR kursi haqida" },
      { href: "/course/financial-modeling", label: "Financial Modeling kursi" },
      { href: "/blog/acca-imtihoniga-tayyorlanish", label: "ACCA tayyorlanish bo'yicha maqola" },
      { href: "/blog/dipifr-nima-va-nima-uchun", label: "DipIFR nima?" },
    ],
    noAnswerTitle: "Savolingizga javob topmadingizmi?",
    noAnswerDesc: "Biz bilan bog'laning va mutaxassislarimiz sizga yordam beradi",
    contactBtn: "Bog'lanish",
  },
  ru: {
    seoTitle: "Часто задаваемые вопросы — ACCA, DipIFR, Курсы | FBA Academy",
    seoDescription: "Ответы на вопросы о FBA Academy: курсы ACCA, DipIFR, Financial Modeling, оплата, международные сертификаты и трудоустройство.",
    seoKeywords: "ACCA вопросы, DipIFR FAQ, цена курсов FBA Academy, финансовое обучение вопрос",
    breadcrumb: "Вопросы и ответы",
    title: "Вопросы и ответы",
    subtitle: "Здесь вы найдете ответы на самые частые вопросы",
    relatedTitle: "Читайте больше о курсах:",
    relatedLinks: [
      { href: "/course/acca", label: "О курсе ACCA" },
      { href: "/course/dipifr", label: "О курсе DipIFR" },
      { href: "/course/financial-modeling", label: "Курс Financial Modeling" },
      { href: "/blog/acca-imtihoniga-tayyorlanish", label: "Статья о подготовке к ACCA" },
      { href: "/blog/dipifr-nima-va-nima-uchun", label: "Что такое DipIFR?" },
    ],
    noAnswerTitle: "Не нашли ответ на свой вопрос?",
    noAnswerDesc: "Свяжитесь с нами, и наши специалисты помогут вам",
    contactBtn: "Связаться",
  },
  en: {
    seoTitle: "FAQ — ACCA, DipIFR, Courses | FBA Academy",
    seoDescription: "Frequently asked questions about FBA Academy: ACCA, DipIFR and Financial Modeling courses, payment options, international certificates and career support.",
    seoKeywords: "ACCA questions, DipIFR FAQ, FBA Academy course price, finance education questions",
    breadcrumb: "FAQ",
    title: "FAQ",
    subtitle: "Find answers to the most frequently asked questions here",
    relatedTitle: "Read more about our courses:",
    relatedLinks: [
      { href: "/course/acca", label: "About ACCA course" },
      { href: "/course/dipifr", label: "About DipIFR course" },
      { href: "/course/financial-modeling", label: "Financial Modeling course" },
      { href: "/blog/acca-imtihoniga-tayyorlanish", label: "ACCA preparation article" },
      { href: "/blog/dipifr-nima-va-nima-uchun", label: "What is DipIFR?" },
    ],
    noAnswerTitle: "Didn't find your answer?",
    noAnswerDesc: "Contact us and our specialists will help you",
    contactBtn: "Contact us",
  },
};

export default function FAQ() {
  const { lang } = useLanguage();
  const tx = PAGE_TEXT[lang];

  const localFaqItems = FAQ_ITEMS[lang];

  useSEO({
    title: tx.seoTitle,
    description: tx.seoDescription,
    keywords: tx.seoKeywords,
    breadcrumb: [{ name: tx.breadcrumb, url: "https://fbaacademy.uz/faq" }],
    speakable: ["[data-speakable='faq-title']", "[data-speakable='faq-desc']"],
    jsonLd: {
      "@type": "FAQPage",
      "name": `FBA Academy — ${tx.title}`,
      "description": tx.subtitle,
      "mainEntity": localFaqItems.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  });

  const categories = Array.from(new Set(localFaqItems.map((f) => f.category)));

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900 pb-14 pt-4 sm:pb-20 sm:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: tx.breadcrumb }]} light />
          </div>
          <div className="mb-4 inline-block rounded-full border border-brand-accent/30 bg-brand/20 px-4 py-1.5 text-sm font-semibold text-brand-accent-light backdrop-blur-sm">{lang === "ru" ? "Вопросы и ответы" : lang === "en" ? "FAQ" : "Ko'p so'raladigan savollar"}</div>
          <h1 className="mb-3 text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl" data-testid="text-faq-title" data-speakable="faq-title">{tx.title}</h1>
          <p className="max-w-2xl text-slate-300" data-speakable="faq-desc">
            {tx.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-[#0d0d0d] pb-14 pt-4 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {categories.map((cat) => (
              <div key={cat} className="mb-10" data-testid={`faq-category-${cat}`}>
                <h2 className="mb-4 text-xl font-extrabold uppercase text-white">{cat}</h2>
                <Accordion type="multiple" className="space-y-3">
                  {localFaqItems
                    .filter((f) => f.category === cat)
                    .map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border border-white/10 bg-zinc-900 px-6" data-testid={`accordion-faq-page-${faq.id}`}>
                        <AccordionTrigger className="text-left font-semibold py-5 text-white hover:no-underline hover:text-brand-accent-light">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-zinc-400 pb-5">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <h3 className="mb-3 font-extrabold text-white">{tx.relatedTitle}</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {tx.relatedLinks.map((l) => (
                <Link key={l.href} href={l.href}>
                  <span className="rounded-full border border-white/10 bg-zinc-800 px-4 py-1.5 font-medium text-zinc-300 hover:border-brand/40 hover:text-white cursor-pointer transition-colors" data-testid={`link-faq-related-${l.label}`}>{l.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-zinc-900 p-8 text-center" data-testid="card-faq-contact">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark shadow-lg">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-white">{tx.noAnswerTitle}</h3>
            <p className="mt-2 text-sm text-zinc-400">{tx.noAnswerDesc}</p>
            <Button asChild className="mt-5 gap-2 rounded-full bg-brand px-6 font-semibold text-white hover:bg-brand" data-testid="button-faq-contact">
              <Link href="/contacts">
                {tx.contactBtn} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
