import ActivitySection from "@/components/section/activity-section";
import BlogSection from "@/components/section/blog-section";
import ContentSection from "@/components/section/content-section";
import Header from "@/components/section/header";
import HeroSection from "@/components/section/hero-section";
import MajorSection from "@/components/section/major-section";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ContentSection />
      <BlogSection />
      <MajorSection />
      <ActivitySection />
    </main>
  );
}
