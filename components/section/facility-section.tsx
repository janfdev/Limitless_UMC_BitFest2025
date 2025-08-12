"use client";
import Image from "next/image";
import Cover from "@/public/assets/program-studi-image.jpg";
import SportCenter from "@/public/assets/sport_center.jpg";

const fasilitas = [
  { title: "Lab Komputer", img: Cover },
  { title: "Convention Hall", img: Cover },
  { title: "Auditorium", img: Cover },
  { title: "Ruang Kelas", img: Cover },
  { title: "Incubator Center", img: Cover },
  { title: "Ruang Podcast", img: Cover },
  { title: "Perpustakaan", img: Cover },
  { title: "Taman Cipto Sport Center", img: SportCenter },
];

export default function FacilitySection() {
  return (
    <section className="py-10 px-4">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-lg sm:text-2xl font-semibold text-blue-700 relative inline-block">
          Fasilitas Campus
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-12 h-[3px] bg-yellow-400 rounded-full"></span>
        </h2>
      </div>

      {/* Facilities */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mt-10">
        {fasilitas.map((item, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={430}
              height={380}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black/50 text-white text-sm px-2 py-1 rounded">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
