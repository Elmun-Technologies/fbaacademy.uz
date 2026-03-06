import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { Gift, Percent, Clock, CheckCircle2, Star, Zap, Users } from "lucide-react";

export default function Grants() {
  useSEO({
    title: "Grant va Aksiyalar - FBA Academy",
    description: "FBA Academy maxsus chegirmalar va grant imkoniyatlari. Karyerangizni arzon narxda boshlang!",
  });

  return (
    <Layout>
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-3 inline-flex items-center gap-1.5">
            <Badge variant="outline" className="rounded-full gap-1">
              <Zap className="h-3 w-3" /> Cheklangan vaqt
            </Badge>
          </div>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-grants-title">Grant va Aksiyalar</h1>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            Maxsus chegirmalar va grant imkoniyatlaridan foydalaning. Karyerangizni arzon narxda boshlang!
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-grants-active">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold">Faol aksiyalar</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Erta ro'yxatdan o'tish", discount: "40%", desc: "Yangi kursga erta ro'yxatdan o'ting va 40% chegirma oling.", deadline: "2026 yil 30 mart", icon: Clock, color: "bg-violet-50 dark:bg-violet-950/20" },
              { title: "Do'st olib kelish", discount: "25%", desc: "Do'stingizni kursga olib keling — ikkalangiz ham 25% chegirma olasiz.", deadline: "Doimiy aksiya", icon: Users, color: "bg-emerald-50 dark:bg-emerald-950/20" },
              { title: "Talabalar uchun grant", discount: "50%", desc: "Universitet talabalari uchun maxsus 50% grant dasturi.", deadline: "2026 yil 1 iyun", icon: Star, color: "bg-amber-50 dark:bg-amber-950/20" },
              { title: "2 ta kurs = 1 bepul", discount: "33%", desc: "Bir vaqtda 2 ta kursga yozilsangiz, 3-kursni bepul olasiz.", deadline: "2026 yil 15 aprel", icon: Gift, color: "bg-blue-50 dark:bg-blue-950/20" },
              { title: "Oilaviy aksiya", discount: "30%", desc: "Oila a'zolaringiz bilan birga o'qing va 30% chegirma oling.", deadline: "Doimiy aksiya", icon: Users, color: "bg-pink-50 dark:bg-pink-950/20" },
              { title: "Bo'lib to'lash", discount: "0%", desc: "Barcha kurslar uchun 0% bo'lib to'lash imkoniyati. 3 yoki 6 oyga bo'lib to'lang.", deadline: "Doimiy", icon: Percent, color: "bg-slate-50 dark:bg-card" },
            ].map((promo, i) => (
              <div key={i} className={`rounded-2xl ${promo.color} p-6`} data-testid={`card-promo-${i}`}>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-background">
                    <promo.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-2xl font-extrabold text-foreground">-{promo.discount}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{promo.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{promo.desc}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{promo.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-grants-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl rounded-2xl bg-slate-50 p-6 sm:p-8 text-center dark:bg-card">
            <Gift className="mx-auto mb-3 h-8 w-8 text-amber-500" />
            <h2 className="text-2xl font-bold">Aksiyadan foydalanish</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">So'rov qoldiring va maxsus chegirmangizni oling</p>
            <LeadForm source="grants" buttonText="Chegirma olish" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" data-testid="section-grants-conditions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold">Aksiya shartlari</h2>
          <div className="mx-auto max-w-2xl space-y-3">
            {[
              "Aksiyalar bir-biri bilan birlashtirilmaydi",
              "Grant talabalari uchun talaba guvohnomasi talab qilinadi",
              "Bo'lib to'lash uchun passport nusxasi kerak",
              "Aksiya shartlari o'zgarishi mumkin",
              "Batafsil ma'lumot uchun +998 90 123 45 67 raqamiga qo'ng'iroq qiling",
            ].map((cond, i) => (
              <div key={i} className="flex items-start gap-3" data-testid={`text-condition-${i}`}>
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{cond}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
