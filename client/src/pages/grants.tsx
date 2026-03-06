import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { Gift, Percent, Clock, ArrowRight, CheckCircle2, Star, Zap, Users } from "lucide-react";

export default function Grants() {
  useSEO({
      title: "Grant va Aksiyalar - FBA Academy",
      description: "FBA Academy maxsus chegirmalar va grant imkoniyatlari. Karyerangizni arzon narxda boshlang!",
    });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/20">
            <Zap className="mr-1 h-3 w-3" /> Cheklangan vaqt
          </Badge>
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl" data-testid="text-grants-title">Grant va Aksiyalar</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Maxsus chegirmalar va grant imkoniyatlaridan foydalaning. Karyerangizni arzon narxda boshlang!
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-grants-active">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold">Faol aksiyalar</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Erta ro'yxatdan o'tish",
                discount: "40%",
                desc: "Yangi kursga erta ro'yxatdan o'ting va 40% chegirma oling.",
                deadline: "2026 yil 30 mart",
                icon: Clock,
                gradient: "from-purple-500 to-indigo-600",
              },
              {
                title: "Do'st olib kelish",
                discount: "25%",
                desc: "Do'stingizni kursga olib keling — ikkalangiz ham 25% chegirma olasiz.",
                deadline: "Doimiy aksiya",
                icon: Users,
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                title: "Talabalar uchun grant",
                discount: "50%",
                desc: "Universitet talabalari uchun maxsus 50% grant dasturi. Talaba guvohnomasini ko'rsating.",
                deadline: "2026 yil 1 iyun",
                icon: Star,
                gradient: "from-amber-400 to-orange-500",
              },
              {
                title: "2 ta kurs = 1 bepul",
                discount: "33%",
                desc: "Bir vaqtda 2 ta kursga yozilsangiz, 3-kursni bepul olasiz.",
                deadline: "2026 yil 15 aprel",
                icon: Gift,
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                title: "Oilaviy aksiya",
                discount: "30%",
                desc: "Oila a'zolaringiz bilan birga o'qing va 30% chegirma oling.",
                deadline: "Doimiy aksiya",
                icon: Users,
                gradient: "from-pink-500 to-rose-600",
              },
              {
                title: "Bo'lib to'lash",
                discount: "0%",
                desc: "Barcha kurslar uchun 0% bo'lib to'lash imkoniyati. 3 yoki 6 oyga bo'lib to'lang.",
                deadline: "Doimiy",
                icon: Percent,
                gradient: "from-violet-500 to-purple-600",
              },
            ].map((promo, i) => (
              <Card key={i} className="border-card-border bg-card relative" data-testid={`card-promo-${i}`}>
                <div className={`h-2 rounded-t-md bg-gradient-to-r ${promo.gradient}`} />
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                      <promo.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className={`text-2xl font-extrabold bg-gradient-to-r ${promo.gradient} bg-clip-text text-transparent`}>
                      -{promo.discount}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{promo.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{promo.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{promo.deadline}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/50 py-16" data-testid="section-grants-form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <Card className="border-card-border bg-card p-6 sm:p-8 text-center">
              <Gift className="mx-auto mb-3 h-10 w-10 text-amber-500" />
              <h2 className="text-2xl font-bold">Aksiyadan foydalanish</h2>
              <p className="mt-2 mb-6 text-sm text-muted-foreground">So'rov qoldiring va maxsus chegirmangizni oling</p>
              <LeadForm source="grants" buttonText="Chegirma olish" />
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-grants-conditions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold">Aksiya shartlari</h2>
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
