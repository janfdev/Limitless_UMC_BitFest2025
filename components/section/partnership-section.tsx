"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React from "react";
import { Partner } from "@/lib/type";
import { initials } from "@/lib/helpers";

export type AffiliateSectionProps = {
  heading?: string;
  subheading?: string;
  cta?: { label: string; href: string };
  partners: Partner[];
  className?: string;
};

function PartnerCard({ partner }: { partner: Partner }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur supports-[backdrop-filter]:bg-white/40 p-6 shadow-sm hover:shadow-md"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div
          className={`absolute -top-24 -right-20 h-36 w-36 rounded-full blur-2xl ${partner.accentClass}`}
        />
      </div>

      {/* Logo / Fallback */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-xl ring-1 ring-slate-200/60 dark:ring-slate-800/60 bg-white dark:bg-slate-800">
          {partner.logoSrc ? (
            <Image
              src={partner.logoSrc}
              alt={partner.name}
              fill
              sizes="100px"
              className="object-contain p-2"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-600 dark:text-slate-300">
              {initials(partner.name)}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate font-semibold text-slate-800 dark:text-slate-100">
              {partner.name}
            </p>
          </div>
          {partner.url && (
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {new URL(partner.url).host}
            </p>
          )}
        </div>
        {partner.url && (
          <ExternalLink className="ml-auto h-4 w-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition" />
        )}
      </div>
    </motion.div>
  );

  return partner.url ? (
    <Link
      href={partner.url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={partner.name}
    >
      {content}
    </Link>
  ) : (
    content
  );
}

export default function PartnershipSection({
  partners,
  className,
}: AffiliateSectionProps) {
  const topFive = partners.slice(0, 5);

  return (
    <section
      className={`relative mx-auto w-full px-6 md:px-10 py-16 md:py-24 ${
        className ?? ""
      }`}
      aria-labelledby="partnership-heading"
    >
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-40 w-full -translate-x-1/2 bg-gradient-to-b from-blue-100/50 to-transparent " />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="affiliate-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
        >
          Mitra Kerja Sama
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Kemitraan strategis untuk pendidikan, riset, dan pengabdian
          masyarakat.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topFive.map((p) => (
          <PartnerCard key={p.name} partner={p} />
        ))}
      </div>
    </section>
  );
}
