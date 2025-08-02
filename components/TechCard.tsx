import { User2Icon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type TechCardProps = {
  title: string;
  image: string | StaticImageData;
  author: string;
  date: string;
};

export function TechCard({ title, image, author, date }: TechCardProps) {
  return (
    <div className="bg-white text-black rounded-lg p-8 w-full lg:w-2/3 flex flex-col items-start">
      <div className="w-full flex justify-center mb-8">
        <Image
          src={image}
          alt={title}
          width={500}
          height={100}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded bg-black text-white flex items-center justify-center text-sm font-bold">
          <User2Icon />
        </div>
        <div>
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
}
