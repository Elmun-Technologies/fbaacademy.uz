import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { teachers } from "@/lib/data";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function Teachers() {
  useSEO({
    title: "O'qituvchilar - FBA Academy",
    description: "FBA Academy tajribali mentorlar jamoasi. Sohasida 5+ yillik amaliy tajribaga ega mutaxassislar.",
  });

  return (
    <Layout>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-background to-indigo-50/50 dark:from-purple-950/10 dark:via-background dark:to-indigo-950/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" data-testid="text-teachers-page-title">Bizning o'qituvchilar</h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Barcha mentorlarimiz o'z sohasida 5+ yillik amaliy tajribaga ega mutaxassislar
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="group" data-testid={`card-teacher-page-${teacher.id}`}>
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img src={teacher.avatar} alt={teacher.name} className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex flex-wrap gap-1.5">
                      {teacher.courses.map((course) => (
                        <span key={course} className="rounded-md bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-sm">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold" data-testid={`text-teacher-page-name-${teacher.id}`}>{teacher.name}</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">{teacher.role}</p>
                <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5" />
                  {teacher.experience}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{teacher.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Mentorlarimiz bilan tanishing</h2>
            <p className="mx-auto mt-3 max-w-lg text-white/80">
              Bepul konsultatsiya oling va sizga mos mentor bilan uchrashing
            </p>
            <Link href="/contacts">
              <Button size="lg" variant="secondary" className="mt-6 gap-2" data-testid="button-teachers-cta">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
