"use client";

import React from "react";
import { CountingNumber } from "../ui/count-number";
import {
  BookIcon,
  GraduationCapIcon,
  SchoolIcon,
  UsersIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Variants reusable (tanpa filter)
const fadeIn = (
  direction: "left" | "right" | "up" | "down" = "up"
): Variants => {
  const dist = 40;
  const from =
    direction === "left"
      ? { x: -dist }
      : direction === "right"
      ? { x: dist }
      : direction === "up"
      ? { y: dist }
      : { y: -dist };

  return {
    hidden: { opacity: 0, ...from },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const StatsSection = () => {
  return (
    <motion.section
      className="w-full mx-auto flex flex-col items-center mt-5 px-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title */}
      <motion.div
        className="flex items-center justify-center gap-2 text-2xl"
        variants={fadeIn("up")}
      >
        <div className="flex flex-col items-center justify-center group">
          <h1 className="font-semibold text-blue-600 pb-1">Profil Singkat</h1>
          <span className="w-16 h-1 rounded-lg bg-yellow-400"></span>
        </div>
      </motion.div>

      {/* Grid & cards (TIDAK ubah style/layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:px-0 px-3 lg:grid-cols-4 gap-6 py-10 w-full max-w-6xl">
        <motion.div
          variants={fadeIn("left")}
          className="shadow-md rounded-lg py-5 px-6 sm:px-5 lg:px-10 text-[#1d4ed8] flex flex-col items-center gap-4"
          whileInView="show"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-center bg-primary/20 p-3 rounded-full">
            <GraduationCapIcon className="w-10 h-10 sm:w-20 sm:h-20 text-primary md:p-3 p-1" />
          </div>
          <div className="flex flex-col gap-2 items-center w-full">
            <h3 className="md:text-2xl text-lg">Mahasiswa</h3>
            <p className="text-lg sm:text-xl font-semibold">
              <CountingNumber number={1000} />+
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right")}
          className="shadow-md rounded-lg py-5 px-6 sm:px-5 lg:px-10 text-[#1d4ed8] flex flex-col items-center gap-4"
          whileInView="show"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-center bg-primary/20 rounded-full p-3">
            <SchoolIcon className="w-10 h-10 sm:w-20 sm:h-20 text-primary md:p-3 p-1" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="md:text-2xl text-lg">Fakultas</h3>
            <p className="text-lg sm:text-xl font-semibold">
              <CountingNumber number={5} />+
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left")}
          className="shadow-md rounded-lg py-5 px-6 sm:px-5 lg:px-10 text-[#1d4ed8] flex flex-col items-center gap-4"
          whileInView="show"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-center p-3 rounded-full bg-primary/20">
            <BookIcon className="w-10 h-10 sm:w-20 sm:h-20 text-primary md:p-3 p-1" />
          </div>
          <div className="flex flex-col gap-2 items-center w-full">
            <h3 className="md:text-xl text-lg">Program Studi</h3>
            <p className="text-lg sm:text-xl font-semibold">
              <CountingNumber number={10} />+
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right")}
          className="shadow-md rounded-lg py-5 px-6 sm:px-5 lg:px-10 text-[#1d4ed8] flex flex-col items-center gap-4"
          whileInView="show"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-center p-3 rounded-full bg-primary/20">
            <UsersIcon className="w-10 h-10 sm:w-20 sm:h-20 text-primary md:p-3 p-1" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="md:text-2xl text-lg">Lulusan</h3>
            <p className="text-lg sm:text-xl font-semibold">
              <CountingNumber number={2000} />+
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
