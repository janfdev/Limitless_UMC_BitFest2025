"use client";

import React from "react";
import Hero from "@/public/assets/heroo.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

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
    </section>
  );
};

export default HeroSection;
