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
import { CheckCircle2, ArrowRight, Star, Flame, BarChart3, TrendingUp, Calculator, PieChart, Clock, Calendar, Wrench, BookOpen, GraduationCap, LineChart } from "lucide-react";

const course = courses.find((c) => c.id === "financial-modeling")!;
const mentor = teachers.find((t) => t.id === "teacher-4")!;

const MODEL_TYPES = [
  {
    name: "3-Statement Model",
    icon: BarChart3,
    color: "from-emerald-500 to-green-600",
    desc: "P&L, Balans va Pul oqimlari — asosiy moliyaviy model. Har qanday kompaniya tahlili uchun zamin.",
    useCase: "Korporativ moliya, budjetlashtirish",
  },
  {
    name: "DCF (Discounted Cash Flow)",
    icon: Calculator,
    color: "from-blue-500 to-indigo-600",
    desc: "Kompaniyaning ichki qiymatini hisoblash. WACC, terminal value, NPV va IRR.",
    useCase: "Kompaniya baholash, M&A",
  },
  {
    name: "Comparable Analysis",
    icon: PieChart,
    color: "from-violet-500 to-purple-600",
    desc: "Raqobatchi kompaniyalar bilan solishtirish. EV/EBITDA, P/E, P/S multiplikatorlar.",
    useCase: "IPO, investitsiya tahlili",
  },
  {
    name: "LBO (Leveraged Buyout)",
    icon: TrendingUp,
    color: "from-rose-500 to-pink-600",
    desc: "Qarz orqali kompaniya sotib olish modeli. Private equity treningining asosi.",
    useCase: "Private equity, M&A",
  },
];

const TOOLS_TABLE = [
  { tool: "Excel (Ilg'or)", level: 95, color: "bg-emerald-500" },
  { tool: "Bloomberg Terminal", level: 70, color: "bg-blue-500" },
  { tool: "Capital IQ", level: 65, color: "bg-violet-500" },
  { tool: "Power BI", level: 75, color: "bg-amber-500" },
  { tool: "Python (Pandas)", level: 50, color: "bg-rose-500" },
];

const CAREER_ROLES = [
  { role: "Financial Analyst", company: "Investitsiya banki", salary: "6 000 000+" },
  { role: "Investment Banker", company: "IB / Corporate Finance", salary: "14 000 000+" },
  { role: "Private Equity Analyst", company: "PE firma", salary: "20 000 000+" },
  { role: "CFO / VP Finance", company: "Korporatsiya", salary: "30 000 000+" },
];

export default function FinancialModelingPage() {
  useSEO({
    title: "Financial Modeling Kursi — Excel, DCF, LBO | FBA Academy",
    description: "Professional Financial Modeling kursi: DCF, LBO, 3-Statement Model, Comparable Analysis. Excel ilg'or daraja, Bloomberg, Capital IQ. Investitsiya banki va PE uchun tayyorgarlik.",
    keywords: "Financial Modeling kurs, DCF model, LBO model, Excel moliya, investitsiya tahlili, kompaniya baholash kurs O'zbekiston",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Financial Modeling — Moliyaviy Modellashtirish",
      "description": "DCF, LBO, 3-Statement, Comparable Analysis modellar. Excel ilg'or darajada.",
      "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
      "educationalLevel": "Intermediate",
      "timeRequired": "P3M",
    },
  });

  const faqs = faqItems.filter((f) => f.category === "Financial Modeling" || f.category === "Umumiy").slice(0, 5);

  return (
    <Layout>
      {/* Hero — dark green investment bank feel */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-emerald-950 to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-fm-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/courses">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 cursor-pointer hover:text-white transition-colors">← Barcha kurslar</span>
          </Link>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-emerald-500/20 text-emerald-300 border-emerald-400/30 px-3">📊 Investitsiya banki darajasi</Badge>
                <Badge className="rounded-full bg-green-500/20 text-green-300 border-green-400/30 px-3">{course.projects}+ real loyiha</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-fm-title">
                Financial<br />
                <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">Modeling</span>
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
                  { icon: Calculator, label: "4 model turi", sub: "DCF, LBO, Comps, 3S" },
                  { icon: BookOpen, label: course.projects + " loyiha", sub: "Real kompaniyalar" },
                  { icon: LineChart, label: course.practiceHours + " soat", sub: "Amaliyot" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm" data-testid={`fm-feature-${i}`}>
                    <item.icon className="mb-2 h-5 w-5 text-emerald-300" />
                    <div className="text-xs font-bold text-white sm:text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-card" data-testid="card-fm-enroll">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold">So'rov qoldiring</h3>
                  <Badge className="rounded-full bg-rose-500 text-white font-bold">-{course.discount}</Badge>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                  <Flame className="h-4 w-4" /> Joylar cheklangan
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold" data-testid="text-fm-price">{course.price} UZS</span>
                  <span className="text-sm text-muted-foreground line-through">{course.oldPrice} UZS</span>
                </div>
                <LeadForm source="course-financial-modeling" buttonText="Chegirma bilan yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Model Types */}
      <section className="py-14 sm:py-20" data-testid="section-model-types">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-models-title">4 ta moliyaviy model turi</h2>
          <p className="mb-10 text-muted-foreground">Investitsiya banklaridagi kabi real kompaniyalar ustida ishlaysiz</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {MODEL_TYPES.map((model, i) => (
              <div key={i} className="group rounded-2xl border bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-card" data-testid={`model-type-${i}`}>
                <div className="mb-4 flex items-center gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${model.color} shadow-md`}>
                    <model.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold">{model.name}</h3>
                    <Badge variant="outline" className="mt-0.5 rounded-full border-emerald-200 text-emerald-700 text-xs">{model.useCase}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Proficiency */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-tools-proficiency">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">Asbob-uskunalar</h2>
              <p className="mb-8 text-muted-foreground">Kurs oxirida qaysi dasturlarda ishlashni bilasiz</p>
              <div className="space-y-5">
                {TOOLS_TABLE.map((tool, i) => (
                  <div key={i} data-testid={`tool-bar-${i}`}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-bold">{tool.tool}</span>
                      <span className="text-muted-foreground font-semibold">{tool.level}%</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-slate-200">
                      <div className={`h-full rounded-full ${tool.color}`} style={{ width: `${tool.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoId={course.videoId!} title="Financial Modeling kurs haqida" />
            </div>
          </div>
        </div>
      </section>

      {/* Career Roles Table */}
      <section className="py-14" data-testid="section-career-roles">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">Karyera imkoniyatlari</h2>
          <p className="mb-8 text-muted-foreground">Financial Modeling bilgach qaysi lavozimlarga ega bo'lasiz</p>
          <div className="overflow-hidden rounded-2xl border shadow-md">
            <table className="w-full text-sm" data-testid="table-career-roles">
              <thead>
                <tr className="bg-emerald-950 text-white">
                  <th className="px-5 py-4 text-left font-bold">Lavozim</th>
                  <th className="px-5 py-4 text-left font-bold hidden sm:table-cell">Kompaniya turi</th>
                  <th className="px-5 py-4 text-left font-bold">Maosh (UZS/oy)</th>
                </tr>
              </thead>
              <tbody>
                {CAREER_ROLES.map((role, i) => (
                  <tr key={i} className={`border-t transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-950/20 ${i % 2 === 0 ? "bg-white dark:bg-card" : "bg-slate-50 dark:bg-slate-900/30"}`} data-testid={`career-role-${i}`}>
                    <td className="px-5 py-4 font-bold text-emerald-700 dark:text-emerald-400">{role.role}</td>
                    <td className="px-5 py-4 text-muted-foreground hidden sm:table-cell">{role.company}</td>
                    <td className="px-5 py-4 font-extrabold">{role.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Salary */}
      <section className="py-14" data-testid="section-fm-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-6 shadow-2xl sm:p-10">
            <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl">Maoshingiz tajriba bilan o'sadi</h2>
            <div className="space-y-4">
              {course.salaryLevels.map((level, i) => (
                <div key={i} className="rounded-2xl bg-[#c8ff00] p-4 sm:p-5" style={{ maxWidth: `${50 + i * 25}%`, minWidth: "200px" }} data-testid={`fm-salary-${i}`}>
                  <div className="text-lg font-extrabold text-slate-900 sm:text-xl">{level.salary} so'm dan</div>
                  <div className="text-sm font-medium text-slate-700">{level.level} — {level.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-fm-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold">Kurs kimlar uchun?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border bg-white p-5 shadow-sm dark:bg-card" data-testid={`fm-for-whom-${i}`}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                  <GraduationCap className="h-4 w-4 text-emerald-600" />
                </div>
                <span className="font-medium text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-14" data-testid="section-fm-modules">
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
                <AccordionItem key={i} value={`m-${i}`} className="rounded-2xl border bg-white px-5 shadow-sm dark:bg-card" data-testid={`fm-module-${i}`}>
                  <AccordionTrigger className="text-left py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 text-sm font-bold text-white shadow-md">{i + 1}</span>
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
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-fm-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">O'quv jarayonida siz bilan birga</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <Card key={i} className="border shadow-md overflow-hidden text-center" data-testid={`fm-support-${i}`}>
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
      <section className="bg-gradient-to-r from-emerald-700 to-green-800 py-12" data-testid="section-fm-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Financial Modeling bo'yicha bepul konsultatsiya</h2>
              <p className="mt-3 text-emerald-100">Kurs tafsilotlari va karyera imkoniyatlari haqida ma'lumot oling</p>
              <Link href="/contacts">
                <Button size="lg" className="mt-6 gap-2 rounded-full bg-white px-8 font-bold text-emerald-700 hover:bg-slate-100" data-testid="button-fm-cta">
                  Konsultatsiya olish <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={mentor.avatar} alt={mentor.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-4 ring-white/20 shadow-xl" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <p className="text-sm text-emerald-200">{mentor.role}</p>
                <p className="text-sm text-emerald-200">{mentor.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" data-testid="section-fm-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border bg-white px-6 shadow-sm dark:bg-card" data-testid={`fm-faq-${faq.id}`}>
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
