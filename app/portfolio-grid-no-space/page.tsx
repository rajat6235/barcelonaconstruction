import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our portfolio of residential, commercial, and interior design projects.",
};

const portfolioItems = [
  { src: "/uploads/2022/05/portfolio_post1.jpg", title: "Modern Villa", category: "Interior Design", year: "2023" },
  { src: "/uploads/2022/05/portfolio_post2.jpg", title: "Executive Office", category: "Office Design", year: "2023" },
  { src: "/uploads/2022/05/portfolio_post3.jpg", title: "Mountain Retreat", category: "Architecture", year: "2022" },
  { src: "/uploads/2022/05/portfolio_post4.jpg", title: "Urban Loft", category: "Interior Design", year: "2022" },
  { src: "/uploads/2022/05/portfolio_post5.jpg", title: "Coastal Residence", category: "Architecture", year: "2022" },
  { src: "/uploads/2022/05/portfolio_post6.jpg", title: "Boutique Hotel", category: "Commercial", year: "2022" },
  { src: "/uploads/2022/05/portfolio_post7.jpg", title: "Family Home", category: "Interior Design", year: "2022" },
  { src: "/uploads/2022/05/portfolio_post8.jpg", title: "Tech Campus", category: "Office Design", year: "2021" },
  { src: "/uploads/2022/05/portfolio_post9.jpg", title: "Penthouse Suite", category: "Interior Design", year: "2021" },
  { src: "/uploads/2022/05/portfolio_post10.jpg", title: "Restaurant Interior", category: "Commercial", year: "2021" },
  { src: "/uploads/2022/05/portfolio_post11.jpg", title: "Luxury Condo", category: "Interior Design", year: "2021" },
  { src: "/uploads/2022/05/portfolio_post12.jpg", title: "Studio Apartment", category: "Home Advising", year: "2021" },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Our Projects"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Projects" },
          ]}
        />

        {/* Portfolio Grid */}
        <section style={{ backgroundColor: "#fff" }}>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            style={{ gap: 0 }}
          >
            {portfolioItems.map((item, i) => (
              <div key={i} className="relative overflow-hidden group aspect-square">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(9,91,103,0.85)" }}>
                  <p style={{ fontFamily: "inherit", fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
                    {item.category}
                  </p>
                  <h3
                    className="font-heading text-center"
                    style={{ fontSize: 20, color: "#ffffff", lineHeight: "1.3", padding: "0 20px" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#EFEEED", paddingTop: 120, paddingBottom: 120 }}>
          <div className="container-custom text-center">
            <p className="sub-label mb-4">Start Your Project</p>
            <h2
              className="font-heading mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: "1.15", color: "#191D1B" }}
            >
              Ready to Create Something Amazing?
            </h2>
            <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7", maxWidth: 560, margin: "0 auto 40px" }}>
              Every great project starts with a conversation. Let&apos;s discuss your vision and bring it to life.
            </p>
            <Link href="/contact-us" className="btn-primary">
              Start a Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
