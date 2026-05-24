import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Send } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";

type ExtendedLeadValues = z.infer<ReturnType<typeof createExtSchema>>;

function createExtSchema(t: { nameV: string; phoneV: string; fieldV: string; engV: string }) {
  return z.object({
    name: z.string().min(2, t.nameV),
    phone: z.string().min(9, t.phoneV),
    field: z.string().min(1, t.fieldV),
    englishLevel: z.string().min(1, t.engV),
  });
}

const FIELD_OPTIONS: Record<Language, string[]> = {
  uz: ["Iqtisod", "Buxgalteriya", "Moliya", "Soliq", "Audit", "Menejment", "Boshqa soha"],
  ru: ["Экономика", "Бухгалтерия", "Финансы", "Налоги", "Аудит", "Менеджмент", "Другая сфера"],
  en: ["Economics", "Accounting", "Finance", "Tax", "Audit", "Management", "Other"],
};

const ENGLISH_LEVELS = [
  "Beginner / A1",
  "Elementary / A2",
  "Pre-Intermediate / B1",
  "Intermediate / B1+ / IELTS 5.5",
  "Upper-Intermediate / B2",
  "Advanced / C1+",
];

interface ExtendedLeadFormProps {
  source?: string;
  buttonText?: string;
  onSuccess?: () => void;
  className?: string;
}

export default function ExtendedLeadForm({ source = "website", buttonText, onSuccess, className }: ExtendedLeadFormProps) {
  const { toast } = useToast();
  const { t, lang } = useLanguage();

  const schema = createExtSchema({
    nameV: t.form.nameValidation,
    phoneV: t.form.phoneValidation,
    fieldV: t.form.fieldValidation,
    engV: t.form.englishLevelValidation,
  });

  const form = useForm<ExtendedLeadValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", field: "", englishLevel: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: ExtendedLeadValues) => {
      const enrichedSource = `${source} | soha: ${data.field} | english: ${data.englishLevel}`;
      await apiRequest("POST", "/api/leads", {
        name: data.name,
        phone: data.phone,
        source: enrichedSource,
      });
    },
    onSuccess: () => {
      toast({
        title: t.form.successTitle,
        description: t.form.successMessage,
      });
      form.reset();
      onSuccess?.();
    },
    onError: () => {
      toast({
        title: t.form.errorTitle,
        description: t.form.errorMessage,
        variant: "destructive",
      });
    },
  });

  const inputClass = "h-11 rounded-xl border-white/15 bg-zinc-950/70 px-4 text-white placeholder:text-zinc-500 focus-visible:ring-brand focus-visible:ring-offset-0";
  const resolvedButtonText = buttonText || t.course.getInfo;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className={className}>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-zinc-400">{t.form.name}</FormLabel>
                <FormControl>
                  <Input placeholder={t.form.name} className={inputClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="field"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-zinc-400">{t.form.fieldLabel}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder={t.form.selectPlaceholder} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {FIELD_OPTIONS[lang].map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="englishLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-zinc-400">{t.form.englishLevelLabel}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder={t.form.selectPlaceholder} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ENGLISH_LEVELS.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-zinc-400">{t.form.phone}</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+998 90 123 45 67" className={inputClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={mutation.isPending}
            className="h-11 w-full gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-dark font-semibold text-white shadow-md hover:from-brand-dark hover:to-brand-dark"
          >
            {mutation.isPending ? t.form.sending : resolvedButtonText}
            {!mutation.isPending && <Send className="h-4 w-4" />}
          </Button>
        </div>
      </form>
    </Form>
  );
}
