import Image from "next/image";
import React from "react";
import Cover from "@/public/assets/program-studi-image.jpg";
import {
  Book,
  BookCheck,
  BriefcaseBusiness,
  Cpu,
  GraduationCap,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Prodi = {
  name: string;
  label?: string;
};

const TI: Prodi[] = [
  { name: "S1-Teknik Informatika" },
  { name: "S1-Sistem Informasi" },
  { name: "S1-DKV" },
  { name: "D3-Manajemen Informatika" },
];

const FEB: Prodi[] = [
  { name: "S1-Bisnis Digital", label: "New" },
  { name: "S1-Manajemen" },
  { name: "S1-Akuntansi" },
  { name: "S1-Manajemen KRM (Kelas Karyawan)" },
  { name: "D3-Manajemen Bisnis" },
];

const PS: Prodi[] = [
  { name: "S1-Pendidikan Kepelatihan Olahraga", label: "New" },
];

// 🔹 Komponen Card Prodi supaya tidak mengulang-ulang struktur
const ProdiList = ({ items }: { items: Prodi[] }) => (
  <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
    {items.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-2 rounded-lg hover:bg-blue-100 p-1 "
      >
        <div className="bg-blue-900 p-2 rounded-full">
          <GraduationCap className="text-blue-300" />
        </div>
        <p>{item.name}</p>
        {item.label && (
          <span className="w-fit text-xs px-2 border-2 border-green-500 text-green-700 rounded-full">
            {item.label}
          </span>
        )}
      </div>
    ))}
  </div>
);

const StudyProgram = () => {
  return (
    <section className="min-h-screen mx-auto flex flex-col items-center">
      <div className="flex items-center gap-2 text-2xl">
        <div className="bg-blue-500 rounded-full p-2">
          <Book size={40} className="text-white" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold">Program Studi</h1>
          <span className="w-10 h-1 rounded bg-blue-500"></span>
        </div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 grid-cols-1 mt-5 ">
        <div className="flex items-center justify-center h-full px-5">
          <Image
            src={Cover}
            alt="Image Program Studi"
            quality={100}
            width={450}
            className="rounded-4xl h-full bg-cover"
          />
        </div>

        {/* Tab Program Studi */}
        <div className="px-10 mt-5">
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
                <p className="md:block hidden">Fakultas Teknologi Informasi</p>
                <p className="md:hidden block">FTI</p>
              </TabsTrigger>
              <TabsTrigger value="feb" className="flex items-center gap-2">
                <BriefcaseBusiness className="w-4 h-4" />
                <p className="md:block hidden">Fakultas Ekonomi dan Bisnis</p>
                <p className="md:hidden block">FEB</p>
              </TabsTrigger>
              <TabsTrigger value="ps" className="flex items-center gap-2">
                <BookCheck className="w-4 h-4" />
                <p className="md:block hidden">Fakultas Pendidikan dan Sains</p>
                <p className="md:hidden block">FPS</p>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ti" className="mt-5">
              <ProdiList items={TI} />
            </TabsContent>
            <TabsContent value="feb" className="mt-5">
              <ProdiList items={FEB} />
            </TabsContent>
            <TabsContent value="ps" className="mt-5">
              <ProdiList items={PS} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default StudyProgram;
