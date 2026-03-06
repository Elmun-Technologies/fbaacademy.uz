import { useLanguage } from "@/contexts/language-context";
import { Gift, ArrowRight } from "lucide-react";

interface Bonus {
  logo: string;
  nameUz: string; nameRu: string; nameEn: string;
  descUz: string; descRu: string; descEn: string;
  durationUz: string; durationRu: string; durationEn: string;
  priceUz: string; priceRu: string; priceEn: string;
}

interface CourseBonusesSectionProps {
  bonuses: Bonus[];
  totalUz?: string;
  totalRu?: string;
  totalEn?: string;
}

export default function CourseBonusesSection({ bonuses, totalUz, totalRu, totalEn }: CourseBonusesSectionProps) {
  const { lang } = useLanguage();

  const titles = {
    uz: "BONUSLAR",
    ru: "БОНУСЫ",
    en: "BONUSES",
  };
  const freeLbl = { uz: "BEPUL", ru: "БЕСПЛАТНО", en: "FREE" };
  const accessLbl = { uz: "Kirish muddati:", ru: "Срок доступа:", en: "Access period:" };
  const priceLbl = { uz: "Bonus narxi:", ru: "Стоимость бонуса:", en: "Bonus value:" };
  const totalLbl = { uz: "UMUMIY BONUSLAR QIYMATI:", ru: "ОБЩАЯ СТОИМОСТЬ БОНУСОВ:", en: "TOTAL BONUS VALUE:" };
  const totalFreeLbl = { uz: "KURSDA BEPUL OLASIZ!", ru: "НА КУРСЕ ВЫ ПОЛУЧИТЕ БЕСПЛАТНО!", en: "YOU GET THEM FOR FREE IN THE COURSE!" };

  const total = lang === "ru" ? totalRu : lang === "en" ? totalEn : totalUz;

  return (
    <section className="bg-[#09090f] py-20 px-4 border-t border-white/5" data-testid="section-course-bonuses">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/20 border border-amber-400/40">
            <Gift className="h-6 w-6 text-amber-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{titles[lang]}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: bonus list */}
          <div className="space-y-1">
            {bonuses.map((bonus, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-[#111118] p-6" data-testid={`card-bonus-${i}`}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="text-xl font-extrabold text-white mb-0.5">
                      {lang === "ru" ? bonus.nameRu : lang === "en" ? bonus.nameEn : bonus.nameUz}
                    </div>
                    <div className="text-sm text-slate-400">
                      {lang === "ru" ? bonus.descRu : lang === "en" ? bonus.descEn : bonus.descUz}
                    </div>
                  </div>
                  <span className="shrink-0 inline-block rounded-lg bg-amber-400 px-3 py-1.5 text-sm font-extrabold text-black">
                    {freeLbl[lang]}
                  </span>
                </div>
                <div className="flex items-center gap-6 border-t border-white/5 pt-3 mt-3">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{accessLbl[lang]}</div>
                    <div className="text-sm font-bold text-amber-400">
                      {lang === "ru" ? bonus.durationRu : lang === "en" ? bonus.durationEn : bonus.durationUz}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{priceLbl[lang]}</div>
                    <div className="text-sm font-bold text-slate-300 line-through">
                      {lang === "ru" ? bonus.priceRu : lang === "en" ? bonus.priceEn : bonus.priceUz}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {total && (
              <div className="rounded-2xl bg-amber-400/10 border border-amber-400/30 px-6 py-4 mt-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">{totalLbl[lang]}</div>
                <div className="text-2xl font-extrabold text-white mt-1">{total}</div>
                <div className="text-sm font-bold text-amber-400 mt-1">{totalFreeLbl[lang]}</div>
              </div>
            )}
          </div>

          {/* Right: what you get box */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-400/5 p-8 sticky top-24">
            <h3 className="text-xl font-extrabold text-white mb-2">
              {lang === "ru" ? "Дополнительные материалы:" : lang === "en" ? "Additional materials:" : "Qo'shimcha materiallar:"}
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              {lang === "ru"
                ? "Вы получите 40+ готовых материалов, которые экономят время и усилия:"
                : lang === "en"
                ? "You'll receive 40+ ready-made materials that save you time and effort:"
                : "Vaqtingizni tejovchi 40+ tayyor materiallar olasiz:"}
            </p>
            <ul className="space-y-3">
              {[
                { uz: "Professional bilimlar bazasi va manba to'plamlari", ru: "4 книги и справочника по основам и методологии", en: "4 books and reference guides on methodology" },
                { uz: "Amaliyot uchun 7 ta tekshirish ro'yxati", ru: "7 гайдов и чек-листов по настройке и анализу", en: "7 guides and checklists for setup and analysis" },
                { uz: "10+ shablon va jadvallar ish jarayoni uchun", ru: "10+ шаблонов и таблиц для работы и анализа", en: "10+ templates and spreadsheets for work and analysis" },
                { uz: "9 ta prompt va skriptlar — ish tezligini oshirish uchun", ru: "9 мощных промптов и скриптов для автоматизации", en: "9 powerful prompts and scripts for automation" },
                { uz: "8 ta tekshirish ro'yxati — audit va optimizatsiya", ru: "8 чек-листов: от аудита до оптимизации", en: "8 checklists: from audit to optimization" },
                { uz: "Mijozlar bilan ishlash uchun 3 ta hujjat", ru: "3 документа для работы с клиентами", en: "3 client work documents" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
                  <span className="text-sm text-slate-300">
                    {lang === "ru" ? item.ru : lang === "en" ? item.en : item.uz}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
