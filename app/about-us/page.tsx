import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import { Reveal } from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Barcelona Constructions — our story, vision, and commitment to purposeful interior design.",
};

const whyChooseUs = [
  "High-Quality Craftsmanship",
  "Tailored Design Solutions",
  "Experienced Designers",
  "Transparent Pricing",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About Us"
          bgImage="/uploads/2022/04/top_page_about.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        {/* ── INTRO SECTION ── */}
        <section style={{ backgroundColor: "#fff", paddingTop: 120, paddingBottom: 100 }}>
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              {/* Left: text */}
              <Reveal direction="left" className="flex-1">
                <p className="sub-label mb-4" style={{ color: "#AB6447" }}>About Us</p>
                <h2
                  className="font-heading mb-6"
                  style={{ fontSize: "clamp(32px, 4.5vw, 60px)", lineHeight: "1.1", color: "#191D1B" }}
                >
                  It&apos;s time for a new perspective on design.
                </h2>
                <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.75", maxWidth: 520 }}>
                  We collaborate with design enthusiasts and experts to craft interiors that blend functionality with timeless aesthetics—where every detail serves a purpose and elevates the space.
                </p>
              </Reveal>

              {/* Right: image */}
              <Reveal direction="right" delay={120} className="flex-1">
                <Image
                  src="/uploads/2022/04/about_image2.jpg"
                  alt="Our design studio"
                  width={560}
                  height={420}
                  className="w-full object-cover"
                  style={{ display: "block" }}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section style={{ backgroundColor: "#fff", paddingBottom: 120 }}>
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              {/* Left: image */}
              <Reveal direction="left" className="flex-1 hidden lg:block">
                <Image
                  src="/uploads/2022/04/about_image1.jpg"
                  alt="Craftsmanship detail"
                  width={520}
                  height={600}
                  className="w-full object-cover"
                  style={{ display: "block" }}
                />
              </Reveal>

              {/* Right: content */}
              <Reveal direction="right" delay={100} className="flex-1">
                <p className="sub-label mb-4">Why Choose Us</p>
                <h2
                  className="font-heading mb-5"
                  style={{ fontSize: "clamp(28px, 3.5vw, 46px)", lineHeight: "1.2", color: "#191D1B" }}
                >
                  We Deliver Beautiful, Purposeful Spaces
                </h2>
                <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.75", marginBottom: 32 }}>
                  Thoughtful design takes time, care, and expertise. Like great interiors, it&apos;s about more than appearance—it&apos;s about how it makes you feel.
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}>
                  {whyChooseUs.map((item, i) => (
                    <li key={i} className="flex items-center gap-3" style={{ paddingBottom: 14, borderBottom: "1px solid rgba(0,0,0,0.07)", marginBottom: 14 }}>
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          backgroundColor: "#095B67",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span style={{ fontWeight: 400, color: "#191D1B", fontSize: 15 }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/services-v1" className="btn-primary">
                  Our Services
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── STUDIO IN NUMBERS ── */}
        <section style={{ backgroundColor: "#fff", position: "relative", overflow: "hidden", padding: "0" }}>
          <div className="flex items-stretch">
            {/* Left image */}
            <div className="hidden lg:block relative overflow-hidden" style={{ flex: "0 0 26%" }}>
              <Image
                src="/uploads/2022/04/faq_studio_1.jpg"
                alt="Studio detail"
                width={400}
                height={500}
                className="object-cover w-full h-full"
                style={{ display: "block" }}
              />
            </div>

            {/* Center content */}
            <div style={{ flex: 1, padding: "100px 80px", backgroundColor: "#EFEEED" }}>
              <Reveal direction="up">
                <p className="sub-label mb-4">Studio in Numbers</p>
                <h2
                  className="font-heading mb-4"
                  style={{ fontSize: "clamp(28px, 3.5vw, 46px)", lineHeight: "1.2", color: "#191D1B" }}
                >
                  Crafting Beautiful Spaces, Backed by Experience
                </h2>
                <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7", marginBottom: 48, maxWidth: 480 }}>
                  Designing a timeless interior takes vision, skill, and dedication—our numbers reflect the passion we bring to every project.
                </p>

                <div className="flex gap-12 flex-wrap mb-12">
                  {[
                    { target: 346, suffix: "+", label: "Projects Completed" },
                    { target: 98, suffix: "%", label: "Client Satisfaction Rate" },
                    { target: 7, suffix: "+", label: "Years Experience" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div
                        className="font-heading"
                        style={{ fontSize: "clamp(44px, 5vw, 64px)", fontWeight: 400, color: "#095B67", lineHeight: 1 }}
                      >
                        <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                      </div>
                      <div style={{ fontWeight: 300, color: "#5F6160", fontSize: 14, marginTop: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/portfolio-grid-no-space" className="btn-primary">
                  View Our Cases
                </Link>
              </Reveal>
            </div>

            {/* Right image */}
            <div className="hidden lg:block relative overflow-hidden" style={{ flex: "0 0 26%" }}>
              <Image
                src="/uploads/2022/04/faq_studio_2.jpg"
                alt="Studio space"
                width={400}
                height={500}
                className="object-cover w-full h-full"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* ── BEST FOR YOU ── */}
        <section style={{ backgroundColor: "#2F2F2F", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container-custom">
            <Reveal direction="up">
              <div className="text-center mb-16">
                <p className="sub-label mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Best for You</p>
                <h2
                  className="font-heading"
                  style={{ fontSize: "clamp(28px, 3.5vw, 46px)", lineHeight: "1.2", color: "#ffffff" }}
                >
                  Designs That Inspire, Spaces That Reflect You
                </h2>
                <p style={{ fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: "1.7", maxWidth: 560, margin: "16px auto 0" }}>
                  We aim to shape trends, not follow them—merging creativity, function, and emotion in every design.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col lg:flex-row gap-8">
              {[
                {
                  image: "/uploads/2022/04/faq_studio_3.jpg",
                  label: "3D Visualization",
                  desc: "Experience a lifelike 3D view of your future space, down to the finest detail.",
                  delay: 0,
                },
                {
                  image: "/uploads/2022/04/about_image1.jpg",
                  label: "Individual Project",
                  desc: "Every interior is crafted uniquely—reflecting your style, needs, and story.",
                  delay: 150,
                },
              ].map((card, i) => (
                <Reveal key={i} direction="up" delay={card.delay} className="flex-1">
                  <div className="project-card" style={{ height: 380 }}>
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
                        background: "linear-gradient(to top, rgba(9,27,25,0.85) 0%, transparent 60%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: 32,
                        zIndex: 2,
                      }}
                    >
                      <h3
                        className="font-heading mb-2"
                        style={{ fontSize: 24, color: "#ffffff", lineHeight: "1.3" }}
                      >
                        {card.label}
                      </h3>
                      <p style={{ fontWeight: 300, color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: "1.6" }}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDER'S VISION ── */}
        <section style={{ backgroundColor: "#fff", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Image */}
              <Reveal direction="left" className="flex-shrink-0">
                <Image
                  src="/uploads/2022/04/team_slide_1.jpg"
                  alt="Dilbagh Singh Chahal, CEO"
                  width={340}
                  height={420}
                  className="object-cover"
                  style={{ display: "block" }}
                />
              </Reveal>

              {/* Content */}
              <Reveal direction="right" delay={100} className="flex-1">
                <p className="sub-label mb-4">Leadership</p>
                <h2
                  className="font-heading mb-2"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: "1.2", color: "#191D1B" }}
                >
                  Founder&apos;s Vision
                </h2>
                <p
                  style={{ fontWeight: 500, fontSize: 14, color: "#AB6447", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 24 }}
                >
                  Dilbagh Singh Chahal — CEO
                </p>
                <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.8", marginBottom: 32 }}>
                  Under the visionary leadership of Dilbagh Singh Chahal, our founder and CEO, Barcelona Constructions aims to set new benchmarks in the industry. Dil Chahal&apos;s forward-thinking approach and unwavering commitment to quality have been the driving forces behind our innovative solutions and exceptional service standards.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── LET'S WORK TOGETHER ── */}
        <section style={{ backgroundColor: "#095B67", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container-custom text-center">
            <Reveal direction="up">
              <p className="sub-label mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Let&apos;s Work Together</p>
              <h2
                className="font-heading mb-5"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: "1.2", color: "#ffffff" }}
              >
                Get Incredible Interior Design Right Now!
              </h2>
              <p style={{ fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: "1.7", maxWidth: 540, margin: "0 auto 40px" }}>
                At every stage, we could supervise your project — controlling all the details and consulting the builders.
              </p>
              <Link
                href="/contact-us"
                className="btn-primary"
                style={{ backgroundColor: "#ffffff", color: "#095B67" }}
              >
                Get In Touch
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
