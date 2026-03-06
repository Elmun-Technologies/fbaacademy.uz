import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">Karyera</Badge>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-career-title">Ishga joylashish markazi</h1>
          <p className="mb-10 max-w-2xl text-slate-300">
            Kursni tugatgach, biz sizga ish topishda faol yordam beramiz. 50+ hamkor kompaniyalar bilan hamkorlik qilamiz.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "92%", label: "Ishga joylashish" },
              { value: "50+", label: "Hamkor kompaniyalar" },
              { value: "3 oy", label: "O'rtacha ish topish vaqti" },
              { value: "3x", label: "Maosh o'sishi" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm" data-testid={`stat-career-${i}`}>
                <div className="text-3xl font-extrabold text-white">{item.value}</div>
                <div className="mt-1 text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-career-how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Qanday yordam beramiz?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FileText, title: "Rezyume tayyorlash", desc: "Professional rezyume va portfolio yaratishda yordam beramiz.", gradient: "from-blue-500 to-cyan-500" },
              { icon: Users, title: "Suhbatga tayyorgarlik", desc: "HR mutaxassislari bilan amaliy suhbat mashqlari o'tkazamiz.", gradient: "from-purple-500 to-pink-500" },
              { icon: Target, title: "Vakansiya tanlash", desc: "Sizning ko'nikmalaringizga mos vakansiyalarni topamiz.", gradient: "from-emerald-500 to-teal-500" },
              { icon: Briefcase, title: "Hamkor kompaniyalar", desc: "50+ hamkor kompaniyamizga to'g'ridan-to'g'ri tavsiya qilamiz.", gradient: "from-amber-500 to-orange-500" },
              { icon: Building2, title: "Stajirovka imkoniyati", desc: "Yetakchi kompaniyalarda amaliyot o'tash imkoniyatini beramiz.", gradient: "from-indigo-500 to-violet-500" },
              { icon: UserCheck, title: "Doimiy qo'llab-quvvatlash", desc: "Ish topguningizcha va undan keyin ham qo'llab-quvvatlaymiz.", gradient: "from-rose-500 to-pink-500" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-md dark:bg-card" data-testid={`card-career-help-${i}`}>
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-md`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 dark:bg-slate-900/50" data-testid="section-career-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Hamkor kompaniyalar</h2>
          <div className="flex flex-wrap gap-3">
            {partnerCompanies.map((company) => (
              <div key={company} className="rounded-full border-2 bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm dark:bg-card">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Yangi karyerangizni boshlang</h2>
            <Link href="/contacts">
              <Button size="lg" className="gap-2 rounded-full bg-white px-8 font-bold text-purple-700 shadow-lg hover:bg-slate-100" data-testid="button-career-cta">
                Bepul konsultatsiya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
