import { useSEO } from "@/hooks/use-seo";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import LeadForm from "@/components/lead-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiTelegram, SiInstagram } from "react-icons/si";

export default function Contacts() {
  useSEO({
    title: "Bog'lanish — FBA Academy | Toshkent",
    description: "FBA Academy bilan bog'laning. ACCA, DipIFR, Financial Modeling kurslari haqida bepul konsultatsiya. Toshkent, +998 78 113 80 90.",
    keywords: "FBA Academy kontakt, ACCA konsultatsiya, moliya ta'lim Toshkent, DipIFR ro'yxatdan o'tish",
    breadcrumb: [{ name: "Bog'lanish", url: "https://fbaacademy.uz/contacts" }],
    jsonLd: {
      "@type": "LocalBusiness",
      "@id": "https://fbaacademy.uz/#localbusiness",
      "name": "FBA Academy",
      "description": "O'zbekistondagi yetakchi moliya ta'lim platformasi. ACCA, DipIFR, Financial Modeling kurslari.",
      "url": "https://fbaacademy.uz",
      "image": "https://fbaacademy.uz/og-image.svg",
      "telephone": "+998781138090",
      "email": "fbaacademyuz1@gmail.com",
      "priceRange": "$$",
      "currenciesAccepted": "UZS",
      "paymentAccepted": "Cash, Bank Transfer, Click, Payme",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Yunusabad tumani",
        "addressLocality": "Toshkent",
        "addressRegion": "Toshkent viloyati",
        "postalCode": "100000",
        "addressCountry": "UZ",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.2995,
        "longitude": 69.2401,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00",
        },
      ],
      "sameAs": [
        "https://t.me/fbaacademy",
        "https://instagram.com/fbaacademy",
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "5000",
        "bestRating": "5",
      },
    },
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0a2e] via-[#1e1060] to-slate-900 py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Bog'lanish" }]} light />
          </div>
          <div className="mb-4 inline-block rounded-full border border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm font-semibold text-purple-200 backdrop-blur-sm">Kontaktlar</div>
          <h1 className="mb-3 text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl" data-testid="text-contacts-title">Biz bilan bog'laning</h1>
          <p className="max-w-2xl text-slate-300">
            Savollaringiz bormi? Biz bilan bog'laning — yordam berishdan mamnunmiz
          </p>
        </div>
      </section>

      <section className="bg-[#0d0d0d] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8" data-testid="card-contact-form">
              <h2 className="mb-1 text-xl font-extrabold text-white">So'rov qoldiring</h2>
              <p className="mb-6 text-sm text-zinc-400">Mutaxassislarimiz tez orada siz bilan bog'lanadi</p>
              <LeadForm source="contacts" />
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, title: "Telefon", value: "+998 78 113 80 90", sub: "Dush - Shan: 9:00 - 18:00", color: "from-blue-500 to-cyan-500", href: "tel:+998781138090" },
                { icon: Mail, title: "Email", value: "fbaacademyuz1@gmail.com", sub: "24 soat ichida javob beramiz", color: "from-purple-500 to-pink-500", href: "mailto:fbaacademyuz1@gmail.com" },
                { icon: MapPin, title: "Manzil", value: "Toshkent sh., Yunusabad tumani", sub: "Toshkent, O'zbekiston", color: "from-emerald-500 to-teal-500", href: undefined },
                { icon: Clock, title: "Ish vaqti", value: "Dushanba - Shanba", sub: "9:00 - 18:00", color: "from-amber-500 to-orange-500", href: undefined },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-5 transition-all hover:border-purple-500/30" data-testid={`card-contact-info-${i}`}>
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-zinc-300 hover:text-amber-300 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm text-zinc-300">{item.value}</p>
                    )}
                    <p className="text-xs text-zinc-500 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                <a href="https://t.me/fbaacademy" target="_blank" rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-zinc-900 p-4 text-sm font-semibold text-white transition-all hover:border-blue-500/40 hover:bg-zinc-800"
                  data-testid="link-contact-telegram"
                >
                  <SiTelegram className="h-5 w-5 text-blue-400" /> Telegram
                </a>
                <a href="https://instagram.com/fbaacademy" target="_blank" rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-zinc-900 p-4 text-sm font-semibold text-white transition-all hover:border-pink-500/40 hover:bg-zinc-800"
                  data-testid="link-contact-instagram"
                >
                  <SiInstagram className="h-5 w-5 text-pink-400" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
