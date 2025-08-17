"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Student from "@/public/assets/prestasi-1.png";
import Noni from "@/public/assets/prestasi-2.png";
import Nopi from "@/public/assets/prestasi-3.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AchievementSection2 = () => {
  // TIDAK mengubah struktur data
  const cards = [
    {
      name: "Noni Apriliani",
      major: "S1 Teknik Informatika",
      desc: "Raih IPK terbaik jurusan S1 Teknik Informatika angkatan tahun 2017 dengan IPK 4.00",
      image: Noni,
    },
    {
      name: "Nopi",
      major: "S1 Sistem Informasi Komputerisasi Akutansi",
      desc: "Raih IPK terbaik jurusan S1 Sistem Informasi Komputerisasi Akutansi angkatan tahun 2016 dengan IPK 3,95",
      image: Nopi,
    },
    {
      name: "Putri",
      major: "S1 Teknik Informatika",
      desc: "Berprestasi di bidang penelitian AI dan publikasi jurnal internasional.",
      image: Student,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  // Responsif: 1 kartu di mobile, 2 di md+
  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  const next = useCallback(() => {
    if (startIndex + cardsPerPage < cards.length) setStartIndex((s) => s + 1);
  }, [startIndex, cardsPerPage, cards.length]);

  const prev = useCallback(() => {
    if (startIndex > 0) setStartIndex((s) => s - 1);
  }, [startIndex]);

  // Keyboard nav (← →)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Variants animasi
  const cardVariants: Variants = {
    initial: { opacity: 0, x: 40, filter: "blur(4px)" },
    animate: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -40,
      filter: "blur(6px)",
      transition: { duration: 0.35, ease: "easeIn" },
    },
    hover: { y: -4, scale: 1.01, transition: { duration: 0.2 } },
  };

  const totalSteps = Math.max(cards.length - cardsPerPage + 1, 1);
  const currentStep = Math.min(startIndex + 1, totalSteps);

  return (
    <section className="container max-w-6xl mx-auto px-4 md:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2 pb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-500 text-center">
          Mahasiswa Berprestasi
        </h1>
        <span className="w-16 h-1 rounded-full bg-yellow-400" />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute -top-8 -left-10 h-44 w-44 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-8 -right-10 h-48 w-48 rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <div
              key={`${startIndex}-${cardsPerPage}`}
              className="grid gap-5 md:gap-6"
              style={{
                gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
              }}
            >
              {visibleCards.map((card) => (
                <motion.article
                  key={card.name}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover="hover"
                  className={[
                    "group relative overflow-hidden rounded-2xl",
                    "bg-white/70 backdrop-blur-lg",
                    "ring-1 ring-black/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]",
                    "p-4 md:p-5 lg:p-6",
                    "transition-transform",
                  ].join(" ")}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-400" />

                  <div className="flex items-center gap-4 md:gap-5">
                    <div className="relative shrink-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-yellow-50 ring-1 ring-black/5 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        sizes="(max-width: 768px) 96px, 128px"
                        className="object-contain p-2 md:p-3"
                        priority
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base md:text-lg font-semibold text-blue-900 truncate">
                        {card.name}
                      </h3>
                      <p className="text-xs md:text-sm font-medium text-yellow-600 mb-2 md:mb-3">
                        {card.major}
                      </p>
                      <p className="text-[11px] md:text-sm leading-relaxed text-slate-700">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -bottom-16 -right-10 w-40 h-40 rounded-full bg-blue-300/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.article>
              ))}
            </div>
          </AnimatePresence>
        </div>

        {/* Controls */}
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
      </div>
    </section>
  );
};

export default AchievementSection2;
