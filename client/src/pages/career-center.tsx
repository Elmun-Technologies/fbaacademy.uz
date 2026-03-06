import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { partnerCompanies } from "@/lib/data";
import { Briefcase, FileText, Users, Target, ArrowRight, Building2, UserCheck } from "lucide-react";

export default function CareerCenter() {
  useSEO({
    title: "Ishga joylashish markazi - FBA Academy",
    description: "FBA Academy bitiruvchilariga ish topishda yordam. 50+ hamkor kompaniyalar, 92% ishga joylashish ko'rsatkichi.",
  });

  return (
    <Layout>
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-career-title">Ishga joylashish markazi</h1>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            Kursni tugatgach, biz sizga ish topishda faol yordam beramiz. 50+ hamkor kompaniyalar bilan hamkorlik qilamiz.
          </p>

          <div className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "92%", label: "Ishga joylashish" },
              { value: "50+", label: "Hamkor kompaniyalar" },
              { value: "3 oy", label: "O'rtacha ish topish vaqti" },
              { value: "3x", label: "Maosh o'sishi" },
            ].map((item, i) => (
              <div key={i} data-testid={`stat-career-${i}`}>
                <div className="text-3xl font-extrabold text-foreground">{item.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-career-how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Qanday yordam beramiz?</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FileText, title: "Rezyume tayyorlash", desc: "Professional rezyume va portfolio yaratishda yordam beramiz." },
              { icon: Users, title: "Suhbatga tayyorgarlik", desc: "HR mutaxassislari bilan amaliy suhbat mashqlari o'tkazamiz." },
              { icon: Target, title: "Vakansiya tanlash", desc: "Sizning ko'nikmalaringizga mos vakansiyalarni topamiz." },
              { icon: Briefcase, title: "Hamkor kompaniyalar", desc: "50+ hamkor kompaniyamizga to'g'ridan-to'g'ri tavsiya qilamiz." },
              { icon: Building2, title: "Stajirovka imkoniyati", desc: "Yetakchi kompaniyalarda amaliyot o'tash imkoniyatini beramiz." },
              { icon: UserCheck, title: "Doimiy qo'llab-quvvatlash", desc: "Ish topguningizcha va undan keyin ham qo'llab-quvvatlaymiz." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 p-6 dark:bg-card" data-testid={`card-career-help-${i}`}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-background">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-career-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Hamkor kompaniyalar</h2>
          <div className="flex flex-wrap gap-3">
            {partnerCompanies.map((company) => (
              <div key={company} className="rounded-full bg-slate-50 px-5 py-2.5 text-sm font-medium text-muted-foreground dark:bg-card">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Yangi karyerangizni boshlang</h2>
            <Link href="/contacts">
              <Button variant="outline" size="lg" className="gap-2 rounded-full" data-testid="button-career-cta">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
