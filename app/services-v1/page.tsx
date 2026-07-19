import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description: "Our interior design services — from design and planning to furniture, decor, and exterior spaces.",
};

const serviceCards = [
  { image: "/uploads/2022/04/faq_studio_1.jpg", label: "Design & Planning" },
  { image: "/uploads/2022/04/faq_studio_2.jpg", label: "Custom Solutions" },
  { image: "/uploads/2022/04/faq_studio_3.jpg", label: "Furniture & Decor" },
  { image: "/uploads/2022/04/home3-service1.jpg", label: "Exterior Design" },
  { image: "/uploads/2022/04/home3-service2.jpg", label: "Creating a Concept" },
  { image: "/uploads/2022/04/home3-service3.jpg", label: "Author's Control" },
];

const values = [
  {
    title: "Timeless Aesthetic",
    desc: "We craft interiors that remain elegant, functional, and inspiring for years to come.",
  },
  {
    title: "Personalized Design",
    desc: "Every space is tailored to reflect the client's unique lifestyle, taste, and needs.",
  },
  {
    title: "Innovative Solutions",
    desc: "We blend creativity with the latest materials and technology to deliver smart, modern designs.",
  },
];

const steps = [
  {
    num: "01",
    title: "Conclusion of an Agreement",
    desc: "We begin by understanding your vision, finalizing the design scope, and signing a clear agreement—direct and transparent.",
  },
  {
    num: "02",
    title: "Planning & Preparation",
    desc: "We handle site assessments, material planning, and scheduling to ensure a smooth design and execution process.",
  },
  {
    num: "03",
    title: "Execution & Styling",
    desc: "Our team brings the design to life—managing installations, finishes, and decor to deliver a refined, ready-to-live-in space.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Services"
          bgImage="/uploads/2022/04/top_page_services.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />

        {/* ── OUR SERVICES INTRO + GRID ── */}
        <section style={{ backgroundColor: "#fff", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container-custom">
            <Reveal direction="up">
              <div className="text-center mb-16" style={{ maxWidth: 680, margin: "0 auto 64px" }}>
                <p className="sub-label mb-4">Our Services</p>
                <h2
                  className="font-heading mb-5"
                  style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: "1.15", color: "#191D1B" }}
                >
                  We Follow Global Interior Design Trends
                </h2>
                <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.75" }}>
                  We collaborate closely with you to understand your style, space, and lifestyle—bringing modern design concepts tailored to your vision.
                </p>
              </div>
            </Reveal>

            {/* 3×2 service image card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 4 }}>
              {serviceCards.map((card, i) => (
                <Reveal key={i} direction="up" delay={i * 60} className="project-card" style={{ height: 280 }}>
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className="object-cover"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(9,27,25,0.78) 0%, rgba(9,27,25,0.1) 55%, transparent 100%)",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "24px 28px",
                      zIndex: 2,
                    }}
                  >
                    <h3
                      className="font-heading"
                      style={{ fontSize: 20, color: "#ffffff", lineHeight: "1.3" }}
                    >
                      {card.label}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR VALUES ── */}
        <section style={{ backgroundColor: "#EFEEED", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container-custom">
            <Reveal direction="up">
              <div className="text-center mb-16">
                <p className="sub-label mb-4">Our Values</p>
                <h2
                  className="font-heading"
                  style={{ fontSize: "clamp(28px, 3.5vw, 46px)", lineHeight: "1.2", color: "#191D1B" }}
                >
                  Good Vision for Many Years
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {values.map((val, i) => (
                <Reveal key={i} direction="up" delay={i * 100}>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "44px 36px",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        backgroundColor: "#095B67",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 24,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4M12 3C7.029 3 3 7.029 3 12s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3
                      className="font-heading mb-3"
                      style={{ fontSize: 22, color: "#191D1B", lineHeight: "1.3" }}
                    >
                      {val.title}
                    </h3>
                    <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.75" }}>
                      {val.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR PROCESSING ── */}
        <section style={{ backgroundColor: "#2F2F2F", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container-custom">
            <Reveal direction="up">
              <div className="text-center mb-16">
                <p className="sub-label mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Our Processing</p>
                <h2
                  className="font-heading"
                  style={{ fontSize: "clamp(28px, 3.5vw, 46px)", lineHeight: "1.2", color: "#ffffff" }}
                >
                  How We Work With You From Concept to Completion
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {steps.map((step, i) => (
                <Reveal key={i} direction="up" delay={i * 100}>
                  <div style={{ padding: "48px 40px", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                    <div
                      className="font-heading"
                      style={{ fontSize: 52, color: "rgba(255,255,255,0.08)", lineHeight: 1, marginBottom: 24, fontWeight: 400 }}
                    >
                      {step.num}
                    </div>
                    <h3
                      className="font-heading mb-4"
                      style={{ fontSize: 22, color: "#ffffff", lineHeight: "1.3" }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: "1.75" }}>
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: "#EFEEED", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container-custom text-center">
            <Reveal direction="up">
              <p className="sub-label mb-4">Ready to Start?</p>
              <h2
                className="font-heading mb-5"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: "1.15", color: "#191D1B" }}
              >
                Let&apos;s Create Something Together
              </h2>
              <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7", maxWidth: 540, margin: "0 auto 40px" }}>
                Tell us about your project and we&apos;ll get back to you with a custom proposal tailored to your needs.
              </p>
              <Link href="/contact-us" className="btn-primary">
                Contact Us
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
