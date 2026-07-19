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
    <footer style={{ backgroundColor: "#2F2F2F" }}>
      <div
        className="container-custom"
        style={{ paddingTop: "125px", paddingBottom: "25px" }}
      >
        <div
          className="flex flex-col lg:flex-row gap-12 lg:gap-0"
          style={{ paddingBottom: "137px" }}
        >
          {/* Left Column */}
          <div
            className="flex-shrink-0"
            style={{ width: "55.876%" }}
          >
            <FooterLeft />
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <h3
              className="font-heading mb-6"
              style={{ fontSize: 30, lineHeight: "40px", color: "#FFFFFF" }}
            >
              Quick Links
            </h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="divider-dark" />

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ paddingBottom: "50px" }}
        >
          <p
            style={{
              fontSize: 14,
              fontWeight: 300,
              lineHeight: "24px",
              color: "#BBBBBC",
            }}
          >
            © by Rajat. All Rights Reserved.
          </p>
          <nav className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="footer-link"
              style={{ lineHeight: "24px", fontSize: 14, display: "inline" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="footer-link"
              style={{ lineHeight: "24px", fontSize: 14, display: "inline" }}
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterLeft() {
  return (
    <div style={{ marginRight: "125px" }}>
      {/* Logo */}
      <div style={{ backgroundColor: "#FFFFFF", display: "inline-block", marginBottom: 20, padding: "8px 12px" }}>
        <Image
          src="/uploads/2022/04/BarcelonaConstructions.webp"
          alt="Barcelona Constructions"
          width={121}
          height={55}
          style={{ height: "auto" }}
        />
      </div>

      {/* Address */}
      <p
        style={{
          fontWeight: 300,
          color: "#BBBBBC",
          lineHeight: "1.7",
          marginBottom: 23,
        }}
      >
        Unit 107, 1222 Alberta Ave, Saskatoon, SK S7K 1R4
      </p>

      {/* Phone */}
      <div style={{ marginBottom: 22 }}>
        <a
          href="tel:+13067171994"
          className="footer-contact-link"
          style={{
            fontSize: 18,
            fontWeight: 300,
            lineHeight: "32px",
            textDecoration: "none",
            display: "block",
          }}
        >
          +1 (306) 717-1994
        </a>
      </div>

      {/* Email */}
      <div>
        <a
          href="mailto:contact@barcelonaconstruction.com"
          className="footer-contact-link"
          style={{
            fontSize: 18,
            fontWeight: 300,
            lineHeight: "32px",
            textDecoration: "none",
            display: "block",
          }}
        >
          contact@barcelonaconstruction.com
        </a>
      </div>
    </div>
  );
}
