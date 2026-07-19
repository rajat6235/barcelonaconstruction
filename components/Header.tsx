"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services-v1", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/portfolio-grid-no-space", label: "Projects" },
  { href: "/contact-us", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const headerBg = isHome
    ? scrolled
      ? "bg-[#EFEEED] shadow-sm"
      : "bg-transparent"
    : "bg-[#EFEEED]";

  const logoSrc = "/uploads/2022/04/BarcelonaConstructions.webp";

  return (
    <>
      <header
        className={`${isHome ? "absolute" : "relative"} top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
        style={{ padding: "4px 70px" }}
      >
        <div className="flex items-center justify-between" style={{ minHeight: 60 }}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logoSrc}
              alt="Barcelona Constructions"
              width={109}
              height={50}
              priority
              className="object-contain"
              style={{ height: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""} ${
                  isHome && !scrolled ? "!text-white [&::after]:bg-white" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span
              className={`block w-6 h-0.5 transition-colors ${isHome && !scrolled ? "bg-white" : "bg-[#5F6160]"}`}
            />
            <span
              className={`block w-6 h-0.5 transition-colors ${isHome && !scrolled ? "bg-white" : "bg-[#5F6160]"}`}
            />
            <span
              className={`block w-4 h-0.5 transition-colors ${isHome && !scrolled ? "bg-white" : "bg-[#5F6160]"}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-label="Navigation menu"
      >
        <button
          className="absolute top-5 right-5 text-white p-2"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <Link href="/" className="mb-10 block">
          <Image
            src="/uploads/2022/04/BarcelonaConstructions.webp"
            alt="Barcelona Constructions"
            width={114}
            height={52}
            style={{ height: "auto", filter: "brightness(0) invert(1)" }}
          />
        </Link>

        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
