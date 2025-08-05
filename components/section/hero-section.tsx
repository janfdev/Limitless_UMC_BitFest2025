import Image from "next/image";
import React from "react";
import BackgroundHero from "@/public/assets/peta-real.png";
import Link from "next/link";
import Ucic from "@/public/assets/UCIC.png";
import Model3 from "@/public/assets/model_3-removebg-preview.png";
import Model2 from "@/public/assets/model_2-removebg-preview.png";
import Model1 from "@/public/assets/model_1-removebg-preview.png";
import "animate.css";

const HeroSection = () => {
  return (
    <section className="relative z-0 h-auto sm:min-h-[700px] bg-gray-100 flex items-center justify-center px-4 pt-26">
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundHero}
          alt="Map Background"
          className="object-cover w-full h-full"
          width={500}
          height={500}
        />
      </div>

      <div className="relative z-0 grid md:grid-cols-2 sm:grid-cols-1 items-center justify-center sm:gap-0 w-full px-24">
        <div className="flex flex-col items-center text-center mx-auto order-2 md:order-1 lg:pb-0 lg:px-2 px-10 pb-10 ">
          <h1 className="lg:text-[45px] text-[28px] font-extrabold text-blue-800 mb-4 font-bricolage animate__animated animate__fadeInUp">
            Selamat Datang di Universitas Catur Insan Cendekia
          </h1>
          <p>
            Capailah impian anda di Universitas Catur Insan Cendekia, dan
            wujudkan semua mimpimu
          </p>
          <Link
            href={"#"}
            className="bg-[#0451a1] text-white text-lg py-3 px-7 rounded-full hover:bg-blue-800 animate__animated animate__fadeInUp"
          >
            Get Started
          </Link>
        </div>

        {/* Logo & Model Mahasiswa */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          {/* Logo UCIC di belakang */}
          <div className="overflow-hidden h-[450px] w-[480px] md:w-[530px] z-0 relative">
            <Image
              src={Ucic}
              alt="Logo UCIC"
              className="w-full relative -mt-20 animate__animated animate__fadeInDown"
            />
          </div>

          {/* Model mahasiswa di depan */}
          <div className="absolute flex items-end z-10">
            {/* Model 3 Kiri */}
            <Image
              src={Model3}
              alt="Model 3"
              className="w-[170px] md:w-[200px] fade-bottom -mr-18 order-1 z-10 animate__animated animate__fadeInUp"
            />

            {/* Model 1 (tengah dan paling depan) */}
            <Image
              src={Model1}
              alt="Model 1"
              className="w-[180px] md:w-[200px] fade-bottom z-20 order-2 animate__animated animate__fadeInUp animate__delay-1s"
            />

            <Image
              src={Model2}
              alt="Model 2"
              className="w-[170px] md:w-[200px] fade-bottom -ml-18 order-3 z-10 animate__animated animate__fadeInUp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
