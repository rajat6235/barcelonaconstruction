"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

function SlideContent({
  slide,
  active,
}: {
  slide: (typeof slides)[0];
  active: boolean;
}) {
  return (
    <div
      aria-hidden={!active}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        zIndex: 2,
        opacity: active ? 1 : 0,
        transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1)",
        pointerEvents: active ? "auto" : "none",
      }}
    >
      <div className="container-custom w-full">
        <div style={{ maxWidth: 960 }}>
          {/* Sub-label */}
          <p
            className="sub-label"
            style={{
              marginBottom: 16,
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s",
            }}
          >
            {slide.sublabel}
          </p>

          {/* Heading */}
          <h1
            className="font-heading"
            style={{
              fontSize: "clamp(42px, 6vw, 90px)",
              lineHeight: "1.111",
              color: "#2A2B2E",
              marginBottom: 24,
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.22s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.22s",
            }}
          >
            {slide.heading}
          </h1>

          {/* Body */}
          <p
            style={{
              fontWeight: 300,
              fontSize: 16,
              lineHeight: "1.7",
              color: "#5F6160",
              maxWidth: 480,
              marginBottom: 40,
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.34s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.34s",
            }}
          >
            {slide.body}
          </p>

          {/* CTA */}
          <div
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.46s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.46s",
            }}
          >
            <Link href={slide.cta.href} className="btn-primary" style={{ padding: "14px 28px" }}>
              {slide.cta.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressAnim = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === current) return;
      setTransitioning(true);
      setCurrent(index);
      setTimeout(() => setTransitioning(false), 900);
    },
    [transitioning, current]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [current, goTo]);

  /* Animate slide progress line */
  useEffect(() => {
    if (!progressRef.current) return;
    progressRef.current.style.transition = "none";
    progressRef.current.style.transform = "scaleX(0)";
    if (progressAnim.current) clearTimeout(progressAnim.current);
    progressAnim.current = setTimeout(() => {
      if (progressRef.current) {
        progressRef.current.style.transition = "transform 6s linear";
        progressRef.current.style.transform = "scaleX(1)";
      }
    }, 30);
    return () => { if (progressAnim.current) clearTimeout(progressAnim.current); };
  }, [current]);

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
          color: "rgba(255,255,255,0.35)",
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

      {/* Slides */}
      {slides.map((slide, i) => (
        <SlideContent key={i} slide={slide} active={i === current} />
      ))}

      {/* Slide progress line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "rgba(9,91,103,0.12)",
          zIndex: 4,
        }}
      >
        <div
          ref={progressRef}
          style={{
            height: "100%",
            background: "#095B67",
            transformOrigin: "left",
            transform: "scaleX(0)",
          }}
        />
      </div>

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
            aria-current={i === current ? "true" : undefined}
            style={{
              width: i === current ? 28 : 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: i === current ? "#095B67" : "rgba(9,91,103,0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          right: 70,
          zIndex: 3,
          fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.12em",
          color: "rgba(9,91,103,0.6)",
        }}
        aria-hidden="true"
      >
        0{current + 1} / 0{slides.length}
      </div>
    </section>
  );
}
