import { Prodi } from "./type";
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
