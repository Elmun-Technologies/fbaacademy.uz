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
import { useLanguage } from "@/contexts/language-context";

type LeadFormValues = z.infer<ReturnType<typeof createSchema>>;

function createSchema(t: { nameValidation: string; phoneValidation: string }) {
  return insertLeadSchema.pick({ name: true, phone: true }).extend({
    name: z.string().min(2, t.nameValidation),
    phone: z.string().min(9, t.phoneValidation),
  });
}

interface LeadFormProps {
  source?: string;
  buttonText?: string;
  compact?: boolean;
  onSuccess?: () => void;
  className?: string;
}

export default function LeadForm({ source = "website", buttonText, compact = false, onSuccess, className }: LeadFormProps) {
  const { toast } = useToast();
  const { t } = useLanguage();

  const schema = createSchema({
    nameValidation: t.form.nameValidation,
    phoneValidation: t.form.phoneValidation,
  });

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: LeadFormValues) => {
      await apiRequest("POST", "/api/leads", { ...data, source });
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

  const resolvedButtonText = buttonText || t.common.freeConsultation;

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
                  <Input
                    placeholder={t.form.name}
                    className="h-11 rounded-xl border-white/15 bg-zinc-950/70 px-4 text-white placeholder:text-zinc-500 focus-visible:ring-brand focus-visible:ring-offset-0"
                    {...field}
                    data-testid="input-lead-name"
                  />
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
                  <Input
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    className="h-11 rounded-xl border-white/15 bg-zinc-950/70 px-4 text-white placeholder:text-zinc-500 focus-visible:ring-brand focus-visible:ring-offset-0"
                    {...field}
                    data-testid="input-lead-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={mutation.isPending}
            className="h-11 w-full gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-dark font-semibold text-white shadow-md hover:from-brand-dark hover:to-brand-dark"
            data-testid="button-submit-lead"
          >
            {mutation.isPending ? t.form.sending : resolvedButtonText}
            {!mutation.isPending && <Send className="h-4 w-4" />}
          </Button>
        </div>
      </form>
    </Form>
  );
}
