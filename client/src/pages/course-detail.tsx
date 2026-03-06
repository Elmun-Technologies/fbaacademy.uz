import { useParams, Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { courses, teachers, faqItems } from "@/lib/data";
import { Clock, Users, BarChart3, CheckCircle2, ArrowRight, BookOpen, ArrowLeft } from "lucide-react";

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

  return (
    <Layout>
      {/* Header */}
      <section className="py-10 sm:py-14" data-testid="section-course-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/courses">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground cursor-pointer" data-testid="link-back-courses">
              <ArrowLeft className="h-4 w-4" /> Barcha kurslar
            </span>
          </Link>

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="rounded-full">{course.category}</Badge>
                <Badge variant="outline" className="rounded-full">{course.level}</Badge>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] leading-tight" data-testid="text-course-detail-title">{course.title}</h1>
              <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">{course.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {course.duration}</span>
                <span className="flex items-center gap-1.5"><BarChart3 className="h-4 w-4" /> {course.level}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> {course.modules.length} modul</span>
              </div>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-foreground" data-testid="text-course-detail-price">{course.price} UZS</span>
                {course.oldPrice && (
                  <span className="text-lg text-muted-foreground line-through">{course.oldPrice} UZS</span>
                )}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-slate-50 p-6 dark:bg-card" data-testid="card-course-enroll">
                <h3 className="mb-1 text-lg font-semibold text-foreground">Kursga yozilish</h3>
                <p className="mb-4 text-sm text-muted-foreground">Bepul konsultatsiya oling va kursga yoziling</p>
                <LeadForm source={`course-${course.id}`} buttonText="Kursga yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Image */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl">
            <img src={course.image} alt={course.title} className="h-64 w-full object-cover sm:h-80" />
          </div>
        </div>
      </section>

      {/* For Whom + Skills */}
      <section className="py-12 sm:py-16" data-testid="section-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-extrabold" data-testid="text-for-whom-title">Kurs kimlar uchun?</h2>
              <div className="space-y-3">
                {course.forWhom.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 dark:bg-card" data-testid={`text-for-whom-${i}`}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-extrabold" data-testid="text-skills-title">Nimalarni o'rganasiz?</h2>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="rounded-full px-4 py-2 text-sm" data-testid={`badge-skill-${i}`}>{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-12 sm:py-16" data-testid="section-modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold" data-testid="text-modules-title">O'quv dasturi</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {course.modules.map((mod, i) => (
                <AccordionItem key={i} value={`module-${i}`} className="rounded-xl border-0 bg-slate-50 px-5 dark:bg-card" data-testid={`accordion-module-${i}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
                        {i + 1}
                      </span>
                      <span className="font-semibold">{mod.title}</span>
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

      {/* Mentor */}
      {mentor && (
        <section className="py-12 sm:py-16" data-testid="section-mentor">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-extrabold" data-testid="text-mentor-title">Mentor</h2>
            <div className="rounded-2xl bg-slate-50 p-6 sm:p-8 dark:bg-card">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <img src={mentor.avatar} alt={mentor.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover" />
                <div>
                  <h3 className="text-xl font-bold" data-testid="text-mentor-name">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground">{mentor.role} · {mentor.experience}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{mentor.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12 sm:py-16" data-testid="section-course-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold" data-testid="text-course-faq-title">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqItems.slice(0, 5).map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-xl border-0 bg-slate-50 px-5 dark:bg-card" data-testid={`accordion-faq-${faq.id}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
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
