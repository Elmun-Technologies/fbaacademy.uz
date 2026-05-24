import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "@/components/scroll-to-top";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Header />
      <main className="flex-1 min-w-0 pt-14 lg:pt-16">
        <div className="page-enter">{children}</div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
