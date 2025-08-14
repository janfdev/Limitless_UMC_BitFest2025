import Image from "next/image";
import React from "react";
import Student from "@/public/assets/student-1.png";
import { GraduationCapIcon } from "lucide-react";

const AchievementSection = () => {
  return (
    <section className="container flex items-center justify-center max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1">
        {/* Card */}
        <div className="relative flex flex-col overflow-hidden items-center bg-primary rounded-lg justify-center p-5">
          <div className="pointer-events-none absolute w-20 h-20 bg-blue-500/20 top-0 -left-[30px] rounded-full z-50"></div>
          <Image
            src={Student}
            alt="Student-1"
            width={70}
            height={70}
            quality={100}
            className="rounded-full"
          />
          <div className="flex flex-col items-center text-center justify-center">
            <span className="flex items-center text-white gap-2 ">
              <GraduationCapIcon className="w-5" />
              <p className="text-sm">S1-Informatics Engineering</p>
            </span>
            <p className="text-sm text-white">
              The Best GPA Achievement from the Informatics Engineering
              Department, Class of 2016 with a GPA of 4.00
            </p>
          </div>
        </div>
        {/* Card End */}
      </div>
    </section>
  );
};

export default AchievementSection;
