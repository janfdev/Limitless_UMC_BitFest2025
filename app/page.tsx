import Header from "@/components/section/header";
import HeroSection from "@/components/section/hero-section";
import StatsSection from "@/components/section/stats-section";
import StudyProgram from "@/components/section/study-program";

export default function Home() {
  return (
    <main className=" mx-auto">
      <Header />
      <HeroSection />
      <StatsSection />
      <StudyProgram />
    </main>
  );
}
