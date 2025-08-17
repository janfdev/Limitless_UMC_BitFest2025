"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React from "react";

// ================= Types =================
export type Partner = {
  name: string;
  logoSrc?: string; // /public path or remote URL
  url?: string;
  tier?: "Platinum" | "Gold" | "Silver" | "Academic" | "Community" | string;
};

export type AffiliateSectionProps = {
  heading?: string;
  subheading?: string;
  cta?: { label: string; href: string };
  partners: Partner[]; // pass up to 5 partners
  className?: string;
};

// ============== Helper: initials fallback ==============
function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("");
}

// ============== Badge by Tier ==============
const tierStyles: Record<string, string> = {
  Platinum:
    "bg-gradient-to-r from-slate-900 to-slate-700 text-white border border-white/10",
  Gold: "bg-gradient-to-r from-amber-300 to-amber-400 text-slate-900",
  Silver: "bg-gradient-to-r from-zinc-300 to-zinc-400 text-slate-900",
  Academic: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200",
  Community:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200",
};

function TierBadge({ tier }: { tier?: string }) {
  if (!tier) return null;
  const style =
    tierStyles[tier] ??
    "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${style}`}
    >
      {tier}
    </span>
  );
}

// ============== Card ==============
function PartnerCard({ partner }: { partner: Partner }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur supports-[backdrop-filter]:bg-white/40 p-5 shadow-sm hover:shadow-md"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -top-24 -right-20 h-48 w-48 rounded-full bg-blue-500/10 blur-2xl" />
      </div>

      {/* Logo / Fallback */}
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl ring-1 ring-slate-200/60 dark:ring-slate-800/60 bg-white dark:bg-slate-800">
          {partner.logoSrc ? (
            <Image
              src={partner.logoSrc}
              alt={partner.name}
              fill
              sizes="48px"
              className="object-contain p-2 grayscale group-hover:grayscale-0 transition"
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
            <TierBadge tier={partner.tier} />
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

// ============== Section ==============
export default function AffiliateSection({
  heading = "Afiliasi & Kerja Sama",
  subheading = "Kemitraan strategis untuk pendidikan, riset, dan pengabdian masyarakat.",
  cta,
  partners,
  className,
}: AffiliateSectionProps) {
  const topFive = partners.slice(0, 5);

  return (
    <section
      className={`relative mx-auto w-full max-w-7xl px-6 md:px-10 py-16 md:py-24 ${
        className ?? ""
      }`}
      aria-labelledby="affiliate-heading"
    >
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-40 w-[60%] -translate-x-1/2 bg-gradient-to-b from-blue-100/50 to-transparent dark:from-blue-900/10" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="affiliate-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {heading}
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{subheading}</p>
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {topFive.map((p) => (
          <PartnerCard key={p.name} partner={p} />
        ))}
      </div>

      {/* Footnote + CTA */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          *Menampilkan 5 mitra unggulan. Hubungi kami untuk kolaborasi lebih
          lanjut.
        </p>
        {cta && (
          <Link
            href={cta.href}
            className="inline-flex items-center rounded-xl border border-slate-300/70 dark:border-slate-700 bg-white/70 dark:bg-slate-900/40 backdrop-blur px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-white hover:shadow-sm"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}

// ================= Example Usage =================
// 1) Put this file anywhere in your app (e.g., components/AffiliateSection.tsx)
// 2) Import and render it:
//
// import AffiliateSection, { Partner } from "@/components/AffiliateSection";
//
// const partners: Partner[] = [
//   { name: "Bank Nusantara", logoSrc: "/partners/bank-nusantara.svg", url: "https://banknusantara.example", tier: "Platinum" },
//   { name: "Tech Cirebon", logoSrc: "/partners/tech-cirebon.svg", url: "https://techcirebon.example", tier: "Gold" },
//   { name: "Pemerintah Kota", logoSrc: "/partners/pemkot.svg", url: "https://cirebonkota.example", tier: "Academic" },
//   { name: "EduCloud", logoSrc: "/partners/educloud.svg", url: "https://educloud.example", tier: "Silver" },
//   { name: "Media Muda", logoSrc: "/partners/mediamuda.svg", url: "https://mediamuda.example", tier: "Community" },
// ];
//
// export default function Page() {
//   return (
//     <main>
//       <AffiliateSection
//         heading="Mitra & Afiliasi UCIC"
//         subheading="Bersama mitra industri, pemerintah, dan komunitas untuk dampak yang lebih luas."
//         cta={{ label: "Jadi Mitra", href: "/kerjasama" }}
//         partners={partners}
//       />
//     </main>
//   );
// }
