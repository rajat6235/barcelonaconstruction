import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services-v1", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/portfolio-grid-no-space", label: "Projects" },
  { href: "/contact-us", label: "Contacts" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#191D1B" }}>
      {/* Teal accent line */}
      <div style={{ height: 2, background: "linear-gradient(90deg, #095B67, #0d7a8a, transparent)" }} />

      <div className="container-custom" style={{ paddingTop: "100px", paddingBottom: "0" }}>
        {/* Main footer grid */}
        <div
          className="flex flex-col lg:flex-row"
          style={{ gap: "clamp(48px, 6vw, 80px)", paddingBottom: "80px" }}
        >
          {/* Left — Brand */}
          <div style={{ flex: "0 0 auto", maxWidth: 340 }}>
            {/* Logo */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
                padding: "10px 14px",
                borderRadius: 4,
              }}
            >
              <Image
                src="/uploads/2022/04/BarcelonaConstructions.webp"
                alt="Barcelona Constructions"
                width={108}
                height={49}
                style={{ height: "auto", filter: "brightness(0) invert(1)", opacity: 0.9 }}
              />
            </div>

            <p
              style={{
                fontWeight: 300,
                color: "rgba(187,187,188,0.75)",
                lineHeight: "1.78",
                fontSize: 14,
                marginBottom: 28,
                maxWidth: 300,
              }}
            >
              Uniting modern construction methods with a deep respect for traditional craftsmanship.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="rgba(9,91,103,0.8)"
                  style={{ marginTop: 2, flexShrink: 0 }}
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span style={{ fontWeight: 300, color: "#BBBBBC", fontSize: 13, lineHeight: "1.6" }}>
                  Unit 107, 1222 Alberta Ave, Saskatoon, SK S7K 1R4
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="rgba(9,91,103,0.8)"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+13067171994" className="footer-contact-link" style={{ fontSize: 13 }}>
                  +1 (306) 717-1994
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="rgba(9,91,103,0.8)"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:contact@barcelonaconstruction.com"
                  className="footer-contact-link"
                  style={{ fontSize: 13 }}
                >
                  contact@barcelonaconstruction.com
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Instagram", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M6.5 20.5h11a3 3 0 0 0 3-3v-11a3 3 0 0 0-3-3h-11a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3z" },
                { label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="social-icon"
                  aria-label={social.label}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Center — Quick Links */}
          <div style={{ flex: "0 0 auto" }}>
            <h3
              className="font-heading"
              style={{ fontSize: 20, lineHeight: "1.4", color: "#FFFFFF", marginBottom: 28, letterSpacing: "-0.01em" }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Working Hours */}
          <div style={{ flex: 1 }}>
            <h3
              className="font-heading"
              style={{ fontSize: 20, lineHeight: "1.4", color: "#FFFFFF", marginBottom: 28, letterSpacing: "-0.01em" }}
            >
              Working Hours
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { day: "Monday — Friday", hours: "8:00 am — 6:00 pm" },
                { day: "Saturday", hours: "9:00 am — 2:00 pm" },
                { day: "Sunday", hours: "Closed" },
              ].map((item) => (
                <div
                  key={item.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    paddingBottom: 12,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ fontWeight: 300, color: "#BBBBBC", fontSize: 13 }}>{item.day}</span>
                  <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.55)", fontSize: 13, textAlign: "right" }}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="divider-dark" />
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{ paddingTop: 24, paddingBottom: 32, gap: 16 }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 300,
              lineHeight: "1.6",
              color: "rgba(187,187,188,0.55)",
            }}
          >
            © {new Date().getFullYear()} Barcelona Constructions. All Rights Reserved.
          </p>
          <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Link
              href="/privacy-policy"
              className="footer-link"
              style={{ lineHeight: "1.6", fontSize: 13, display: "inline" }}
            >
              Privacy Policy
            </Link>
            <span style={{ color: "rgba(187,187,188,0.2)", fontSize: 11 }}>·</span>
            <Link
              href="/terms-of-use"
              className="footer-link"
              style={{ lineHeight: "1.6", fontSize: 13, display: "inline" }}
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
