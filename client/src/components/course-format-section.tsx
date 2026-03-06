import { useLanguage } from "@/contexts/language-context";
import { Monitor, Wrench, ClipboardCheck, Layers, BookOpen, MessageCircle, Video, RefreshCw } from "lucide-react";

const FORMAT_ITEMS = [
  {
    num: "1",
    icon: Monitor,
    uz: { title: "LEKSIYALAR", desc: "Har hafta yangi bilim bloklariga kirish — nazariya va amaliyot birgalikda." },
    ru: { title: "ЛЕКЦИИ", desc: "Каждую неделю открываем доступ к новым блокам с теорией и практикой." },
    en: { title: "LECTURES", desc: "Weekly access to new knowledge blocks — theory and practice together." },
    accent: "from-purple-500 to-indigo-600",
  },
  {
    num: "2",
    icon: Wrench,
    uz: { title: "AMALIYOT", desc: "Real loyihalarda ishlash — amaliy topshiriqlar va keyslar." },
    ru: { title: "ПРАКТИКА", desc: "Работа над реальными проектами — задания и кейсы из жизни." },
    en: { title: "PRACTICE", desc: "Working on real projects — practical assignments and live cases." },
    accent: "from-indigo-500 to-blue-600",
  },
  {
    num: "3",
    icon: ClipboardCheck,
    uz: { title: "TESTLAR", desc: "Har blokdan keyin 5–10 savollik test. Oxirida — to'liq test barcha mavzular bo'yicha." },
    ru: { title: "ТЕСТИРОВАНИЕ", desc: "Тест на 5–10 вопросов после каждого блока. В конце — большой финальный тест." },
    en: { title: "TESTING", desc: "5–10 question quiz after each block. Final comprehensive test at the end." },
    accent: "from-blue-500 to-cyan-600",
  },
  {
    num: "4",
    icon: Layers,
    uz: { title: "SIMULYATOR", desc: "Real loyihalarda keyslarni yechasiz — bu imkoniyat faqat bizda mavjud!" },
    ru: { title: "СИМУЛЯТОР", desc: "Решаем кейсы на реальных проектах — такого нет нигде больше!" },
    en: { title: "SIMULATOR", desc: "Solve cases on real projects — this feature is exclusive to us!" },
    accent: "from-amber-500 to-orange-500",
    highlight: true,
  },
  {
    num: "5",
    icon: BookOpen,
    uz: { title: "UY VAZIFALARI", desc: "O'z loyihangizda uy vazifasini bajaring — mentor tekshiradi va fikr bildiradi." },
    ru: { title: "ДОМАШНИЕ ЗАДАНИЯ", desc: "Выполняем домашнее задание на своих проектах с обратной связью." },
    en: { title: "HOMEWORK", desc: "Complete assignments on your own projects — mentor checks and gives feedback." },
    accent: "from-emerald-500 to-teal-600",
  },
  {
    num: "6",
    icon: MessageCircle,
    uz: { title: "TELEGRAM CHAT", desc: "Doim telegram chatga qo'shilasiz — bitiruvchilar va mentorlar bilan muloqot." },
    ru: { title: "TELEGRAM ЧАТ", desc: "Навсегда добавляем в Telegram чат для выпускников и спикеров." },
    en: { title: "TELEGRAM CHAT", desc: "Permanent access to the Telegram chat for graduates and mentors." },
    accent: "from-sky-500 to-blue-600",
  },
  {
    num: "7",
    icon: Video,
    uz: { title: "Q&A SESSIYALAR", desc: "Har 2 haftada Zoom'da uchrashuv — spiker bilan amaliy savollarni muhokama qiling." },
    ru: { title: "Q&A СЕССИИ", desc: "Раз в 2 недели встречи в Zoom для обсуждения практических вопросов." },
    en: { title: "Q&A SESSIONS", desc: "Bi-weekly Zoom meetings to discuss practical questions with mentors." },
    accent: "from-violet-500 to-purple-600",
  },
  {
    num: "8",
    icon: RefreshCw,
    uz: { title: "YANGILANISHLARGA KIRISH", desc: "Barcha yangilanishlar — texnologiyalar o'zgarganda kurs ham yangilanadi. Doimiy kirish." },
    ru: { title: "ДОСТУП К ОБНОВЛЕНИЯМ", desc: "Все обновления бесплатно — курс обновляется по мере изменений в отрасли." },
    en: { title: "UPDATES ACCESS", desc: "Free updates forever — the course is updated as the industry evolves." },
    accent: "from-rose-500 to-pink-600",
  },
];

export default function CourseFormatSection() {
  const { lang } = useLanguage();

  const titles = {
    uz: "O'QUV FORMATI",
    ru: "ФОРМАТ ОБУЧЕНИЯ",
    en: "LEARNING FORMAT",
  };

  return (
    <section className="bg-[#09090f] py-20 px-4" data-testid="section-course-format">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-12 tracking-tight">
          {titles[lang]}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FORMAT_ITEMS.map((item) => {
            const Icon = item.icon;
            const content = item[lang];
            return (
              <div
                key={item.num}
                className={`group relative rounded-2xl border bg-[#111118] p-7 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${item.highlight ? "border-amber-500/50 shadow-amber-500/10 shadow-lg" : "border-white/10 hover:border-white/25"}`}
                data-testid={`card-format-${item.num}`}
              >
                {/* Number */}
                <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} shadow-lg`}>
                  <span className="text-base font-extrabold text-white">{item.num}</span>
                </div>

                {/* Icon (faint) */}
                <Icon className="h-6 w-6 text-white/20 absolute top-7 right-7" />

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-lg font-extrabold mb-2 leading-tight ${item.highlight ? "text-amber-400" : "text-white"}`}>
                    {content.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{content.desc}</p>
                </div>

                {item.highlight && (
                  <div className="mt-auto">
                    <span className="inline-block text-xs font-bold text-amber-400 uppercase tracking-wider border border-amber-400/40 rounded-full px-3 py-1">
                      {lang === "ru" ? "Только у нас" : lang === "en" ? "Exclusive to us" : "Faqat bizda"}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
