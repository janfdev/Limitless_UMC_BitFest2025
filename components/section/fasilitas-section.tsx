"use client";
import { useState } from "react";
import Image from "next/image";
import Cover from "@/public/assets/program-studi-image.jpg";

const categories = ["Akademik", "Penunjang", "Layanan"];
const fasilitas = [
    { title: "Lab Komputer", img: "/lab.jpg" },
    { title: "Lab Komputer", img: "/lab.jpg" },
    { title: "Lab Komputer", img: "/lab.jpg" },
    { title: "Lab Komputer", img: "/lab.jpg" },
];

export default function FasilitasSection() {
    const [active, setActive] = useState("Akademik");

    return (
        <section className="py-10 px-4">
        {/* Title */}
        <div className="text-center mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-blue-700 relative inline-block">
            Fasilitas Campus
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-12 h-[3px] bg-yellow-400 rounded-full"></span>
            </h2>
        </div>

        
        <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full px-3 py-1 flex gap-2 flex-wrap">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 py-1 rounded-full font-medium text-sm sm:text-base transition-colors ${
                    active === cat
                    ? "bg-white text-blue-700 shadow"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                >
                {cat}
                </button>
            ))}
            </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {fasilitas.map((item, idx) => (
            <div
                key={idx}
                className="relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition-shadow"
            >
                <Image
                src={Cover}
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
