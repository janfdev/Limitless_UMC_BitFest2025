"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Cover from "@/public/assets/program-studi-image.jpg";
import ActivityList from "../activityList";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const ActivitySection = () => {
  // Data dummy 4 item (bisa kamu ganti ke data asli)
  const items = new Array(6).fill(0).map((_, i) => ({
    id: i + 1,
    image: Cover,
    title: "Kegiatan Penggalangan Dana",
    place: "Kampus UCIC",
    date: "12 Juli 2025",
  }));

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const [step, setStep] = useState(0); // lebar 1 kartu + gap
  const [maxTranslate, setMaxTranslate] = useState(0); // nilai negatif maksimum
  const [index, setIndex] = useState(0); // index terdepan sedang terlihat
  const [visibleCount, setVisibleCount] = useState(1);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Hitung batas geser & step saat mount/resize
  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;

      const containerW = containerRef.current.clientWidth;
      const totalW = trackRef.current.scrollWidth;
      const max = Math.max(0, totalW - containerW);
      setMaxTranslate(-max);

      // hitung step berdasarkan width kartu pertama + gap track
      const firstChild = trackRef.current.children[0] as
        | HTMLElement
        | undefined;
      const cardW = firstChild?.offsetWidth ?? 0;
      const styles = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0; // gap-5 => ~20px
      const stp = cardW + gap;
      setStep(stp || 1);

      // berapa kartu muat di container
      const vis = stp ? Math.max(1, Math.floor(containerW / stp)) : 1;
      setVisibleCount(vis);

      // clamp posisi ketika resize
      const current = x.get();
      const clamped = Math.min(0, Math.max(-max, current));
      if (current !== clamped) x.set(clamped);

      // update ujung
      setIsAtStart(clamped === 0);
      setIsAtEnd(clamped === -max || items.length <= vis);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [x, items.length]);

  // Snap ke index tertentu
  const snapTo = (nextIndex: number) => {
    const maxIndex = Math.max(0, items.length - visibleCount);
    const safeIndex = Math.min(maxIndex, Math.max(0, nextIndex));
    const target = -(safeIndex * step);
    const clamped = Math.min(0, Math.max(maxTranslate, target));

    animate(x, clamped, { type: "spring", stiffness: 300, damping: 30 });
    setIndex(safeIndex);
    setIsAtStart(safeIndex === 0);
    setIsAtEnd(safeIndex === maxIndex || clamped === maxTranslate);
  };

  const handlePrev = () => snapTo(index - 1);
  const handleNext = () => snapTo(index + 1);

  // Sinkronkan state ujung saat x berubah (kalau nanti kamu aktifkan drag)
  useEffect(() => {
    const unsub = x.on("change", (val) => {
      const maxIndex = Math.max(0, items.length - visibleCount);
      const approxIndex = Math.round(Math.abs(val) / (step || 1));
      setIndex(Math.min(maxIndex, approxIndex));
      setIsAtStart(val === 0);
      setIsAtEnd(val === maxTranslate || items.length <= visibleCount);
    });
    return () => unsub();
  }, [x, step, maxTranslate, visibleCount, items.length]);

  return (
    <section className="bg-muted px-10 mt-5 py-20">
      <div className="mx-auto md:max-w-7xl w-auto">
        <div className="flex items-center justify-center gap-2 text-2xl">
          <div className="flex flex-col items-center justify-center group">
            <h1 className="font-semibold text-blue-600">Berita & Kegiatan</h1>
            <span className="w-16 h-1 rounded-lg bg-yellow-400"></span>
          </div>
        </div>

        {/* VIEWPORT */}
        <div className="relative mt-5">
          {/* Tombol kiri */}
          {/* <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              size="icon"
              className="text-white"
              onClick={handlePrev}
              disabled={isAtStart}
            >
              <ArrowLeft />
            </Button>
          </div> */}

          {/* Tombol kanan */}
          {/* <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              size="icon"
              className="text-white"
              onClick={handleNext}
              disabled={isAtEnd}
            >
              <ArrowRight />
            </Button>
          </div> */}

          {/* Container + Track */}
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-5"
              drag="x"
              dragConstraints={{ left: maxTranslate, right: 0 }}
              dragElastic={0.04}
            >
              {items.map((it) => (
                <div
                  key={it.id}
                  className="
                    w-[280px] flex-shrink-0
                    sm:w-[300px] md:w-[320px] lg:w-[340px]
                  "
                >
                  <ActivityList
                    image={it.image}
                    title={it.title}
                    place={it.place}
                    date={it.date}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer tombol (opsional, kalau mau tetap ada di bawah) */}
        <div className="flex w-full mt-5 items-center justify-end">
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              className="text-white"
              onClick={handlePrev}
              disabled={isAtStart}
            >
              <ArrowLeft />
            </Button>
            <Button
              size="icon"
              className="text-white"
              onClick={handleNext}
              disabled={isAtEnd}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
