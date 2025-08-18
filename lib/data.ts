import { Partner, Prodi } from "./type";
import Century from "@/public/assets/century.png";
import PB from "@/public/assets/pb.jpg";
import YH from "@/public/assets/yh.png";
import EF from "@/public/assets/ef.png";
import ESDA from "@/public/assets/esda.png";
import Cover from "@/public/assets/Berita1.png";
import Berita2 from "@/public/assets/berita2.jpg"
import Berita3 from "@/public/assets/berita3.png"
import Kegiatan from "@/public/assets/kegiatan1.jpg";
import Kewirausahaan2 from "@/public/assets/Lab Kewirausahaan (1).jpeg";
import KegiatanHima from "@/public/assets/kegiatan-2.jpg";

export const activity = [
  {
    id: 1,
    image: Cover,
    label: "Berita",
    title: "EMOVICS 2025 Wadah Kreativitas Mahasiswa CIC dalam Membuat Film",
    deskripsi:
      "Acara EMOVICS 2025 yang sangat dinantikan telah berhasil menampilkan serangkaian film pendek luar biasa karya mahasiswa dari Universitas Catur Insan Cendekia (UCIC). ",
    place: "Kampus UCIC",
    date: "12 Juli 2025",
  },
  {
    id: 2,
    image: Kegiatan,
    label: "Kegiatan",
    title: "FTI UCIC Lakukan Benchmarking Kurikulum ke FSI UNJANI: Sinergi Menuju Kurikulum Adaptif dan Kolaboratif",
    deskripsi:
      "Dalam rangka meningkatkan kualitas pembelajaran dan kesesuaian kurikulum dengan kebutuhan dunia industri dan perkembangan teknologi, Fakultas Teknologi dan Informatika Universitas Catur Insan Cendekia (FTI UCIC) melaksanakan kegiatan Benchmarking Kurikulum ke Fakultas Sains dan Informatika Universitas Jenderal Achmad Yani (FSI UNJANI), Bandung.",
    place: "Lab Kewirausaahaan UCIC",
    date: "12 Agustus 2025",
  },
  {
    id: 3,
    image: Berita2,
    label: "Berita",
    title: "Program Studi Sistem Informasi UCIC Raih Akreditasi “Baik Sekali” dari LAM INFOKOM",
    deskripsi:
      "Cirebon, 9 April 2025 - Kabar menggembirakan datang dari Program Studi Sistem Informasi Universitas Catur Insan Cendekia (UCIC). Berdasarkan Keputusan LAM INFOKOM No. 077/SK/LAM-INFOKOM/Ak/S/IV/2025, program studi ini resmi meraih peringkat Akreditasi Baik Sekali.",
    place: "Kampus UCIC",
    date: "12 Juli 2025",
  },
  {
    id: 4,
    image: Kewirausahaan2,
    label: "Kegiatan",
    title: "Penyerahan Proposal PKM",
    deskripsi:
      "Kegiatan penyerahan Proposal Program Kreativitas Mahasiswa (PKM) oleh tim mahasiswa kepada pihak kampus sebagai tahap akhir seleksi internal. Acara ini menjadi momen validasi akhir kelengkapan dokumen—mulai dari kesesuaian format, surat pernyataan, hingga RAB—sekaligus pengecekan orisinalitas dan kesesuaian skema (mis. PKM-R, PKM-K, PKM-PM, PKM-PI, atau PKM-KC). Setiap tim mempresentasikan ringkasan ide dan rencana implementasi di hadapan pembina untuk menerima catatan perbaikan yang akan segera ditindaklanjuti sebelum unggah ke sistem pendanaan nasional. Melalui kegiatan ini, kampus menegaskan komitmen mendorong budaya riset, inovasi, dan kewirausahaan mahasiswa serta menyiapkan pendampingan berkelanjutan pada tahap pelaksanaan.",
    place: "Kampus UCIC",
    date: "12 Juli 2025",
  },
  {
    id: 5,
    image: Berita3,
    label: "Berita",
    title: "Call For Paper 4th Internasional Conference ICCIT 2025",
    deskripsi:
      "Kesempatan untuk bersinar dalam sorotan akademis global! Sajikan penelitian Anda dan dapatkan indeks di Scopus dan publikasikan di IEEE Xplore, tingkatkan profil akademis Anda dan buka jalan bagi peluang masa depan",
    place: "Kampus UCIC",
    date: "12 Juli 2025",
  },
  {
    id: 6,
    image: KegiatanHima,
    label: "Kegiatan",
    title: "Pelatihan Strategi Konten Digital untuk HIMA dan UKM",
    deskripsi:
      "Pelatihan ini adalah bagaimana menyusun content planning yang efektif. Mahasiswa dilatih dalam merancang konsep konten, menentukan jadwal unggahan, serta memilih format yang sesuai dengan target audiens. Selain itu, mereka juga dikenalkan dengan berbagai fitur terbaru dalam Canva, sebuah platform desain grafis yang banyak digunakan dalam pembuatan konten digital",
    place: "Kampus UCIC",
    date: "12 Juli 2025",
  },
];

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
  { id: "ti", name: "S1-Teknik Informatika" },
  { id: "si", name: "S1-Sistem Informasi" },
  { id: "dkv", name: "S1-DKV" },
  { id: "mi", name: "D3-Manajemen Informatika" },
];

export const FEB: Prodi[] = [
  { id: "bi", name: "S1-Bisnis Digital", label: "New" },
  { id: "mn", name: "S1-Manajemen" },
  { id: "ak", name: "S1-Akuntansi" },
  { id: "mnKRM", name: "S1-Manajemen KRM (Kelas Karyawan)" },
  { id: "mb", name: "D3-Manajemen Bisnis" },
];

export const PS: Prodi[] = [
  { id: "pko", name: "S1-Pendidikan Kepelatihan Olahraga", label: "New" },
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
