import React from "react";
import { CountingNumber } from "../ui/count-number";
import {
  BookIcon,
  GraduationCapIcon,
  SchoolIcon,
  UsersIcon,
} from "lucide-react";

const StatsSection = () => {
  return (
    <section className="w-full mx-auto flex flex-col items-center mt-5 px-4">
      {/* Title */}
      <div className="flex items-center justify-center gap-2 text-2xl">
        <div className="flex flex-col items-center justify-center group">
          <h1 className="font-semibold text-blue-600">Profil Singkat</h1>
          <span className="w-16 h-1 rounded-lg bg-yellow-400"></span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:px-0 px-3 lg:grid-cols-4 gap-6 py-10 w-full max-w-6xl">
        {/* Card Item */}
        <div className="shadow-md rounded-lg py-5 px-6 sm:px-5 lg:px-10 text-[#1d4ed8] flex flex-col items-center gap-4">
          <div className="flex items-center justify-center bg-primary/20 p-3 rounded-full">
            <GraduationCapIcon className="w-10 h-10 sm:w-20 sm:h-20 text-primary md:p-3 p-1" />
          </div>
          <div className="flex flex-col gap-2 items-center w-full">
            <h3 className="md:text-2xl text-lg">Mahasiswa</h3>
            <p className="text-lg sm:text-xl font-semibold">
              <CountingNumber number={1000} />+
            </p>
          </div>
        </div>

        <div className="shadow-md rounded-lg py-5 px-6 sm:px-5 lg:px-10 text-[#1d4ed8] flex flex-col items-center gap-4">
          <div className="flex items-center justify-center bg-primary/20 rounded-full p-3">
            <SchoolIcon className="w-10 h-10 sm:w-20 sm:h-20 text-primary md:p-3 p-1" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="md:text-2xl text-lg">Fakultas</h3>
            <p className="text-lg sm:text-xl font-semibold">
              <CountingNumber number={5} />+
            </p>
          </div>
        </div>

        <div className="shadow-md rounded-lg py-5 px-6 sm:px-5 lg:px-10 text-[#1d4ed8] flex flex-col items-center gap-4">
          <div className="flex items-center justify-center p-3 rounded-full bg-primary/20">
            <BookIcon className="w-10 h-10 sm:w-20 sm:h-20 text-primary md:p-3 p-1" />
          </div>
          <div className="flex flex-col gap-2 items-center w-full">
            <h3 className="md:text-xl text-lg">Program Studi</h3>
            <p className="text-lg sm:text-xl font-semibold">
              <CountingNumber number={10} />+
            </p>
          </div>
        </div>

        <div className="shadow-md rounded-lg py-5 px-6 sm:px-5 lg:px-10 text-[#1d4ed8] flex flex-col items-center gap-4">
          <div className="flex items-center justify-center p-3 rounded-full bg-primary/20">
            <UsersIcon className="w-10 h-10 sm:w-20 sm:h-20 text-primary md:p-3 p-1" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="md:text-2xl text-lg">Lulusan</h3>
            <p className="text-lg sm:text-xl font-semibold">
              <CountingNumber number={2000} />+
            </p>
          </div>
        </div>

        {/* <div className="shadow-md rounded-lg py-5 px-6 sm:px-12 lg:px-20 text-[#1d4ed8] flex flex-col items-center gap-4">
          <SchoolIcon className="w-16 h-16 sm:w-20 sm:h-20" />
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-base sm:text-lg">Fakultas</h3>
            <p className="text-lg sm:text-xl font-semibold">
              <CountingNumber number={5} />+
            </p>
          </div>
        </div>

        <div className="shadow-md rounded-lg py-5 px-6 sm:px-12 lg:px-20 text-[#1d4ed8] flex flex-col items-center gap-4">
          <BookIcon className="w-16 h-16 sm:w-20 sm:h-20" />
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-base sm:text-lg">Program Studi</h3>
            <p className="text-lg sm:text-xl font-semibold">
              <CountingNumber number={10} />+
            </p>
          </div>
        </div>

        <div className="shadow-md rounded-lg py-5 px-6 sm:px-12 lg:px-20 text-[#1d4ed8] flex flex-col items-center gap-4">
          <UsersIcon className="w-16 h-16 sm:w-20 sm:h-20" />
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-base sm:text-lg">Lulusan</h3>
            <p className="text-lg sm:text-xl font-semibold">
              <CountingNumber number={2000} />+
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default StatsSection;
