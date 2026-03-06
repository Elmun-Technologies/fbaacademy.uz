import { useSEO } from "@/hooks/use-seo";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiTelegram, SiInstagram } from "react-icons/si";

export default function Contacts() {
  useSEO({
    title: "Kontaktlar - FBA Academy",
    description: "FBA Academy bilan bog'laning. Telefon, email va manzil ma'lumotlari. Bepul konsultatsiya oling.",
  });

  return (
    <Layout>
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-contacts-title">Kontaktlar</h1>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            Savollaringiz bormi? Biz bilan bog'laning — yordam berishdan mamnunmiz
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6 sm:p-8 dark:bg-card" data-testid="card-contact-form">
              <h2 className="mb-1 text-xl font-bold">So'rov qoldiring</h2>
              <p className="mb-6 text-sm text-muted-foreground">Mutaxassislarimiz tez orada siz bilan bog'lanadi</p>
              <LeadForm source="contacts" />
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, title: "Telefon", value: "+998 90 123 45 67", sub: "Dush - Shan: 9:00 - 18:00" },
                { icon: Mail, title: "Email", value: "info@fbaacademy.uz", sub: "24 soat ichida javob beramiz" },
                { icon: MapPin, title: "Manzil", value: "Toshkent sh., Amir Temur ko'chasi, 108-uy", sub: "Metro: Amir Temur xiyoboni" },
                { icon: Clock, title: "Ish vaqti", value: "Dushanba - Shanba", sub: "9:00 - 18:00" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl bg-slate-50 p-4 dark:bg-card" data-testid={`card-contact-info-${i}`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-background">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                <a href="https://t.me/fbaacademy" target="_blank" rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-50 p-3 text-sm font-medium transition-all dark:bg-card"
                  data-testid="link-contact-telegram"
                >
                  <SiTelegram className="h-5 w-5 text-blue-500" /> Telegram
                </a>
                <a href="https://instagram.com/fbaacademy" target="_blank" rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-50 p-3 text-sm font-medium transition-all dark:bg-card"
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
