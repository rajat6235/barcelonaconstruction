import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import { Reveal } from "@/components/Reveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Barcelona Constructions. Reach out for your interior design, architecture, or construction management project.",
};

const contactInfo = [
  {
    icon: (
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    ),
    label: "Phone",
    value: "+1 (306) 717-1994",
    href: "tel:+13067171994",
  },
  {
    icon: (
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    ),
    label: "Address",
    value: "Unit 107, 1222 Alberta Ave,\nSaskatoon, SK S7K 1R4",
    href: undefined,
  },
  {
    icon: (
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    ),
    label: "Email",
    value: "contact@barcelonaconstruction.com",
    href: "mailto:contact@barcelonaconstruction.com",
  },
  {
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8zm0-10H9V4h6v2z" />
    ),
    label: "Working Hours",
    value: "Monday–Friday:\n8am — 6pm",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Contact Us"
          bgImage="/uploads/2022/04/top_page_contact.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact Us" },
          ]}
        />

        {/* ── FIND US / OFFICE ADDRESS ── */}
        <section style={{ backgroundColor: "#fff", paddingTop: 100, paddingBottom: 80 }}>
          <div className="container-custom">
            <Reveal direction="up">
              <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
                <div style={{ flex: "0 0 auto" }}>
                  <p className="sub-label mb-3">Find Us</p>
                  <h2
                    className="font-heading"
                    style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.15", color: "#191D1B" }}
                  >
                    Our Office Address
                  </h2>
                </div>
                <div style={{ flex: 1, paddingTop: 8, maxWidth: 440 }}>
                  <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.8" }}>
                    Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 4-column contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {contactInfo.map((item, i) => (
                <Reveal key={i} direction="up" delay={i * 80}>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#095B67">
                        {item.icon}
                      </svg>
                      <span
                        style={{
                          fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
                          fontSize: 12,
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "#191D1B",
                        }}
                      >
                        {item.label}:
                      </span>
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.6", textDecoration: "none", display: "block" }}
                        className="footer-contact-link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.6", whiteSpace: "pre-line" }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── GET IN TOUCH / FORM ── */}
        <section style={{ backgroundColor: "#EFEEED", paddingTop: 100, paddingBottom: 100 }}>
          <div className="container-custom">
            <Reveal direction="up">
              <div className="text-center mb-16">
                <p className="sub-label mb-4">Get In Touch</p>
                <h2
                  className="font-heading mb-4"
                  style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: "1.15", color: "#191D1B" }}
                >
                  Drop Us a Line
                </h2>
                <p style={{ fontWeight: 300, color: "#5F6160", fontSize: 14 }}>
                  Your email address will not be published. Required fields are marked *
                </p>
              </div>
            </Reveal>

            <div style={{ maxWidth: 860, margin: "0 auto", backgroundColor: "#ffffff", padding: "60px 60px" }}>
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
