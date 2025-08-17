import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

// Sections
const sections = [
  {
    title: "Kampus UCIC",
    links: [
      { name: "About", href: "#" },
      { name: "Meet the Team", href: "#" },
      { name: "Accounts Review", href: "#" },
    ],
  },
  {
    title: "Helpful Links",
    links: [
      { name: "Contact", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Accessibility", href: "#" },
      { name: "Returns Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Hiring Statistics", href: "#" },
    ],
  },
];

// Socials
const socialLinks = [
  { icon: Instagram, name: "Instagram", href: "#" },
  { icon: Youtube, name: "YouTube", href: "#" },
];

export default function Footer03() {
  return (
    <footer className="mt-10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="Logo UCIC"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="mt-4 max-w-xs text-muted-foreground">
              Jl. Kesambi No. 202, Drajat, Kesambi, Cirebon City, West Java
              45133
            </p>

            <ul className="mt-8 flex gap-6">
              {socialLinks.map(({ icon: Icon, name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title}>
                <p className="font-medium text-foreground">{section.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground transition hover:text-primary"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="relative w-full overflow-hidden rounded-xl border border-border">
            <div className="h-72 sm:h-80 lg:h-96">
              <iframe
                title="Lokasi UCIC di Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126793.44478942039!2d108.553246!3d-6.733801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1d8ebc133e3f%3A0x91385801f5822049!2sUniversitas%20Catur%20Insan%20Cendekia%20(CIC)!5e0!3m2!1sid!2sid!4v1755447646676!5m2!1sid!2sid"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          &copy; 2025. Universitas Catur Insan Cendekia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
