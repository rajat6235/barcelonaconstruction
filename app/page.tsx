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

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* PAGE-LEVEL SCROLL PROGRESS BAR */}
        <ScrollProgress />

        {/* HERO SLIDER */}
        <HeroSlider />

        {/* ── ABOUT SECTION ── */}
        <section style={{ paddingTop: 150, paddingBottom: 150, backgroundColor: "#fff" }}>
          <div className="container-custom">
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row" style={{ paddingBottom: 100, alignItems: "flex-start" }}>
              <Reveal direction="left" delay={0} className="lg:flex-none lg:w-1/2 lg:pr-24">
                <p className="sub-label mb-4">About Barcelona Constructions</p>
                <h2
                  className="font-heading mb-6"
                  style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: "1.15", color: "#191D1B" }}
                >
                  We Study the Best Way to Communicate a Product
                </h2>
                <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7" }}>
                  Uniting modern construction methods with a deep respect for traditional craftsmanship,
                  everything we make is designed to endure and bring joy for generations to come.
                </p>
              </Reveal>
              <Reveal direction="right" delay={120} className="hidden lg:block lg:flex-none lg:w-1/2">
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
            <div className="flex flex-col lg:flex-row items-start" style={{ gap: 80 }}>
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
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        border: "2px solid rgba(255,255,255,0.9)",
                        backgroundColor: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                        transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), background-color 0.3s",
                      }}
                    >
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
                        <path d="M0 0l16 9L0 18V0z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </Reveal>

              <Reveal direction="up" delay={160} className="lg:flex-none" style={{ flexBasis: "50%" }}>
                <h3
                  className="font-heading mb-4"
                  style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: "1.45", color: "#095B67", fontStyle: "italic" }}
                >
                  &ldquo;We are create buildings, furniture and interiors that connect people with the rhythms of nature.&rdquo;
                </h3>
                <p className="mb-8" style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7" }}>
                  Working with the beauty and durability of wood, our design-led structures invite.
                </p>
                <Link href="/about-us" className="btn-primary">
                  More about us
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── DARK SERVICES SECTION ── */}
        <section style={{ backgroundColor: "#2F2F2F", position: "relative", overflow: "hidden" }}>
          <span
            className="watermark absolute"
            style={{ fontSize: "clamp(150px,20vw,250px)", color: "rgba(255,255,255,0.025)", top: "5%", left: "-7%", zIndex: 0 }}
            aria-hidden="true"
          >
            Barcelona
          </span>
          <span
            className="watermark absolute"
            style={{ fontSize: "clamp(150px,25vw,390px)", color: "rgba(255,255,255,0.025)", bottom: "2%", right: "-4%", zIndex: 0 }}
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
            <div style={{ flex: "0 0 49%", padding: "120px 80px" }}>
              <Reveal direction="up" delay={0}>
                <p className="sub-label mb-4" style={{ color: "#ffffff" }}>What we do</p>
                <h2
                  className="font-heading mb-10"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: "1.15", color: "#ffffff" }}
                >
                  What We Offer for You
                </h2>
              </Reveal>

              {services.map((service, i) => (
                <Reveal key={i} direction="up" delay={i * 100 + 100}>
                  <div style={{ marginBottom: i < services.length - 1 ? 36 : 0 }}>
                    <h3
                      className="font-heading mb-3"
                      style={{ fontSize: 20, fontWeight: 400, color: "#ffffff", lineHeight: "1.3" }}
                    >
                      {service.title}
                    </h3>
                    <p style={{ fontWeight: 300, color: "rgba(255,255,255,0.58)", lineHeight: "1.7", fontSize: 15, marginBottom: 12 }}>
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
        <section style={{ backgroundColor: "#ffffff", paddingTop: 140, paddingBottom: 150 }}>
          <div className="container-custom">
            <Reveal direction="up" delay={0}>
              <div className="text-center mb-12" style={{ padding: "0 100px" }}>
                <p className="sub-label mb-4">Our Projects</p>
                <h2
                  className="font-heading"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: "1.2", color: "#191D1B" }}
                >
                  Here are Some of Our Favorite Projects We Completed for Many Clients Over the Years
                </h2>
              </div>
            </Reveal>

            {/* Row 1 */}
            <div className="flex gap-0" style={{ paddingBottom: 4 }}>
              {portfolioImages.slice(0, 3).map((img, i) => (
                <div key={i} className="project-card flex-1" style={{ minHeight: 280 }}>
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
            <div className="flex gap-0" style={{ paddingBottom: 50 }}>
              {portfolioImages.slice(3, 6).map((img, i) => (
                <div key={i} className="project-card flex-1" style={{ minHeight: 280 }}>
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
          <div className="flex">
            {instaImages.map((src, i) => (
              <div key={i} className="insta-card flex-1">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  width={170}
                  height={116}
                  className="object-cover w-full h-full"
                  style={{ display: "block" }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
