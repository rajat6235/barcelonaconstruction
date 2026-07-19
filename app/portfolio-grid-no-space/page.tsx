import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import { Reveal } from "@/components/Reveal";
import PortfolioFilter from "./PortfolioFilter";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our portfolio of interior design, furniture, and handmade works created for clients worldwide.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Portfolio"
          bgImage="/uploads/2022/04/top_page_about.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Portfolio" },
          ]}
        />

        <section style={{ backgroundColor: "#fff", paddingTop: 80 }}>
          <div className="container-custom">
            <Reveal direction="up">
              <div className="text-center" style={{ marginBottom: 48 }}>
                <p className="sub-label mb-4" style={{ color: "#AB6447" }}>Our Portfolio</p>
                <h2
                  className="font-heading"
                  style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: "1.2", color: "#191D1B" }}
                >
                  Some of Our Works and Case Studies for Clients
                </h2>
              </div>
            </Reveal>

            {/* Filter tabs + grid — client component */}
            <PortfolioFilter />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
