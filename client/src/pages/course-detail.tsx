import { useParams, Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { courses, teachers, faqItems } from "@/lib/data";
import { Clock, Users, BarChart3, CheckCircle2, ArrowRight, BookOpen, Award, Star } from "lucide-react";

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
              <Button className="mt-4" data-testid="button-back-to-courses">Kurslarga qaytish</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const mentor = teachers.find((t) => t.id === course.mentorId);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[480px]" data-testid="section-course-hero">
        <div className="absolute inset-0">
          <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-85`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">{course.category}</span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">{course.level}</span>
              </div>
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl leading-tight" data-testid="text-course-detail-title">{course.title}</h1>
              <p className="mt-4 max-w-xl text-lg text-white/85 leading-relaxed">{course.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-white/80">
                <span className="flex items-center gap-2"><Clock className="h-5 w-5" /> {course.duration}</span>
                <span className="flex items-center gap-2"><BarChart3 className="h-5 w-5" /> {course.level}</span>
                <span className="flex items-center gap-2"><BookOpen className="h-5 w-5" /> {course.modules.length} modul</span>
              </div>
              <div className="mt-8 text-white">
                <span className="text-3xl font-bold" data-testid="text-course-detail-price">{course.price} UZS</span>
                {course.oldPrice && (
                  <span className="ml-3 text-lg text-white/50 line-through">{course.oldPrice} UZS</span>
                )}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-white dark:bg-card p-6 shadow-2xl backdrop-blur" data-testid="card-course-enroll">
                <h3 className="mb-1 text-lg font-semibold text-foreground">Kursga yozilish</h3>
                <p className="mb-4 text-sm text-muted-foreground">Bepul konsultatsiya oling va kursga yoziling</p>
                <LeadForm source={`course-${course.id}`} buttonText="Kursga yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom + Skills */}
      <section className="py-16 sm:py-20" data-testid="section-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl" data-testid="text-for-whom-title">Kurs kimlar uchun?</h2>
              <p className="mt-3 text-muted-foreground">Bu kurs quyidagi shaxslar uchun ideal</p>
              <div className="mt-6 space-y-4">
                {course.forWhom.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4" data-testid={`text-for-whom-${i}`}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl" data-testid="text-skills-title">Nimalarni o'rganasiz?</h2>
              <p className="mt-3 text-muted-foreground">Kursni tugatgach quyidagi ko'nikmalarga ega bo'lasiz</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {course.skills.map((skill, i) => (
                  <div key={i} className="rounded-xl border border-border/50 bg-card px-4 py-3 text-sm font-medium" data-testid={`badge-skill-${i}`}>{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 dark:from-slate-900/50 dark:to-background" data-testid="section-modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl" data-testid="text-modules-title">O'quv dasturi</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {course.modules.map((mod, i) => (
                <AccordionItem key={i} value={`module-${i}`} className="rounded-xl border border-border/50 bg-card px-5" data-testid={`accordion-module-${i}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="font-semibold">{mod.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-[3.25rem] space-y-2.5 pb-2">
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

      {/* Mentor */}
      {mentor && (
        <section className="py-16 sm:py-20" data-testid="section-mentor">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold sm:text-3xl" data-testid="text-mentor-title">Mentor haqida</h2>
            <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <img src={mentor.avatar} alt={mentor.name} className="h-24 w-24 shrink-0 rounded-2xl object-cover" />
                <div>
                  <h3 className="text-xl font-bold" data-testid="text-mentor-name">{mentor.name}</h3>
                  <p className="text-muted-foreground">{mentor.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{mentor.experience}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{mentor.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 dark:from-slate-900/50 dark:to-background" data-testid="section-course-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl" data-testid="text-course-faq-title">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqItems.slice(0, 5).map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-xl border border-border/50 bg-card px-5" data-testid={`accordion-faq-${faq.id}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950" data-testid="section-course-cta">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Hoziroq boshlang!</h2>
            <p className="mt-3 text-lg text-slate-400">Kursga yoziling va yangi kasbingizni bugundan boshlang</p>
            <Link href="/contacts">
              <Button size="lg" className="mt-6 gap-2" data-testid="button-course-cta">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
