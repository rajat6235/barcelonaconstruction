import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Services",
  description: "Our construction and interior design services including interior design, office design, and home advising.",
};

const services = [
  {
    icon: "/uploads/2022/04/floor-plan.svg",
    title: "Interior Design",
    desc: "We understand the value of building relationships with our clients and take the time to understand their aspirations. Our design approach is collaborative, starting with a comprehensive brief that captures your vision.",
    image: "/uploads/2022/04/faq_studio_1.jpg",
  },
  {
    icon: "/uploads/2022/04/blueprint.svg",
    title: "Office Design",
    desc: "Modern workplaces need to inspire creativity, support focus, and reflect your brand identity. We create office environments that drive productivity and make an impression on clients and employees alike.",
    image: "/uploads/2022/04/faq_studio_2.jpg",
  },
  {
    icon: "/uploads/2022/04/furnitures.svg",
    title: "Home Advising",
    desc: "Our home advising service delivers expert guidance on everything from layout optimization to material selection. We help homeowners make informed decisions at every stage of their renovation or build.",
    image: "/uploads/2022/04/faq_studio_3.jpg",
  },
  {
    icon: "/uploads/2022/04/3d-architecture.svg",
    title: "3D Architecture",
    desc: "Visualize your project before a single brick is laid. Our 3D architectural modeling service gives you a photorealistic preview of the finished result, letting us refine every detail to match your vision.",
    image: "/uploads/2022/04/about_image1.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Our Services"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />

        {/* Services list */}
        <section style={{ backgroundColor: "#fff", paddingTop: 150, paddingBottom: 150 }}>
          <div className="container-custom">
            <div className="space-y-24">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={48}
                        height={48}
                        style={{ filter: "invert(24%) sepia(68%) saturate(500%) hue-rotate(150deg)" }}
                      />
                    </div>
                    <h2
                      className="font-heading mb-5"
                      style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: "1.2", color: "#191D1B" }}
                    >
                      {service.title}
                    </h2>
                    <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.75", marginBottom: 32 }}>
                      {service.desc}
                    </p>
                    <Link href="/contact-us" className="btn-primary">
                      Get Started
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="flex-1 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={540}
                      height={400}
                      className="object-cover w-full"
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ backgroundColor: "#EFEEED", paddingTop: 120, paddingBottom: 120 }}>
          <div className="container-custom text-center">
            <p className="sub-label mb-4">Ready to Start?</p>
            <h2
              className="font-heading mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: "1.15", color: "#191D1B" }}
            >
              Let&apos;s Create Something Together
            </h2>
            <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7", maxWidth: 580, margin: "0 auto 40px" }}>
              Tell us about your project and we&apos;ll get back to you with a custom proposal tailored to your needs.
            </p>
            <Link href="/contact-us" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
