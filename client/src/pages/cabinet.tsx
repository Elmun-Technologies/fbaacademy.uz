import { useEffect } from "react";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/use-seo";
import { ArrowRight, Lock, ShieldCheck, UserPlus } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { STUDENT_DASHBOARD_URL } from "@/lib/constants";

export default function CabinetPage() {
  const { t } = useLanguage();
  const c = t.cabinetPage;

  useSEO({
    title: c.seoTitle,
    description: c.seoDescription,
    noindex: true,
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.assign(STUDENT_DASHBOARD_URL);
    }, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20" data-testid="section-cabinet">
        <div className="absolute inset-0 bg-gradient-to-br from-[#11133c] via-[#1a2a4a] to-slate-900" />
        <div className="relative mx-auto max-w-lg px-4 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/90 p-8 shadow-2xl backdrop-blur sm:p-10">
            <Badge className="mb-4 rounded-full border-indigo-500/30 bg-indigo-900/30 text-indigo-300">
              {c.badge}
            </Badge>
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl" data-testid="text-cabinet-title">
              {c.title}
            </h1>
            <p className="mt-2 text-sm text-zinc-400">{c.subtitle}</p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6">
              <p className="text-lg font-bold text-white">{c.welcome}</p>
              <p className="mt-1 text-xs text-zinc-500">{c.redirecting}</p>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-brand font-bold text-white hover:bg-brand/90"
                  data-testid="button-cabinet-sign-in"
                >
                  <a href={STUDENT_DASHBOARD_URL}>
                    <Lock className="mr-2 h-4 w-4" />
                    {c.signIn}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-white/20 bg-transparent font-bold text-white hover:bg-white/10"
                  data-testid="button-cabinet-register"
                >
                  <a href={STUDENT_DASHBOARD_URL}>
                    <UserPlus className="mr-2 h-4 w-4" />
                    {c.register}
                  </a>
                </Button>
              </div>

              <a
                href={STUDENT_DASHBOARD_URL}
                className="mt-4 block text-center text-xs text-zinc-500 transition-colors hover:text-brand-accent-light"
                data-testid="link-cabinet-forgot-password"
              >
                {c.forgotPassword}
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-xs text-zinc-500">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              {c.secureNote}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
