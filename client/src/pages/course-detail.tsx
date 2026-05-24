import { useParams, Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/layout";
import { LazyLeadForm, DeferredLeadForm } from "@/components/lazy-lead-form";
import YouTubeEmbed from "@/components/youtube-embed";
import CourseCertificatesSection from "@/components/course-certificates-section";
import TeacherAvatar from "@/components/teacher-avatar";
import { courses, teachers, faqItems, isCoursePriceVisible, isCourseProgramVisible } from "@/lib/data";
import { Clock, BarChart3, CheckCircle2, ArrowRight, BookOpen, ArrowLeft, Star, Flame, Calendar, Award, TrendingUp, Wrench, Monitor, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useMemo } from "react";
import { localizeCourse, localizeFaqItems, localizeTeacher } from "@/lib/localize-content";

export default function CourseDetail() {
  const { lang } = useLanguage();
  const tt = (uz: string, ru: string, en: string) => (lang === "ru" ? ru : lang === "en" ? en : uz);
  const { id } = useParams<{ id: string }>();
  const rawCourse = courses.find((c) => c.id === id);
  const course = useMemo(() => (rawCourse ? localizeCourse(rawCourse, lang) : undefined), [rawCourse, lang]);

  useSEO({
    title: course ? tt(`${course.title} kursi — FBA Academy`, `${course.title} — курс | FBA Academy`, `${course.title} course — FBA Academy`) : tt("Kurs topilmadi — FBA Academy", "Курс не найден — FBA Academy", "Course Not Found — FBA Academy"),
    description: course?.description || tt("Bu kurs mavjud emas.", "Этот курс недоступен.", "This course is unavailable."),
    keywords: course ? tt(`${course.title}, ${course.category}, ${course.tools.slice(0, 3).join(", ")}, kurs, sertifikat`, `${course.title}, ${course.category}, курс, сертификат`, `${course.title}, ${course.category}, course, certificate`) : undefined,
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
        "courseWorkload": tt(`${course.theoryHours} soat nazariya, ${course.practiceHours} soat amaliyot`, `${course.theoryHours} ч. теория, ${course.practiceHours} ч. практика`, `${course.theoryHours}h theory, ${course.practiceHours}h practice`)
      }
    } : undefined
  });

  const mentor = rawCourse ? localizeTeacher(teachers.find((t) => t.id === rawCourse.mentorId) ?? teachers[0], lang) : undefined;
  const showPrice = course ? isCoursePriceVisible(course) : false;
  const showProgram = course ? isCourseProgramVisible(course) : false;
  const courseFaqs = useMemo(
    () =>
      localizeFaqItems(
        faqItems
          .filter(
            (f) =>
              f.category === rawCourse?.category ||
              f.category === "Umumiy" ||
              f.category === "To'lov" ||
              f.category === "Sertifikat" ||
              f.category === "Ishga joylashish",
          )
          .slice(0, 6),
        lang,
      ),
    [rawCourse?.category, lang],
  );

  if (!course) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold" data-testid="text-course-not-found">{tt("Kurs topilmadi", "Курс не найден", "Course not found")}</h2>
            <p className="mt-2 text-zinc-400">{tt("Bu kurs mavjud emas yoki olib tashlangan", "Курс недоступен или был удален", "This course is unavailable or has been removed")}</p>
            <Link href="/courses">
              <Button variant="outline" className="mt-4 rounded-full" data-testid="button-back-to-courses">{tt("Kurslarga qaytish", "Назад к курсам", "Back to courses")}</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Dark Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14" data-testid="section-course-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/courses">
            <span className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 cursor-pointer hover:text-white transition-colors" data-testid="link-back-courses">
              <ArrowLeft className="h-4 w-4" /> {tt("Barcha kurslar", "Все курсы", "All courses")}
            </span>
          </Link>

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="mb-2 text-sm font-medium text-brand-accent-light">{tt("Onlayn kurs", "Онлайн курс", "Online course")} · {course.category}</p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] leading-tight" data-testid="text-course-detail-title">{course.title}</h1>
              <p className="mt-4 max-w-xl text-slate-300 leading-relaxed">{course.description}</p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-bold text-white">{course.rating}</span>
                </div>
                <span className="text-sm text-zinc-500">{course.studentsCount} {tt("talaba", "студентов", "students")}</span>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: Monitor, label: tt("Jonli darslar", "Живые занятия", "Live classes"), sub: tt("Mini-guruhlarda", "В мини-группах", "In mini-groups") },
                  { icon: Clock, label: `${course.practiceHours} ${tt("soat", "ч", "hours")}`, sub: tt("Amaliyot", "Практика", "Practice") },
                  { icon: Award, label: tt("Ishga joylashish", "Трудоустройство", "Employment"), sub: tt("Hamkor orqali", "Через партнеров", "Via partners") },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm" data-testid={`card-hero-feature-${i}`}>
                    <item.icon className="mb-2 h-5 w-5 text-brand-accent-light" />
                    <div className="text-xs font-bold text-white sm:text-sm">{item.label}</div>
                    <div className="text-xs text-zinc-500">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl" data-testid="card-course-enroll">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{tt("So'rov qoldiring", "Оставьте заявку", "Leave a request")}</h3>
                  {showPrice && course.discount && (
                    <Badge className="rounded-full bg-rose-500 text-white font-bold px-3 shadow-md">-{course.discount}</Badge>
                  )}
                </div>
                {showPrice ? (
                  <>
                    <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                      <Flame className="h-4 w-4" />
                      <span>{tt("Joylar soni cheklangan", "Количество мест ограничено", "Seats are limited")}</span>
                    </div>
                    <div className="mb-4 flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-white" data-testid="text-course-detail-price">{course.price} UZS</span>
                      {course.oldPrice && (
                        <span className="text-sm text-zinc-400 line-through">{course.oldPrice} UZS</span>
                      )}
                    </div>
                    <LazyLeadForm source={`course-${course.id}`} buttonText={tt("Chegirma bilan yozilish", "Записаться со скидкой", "Enroll with discount")} />
                  </>
                ) : (
                  <>
                    <p className="mb-4 text-sm text-zinc-400">{tt("Narx hozircha ko'rsatilmagan. So'rov qoldiring, menejer sizga narxni yuboradi.", "Цена пока скрыта. Оставьте заявку и менеджер отправит стоимость.", "Price is currently hidden. Leave a request and our manager will send it.")}</p>
                    <LazyLeadForm source={`course-${course.id}`} buttonText={tt("Narxni bilish", "Узнать цену", "Get price")} />
                  </>
                )}
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
              <h2 className="mb-6 text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-video-preview-title">
                {tt("Kurs haqida ko'proq bilib oling", "Узнайте больше о курсе", "Learn more about the course")}
              </h2>
              <YouTubeEmbed videoId={course.videoId} title={`${course.title} — ${tt("kurs haqida", "о курсе", "about course")}`} />
            </div>
          </div>
        </section>
      )}

      {/* Salary Growth */}
      <section className="py-12 sm:py-16" data-testid="section-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-zinc-900 border border-white/10 p-6 sm:p-10 dark:border">
            <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl" data-testid="text-salary-title">{tt("Maoshingiz tajriba bilan o'sadi", "Ваша зарплата растет с опытом", "Your salary grows with experience")}</h2>
            <div className="space-y-3">
              {course.salaryLevels.map((level, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-800/80 p-5 transition-all duration-300 hover:border-amber-500/30 hover:bg-zinc-800"
                  style={{ maxWidth: `${55 + i * 22}%`, minWidth: "240px" }}
                  data-testid={`card-salary-${i}`}
                >
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-amber-400 to-amber-600" />
                  <div className="pl-3">
                    <div className="text-xl font-extrabold text-amber-300 sm:text-2xl">{level.salary} {tt("so'm dan", "сум и выше", "UZS and up")}</div>
                    <div className="mt-0.5 text-sm text-zinc-400">{level.level} — {level.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">{tt("*Manba: hh.uz, HeadHunter", "*Источник: hh.uz, HeadHunter", "*Source: hh.uz, HeadHunter")}</p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 sm:py-16" data-testid="section-tools">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-tools-title">{tt("Instrumentlar", "Инструменты", "Tools")}</h2>
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
          <h2 className="mb-6 text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-skills-title">{tt("Siz o'rganasiz", "Вы изучите", "You will learn")}</h2>
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
          <h2 className="mb-6 text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-for-whom-title">{tt("Kurs kimlar uchun?", "Для кого этот курс?", "Who is this course for?")}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-5" data-testid={`text-for-whom-${i}`}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-accent-light dark:bg-brand-dark/30">
                  <GraduationCap className="h-4 w-4 text-brand" />
                </div>
                <span className="font-medium text-white text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Program */}
      {showProgram && (
      <section className="bg-[#111] py-12 sm:py-16" data-testid="section-modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-modules-title">{tt("Kurs dasturi", "Программа курса", "Course program")}</h2>
          <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
            {[
              { icon: Calendar, text: `${course.duration}` },
              { icon: BookOpen, text: `${course.projects} ${tt("loyiha", "проектов", "projects")}` },
              { icon: Clock, text: `${course.theoryHours} ${tt("soat nazariya", "ч. теории", "hours theory")}` },
              { icon: Wrench, text: `${course.practiceHours} ${tt("soat amaliyot", "ч. практики", "hours practice")}` },
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
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-accent text-sm font-bold text-white shadow-md">
                        {i + 1}
                      </span>
                      <div>
                        <span className="text-sm font-bold sm:text-base">{mod.title}</span>
                        <div className="text-xs text-zinc-400">{mod.topics.length} {tt("mavzu", "тем", "topics")}</div>
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
      )}

      {/* Support Team */}
      <section className="py-12 sm:py-16" data-testid="section-support">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-support-title">{tt("O'quv jarayonida siz bilan birga", "С вами на всем пути обучения", "With you through the whole learning journey")}</h2>
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
              <Badge variant="outline" className="mb-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand border-brand-accent-light">{tt("O'quv formati", "Формат обучения", "Learning format")}</Badge>
              <h2 className="text-3xl font-extrabold sm:text-4xl" data-testid="text-live-title">{tt("Jonli muloqot va amaliyot ekspertlar bilan", "Живое общение и практика с экспертами", "Live interaction and practice with experts")}</h2>
              <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
                {tt("Har bir mavzuni tajribali o'qituvchilar bilan onlayn darslarda o'rganasiz. Savollaringizga tezkor javob olasiz va kursdoshlaringiz bilan fikr almashishingiz mumkin.", "Каждую тему вы проходите на онлайн-занятиях с опытными преподавателями. Получаете быстрые ответы и общаетесь с группой.", "You study each topic in live online classes with experienced mentors, get fast answers, and collaborate with peers.")}
              </p>
              <div className="mt-6 space-y-3">
                {[tt("Jonli video darslar", "Живые видеоуроки", "Live video classes"), tt("Amaliy loyihalar", "Практические проекты", "Practical projects"), tt("Mentor ko'magi", "Поддержка ментора", "Mentor support"), tt("Guruh Telegram chat", "Групповой Telegram-чат", "Group Telegram chat")].map((item) => (
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
          <div className="rounded-3xl bg-gradient-to-r from-brand to-brand-dark p-8 shadow-2xl sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl" data-testid="text-consultation-title">{tt("Bepul konsultatsiya", "Бесплатная консультация", "Free consultation")}<br />{tt("mutaxassis bilan", "со специалистом", "with a specialist")}</h2>
                <p className="mt-3 text-brand-accent-light">
                  {tt("10 daqiqada dasturni tushuntiramiz, maslahat beramiz va savollaringizga javob beramiz", "За 10 минут объясним программу, дадим рекомендации и ответим на вопросы.", "In 10 minutes we'll explain the program, provide guidance, and answer your questions.")}
                </p>
                <Link href="/contacts">
                  <Button size="lg" className="mt-6 gap-2 rounded-full bg-zinc-900 px-8 font-bold text-brand-dark shadow-lg hover:bg-zinc-800" data-testid="button-consultation-cta">
                    {tt("Konsultatsiya olish", "Получить консультацию", "Get consultation")} <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              {mentor && (
                <div className="flex items-center gap-5">
                  <TeacherAvatar name={mentor.name} src={mentor.avatar} className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-4 ring-white/20 shadow-xl sm:h-24 sm:w-24" />
                  <div>
                    <h3 className="text-xl font-bold text-white" data-testid="text-mentor-name">{mentor.name}</h3>
                    <p className="text-sm text-brand-accent-light">{mentor.role}</p>
                    <p className="text-sm text-brand-accent-light">{mentor.experience}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CourseCertificatesSection
        courseId={course.id}
        title={tt("Bitiruvchilar sertifikatlari", "Сертификаты выпускников", "Graduate certificates")}
        subtitle={tt("FBA Academy yo'nalishlari bo'yicha ochiq sertifikat namunalari.", "Открытые примеры сертификатов по направлениям FBA Academy.", "Open certificate samples for FBA Academy programs.")}
      />

      {/* Related Courses */}
      <section className="bg-[#111] py-12 sm:py-16" data-testid="section-related">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-related-title">{tt("Boshqa kurslar", "Другие курсы", "Other courses")}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.filter((c) => c.id !== course.id).slice(0, 4).map((c) => (
              <Link key={c.id} href={`/course/${c.id}`}>
                <Card className="group cursor-pointer border shadow-md ix-card hover:shadow-xl overflow-hidden h-full" data-testid={`card-related-${c.id}`}>
                  <div className="h-36 overflow-hidden">
                    <img src={c.image} alt={c.title} className="h-full w-full object-cover ix-media" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <Badge className="mb-2 rounded-full bg-brand-accent-light text-brand-dark text-xs font-semibold">{c.category}</Badge>
                    <h3 className="mb-1 text-sm font-bold leading-snug text-white">{c.title}</h3>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-zinc-400">{c.duration}</span>
                      <span className="font-bold text-white">{isCoursePriceVisible(c) ? `${c.price} UZS` : tt("Narx so'rov orqali", "Цена по запросу", "Price on request")}</span>
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
          <h2 className="mb-8 text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white" data-testid="text-course-faq-title">{tt("Ko'p beriladigan savollar", "Часто задаваемые вопросы", "Frequently asked questions")}</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="multiple" className="space-y-3">
              {courseFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="rounded-2xl border border-white/10 bg-zinc-900 px-6" data-testid={`accordion-faq-${faq.id}`}>
                  <AccordionTrigger className="text-left font-semibold py-5 text-sm sm:text-base text-white hover:no-underline hover:text-brand-accent-light">{faq.question}</AccordionTrigger>
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
