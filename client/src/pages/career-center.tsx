import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import { partnerCompanies, graduateResults } from "@/lib/data";
import {
  Briefcase, FileText, Users, Target, ArrowRight,
  Building2, UserCheck, TrendingUp, Sparkles, ArrowUpRight,
} from "lucide-react";

const HELP_CARDS = [
  { icon: FileText, title: "Rezyume tayyorlash", desc: "Professional rezyume va portfolio yaratishda yordam beramiz.", color: "from-blue-500 to-cyan-500" },
  { icon: Users, title: "Suhbatga tayyorgarlik", desc: "HR mutaxassislari bilan amaliy suhbat mashqlari o'tkazamiz.", color: "from-purple-500 to-pink-500" },
  { icon: Target, title: "Vakansiya tanlash", desc: "Sizning ko'nikmalaringizga mos vakansiyalarni topamiz.", color: "from-emerald-500 to-teal-500" },
  { icon: Briefcase, title: "To'g'ridan-to'g'ri tavsiya", desc: "50+ hamkor kompaniyamizga to'g'ridan-to'g'ri tavsiya qilamiz.", color: "from-amber-500 to-orange-500" },
  { icon: Building2, title: "Stajirovka imkoniyati", desc: "Yetakchi kompaniyalarda amaliyot o'tash imkoniyatini beramiz.", color: "from-indigo-500 to-violet-500" },
  { icon: UserCheck, title: "Doimiy qo'llab-quvvatlash", desc: "Ish topguningizcha va undan keyin ham qo'llab-quvvatlaymiz.", color: "from-rose-500 to-pink-500" },
];

const SALARY_TABLE = [
  { position: "Bosh buxgalter (ACCA)", min: "8 000 000", max: "20 000 000", growth: "+250%" },
  { position: "Audit Menejer (Big Four)", min: "12 000 000", max: "30 000 000", growth: "+400%" },
  { position: "Moliyaviy Menejer (DipIFR)", min: "10 000 000", max: "25 000 000", growth: "+350%" },
  { position: "Investment Analyst (FM)", min: "8 000 000", max: "18 000 000", growth: "+300%" },
  { position: "1C Administrator", min: "5 000 000", max: "12 000 000", growth: "+180%" },
];

export default function CareerCenter() {
  useSEO({
    title: "Ishga Joylashish Markazi — Big Four, Moliya Kompaniyalari | FBA Academy",
    description: "FBA Academy bitiruvchilari Deloitte, PwC, KPMG, EY va yetakchi moliya kompaniyalarida ishlashadi. 92% ishga joylashish ko'rsatkichi. Bepul karyera yordam.",
    keywords: "ACCA ishga joylashish, Big Four O'zbekiston, DipIFR ish joyi, moliya karyera",
    breadcrumb: [{ name: "Ishga joylashish", url: "https://fbaacademy.uz/career" }],
    jsonLd: {
      "@type": "EmploymentAgency",
      name: "FBA Academy Karyera Markazi",
      description: "FBA Academy bitiruvchilariga Deloitte, PwC, KPMG, EY va yetakchi moliya kompaniyalarida ishga joylashishda yordam beradi.",
      url: "https://fbaacademy.uz/career",
    },
  });

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 pb-16 pt-10 sm:pb-20 sm:pt-14"
        data-testid="section-career-hero"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <Breadcrumb items={[{ label: "Ishga joylashish" }]} light />
          </div>
          <Badge className="mb-5 inline-flex rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Karyera Markazi
          </Badge>
          <h1
            className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            data-testid="text-career-title"
          >
            Karyerangizni{" "}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              yangi bosqichga
            </span>{" "}
            olib chiqing
          </h1>
          <p className="mb-10 max-w-xl text-lg text-slate-300 leading-relaxed">
            Kursni tugatgach, biz sizga ish topishda faol yordam beramiz. 50+ hamkor kompaniyalar bilan hamkorlik qilamiz.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "92%", label: "Ishga joylashish" },
              { value: "50+", label: "Hamkor kompaniyalar" },
              { value: "3 oy", label: "O'rtacha ish topish" },
              { value: "3x", label: "Maosh o'sishi" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm" data-testid={`stat-career-${i}`}>
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ───────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-career-help">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-career-help-title">
            Qanday yordam beramiz?
          </h2>
          <p className="mb-10 max-w-xl text-zinc-400">
            O'qish jarayonidan ish topishgacha — har qadamda yoningizda.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HELP_CARDS.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-7 transition-all hover:border-purple-500/30 hover:scale-[1.02]" data-testid={`card-career-help-${i}`}>
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SALARY TABLE ──────────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-salary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl" data-testid="text-salary-title">
            Lavozim va maosh darajalari
          </h2>
          <p className="mb-8 text-zinc-400">FBA Academy bitiruvchilarining O'zbekiston bozorida o'rtacha maosh ko'rsatkichlari</p>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <div className="grid grid-cols-4 gap-4 border-b border-white/10 bg-zinc-800/50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
              <div className="col-span-2">Lavozim</div>
              <div>Maosh oralig'i (UZS)</div>
              <div>Maosh o'sishi</div>
            </div>
            {SALARY_TABLE.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 gap-4 border-b border-white/5 px-6 py-4 transition-colors last:border-0 hover:bg-zinc-800/30"
                data-testid={`salary-row-${i}`}
              >
                <div className="col-span-2 font-semibold text-white">{row.position}</div>
                <div className="text-sm text-zinc-400">
                  {row.min} — {row.max}
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-900/30 px-2.5 py-1 text-xs font-bold text-emerald-400">
                    <TrendingUp className="h-3 w-3" /> {row.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ───────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-success">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-success-title">
            Muvaffaqiyatli bitiruvchilar
          </h2>
          <p className="mb-10 text-zinc-400 max-w-xl">
            Ular o'qishdi, imtihon topshirdi va yangi karyera boshladi.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {graduateResults.map((g) => (
              <div key={g.id} className="group overflow-hidden rounded-2xl bg-zinc-900 transition-transform duration-300 hover:-translate-y-1" data-testid={`card-graduate-${g.id}`}>
                <div className="relative h-48">
                  <img src={g.avatar} alt={g.name} width={400} height={192} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge className="rounded-full bg-emerald-500/90 text-xs font-bold text-white">
                      {g.courseName}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-extrabold text-white">{g.name}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
                    <span className="line-through">{g.beforeRole}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" />
                    <span className="font-bold text-purple-400">{g.afterRole}</span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-emerald-400">{g.salaryIncrease}</p>
                  <p className="mt-3 text-xs text-zinc-400 leading-relaxed">{g.story}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-zinc-400" />
                    <span className="text-xs font-semibold">{g.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER COMPANIES ─────────────────────────────────── */}
      <section className="bg-[#111] py-14 sm:py-20" data-testid="section-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl" data-testid="text-partners-title">
            Bitiruvchilarimiz ishlaydigan kompaniyalar
          </h2>
          <p className="mb-8 text-zinc-400">50+ hamkor kompaniya bizning bitiruvchilarimizni qabul qiladi</p>
          <div className="flex flex-wrap gap-3">
            {partnerCompanies.map((company) => (
              <div
                key={company}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-300"
                data-testid={`partner-${company}`}
              >
                <ArrowUpRight className="h-3.5 w-3.5 text-purple-500" />
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 py-14 sm:py-16" data-testid="section-career-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Yangi karyerangizni boshlang</h2>
              <p className="mt-2 text-purple-100">Bepul konsultatsiya oling va birinchi qadamni qo'ying</p>
            </div>
            <a href="/contacts">
              <Button size="lg" className="gap-2 rounded-full bg-amber-400 px-8 font-bold text-black hover:bg-amber-300" data-testid="button-career-cta">
                Bepul konsultatsiya <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
