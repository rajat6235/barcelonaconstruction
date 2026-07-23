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

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "header-scrolled" : "bg-transparent"}`}
        style={{ paddingLeft: "clamp(20px, 5vw, 70px)", paddingRight: "clamp(20px, 5vw, 70px)" }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" style={{ padding: "22px 0" }}>
            <Image
              src="/uploads/2022/04/BarcelonaConstructions.webp"
              alt="Barcelona Constructions"
              width={109}
              height={50}
              priority
              className="object-contain"
              style={{ height: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: 0 }}>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                style={{
                  marginLeft: i === 0 ? 0 : 28,
                  marginRight: i === navLinks.length - 1 ? 0 : 28,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact-us" className="btn-primary" style={{ fontSize: 11, padding: "14px 24px" }}>
              Get in Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{ gap: 5, width: 36, height: 36 }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                backgroundColor: "#5F6160",
                borderRadius: 2,
                transition: "all 0.28s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
            <span
              style={{
                display: "block",
                width: 16,
                height: 1.5,
                backgroundColor: "#5F6160",
                borderRadius: 2,
                transition: "all 0.28s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                backgroundColor: "#5F6160",
                borderRadius: 2,
                transition: "all 0.28s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </button>
        </div>
      </header>

      {/* ── MOBILE BACKDROP ── */}
      <div
        className={`mobile-menu-backdrop ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ── MOBILE MENU (slides from right) ── */}
      <div
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 40px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/uploads/2022/04/BarcelonaConstructions.webp"
              alt="Barcelona Constructions"
              width={90}
              height={41}
              style={{ height: "auto", filter: "brightness(0) invert(1)" }}
            />
          </Link>

          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              color: "rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.22s ease",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, paddingTop: 8 }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              <span>{link.label}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ opacity: 0.3 }}
              >
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div
          style={{
            padding: "32px 40px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Link
            href="/contact-us"
            className="btn-primary"
            onClick={() => setMobileOpen(false)}
            style={{ width: "100%", justifyContent: "center" }}
          >
            Get in Touch
          </Link>
          <p
            style={{
              marginTop: 20,
              fontSize: 13,
              color: "rgba(255,255,255,0.3)",
              fontFamily: "var(--font-jost-var), 'Jost', sans-serif",
              fontWeight: 300,
            }}
          >
            +1 (306) 717-1994
          </p>
        </div>
      </div>
    </>
  );
}
