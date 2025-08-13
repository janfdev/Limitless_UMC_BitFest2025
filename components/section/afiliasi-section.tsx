import React from "react";
import Image from "next/image";
import { afiliasi } from "@/lib/data";
import handShake from "@/public/assets/handshake.jpg";

const AfiliasiSection = () => {
  return (
    <section className="py-12 lg:pt-20 bg-white">
      <div className="container mx-auto lg:px-20 px-5 grid md:grid-cols-2 gap-4 items-center">
        {/* Bagian Kiri */}
        <div className="px-5">
          <h2 className="lg:text-4xl text-2xl font-bold mb-2">
            Kerja Sama / <span className="text-blue-800"> Afiliasi</span>
          </h2>
          <p className="text-yellow-500 font-semibold">
            Universitas Catur Insan Cendekia
          </p>
          <p className="text-gray-800 mb-6">
            Kami menjalin kerjasama dengan instansi berikut
          </p>

          <Image
            src={handShake}
            alt="Kerja Sama"
            width={500}
            height={300}
            className="rounded-lg shadow-md h-[220px] w-[500px] object-cover"
          />
        </div>

        {/* Bagian Kanan */}
        <div className="grid justify center grid-cols-2 sm:grid-cols-3 gap-4 ">
          {afiliasi.map((logo, i) => (
            <div
              key={i}
              className="border rounded-md p-4 flex items-center justify-center shadow-sm bg-white min-h-[130px]"
            >
              <Image
                src={logo.image}
                alt={logo.alt}
                width={100}
                height={20}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfiliasiSection;
