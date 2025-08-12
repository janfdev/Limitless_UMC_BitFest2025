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
    <section className="pb-10 px-10">
      {/* Title */}
      <section className="pb-20 pt-20 md:pb-10 md:pt-32 container mx-auto">
      <div className="text-center space-y-4">
        <h2 className="xl:text-6xl/none text-3xl font-bold sm:text-5xl tracking-tight">
          Fasilitas Lengkap dan Modern
          {/* Complete and Modern Facilities */}
        </h2>
        <p className="text-xl text-muted-foreground pt-1">
          Do not waste time on Stripe subscriptions or designing a pricing
          section...
        </p>
      </div>
      {/* <div className="mt-10 flex items-center justify-center w-full">
        <Button>Get Started</Button>
      </div> */}
    </section>
      {/* Facilities */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-5">
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
