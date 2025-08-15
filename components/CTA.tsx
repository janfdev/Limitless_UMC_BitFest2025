"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Award,
  BadgeCheck,
  Wallet,
  School,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  const benefits = [
    {
      icon: <Wallet className="w-4 h-4" />,
      text: "Biaya Gedung dan DPP Gratis 100%",
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "Biaya Kuliah/Bulan Murah",
    },

    {
      icon: <School className="w-4 h-4" />,
      text: "Fasilitas Banyak dan Nyaman",
    },
    { icon: <BadgeCheck className="w-4 h-4" />, text: "MBKM & Mitra Industri" },
    {
      icon: <Sparkles className="w-4 h-4" />,
      text: "Prospek Karier Luas",
    },
  ];

  return (
    <section className="flex items-center justify-center mx-5 py-5">
      <div className="relative overflow-hidden rounded-3xl container mx-auto px-5 py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-8 left-6 opacity-50"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <GraduationCap className="w-10 h-10" />
        </motion.div>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-10 right-8 opacity-40"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl">
            Siap Kuliah di{" "}
            <span className="whitespace-nowrap">Universitas CIC</span>?
          </h2>
          <p className="mt-3 text-white/90 text-base sm:text-lg">
            Raih masa depanmu bersama kampus berfasilitas modern, jejaring
            industri, dan dukungan karier sejak dini.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-2 text-sm"
              >
                <span className="inline-flex items-center justify-center rounded-full bg-white/20 p-1">
                  {b.icon}
                </span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="https://pmb.cic.ac.id/" target="_blank" rel="noopener">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-700 hover:bg-white/90"
              >
                Daftar Sekarang
              </Button>
            </Link>
          </div>

          <p className="mt-3 text-xs text-white/70">
            *Syarat & ketentuan berlaku. Kuota terbatas.
          </p>
        </div>
      </div>
    </section>
  );
}
