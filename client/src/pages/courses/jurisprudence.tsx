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
import { CheckCircle2, ArrowRight, Star, Flame, Scale, FileText, Briefcase, Building2, Globe, Users, Clock, Calendar, Wrench, BookOpen, GraduationCap } from "lucide-react";

const course = courses.find((c) => c.id === "jurisprudence")!;
const mentor = teachers.find((t) => t.id === "teacher-2")!;

const LAW_AREAS = [
  {
    icon: Scale,
    name: "Fuqarolik huquqi",
    color: "from-amber-500 to-yellow-600",
    topics: ["Shartnomalar tuzish", "Mulk huquqi", "Meros huquqi", "Intellektual mulk", "Fuqarolik javobgarlik"],
    desc: "O'zbekiston Fuqarolik Kodeksi asosida amaliy huquq."
  },
  {
    icon: Briefcase,
    name: "Mehnat huquqi",
    color: "from-orange-500 to-amber-600",
    topics: ["Mehnat shartnomasi", "Ishga qabul va bo'shatish", "Ish vaqti", "Mehnat muhofazasi"],
    desc: "Mehnat Kodeksi bo'yicha xodim va ish beruvchi huquqlari."
  },
  {
    icon: FileText,
    name: "Soliq huquqi",
    color: "from-rose-500 to-pink-600",
    topics: ["Soliq tizimi", "Daromad solig'i", "QQS", "Soliq tekshiruvlari"],
    desc: "Soliq Kodeksi va soliq rejalash asoslari."
  },
  {
    icon: Building2,
    name: "Tijorat huquqi",
    color: "from-violet-500 to-purple-600",
    topics: ["Tadbirkorlik", "Kompaniya tashkil etish", "Bankrotlik", "Raqobat huquqi"],
    desc: "Korporativ va tijorat qonunchiligi."
  },
  {
    icon: Globe,
    name: "Xalqaro huquq",
    color: "from-blue-500 to-indigo-600",
    topics: ["Xalqaro savdo", "Xalqaro shartnomalar", "Arbitraj", "Xalqaro xususiy huquq"],
    desc: "Tashqi iqtisodiy faoliyat uchun zarur bilimlar."
  },
];

const WHO_BENEFITS = [
  { role: "Biznes egasi", benefit: "Shartnomalarni to'g'ri tuzasiz va huquqiy xavflarni minimallashtirasz" },
  { role: "HR menejer", benefit: "Mehnat qonunchiligi asosida to'g'ri ish yuritasiz" },
  { role: "Buxgalter", benefit: "Soliq huquqi bo'yicha bilimlaringiz kengayadi" },
  { role: "Yurist bo'lmoqchi", benefit: "O'zbekiston qonunchiligini amalda qo'llashni o'rganasiz" },
  { role: "Davlat xizmatchisi", benefit: "Qonuniy normalar va tartib-taomillarni chuqur tushunasiz" },
];

export default function JurisprudencePage() {
  useSEO({
    title: "Huquqshunoslik Kursi — Mehnat, Soliq, Tijorat Huquqi | FBA Academy",
    description: "Huquqshunoslik kursi: O'zbekiston qonunchiligi — Fuqarolik, Mehnat, Soliq va Tijorat huquqi. Biznes egalari, HR va buxgalterlar uchun amaliy huquq bilimi. 5 oylik kurs.",
    keywords: "huquqshunoslik kursi O'zbekiston, mehnat huquqi kurs, soliq huquqi, fuqarolik huquqi, tijorat huquqi Toshkent, FBA Academy",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Huquqshunoslik (Jurisprudence) — O'zbekiston Qonunchiligi",
      "description": "Fuqarolik, Mehnat, Soliq, Tijorat va Xalqaro huquq asoslari.",
      "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
      "educationalLevel": "Beginner",
      "timeRequired": "P5M",
    },
  });

  const faqs = faqItems.filter((f) => f.category === "Huquqshunoslik" || f.category === "Umumiy" || f.category === "To'lov").slice(0, 5);

  return (
    <Layout>
      {/* Hero — amber/stone legal feel */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-amber-950 to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-law-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/courses">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 cursor-pointer hover:text-white transition-colors">← Barcha kurslar</span>
          </Link>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-amber-500/20 text-amber-300 border-amber-400/30 px-3">⚖️ Amaliy huquq bilimi</Badge>
                <Badge className="rounded-full bg-stone-500/20 text-stone-300 border-stone-400/30 px-3">O'zbekiston qonunchiligi</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-law-title">
                Huquqshunoslik<br />
                <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">Jurisprudence</span>
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
                  { icon: Scale, label: "5 soha", sub: "Fuqarolik, Mehnat..." },
                  { icon: FileText, label: course.practiceHours + " soat", sub: "Amaliyot" },
                  { icon: Users, label: course.studentsCount, sub: "Bitiruvchi" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm" data-testid={`law-feature-${i}`}>
                    <item.icon className="mb-2 h-5 w-5 text-amber-300" />
                    <div className="text-xs font-bold text-white sm:text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-card" data-testid="card-law-enroll">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold">So'rov qoldiring</h3>
                  <Badge className="rounded-full bg-rose-500 text-white font-bold">-{course.discount}</Badge>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                  <Flame className="h-4 w-4" /> Joylar cheklangan
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold" data-testid="text-law-price">{course.price} UZS</span>
                  <span className="text-sm text-muted-foreground line-through">{course.oldPrice} UZS</span>
                </div>
                <LeadForm source="course-jurisprudence" buttonText="Chegirma bilan yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Law Areas */}
      <section className="py-14 sm:py-20" data-testid="section-law-areas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-law-areas-title">5 ta huquq sohasi</h2>
          <p className="mb-10 text-muted-foreground">O'zbekiston qonunchiligining eng muhim sohalari amaliyot bilan</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LAW_AREAS.map((area, i) => (
              <div key={i} className="group rounded-2xl border bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-card overflow-hidden" data-testid={`law-area-${i}`}>
                <div className={`h-2 w-full bg-gradient-to-r ${area.color}`} />
                <div className="p-6">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${area.color} shadow-md`}>
                    <area.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold">{area.name}</h3>
                  <p className="mb-4 text-xs text-muted-foreground">{area.desc}</p>
                  <ul className="space-y-1.5">
                    {area.topics.map((topic, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-amber-500" /> {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube + Who Benefits */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-law-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Kim qanday foyda oladi?</h2>
              <p className="mt-4 mb-6 text-muted-foreground">Har xil mutaxassislar uchun amaliy huquq bilimlari</p>
              <div className="space-y-4">
                {WHO_BENEFITS.map((item, i) => (
                  <div key={i} className="flex gap-3 rounded-xl border bg-white p-4 shadow-sm dark:bg-card" data-testid={`law-who-${i}`}>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                      <Scale className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{item.role}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.benefit}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoId={course.videoId!} title="Huquqshunoslik kursi haqida" />
            </div>
          </div>
        </div>
      </section>

      {/* Salary */}
      <section className="py-14" data-testid="section-law-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-6 shadow-2xl sm:p-10">
            <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl">Yurist maoshi O'zbekistonda</h2>
            <div className="space-y-4">
              {course.salaryLevels.map((level, i) => (
                <div key={i} className="rounded-2xl bg-[#c8ff00] p-4 sm:p-5" style={{ maxWidth: `${50 + i * 25}%`, minWidth: "200px" }} data-testid={`law-salary-${i}`}>
                  <div className="text-lg font-extrabold text-slate-900 sm:text-xl">{level.salary} so'm dan</div>
                  <div className="text-sm font-medium text-slate-700">{level.level} — {level.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-slate-50 py-12 dark:bg-slate-900/50" data-testid="section-law-tools">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold">Huquqiy ma'lumotlar bazalari</h2>
          <div className="flex flex-wrap gap-3">
            {course.tools.map((tool, i) => (
              <div key={i} className="rounded-full border-2 border-amber-200 bg-amber-50 px-5 py-2.5 text-sm font-semibold text-amber-800 shadow-sm dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300" data-testid={`law-tool-${i}`}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-14" data-testid="section-law-skills">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold">Siz o'rganasiz</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {course.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm dark:bg-card" data-testid={`law-skill-${i}`}>
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500" />
                <span className="font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-law-modules">
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
                <AccordionItem key={i} value={`m-${i}`} className="rounded-2xl border bg-white px-5 shadow-sm dark:bg-card" data-testid={`law-module-${i}`}>
                  <AccordionTrigger className="text-left py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 text-sm font-bold text-white shadow-md">{i + 1}</span>
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
      <section className="py-14" data-testid="section-law-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">O'quv jarayonida siz bilan birga</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <Card key={i} className="border shadow-md overflow-hidden text-center" data-testid={`law-support-${i}`}>
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
      <section className="bg-gradient-to-r from-amber-700 to-orange-800 py-12" data-testid="section-law-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Huquqshunoslik haqida bepul konsultatsiya</h2>
              <p className="mt-3 text-amber-100">Kurs va karyera imkoniyatlari haqida barcha savollaringizga javob oling</p>
              <Link href="/contacts">
                <Button size="lg" className="mt-6 gap-2 rounded-full bg-white px-8 font-bold text-amber-700 hover:bg-slate-100" data-testid="button-law-cta">
                  Konsultatsiya olish <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={mentor.avatar} alt={mentor.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-4 ring-white/20 shadow-xl" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <p className="text-sm text-amber-200">{mentor.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" data-testid="section-law-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border bg-white px-6 shadow-sm dark:bg-card" data-testid={`law-faq-${faq.id}`}>
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
