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
import { CheckCircle2, ArrowRight, Star, Flame, BarChart3, Scale, FileText, TrendingUp, Shield, Banknote, Clock, Calendar, Wrench, BookOpen, GraduationCap } from "lucide-react";
import CourseFormatSection from "@/components/course-format-section";

const course = courses.find((c) => c.id === "applied-skills")!;
const mentor = teachers.find((t) => t.id === "teacher-2")!;

const SIX_PAPERS = [
  { code: "LW", name: "Corporate & Business Law", icon: Scale, color: "from-slate-600 to-slate-800", desc: "Shartnoma, mehnat, korporativ va tijorat huquqi" },
  { code: "PM", name: "Performance Management", icon: BarChart3, color: "from-violet-500 to-purple-700", desc: "Samaradorlik tahlili, byudjet, transfer narxlash" },
  { code: "TX", name: "Taxation", icon: FileText, color: "from-amber-500 to-orange-600", desc: "Daromad solig'i, QQS, soliq rejalash" },
  { code: "FR", name: "Financial Reporting", icon: TrendingUp, color: "from-emerald-500 to-teal-600", desc: "IFRS/IAS standartlari, konsolidatsiya" },
  { code: "AA", name: "Audit & Assurance", icon: Shield, color: "from-blue-500 to-indigo-600", desc: "Audit jarayoni, ichki nazorat, etika" },
  { code: "FM", name: "Financial Management", icon: Banknote, color: "from-rose-500 to-pink-600", desc: "Investitsiya, moliyalashtirish, risk boshqaruvi" },
];

const SKILLS_MATRIX = [
  { skill: "IFRS moliyaviy hisobot", level: 85 },
  { skill: "Audit va tekshiruv", level: 80 },
  { skill: "Soliq rejalash", level: 75 },
  { skill: "Moliyaviy menejment", level: 85 },
  { skill: "Korporativ huquq", level: 70 },
  { skill: "Samaradorlik boshqaruvi", level: 80 },
];

export default function AppliedSkillsPage() {
  useSEO({
    title: "ACCA Applied Skills — 2-Bosqich | FBA Academy Toshkent",
    description: "ACCA Applied Skills — 6 ta imtihon: LW, PM, TX, FR, AA, FM. ACCA sertifikatsiyasining o'rta bosqichi. FBA Academy'da onlayn va offline. Audit, IFRS, Soliq bo'yicha chuqur bilim.",
    keywords: "ACCA Applied Skills, ACCA 2 bosqich, FR imtihon, AA audit, FM Financial Management, TX soliq, ACCA kurs Toshkent",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "ACCA Applied Skills — 2-Bosqich",
      "description": "6 ta imtihon: LW, PM, TX, FR, AA, FM. ACCA sertifikatsiyasining o'rta bosqichi.",
      "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
      "educationalLevel": "Intermediate",
      "timeRequired": "P6M",
    },
  });

  const faqs = faqItems.filter((f) => f.category === "ACCA" || f.category === "Umumiy" || f.category === "Sertifikat").slice(0, 5);

  return (
    <Layout>
      {/* Hero — emerald/teal */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-as-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-400/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/course/acca">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 cursor-pointer hover:text-white transition-colors">← ACCA To'liq dastur</span>
          </Link>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-emerald-500/20 text-emerald-300 border-emerald-400/30 px-3">📗 ACCA 2-Bosqich</Badge>
                <Badge className="rounded-full bg-blue-500/20 text-blue-300 border-blue-400/30 px-3">6 ta imtihon qog'ozi</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-as-title">
                ACCA Applied<br />
                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Skills</span>
              </h1>
              <p className="mt-4 max-w-xl text-slate-300 leading-relaxed text-lg">{course.description}</p>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm font-bold text-white ml-1">{course.rating}</span>
                </div>
                <span className="text-sm text-slate-400">{course.studentsCount} talaba · {course.duration}</span>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: BookOpen, label: "6 imtihon", sub: "LW,PM,TX,FR,AA,FM" },
                  { icon: Clock, label: course.practiceHours + " soat", sub: "Amaliyot" },
                  { icon: TrendingUp, label: course.rating, sub: "Reyting" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm" data-testid={`as-feature-${i}`}>
                    <item.icon className="mb-2 h-5 w-5 text-emerald-300" />
                    <div className="text-xs font-bold text-white sm:text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-card" data-testid="card-as-enroll">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold">So'rov qoldiring</h3>
                  <Badge className="rounded-full bg-rose-500 text-white font-bold">-{course.discount}</Badge>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                  <Flame className="h-4 w-4" /> Joylar cheklangan
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold" data-testid="text-as-price">{course.price} UZS</span>
                  <span className="text-sm text-muted-foreground line-through">{course.oldPrice} UZS</span>
                </div>
                <LeadForm source="course-applied-skills" buttonText="Chegirma bilan yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Paper Grid */}
      <section className="py-14 sm:py-20" data-testid="section-six-papers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-papers-title">6 ta ACCA imtihon qog'ozi</h2>
          <p className="mb-10 text-muted-foreground">Barcha 6 ta qog'ozni FBA Academy'da o'rganasiz — mantiqiy ketma-ketlikda</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SIX_PAPERS.map((paper, i) => (
              <div key={i} className="group flex gap-4 rounded-2xl border bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-card" data-testid={`paper-${i}`}>
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${paper.color} text-sm font-extrabold text-white shadow-md`}>{paper.code}</div>
                <div>
                  <h3 className="text-base font-bold">{paper.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{paper.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-skills-matrix">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">Ko'nikma darajangiz o'sadi</h2>
              <p className="mb-8 text-muted-foreground">Kurs yakunida qanday darajaga yetasiz</p>
              <div className="space-y-4">
                {SKILLS_MATRIX.map((item, i) => (
                  <div key={i} data-testid={`skill-bar-${i}`}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-semibold">{item.skill}</span>
                      <span className="text-muted-foreground">{item.level}%</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                      <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: `${item.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoId={course.videoId!} title="ACCA Applied Skills — kurs haqida" />
            </div>
          </div>
        </div>
      </section>

      {/* Salary */}
      <section className="py-14" data-testid="section-as-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-6 shadow-2xl sm:p-10">
            <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl">Maosh darajasi</h2>
            <div className="space-y-4">
              {course.salaryLevels.map((level, i) => (
                <div key={i} className="rounded-2xl bg-[#c8ff00] p-4 sm:p-5" style={{ maxWidth: `${50 + i * 25}%`, minWidth: "200px" }} data-testid={`as-salary-${i}`}>
                  <div className="text-lg font-extrabold text-slate-900 sm:text-xl">{level.salary} so'm dan</div>
                  <div className="text-sm font-medium text-slate-700">{level.level} — {level.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-as-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold">Kurs kimlar uchun?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border bg-white p-5 shadow-sm dark:bg-card" data-testid={`as-for-whom-${i}`}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <GraduationCap className="h-4 w-4 text-emerald-600" />
                </div>
                <span className="font-medium text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-14" data-testid="section-as-modules">
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
                <AccordionItem key={i} value={`m-${i}`} className="rounded-2xl border bg-white px-5 shadow-sm dark:bg-card" data-testid={`as-module-${i}`}>
                  <AccordionTrigger className="text-left py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white shadow-md">{i + 1}</span>
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

      {/* Support */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-as-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">O'quv jarayonida siz bilan birga</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <Card key={i} className="border shadow-md overflow-hidden text-center" data-testid={`as-support-${i}`}>
                <div className="h-48 overflow-hidden">
                  <img src={person.avatar} alt={person.role} className="h-full w-full object-cover object-top" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold">{person.role}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{person.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next step */}
      <section className="py-10" data-testid="section-as-next">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-800 dark:bg-emerald-950/20">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <Badge className="mb-3 rounded-full bg-emerald-600 text-white text-xs font-bold">Yakuniy bosqich</Badge>
                <h3 className="text-xl font-extrabold">Applied Skills'dan so'ng — Strategic Professional</h3>
                <p className="mt-2 text-muted-foreground text-sm">Applied Skills'ni tugatgach ACCA'ning eng nufuzli bosqichi — Strategic Professional'ga o'ting va to'liq ACCA malakasiga ega bo'ling.</p>
              </div>
              <Link href="/course/strategic-professional">
                <Button className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-600 font-bold text-white" data-testid="button-as-next">
                  Strategic Professional → <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 py-12" data-testid="section-as-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Bepul konsultatsiya olish</h2>
              <p className="mt-3 text-emerald-100">Applied Skills kursi haqida barcha savollaringizga javob oling</p>
              <Link href="/contacts">
                <Button size="lg" className="mt-6 gap-2 rounded-full bg-white px-8 font-bold text-emerald-700 hover:bg-slate-100" data-testid="button-as-cta">
                  Konsultatsiya olish <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={mentor.avatar} alt={mentor.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-4 ring-white/20 shadow-xl" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <p className="text-sm text-emerald-200">{mentor.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" data-testid="section-as-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border bg-white px-6 shadow-sm dark:bg-card" data-testid={`as-faq-${faq.id}`}>
                  <AccordionTrigger className="text-left font-semibold py-5 text-sm sm:text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <CourseFormatSection />
    </Layout>
  );
}
