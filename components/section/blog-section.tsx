import { TechCard } from "@/components/TechCard";
import { SidebarCard } from "../SidebarCard";
import kegiatan from "@/public/assets/kegiatan1.jpg";

export default function BlogSection() {
  return (
    <section
      className="min-h-screen w-full py-20 px-4"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 90%, #fff 40%, #0451a1 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">
          Berita seputar kampus
        </h1>
        <p className="text-white mb-6">Universitas CIC Cirebon</p>

        <div className="flex flex-col lg:flex-row gap-10">
          <TechCard
            title={`UCIC's Information Systems Study Program Receives "Excellent" Accreditation from LAM INFOKOM`}
            image={kegiatan}
            author="Admin"
            date="Februari 2025"
          />
          <div className="flex flex-col gap-4">
            <SidebarCard
              title="Exploring cost-effective cloud migration patterns and multi-cloud management"
              image={kegiatan}
            />
            <SidebarCard
              title="Implementing adaptive security frameworks for distributed workforces"
              image={kegiatan}
            />
            <SidebarCard
              title="Reducing latency in smart city deployments through fog computing"
              image={kegiatan}
            />
            <SidebarCard
              title="Enterprise applications of distributed ledger technology in supply chains"
              image={kegiatan}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
