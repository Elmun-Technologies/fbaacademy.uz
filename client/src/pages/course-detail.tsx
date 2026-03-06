import { useParams, Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import YouTubeEmbed from "@/components/youtube-embed";
import { courses, teachers, faqItems } from "@/lib/data";
import { Clock, BarChart3, CheckCircle2, ArrowRight, BookOpen, ArrowLeft, Star, Flame, Calendar, Award, TrendingUp, Wrench, Monitor, GraduationCap } from "lucide-react";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);

  useSEO({
    title: course ? `${course.title} kursi — FBA Academy` : "Kurs topilmadi — FBA Academy",
    description: course?.description || "Bu kurs mavjud emas.",
    keywords: course ? `${course.title}, ${course.category}, ${course.tools.slice(0, 3).join(", ")}, kurs, sertifikat` : undefined,
    jsonLd: course ? {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": course.title,
      "description": course.description,
      "provider": {
        "@type": "Organization",
        "name": "FBA Academy",
        "url": "https://fbaacademy.uz"
      },
      "educationalLevel": course.level,
      "timeRequired": course.duration,
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": `${course.theoryHours} soat nazariya, ${course.practiceHours} soat amaliyot`
      }
    } : undefined
  });

  if (!course) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold" data-testid="text-course-not-found">Kurs topilmadi</h2>
            <p className="mt-2 text-zinc-400">Bu kurs mavjud emas yoki olib tashlangan</p>
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
      {/* Dark Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-course-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/courses">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 cursor-pointer hover:text-white transition-colors" data-testid="link-back-courses">
              <ArrowLeft className="h-4 w-4" /> Barcha kurslar
            </span>
          </Link>

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="mb-2 text-sm font-medium text-purple-300">Onlayn kurs · {course.category}</p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] leading-tight" data-testid="text-course-detail-title">{course.title}</h1>
              <p className="mt-4 max-w-xl text-slate-300 leading-relaxed">{course.description}</p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-bold text-white">{course.rating}</span>
                </div>
                <span className="text-sm text-zinc-500">{course.studentsCount} talaba</span>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: Monitor, label: "Jonli darslar", sub: "Mini-guruhlarda" },
                  { icon: Clock, label: `${course.practiceHours} soat`, sub: "Amaliyot" },
                  { icon: Award, label: "Ishga joylashish", sub: "Hamkor orqali" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm" data-testid={`card-hero-feature-${i}`}>
                    <item.icon className="mb-2 h-5 w-5 text-purple-300" />
                    <div className="text-xs font-bold text-white sm:text-sm">{item.label}</div>
                    <div className="text-xs text-zinc-500">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl" data-testid="card-course-enroll">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">So'rov qoldiring</h3>
                  {course.discount && (
                    <Badge className="rounded-full bg-rose-500 text-white font-bold px-3 shadow-md">-{course.discount}</Badge>
                  )}
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                  <Flame className="h-4 w-4" />
                  <span>Joylar soni cheklangan</span>
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white" data-testid="text-course-detail-price">{course.price} UZS</span>
                  {course.oldPrice && (
                    <span className="text-sm text-zinc-400 line-through">{course.oldPrice} UZS</span>
                  )}
                </div>
                <LeadForm source={`course-${course.id}`} buttonText="Chegirma bilan yozilish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Preview */}
      {course.videoId && (
        <section className="py-12 sm:py-16" data-testid="section-course-video">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-video-preview-title">
                Kurs haqida ko'proq bilib oling
              </h2>
              <YouTubeEmbed videoId={course.videoId} title={`${course.title} — kurs haqida`} />
            </div>
          </div>
        </section>
      )}

      {/* Salary Growth */}
      <section className="py-12 sm:py-16" data-testid="section-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-zinc-900 border border-white/10 p-6 sm:p-10 dark:border">
            <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl" data-testid="text-salary-title">Maoshingiz tajriba bilan o'sadi</h2>
            <div className="space-y-4">
              {course.salaryLevels.map((level, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[#c8ff00] p-4 sm:p-5 transition-all duration-300"
                  style={{ maxWidth: `${55 + i * 22}%`, minWidth: "220px" }}
                  data-testid={`card-salary-${i}`}
                >
                  <div className="text-lg font-extrabold text-white sm:text-xl">{level.salary} so'm dan</div>
                  <div className="text-sm font-medium text-zinc-300">{level.level} — {level.description}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">*Manba: hh.uz, HeadHunter</p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 sm:py-16" data-testid="section-tools">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-tools-title">Instrumentlar</h2>
          <div className="flex flex-wrap gap-3">
            {course.tools.map((tool, i) => (
              <div key={i} className="rounded-full border border-white/10 bg-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-300" data-testid={`badge-tool-${i}`}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[#111] py-12 sm:py-16" data-testid="section-skills">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-skills-title">Siz o'rganasiz</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {course.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900 p-4" data-testid={`text-skill-${i}`}>
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span className="font-medium text-white text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-12 sm:py-16" data-testid="section-for-whom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-for-whom-title">Kurs kimlar uchun?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5" data-testid={`text-for-whom-${i}`}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <GraduationCap className="h-4 w-4 text-purple-600" />
                </div>
                <span className="font-medium text-white text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="bg-[#111] py-12 sm:py-16" data-testid="section-modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-modules-title">Kurs dasturi</h2>
          <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
            {[
              { icon: Calendar, text: `${course.duration}` },
              { icon: BookOpen, text: `${course.projects} loyiha` },
              { icon: Clock, text: `${course.theoryHours} soat nazariya` },
              { icon: Wrench, text: `${course.practiceHours} soat amaliyot` },
            ].map((item, i) => (
              <Badge key={i} variant="outline" className="rounded-full gap-1.5 border-2 px-3 py-1.5 text-xs sm:text-sm font-semibold">
                <item.icon className="h-3.5 w-3.5" /> {item.text}
              </Badge>
            ))}
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {course.modules.map((mod, i) => (
                <AccordionItem key={i} value={`module-${i}`} className="rounded-2xl border border-white/10 bg-zinc-900 px-5" data-testid={`accordion-module-${i}`}>
                  <AccordionTrigger className="text-left py-4 text-white">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white shadow-md">
                        {i + 1}
                      </span>
                      <div>
                        <span className="text-sm font-bold sm:text-base">{mod.title}</span>
                        <div className="text-xs text-zinc-400">{mod.topics.length} mavzu</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-12 space-y-2.5 pb-3">
                      {mod.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-zinc-400">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
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
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-support-title">O'quv jarayonida siz bilan birga</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {course.supportTeam.map((person, i) => (
              <Card key={i} className="border shadow-md overflow-hidden text-center" data-testid={`card-support-${i}`}>
                <div className="h-48 overflow-hidden">
                  <img src={person.avatar} alt={person.role} className="h-full w-full object-cover object-top" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-white">{person.role}</h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{person.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Learning — image replaced with actual course image */}
      <section className="bg-[#111] py-12 sm:py-16" data-testid="section-live">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600 border-purple-200">O'quv formati</Badge>
              <h2 className="text-3xl font-extrabold sm:text-4xl" data-testid="text-live-title">Jonli muloqot va amaliyot ekspertlar bilan</h2>
              <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
                Har bir mavzuni tajribali o'qituvchilar bilan onlayn darslarda o'rganasiz. Savollaringizga tezkor javob olasiz va kursdoshlaringiz bilan fikr almashishingiz mumkin.
              </p>
              <div className="mt-6 space-y-3">
                {["Jonli video darslar", "Amaliy loyihalar", "Mentor ko'magi", "Guruh Telegram chat"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-white">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border">
              <img src={course.image} alt={course.title} className="h-64 w-full object-cover sm:h-80" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-12 sm:py-16" data-testid="section-consultation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 shadow-2xl sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl" data-testid="text-consultation-title">Bepul konsultatsiya<br />mutaxassis bilan</h2>
                <p className="mt-3 text-purple-100">
                  10 daqiqada dasturni tushuntiramiz, maslahat beramiz va savollaringizga javob beramiz
                </p>
                <Link href="/contacts">
                  <Button size="lg" className="mt-6 gap-2 rounded-full bg-zinc-900 px-8 font-bold text-purple-700 shadow-lg hover:bg-zinc-800" data-testid="button-consultation-cta">
                    Konsultatsiya olish <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              {mentor && (
                <div className="flex items-center gap-5">
                  <img src={mentor.avatar} alt={mentor.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-4 ring-white/20 shadow-xl sm:h-24 sm:w-24" loading="lazy" />
                  <div>
                    <h3 className="text-xl font-bold text-white" data-testid="text-mentor-name">{mentor.name}</h3>
                    <p className="text-sm text-purple-200">{mentor.role}</p>
                    <p className="text-sm text-purple-200">{mentor.experience}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="bg-[#111] py-12 sm:py-16" data-testid="section-related">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-related-title">Boshqa kurslar</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.filter((c) => c.id !== course.id).slice(0, 4).map((c) => (
              <Link key={c.id} href={`/course/${c.id}`}>
                <Card className="group cursor-pointer border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full" data-testid={`card-related-${c.id}`}>
                  <div className="h-36 overflow-hidden">
                    <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <Badge className="mb-2 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">{c.category}</Badge>
                    <h3 className="mb-1 text-sm font-bold leading-snug text-white">{c.title}</h3>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-zinc-400">{c.duration}</span>
                      <span className="font-bold text-white">{c.price} UZS</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16" data-testid="section-course-faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-course-faq-title">Ko'p beriladigan savollar</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {courseFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border border-white/10 bg-zinc-900 px-6" data-testid={`accordion-faq-${faq.id}`}>
                  <AccordionTrigger className="text-left font-semibold py-5 text-sm sm:text-base text-white hover:no-underline hover:text-purple-300">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
