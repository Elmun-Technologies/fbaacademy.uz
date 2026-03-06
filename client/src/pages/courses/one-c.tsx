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
import { CheckCircle2, ArrowRight, Star, Flame, Settings, FileText, Users, BarChart3, DollarSign, Clock, Calendar, Wrench, BookOpen, GraduationCap, Monitor } from "lucide-react";

const course = courses.find((c) => c.id === "1c-course")!;
const mentor = teachers.find((t) => t.id === "teacher-4")!;

const LEARNING_STEPS = [
  { step: "01", title: "1C asoslari va sozlash", icon: Settings, color: "from-blue-500 to-indigo-600", desc: "Dasturni o'rnatish, interfeys, ma'lumotnomalar tuzish va hisob rejasini sozlash." },
  { step: "02", title: "Birlamchi hujjatlar", icon: FileText, color: "from-violet-500 to-purple-600", desc: "Kirim-chiqim orderlar, schyot-fakturalar, bank operatsiyalari va shartnomalar." },
  { step: "03", title: "Ish haqi va kadrlar", icon: Users, color: "from-emerald-500 to-teal-600", desc: "Xodimlarni ro'yxatdan o'tkazish, ish haqi hisoblash, soliq va ajratmalar." },
  { step: "04", title: "Soliq hisobotlari", icon: DollarSign, color: "from-amber-500 to-orange-600", desc: "QQS, daromad solig'i, yagona soliq va elektron hisobotlar yuborish." },
  { step: "05", title: "Moliyaviy tahlil", icon: BarChart3, color: "from-rose-500 to-pink-600", desc: "Balans tahlili, P&L, pul oqimlari va boshqaruv hisobotlari." },
];

const COMPARISON_TABLE = [
  { feature: "Birlamchi hujjatlar", manual: "Qo'lda to'ldirish, xato ko'p", onec: "Avtomatik, xatolarni topadi" },
  { feature: "Ish haqi hisoblash", manual: "Excelda qo'lda", onec: "Avtomatik, formulalar bilan" },
  { feature: "Soliq hisobotlari", manual: "Har birini alohida tuzish", onec: "Bir tugma bilan tayyor" },
  { feature: "Inventar nazorat", manual: "Qog'oz daftarlar", onec: "Real-vaqt nazorat" },
  { feature: "Moliyaviy tahlil", manual: "Soatlab vaqt", onec: "Bir daqiqada tayyor" },
];

const CERT_BENEFITS = [
  "O'zbekiston kompaniyalarining 80%+ 1C ishlatadi",
  "Buxgalter va moliya mutaxassislari uchun majburiy bilim",
  "FBA Academy sertifikati bilan ish topish imkoniyati yuqori",
  "1C rasmiy partnyor kompaniyalarida ishlash imkoni",
];

export default function OneCPage() {
  useSEO({
    title: "1C: Buxgalteriya Kursi — 0 dan Professional | FBA Academy",
    description: "1C: Buxgalteriya 8.3 kursi: birlamchi hujjatlar, ish haqi hisoblash, QQS va soliq hisobotlari, moliyaviy tahlil. O'zbekistondagi 80%+ kompaniyalar 1C ishlatadi. 3 oylik intensiv kurs.",
    keywords: "1C Buxgalteriya kurs O'zbekiston, 1C 8.3 Toshkent, buxgalteriya dasturi kursi, soliq hisoboti 1C, FBA Academy 1C",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "1C: Buxgalteriya 8.3 — Professional Kurs",
      "description": "1C: Buxgalteriya dasturini 0 dan professional darajagacha o'rganish.",
      "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
      "educationalLevel": "Beginner",
      "timeRequired": "P3M",
    },
  });

  const faqs = faqItems.filter((f) => f.category === "1C" || f.category === "1C: Buxgalteriya" || f.category === "Umumiy" || f.category === "To'lov").slice(0, 5);

  return (
    <Layout>
      {/* Hero — blue/indigo software training feel */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-1c-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-400/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/courses">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 cursor-pointer hover:text-white transition-colors">← Barcha kurslar</span>
          </Link>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-blue-500/20 text-blue-300 border-blue-400/30 px-3">🖥️ O'zbekiston #1 buxgalteriya dasturi</Badge>
                <Badge className="rounded-full bg-indigo-500/20 text-indigo-300 border-indigo-400/30 px-3">80%+ kompaniyalarda</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-1c-title">
                1C: Buxgalteriya<br />
                <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">0 dan Professional</span>
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
                  { icon: Monitor, label: "5 modul", sub: "Bosqichma-bosqich" },
                  { icon: Clock, label: course.practiceHours + " soat", sub: "Amaliyot" },
                  { icon: Settings, label: "8.3 versiya", sub: "So'nggi versiya" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm" data-testid={`1c-feature-${i}`}>
                    <item.icon className="mb-2 h-5 w-5 text-blue-300" />
                    <div className="text-xs font-bold text-white sm:text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-card" data-testid="card-1c-enroll">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold">So'rov qoldiring</h3>
                  <Badge className="rounded-full bg-rose-500 text-white font-bold">-{course.discount}</Badge>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                  <Flame className="h-4 w-4" /> Joylar cheklangan
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold" data-testid="text-1c-price">{course.price} UZS</span>
                  <span className="text-sm text-muted-foreground line-through">{course.oldPrice} UZS</span>
                </div>
                <LeadForm source="course-1c" buttonText="Chegirma bilan yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why 1C */}
      <section className="bg-blue-50 py-10 dark:bg-blue-950/20" data-testid="section-1c-why">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CERT_BENEFITS.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border-2 border-blue-100 bg-white p-5 shadow-sm dark:border-blue-900 dark:bg-card" data-testid={`1c-benefit-${i}`}>
                <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" />
                <span className="text-sm font-medium leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Step Learning Path */}
      <section className="py-14 sm:py-20" data-testid="section-learning-steps">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-steps-title">5 bosqichda 1C: Professional</h2>
          <p className="mb-10 text-muted-foreground">Mantiqiy ketma-ketlikda, real kompaniya ma'lumotlari bilan</p>
          <div className="space-y-4">
            {LEARNING_STEPS.map((step, i) => (
              <div key={i} className="group flex items-start gap-5 rounded-2xl border bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-card" data-testid={`step-${i}`}>
                <div className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-md`}>
                  <span className="text-xs font-bold text-white/70">{step.step}</span>
                  <step.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold sm:text-lg">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After table */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-comparison">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">1C bilan va 1C siz</h2>
          <p className="mb-8 text-muted-foreground">Kurs tugagach ishingiz qancha oson bo'ladi</p>
          <div className="overflow-hidden rounded-2xl border shadow-md">
            <table className="w-full text-sm" data-testid="table-comparison">
              <thead>
                <tr>
                  <th className="bg-slate-100 px-5 py-4 text-left font-bold dark:bg-slate-800">Funksiya</th>
                  <th className="bg-red-50 px-5 py-4 text-left font-bold text-red-700 dark:bg-red-950/30">❌ 1C siz</th>
                  <th className="bg-blue-50 px-5 py-4 text-left font-bold text-blue-700 dark:bg-blue-950/30">✅ 1C bilan</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row, i) => (
                  <tr key={i} className={`border-t ${i % 2 === 0 ? "bg-white dark:bg-card" : "bg-slate-50/50 dark:bg-slate-900/20"}`} data-testid={`comparison-row-${i}`}>
                    <td className="px-5 py-3.5 font-semibold text-sm">{row.feature}</td>
                    <td className="px-5 py-3.5 text-red-600 dark:text-red-400 text-sm">{row.manual}</td>
                    <td className="px-5 py-3.5 text-blue-700 dark:text-blue-300 font-medium text-sm">{row.onec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section className="py-14" data-testid="section-1c-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">1C kurs haqida ko'proq bilib oling</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">Mentorlarimiz 1C: Buxgalteriya 8.3 ning imkoniyatlari va kurs jarayoni haqida tushuntiradi.</p>
              <div className="mt-6 space-y-3">
                {["Real kompaniya ma'lumotlari bilan amaliyot", "Jonli darslar + yozuvlar", "1C sertifikatiga tayyorgarlik", "Soliq.uz va my.soliq.uz integratsiyasi"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoId={course.videoId!} title="1C: Buxgalteriya kurs haqida" />
            </div>
          </div>
        </div>
      </section>

      {/* Salary */}
      <section className="py-14" data-testid="section-1c-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-6 shadow-2xl sm:p-10">
            <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl">Buxgalter maoshi O'zbekistonda</h2>
            <div className="space-y-4">
              {course.salaryLevels.map((level, i) => (
                <div key={i} className="rounded-2xl bg-[#c8ff00] p-4 sm:p-5" style={{ maxWidth: `${50 + i * 25}%`, minWidth: "200px" }} data-testid={`1c-salary-${i}`}>
                  <div className="text-lg font-extrabold text-slate-900 sm:text-xl">{level.salary} so'm dan</div>
                  <div className="text-sm font-medium text-slate-700">{level.level} — {level.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-slate-50 py-12 dark:bg-slate-900/50" data-testid="section-1c-tools">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold">Kursda o'rganiladigan dasturlar</h2>
          <div className="flex flex-wrap gap-3">
            {course.tools.map((tool, i) => (
              <div key={i} className="rounded-full border-2 border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-800 shadow-sm dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300" data-testid={`1c-tool-${i}`}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-14" data-testid="section-1c-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold">Kurs kimlar uchun?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border bg-white p-5 shadow-sm dark:bg-card" data-testid={`1c-for-whom-${i}`}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                </div>
                <span className="font-medium text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-1c-modules">
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
                <AccordionItem key={i} value={`m-${i}`} className="rounded-2xl border bg-white px-5 shadow-sm dark:bg-card" data-testid={`1c-module-${i}`}>
                  <AccordionTrigger className="text-left py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-sm font-bold text-white shadow-md">{i + 1}</span>
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
      <section className="py-14" data-testid="section-1c-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">O'quv jarayonida siz bilan birga</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <Card key={i} className="border shadow-md overflow-hidden text-center" data-testid={`1c-support-${i}`}>
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
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 py-12" data-testid="section-1c-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">1C kurs haqida bepul konsultatsiya</h2>
              <p className="mt-3 text-blue-100">Dastur tafsilotlari va ishga joylashish imkoniyatlari haqida ma'lumot oling</p>
              <Link href="/contacts">
                <Button size="lg" className="mt-6 gap-2 rounded-full bg-white px-8 font-bold text-blue-700 hover:bg-slate-100" data-testid="button-1c-cta">
                  Konsultatsiya olish <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={mentor.avatar} alt={mentor.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-4 ring-white/20 shadow-xl" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <p className="text-sm text-blue-200">{mentor.role}</p>
                <p className="text-sm text-blue-200">{mentor.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" data-testid="section-1c-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border bg-white px-6 shadow-sm dark:bg-card" data-testid={`1c-faq-${faq.id}`}>
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
