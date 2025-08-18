import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { ActivityListProps } from "@/lib/type";

export const activityItemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const ActivityList = ({
  image,
  title,
  label,
  deskripsi,
  place,
  date,
}: ActivityListProps) => {
  return (
    <motion.article
      variants={activityItemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-auto h-full rounded-lg shadow-sm ring-1 ring-black/5 overflow-hidden bg-white"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.995 }}
    >
      <div className="p-2">
        <motion.div
          className="relative overflow-hidden rounded-lg aspect-[1/1] md:aspect-[5/4] lg:aspect-[4/3]"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label Berita */}
          {label && (
            <span className="absolute top-3 left-3 bg-blue-800 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              {label}
            </span>
          )}

          <Image
            src={image}
            alt={title || "Kegiatan"}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            priority={false}
          />
        </motion.div>

        <div className="flex flex-col gap-3 mt-3">
          <div className="flex flex-col gap-1.5 px-2">
            <h3 className="font-semibold leading-snug line-clamp-1">{title}</h3>
            <p className="text-[13px] text-gray-500 leading-snug line-clamp-2">
              {deskripsi}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm px-2 pb-2">
            <span className="flex items-center gap-2">
              <MapPin className="text-blue-600 w-5 h-5 shrink-0" />
              <p className="font-medium">{place}</p>
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="text-blue-600 w-5 h-5 shrink-0" />
              <p>{date}</p>
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ActivityList;
