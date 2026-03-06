import { useSEO } from "@/hooks/use-seo";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import LeadForm from "@/components/lead-form";
import { Gift, Percent, Clock, CheckCircle2, Star, Zap, Users } from "lucide-react";

export default function Grants() {
  useSEO({
    title: "Grant va Chegirmalar — ACCA, DipIFR Bepul Ta'lim | FBA Academy",
    description: "FBA Academy maxsus grant va chegirma imkoniyatlari. ACCA, DipIFR, Financial Modeling kurslarini 0% bo'lib to'lang yoki grant yutib oling.",
    keywords: "ACCA grant O'zbekiston, DipIFR chegirma, moliya kursi grant, bepul ta'lim",
    breadcrumb: [{ name: "Grant va Aksiyalar", url: "https://fbaacademy.uz/grants" }],
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Grant va Aksiyalar" }]} light />
          </div>
          <Badge className="mb-4 rounded-full border-amber-400/30 bg-amber-500/20 px-4 py-1.5 text-sm text-amber-200 backdrop-blur-sm">
            <Zap className="mr-1.5 h-3.5 w-3.5" /> Cheklangan vaqt
          </Badge>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-grants-title">Grant va Aksiyalar</h1>
          <p className="max-w-2xl text-slate-300">
            Maxsus chegirmalar va grant imkoniyatlaridan foydalaning. Karyerangizni arzon narxda boshlang!
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-grants-active">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight text-white">Faol aksiyalar</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Erta ro'yxatdan o'tish", discount: "40%", desc: "Yangi kursga erta ro'yxatdan o'ting va 40% chegirma oling.", deadline: "2026 yil 30 mart", icon: Clock, gradient: "from-violet-500 to-purple-600" },
              { title: "Do'st olib kelish", discount: "25%", desc: "Do'stingizni kursga olib keling — ikkalangiz ham 25% chegirma olasiz.", deadline: "Doimiy aksiya", icon: Users, gradient: "from-emerald-500 to-teal-600" },
              { title: "Talabalar uchun grant", discount: "50%", desc: "Universitet talabalari uchun maxsus 50% grant dasturi.", deadline: "2026 yil 1 iyun", icon: Star, gradient: "from-amber-500 to-orange-600" },
              { title: "2 ta kurs = 1 bepul", discount: "33%", desc: "Bir vaqtda 2 ta kursga yozilsangiz, 3-kursni bepul olasiz.", deadline: "2026 yil 15 aprel", icon: Gift, gradient: "from-blue-500 to-indigo-600" },
              { title: "Oilaviy aksiya", discount: "30%", desc: "Oila a'zolaringiz bilan birga o'qing va 30% chegirma oling.", deadline: "Doimiy aksiya", icon: Users, gradient: "from-pink-500 to-rose-600" },
              { title: "Bo'lib to'lash", discount: "0%", desc: "Barcha kurslar uchun 0% bo'lib to'lash imkoniyati. 3 yoki 6 oyga bo'lib to'lang.", deadline: "Doimiy", icon: Percent, gradient: "from-slate-500 to-slate-700" },
            ].map((promo, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-6" data-testid={`card-promo-${i}`}>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${promo.gradient} shadow-md`}>
                    <promo.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-3xl font-extrabold text-white">-{promo.discount}</span>
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-white">{promo.title}</h3>
                <p className="mb-3 text-sm text-zinc-400">{promo.desc}</p>
                <div className="flex items-center gap-1 text-xs text-zinc-400">
                  <Clock className="h-3 w-3" />
                  <span>{promo.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-grants-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-900/20 to-orange-900/20 p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-md">
              <Gift className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold">Aksiyadan foydalanish</h2>
            <p className="mt-2 mb-6 text-sm text-zinc-400">So'rov qoldiring va maxsus chegirmangizni oling</p>
            <LeadForm source="grants" buttonText="Chegirma olish" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-grants-conditions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-white">Aksiya shartlari</h2>
          <div className="mx-auto max-w-2xl space-y-3">
            {[
              "Aksiyalar bir-biri bilan birlashtirilmaydi",
              "Grant talabalari uchun talaba guvohnomasi talab qilinadi",
              "Bo'lib to'lash uchun passport nusxasi kerak",
              "Aksiya shartlari o'zgarishi mumkin",
              "Batafsil ma'lumot uchun +998 90 123 45 67 raqamiga qo'ng'iroq qiling",
            ].map((cond, i) => (
              <div key={i} className="flex items-start gap-3" data-testid={`text-condition-${i}`}>
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-sm text-zinc-400">{cond}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
