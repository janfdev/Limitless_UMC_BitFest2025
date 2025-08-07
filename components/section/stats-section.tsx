import React from "react";
import { CountingNumber } from "../ui/count-number";
import {
  BookIcon,
  GraduationCapIcon,
  SchoolIcon,
  University,
  UsersIcon,
} from "lucide-react";

const StatsSection = () => {
  return (
    <section className="h-[70vh] mx-auto flex flex-col items-center mt-5">
      <div className="flex items-center gap-2 text-2xl">
        <div className="bg-blue-500 rounded-full py-2 px-2">
          <University size={40} className="text-white" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold">Profil Singkat</h3>
          <span className="w-10 h-1 rounded bg-blue-500"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        <div className="md:border-r-2 border-0 border-[#1d4ed8] text-[#1d4ed8] py-5 px-28 flex flex-col items-center gap-4">
          <GraduationCapIcon size={100} />
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-lg">Mahasiswa</p>
            <p className="text-xl font-semibold">
              <CountingNumber number={1000} />+
            </p>
          </div>
        </div>

        <div className="border-t-2 md:border-t-0 md:border-r-2 border-[#1d4ed8] py-5 px-28 text-[#1d4ed8] flex flex-col items-center gap-4">
          <SchoolIcon size={100} />
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-sm">Fakultas</p>
            <p className="text-xl text-center font-semibold">
              <CountingNumber number={5} />+
            </p>
          </div>
        </div>

        <div className="border-t-2 md:border-t-0 md:border-r-2 border-[#1d4ed8] py-5 px-28 text-[#1d4ed8] flex flex-col items-center gap-4">
          <BookIcon size={100} />
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-sm">Program Studi</p>
            <p className="text-xl font-semibold">
              <CountingNumber number={10} />+
            </p>
          </div>
        </div>

        <div className="border-t-2 md:border-t-0 border-[#1d4ed8] py-5 px-28 text-[#1d4ed8] flex flex-col items-center gap-4">
          <UsersIcon size={100} />
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-sm">Lulusan</p>
            <p className="text-xl font-semibold">
              <CountingNumber number={2000} />+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
