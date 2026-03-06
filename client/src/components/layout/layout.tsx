import Header from "./header";
import Footer from "./footer";
import GamificationWidget from "@/components/gamification/widget";
import PopupManager from "@/components/popup-manager";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <GamificationWidget />
      <PopupManager />
    </div>
  );
}
