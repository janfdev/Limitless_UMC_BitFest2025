import React from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import Cover from "@/public/assets/program-studi-image.jpg";

const ActivitySection = () => {
  return (
    <section className="bg-muted px-10 mt-5 py-20">
      <div className="mx-auto md:max-w-7xl w-auto">
        <div className="flex items-center justify-center gap-2 text-2xl">
          <div className="flex flex-col items-center justify-center group">
            <h1 className="font-semibold text-blue-600 ">Berita & Kegiatan</h1>
            <span className="w-16 h-1 rounded-lg bg-yellow-400"></span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-5 gap-5">
            <div className="max-w-xs w-full bg-white rounded-lg">
              <div className="p-3">
                <Image
                  src={Cover}
                  alt="Kegiatan"
                  width={500}
                  height={500}
                  quality={100}
                  className="w-full rounded-xl mb-2"
                />
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">
                      Kegiatan Penggalangan Dana
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <MapPin className="text-blue-600 w-5" />
                      <p className="font-medium text-sm">Kampus UCIC</p>
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="text-blue-600 w-5" />
                      <p className="text-sm">12 Juli 2025</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs w-full bg-white rounded-lg">
              <div className="p-3">
                <Image
                  src={Cover}
                  alt="Kegiatan"
                  width={500}
                  height={500}
                  quality={100}
                  className="w-full rounded-xl mb-2"
                />
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">
                      Kegiatan Penggalangan Dana
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <MapPin className="text-blue-600 w-5" />
                      <p className="font-medium text-sm">Kampus UCIC</p>
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="text-blue-600 w-5" />
                      <p className="text-sm">12 Juli 2025</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs w-full bg-white rounded-lg">
              <div className="p-3">
                <Image
                  src={Cover}
                  alt="Kegiatan"
                  width={500}
                  height={500}
                  quality={100}
                  className="w-full rounded-xl mb-2"
                />
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">
                      Kegiatan Penggalangan Dana
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <MapPin className="text-blue-600 w-5" />
                      <p className="font-medium text-sm">Kampus UCIC</p>
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="text-blue-600 w-5" />
                      <p className="text-sm">12 Juli 2025</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs w-full bg-white rounded-lg">
              <div className="p-3">
                <Image
                  src={Cover}
                  alt="Kegiatan"
                  width={500}
                  height={500}
                  quality={100}
                  className="w-full rounded-xl mb-2"
                />
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">
                      Kegiatan Penggalangan Dana
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <MapPin className="text-blue-600 w-5" />
                      <p className="font-medium text-sm">Kampus UCIC</p>
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="text-blue-600 w-5" />
                      <p className="text-sm">12 Juli 2025</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
