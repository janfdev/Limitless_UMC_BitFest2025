"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Labkom from "@/public/assets/Ruang Lab Komputer.jpeg";
import Auditorium from "@/public/assets/Ruang Auditorium.jpeg";
import Kelas from "@/public/assets/Ruang Kelas.jpeg";
import Perpustakaan from "@/public/assets/Perpustakaan.jpeg";
import Programming from "@/public/assets/Lab Programming.jpeg";
import ConventionHall from "@/public/assets/convention-hall.png";
import SportCenter from "@/public/assets/sport_center.jpg";
import LabKewirausahaan from "@/public/assets/Lab Kewirausahaan (1).jpeg";
import LabMultimedia from "@/public/assets/Lab Multimedia dan Digital Marketing (2).jpeg";
import LabHalalCenter from "@/public/assets/Lab Halal Center (5).jpeg";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

type FasilitasItem = { title: string; img: StaticImageData };

const baseFasilitas: FasilitasItem[] = [
  { title: "Lab Komputer", img: Labkom },
  { title: "Convention Hall", img: ConventionHall },
  { title: "Auditorium", img: Auditorium },
  { title: "Ruang Kelas", img: Kelas },
  { title: "Lab Programming", img: Programming },
  { title: "Perpustakaan", img: Perpustakaan },
  { title: "Taman Cipto Sport Center", img: SportCenter },
  { title: "Lab Kewirausahaan", img: LabKewirausahaan },
  { title: "Lab Multimedia & Digital Marketing", img: LabMultimedia },
  { title: "Lab Halal Center", img: LabHalalCenter },
];

const PAGE_SIZE = 8; // ubah sesuai kebutuhan

export default function FacilitySection() {
  const prefersReducedMotion = useReducedMotion();
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(baseFasilitas.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const currentItems = baseFasilitas.slice(start, start + PAGE_SIZE);

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 18,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const goTo = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative pt-5 pb-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50/70 via-transparent to-transparent" />

        {/* Title */}
        <section className="py-5 container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center space-y-4"
          >
            <motion.h2
              variants={itemVariants}
              className="xl:text-6xl/none text-3xl text-white font-bold sm:text-5xl tracking-tight"
            >
              Fasilitas Lengkap &amp; Modern
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-accent/90 max-w-3xl mx-auto"
            >
              Nikmati lingkungan belajar yang nyaman: ruang kelas representatif,
              lab siap praktik, hingga pusat kegiatan mahasiswa untuk tumbuh dan
              berprestasi.
            </motion.p>
          </motion.div>
        </section>

        <motion.div
          key={page}
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-2"
        >
          {currentItems.map((item, idx) => (
            <motion.div
              key={`${item.title}-${start + idx}`} // aman meski ada judul duplikat
              variants={itemVariants}
              whileHover={{
                y: prefersReducedMotion ? 0 : -6,
                scale: prefersReducedMotion ? 1 : 1.01,
              }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.99 }}
              className="group relative overflow-hidden rounded-2xl shadow transition-shadow focus-within:ring-2 ring-offset-2 ring-offset-background ring-blue-400/60"
              tabIndex={0}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={480}
                height={180}
                className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                placeholder="blur"
                priority={idx < 2 && page === 1}
              />

              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="inline-block rounded bg-black/55 px-2 py-1 text-white text-xs sm:text-sm backdrop-blur">
                  {item.title}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <nav
          className="mt-8 flex items-center justify-center gap-2 select-none"
          aria-label="Pagination"
        >
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            className="px-3 py-2 rounded-md text-sm font-medium border border-white/20 text-white/90 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          {pages.map((p) => (
            <button
              key={p}
              onClick={() => goTo(p)}
              aria-current={page === p ? "page" : undefined}
              className={[
                "w-9 h-9 rounded-md text-sm border transition",
                "border-white/20 text-white/90 hover:bg_white/10".replace(
                  "_",
                  "/"
                ), // hindari slash autoparse
                page === p ? "bg-white/20 font-semibold" : "",
              ].join(" ")}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-2 rounded-md text-sm font-medium border border-white/20 text-white/90 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </nav>
      </section>
    </MotionConfig>
  );
}
