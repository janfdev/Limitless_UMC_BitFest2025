"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import Gedung from "@/public/assets/Gedung UCIC (1).jpeg";
import { Cpu, BriefcaseBusiness, BookCheck, GraduationCap } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { parseProdiName } from "@/lib/helpers";
import { Prodi } from "@/lib/type";
import { TI, FEB, PS } from "@/lib/data";

// --- NEW: framer-motion (animasi ringan & reusable)
import { motion, type Variants } from "framer-motion";

// Variants umum
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const listStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const itemLift: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

function ProdiList({
  items,
  onSelect,
}: {
  items: Prodi[];
  onSelect: (p: Prodi) => void;
}) {
  return (
    // ganti ke motion.div agar bisa pakai stagger; struktur grid tetap sama
    <motion.div
      className="grid md:grid-cols-2 grid-cols-1 gap-5"
      variants={listStagger}
      initial="hidden"
      animate="show"
    >
      {items.map((p) => (
        // ganti ke motion.button utk micro-interaction (hover/tap) + animasi masuk
        <motion.button
          onClick={() => onSelect(p)}
          key={p.id}
          variants={itemLift}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2 rounded-lg hover:bg-blue-100 p-2 cursor-pointer"
        >
          <motion.div
            className="bg-blue-700 p-2 rounded-full"
            whileHover={{ rotate: 3 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
          >
            <GraduationCap className="text-white" />
          </motion.div>
          <h2 className="text-sm">{p.name}</h2>
          {p.label && (
            <span className="w-fit text-xs px-2 border-2 border-green-500 text-green-700 rounded-full">
              {p.label}
            </span>
          )}
        </motion.button>
      ))}
    </motion.div>
  );
}

const StudyProgram = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Prodi | null>(null);

  const openDialog = useCallback((p: Prodi) => {
    setSelected(p);
    setOpen(true);
  }, []);

  const detail = useMemo(() => {
    if (!selected) return null;
    const parsed = parseProdiName(selected.name);
    return {
      ...parsed,
      kode: selected.id.toUpperCase(),
      status: selected.label === "New" ? "Program Baru" : "Tersedia",
    };
  }, [selected]);

  return (
    <>
      <section className="mx-auto max-w-7xl mt-5 py-10">
        {/* Heading */}
        <motion.div
          className="flex items-center justify-center gap-2 text-2xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-primary pb-1">Program Studi</h1>
            <span className="w-16 h-1 rounded-lg bg-secondary"></span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex lg:flex-row md:flex-col flex-col mt-5">
          {/* Image */}
          <motion.div
            className="flex items-center justify-center w-full h-full md:px-5 px-10"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={Gedung}
              alt="Image Program Studi"
              quality={100}
              width={500}
              height={500}
              className="rounded-4xl bg-cover h-[300px] lg:h-[400px]"
              priority
            />
          </motion.div>

          {/* Right column */}
          <motion.div
            className="px-10 mt-5 w-full"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h2 className="text-lg font-semibold">Daftar Program Studi</h2>
              <p>
                Berikut adalah program-program studi yang tersedia di lingkungan
                fakultas kami, siap mencetak lulusan unggul dan kompeten.
              </p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="ti" className="w-full mt-5">
              <TabsList asChild>
                {/* gunakan motion.div tanpa mengubah isi trigger */}
                <motion.div
                  variants={scaleIn}
                  initial="hidden"
                  animate="show"
                  className="inline-flex"
                >
                  <TabsTrigger value="ti" className="flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <p className="md:block hidden">
                      Fakultas Teknologi dan Informasi
                    </p>
                    <p className="md:hidden block">FTI</p>
                  </TabsTrigger>

                  <TabsTrigger value="feb" className="flex items-center gap-2">
                    <BriefcaseBusiness className="w-4 h-4" />
                    <p className="md:block hidden">
                      Fakultas Ekonomi dan Bisnis
                    </p>
                    <p className="md:hidden block">FEB</p>
                  </TabsTrigger>

                  <TabsTrigger value="ps" className="flex items-center gap-2">
                    <BookCheck className="w-4 h-4" />
                    <p className="md:block hidden">
                      Fakultas Pendidikan dan Sains
                    </p>
                    <p className="md:hidden block">FPS</p>
                  </TabsTrigger>
                </motion.div>
              </TabsList>

              {/* Konten tiap tab: bungkus ProdiList agar bisa fadeUp ringan */}
              <TabsContent value="ti" className="mt-5">
                <motion.div variants={fadeUp} initial="hidden" animate="show">
                  <ProdiList items={TI} onSelect={openDialog} />
                </motion.div>
              </TabsContent>

              <TabsContent value="feb" className="mt-5">
                <motion.div variants={fadeUp} initial="hidden" animate="show">
                  <ProdiList items={FEB} onSelect={openDialog} />
                </motion.div>
              </TabsContent>

              <TabsContent value="ps" className="mt-5">
                <motion.div variants={fadeUp} initial="hidden" animate="show">
                  <ProdiList items={PS} onSelect={openDialog} />
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        {/* shadcn sudah punya animasi sendiri; tambahkan fade ringan untuk isi */}
        <DialogContent className="sm:max-w-lg">
          {selected && detail && (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              className="contents"
            >
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {selected.name}
                  {selected.label && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-black font-semibold">
                      {selected.label}
                    </span>
                  )}
                </DialogTitle>
                <DialogDescription>
                  Ringkasan singkat program studi.
                </DialogDescription>
              </DialogHeader>

              {/* “Card” isi ringkas */}
              <motion.div
                className="rounded-xl border p-4 bg-muted/40"
                variants={scaleIn}
                initial="hidden"
                animate="show"
              >
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Jenjang</dt>
                    <dd className="font-medium">{detail.jenjang}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Kode</dt>
                    <dd className="font-medium">{detail.kode}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-muted-foreground">Jurusan</dt>
                    <dd className="font-medium">{detail.jurusan}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-muted-foreground">Status</dt>
                    <dd className="font-medium">{detail.status}</dd>
                  </div>
                </dl>

                <p className="mt-3 text-sm text-muted-foreground">
                  *Informasi detail kurikulum, prospek, dan akreditasi tersedia
                  di halaman program studi.
                </p>
              </motion.div>

              <DialogFooter className="gap-2 sm:gap-0">
                <DialogClose asChild>
                  <Button variant="outline">Tutup</Button>
                </DialogClose>
                <Button asChild>
                  <Link href={`/prodi/${selected.id}`}>Lihat selengkapnya</Link>
                </Button>
              </DialogFooter>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StudyProgram;
