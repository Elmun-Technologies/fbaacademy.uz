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
import { CheckCircle2, ArrowRight, Star, Flame, Crown, TrendingUp, BarChart3, Shield, Clock, Calendar, Wrench, BookOpen, Trophy, GraduationCap } from "lucide-react";

const course = courses.find((c) => c.id === "strategic-professional")!;
const mentor = teachers.find((t) => t.id === "teacher-2")!;

const PAPERS = [
  {
    code: "SBL",
    type: "Majburiy",
    name: "Strategic Business Leader",
    desc: "Strategik yetakchilik, korporativ boshqaruv, risk va etika. Case study asosida baholanadi.",
    badge: "bg-amber-500",
  },
  {
    code: "SBR",
    type: "Majburiy",
    name: "Strategic Business Reporting",
    desc: "Murakkab IFRS hisoboti, konsolidatsiya, moliyaviy instrumentlar, ijtimoiy hisobot.",
    badge: "bg-amber-500",
  },
  {
    code: "AFM",
    type: "Ixtiyoriy",
    name: "Advanced Financial Management",
    desc: "M&A, derivativlar, hedjirlash, xalqaro moliya, kompaniya baholash.",
    badge: "bg-slate-500",
  },
  {
    code: "AAA",
    type: "Ixtiyoriy",
    name: "Advanced Audit & Assurance",
    desc: "Murakkab audit, IT audit, professional etika, maxsus topshiriqlar.",
    badge: "bg-slate-500",
  },
];

const CAREER_PATH = [
  { title: "ACCA Qualified", salary: "15 000 000+", desc: "Sertifikat olgach darhol", color: "from-amber-400 to-yellow-500" },
  { title: "Finance Manager", salary: "25 000 000+", desc: "3-5 yillik tajriba bilan", color: "from-orange-500 to-amber-500" },
  { title: "CFO / Director", salary: "50 000 000+", desc: "7+ yillik karyera", color: "from-amber-600 to-orange-700" },
];

const ELITE_STATS = [
  { value: "1 000+", label: "FBA Academy bitiruvchilari" },
  { value: "Big Four", label: "Hamkor kompaniyalar" },
  { value: "92%", label: "Ishga joylashish darajasi" },
  { value: "ACCA Fellow", label: "Yuqori malaka unvoni" },
];

export default function StrategicProfessionalPage() {
  useSEO({
    title: "ACCA Strategic Professional — 3-Bosqich, CFO Yo'li | FBA Academy",
    description: "ACCA Strategic Professional — eng yuqori bosqich. SBL, SBR + ixtiyoriy qog'ozlar. To'liq ACCA malakasi. CFO va Finance Director bo'lish yo'li. FBA Academy Toshkent.",
    keywords: "ACCA Strategic Professional, ACCA 3 bosqich, SBL imtihon, SBR imtihon, ACCA Fellow, CFO kurs, moliyaviy direktor",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "ACCA Strategic Professional — 3-Bosqich",
      "description": "ACCA sertifikatsiyasining yakuniy bosqichi. SBL, SBR va ixtiyoriy qog'ozlar.",
      "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
      "educationalLevel": "Advanced",
      "timeRequired": "P8M",
    },
  });

  const faqs = faqItems.filter((f) => f.category === "ACCA" || f.category === "Sertifikat" || f.category === "Ishga joylashish").slice(0, 6);

  return (
    <Layout>
      {/* Hero — dark gold/amber — premium elite feel */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-[#1a0a00] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-sp-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/course/acca">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 cursor-pointer hover:text-amber-300 transition-colors">← ACCA To'liq dastur</span>
          </Link>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-amber-500/20 text-amber-300 border-amber-400/30 px-3">👑 ACCA 3-Bosqich — Yakuniy</Badge>
                <Badge className="rounded-full bg-yellow-500/20 text-yellow-200 border-yellow-400/20 px-3">💼 CFO yo'li</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-sp-title">
                ACCA Strategic<br />
                <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">Professional</span>
              </h1>
              <p className="mt-4 max-w-xl text-slate-300 leading-relaxed text-lg">{course.description}</p>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm font-bold text-white ml-1">{course.rating}</span>
                </div>
                <span className="text-sm text-slate-400">{course.studentsCount} talaba</span>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: Crown, label: "ACCA Qualified", sub: "Yakuniy unvon" },
                  { icon: Trophy, label: course.rating + " reyting", sub: "Eng yuqori" },
                  { icon: TrendingUp, label: "50M+", sub: "CFO daromad" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 sm:p-4 backdrop-blur-sm" data-testid={`sp-feature-${i}`}>
                    <item.icon className="mb-2 h-5 w-5 text-amber-300" />
                    <div className="text-xs font-bold text-white sm:text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-amber-500/20 bg-white p-6 shadow-2xl dark:bg-card" data-testid="card-sp-enroll">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold">So'rov qoldiring</h3>
                  <Badge className="rounded-full bg-rose-500 text-white font-bold">-{course.discount}</Badge>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                  <Flame className="h-4 w-4" /> Joylar cheklangan
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold" data-testid="text-sp-price">{course.price} UZS</span>
                  <span className="text-sm text-muted-foreground line-through">{course.oldPrice} UZS</span>
                </div>
                <LeadForm source="course-strategic-professional" buttonText="Chegirma bilan yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Stats */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 py-10 dark:from-amber-950/20 dark:to-yellow-950/20" data-testid="section-elite-stats">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {ELITE_STATS.map((s, i) => (
              <div key={i} className="rounded-2xl border-2 border-amber-200 bg-white p-5 text-center shadow-sm dark:border-amber-900/30 dark:bg-card" data-testid={`sp-stat-${i}`}>
                <div className="text-2xl font-extrabold text-amber-700 dark:text-amber-400 sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Papers — 2+2 layout */}
      <section className="py-14 sm:py-20" data-testid="section-sp-papers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-sp-papers-title">Imtihon qog'ozlari</h2>
          <p className="mb-10 text-muted-foreground">2 ta majburiy + 2 ta ixtiyoriy qog'ozdan birini tanlaysiz</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {PAPERS.map((paper, i) => (
              <div key={i} className={`rounded-2xl border-2 p-6 shadow-md ${paper.type === "Majburiy" ? "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20" : "border-slate-200 bg-white dark:border-slate-700 dark:bg-card"}`} data-testid={`sp-paper-${i}`}>
                <div className="mb-4 flex items-center justify-between">
                  <span className={`inline-flex rounded-full px-4 py-1.5 text-sm font-extrabold text-white shadow-md ${paper.badge}`}>{paper.code}</span>
                  <Badge variant="outline" className={`rounded-full text-xs font-bold ${paper.type === "Majburiy" ? "border-amber-400 text-amber-700" : "border-slate-400 text-slate-600"}`}>{paper.type}</Badge>
                </div>
                <h3 className="mb-2 text-lg font-extrabold">{paper.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{paper.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path Timeline */}
      <section className="bg-slate-900 py-14 sm:py-20" data-testid="section-career-path">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold text-white sm:text-3xl">CFO bo'lish yo'li</h2>
          <p className="mb-10 text-slate-400">ACCA Strategic Professional sertifikati bilan karyerangiz qanday o'sadi</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {CAREER_PATH.map((path, i) => (
              <div key={i} className={`rounded-2xl bg-gradient-to-br ${path.color} p-6 shadow-xl`} data-testid={`career-path-${i}`}>
                <div className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{path.salary}</div>
                <div className="mt-1 text-lg font-bold text-slate-800">{path.title}</div>
                <div className="mt-1 text-sm text-slate-700">{path.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">*Manba: hh.uz, HeadHunter O'zbekiston</p>
        </div>
      </section>

      {/* YouTube */}
      <section className="py-14" data-testid="section-sp-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Strategic Professional nima beradi?</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">Mentorlarimiz ACCA sertifikatsiyasining yakuniy bosqichi, imtihon formati va karyera imkoniyatlari haqida batafsil tushuntiradi.</p>
              <div className="mt-6 space-y-3">
                {["Case study asosida imtihon (SBL)", "Real kompaniyalar tahlili", "CFO lavozimiga to'g'ridan-to'g'ri tayyorgarlik", "ACCA Fellow unvoni yo'li"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoId={course.videoId!} title="ACCA Strategic Professional" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-sp-skills">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold">Siz o'rganasiz</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {course.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm dark:bg-card" data-testid={`sp-skill-${i}`}>
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500" />
                <span className="font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-14" data-testid="section-sp-modules">
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
                <AccordionItem key={i} value={`m-${i}`} className="rounded-2xl border bg-white px-5 shadow-sm dark:bg-card" data-testid={`sp-module-${i}`}>
                  <AccordionTrigger className="text-left py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-sm font-bold text-white shadow-md">{i + 1}</span>
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
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-sp-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">O'quv jarayonida siz bilan birga</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <Card key={i} className="border shadow-md overflow-hidden text-center" data-testid={`sp-support-${i}`}>
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-700 py-12" data-testid="section-sp-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">ACCA yo'lingizni boshlaymizmi?</h2>
              <p className="mt-3 text-amber-100">Bepul konsultatsiyada Strategic Professional haqida barcha savollarga javob oling</p>
              <Link href="/contacts">
                <Button size="lg" className="mt-6 gap-2 rounded-full bg-white px-8 font-bold text-amber-700 hover:bg-slate-100" data-testid="button-sp-cta">
                  Konsultatsiya olish <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={mentor.avatar} alt={mentor.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-4 ring-white/20 shadow-xl" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <p className="text-sm text-amber-200">{mentor.role}</p>
                <p className="text-sm text-amber-200">{mentor.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" data-testid="section-sp-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border bg-white px-6 shadow-sm dark:bg-card" data-testid={`sp-faq-${faq.id}`}>
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
