import { Card } from "@/components/ui/card";
import { useSEO } from "@/hooks/use-seo";
import Layout from "@/components/layout/layout";
import LeadForm from "@/components/lead-form";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SiTelegram, SiInstagram } from "react-icons/si";

export default function Contacts() {
  useSEO({
      title: "Kontaktlar - FBA Academy",
      description: "FBA Academy bilan bog'laning. Telefon, email va manzil ma'lumotlari. Bepul konsultatsiya oling.",
    });

  return (
    <Layout>
      <section className="bg-gradient-to-b from-purple-50/50 to-background dark:from-purple-950/10 dark:to-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-contacts-title">Kontaktlar</h1>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Savollaringiz bormi? Biz bilan bog'laning — yordam berishdan mamnunmiz
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Card className="border-card-border bg-card p-6 sm:p-8" data-testid="card-contact-form">
                <h2 className="mb-1 text-xl font-bold">So'rov qoldiring</h2>
                <p className="mb-6 text-sm text-muted-foreground">Mutaxassislarimiz tez orada siz bilan bog'lanadi</p>
                <LeadForm source="contacts" />
              </Card>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, title: "Telefon", value: "+998 90 123 45 67", sub: "Dush - Shan: 9:00 - 18:00" },
                { icon: Mail, title: "Email", value: "info@fbaacademy.uz", sub: "24 soat ichida javob beramiz" },
                { icon: MapPin, title: "Manzil", value: "Toshkent sh., Amir Temur ko'chasi, 108-uy", sub: "Metro: Amir Temur xiyoboni" },
                { icon: Clock, title: "Ish vaqti", value: "Dushanba - Shanba", sub: "9:00 - 18:00" },
              ].map((item, i) => (
                <Card key={i} className="border-card-border bg-card p-5" data-testid={`card-contact-info-${i}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                      <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-foreground">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="flex gap-3 pt-2">
                <a href="https://t.me/fbaacademy" target="_blank" rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border/50 bg-card p-3 text-sm font-medium transition-all hover-elevate"
                  data-testid="link-contact-telegram"
                >
                  <SiTelegram className="h-5 w-5 text-blue-500" /> Telegram
                </a>
                <a href="https://instagram.com/fbaacademy" target="_blank" rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border/50 bg-card p-3 text-sm font-medium transition-all hover-elevate"
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
