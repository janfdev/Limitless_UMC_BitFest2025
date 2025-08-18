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

function ProdiList({
  items,
  onSelect,
}: {
  items: Prodi[];
  onSelect: (p: Prodi) => void;
}) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
      {items.map((p) => (
        <button
          onClick={() => onSelect(p)}
          key={p.id}
          className="flex items-center gap-2 rounded-lg hover:bg-blue-100 p-2 cursor-pointer"
        >
          <div className="bg-blue-700 p-2 rounded-full">
            <GraduationCap className="text-white" />
          </div>
          <p>{p.name}</p>
          {p.label && (
            <span className="w-fit text-xs px-2 border-2 border-green-500 text-green-700 rounded-full">
              {p.label}
            </span>
          )}
        </button>
      ))}
    </div>
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
        <div className="flex items-center justify-center gap-2 text-2xl">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-blue-600 pb-1">Program Studi</h1>
            <span className="w-16 h-1 rounded-lg bg-yellow-400"></span>
          </div>
        </div>

        {/* Content */}
        <div className="flex lg:flex-row md:flex-col flex-col mt-5">
          <div className="flex items-center justify-center w-full h-full px-5">
            <Image
              src={Gedung}
              alt="Image Program Studi"
              quality={100}
              width={500}
              height={500}
              className="rounded-4xl bg-contain h-[400px]"
              priority
            />
          </div>

          <div className="px-10 mt-5 w-full">
            <div>
              <h2 className="text-lg font-semibold">Daftar Program Studi</h2>
              <p>
                Berikut adalah program-program studi yang tersedia di lingkungan
                fakultas kami, siap mencetak lulusan unggul dan kompeten.
              </p>
            </div>

            <Tabs defaultValue="ti" className="w-full mt-5">
              <TabsList>
                <TabsTrigger value="ti" className="flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <p className="md:block hidden">
                    Fakultas Teknologi dan Informasi
                  </p>
                  <p className="md:hidden block">FTI</p>
                </TabsTrigger>

                <TabsTrigger value="feb" className="flex items-center gap-2">
                  <BriefcaseBusiness className="w-4 h-4" />
                  <p className="md:block hidden">Fakultas Ekonomi dan Bisnis</p>
                  <p className="md:hidden block">FEB</p>
                </TabsTrigger>

                <TabsTrigger value="ps" className="flex items-center gap-2">
                  <BookCheck className="w-4 h-4" />
                  <p className="md:block hidden">
                    Fakultas Pendidikan dan Sains
                  </p>
                  <p className="md:hidden block">FPS</p>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ti" className="mt-5">
                <ProdiList items={TI} onSelect={openDialog} />
              </TabsContent>

              <TabsContent value="feb" className="mt-5">
                <ProdiList items={FEB} onSelect={openDialog} />
              </TabsContent>

              <TabsContent value="ps" className="mt-5">
                <ProdiList items={PS} onSelect={openDialog} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          {selected && detail && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {selected.name}
                  {selected.label && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-400 text-black font-semibold">
                      {selected.label}
                    </span>
                  )}
                </DialogTitle>
                <DialogDescription>
                  Ringkasan singkat program studi.
                </DialogDescription>
              </DialogHeader>

              {/* “Card” isi ringkas */}
              <div className="rounded-xl border p-4 bg-muted/40">
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
              </div>

              <DialogFooter className="gap-2 sm:gap-0">
                <DialogClose asChild>
                  <Button variant="outline">Tutup</Button>
                </DialogClose>
                <Button asChild>
                  <Link href={`/prodi/${selected.id}`}>Lihat selengkapnya</Link>
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StudyProgram;
