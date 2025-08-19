"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import ActivityList from "../activityList";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { activity } from "@/lib/data";

const ActivitySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const [step, setStep] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Helper: tentukan visibleCount berdasarkan breakpoint
  const computeVisibleByBreakpoint = () => {
    const w = window.innerWidth;
    if (w >= 1024) return 3; // lg
    if (w >= 768) return 2; // md
    return 1; // mobile
  };

  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;

      // 1) Hitung max translate
      const containerW = containerRef.current.clientWidth;
      const totalW = trackRef.current.scrollWidth;
      const max = Math.max(0, totalW - containerW);
      setMaxTranslate(-max);

      // 2) Hitung step (lebar 1 kartu + gap)
      const firstChild = trackRef.current.children[0] as
        | HTMLElement
        | undefined;
      const cardW = firstChild?.offsetWidth ?? 0;
      const styles = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
      const stp = cardW + gap;
      setStep(stp || 1);

      // 3) Tetapkan visibleCount via breakpoint (pasti 1/2/3)
      const vis = computeVisibleByBreakpoint();
      setVisibleCount(vis);

      // 4) Clamp posisi saat resize
      const current = x.get();
      const clamped = Math.min(0, Math.max(-max, current));
      if (current !== clamped) x.set(clamped);

      // 5) Update ujung
      const maxIndex = Math.max(0, activity.length - vis);
      const approxIndex = Math.round(Math.abs(clamped) / (stp || 1));
      const safeIndex = Math.min(maxIndex, Math.max(0, approxIndex));
      setIndex(safeIndex);
      setIsAtStart(clamped === 0);
      setIsAtEnd(clamped === -max || activity.length <= vis);
    };

    measure();

    // Observers + resize
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (trackRef.current) ro.observe(trackRef.current);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [x]);

  const snapTo = (nextIndex: number) => {
    const maxIndex = Math.max(0, activity.length - visibleCount);
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

  // Sinkronkan state ujung saat x berubah (drag)
  useEffect(() => {
    const unsub = x.on("change", (val) => {
      const maxIndex = Math.max(0, activity.length - visibleCount);
      const approxIndex = Math.round(Math.abs(val) / (step || 1));
      setIndex(Math.min(maxIndex, approxIndex));
      setIsAtStart(val === 0);
      setIsAtEnd(val === maxTranslate || activity.length <= visibleCount);
    });
    return () => unsub();
  }, [x, step, maxTranslate, visibleCount]);

  return (
    <section className="bg-muted px-4 md:px-10 mt-5 py-15 pb-18" id="activity">
      <div className="mx-auto md:max-w-7xl w-auto">
        <div className="flex items-center justify-center gap-2 text-2xl">
          <div className="flex flex-col items-center justify-center group">
            <h1 className="font-semibold text-primary py-1">
              Berita & Kegiatan
            </h1>
            <span className="w-16 h-1 rounded-lg bg-secondary"></span>
          </div>
        </div>

        <div className="relative mt-5">
          {/* Slide Left */}
          <div className="absolute md:-left-10 -left-2 top-1/2 -translate-y-1/2 z-10">
            <Button
              size={"icon"}
              className="text-white cursor-pointer rounded-full "
              onClick={handlePrev}
              disabled={isAtStart}
            >
              <ArrowLeft />
            </Button>
          </div>
          {/* Slide Right */}
          <div className="absolute md:-right-10 -right-2 top-1/2 -translate-y-1/2 z-10 ">
            <Button
              size="icon"
              className="text-white cursor-pointer rounded-full"
              onClick={handleNext}
              disabled={isAtEnd}
            >
              <ArrowRight />
            </Button>{" "}
          </div>
          {/* Container  */}
          <div ref={containerRef} className="overflow-x-hidden py-5">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-2"
              drag="x"
              dragConstraints={{ left: maxTranslate, right: 0 }}
              dragElastic={0.04}
            >
              {activity.map((it) => (
                <div
                  key={it.id}
                  className="
                    flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3
                    min-w-0
                  "
                >
                  <ActivityList
                    image={it.image}
                    title={it.title}
                    label={it.label}
                    deskripsi={it.deskripsi}
                    place={it.place}
                    date={it.date}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex items-end mt-5 justify-end w-full px-5 pt-5">
          <Link
            href="/selengkapnya"
            className="group relative inline-block isolate"
          >
            <span
              aria-hidden
              className="absolute inset-0 z-0 rounded-md bg-secondary
                -rotate-5 translate-x-0 translate-y- scale-[1.05]
                shadow-md transform-gpu
                transition-transform duration-300 ease-out
                group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100
                group-hover:shadow-none
                [will-change:transform]"
            />
            <Button
              className="relative z-10 bg-blue-700 text-white rounded-md
                px-6 py-3 font-semibold shadow-md
                 hover:bg-blue-700  /* biar warna biru tetap, fokus ke animasi kuning */
                focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Selengkapnya
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
