"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const skills = [
  { title: "Interior Design", percent: 92 },
  { title: "Architecture & Planning", percent: 85 },
  { title: "Construction Management", percent: 78 },
];

const teamMembers = [
  {
    name: "Jonathan Smith",
    role: "Lead Architect",
    image: "/uploads/2022/04/team1.jpg",
    socials: ["#", "#", "#"],
  },
  {
    name: "Emily Clarke",
    role: "Interior Designer",
    image: "/uploads/2022/04/team2.jpg",
    socials: ["#", "#", "#"],
  },
  {
    name: "Michael Torres",
    role: "Project Manager",
    image: "/uploads/2022/04/team3.jpg",
    socials: ["#", "#", "#"],
  },
  {
    name: "Sarah Johnson",
    role: "Senior Architect",
    image: "/uploads/2022/04/team4.jpg",
    socials: ["#", "#", "#"],
  },
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
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={ref} className="progress-bar-container" style={{ marginBottom: 35 }}>
      <div className="progress-bar-header">
        <span
          className="font-heading"
          style={{ color: "#00776E", fontSize: 18, lineHeight: "26px" }}
        >
          {title}
        </span>
        <span
          className="font-heading"
          style={{ color: "#00776E", fontSize: 16 }}
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
  const [activeTeam, setActiveTeam] = useState(0);

  return (
    <section
      style={{
        backgroundColor: "#EFEEED",
        paddingTop: 146,
        paddingBottom: 240,
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
        Studio
      </span>

      <div className="container-custom relative" style={{ zIndex: 2 }}>
        {/* Section heading */}
        <div
          className="mb-16"
          style={{ paddingBottom: 120, position: "relative", zIndex: 2 }}
        >
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: skills */}
            <div style={{ flex: "0 0 38.144%", maxWidth: "38.144%", paddingRight: 100 }}>
              <p className="sub-label mb-4">My Expertise</p>
              <h2
                className="font-heading mb-6"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: "1.15",
                  color: "#191D1B",
                }}
              >
                Skills We&apos;re Bringing to the Table
              </h2>
              <p className="mb-10" style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7" }}>
                We&apos;re passionate about what we do and always looking for the best approach to deliver creative solutions.
              </p>

              {skills.map((skill) => (
                <ProgressBar key={skill.title} title={skill.title} percent={skill.percent} />
              ))}
            </div>

            {/* Right: team slider */}
            <div style={{ flex: "0 0 61.856%", maxWidth: "61.856%" }}>
              <div className="relative">
                {/* Team card */}
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0" style={{ width: 220 }}>
                    <Image
                      src={teamMembers[activeTeam].image}
                      alt={teamMembers[activeTeam].name}
                      width={220}
                      height={290}
                      className="object-cover"
                      style={{ display: "block", objectPosition: "top" }}
                    />
                  </div>
                  <div className="flex-1 pt-4">
                    <h3
                      className="font-heading mb-1"
                      style={{ fontSize: 26, lineHeight: "36px", color: "#191D1B" }}
                    >
                      {teamMembers[activeTeam].name}
                    </h3>
                    <p
                      className="mb-6 team-role"
                      style={{ fontSize: 16, fontWeight: 300, color: "#5F6160", lineHeight: "32px" }}
                    >
                      {teamMembers[activeTeam].role}
                    </p>
                    {/* Social icons */}
                    <div className="flex gap-3 mb-8">
                      {["f", "t", "in"].map((s) => (
                        <a
                          key={s}
                          href="#"
                          className="social-icon"
                          aria-label={`${s} social link`}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                            <circle cx="6" cy="6" r="4" />
                          </svg>
                        </a>
                      ))}
                    </div>

                    {/* Sub-heading for team section (right column) */}
                    <p className="sub-label mb-4">Our Experts</p>
                    <h4
                      className="font-heading mb-4"
                      style={{ fontSize: "clamp(22px, 2.5vw, 34px)", lineHeight: "1.2", color: "#191D1B" }}
                    >
                      Meet Our Creative Team
                    </h4>
                    <p style={{ fontWeight: 300, color: "#5F6160", lineHeight: "1.7", marginBottom: 24 }}>
                      Our team of experienced architects and designers will partner with you to create spaces you&apos;ll love.
                    </p>
                    <Link href="/about-us" className="btn-primary" style={{ display: "inline-block" }}>
                      Meet the Team
                    </Link>
                  </div>
                </div>

                {/* Team navigation arrows */}
                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => setActiveTeam((p) => (p - 1 + teamMembers.length) % teamMembers.length)}
                    className="flex items-center justify-center"
                    style={{
                      width: 44,
                      height: 44,
                      border: "1px solid rgba(41,43,46,0.2)",
                      background: "transparent",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                    aria-label="Previous team member"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 3L5 8l5 5" stroke="#191D1B" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActiveTeam((p) => (p + 1) % teamMembers.length)}
                    className="flex items-center justify-center"
                    style={{
                      width: 44,
                      height: 44,
                      border: "1px solid rgba(41,43,46,0.2)",
                      background: "transparent",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                    aria-label="Next team member"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3l5 5-5 5" stroke="#191D1B" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
