import { useParams, Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { courses, teachers, faqItems } from "@/lib/data";
import { Clock, Users, BarChart3, CheckCircle2, ArrowRight, BookOpen, ArrowLeft, Star, Flame, Calendar, Award, TrendingUp, Wrench, Monitor } from "lucide-react";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);

  useSEO({
    title: course ? `${course.title} - FBA Academy` : "Kurs topilmadi - FBA Academy",
    description: course?.description || "Bu kurs mavjud emas.",
  });

  if (!course) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold" data-testid="text-course-not-found">Kurs topilmadi</h2>
            <p className="mt-2 text-muted-foreground">Bu kurs mavjud emas yoki olib tashlangan</p>
            <Link href="/courses">
              <Button variant="outline" className="mt-4 rounded-full" data-testid="button-back-to-courses">Kurslarga qaytish</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const mentor = teachers.find((t) => t.id === course.mentorId);
  const courseFaqs = faqItems.filter((f) =>
    f.category === course.category || f.category === "Umumiy" || f.category === "To'lov" || f.category === "Sertifikat" || f.category === "Ishga joylashish"
  ).slice(0, 6);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-10 sm:py-14" data-testid="section-course-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/courses">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground cursor-pointer" data-testid="link-back-courses">
              <ArrowLeft className="h-4 w-4" /> Barcha kurslar
            </span>
          </Link>

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="mb-2 text-sm font-medium text-muted-foreground">Onlayn kurs</p>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] leading-tight" data-testid="text-course-detail-title">{course.title}</h1>
              <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">{course.description}</p>

              <div className="mt-6 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-semibold">{course.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">Reyting {course.studentsCount} talaba asosida</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { icon: Monitor, label: "Jonli darslar", sub: "Mini-guruhlarda" },
                  { icon: Clock, label: `${course.practiceHours} soat`, sub: "Amaliyot" },
                  { icon: Award, label: "Ishga joylashish", sub: "Hamkor orqali" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl bg-slate-50 p-3 dark:bg-card" data-testid={`card-hero-feature-${i}`}>
                    <item.icon className="mb-1 h-5 w-5 text-foreground" />
                    <div className="text-sm font-semibold text-foreground">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-slate-50 p-6 dark:bg-card" data-testid="card-course-enroll">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">So'rov qoldiring</h3>
                  {course.discount && (
                    <Badge className="rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400">-{course.discount}</Badge>
                  )}
                </div>
                <div className="mb-2 flex items-center gap-1 text-sm text-amber-600 dark:text-amber-400">
                  <Flame className="h-4 w-4" />
                  <span>Joylar soni cheklangan</span>
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-foreground" data-testid="text-course-detail-price">{course.price} UZS</span>
                  {course.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">{course.oldPrice} UZS</span>
                  )}
                </div>
                <LeadForm source={`course-${course.id}`} buttonText="Chegirma bilan yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Growth */}
      <section className="py-12 sm:py-16" data-testid="section-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-foreground p-6 sm:p-8 text-background dark:bg-card dark:text-foreground">
            <h2 className="mb-6 text-2xl font-extrabold" data-testid="text-salary-title">Maoshingiz tajriba bilan o'sadi</h2>
            <div className="space-y-3">
              {course.salaryLevels.map((level, i) => (
                <div key={i} className="rounded-xl bg-[#c8ff00] dark:bg-emerald-600 p-4" style={{ maxWidth: `${60 + i * 20}%` }} data-testid={`card-salary-${i}`}>
                  <div className="text-lg font-extrabold text-foreground dark:text-background sm:text-xl">{level.salary} so'm dan</div>
                  <div className="text-sm text-foreground/70 dark:text-background/70">{level.level}, {level.description}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-background/50 dark:text-muted-foreground">*Manba: hh.uz, HeadHunter</p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 sm:py-16" data-testid="section-tools">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold" data-testid="text-tools-title">Instrumentlar:</h2>
          <div className="flex flex-wrap gap-3">
            {course.tools.map((tool, i) => (
              <div key={i} className="rounded-full border px-5 py-2.5 text-sm font-medium text-foreground" data-testid={`badge-tool-${i}`}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 sm:py-16" data-testid="section-skills">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold" data-testid="text-skills-title">Ko'nikmalar:</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {course.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 text-sm" data-testid={`text-skill-${i}`}>
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-12 sm:py-16" data-testid="section-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold" data-testid="text-for-whom-title">Kurs kimlar uchun?</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {course.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 dark:bg-card" data-testid={`text-for-whom-${i}`}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="py-12 sm:py-16" data-testid="section-modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-2xl font-extrabold sm:text-3xl" data-testid="text-modules-title">Onlayn-kurs dasturi</h2>
          <div className="mb-8 flex flex-wrap gap-3">
            <Badge variant="outline" className="rounded-full gap-1 px-4 py-2">
              <Calendar className="h-3.5 w-3.5" /> Davomiyligi {course.duration}
            </Badge>
            <Badge variant="outline" className="rounded-full gap-1 px-4 py-2">
              <BookOpen className="h-3.5 w-3.5" /> {course.projects} loyiha
            </Badge>
            <Badge variant="outline" className="rounded-full gap-1 px-4 py-2">
              <Clock className="h-3.5 w-3.5" /> {course.theoryHours} soat nazariya
            </Badge>
            <Badge variant="outline" className="rounded-full gap-1 px-4 py-2">
              <Wrench className="h-3.5 w-3.5" /> {course.practiceHours} soat amaliyot
            </Badge>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {course.modules.map((mod, i) => (
                <AccordionItem key={i} value={`module-${i}`} className="rounded-xl border-0 bg-slate-50 px-5 dark:bg-card" data-testid={`accordion-module-${i}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
                        {i + 1}
                      </span>
                      <div>
                        <span className="font-semibold">{mod.title}</span>
                        <div className="text-xs text-muted-foreground">{mod.topics.length} mavzu</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-11 space-y-2.5 pb-2">
                      {mod.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          {topic}
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

      {/* Support Team */}
      <section className="py-12 sm:py-16" data-testid="section-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold sm:text-3xl" data-testid="text-support-title">O'quv jarayonini yakunlashga yordam beramiz</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <div key={i} className="text-center" data-testid={`card-support-${i}`}>
                <div className="mx-auto mb-3 h-32 w-32 overflow-hidden rounded-2xl">
                  <img src={person.avatar} alt={person.role} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-semibold text-foreground">{person.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Learning */}
      <section className="py-12 sm:py-16" data-testid="section-live">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl" data-testid="text-live-title">Jonli muloqot<br />va amaliyot<br />ekspertlar bilan</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Har bir mavzuni tajribali o'qituvchilar bilan onlayn darslarda o'rganasiz. Savollaringizga tezkor javob olasiz va kursdoshlaringiz bilan fikr almashishingiz mumkin.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={course.image} alt="Live learning" className="h-64 w-full object-cover sm:h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-12 sm:py-16" data-testid="section-consultation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-50 p-6 sm:p-8 dark:bg-card">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl" data-testid="text-consultation-title">Bepul konsultatsiya<br />mutaxassis bilan</h2>
                <p className="mt-3 text-muted-foreground">
                  10 daqiqada dasturni tushuntiramiz, maslahat beramiz va savollaringizga javob beramiz
                </p>
                <Link href="/contacts">
                  <Button variant="outline" size="lg" className="mt-4 gap-2 rounded-full" data-testid="button-consultation-cta">
                    Konsultatsiya olish
                  </Button>
                </Link>
              </div>
              {mentor && (
                <div className="flex items-center gap-4">
                  <img src={mentor.avatar} alt={mentor.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover" />
                  <div>
                    <h3 className="font-semibold text-foreground" data-testid="text-mentor-name">{mentor.name}</h3>
                    <p className="text-sm text-muted-foreground">{mentor.role}</p>
                    <p className="text-sm text-muted-foreground">{mentor.experience}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Graduate Stories */}
      <section className="py-12 sm:py-16" data-testid="section-graduates">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-graduates-title">Bitiruvchilarimiz imkoniyatlari cheksiz</h2>
          <p className="mb-8 max-w-xl text-muted-foreground">
            Oddiy insonlarning o'z hayotini o'zgartirgan haqiqiy tarixi
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.filter((c) => c.id !== course.id).slice(0, 4).map((c) => (
              <Link key={c.id} href={`/course/${c.id}`}>
                <div className="group cursor-pointer" data-testid={`card-related-${c.id}`}>
                  <div className="mb-3 overflow-hidden rounded-2xl">
                    <img src={c.image} alt={c.title} className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <Badge variant="outline" className="mb-1 rounded-full text-xs">{c.category}</Badge>
                  <h3 className="text-sm font-semibold leading-snug text-foreground">{c.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16" data-testid="section-course-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold" data-testid="text-course-faq-title">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {courseFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-xl border-0 bg-slate-50 px-5 dark:bg-card" data-testid={`accordion-faq-${faq.id}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t py-10 sm:py-12" data-testid="section-course-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Hoziroq boshlang!</h2>
            <Link href="/contacts">
              <Button variant="outline" size="lg" className="gap-2 rounded-full" data-testid="button-course-cta">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
