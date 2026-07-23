import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ScrollToTop from "@/components/ScrollToTop";
import ExpertiseSection from "@/components/ExpertiseSection";
import { Reveal } from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import ContactForm from "@/app/contact-us/ContactForm";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Barcelona Constructions — uniting modern construction methods with a deep respect for traditional craftsmanship. Interior design, office design, and home advising.",
};

const portfolioImages = [
  { src: "/uploads/2022/04/home1-project1.jpg", alt: "Project 1" },
  { src: "/uploads/2022/04/home1-project2.jpg", alt: "Project 2" },
  { src: "/uploads/2022/04/home1-project3.jpg", alt: "Project 3" },
  { src: "/uploads/2022/04/home1-project4.jpg", alt: "Project 4" },
  { src: "/uploads/2022/04/home1-project5.jpg", alt: "Project 5" },
  { src: "/uploads/2022/04/home1-project6.jpg", alt: "Project 6" },
];

const services = [
  {
    title: "Interior Design",
    desc: "Transform your living spaces with our creative interior design services. We bring your vision to life, ensuring each detail reflects your style and needs.",
  },
  {
    title: "Office Design",
    desc: "Elevate your workspace effortlessly with our expert office design services. We meticulously create productive, inspiring environments tailored precisely to your business goals.",
  },
  {
    title: "Home Advising",
    desc: "Receive expert guidance on all aspects of your home. Whether planning a renovation or seeking improvement tips, our advice helps you achieve your goals.",
  },
];

const instaImages = [
  "/uploads/2022/04/home1-insta1.jpg",
  "/uploads/2022/04/home1-insta2.jpg",
  "/uploads/2022/04/home1-insta3.jpg",
  "/uploads/2022/04/home1-insta4.jpg",
  "/uploads/2022/04/home1-insta5.jpg",
];

const partnerLogos = [1, 2, 3, 4, 5, 6, 7];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <ScrollProgress />

        {/* ── HERO SLIDER ── */}
        <HeroSlider />

        {/* ── ABOUT SECTION ── */}
        <section style={{ paddingTop: 140, paddingBottom: 140, backgroundColor: "#fff" }}>
          <div className="container-custom">
            {/* Row 1 */}
            <div
              className="flex flex-col lg:flex-row about-intro-row"
              style={{ paddingBottom: 100, alignItems: "flex-start", gap: 80 }}
            >
              <Reveal direction="left" delay={0} className="lg:flex-none" style={{ flex: "0 0 50%" }}>
                <p className="sub-label mb-5">About Barcelona Constructions</p>
                <h2
                  className="font-heading mb-6"
                  style={{ fontSize: "clamp(32px, 4vw, 54px)", lineHeight: "1.12", color: "#191D1B" }}
                >
                  We Study the Best Way to Communicate a Product
                </h2>
                <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.78", fontSize: 16 }}>
                  Uniting modern construction methods with a deep respect for traditional craftsmanship,
                  everything we make is designed to endure and bring joy for generations to come.
                </p>
              </Reveal>

              <Reveal direction="right" delay={120} className="hidden lg:block" style={{ flex: 1 }}>
                <Image
                  src="/uploads/2022/04/home1-image1.png"
                  alt="Interior design details"
                  width={570}
                  height={614}
                  className="w-full object-cover"
                  style={{ display: "block" }}
                />
              </Reveal>
            </div>

            {/* Row 2 */}
            <div className="about-row2 flex flex-col lg:flex-row items-start" style={{ gap: 80 }}>
              <Reveal direction="up" delay={0} className="lg:flex-none" style={{ flexBasis: "50%" }}>
                <div className="relative" style={{ display: "inline-block" }}>
                  <Image
                    src="/uploads/2022/04/home1-bg-video.jpg"
                    alt="Video preview"
                    width={300}
                    height={166}
                    className="object-cover"
                    style={{ display: "block" }}
                  />
                  <a
                    href="https://vimeo.com/544262415"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label="Play video"
                  >
                    <span
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1.5px solid rgba(255,255,255,0.85)",
                        backgroundColor: "rgba(255,255,255,0.14)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        transition: "transform 0.38s cubic-bezier(0.16,1,0.3,1), background-color 0.32s ease",
                      }}
                    >
                      <svg width="14" height="16" viewBox="0 0 16 18" fill="white">
                        <path d="M0 0l16 9L0 18V0z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </Reveal>

              <Reveal direction="up" delay={160} className="lg:flex-none" style={{ flexBasis: "50%" }}>
                <h3
                  className="font-heading mb-5"
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 26px)",
                    lineHeight: "1.48",
                    color: "#095B67",
                    fontStyle: "italic",
                    letterSpacing: "-0.01em",
                  }}
                >
                  &ldquo;We are create buildings, furniture and interiors that connect people with the rhythms of nature.&rdquo;
                </h3>
                <p className="mb-8" style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.78", fontSize: 15 }}>
                  Working with the beauty and durability of wood, our design-led structures invite.
                </p>
                <Link href="/about-us" className="btn-primary">
                  More about us
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── PARTNER LOGOS ── */}
        <section
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid rgba(25,29,27,0.06)",
            borderBottom: "1px solid rgba(25,29,27,0.06)",
            padding: "52px 0",
          }}
        >
          <div className="container-custom">
            <Reveal direction="up" delay={0}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "clamp(24px, 4vw, 72px)",
                  flexWrap: "wrap",
                }}
              >
                {partnerLogos.map((n) => (
                  <Image
                    key={n}
                    src={`/uploads/2022/04/home1-partner${n}.png`}
                    alt={`Partner ${n}`}
                    width={120}
                    height={48}
                    className="partner-logo"
                    style={{ height: "auto", maxHeight: 40 }}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── DARK SERVICES SECTION ── */}
        <section style={{ backgroundColor: "#2F2F2F", position: "relative", overflow: "hidden" }}>
          <span
            className="watermark absolute"
            style={{
              fontSize: "clamp(120px, 20vw, 260px)",
              color: "rgba(255,255,255,0.025)",
              top: "8%",
              left: "-4%",
              zIndex: 0,
            }}
            aria-hidden="true"
          >
            Barcelona
          </span>
          <span
            className="watermark absolute"
            style={{
              fontSize: "clamp(120px, 24vw, 400px)",
              color: "rgba(255,255,255,0.025)",
              bottom: "0%",
              right: "-4%",
              zIndex: 0,
            }}
            aria-hidden="true"
          >
            Studio
          </span>

          <div className="flex items-stretch" style={{ position: "relative", zIndex: 1 }}>
            {/* Left image */}
            <div className="hidden lg:block relative overflow-hidden" style={{ flex: "0 0 25%" }}>
              <Image
                src="/uploads/2022/04/home1-image2.jpg"
                alt="Luxury interior"
                width={445}
                height={342}
                className="object-cover w-full h-full"
                style={{ display: "block", transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)" }}
              />
            </div>

            {/* Center content */}
            <div className="services-center">
              <Reveal direction="up" delay={0}>
                <p className="sub-label mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>What we do</p>
                <h2
                  className="font-heading mb-12"
                  style={{ fontSize: "clamp(28px, 3.5vw, 46px)", lineHeight: "1.12", color: "#ffffff" }}
                >
                  What We Offer for You
                </h2>
              </Reveal>

              {services.map((service, i) => (
                <Reveal key={i} direction="up" delay={i * 100 + 80}>
                  <div
                    style={{
                      marginBottom: i < services.length - 1 ? 40 : 0,
                      paddingBottom: i < services.length - 1 ? 40 : 0,
                      borderBottom: i < services.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    }}
                  >
                    <h3
                      className="font-heading mb-3"
                      style={{ fontSize: 20, fontWeight: 400, color: "#ffffff", lineHeight: "1.3" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.52)",
                        lineHeight: "1.76",
                        fontSize: 14,
                        marginBottom: 14,
                      }}
                    >
                      {service.desc}
                    </p>
                    <Link href="/services-v1" className="services-learn-more">
                      Learn more
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right image */}
            <div className="hidden lg:block relative overflow-hidden" style={{ flex: 1 }}>
              <Image
                src="/uploads/2022/04/home1-image3.png"
                alt="Modern interior"
                width={545}
                height={787}
                className="object-cover w-full h-full"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* ── PROJECTS SECTION ── */}
        <section style={{ backgroundColor: "#ffffff", paddingTop: 140, paddingBottom: 140 }}>
          <div className="container-custom">
            <Reveal direction="up" delay={0}>
              <div className="projects-intro text-center" style={{ marginBottom: 56 }}>
                <p className="sub-label mb-5" style={{ justifyContent: "center" }}>Our Projects</p>
                <h2
                  className="font-heading"
                  style={{ fontSize: "clamp(28px, 3.5vw, 50px)", lineHeight: "1.15", color: "#191D1B" }}
                >
                  Here are Some of Our Favorite Projects We Completed for Many Clients Over the Years
                </h2>
              </div>
            </Reveal>

            {/* Row 1 */}
            <div className="flex" style={{ gap: 3, marginBottom: 3 }}>
              {portfolioImages.slice(0, 3).map((img, i) => (
                <div key={i} className="project-card flex-1" style={{ minHeight: "clamp(200px, 22vw, 300px)" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={380}
                    height={280}
                    className="object-cover w-full h-full"
                    style={{ display: "block" }}
                  />
                  <div className="project-card-overlay">
                    <span className="project-card-overlay-label">View Project</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex" style={{ gap: 3, marginBottom: 56 }}>
              {portfolioImages.slice(3, 6).map((img, i) => (
                <div key={i} className="project-card flex-1" style={{ minHeight: "clamp(200px, 22vw, 300px)" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={380}
                    height={280}
                    className="object-cover w-full h-full"
                    style={{ display: "block" }}
                  />
                  <div className="project-card-overlay">
                    <span className="project-card-overlay-label">View Project</span>
                  </div>
                </div>
              ))}
            </div>

            <Reveal direction="up" delay={0}>
              <div className="text-center">
                <Link href="/portfolio-grid-no-space" className="btn-primary">
                  View All Projects
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── EXPERTISE SECTION ── */}
        <ExpertiseSection />

        {/* ── INSTAGRAM GALLERY ── */}
        <section style={{ backgroundColor: "#ffffff" }}>
          {/* Label row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 0 0",
              gap: 16,
            }}
          >
            <div style={{ width: 32, height: 1, backgroundColor: "rgba(25,29,27,0.15)" }} />
            <span
              style={{
                fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#5F6160",
              }}
            >
              Our Gallery
            </span>
            <div style={{ width: 32, height: 1, backgroundColor: "rgba(25,29,27,0.15)" }} />
          </div>

          <div className="flex" style={{ marginTop: 24 }}>
            {instaImages.map((src, i) => (
              <div
                key={i}
                className="insta-card flex-1"
                style={{ height: "clamp(120px, 15vw, 200px)" }}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  width={220}
                  height={200}
                  className="object-cover w-full h-full"
                  style={{ display: "block" }}
                />
              </div>
            ))}
          </div>
        </section>
        {/* ── CONTACT SECTION ── */}
        <section style={{ backgroundColor: "#EFEEED", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container-custom">
            <Reveal direction="up">
              <div className="text-center mb-16">
                <p className="sub-label mb-5" style={{ justifyContent: "center" }}>Get In Touch</p>
                <h2
                  className="font-heading mb-4"
                  style={{ fontSize: "clamp(32px, 4vw, 54px)", lineHeight: "1.08", color: "#191D1B" }}
                >
                  Drop Us a Line
                </h2>
                <p style={{ fontWeight: 300, color: "#9a9b9a", fontSize: 13, letterSpacing: "0.02em" }}>
                  Your email address will not be published. Required fields are marked *
                </p>
              </div>
            </Reveal>
            <div className="contact-form-card">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
