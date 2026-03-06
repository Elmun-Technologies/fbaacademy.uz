import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import YouTubeEmbed from "@/components/youtube-embed";
import { courses, teachers, faqItems } from "@/lib/data";
import { CheckCircle2, ArrowRight, Star, Flame, BookOpen, Target, Award, Lightbulb, Clock, Calendar, Wrench, GraduationCap } from "lucide-react";

const course = courses.find((c) => c.id === "applied-knowledge")!;
const mentor = teachers.find((t) => t.id === "teacher-1")!;

const PAPERS = [
  {
    code: "BT / FBT",
    name: "Business & Technology",
    desc: "Biznes tashkiliy tuzilmalari, IT tizimlari, boshqaruv va professional etika asoslari.",
    color: "from-sky-500 to-blue-600",
    topics: 4,
    difficulty: "Boshlang'ich",
  },
  {
    code: "MA / FMA",
    name: "Management Accounting",
    desc: "Xarajatlar hisobi, byudjetlashtirish, standart xarajatlar va qaror qabul qilish tahlili.",
    color: "from-violet-500 to-purple-600",
    topics: 5,
    difficulty: "O'rta",
  },
  {
    code: "FA / FFA",
    name: "Financial Accounting",
    desc: "Moliyaviy hisobotlar tayyorlash, aktivlar va majburiyatlar, buxgalteriya standartlari.",
    color: "from-emerald-500 to-teal-600",
    topics: 5,
    difficulty: "O'rta",
  },
];

const JOURNEY = [
  { step: "1", label: "Applied Knowledge", active: true, desc: "Hozir shu yerdasiz" },
  { step: "2", label: "Applied Skills", active: false, desc: "Keyingi bosqich" },
  { step: "3", label: "Strategic Professional", active: false, desc: "Yakuniy bosqich" },
];

export default function AppliedKnowledgePage() {
  useSEO({
    title: "ACCA Applied Knowledge — 1-Bosqich Kursi | FBA Academy",
    description: "ACCA Applied Knowledge — ACCA sertifikatsiyasining birinchi bosqichi. BT, MA, FA imtihonlari. FBA Academy'da Toshkentda o'qing yoki onlayn. 4 oylik intensiv kurs.",
    keywords: "ACCA Applied Knowledge, ACCA 1 bosqich, BT imtihon, MA imtihon, FA imtihon, ACCA kurs O'zbekiston, FBA Academy",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "ACCA Applied Knowledge — 1-Bosqich",
      "description": "ACCA sertifikatsiyasining birinchi bosqichi: BT, MA, FA imtihonlari.",
      "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
      "educationalLevel": "Beginner",
      "timeRequired": "P4M",
    },
  });

  const faqs = faqItems.filter((f) => f.category === "ACCA" || f.category === "Umumiy").slice(0, 5);

  return (
    <Layout>
      {/* Hero — sky blue */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-blue-950 to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-ak-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/course/acca">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 cursor-pointer hover:text-white transition-colors">← ACCA To'liq dastur</span>
          </Link>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-sky-500/20 text-sky-300 border-sky-400/30 px-3">📘 ACCA 1-Bosqich</Badge>
                <Badge className="rounded-full bg-green-500/20 text-green-300 border-green-400/30 px-3">✅ Boshlang'ich daraja</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-ak-title">
                ACCA Applied<br />
                <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">Knowledge</span>
              </h1>
              <p className="mt-4 max-w-xl text-slate-300 leading-relaxed text-lg">ACCA yo'lining birinchi va eng muhim bosqichi. 3 ta imtihon: BT, MA, FA — moliya va buxgalteriya dunyosiga kirish.</p>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm font-bold text-white ml-1">{course.rating}</span>
                </div>
                <span className="text-sm text-slate-400">{course.studentsCount} talaba</span>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: BookOpen, label: "3 imtihon", sub: "BT, MA, FA" },
                  { icon: Clock, label: course.duration, sub: "Intensiv" },
                  { icon: Target, label: "100%", sub: "O'tish kafolati" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm" data-testid={`feature-ak-${i}`}>
                    <item.icon className="mb-2 h-5 w-5 text-sky-300" />
                    <div className="text-xs font-bold text-white sm:text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-card" data-testid="card-ak-enroll">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold">So'rov qoldiring</h3>
                  <Badge className="rounded-full bg-rose-500 text-white font-bold">-{course.discount}</Badge>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                  <Flame className="h-4 w-4" /> Joylar cheklangan
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold" data-testid="text-ak-price">{course.price} UZS</span>
                  <span className="text-sm text-muted-foreground line-through">{course.oldPrice} UZS</span>
                </div>
                <LeadForm source="course-applied-knowledge" buttonText="Chegirma bilan yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCA Journey Progress */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-50 py-10 dark:from-sky-950/20 dark:to-blue-950/20" data-testid="section-journey">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-sky-600">ACCA sertifikatlanish yo'li</p>
          <div className="relative flex items-start justify-between">
            <div className="absolute left-0 right-0 top-5 h-0.5 bg-gradient-to-r from-sky-400 via-slate-300 to-slate-200 sm:mx-[8%]" />
            {JOURNEY.map((step, i) => (
              <div key={i} className="relative flex flex-1 flex-col items-center text-center" data-testid={`journey-step-${i}`}>
                <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-extrabold shadow-md ${step.active ? "bg-sky-500 text-white ring-4 ring-sky-200" : "bg-white text-slate-400 border-2 border-slate-200"}`}>{step.step}</div>
                <div className={`mt-2 text-xs font-bold sm:text-sm ${step.active ? "text-sky-700" : "text-slate-400"}`}>{step.label}</div>
                <div className={`mt-0.5 text-xs ${step.active ? "text-sky-600" : "text-slate-300"}`}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Paper Cards */}
      <section className="py-14 sm:py-20" data-testid="section-papers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-papers-title">3 ta ACCA imtihon qog'ozi</h2>
          <p className="mb-10 text-muted-foreground">Har birini ketma-ket yoki bir vaqtda topshirishingiz mumkin</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {PAPERS.map((paper, i) => (
              <div key={i} className="group rounded-2xl border bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-card" data-testid={`paper-card-${i}`}>
                <div className={`mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${paper.color} px-4 py-2 text-lg font-extrabold text-white shadow-md`}>{paper.code}</div>
                <h3 className="mb-2 text-lg font-extrabold">{paper.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{paper.desc}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="rounded-full text-xs">{paper.difficulty}</Badge>
                  <span className="text-xs text-muted-foreground">{paper.topics} asosiy mavzu</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-ak-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-2xl font-extrabold sm:text-3xl">Applied Knowledge haqida ko'proq</h2>
            <p className="mb-6 text-muted-foreground">ACCA Applied Knowledge bosqichida nima o'rganasiz va qanday imtihon topshirasiz?</p>
            <YouTubeEmbed videoId={course.videoId!} title="ACCA Applied Knowledge — kurs haqida" />
          </div>
        </div>
      </section>

      {/* Salary */}
      <section className="py-14 sm:py-20" data-testid="section-ak-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-6 shadow-2xl sm:p-10">
            <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl">Maoshingiz tajriba bilan o'sadi</h2>
            <div className="space-y-4">
              {course.salaryLevels.map((level, i) => (
                <div key={i} className="rounded-2xl bg-[#c8ff00] p-4 sm:p-5" style={{ maxWidth: `${50 + i * 25}%`, minWidth: "200px" }} data-testid={`ak-salary-${i}`}>
                  <div className="text-lg font-extrabold text-slate-900 sm:text-xl">{level.salary} so'm dan</div>
                  <div className="text-sm font-medium text-slate-700">{level.level} — {level.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-slate-50 py-12 dark:bg-slate-900/50" data-testid="section-ak-tools">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold">Instrumentlar va dasturlar</h2>
          <div className="flex flex-wrap gap-3">
            {course.tools.map((tool, i) => (
              <div key={i} className="rounded-full border-2 border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-800 shadow-sm dark:border-sky-800 dark:bg-sky-900/20 dark:text-sky-300" data-testid={`tool-ak-${i}`}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-14" data-testid="section-ak-skills">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">Siz o'rganasiz</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {course.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm dark:bg-card" data-testid={`ak-skill-${i}`}>
                <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-500" />
                <span className="font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-ak-modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">Kurs dasturi</h2>
          <div className="mb-6 flex flex-wrap gap-2">
            {[{ icon: Calendar, text: course.duration }, { icon: BookOpen, text: `${course.projects} loyiha` }, { icon: Clock, text: `${course.theoryHours} soat nazariya` }, { icon: Wrench, text: `${course.practiceHours} soat amaliyot` }].map((item, i) => (
              <Badge key={i} variant="outline" className="rounded-full gap-1.5 border-2 px-3 py-1.5 text-xs font-semibold">
                <item.icon className="h-3.5 w-3.5" /> {item.text}
              </Badge>
            ))}
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {course.modules.map((mod, i) => (
                <AccordionItem key={i} value={`m-${i}`} className="rounded-2xl border bg-white px-5 shadow-sm dark:bg-card" data-testid={`ak-module-${i}`}>
                  <AccordionTrigger className="text-left py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-sm font-bold text-white shadow-md">{i + 1}</span>
                      <div>
                        <span className="text-sm font-bold sm:text-base">{mod.title}</span>
                        <div className="text-xs text-muted-foreground">{mod.topics.length} mavzu</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-12 space-y-2.5 pb-3">
                      {mod.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-14" data-testid="section-ak-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">Kurs kimlar uchun?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {course.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border bg-white p-5 shadow-sm dark:bg-card" data-testid={`ak-for-whom-${i}`}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100">
                  <GraduationCap className="h-4 w-4 text-sky-600" />
                </div>
                <span className="font-medium text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support team */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-ak-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">O'quv jarayonida siz bilan birga</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <Card key={i} className="border shadow-md overflow-hidden text-center" data-testid={`ak-support-${i}`}>
                <div className="h-48 overflow-hidden">
                  <img src={person.avatar} alt={person.role} className="h-full w-full object-cover object-top" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold">{person.role}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{person.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Keyingi bosqich CTA */}
      <section className="py-12" data-testid="section-next-step">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-sky-200 bg-sky-50 p-8 dark:border-sky-800 dark:bg-sky-950/20">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <Badge className="mb-3 rounded-full bg-sky-500/20 text-sky-700 border-sky-300 text-xs font-bold">Keyingi qadam</Badge>
                <h3 className="text-xl font-extrabold">Applied Knowledge'dan so'ng</h3>
                <p className="mt-2 text-muted-foreground text-sm">Applied Knowledge'ni muvaffaqiyatli tugatgach, ACCA Applied Skills bosqichiga o'ting va 6 ta yangi imtihon topshiring.</p>
              </div>
              <div className="flex gap-3">
                <Link href="/course/applied-skills" className="flex-1">
                  <Button className="w-full rounded-full bg-gradient-to-r from-sky-500 to-blue-600 font-bold text-white" data-testid="button-next-step">
                    Applied Skills → <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-700 py-12" data-testid="section-ak-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Bepul konsultatsiya olish</h2>
              <p className="mt-3 text-sky-100">Applied Knowledge haqida barcha savollaringizga 10 daqiqada javob oling</p>
              <Link href="/contacts">
                <Button size="lg" className="mt-6 gap-2 rounded-full bg-white px-8 font-bold text-sky-700 hover:bg-slate-100" data-testid="button-ak-cta">
                  Konsultatsiya olish <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={mentor.avatar} alt={mentor.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-4 ring-white/20 shadow-xl" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <p className="text-sm text-sky-200">{mentor.role}</p>
                <p className="text-sm text-sky-200">{mentor.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" data-testid="section-ak-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border bg-white px-6 shadow-sm dark:bg-card" data-testid={`ak-faq-${faq.id}`}>
                  <AccordionTrigger className="text-left font-semibold py-5 text-sm sm:text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
