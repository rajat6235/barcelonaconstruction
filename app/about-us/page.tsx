import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Barcelona Constructions — our story, team, and commitment to quality craftsmanship.",
};

const teamMembers = [
  { name: "Jonathan Smith", role: "Lead Architect", image: "/uploads/2022/04/team1.jpg" },
  { name: "Emily Clarke", role: "Interior Designer", image: "/uploads/2022/04/team2.jpg" },
  { name: "Michael Torres", role: "Project Manager", image: "/uploads/2022/04/team3.jpg" },
  { name: "Sarah Johnson", role: "Senior Architect", image: "/uploads/2022/04/team4.jpg" },
  { name: "David Park", role: "3D Visualizer", image: "/uploads/2022/04/team5.jpg" },
  { name: "Anna White", role: "Interior Consultant", image: "/uploads/2022/04/team6.jpg" },
];

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "380+", label: "Projects Completed" },
  { number: "240+", label: "Happy Clients" },
  { number: "32", label: "Awards Won" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About Us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        {/* About section */}
        <section style={{ backgroundColor: "#fff", paddingTop: 150, paddingBottom: 150 }}>
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Images */}
              <div className="flex-1 flex gap-4">
                <div className="flex flex-col gap-4 mt-16">
                  <Image
                    src="/uploads/2022/04/about_image1.jpg"
                    alt="Our team at work"
                    width={200}
                    height={260}
                    className="object-cover"
                  />
                </div>
                <Image
                  src="/uploads/2022/04/about_image2.jpg"
                  alt="Interior design project"
                  width={280}
                  height={380}
                  className="object-cover flex-1"
                  style={{ objectPosition: "center" }}
                />
              </div>

              {/* Text */}
              <div className="flex-1 lg:pl-8">
                <p className="sub-label mb-4">About Barcelona Constructions</p>
                <h2
                  className="font-heading mb-6"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: "1.15", color: "#191D1B" }}
                >
                  We Study the Best Way to Communicate a Product
                </h2>
                <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.75", marginBottom: 24 }}>
                  Uniting modern construction methods with a deep respect for traditional craftsmanship,
                  everything we make is designed to endure and bring joy for generations to come.
                </p>
                <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.75", marginBottom: 40 }}>
                  Working with the beauty and durability of natural materials, our design-led structures
                  invite people to connect with their spaces in a meaningful way.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 mb-10">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div
                        className="font-heading"
                        style={{ fontSize: 42, fontWeight: 400, color: "#095B67", lineHeight: 1 }}
                      >
                        {stat.number}
                      </div>
                      <div style={{ fontWeight: 300, color: "#5F6160", fontSize: 14, marginTop: 4 }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact-us" className="btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quote / Mission */}
        <section style={{ backgroundColor: "#2F2F2F", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container-custom text-center">
            <blockquote
              className="font-heading"
              style={{
                fontSize: "clamp(22px, 3vw, 38px)",
                fontStyle: "italic",
                color: "#ffffff",
                lineHeight: "1.5",
                maxWidth: 760,
                margin: "0 auto",
              }}
            >
              &ldquo;We create buildings, furniture and interiors that connect people with the rhythms of nature.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Team section */}
        <section style={{ backgroundColor: "#EFEEED", paddingTop: 150, paddingBottom: 150 }}>
          <div className="container-custom">
            <div className="text-center mb-16">
              <p className="sub-label mb-4">Our Team</p>
              <h2
                className="font-heading"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: "1.15", color: "#191D1B" }}
              >
                Meet Our Creative Team
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={160}
                      height={200}
                      className="object-cover w-full transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: "top" }}
                    />
                  </div>
                  <h3
                    className="font-heading mb-1"
                    style={{ fontSize: 18, lineHeight: "26px", color: "#191D1B" }}
                  >
                    {member.name}
                  </h3>
                  <p style={{ fontSize: 14, fontWeight: 300, color: "#5F6160" }}>
                    {member.role}
                  </p>
                  {/* Social icons */}
                  <div className="flex justify-center gap-2 mt-3">
                    {["#", "#", "#"].map((_, i) => (
                      <a key={i} href="#" className="social-icon" style={{ width: 28, height: 28 }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                          <circle cx="5" cy="5" r="3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section style={{ backgroundColor: "#fff", paddingTop: 150, paddingBottom: 150 }}>
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex-1">
                <p className="sub-label mb-4">FAQ</p>
                <h2
                  className="font-heading mb-10"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: "1.15", color: "#191D1B" }}
                >
                  Frequently Asked Questions
                </h2>

                {[
                  {
                    q: "How long does a typical project take?",
                    a: "Project timelines vary based on scope and complexity. A standard interior design project typically takes 8–16 weeks from concept to completion.",
                  },
                  {
                    q: "Do you work on both residential and commercial projects?",
                    a: "Yes, we work across both residential and commercial sectors, bringing the same level of care and attention to detail to every project.",
                  },
                  {
                    q: "What is your design process?",
                    a: "We begin with a discovery meeting to understand your vision, followed by concept development, design presentation, refinement, and finally build-out.",
                  },
                  {
                    q: "Can you work within a fixed budget?",
                    a: "Absolutely. We're experienced at delivering exceptional results within budget constraints and will advise you on where to invest for maximum impact.",
                  },
                ].map((item, i) => (
                  <details
                    key={i}
                    className="border-b"
                    style={{ borderColor: "rgba(41,43,46,0.1)", paddingBottom: 20, marginBottom: 20 }}
                  >
                    <summary
                      className="cursor-pointer font-heading"
                      style={{ fontSize: 18, color: "#191D1B", lineHeight: "1.4", listStyle: "none" }}
                    >
                      {item.q}
                    </summary>
                    <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7", marginTop: 12 }}>
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>

              <div className="flex-1 hidden lg:block">
                <Image
                  src="/uploads/2022/04/faq_studio_1.jpg"
                  alt="Our studio"
                  width={520}
                  height={600}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
