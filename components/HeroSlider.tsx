"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    sublabel: "Barcelona Constructions",
    heading: "Creation of a Unique Interior Design",
    body: "We work with ambitious brands that need courage, clarity & consistency in their video, inside & out.",
    cta: { text: "Contact Us", href: "/contact-us" },
    bg: "/uploads/2022/06/home4_slide1.jpg",
  },
  {
    sublabel: "Barcelona Construction",
    heading: "Better Living is Your Right, not Privilege",
    body: "We work with ambitious brands that need courage, clarity & consistency in their video, inside & out.",
    cta: { text: "Create Project", href: "/contact-us" },
    bg: "/uploads/2022/06/home4_slide2.jpg",
  },
  {
    sublabel: "Art Interior Studio",
    heading: "Beauty Meets the Ultimate Way to Stay Practical",
    body: "We work with ambitious brands that need courage, clarity & consistency in their video, inside & out.",
    cta: { text: "Create Project", href: "/contact-us" },
    bg: "/uploads/2022/06/home4_slide3.jpg",
  },
];

function SlideBackground({ src, active }: { src: string; active: boolean }) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        opacity: active ? 1 : 0,
        transition: "opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
        zIndex: 0,
      }}
    >
      <div
        className={active ? "hero-ken-burns" : ""}
        style={{ position: "absolute", inset: 0 }}
      >
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}

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
        zIndex: 3,
        opacity: active ? 1 : 0,
        transition: "opacity 0.72s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: active ? "auto" : "none",
      }}
    >
      <div className="container-custom w-full">
        <div style={{ maxWidth: 600 }}>
          {/* Sub-label */}
          <p
            className="sub-label"
            style={{
              marginBottom: 20,
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.72s cubic-bezier(0.16,1,0.3,1) 0.08s, transform 0.72s cubic-bezier(0.16,1,0.3,1) 0.08s",
            }}
          >
            {slide.sublabel}
          </p>

          {/* Heading */}
          <h1
            className="font-heading hero-heading"
            style={{
              fontSize: "clamp(34px, 6vw, 88px)",
              lineHeight: "1.08",
              color: "#2A2B2E",
              marginBottom: 24,
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(22px)",
              transition: "opacity 0.72s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.72s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          >
            {slide.heading}
          </h1>

          {/* Body */}
          <p
            style={{
              fontWeight: 300,
              fontSize: 16,
              lineHeight: "1.75",
              color: "#5F6160",
              maxWidth: 440,
              marginBottom: 40,
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.72s cubic-bezier(0.16,1,0.3,1) 0.32s, transform 0.72s cubic-bezier(0.16,1,0.3,1) 0.32s",
            }}
          >
            {slide.body}
          </p>

          {/* CTA */}
          <div
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.72s cubic-bezier(0.16,1,0.3,1) 0.44s, transform 0.72s cubic-bezier(0.16,1,0.3,1) 0.44s",
            }}
          >
            <Link href={slide.cta.href} className="btn-primary">
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
      setTimeout(() => setTransitioning(false), 1100);
    },
    [transitioning, current]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 7000);
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
        progressRef.current.style.transition = "transform 7s linear";
        progressRef.current.style.transform = "scaleX(1)";
      }
    }, 30);
    return () => {
      if (progressAnim.current) clearTimeout(progressAnim.current);
    };
  }, [current]);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 620,
        backgroundColor: "#EBE7E4",
        overflow: "hidden",
      }}
      aria-label="Hero slider"
    >
      {/* Background images */}
      {slides.map((slide, i) => (
        <SlideBackground key={i} src={slide.bg} active={i === current} />
      ))}

      {/* Warm cream gradient overlay — editorial split: cream left, image right */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: [
            "linear-gradient(",
            "  100deg,",
            "  rgba(235,231,228,0.97) 0%,",
            "  rgba(235,231,228,0.94) 28%,",
            "  rgba(235,231,228,0.78) 48%,",
            "  rgba(235,231,228,0.32) 68%,",
            "  rgba(235,231,228,0) 100%",
            ")",
          ].join(""),
          zIndex: 1,
        }}
      />

      {/* Subtle bottom vignette */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to top, rgba(235,231,228,0.4) 0%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* Decorative watermark */}
      <span
        className="watermark"
        style={{
          position: "absolute",
          fontSize: "clamp(160px, 28vw, 390px)",
          color: "rgba(255,255,255,0.2)",
          top: "60px",
          left: "-140px",
          zIndex: 1,
          lineHeight: 1,
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        Barcelona
      </span>

      {/* Slide content */}
      {slides.map((slide, i) => (
        <SlideContent key={i} slide={slide} active={i === current} />
      ))}

      {/* Bottom progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "rgba(9,91,103,0.1)",
          zIndex: 5,
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

      {/* Navigation — numbered dots + thin lines */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          zIndex: 4,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "block",
                width: i === current ? 32 : 8,
                height: 2,
                borderRadius: 2,
                backgroundColor: i === current ? "#095B67" : "rgba(9,91,103,0.28)",
                transition: "all 0.44s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Slide counter — top right */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          right: 40,
          zIndex: 4,
          fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.14em",
          color: "rgba(9,91,103,0.5)",
        }}
        aria-hidden="true"
      >
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: 40,
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
        aria-hidden="true"
      >
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, transparent, rgba(9,91,103,0.4))",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "0.2em",
            color: "rgba(9,91,103,0.5)",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
