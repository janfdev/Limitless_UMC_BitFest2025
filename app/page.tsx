import BlogSection from "@/components/section/blog-section";
import ContentSection from "@/components/section/content-section";
import Header from "@/components/section/header";
import HeroSection from "@/components/section/hero-section";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ContentSection />
      <BlogSection />
    </main>
  );
}
