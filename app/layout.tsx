import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop"; // ⬅️ import tombol scroll

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend_deca",
  subsets: ["latin"],
});

const siteUrl = "https://lomba-web.vercel.app";
const siteName = "Catur Insan Cendekia University Cirebon";
const siteDesc =
  "Universitas Catur Insan Cendekia (UCIC) Cirebon — informasi kampus, program studi, pendaftaran, berita, dan layanan akademik.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Catur Insan Cendekia University Cirebon",
  },
  description: siteDesc,
  icons: {
    icon: "/assets/UCIC.png",
  },
  keywords: [
    "Universitas Cirebon",
    "UCIC",
    "Catur Insan Cendekia",
    "Kampus Cirebon",
    "Pendaftaran Mahasiswa Baru",
    "Program Studi",
  ],
  authors: [{ name: "UCIC" }],
  creator: "UCIC",
  publisher: "UCIC",
  generator: "Next.js",
  applicationName: siteName,
  category: "education",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexendDeca.className}`}>
      <body className={`${lexendDeca.variable} antialiased`}>
        {children}
        <ScrollToTop /> {/* ⬅️ tombol scroll ditaruh di sini */}
      </body>
    </html>
  );
}
