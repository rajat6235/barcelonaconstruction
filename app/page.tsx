import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ScrollToTop from "@/components/ScrollToTop";
import ExpertiseSection from "@/components/ExpertiseSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Barcelona Constructions — uniting modern construction methods with a deep respect for traditional craftsmanship. Interior design, office design, and home advising.",
};

const portfolioImages = [
  { src: "/uploads/2022/05/portfolio_post1.jpg", alt: "Project 1" },
  { src: "/uploads/2022/05/portfolio_post2.jpg", alt: "Project 2" },
  { src: "/uploads/2022/05/portfolio_post3.jpg", alt: "Project 3" },
  { src: "/uploads/2022/05/portfolio_post4.jpg", alt: "Project 4" },
  { src: "/uploads/2022/05/portfolio_post5.jpg", alt: "Project 5" },
  { src: "/uploads/2022/05/portfolio_post6.jpg", alt: "Project 6" },
];

const clients = [
  { src: "/uploads/2022/05/client1.png", alt: "Client 1" },
  { src: "/uploads/2022/05/client2.png", alt: "Client 2" },
  { src: "/uploads/2022/05/client3.png", alt: "Client 3" },
  { src: "/uploads/2022/05/client4.png", alt: "Client 4" },
  { src: "/uploads/2022/05/client5.png", alt: "Client 5" },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO SLIDER */}
        <HeroSlider />

        {/* ABOUT SECTION */}
        <section style={{ paddingTop: 150, paddingBottom: 150, backgroundColor: "#fff" }}>
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Left column */}
              <div className="flex-1 lg:pr-24">
                <p className="sub-label mb-4">About Barcelona Constructions</p>
                <h2
                  className="font-heading mb-6"
                  style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: "1.15", color: "#191D1B" }}
                >
                  We Study the Best Way to Communicate a Product
                </h2>
                <p className="mb-10" style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7" }}>
                  Uniting modern construction methods with a deep respect for traditional craftsmanship,
                  everything we make is designed to endure and bring joy for generations to come.
                </p>

                {/* Inner 2-col row: image+video | quote+text+button */}
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  {/* Left inner: image + video popup */}
                  <div className="flex-shrink-0 relative">
                    <Image
                      src="/uploads/2022/04/home1-image1.png"
                      alt="Our work"
                      width={200}
                      height={240}
                      className="object-cover"
                      style={{ display: "block" }}
                    />
                    {/* Video popup button overlay */}
                    <a
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label="Play video"
                    >
                      <span
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ border: "2px solid #fff", backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
                          <path d="M0 0l16 9L0 18V0z" />
                        </svg>
                      </span>
                    </a>
                  </div>

                  {/* Right inner: quote + text + button */}
                  <div className="flex-1">
                    <h3
                      className="font-heading mb-4"
                      style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: "1.45", color: "#00776E", fontStyle: "italic" }}
                    >
                      &ldquo;We create buildings, furniture and interiors that connect people with the rhythms of nature.&rdquo;
                    </h3>
                    <p className="mb-8" style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7" }}>
                      Working with the beauty and durability of wood, our design-led structures invite.
                    </p>
                    <Link href="/about-us" className="btn-primary" style={{ width: 260, textAlign: "center", display: "inline-block" }}>
                      More About Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right column: stacked images */}
              <div className="hidden lg:flex flex-col gap-4" style={{ width: "42%" }}>
                <Image
                  src="/uploads/2022/04/about_image1.jpg"
                  alt="Interior design"
                  width={440}
                  height={320}
                  className="object-cover w-full"
                  style={{ objectPosition: "center" }}
                />
                <Image
                  src="/uploads/2022/04/about_image2.jpg"
                  alt="Construction details"
                  width={440}
                  height={260}
                  className="object-cover w-full"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* DARK SERVICES SECTION */}
        <section
          style={{
            backgroundColor: "#2F2F2F",
            paddingTop: 140,
            paddingBottom: 140,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative watermarks */}
          <span
            className="watermark absolute"
            style={{
              fontSize: "clamp(150px, 20vw, 250px)",
              color: "rgba(255,255,255,0.03)",
              top: "5%",
              left: "-7%",
              zIndex: 0,
            }}
            aria-hidden="true"
          >
            Barcelona
          </span>
          <span
            className="watermark absolute"
            style={{
              fontSize: "clamp(150px, 25vw, 390px)",
              color: "rgba(255,255,255,0.03)",
              bottom: "2%",
              right: "-4%",
              zIndex: 0,
            }}
            aria-hidden="true"
          >
            Studio
          </span>

          <div className="container-custom relative" style={{ zIndex: 1 }}>
            {/* Heading */}
            <div className="text-center mb-16" style={{ padding: "0 70px" }}>
              <p className="sub-label mb-4" style={{ color: "#fff" }}>
                Our Services
              </p>
              <h2
                className="font-heading"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: "1.15", color: "#fff" }}
              >
                We Create Amazing Things
              </h2>
            </div>

            {/* 3 Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: "/uploads/2022/04/floor-plan.svg",
                  title: "Interior Design",
                  desc: "We understand the value of building relationships with our clients and take the time to understand their aspirations.",
                  href: "/services-v1",
                },
                {
                  icon: "/uploads/2022/04/blueprint.svg",
                  title: "Office Design",
                  desc: "We understand the value of building relationships with our clients and take the time to understand their aspirations.",
                  href: "/services-v1",
                },
                {
                  icon: "/uploads/2022/04/furnitures.svg",
                  title: "Home Advising",
                  desc: "We understand the value of building relationships with our clients and take the time to understand their aspirations.",
                  href: "/services-v1",
                },
              ].map((service, i) => (
                <div key={i} className="text-center" style={{ margin: "0 34px" }}>
                  <div className="flex justify-center mb-6">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={60}
                      height={60}
                      style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
                    />
                  </div>
                  <h3
                    className="font-heading mb-6"
                    style={{ fontSize: 24, fontWeight: 400, color: "#ffffff", lineHeight: "1.3" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "inherit",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: "1.7",
                      fontSize: 15,
                      marginBottom: 24,
                    }}
                  >
                    {service.desc}
                  </p>
                  <Link
                    href={service.href}
                    style={{
                      fontFamily: "inherit",
                      fontSize: 16,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#ffffff",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                  >
                    Learn more
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          style={{ backgroundColor: "#ffffff", paddingTop: 140, paddingBottom: 150 }}
        >
          <div className="container-custom">
            {/* Header */}
            <div className="text-center mb-12" style={{ padding: "0 200px" }}>
              <p className="sub-label mb-4">Our Recent Projects</p>
              <h2
                className="font-heading"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: "1.15", color: "#191D1B" }}
              >
                Create Project That Inspires
              </h2>
            </div>

            {/* Grid rows */}
            <div style={{ paddingBottom: 40 }}>
              {/* Row 1: 3 images */}
              <div className="flex gap-0">
                {portfolioImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="flex-1 relative overflow-hidden group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={380}
                      height={280}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{ display: "block" }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* Row 2: 3 images */}
              <div className="flex gap-0" style={{ paddingBottom: 40 }}>
                {portfolioImages.slice(3, 6).map((img, i) => (
                  <div key={i} className="flex-1 relative overflow-hidden group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={380}
                      height={280}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{ display: "block" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="/portfolio-grid-no-space" className="btn-primary">
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* EXPERTISE SECTION (client component for progress bar animation) */}
        <ExpertiseSection />

        {/* PARTNERS SECTION */}
        <section style={{ backgroundColor: "#ffffff", paddingTop: 150, paddingBottom: 150 }}>
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-between gap-8">
              {clients.map((client, i) => (
                <div key={i} className="flex items-center justify-center" style={{ flex: "0 0 auto" }}>
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={120}
                    height={56}
                    className="partner-logo"
                    style={{ objectFit: "contain", maxHeight: 56 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
