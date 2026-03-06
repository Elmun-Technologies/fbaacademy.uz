import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout/layout";
import { partnerCompanies, stats } from "@/lib/data";
import { Briefcase, FileText, Users, Target, ArrowRight, CheckCircle2, Building2, UserCheck } from "lucide-react";

export default function CareerCenter() {
  useSEO({
      title: "Ishga joylashish markazi - FBA Academy",
      description: "FBA Academy bitiruvchilariga ish topishda yordam. 50+ hamkor kompaniyalar, 92% ishga joylashish ko'rsatkichi.",
    });

  return (
    <Layout>
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl" data-testid="text-career-title">Ishga joylashish markazi</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Kursni tugatgach, biz sizga ish topishda faol yordam beramiz. 50+ hamkor kompaniyalar bilan hamkorlik qilamiz.
          </p>
        </div>
      </section>

      <section className="-mt-8 relative z-10 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              { icon: UserCheck, value: "92%", label: "Ishga joylashish" },
              { icon: Building2, value: "50+", label: "Hamkor kompaniyalar" },
              { icon: Briefcase, value: "3 oy", label: "O'rtacha ish topish vaqti" },
              { icon: Target, value: "3x", label: "Maosh o'sishi" },
            ].map((item, i) => (
              <Card key={i} className="border-card-border bg-card p-6 text-center" data-testid={`stat-career-${i}`}>
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                  <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-career-how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold">Qanday yordam beramiz?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FileText, title: "Rezyume tayyorlash", desc: "Professional rezyume va portfolio yaratishda yordam beramiz." },
              { icon: Users, title: "Suhbatga tayyorgarlik", desc: "HR mutaxassislari bilan amaliy suhbat mashqlari o'tkazamiz." },
              { icon: Target, title: "Vakansiya tanlash", desc: "Sizning ko'nikmalaringizga mos vakansiyalarni topamiz." },
              { icon: Briefcase, title: "Hamkor kompaniyalar", desc: "50+ hamkor kompaniyamizga to'g'ridan-to'g'ri tavsiya qilamiz." },
              { icon: Building2, title: "Stajировka imkoniyati", desc: "Yetakchi kompaniyalarda amaliyot o'tash imkoniyatini beramiz." },
              { icon: UserCheck, title: "Doimiy qo'llab-quvvatlash", desc: "Ish topguningizcha va undan keyin ham qo'llab-quvvatlaymiz." },
            ].map((item, i) => (
              <Card key={i} className="border-card-border bg-card p-6" data-testid={`card-career-help-${i}`}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                  <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/50 py-16" data-testid="section-career-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold">Hamkor kompaniyalar</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partnerCompanies.map((company) => (
              <div key={company} className="flex h-12 items-center justify-center rounded-md border border-border/50 bg-background px-5 text-sm font-medium text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-600 to-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Yangi karyerangizni boshlang</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">Bepul konsultatsiya oling va sizga mos yo'nalishni tanlang</p>
          <Link href="/contacts">
            <Button size="lg" variant="secondary" className="mt-6 gap-2" data-testid="button-career-cta">
              Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
