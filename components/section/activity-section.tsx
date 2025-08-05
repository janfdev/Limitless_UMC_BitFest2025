import Image from "next/image";
import React from "react";
import Dummy from "@/public/assets/dummy.jpg";
import { Button } from "../ui/button";

const ActivitySection = () => {
  return (
    <div className="min-h-screen px-24">
      <div className="relative">
        <div className="absolute left-0 top-0 w-2 h-full bg-yellow-400"></div>
        <h1 className="text-3xl font-semibold ml-5 flex items-center gap-2">
          Kegiatan Kampus
        </h1>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 mt-5">
        <div className="bg-white rounded-md shadow-md p-4 flex flex-col gap-2">
          <Image
            src={Dummy}
            alt="Dummy Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            assumenda quisquam quis temporibus totam magnam eius rerum labore
            omnis culpa.
          </p>
          <Button className="w-fit">Lihat Selengkapnya</Button>
        </div>
        <div className="bg-white rounded-md shadow-md p-4 flex flex-col gap-2">
          <Image
            src={Dummy}
            alt="Dummy Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            assumenda quisquam quis temporibus totam magnam eius rerum labore
            omnis culpa.
          </p>
          <Button className="w-fit">Lihat Selengkapnya</Button>
        </div>
        <div className="bg-white rounded-md shadow-md p-4 flex flex-col gap-2">
          <Image
            src={Dummy}
            alt="Dummy Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            assumenda quisquam quis temporibus totam magnam eius rerum labore
            omnis culpa.
          </p>
          <Button className="w-fit">Lihat Selengkapnya</Button>
        </div>
      </div>
    </div>
  );
};

export default ActivitySection;
