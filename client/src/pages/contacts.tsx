import { useSEO } from "@/hooks/use-seo";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
import LeadForm from "@/components/lead-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiTelegram, SiInstagram } from "react-icons/si";

export default function Contacts() {
  useSEO({
    title: "Bog'lanish — FBA Academy | Toshkent",
    description: "FBA Academy bilan bog'laning. ACCA, DipIFR, Financial Modeling kurslari haqida bepul konsultatsiya. Toshkent, +998 90 123 45 67.",
    keywords: "FBA Academy kontakt, ACCA konsultatsiya, moliya ta'lim Toshkent, DipIFR ro'yxatdan o'tish",
    breadcrumb: [{ name: "Bog'lanish", url: "https://fbaacademy.uz/contacts" }],
    jsonLd: {
      "@type": "LocalBusiness",
      "@id": "https://fbaacademy.uz/#localbusiness",
      "name": "FBA Academy",
      "description": "O'zbekistondagi yetakchi moliya ta'lim platformasi. ACCA, DipIFR, Financial Modeling kurslari.",
      "url": "https://fbaacademy.uz",
      "image": "https://fbaacademy.uz/og-image.svg",
      "telephone": "+998901234567",
      "email": "info@fbaacademy.uz",
      "priceRange": "$$",
      "currenciesAccepted": "UZS",
      "paymentAccepted": "Cash, Bank Transfer, Click, Payme",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Amir Temur ko'chasi, 108",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-14 sm:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Bog'lanish" }]} light />
          </div>
          <Badge className="mb-4 rounded-full border-purple-400/30 bg-purple-500/20 px-4 py-1.5 text-sm text-purple-200 backdrop-blur-sm">Kontaktlar</Badge>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-contacts-title">Biz bilan bog'laning</h1>
          <p className="max-w-2xl text-slate-300">
            Savollaringiz bormi? Biz bilan bog'laning — yordam berishdan mamnunmiz
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-xl sm:p-8 dark:bg-card" data-testid="card-contact-form">
              <h2 className="mb-1 text-xl font-bold">So'rov qoldiring</h2>
              <p className="mb-6 text-sm text-muted-foreground">Mutaxassislarimiz tez orada siz bilan bog'lanadi</p>
              <LeadForm source="contacts" />
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, title: "Telefon", value: "+998 90 123 45 67", sub: "Dush - Shan: 9:00 - 18:00", color: "from-blue-500 to-cyan-500" },
                { icon: Mail, title: "Email", value: "info@fbaacademy.uz", sub: "24 soat ichida javob beramiz", color: "from-purple-500 to-pink-500" },
                { icon: MapPin, title: "Manzil", value: "Toshkent sh., Amir Temur ko'chasi, 108-uy", sub: "Metro: Amir Temur xiyoboni", color: "from-emerald-500 to-teal-500" },
                { icon: Clock, title: "Ish vaqti", value: "Dushanba - Shanba", sub: "9:00 - 18:00", color: "from-amber-500 to-orange-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl border bg-white p-5 shadow-md dark:bg-card" data-testid={`card-contact-info-${i}`}>
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                <a href="https://t.me/fbaacademy" target="_blank" rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border bg-white p-4 text-sm font-semibold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 dark:bg-card"
                  data-testid="link-contact-telegram"
                >
                  <SiTelegram className="h-5 w-5 text-blue-500" /> Telegram
                </a>
                <a href="https://instagram.com/fbaacademy" target="_blank" rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border bg-white p-4 text-sm font-semibold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 dark:bg-card"
                  data-testid="link-contact-instagram"
                >
                  <SiInstagram className="h-5 w-5 text-pink-500" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
