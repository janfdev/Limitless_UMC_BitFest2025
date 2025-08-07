"use client";

import React from "react";
import Hero from "@/public/assets/heroo.jpg";
import Image from "next/image";
import { Button } from "../ui/button";

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
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          error reiciendis iure eveniet provident dolorum modi. Asperiores
          deserunt cum fugiat.
        </h1>
        <Button className="text-lg px-6 py-3 mt-2">Ayoo Daftar</Button>
      </div>
    </section>
  );
};

export default HeroSection;
