import { useParams, Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <section className={`relative overflow-hidden`} data-testid="section-course-hero">
        <div className={`bg-gradient-to-br ${course.gradient}`}>
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/20">{course.category}</Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/20">{course.level}</Badge>
                </div>
                <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl" data-testid="text-course-detail-title">{course.title}</h1>
                <p className="mt-4 max-w-xl text-lg text-white/85">{course.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-6 text-white/80">
                  <span className="flex items-center gap-2"><Clock className="h-5 w-5" /> {course.duration}</span>
                  <span className="flex items-center gap-2"><BarChart3 className="h-5 w-5" /> {course.level}</span>
                  <span className="flex items-center gap-2"><BookOpen className="h-5 w-5" /> {course.modules.length} modul</span>
                </div>
                <div className="mt-8 flex items-center gap-4 flex-wrap">
                  <div className="text-white">
                    <span className="text-3xl font-bold" data-testid="text-course-detail-price">{course.price} UZS</span>
                    {course.oldPrice && (
                      <span className="ml-2 text-lg text-white/60 line-through">{course.oldPrice} UZS</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <Card className="border-0 bg-white/95 dark:bg-card p-6 backdrop-blur" data-testid="card-course-enroll">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">Ro'yxatdan o'tish</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Bepul konsultatsiya oling va kursga yoziling</p>
                  <LeadForm source={`course-${course.id}`} buttonText="Kursga yozilish" />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-12 sm:py-16" data-testid="section-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl" data-testid="text-for-whom-title">Kurs kimlar uchun?</h2>
              <p className="mt-3 text-muted-foreground">Bu kurs quyidagi shaxslar uchun ideal</p>
              <div className="mt-6 space-y-3">
                {course.forWhom.map((item, i) => (
                  <div key={i} className="flex items-start gap-3" data-testid={`text-for-whom-${i}`}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl" data-testid="text-skills-title">Nimalarni o'rganasiz?</h2>
              <p className="mt-3 text-muted-foreground">Kursni tugatgach quyidagi ko'nikmalarga ega bo'lasiz</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {course.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="text-sm px-3 py-1.5" data-testid={`badge-skill-${i}`}>{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-card/50 py-12 sm:py-16" data-testid="section-modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl" data-testid="text-modules-title">O'quv dasturi</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {course.modules.map((mod, i) => (
                <AccordionItem key={i} value={`module-${i}`} className="rounded-md border border-border/50 bg-background px-4" data-testid={`accordion-module-${i}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="font-medium">{mod.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-11 space-y-2 pb-2">
                      {mod.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
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
            <h2 className="mb-8 text-2xl font-bold sm:text-3xl" data-testid="text-mentor-title">Mentor haqida</h2>
            <Card className="border-card-border bg-card p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                  <Users className="h-9 w-9 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold" data-testid="text-mentor-name">{mentor.name}</h3>
                  <p className="text-muted-foreground">{mentor.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{mentor.experience}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{mentor.bio}</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-card/50 py-12 sm:py-16" data-testid="section-course-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl" data-testid="text-course-faq-title">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {faqItems.slice(0, 5).map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-md border border-border/50 bg-background px-4" data-testid={`accordion-faq-${faq.id}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`bg-gradient-to-br ${course.gradient}`} data-testid="section-course-cta">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Hoziroq boshlang!</h2>
            <p className="mt-3 text-lg text-white/80">Kursga yoziling va yangi kasbingizni bugundan boshlang</p>
            <Link href="/contacts">
              <Button size="lg" variant="secondary" className="mt-6 gap-2" data-testid="button-course-cta">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
