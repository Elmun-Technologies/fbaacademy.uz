import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { teachers } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Teachers() {
  useSEO({
    title: "O'qituvchilar - FBA Academy",
    description: "FBA Academy tajribali mentorlar jamoasi. Sohasida 5+ yillik amaliy tajribaga ega mutaxassislar.",
  });

  return (
    <Layout>
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-teachers-page-title">Bizning o'qituvchilar</h1>
          <p className="mb-10 max-w-xl text-muted-foreground">
            Barcha mentorlarimiz o'z sohasida 5+ yillik amaliy tajribaga ega mutaxassislar
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <div key={teacher.id} data-testid={`card-teacher-page-${teacher.id}`}>
                <div className="mb-3 overflow-hidden rounded-2xl">
                  <img src={teacher.avatar} alt={teacher.name} className="aspect-[3/4] w-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-foreground" data-testid={`text-teacher-page-name-${teacher.id}`}>{teacher.name}</h3>
                <p className="text-sm text-muted-foreground">{teacher.role}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{teacher.experience}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{teacher.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t pt-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">Mentorlarimiz bilan tanishing</h2>
              <Link href="/contacts">
                <Button variant="outline" size="lg" className="gap-2 rounded-full" data-testid="button-teachers-cta">
                  Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
