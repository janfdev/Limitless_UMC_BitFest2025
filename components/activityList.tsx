import { Calendar, MapPin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion, type Variants } from "framer-motion";

type ActivityListProps = {
  image: string | StaticImageData;
  title: string;
  place: string;
  date: string;
};

// Variants reusable untuk item (fade + slide + subtle scale)
export const activityItemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const ActivityList = ({ image, title, place, date }: ActivityListProps) => {
  return (
    <motion.article
      variants={activityItemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-xs w-full bg-white rounded-lg shadow-sm ring-1 ring-black/5 overflow-hidden"
      whileHover={{
        y: -4,
      }}
      whileTap={{ scale: 0.995 }}
    >
      <div className="p-3">
        <motion.div
          className="relative rounded-xl overflow-hidden"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={image}
            alt="Kegiatan"
            width={500}
            height={500}
            quality={100}
            className="w-full h-auto object-cover"
            placeholder="blur"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </motion.div>

        <div className="flex flex-col gap-3 mt-2">
          <div className="flex flex-col gap-1.5">
            <h3 className="font-semibold leading-snug">{title}</h3>
          </div>

          <div className="flex flex-col gap-2 text-sm">
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
