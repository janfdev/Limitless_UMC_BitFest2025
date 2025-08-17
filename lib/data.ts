import { Partner, Prodi } from "./type";
import Century from "@/public/assets/century.png";
import PB from "@/public/assets/pb.jpg";
import YH from "@/public/assets/yh.png";
import EF from "@/public/assets/ef.png";
import ESDA from "@/public/assets/esda.png";
export const afiliasi = [
  {
    image: Century,
    alt: "Century",
  },
  {
    image: PB,
    alt: "Pelita Bangsa",
  },
  {
    image: YH,
    alt: "Yayasan Harapan Indonesia",
  },
  {
    image: EF,
    alt: "English First",
  },
  {
    image: ESDA,
    alt: "ESDA",
  },
];

export const TI: Prodi[] = [
  { name: "S1-Teknik Informatika" },
  { name: "S1-Sistem Informasi" },
  { name: "S1-DKV" },
  { name: "D3-Manajemen Informatika" },
];

export const FEB: Prodi[] = [
  { name: "S1-Bisnis Digital", label: "New" },
  { name: "S1-Manajemen" },
  { name: "S1-Akuntansi" },
  { name: "S1-Manajemen KRM (Kelas Karyawan)" },
  { name: "D3-Manajemen Bisnis" },
];

export const PS: Prodi[] = [
  { name: "S1-Pendidikan Kepelatihan Olahraga", label: "New" },
];

export const partners: Partner[] = [
  {
    name: "Century",
    logoSrc: "/assets/century.png",
    url: "https://century.com",
    accentClass: "bg-black/50",
  },
  {
    name: "Pelita Bangsa",
    logoSrc: "/assets/pb.jpg",
    url: "https://pelitabangsa.com",
    accentClass: "bg-red-500/50",
  },
  {
    name: "Yayasan Harapanku",
    logoSrc: "/assets/yh.png",
    url: "https://yayasanharapanku.com",
    accentClass: "bg-yellow-500/50",
  },
  {
    name: "English First",
    logoSrc: "/assets/ef.png",
    url: "https://englishfirst.com",
    accentClass: "bg-blue-700/50",
  },
  {
    name: "ESDA",
    logoSrc: "/assets/esda.png",
    url: "https://esda.com",
    accentClass: "bg-blue-700/50",
  },
];
