"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    sublabel: "Barcelona Constructions",
    heading: "Creation of a Unique Interior Design",
    body: "We work with ambitious brands that need courage, clarity & consistency in their video, inside & out.",
    cta: { text: "Contact Us", href: "/contact-us" },
  },
  {
    sublabel: "Barcelona Construction",
    heading: "Better Living is Your Right, not Privilege",
    body: "We work with ambitious brands that need courage, clarity & consistency in their video, inside & out.",
    cta: { text: "Create Project", href: "/contact-us" },
  },
  {
    sublabel: "Art Interior Studio",
    heading: "Beauty Meets the Ultimate Way to Stay Practical",
    body: "We work with ambitious brands that need courage, clarity & consistency in their video, inside & out.",
    cta: { text: "Create Project", href: "/contact-us" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 800);
    },
    [animating, current]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [current, goTo]);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 600,
        backgroundColor: "#EBE7E4",
        overflow: "hidden",
      }}
      aria-label="Hero slider"
    >
      {/* Decorative Parisienne watermark */}
      <span
        className="watermark"
        style={{
          position: "absolute",
          fontSize: "390px",
          color: "rgba(255,255,255,0.4)",
          top: "70px",
          left: "-151px",
          zIndex: 1,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
        aria-hidden="true"
      >
        Barcelona
      </span>

      {/* Slides — all absolutely positioned, fade in/out */}
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            zIndex: 2,
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.8s ease",
            pointerEvents: i === current ? "auto" : "none",
          }}
        >
          <div className="container-custom w-full">
            <div style={{ maxWidth: 960 }}>
              <p className="sub-label" style={{ marginBottom: 16 }}>{slide.sublabel}</p>

              <h1
                className="font-heading"
                style={{
                  fontSize: "clamp(42px, 6vw, 80px)",
                  lineHeight: "1.12",
                  color: "#191D1B",
                  marginBottom: 24,
                }}
              >
                {slide.heading}
              </h1>

              <p
                style={{
                  fontWeight: 300,
                  fontSize: 16,
                  lineHeight: "1.7",
                  color: "#5F6160",
                  maxWidth: 480,
                  marginBottom: 40,
                }}
              >
                {slide.body}
              </p>

              <Link href={slide.cta.href} className="btn-primary">
                {slide.cta.text}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Dot navigation */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          zIndex: 3,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? 28 : 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: i === current ? "#00776E" : "rgba(0,119,110,0.35)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
