import { Calendar, MapPin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ActivityListProps = {
  image: string | StaticImageData;
  title: string;
  place: string;
  date: string;
};

const ActivityList = ({ image, title, place, date }: ActivityListProps) => {
  return (
    <div className="max-w-xs w-full bg-white rounded-lg">
      <div className="p-3">
        <Image
          src={image}
          alt="Kegiatan"
          width={500}
          height={500}
          quality={100}
          className="w-full rounded-xl mb-2"
        />
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">{title}</h3>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              <MapPin className="text-blue-600 w-5" />
              <p className="font-medium text-sm">{place}</p>
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="text-blue-600 w-5" />
              <p className="text-sm">{date}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
