import Header from "@/components/section/header";
import HeroSection from "@/components/section/hero-section";
import StatsSection from "@/components/section/stats-section";

export default function Home() {
  return (
    <main className="h-screen mx-auto">
      <Header />
      <HeroSection />
      <StatsSection />
    </main>
  );
}
