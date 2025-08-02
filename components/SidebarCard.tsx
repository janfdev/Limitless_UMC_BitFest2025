import Image, { StaticImageData } from "next/image";
interface SidebarCardProps {
  title: string;
  image: string | StaticImageData;
}

export function SidebarCard({ title, image }: SidebarCardProps) {
  return (
    <div className="flex gap-4 items-center p-4 bg-white text-black rounded-md hover:bg-gray-200 transition cursor-pointer">
      <Image
        className="bg-center bg-cover bg-no-repeat rounded"
        src={image}
        alt={title}
        width={50}
        height={50}
      />
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}
