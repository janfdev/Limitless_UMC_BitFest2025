import ActivitySection from "@/components/section/activity-section";
import Footer03 from "@/components/section/Footer";
import FacilitySection from "@/components/section/facility-section";
import Header from "@/components/section/header";
import HeroSection from "@/components/section/hero-section";
import StudyProgram from "@/components/section/study-program";
import CTA from "@/components/CTA";
import StatsSection from "@/components/section/stats-section";
import AchievementSection from "@/components/section/achiecement-section";
import PartnershipSection from "@/components/section/partnership-section";
import { partners } from "@/lib/data";
import AchievementSection2 from "@/components/section/achievements1-section";

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
      {/* <AchievementSection2 /> */}
      <PartnershipSection
        cta={{ label: "Jadi Mitra", href: "/kerjasama" }}
        partners={partners}
      />
      <CTA />
      <Footer03 />
    </main>
  );
}
