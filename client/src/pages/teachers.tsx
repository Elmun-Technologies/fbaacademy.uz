import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { teachers } from "@/lib/data";
import { Users, ArrowRight, GraduationCap } from "lucide-react";

export default function Teachers() {
  useSEO({
      title: "O'qituvchilar - FBA Academy",
      description: "FBA Academy tajribali mentorlar jamoasi. Sohasida 5+ yillik amaliy tajribaga ega mutaxassislar.",
    });

  return (
    <Layout>
      <section className="bg-gradient-to-b from-purple-50/50 to-background dark:from-purple-950/10 dark:to-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-teachers-page-title">O'qituvchilar</h1>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Barcha mentorlarimiz o'z sohasida 5+ yillik amaliy tajribaga ega mutaxassislar
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="border-card-border bg-card p-6 sm:p-8" data-testid={`card-teacher-page-${teacher.id}`}>
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                    <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold" data-testid={`text-teacher-page-name-${teacher.id}`}>{teacher.name}</h2>
                    <p className="text-muted-foreground">{teacher.role}</p>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      {teacher.experience}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{teacher.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {teacher.courses.map((course) => (
                        <Badge key={course} variant="secondary">{course}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-8 sm:p-12 text-center">
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
