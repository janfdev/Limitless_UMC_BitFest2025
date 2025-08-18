import { StaticImageData } from "next/image";

export type BlogTypes = {
  id: string;
  title: string;
  image: string | StaticImageData;
  description: string;
};

export type Prodi = {
  id: string;
  name: string;
  label?: string;
};

export type Partner = {
  name: string;
  logoSrc?: string;
  url?: string;
  accentClass: string;
};


export type ActivityListProps = {
  image: string | StaticImageData;
  title: string;
  label: string;
  deskripsi: string;
  place: string;
  date: string;
};