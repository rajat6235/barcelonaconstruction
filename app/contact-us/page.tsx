import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Barcelona Constructions. Reach out for your interior design, architecture, or construction management project.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Contact Us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact Us" },
          ]}
        />

        <section style={{ backgroundColor: "#fff", paddingTop: 150, paddingBottom: 150 }}>
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-20">
              {/* Left: contact info */}
              <div className="lg:flex-shrink-0" style={{ maxWidth: 400 }}>
                <p className="sub-label mb-4">Get In Touch</p>
                <h2
                  className="font-heading mb-6"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: "1.15", color: "#191D1B" }}
                >
                  We&apos;d Love to Hear From You
                </h2>
                <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.75", marginBottom: 40 }}>
                  Whether you have a project in mind or just want to learn more about what we do, reach out and we&apos;ll be in touch shortly.
                </p>

                {[
                  {
                    icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />,
                    label: "Address",
                    value: "4801 Wilshire Blvd Suite 110\nLos Angeles, CA 90010, USA",
                  },
                  {
                    icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />,
                    label: "Phone",
                    value: "+1 (213) 245-3010",
                    href: "tel:+12132453010",
                  },
                  {
                    icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
                    label: "Email",
                    value: "contact@barcelona.com",
                    href: "mailto:contact@barcelona.com",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 mb-8">
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{ width: 48, height: 48, backgroundColor: "#095B67", borderRadius: "50%", color: "#fff" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">{item.icon}</svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 500, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.05em", color: "#191D1B", marginBottom: 4 }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.6", textDecoration: "none" }}>
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.6", whiteSpace: "pre-line" }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: contact form (client component) */}
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section style={{ height: 400, backgroundColor: "#EFEEED", position: "relative" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <p style={{ fontWeight: 300, color: "#5F6160" }}>
              Map placeholder — embed Google Maps here
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
