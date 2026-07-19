"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const skills = [
  { title: "Space Planning", percent: 70 },
  { title: "Aesthetics & Styling", percent: 65 },
  { title: "Material & Finishes", percent: 80 },
];

function ProgressBar({ title, percent }: { title: string; percent: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(percent);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={ref} className="progress-bar-container" style={{ marginBottom: 35 }}>
      <div className="progress-bar-header">
        <span
          className="font-heading"
          style={{ color: "#095B67", fontSize: 18, lineHeight: "26px" }}
        >
          {title}
        </span>
        <span
          className="font-heading"
          style={{ color: "#095B67", fontSize: 16 }}
        >
          {percent}%
        </span>
      </div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function ExpertiseSection() {
  return (
    <section
      style={{
        backgroundColor: "#EFEEED",
        paddingTop: 140,
        paddingBottom: 140,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative watermarks */}
      <span
        className="watermark absolute"
        style={{
          fontSize: "clamp(150px, 25vw, 390px)",
          color: "rgba(255,255,255,0.4)",
          top: "26%",
          left: "-52%",
          zIndex: 0,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        Barcelona
      </span>
      <span
        className="watermark absolute"
        style={{
          fontSize: "clamp(150px, 25vw, 390px)",
          color: "rgba(255,255,255,0.4)",
          bottom: "-15%",
          right: "-32%",
          zIndex: 0,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        Interior
      </span>

      <div className="container-custom relative" style={{ zIndex: 2 }}>
        {/* Row 1: heading + body (left 50%) | progress bars (right 50%) */}
        <div
          className="flex flex-col lg:flex-row gap-16"
          style={{ paddingBottom: 100 }}
        >
          <div style={{ flex: "0 0 50%", paddingRight: 60 }}>
            <p className="sub-label mb-4">Our expertise</p>
            <h2
              className="font-heading mb-6"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                lineHeight: "1.15",
                color: "#191D1B",
              }}
            >
              Our Work &amp; Art
            </h2>
            <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7" }}>
              Bringing together ancient craftsmanship and contemporary construction techniques,
              our mission is to build a better way to live and inspire positive change.
            </p>
          </div>

          <div style={{ flex: "0 0 50%", paddingTop: 8 }}>
            {skills.map((skill) => (
              <ProgressBar key={skill.title} title={skill.title} percent={skill.percent} />
            ))}
          </div>
        </div>

        {/* Row 2: founder photo (left 38%) | founder's vision text (right 62%) */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div style={{ flex: "0 0 38%", maxWidth: "38%" }}>
            <Image
              src="/uploads/2025/03/Dilchahl.jpeg"
              alt="Dilbagh Singh Chahal — Founder & CEO"
              width={380}
              height={480}
              className="object-cover w-full"
              style={{ display: "block", objectPosition: "top" }}
            />
          </div>

          <div style={{ flex: 1, paddingTop: 16 }}>
            <p className="sub-label mb-4">Our Experts</p>
            <h3
              className="font-heading mb-6"
              style={{
                fontSize: "clamp(24px, 2.8vw, 38px)",
                lineHeight: "1.2",
                color: "#191D1B",
              }}
            >
              Founder&apos;s Vision
            </h3>
            <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7", marginBottom: 32 }}>
              Under the visionary leadership of Dilbagh Singh Chahal, our founder and CEO,
              Dil Chahal Constructions aims to set new benchmarks in the industry.
              Dil Chahal&apos;s forward-thinking approach and unwavering commitment to quality
              have been the driving forces behind our innovative solutions and exceptional service standards.
            </p>
            <p style={{ fontWeight: 500, color: "#191D1B", fontSize: 16, lineHeight: "1.5" }}>
              Dilbagh Singh Chahal
            </p>
            <p style={{ fontWeight: 300, color: "#5F6160", fontSize: 14 }}>
              Founder &amp; CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
