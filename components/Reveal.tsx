"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale" | "fade";
  threshold?: number;
}

export function Reveal({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const initialTransform =
      direction === "up"    ? "translateY(28px)" :
      direction === "left"  ? "translateX(-28px)" :
      direction === "right" ? "translateX(28px)" :
      direction === "scale" ? "scale(0.96)" :
      "none";

    el.style.opacity = "0";
    if (initialTransform !== "none") el.style.transform = initialTransform;
    el.style.willChange = "opacity, transform";
    el.style.transition = `opacity 0.72s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.72s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "";
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, threshold]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
