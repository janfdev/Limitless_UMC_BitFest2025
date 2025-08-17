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
import AffiliateSection, {
  Partner,
} from "@/components/section/partnership-section";

import Century from "@/public/assets/century.png";
import PB from "@/public/assets/pb.jpg";
import YH from "@/public/assets/yh.png";
import EF from "@/public/assets/ef.png";
import ESDA from "@/public/assets/esda.png";

const partners: Partner[] = [
  {
    name: "Bank Nusantara",
    logoSrc: "/assets/century.png",
    url: "https://banknusantara.example",
    tier: "Platinum",
  },
  {
    name: "Tech Cirebon",
    logoSrc: "/assets/pb.jpg",
    url: "https://techcirebon.example",
    tier: "Gold",
  },
  {
    name: "Pemerintah Kota",
    logoSrc: "/partners/pemkot.svg",
    url: "https://cirebonkota.example",
    tier: "Academic",
  },
  {
    name: "EduCloud",
    logoSrc: "/partners/educloud.svg",
    url: "https://educloud.example",
    tier: "Silver",
  },
  {
    name: "Media Muda",
    logoSrc: "/partners/mediamuda.svg",
    url: "https://mediamuda.example",
    tier: "Community",
  },
];

export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      <HeroSection />
      <StatsSection />
      <StudyProgram />
      <ActivitySection />
      <FacilitySection />
      <AfiliasiSection />
      <AffiliateSection
        heading="Mitra & Afiliasi UCIC"
        subheading="Bersama mitra industri, pemerintah, dan komunitas untuk dampak yang lebih luas."
        cta={{ label: "Jadi Mitra", href: "/kerjasama" }}
        partners={partners}
      />
      <AchievementSection />
      <CTA />
      <Footer03 />
    </main>
  );
}
