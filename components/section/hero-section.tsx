"use client";

import React from "react";
import Hero from "@/public/assets/heroo.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full  ">
      <Image
        src={Hero}
        alt="Hero Image"
        fill
        quality={100}
        className="object-cover"
        loading="lazy"
      />

      <div className="absolute inset-0 z-10 flex items-center justify-start">
        {/* Gradient overlay */}
        <div className="w-full h-full bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center px-6 md:px-16">
          <div className="max-w-xl text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Raih Masa Depan Cemerlang <br /> Bersama{" "}
              <span className="text-blue-400">Universitas CIC</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mt-4 leading-relaxed">
              Tempat terbaik untuk mengembangkan bakat, membangun karier, dan
              menjadi bagian dari generasi yang membawa perubahan.
            </p>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Link href="https://pmb.cic.ac.id/">
                {/* <Button className="mt-6 bg-gradient-to-r text-white from-blue-500 to-blue-800 shadow-lg shadow-blue-500/40 hover:scale-105 transition-transform">
                  Daftar Sekarang
                </Button> */}

                <Button
                  className="mt-6 text-white font-semibold px-6 py-3 
               rounded-md border border-blue-500/80 
               bg-blue-500/70 backdrop-blur-md 
               shadow-lg shadow-blue-500/20 
               hover:scale-105 hover:bg-blue-500/60 
               transition-all duration-300"
                >
                  Daftar Sekarang
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
