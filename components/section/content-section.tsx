import { ArrowRightLeft, Camera, GraduationCap, Megaphone } from "lucide-react";
import React from "react";

const ContentSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/kampus-ucic.webp')" }}
    >
      <div className="w-full items-center md:h-[400px] h-full bg-[#0451a1]/30 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 items-start lg:gap-5 gap-5 lg:px-10 px-7">
          {/* Box 1  */}
          <div className="group rounded-xl bg-white text-[#0451a1] shadow-md border p-6 hover:py-10 hover:bg-[#0451a1] hover:text-white ease-in-out flex flex-col items-center text-center space-y-4 fade-in-bottom translate-y-10 transition-all duration-990">
            <Megaphone
              size={50}
              className="text-blue-700 group-hover:text-white"
            />
            <h3 className="text-xl font-semibold">Berita Kampus</h3>
            <p className="text-sm">
              Update informasi Terbaru Dari Universitas CIC Cirebon
            </p>
            <a
              href="#"
              className="bg-[#0451a1] group-hover:bg-yellow-400 text-white group-hover:text-[#0451a1] px-4 py-2 rounded transition duration-400"
            >
              Lihat Informasi
            </a>
          </div>

          {/* Box 2  */}
          <div className="group rounded-xl bg-[#0451a1] text-white shadow-md border p-6 hover:py-10 hover:bg-white hover:text-[#0451a1] ease-in-out flex flex-col items-center text-center space-y-4 fade-in-bottom translate-y-10 transition-all duration-990">
            <Camera
              size={50}
              className="text-white group-hover:text-[#0451a1]"
            />
            <h3 className="text-xl font-semibold">Kegiatan Kampus</h3>
            <p className="text-sm">
              Update informasi Terbaru Dari Universitas CIC Cirebon
            </p>

            <a
              href="#"
              className="bg-yellow-400 text-black px-4 py-2 rounded transition duration-400 group-hover:bg-[#0451a1] group-hover:text-white"
            >
              Lihat Informasi
            </a>
          </div>

          {/* Box 3  */}
          <div className="group rounded-xl bg-white text-[#0451a1] shadow-md border p-6 hover:py-10 hover:bg-[#0451a1] hover:text-white ease-in-out flex flex-col items-center text-center space-y-4 fade-in-bottom translate-y-10 transition-all duration-990">
            <GraduationCap
              size={50}
              className="text-blue-700 group-hover:text-white"
            />
            <h3 className="text-xl font-semibold">Info Beasiswa</h3>
            <p className="text-sm">
              Update informasi Terbaru Dari Universitas CIC Cirebon
            </p>
            <a
              href="#"
              className="bg-[#0451a1] group-hover:bg-yellow-400 text-white group-hover:text-[#0451a1] px-4 py-2 rounded transition duration-400"
            >
              Lihat Informasi
            </a>
          </div>
          {/* box 4  */}
          <div className="group rounded-xl bg-[#0451a1] text-white shadow-md border p-6 hover:py-10 hover:bg-white hover:text-[#0451a1] ease-in-out flex flex-col items-center text-center space-y-4 fade-in-bottom translate-y-10 transition-all duration-990">
            <ArrowRightLeft
              size={50}
              className="text-white group-hover:text-[#0451a1]"
            />
            <h3 className="text-xl font-semibold">Kegiatan Kampus</h3>
            <p className="text-sm">
              Update informasi Terbaru Dari Universitas CIC Cirebon
            </p>

            <a
              href="#"
              className="bg-yellow-400 text-black px-4 py-2 rounded transition duration-400 group-hover:bg-[#0451a1] group-hover:text-white"
            >
              Lihat Informasi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
