"use client";

import React from "react";
import Hero from "@/public/assets/heroo.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { CountingNumber } from "../ui/count-number";
import {
  BookIcon,
  GraduationCapIcon,
  SchoolIcon,
  University,
  UsersIcon,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      <Image
        src={Hero}
        alt="Hero Image"
        fill
        quality={100}
        className="object-cover"
        loading="lazy"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 text-white bg-black/50">
        <h1 className="text-4xl md:text-7xl font-bold text-white text-center max-w-5xl mx-auto">
          Wujudkan Impian, Bangun Karier, Mulai dari Sini.
        </h1>
        <p className="text-lg text-white mt-4">
          Bersama Universitas CIC, jadilah bagian dari perubahan masa depan
          bangsa.
        </p>
        <Link href={"https://pmb.cic.ac.id/"}>
          <Button className="mt-6 mx-auto bg-gradient-to-b from-blue-500 to-blue-900">
            Ayoo Daftar
          </Button>
        </Link>
      </div>

      <section className="w-full mx-auto flex flex-col items-center mt-5 px-4 absolute">
        {/* Title */}
        <div className="flex items-center gap-2 text-xl sm:text-2xl">
          <div className="bg-blue-500 rounded-full p-2">
            <University size={32} className="sm:size-10 text-white" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold">Profil Singkat</h2>
            <span className="w-10 h-1 rounded bg-blue-500"></span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 w-full max-w-6xl">
          {/* Card Item */}
          <div className="md:border-r-2 border-0 bg-white border-[#1d4ed8] text-[#1d4ed8] py-5 px-6 sm:px-12 lg:px-20 flex flex-col items-center gap-4">
            <GraduationCapIcon className="w-16 h-16 sm:w-20 sm:h-20" />
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-base sm:text-lg">Mahasiswa</h3>
              <p className="text-lg sm:text-xl font-semibold">
                <CountingNumber number={1000} />+
              </p>
            </div>
          </div>

          <div className="border-t-2 md:border-t-0 md:border-r-2 border-[#1d4ed8] py-5 px-6 sm:px-12 lg:px-20 text-[#1d4ed8] flex flex-col items-center gap-4">
            <SchoolIcon className="w-16 h-16 sm:w-20 sm:h-20" />
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-base sm:text-lg">Fakultas</h3>
              <p className="text-lg sm:text-xl font-semibold">
                <CountingNumber number={5} />+
              </p>
            </div>
          </div>

          <div className="border-t-2 md:border-t-0 md:border-r-2 border-[#1d4ed8] py-5 px-6 sm:px-12 lg:px-20 text-[#1d4ed8] flex flex-col items-center gap-4">
            <BookIcon className="w-16 h-16 sm:w-20 sm:h-20" />
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-base sm:text-lg">Program Studi</h3>
              <p className="text-lg sm:text-xl font-semibold">
                <CountingNumber number={10} />+
              </p>
            </div>
          </div>

          <div className="border-t-2 md:border-t-0 border-[#1d4ed8] py-5 px-6 sm:px-12 lg:px-20 text-[#1d4ed8] flex flex-col items-center gap-4">
            <UsersIcon className="w-16 h-16 sm:w-20 sm:h-20" />
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-base sm:text-lg">Lulusan</h3>
              <p className="text-lg sm:text-xl font-semibold">
                <CountingNumber number={2000} />+
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
