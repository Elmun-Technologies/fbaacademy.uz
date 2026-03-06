import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Send } from "lucide-react";
import { insertLeadSchema } from "@shared/schema";

const leadFormSchema = insertLeadSchema.pick({ name: true, phone: true }).extend({
  name: z.string().min(2, "Ism kamida 2 ta belgidan iborat bo'lishi kerak"),
  phone: z.string().min(9, "Telefon raqamni kiriting"),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

interface LeadFormProps {
  source?: string;
  buttonText?: string;
  compact?: boolean;
  onSuccess?: () => void;
  className?: string;
}

export default function LeadForm({ source = "website", buttonText = "Konsultatsiya olish", compact = false, onSuccess, className }: LeadFormProps) {
  const { toast } = useToast();

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: { name: "", phone: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: LeadFormValues) => {
      await apiRequest("POST", "/api/leads", { ...data, source });
    },
    onSuccess: () => {
      toast({
        title: "Muvaffaqiyatli!",
        description: "So'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz.",
      });
      form.reset();
      onSuccess?.();
    },
    onError: () => {
      toast({
        title: "Xatolik",
        description: "Iltimos, qaytadan urinib ko'ring.",
        variant: "destructive",
      });
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className={className}>
        <div className={compact ? "flex flex-col gap-3" : "flex flex-col gap-4"}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Ismingiz" {...field} data-testid="input-lead-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="+998 90 123 45 67" {...field} data-testid="input-lead-phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={mutation.isPending} className="w-full gap-2" data-testid="button-submit-lead">
            {mutation.isPending ? "Yuborilmoqda..." : buttonText}
            {!mutation.isPending && <Send className="h-4 w-4" />}
          </Button>
        </div>
      </form>
    </Form>
  );
}
