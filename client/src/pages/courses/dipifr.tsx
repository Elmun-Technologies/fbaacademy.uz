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
import { CheckCircle2, ArrowRight, Star, Flame, FileText, BookOpen, Clock, Calendar, Wrench, GraduationCap, Award } from "lucide-react";

const course = courses.find((c) => c.id === "dipifr")!;
const mentor = teachers.find((t) => t.id === "teacher-3")!;

const IFRS_STANDARDS = [
  { code: "IAS 1", name: "Moliyaviy hisobotlar taqdimoti", type: "Asosiy" },
  { code: "IAS 16", name: "Asosiy vositalar", type: "Asosiy" },
  { code: "IAS 36", name: "Aktivlar qiymatining pasayishi", type: "Asosiy" },
  { code: "IAS 38", name: "Nomoddiy aktivlar", type: "Asosiy" },
  { code: "IFRS 9", name: "Moliyaviy instrumentlar", type: "Muhim" },
  { code: "IFRS 15", name: "Mijozlar bilan shartnomalar daromadi", type: "Muhim" },
  { code: "IFRS 16", name: "Ijaralar", type: "Muhim" },
  { code: "IFRS 3", name: "Biznes birlashmalari", type: "Murakkab" },
  { code: "IFRS 10", name: "Konsolidatsiyalangan moliyaviy hisobotlar", type: "Murakkab" },
  { code: "IAS 19", name: "Xodimlar uchun to'lovlar", type: "O'rta" },
  { code: "IAS 37", name: "Zaxiralar va shartli majburiyatlar", type: "O'rta" },
  { code: "IAS 21", name: "Chet el valyutasi kurslari ta'siri", type: "O'rta" },
];

const TYPE_COLORS: Record<string, string> = {
  "Asosiy": "bg-blue-100 text-blue-700 border-blue-200",
  "Muhim": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Murakkab": "bg-rose-100 text-rose-700 border-rose-200",
  "O'rta": "bg-amber-100 text-amber-700 border-amber-200",
};

export default function DipIFRPage() {
  useSEO({
    title: "DipIFR — IFRS Xalqaro Diplom Kursi | FBA Academy Toshkent",
    description: "DipIFR (Diploma in IFRS) — ACCA tomonidan beriladigan xalqaro moliyaviy hisobot standartlari diplomi. IAS, IFRS standartlarini chuqur o'rganing. 4 oylik kurs, onlayn va offline.",
    keywords: "DipIFR kurs O'zbekiston, IFRS diplom Toshkent, IAS standartlari, xalqaro moliyaviy hisobot, ACCA DipIFR",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "DipIFR — Diploma in International Financial Reporting Standards",
      "description": "ACCA tomonidan beriladigan IFRS bo'yicha xalqaro diplom.",
      "provider": { "@type": "Organization", "name": "FBA Academy", "url": "https://fbaacademy.uz" },
      "educationalLevel": "Professional",
      "timeRequired": "P4M",
    },
  });

  const faqs = faqItems.filter((f) => f.category === "DipIFR" || f.category === "Umumiy" || f.category === "Sertifikat").slice(0, 5);

  return (
    <Layout>
      {/* Hero — indigo/slate corporate */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-800 to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-dipifr-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/courses">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 cursor-pointer hover:text-white transition-colors">← Barcha kurslar</span>
          </Link>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-indigo-500/20 text-indigo-300 border-indigo-400/30 px-3">🎓 ACCA Diplomi</Badge>
                <Badge className="rounded-full bg-slate-500/20 text-slate-300 border-slate-400/30 px-3">Xalqaro IFRS standartlari</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-dipifr-title">
                DipIFR — Diploma in<br />
                <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">IFRS</span>
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
                  { icon: Award, label: "ACCA Diplomi", sub: "Xalqaro tan olingan" },
                  { icon: FileText, label: "12+ standart", sub: "IAS va IFRS" },
                  { icon: Clock, label: course.practiceHours + " soat", sub: "Amaliyot" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm" data-testid={`dipifr-feature-${i}`}>
                    <item.icon className="mb-2 h-5 w-5 text-indigo-300" />
                    <div className="text-xs font-bold text-white sm:text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-card" data-testid="card-dipifr-enroll">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold">So'rov qoldiring</h3>
                  <Badge className="rounded-full bg-rose-500 text-white font-bold">-{course.discount}</Badge>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                  <Flame className="h-4 w-4" /> Joylar cheklangan
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold" data-testid="text-dipifr-price">{course.price} UZS</span>
                  <span className="text-sm text-muted-foreground line-through">{course.oldPrice} UZS</span>
                </div>
                <LeadForm source="course-dipifr" buttonText="Chegirma bilan yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IFRS Standards Table */}
      <section className="py-14 sm:py-20" data-testid="section-ifrs-standards">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-standards-title">O'rganiladigan IFRS/IAS standartlari</h2>
          <p className="mb-6 text-muted-foreground">Kursda quyidagi asosiy standartlarni amaliyotda qo'llashni o'rganasiz</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {Object.entries(TYPE_COLORS).map(([type, color]) => (
              <Badge key={type} variant="outline" className={`rounded-full border text-xs font-semibold ${color}`}>{type}</Badge>
            ))}
          </div>
          <div className="overflow-hidden rounded-2xl border shadow-md">
            <table className="w-full text-sm" data-testid="table-ifrs-standards">
              <thead>
                <tr className="bg-indigo-950 text-white">
                  <th className="px-4 py-3 text-left font-bold">Standart</th>
                  <th className="px-4 py-3 text-left font-bold">Nomi</th>
                  <th className="px-4 py-3 text-left font-bold hidden sm:table-cell">Turi</th>
                </tr>
              </thead>
              <tbody>
                {IFRS_STANDARDS.map((std, i) => (
                  <tr key={i} className={`border-t transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-950/20 ${i % 2 === 0 ? "bg-white dark:bg-card" : "bg-slate-50 dark:bg-slate-900/30"}`} data-testid={`std-row-${i}`}>
                    <td className="px-4 py-3 font-extrabold text-indigo-700 dark:text-indigo-400">{std.code}</td>
                    <td className="px-4 py-3 font-medium">{std.name}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <Badge variant="outline" className={`rounded-full border text-xs ${TYPE_COLORS[std.type]}`}>{std.type}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* YouTube + Benefits */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-dipifr-video">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoId={course.videoId!} title="DipIFR — IFRS diplomi haqida" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Nima uchun DipIFR?</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">DipIFR diplomi xalqaro kompaniyalarda ishlash uchun zarur bo'lgan IFRS bilimlarini rasman tasdiqlaydi.</p>
              <div className="mt-6 space-y-3">
                {["ACCA tomonidan tan olingan xalqaro diplom", "Xalqaro kompaniyalar uchun majburiy malaka", "Big Four audit firmalariga kirish", "ACCA sertifikatiga keyingi qadam", "Yilda 2 marta imtihon imkoniyati"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salary */}
      <section className="py-14" data-testid="section-dipifr-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-6 shadow-2xl sm:p-10">
            <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl">DipIFR bilan maosh darajasi</h2>
            <div className="space-y-4">
              {course.salaryLevels.map((level, i) => (
                <div key={i} className="rounded-2xl bg-[#c8ff00] p-4 sm:p-5" style={{ maxWidth: `${50 + i * 25}%`, minWidth: "200px" }} data-testid={`dipifr-salary-${i}`}>
                  <div className="text-lg font-extrabold text-slate-900 sm:text-xl">{level.salary} so'm dan</div>
                  <div className="text-sm font-medium text-slate-700">{level.level} — {level.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-dipifr-skills">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold">Siz o'rganasiz</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {course.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm dark:bg-card" data-testid={`dipifr-skill-${i}`}>
                <CheckCircle2 className="h-5 w-5 shrink-0 text-indigo-500" />
                <span className="font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-14" data-testid="section-dipifr-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold">Kurs kimlar uchun?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border bg-white p-5 shadow-sm dark:bg-card" data-testid={`dipifr-for-whom-${i}`}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                  <GraduationCap className="h-4 w-4 text-indigo-600" />
                </div>
                <span className="font-medium text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-slate-50 py-14 dark:bg-slate-900/50" data-testid="section-dipifr-modules">
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
                <AccordionItem key={i} value={`m-${i}`} className="rounded-2xl border bg-white px-5 shadow-sm dark:bg-card" data-testid={`dipifr-module-${i}`}>
                  <AccordionTrigger className="text-left py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 text-sm font-bold text-white shadow-md">{i + 1}</span>
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
      <section className="py-14" data-testid="section-dipifr-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">O'quv jarayonida siz bilan birga</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <Card key={i} className="border shadow-md overflow-hidden text-center" data-testid={`dipifr-support-${i}`}>
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
      <section className="bg-gradient-to-r from-indigo-700 to-blue-800 py-12" data-testid="section-dipifr-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">DipIFR diplomi olish uchun hozir boshlang</h2>
              <p className="mt-3 text-indigo-100">Bepul konsultatsiyada kurs tafsilotlari va imtihon haqida ma'lumot oling</p>
              <Link href="/contacts">
                <Button size="lg" className="mt-6 gap-2 rounded-full bg-white px-8 font-bold text-indigo-700 hover:bg-slate-100" data-testid="button-dipifr-cta">
                  Konsultatsiya olish <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <img src={mentor.avatar} alt={mentor.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-4 ring-white/20 shadow-xl" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <p className="text-sm text-indigo-200">{mentor.role}</p>
                <p className="text-sm text-indigo-200">{mentor.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" data-testid="section-dipifr-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border bg-white px-6 shadow-sm dark:bg-card" data-testid={`dipifr-faq-${faq.id}`}>
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
