import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Logo from "@/public/logo.png"; // ganti dengan path logo kamu

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Kontak */}
        <div>
          <Image
            src={Logo}
            alt="UCIC Logo"
            width={90}
            height={90}
            className="mb-4"
          />
          <p className="text-gray-700 text-sm">Telp: (0231) 220250</p>
          <p className="text-gray-700 text-sm">Email: info@ucic.ac.id</p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/universitas_cic"
              className="p-2 bg-white rounded-full shadow hover:bg-blue-50"
            >
              <Instagram className="w-5 h-5 text-pink-500" />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-blue-50"
            >
              <Youtube className="w-5 h-5 text-red-500" />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-blue-50"
            >
              <Twitter className="w-5 h-5 text-sky-500" />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-blue-50"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
            </a>
          </div>
        </div>

        {/* Alamat + Map */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Alamat Kampus</h3>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            Jl. Kesambi No. 202, Drajat, Kesambi, Cirebon City, Jawa Barat 45133
          </p>
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.295191590931!2d108.55067147418997!3d-6.733795865839253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1d8ebc133e3f%3A0x91385801f5822049!2sUniversitas%20Catur%20Insan%20Cendekia%20(CIC)!5e0!3m2!1sid!2sid!4v1755500533281!5m2!1sid!2sid"
              width="100%"
              height="140"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Aplikasi Kampus */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Aplikasi Kampus</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a
                href="https://pmb.cic.ac.id/"
                className="hover:text-blue-600 transition"
              >
                PMB UCIC
              </a>
            </li>
            <li>
              <a
                href="https://simantu.cic.ac.id/"
                className="hover:text-blue-600 transition"
              >
                Sistem Manajemen Mutu
              </a>
            </li>
            <li>
              <a
                href="https://pustaka.cic.ac.id/"
                className="hover:text-blue-600 transition"
              >
                Perpustakaan
              </a>
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Sosial Media</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a
                href="https://www.instagram.com/universitas_cic"
                className="hover:text-blue-600 transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-6 text-center text-sm text-gray-500">
        © 2025 Universitas Catur Insan Cendekia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
