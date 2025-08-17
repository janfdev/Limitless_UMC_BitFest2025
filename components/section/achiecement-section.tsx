"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Student from "@/public/assets/prestasi-1.png";
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

  // Deteksi ukuran layar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1); // HP
      } else {
        setCardsPerPage(2); // Desktop
      }
    };

    handleResize(); // cek pertama kali
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

  return (
    <section className="container max-w-6xl mx-auto p-10 ">
      <div className="flex flex-col text-2xl items-center justify-center group py-10">
        <h1 className="font-semibold text-blue-600">Mahasiswa Berprestasi</h1>
        <span className="w-16 h-1 rounded-lg bg-yellow-400"></span>
      </div>

      {/* Card wrapper */}
      <div className="flex gap-6 lg:gap-30 justify-center relative overflow-hidden p-4">
        <AnimatePresence mode="wait">
          {visibleCards.map((card) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-blue-500/5 rounded-2xl p-6 relative w-70 h-70 flex-shrink-0 shadow-md lg:w-90 lg:h-80 shadow-blue-100 drop-shadow-lg"
            >
              <div className="absolute left-15 top-5 lg:left-10 lg:top-2  transform -translate-x-1/2 fade-bottom w-[320px] h-[210px] lg:w-[440px] lg:h-[280px] ">
                <Image
                  src={card.image}
                  alt={card.name} // ✅ jadi string
                  fill
                  quality={100}
                  className="object-contain "
                />
              </div>
              <div className="mt-5 ml-32">
                <h3 className="text-blue-800 font-bold text-lg">{card.name}</h3>
                <p className="text-yellow-500 font-semibold text-[10px] lg:text-sm mb-3">
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

      {/* Tombol navigasi */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={startIndex + cardsPerPage >= cards.length}
          className="bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default AchievementSection;
