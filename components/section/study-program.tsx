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
import { Prodi } from "@/lib/type";
import { TI, FEB, PS } from "@/lib/data";

const ProdiList = ({ items }: { items: Prodi[] }) => (
  <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
    {items.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-2 rounded-lg hover:bg-blue-100 p-2 "
      >
        <div className="bg-blue-700 p-2 rounded-full">
          <GraduationCap className="text-white" />
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
    <section className="mx-auto max-w-7xl mt-5">
      <div className="flex items-center justify-center gap-2 text-2xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold text-blue-600">Program Studi</h1>
          <span className="w-16 h-1 rounded-lg bg-yellow-400"></span>
        </div>
      </div>

      {/* Content */}
      <div className="flex lg:flex-row md:flex-col flex-col mt-5 ">
        <div className="flex items-center justify-center w-full h-full px-5">
          <Image
            src={Cover}
            alt="Image Program Studi"
            quality={100}
            width={500}
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
