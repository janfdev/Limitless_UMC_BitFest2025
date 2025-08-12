import ActivitySection from "@/components/section/activity-section";
import Footer03 from "@/components/section/Footer";
import FacilitySection from "@/components/section/facility-section";
import Header from "@/components/section/header";
import HeroSection from "@/components/section/hero-section";
import StudyProgram from "@/components/section/study-program";
import CTA from "@/components/CTA";
import AfiliasiSection from "@/components/section/afiliasi-section";

export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      <HeroSection />
      <StudyProgram />
      <ActivitySection />
      <FacilitySection />
      <CTA/>
      <AfiliasiSection/>
      <Footer03 />
    </main>
  );
}
