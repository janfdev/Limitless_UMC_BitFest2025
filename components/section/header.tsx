"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo1 from "@/public/assets/udang.png";
import logo2 from "@/public/assets/Universitas.png";

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { name: "Beranda", href: "/" },
  { name: "Profil", href: "/profile" },
  {
    name: "Fakultas",
    href: "/fakultas",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Fakultas Teknologi dan Informasi",
        href: "/fakultas-fti",
      },
      {
        name: "Fakultas Ekonomi dan Bisnis",
        href: "/fakultas-feb",
      },
      {
        name: "Fakultas Pendidikan dan Sains",
        href: "/fakultas-ps",
      },
    ],
  },
  { name: "Aktifitas", href: "/aktifitas" },
  { name: "Fasilitas", href: "/fasilitas" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backdropFilter: "blur(20px)",
      backgroundColor:
        theme === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "animate"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        backgroundColor: isScrolled
          ? theme === "dark"
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(255, 255, 255, 0.8)"
          : "transparent",
        boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="mx-auto bg-primary px-8 sm:px-16 lg:px-20">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="m-0 p-0 flex items-center justify-center w-fit"
            >
              <Image
                src={logo1}
                alt="logos"
                className="m-0 p-0 -mx-8"
                width={80}
                height={80}
              />
              <Image
                src={logo2}
                alt="logos"
                width={90}
                height={90}
                className="m-0 p-0 -mb-3"
              />
            </Link>
          </div>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-foreground flex items-center space-x-1 font-medium transition-colors duration-200 "
                >
                  <span className="text-white">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="text-white h-4 w-4 transition-transform duration-200" />
                  )}
                </Link>

                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="border-border bg-primary absolute top-full left-0 mt-2 w-64 overflow-hidden rounded-xl border shadow-xl backdrop-blur-lg"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="hover:bg-yellow-500 group block px-4 py-2 transition-colors duration-200"
                          >
                            <h2 className="text-white group-hover:text-white font-medium">
                              {dropdownItem.name}
                            </h2>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 lg:flex">
            <Link
              href="/"
              className="text-white border border-white px-6 py-2.5 rounded-full font-medium transition-colors duration-200 "
            >
              Pendaftaran
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg"
              >
                <span>Kontak</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.button
            className="text-white hover:bg-transparent rounded-lg p-2 transition-colors duration-200 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Button"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 " />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* UI Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="overflow-hidden lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="border-border bg-background/95 mt-4 space-y-2 rounded-xl border py-4 my-3 shadow-xl backdrop-blur-lg">
                {navItems.map((item) => (
                  <div key={item.name} className="px-4">
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name
                            )
                          }
                          className="w-full text-left text-foreground hover:bg-muted block py-3 font-medium transition-colors duration-200"
                        >
                          {item.name}
                          {item.hasDropdown && (
                            <ChevronDown
                              className={`text-black h-4 w-4 ml-2 inline-block transition-transform duration-200 ${
                                activeDropdown === item.name
                                  ? "rotate-180"
                                  : "rotate-0"
                              }`}
                            />
                          )}
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              className="space-y-2 bg-primary rounded-xl overflow-hidden"
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              transition={{ duration: 0.2 }}
                            >
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block md:p-3 p-2 text-sm transition-colors hover:bg-yellow-500 group"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <h4 className="text-white ">
                                    {dropdownItem.name}
                                  </h4>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-foreground hover:bg-muted block py-3 font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="space-y-2 px-4 py-2">
                  <Link
                    href="/"
                    className="text-foreground border-2 border-blue-500 hover:bg-muted block w-full rounded-lg py-2.5 text-center font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pendaftaran
                  </Link>
                  <Link
                    href="/"
                    className="block w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 py-2.5 text-center font-medium text-white transition-all duration-200 hover:shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Kontak
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
