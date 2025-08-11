import ActivitySection from "@/components/section/activity-section";
import Footer03 from "@/components/section/Footer";
import Header from "@/components/section/header";
import HeroSection from "@/components/section/hero-section";
import StatsSection from "@/components/section/stats-section";
import StudyProgram from "@/components/section/study-program";
import CTA01 from "@/components/ui/CTA";

export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      <HeroSection />
      <StatsSection />
      <StudyProgram />
      <ActivitySection />
      
      <CTA01 />
      <Footer03 />
    </main>
  );
}
