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
import { CheckCircle2, ArrowRight, Star, Flame, Globe, Award, Users, TrendingUp, BookOpen, Clock, Calendar, Wrench, GraduationCap } from "lucide-react";

const course = courses.find((c) => c.id === "acca")!;
const mentor = teachers.find((t) => t.id === "teacher-1")!;

const ACCA_STAGES = [
  { stage: "Applied Knowledge", color: "from-sky-500 to-blue-600", papers: ["BT — Business & Technology", "MA — Management Accounting", "FA — Financial Accounting"], duration: "4 oy", href: "/course/applied-knowledge" },
  { stage: "Applied Skills", color: "from-emerald-500 to-teal-600", papers: ["LW — Law", "PM — Performance Mgmt", "TX — Taxation", "FR — Financial Reporting", "AA — Audit", "FM — Financial Mgmt"], duration: "6 oy", href: "/course/applied-skills" },
  { stage: "Strategic Professional", color: "from-amber-500 to-orange-600", papers: ["SBL — Strategic Business Leader", "SBR — Strategic Business Reporting", "AFM yoki AAA (ixtiyoriy)"], duration: "8 oy", href: "/course/strategic-professional" },
];

const GLOBAL_STATS = [
  { value: "252,000+", label: "Dunyodagi ACCA a'zolar" },
  { value: "180+", label: "Davlatda tan olingan" },
  { value: "#1", label: "Buxgalteriya sertifikati" },
  { value: "Big Four", label: "Barcha firmalar talabi" },
];

export default function AccaPage() {
  useSEO({
    title: "ACCA Sertifikati — To'liq Dastur | FBA Academy Toshkent",
    description: "ACCA (Association of Chartered Certified Accountants) — dunyodagi eng nufuzli buxgalteriya sertifikati. FBA Academy'da Applied Knowledge, Applied Skills va Strategic Professional bosqichlarini o'rganing. Big Four'ga kirish yo'li.",
    keywords: "ACCA sertifikati O'zbekiston, ACCA kurs Toshkent, ACCA Applied Knowledge, ACCA Applied Skills, ACCA Strategic Professional, Big Four buxgalteriya",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "ACCA (Association of Chartered Certified Accountants) — To'liq Dastur",
      "description": "Dunyodagi eng nufuzli buxgalteriya sertifikati. 3 bosqich: Applied Knowledge, Applied Skills, Strategic Professional.",
      "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
      "educationalLevel": "Professional",
      "timeRequired": "P12M",
    },
  });

  const faqs = faqItems.filter((f) => f.category === "ACCA" || f.category === "Umumiy" || f.category === "Sertifikat").slice(0, 6);

  return (
    <Layout>
      {/* Hero — deep royal purple */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-acca-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/courses">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 cursor-pointer hover:text-white transition-colors" data-testid="link-back">← Barcha kurslar</span>
          </Link>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-yellow-500/20 text-yellow-300 border-yellow-400/30 px-3">🏆 #1 Buxgalteriya sertifikati</Badge>
                <Badge className="rounded-full bg-purple-500/20 text-purple-300 border-purple-400/30 px-3">180+ davlatda tan olingan</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-acca-title">
                ACCA — To'liq<br />
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Sertifikatlanish Dasturi</span>
              </h1>
              <p className="mt-4 max-w-xl text-slate-300 leading-relaxed text-lg">{course.description}</p>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm font-bold text-white ml-1">{course.rating}</span>
                </div>
                <span className="text-sm text-slate-400">{course.studentsCount} talaba</span>
                <span className="text-sm text-slate-400">· {course.duration}</span>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: Globe, label: "Xalqaro", sub: "180+ mamlakat" },
                  { icon: Award, label: "Big Four", sub: "Tan olingan" },
                  { icon: Users, label: course.studentsCount, sub: "Bitiruvchi" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm" data-testid={`feature-${i}`}>
                    <item.icon className="mb-2 h-5 w-5 text-purple-300" />
                    <div className="text-xs font-bold text-white sm:text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-card" data-testid="card-enroll">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold">So'rov qoldiring</h3>
                  <Badge className="rounded-full bg-rose-500 text-white font-bold">-{course.discount}</Badge>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                  <Flame className="h-4 w-4" /> Joylar cheklangan
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold" data-testid="text-price">{course.price} UZS</span>
                  <span className="text-sm text-muted-foreground line-through">{course.oldPrice} UZS</span>
                </div>
                <LeadForm source="course-acca" buttonText="Chegirma bilan yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCA Global Stats */}
      <section className="bg-white py-10 dark:bg-background" data-testid="section-global-stats">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {GLOBAL_STATS.map((s, i) => (
              <div key={i} className="rounded-2xl border-2 border-purple-100 bg-purple-50 p-5 text-center dark:border-purple-900/30 dark:bg-purple-900/10" data-testid={`stat-${i}`}>
                <div className="text-2xl font-extrabold text-purple-700 dark:text-purple-300 sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCA 3-Stage Roadmap */}
      <section className="py-14 sm:py-20" data-testid="section-roadmap">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-4 rounded-full border-purple-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">ACCA yo'li</Badge>
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-roadmap-title">3 bosqichda to'liq ACCA malakasi</h2>
          <p className="mb-10 text-muted-foreground">Har bosqichni alohida yoki to'liq dastur sifatida o'qishingiz mumkin</p>
          <div className="relative grid gap-6 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400 md:block md:mx-[16.7%]" />
            {ACCA_STAGES.map((stage, i) => (
              <Link key={i} href={stage.href}>
                <div className="group cursor-pointer rounded-2xl border bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-card" data-testid={`card-stage-${i}`}>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stage.color} text-2xl font-extrabold text-white shadow-md`}>{i + 1}</div>
                  <Badge className={`mb-3 rounded-full bg-gradient-to-r ${stage.color} text-white text-xs font-bold shadow-sm`}>{stage.duration}</Badge>
                  <h3 className="mb-3 text-lg font-extrabold">{stage.stage}</h3>
                  <ul className="space-y-1.5">
                    {stage.papers.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" /> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-purple-600 opacity-0 transition-opacity group-hover:opacity-100">
                    Batafsil <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl" data-testid="text-video-title">ACCA kurs haqida ko'proq bilib oling</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">Mentorlarimiz ACCA sertifikatining imkoniyatlari, o'quv jarayoni va karyera istiqbollari haqida to'liq tushuntiradi.</p>
              <div className="mt-6 space-y-3">
                {["Xalqaro standartlarda ta'lim", "Big Four firmalarga kirish", "Jonli darslar mini-guruhlarda", "Imtihon tayyorligi va simulyatsiyalar"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoId={course.videoId!} title="ACCA kurs haqida" />
            </div>
          </div>
        </div>
      </section>

      {/* Salary */}
      <section className="py-14 sm:py-20" data-testid="section-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-6 shadow-2xl sm:p-10">
            <h2 className="mb-2 text-2xl font-extrabold text-white sm:text-3xl">Maoshingiz tajriba bilan o'sadi</h2>
            <p className="mb-8 text-slate-400 text-sm">ACCA mutaxassislariga talab yil sayin ortib bormoqda</p>
            <div className="space-y-4">
              {course.salaryLevels.map((level, i) => (
                <div key={i} className="rounded-2xl bg-[#c8ff00] p-4 sm:p-5" style={{ maxWidth: `${50 + i * 25}%`, minWidth: "220px" }} data-testid={`salary-${i}`}>
                  <div className="text-lg font-extrabold text-slate-900 sm:text-xl">{level.salary} so'm dan</div>
                  <div className="text-sm font-medium text-slate-700">{level.level} — {level.description}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">*Manba: hh.uz, HeadHunter O'zbekiston</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-skills">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">Siz o'rganasiz</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {course.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm dark:bg-card" data-testid={`skill-${i}`}>
                <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-500" />
                <span className="font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-14 sm:py-20" data-testid="section-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">Kurs kimlar uchun?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border bg-white p-5 shadow-sm dark:bg-card" data-testid={`for-whom-${i}`}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <GraduationCap className="h-4 w-4 text-purple-600" />
                </div>
                <span className="font-medium text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-modules">
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
                <AccordionItem key={i} value={`m-${i}`} className="rounded-2xl border bg-white px-5 shadow-sm dark:bg-card" data-testid={`module-${i}`}>
                  <AccordionTrigger className="text-left py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-sm font-bold text-white shadow-md">{i + 1}</span>
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
      <section className="py-14 sm:py-20" data-testid="section-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl">O'quv jarayonida siz bilan birga</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <Card key={i} className="border shadow-md overflow-hidden text-center" data-testid={`support-${i}`}>
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 py-12 sm:py-16" data-testid="section-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Bepul konsultatsiya mutaxassis bilan</h2>
              <p className="mt-3 text-purple-100">10 daqiqada ACCA yo'li haqida barcha savollaringizga javob oling</p>
              <Link href="/contacts">
                <Button size="lg" className="mt-6 gap-2 rounded-full bg-white px-8 font-bold text-purple-700 hover:bg-slate-100" data-testid="button-cta">
                  Konsultatsiya olish <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={mentor.avatar} alt={mentor.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-4 ring-white/20 shadow-xl" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <p className="text-sm text-purple-200">{mentor.role}</p>
                <p className="text-sm text-purple-200">{mentor.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-related">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Boshqa kurslar</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.filter((c) => c.id !== "acca").slice(0, 4).map((c) => (
              <Link key={c.id} href={`/course/${c.id}`}>
                <Card className="group cursor-pointer border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full" data-testid={`related-${c.id}`}>
                  <div className="h-36 overflow-hidden">
                    <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <Badge className="mb-2 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">{c.category}</Badge>
                    <h3 className="mb-1 text-sm font-bold leading-snug">{c.title}</h3>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{c.duration}</span>
                      <span className="font-bold">{c.price} UZS</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20" data-testid="section-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border bg-white px-6 shadow-sm dark:bg-card" data-testid={`faq-${faq.id}`}>
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
