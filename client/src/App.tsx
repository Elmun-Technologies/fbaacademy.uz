import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language-context";
import PageLoader from "@/components/page-loader";

const Home = lazy(() => import("@/pages/home"));
const Catalog = lazy(() => import("@/pages/catalog"));
const CourseDetail = lazy(() => import("@/pages/dynamic-course-page"));
const Teachers = lazy(() => import("@/pages/teachers"));
const About = lazy(() => import("@/pages/about"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogDetail = lazy(() => import("@/pages/blog-detail"));
const Contacts = lazy(() => import("@/pages/contacts"));
const CabinetPage = lazy(() => import("@/pages/cabinet"));
const CareerCenter = lazy(() => import("@/pages/career-center"));
const CaseStudies = lazy(() => import("@/pages/case-studies"));
const FAQ = lazy(() => import("@/pages/faq"));
const CorporateTraining = lazy(() => import("@/pages/corporate-training"));
const Partnership = lazy(() => import("@/pages/partnership"));
const PrivacyPage = lazy(() => import("@/pages/privacy"));
const NotFound = lazy(() => import("@/pages/not-found"));

const AccaPage = lazy(() => import("@/pages/courses/acca"));
const AppliedKnowledgePage = lazy(() => import("@/pages/courses/applied-knowledge"));
const AppliedSkillsPage = lazy(() => import("@/pages/courses/applied-skills"));
const StrategicProfessionalPage = lazy(() => import("@/pages/courses/strategic-professional"));
const DipIFRPage = lazy(() => import("@/pages/courses/dipifr"));
const FinancialModelingPage = lazy(() => import("@/pages/courses/financial-modeling"));
const JurisprudencePage = lazy(() => import("@/pages/courses/jurisprudence"));
const OneCPage = lazy(() => import("@/pages/courses/one-c"));
const MsfoPage = lazy(() => import("@/pages/courses/msfo"));
const F3FinancialAccountingPage = lazy(() => import("@/pages/courses/f3-financial-accounting"));

function LegacyAchievementsRedirect() {
  const [, navigate] = useLocation();

  useEffect(() => {
    navigate("/case-studies", { replace: true });
  }, [navigate]);

  return null;
}

function LegacyGrantsRedirect() {
  const [, navigate] = useLocation();

  useEffect(() => {
    navigate("/contacts", { replace: true });
  }, [navigate]);

  return null;
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/courses" component={Catalog} />

        <Route path="/course/acca" component={AccaPage} />
        <Route path="/course/applied-knowledge" component={AppliedKnowledgePage} />
        <Route path="/course/applied-skills" component={AppliedSkillsPage} />
        <Route path="/course/strategic-professional" component={StrategicProfessionalPage} />
        <Route path="/course/dipifr" component={DipIFRPage} />
        <Route path="/course/financial-modeling" component={FinancialModelingPage} />
        <Route path="/course/jurisprudence" component={JurisprudencePage} />
        <Route path="/course/1c-course" component={OneCPage} />
        <Route path="/course/msfo" component={MsfoPage} />
        <Route path="/course/f3-financial-accounting" component={F3FinancialAccountingPage} />

        <Route path="/course/:id" component={CourseDetail} />

        <Route path="/teachers" component={Teachers} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/cabinet" component={CabinetPage} />
        <Route path="/dashboard" component={CabinetPage} />
        <Route path="/career" component={CareerCenter} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/faq" component={FAQ} />
        <Route path="/corporate" component={CorporateTraining} />
        <Route path="/partnership" component={Partnership} />
        <Route path="/grants" component={LegacyGrantsRedirect} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/achievements" component={LegacyAchievementsRedirect} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
