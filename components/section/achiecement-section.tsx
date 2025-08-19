"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Kristianto from "@/public/assets/prestasi-1.png";
import Noni from "@/public/assets/prestasi-2.png";
import Nopi from "@/public/assets/prestasi-3.png";

const AchievementSection = () => {
  const cards = [
    {
      name: "Noni Apriliani",
      major: "S1 Teknik Informatika",
      desc: "Raih IPK terbaik jurusan S1 Teknik Informatika angkatan tahun 2017 dengan IPK 4.00",
      image: Noni,
    },
    {
      name: "Nopi Fitrianingsih",
      major: "S1 Sistem Informasi Komputerisasi Akutansi",
      desc: "Raih IPK terbaik jurusan S1 Sistem Informasi Komputer Akutansi angkatan tahun 2016 dengan IPK 3,95",
      image: Nopi,
    },
    {
      name: "Kristianto",
      major: "S1 Teknik Informatika",
      desc: "Raih IPK Terbaik dari jurusan Teknik Informatika Angkatan 2016 dengan IPK 4,00",
      image: Kristianto,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  // Responsif: 1 kartu di mobile, 2 di desktop
  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  const next = () => {
    if (startIndex + cardsPerPage < cards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Hitung step navigasi
  const totalSteps = Math.max(cards.length - cardsPerPage + 1, 1);
  const currentStep = Math.min(startIndex + 1, totalSteps);

  return (
    <section className="container max-w-6xl mx-auto p-10">
      <div className="flex flex-col text-2xl lg:text-3xl items-center justify-center group py-10">
        <h1 className="font-semibold text-primary">Mahasiswa Berprestasi</h1>
        <span className="w-16 h-1 rounded-lg bg-secondary"></span>
      </div>

      {/* Card wrapper */}
      <div className="flex gap-6 lg:gap-30 justify-center relative overflow-hidden p-4 ">
        <AnimatePresence mode="wait">
          {visibleCards.map((card) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-blue-500/5 p-6 relative w-70 h-70 flex-shrink-0 shadow-md lg:w-90 lg:h-80 shadow-blue-100 rounded-b-lg "
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-t-3xl " />
              <div className="absolute left-15 top-5 lg:left-10 lg:top-2 transform -translate-x-1/2 fade-bottom w-[320px] h-[210px] lg:w-[440px] lg:h-[280px]">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div className="mt-5 ml-32">
                <h3 className="text-blue-800 font-bold text-lg">{card.name}</h3>
                <p className="text-yellow-light font-semibold text-[10px] lg:text-sm mb-3">
                  {card.major}
                </p>
                <p className="text-gray-700 text-[10px] lg:text-sm">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <button
              key={i}
              aria-label={`Ke slide ${i + 1}`}
              onClick={() => setStartIndex(i)}
              className={[
                "h-2.5 rounded-full transition-all",
                i === startIndex
                  ? "w-6 bg-blue-700"
                  : "w-2.5 bg-blue-200 hover:bg-blue-300",
              ].join(" ")}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-600">
            {currentStep}/{totalSteps}
          </span>
          <button
            onClick={prev}
            disabled={startIndex === 0}
            aria-label="Sebelumnya"
            className={[
              "inline-flex items-center justify-center rounded-full",
              "h-10 w-10 md:h-11 md:w-11",
              "bg-blue-800 text-white shadow hover:shadow-md",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-transform active:scale-95",
            ].join(" ")}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={startIndex + cardsPerPage >= cards.length}
            aria-label="Berikutnya"
            className={[
              "inline-flex items-center justify-center rounded-full",
              "h-10 w-10 md:h-11 md:w-11",
              "bg-blue-800 text-white shadow hover:shadow-md",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-transform active:scale-95",
            ].join(" ")}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
