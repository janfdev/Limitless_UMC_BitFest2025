import ActivitySection from "@/components/section/activity-section";
import Footer03 from "@/components/section/Footer";
import FacilitySection from "@/components/section/facility-section";
import Header from "@/components/section/header";
import HeroSection from "@/components/section/hero-section";
import StudyProgram from "@/components/section/study-program";
import CTA from "@/components/CTA";
import AfiliasiSection from "@/components/section/afiliasi-section";
import StatsSection from "@/components/section/stats-section";
import AchievementSection from "@/components/section/achievement-section";

export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      <HeroSection />
      <StatsSection />
      <StudyProgram />
      <ActivitySection />
      <FacilitySection />
      <AchievementSection />
      <CTA />
      <Footer03 />
    </main>
  );
}
