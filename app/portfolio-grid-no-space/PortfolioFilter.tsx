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
        style={{ gap: "0 4px", marginBottom: 52 }}
        role="tablist"
        aria-label="Filter projects by category"
      >
        {tabs.map((tab) => {
          const count = tab === "All" ? items.length : items.filter((i) => i.category === tab).length;
          const isActive = tab === active;
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              role="tab"
              aria-selected={isActive}
              style={{
                background: isActive ? "#095B67" : "transparent",
                border: "1.5px solid",
                borderColor: isActive ? "#095B67" : "rgba(25,29,27,0.12)",
                borderRadius: 40,
                cursor: "pointer",
                padding: "9px 20px",
                fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: isActive ? "#ffffff" : "#5F6160",
                transition: "all 0.28s cubic-bezier(0.16,1,0.3,1)",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {tab}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "rgba(25,29,27,0.07)",
                  fontSize: 9,
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ gap: 3, marginBottom: 60 }}
      >
        {filtered.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className="project-card aspect-square"
            style={{
              transition: "opacity 0.32s ease",
            }}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="project-card-overlay">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#AB6447",
                    marginBottom: 6,
                  }}
                >
                  {item.category}
                </p>
                <p
                  className="font-heading"
                  style={{ fontSize: 17, color: "#ffffff", lineHeight: "1.2", letterSpacing: "-0.01em" }}
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
        <button className="btn-ghost" style={{ border: "1.5px solid rgba(9,91,103,0.4)", cursor: "pointer" }}>
          Load More
        </button>
      </div>
    </>
  );
}
