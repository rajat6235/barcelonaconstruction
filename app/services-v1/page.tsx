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
              <div className="text-center" style={{ maxWidth: 680, margin: "0 auto 64px" }}>
                <p className="sub-label mb-5" style={{ justifyContent: "center" }}>Our Services</p>
                <h2
                  className="font-heading mb-5"
                  style={{ fontSize: "clamp(28px, 4vw, 54px)", lineHeight: "1.1", color: "#191D1B" }}
                >
                  We Follow Global Interior Design Trends
                </h2>
                <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.78", fontSize: 15 }}>
                  We collaborate closely with you to understand your style, space, and lifestyle—bringing modern design concepts tailored to your vision.
                </p>
              </div>
            </Reveal>

            {/* 3×2 service image card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 3 }}>
              {serviceCards.map((card, i) => (
                <Reveal
                  key={i}
                  direction="up"
                  delay={i * 60}
                  className="project-card"
                  style={{ height: "clamp(200px, 26vw, 300px)" }}
                >
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className="object-cover"
                  />
                  {/* Permanent gradient at bottom */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(9,27,25,0.72) 0%, rgba(9,27,25,0.1) 50%, transparent 100%)",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "24px 28px",
                      zIndex: 2,
                    }}
                  >
                    <h3
                      className="font-heading"
                      style={{ fontSize: 20, color: "#ffffff", lineHeight: "1.2", letterSpacing: "-0.01em" }}
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
                <p className="sub-label mb-5" style={{ justifyContent: "center" }}>Our Values</p>
                <h2
                  className="font-heading"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: "1.12", color: "#191D1B" }}
                >
                  Good Vision for Many Years
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((val, i) => (
                <Reveal key={i} direction="up" delay={i * 100}>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "48px 40px",
                      height: "100%",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.28s ease, box-shadow 0.28s ease",
                    }}
                    className="group"
                  >
                    {/* Step number */}
                    <div
                      style={{
                        fontFamily: "var(--font-libre-caslon-var), serif",
                        fontSize: 48,
                        fontWeight: 400,
                        color: "rgba(9,91,103,0.08)",
                        lineHeight: 1,
                        marginBottom: 24,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      0{i + 1}
                    </div>
                    <div
                      style={{
                        width: 32,
                        height: 2,
                        backgroundColor: "#095B67",
                        marginBottom: 20,
                      }}
                    />
                    <h3
                      className="font-heading mb-4"
                      style={{ fontSize: 22, color: "#191D1B", lineHeight: "1.2", letterSpacing: "-0.01em" }}
                    >
                      {val.title}
                    </h3>
                    <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.78", fontSize: 14 }}>
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
                <p className="sub-label mb-5" style={{ color: "rgba(255,255,255,0.4)", justifyContent: "center" }}>
                  Our Processing
                </p>
                <h2
                  className="font-heading"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: "1.12", color: "#ffffff" }}
                >
                  How We Work With You From Concept to Completion
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 0 }}>
              {steps.map((step, i) => (
                <Reveal key={i} direction="up" delay={i * 100}>
                  <div
                    className="processing-step"
                    style={{
                      padding: "48px 40px",
                      borderLeft: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="font-heading"
                      style={{
                        fontSize: 56,
                        color: "rgba(255,255,255,0.06)",
                        lineHeight: 1,
                        marginBottom: 32,
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {step.num}
                    </div>
                    <div
                      style={{ width: 24, height: 2, backgroundColor: "rgba(9,91,103,0.6)", marginBottom: 20 }}
                    />
                    <h3
                      className="font-heading mb-4"
                      style={{ fontSize: 22, color: "#ffffff", lineHeight: "1.2", letterSpacing: "-0.01em" }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontWeight: 300, color: "rgba(255,255,255,0.48)", lineHeight: "1.78", fontSize: 14 }}>
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
              <p className="sub-label mb-5" style={{ justifyContent: "center" }}>Ready to Start?</p>
              <h2
                className="font-heading mb-5"
                style={{ fontSize: "clamp(28px, 4vw, 54px)", lineHeight: "1.1", color: "#191D1B" }}
              >
                Let&apos;s Create Something Together
              </h2>
              <p
                style={{
                  fontWeight: 300,
                  color: "#5F6160",
                  lineHeight: "1.78",
                  maxWidth: 520,
                  margin: "0 auto 44px",
                  fontSize: 15,
                }}
              >
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
