"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["All", "Furniture", "Handmade", "Natural Products", "Wood picks"] as const;

const items = [
  { src: "/uploads/2022/05/portfolio_grid1.jpg", title: "Modern Lounge Chair", category: "Furniture" },
  { src: "/uploads/2022/05/portfolio_grid2.jpg", title: "Handcrafted Wall Art", category: "Handmade" },
  { src: "/uploads/2022/05/portfolio_grid3.jpg", title: "Stone & Rattan Decor", category: "Natural Products" },
  { src: "/uploads/2022/05/portfolio_grid4.jpg", title: "Oak Wood Shelving", category: "Wood picks" },
  { src: "/uploads/2022/05/portfolio_grid5.jpg", title: "Velvet Accent Chair", category: "Furniture" },
  { src: "/uploads/2022/05/portfolio_grid6.jpg", title: "Macrame Wall Hanging", category: "Handmade" },
  { src: "/uploads/2022/05/portfolio_grid7.jpg", title: "Linen & Cotton Throws", category: "Natural Products" },
  { src: "/uploads/2022/05/portfolio_grid8.jpg", title: "Walnut Side Table", category: "Wood picks" },
];

export default function PortfolioFilter() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div
        className="flex flex-wrap justify-center"
        style={{ gap: "0 40px", marginBottom: 48 }}
      >
        {tabs.map((tab) => {
          const count = tab === "All" ? items.length : items.filter((i) => i.category === tab).length;
          const isActive = tab === active;
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: isActive ? "#AB6447" : "#5F6160",
                borderBottom: isActive ? "2px solid #AB6447" : "2px solid transparent",
                transition: "color 0.25s, border-color 0.25s",
                position: "relative",
              }}
            >
              {tab}{" "}
              <sup style={{ fontSize: 10, fontWeight: 400 }}>{count}</sup>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ gap: 0, marginBottom: 60 }}
      >
        {filtered.map((item, i) => (
          <div key={i} className="project-card aspect-square">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="project-card-overlay">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
                    fontSize: 11,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#AB6447",
                    marginBottom: 6,
                  }}
                >
                  {item.category}
                </p>
                <p
                  className="font-heading"
                  style={{ fontSize: 18, color: "#ffffff", lineHeight: "1.3" }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center" style={{ paddingBottom: 80 }}>
        <button className="btn-primary" style={{ border: "none", cursor: "pointer" }}>
          Load More
        </button>
      </div>
    </>
  );
}
