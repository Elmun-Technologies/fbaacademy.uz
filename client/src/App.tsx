import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Catalog from "@/pages/catalog";
import CourseDetail from "@/pages/course-detail";
import Teachers from "@/pages/teachers";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogDetail from "@/pages/blog-detail";
import Contacts from "@/pages/contacts";
import CareerCenter from "@/pages/career-center";
import CaseStudies from "@/pages/case-studies";
import FAQ from "@/pages/faq";
import CorporateTraining from "@/pages/corporate-training";
import Partnership from "@/pages/partnership";
import Grants from "@/pages/grants";

import AccaPage from "@/pages/courses/acca";
import AppliedKnowledgePage from "@/pages/courses/applied-knowledge";
import AppliedSkillsPage from "@/pages/courses/applied-skills";
import StrategicProfessionalPage from "@/pages/courses/strategic-professional";
import DipIFRPage from "@/pages/courses/dipifr";
import FinancialModelingPage from "@/pages/courses/financial-modeling";
import JurisprudencePage from "@/pages/courses/jurisprudence";
import OneCPage from "@/pages/courses/one-c";

function Router() {
  return (
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

      <Route path="/course/:id" component={CourseDetail} />

      <Route path="/teachers" component={Teachers} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogDetail} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/career" component={CareerCenter} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/faq" component={FAQ} />
      <Route path="/corporate" component={CorporateTraining} />
      <Route path="/partnership" component={Partnership} />
      <Route path="/grants" component={Grants} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
