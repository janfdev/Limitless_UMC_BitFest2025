"use client";

import Image from "next/image";
import Cover from "@/public/assets/program-studi-image.jpg";
import SportCenter from "@/public/assets/sport_center.jpg";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const fasilitas = [
  { title: "Lab Komputer", img: Cover },
  { title: "Convention Hall", img: Cover },
  { title: "Auditorium", img: Cover },
  { title: "Ruang Kelas", img: Cover },
  { title: "Incubator Center", img: Cover },
  { title: "Ruang Podcast", img: Cover },
  { title: "Perpustakaan", img: Cover },
  { title: "Taman Cipto Sport Center", img: SportCenter },
];

export default function FacilitySection() {
  const prefersReducedMotion = useReducedMotion();

  // 1) Variants container: untuk stagger anak-anaknya
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // 2) Variants item: dipakai untuk judul, paragraf, dan setiap card
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        // cubic-bezier yang mirip easeOut
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative py-10 px-4">
        {/* Accent background supaya terasa premium */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50/70 via-transparent to-transparent" />

        {/* Title */}
        <section className="pb-16 pt-16 md:pb-20 md:pt-24 container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center space-y-4"
          >
            <motion.h2
              variants={itemVariants}
              className="xl:text-6xl/none text-3xl font-bold sm:text-5xl tracking-tight"
            >
              Fasilitas Lengkap &amp; Modern
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Nikmati lingkungan belajar yang nyaman: ruang kelas representatif,
              lab siap praktik, hingga pusat kegiatan mahasiswa untuk tumbuh dan
              berprestasi.
            </motion.p>
          </motion.div>
        </section>

        {/* Facilities */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-2"
        >
          {fasilitas.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: prefersReducedMotion ? 0 : -6,
                scale: prefersReducedMotion ? 1 : 1.01,
              }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.99 }}
              className="group relative overflow-hidden rounded-2xl shadow transition-shadow focus-within:ring-2 ring-offset-2 ring-offset-background ring-blue-500"
              tabIndex={0}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={430}
                height={380}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                placeholder="blur"
                priority={idx < 2}
              />

              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="inline-block rounded bg-black/55 px-2 py-1 text-white text-xs sm:text-sm backdrop-blur">
                  {item.title}
                </div>
              </div>

              {/* Overlay gradient halus agar teks selalu terbaca */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  );
}
