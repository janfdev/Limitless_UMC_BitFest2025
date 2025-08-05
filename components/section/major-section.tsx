import Image from "next/image";
import React from "react";
import LogoBg from "@/public/assets/udang.png";
import Logos from "@/public/assets/logo.png";

const majors = [
  "S1 - Teknik Informatika",
  "S1 - Sistem Informasi",
  "S1 - Bisnis Digital",
  "S1 - Ilmu Komunikasi",
  "LOGO",
  "S1 - Akuntansi",
  "S1 - Manajemen",
  "S1 - Pendidikan Bahasa Inggris",
  "S1 - PGSD",
];

const MajorSection = () => {
  return (
    <section className="h-[90vh] w-full py-20 relative z-10 bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 z-0">
        <Image
          src={LogoBg}
          width={400}
          height={400}
          alt="Logo"
          className="object-contain"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <span className="bg-[#0451a1] text-white px-4 py-2 rounded-full text-lg font-medium">
          Program Studi
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-6 md:px-24">
        {majors.map((major, idx) => {
          if (major === "LOGO") {
            return (
              <div key={idx} className="flex items-center justify-center">
                <Image
                  src={Logos}
                  width={180}
                  height={180}
                  alt="UCIC Logo"
                  className="object-contain"
                />
              </div>
            );
          }

          return (
            <div
              key={idx}
              className="bg-[#0451a1] relative py-8 px-5 rounded-md shadow-md flex items-center"
            >
              <div className="absolute left-0 top-0 w-2 h-full bg-yellow-400"></div>
              <p className="text-white font-semibold text-lg ml-5 flex items-center gap-2">
                {major}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MajorSection;
