import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  bgImage?: string;
}

export default function PageHero({
  title,
  breadcrumbs,
  bgImage = "/uploads/2022/04/top_page.jpg",
}: PageHeroProps) {
  return (
    <section
      className="page-hero"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background image */}
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover"
        style={{ objectPosition: "center 40%" }}
        priority
      />

      {/* Layered overlays for depth */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(10,18,16,0.38) 0%, rgba(10,18,16,0.54) 60%, rgba(10,18,16,0.72) 100%)",
          zIndex: 1,
        }}
      />
      {/* Subtle warm tint */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(9, 40, 44, 0.12)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 clamp(20px, 5vw, 60px)",
          width: "100%",
          maxWidth: 860,
        }}
      >
        {/* Decorative line */}
        <div
          aria-hidden
          style={{
            width: 40,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.4)",
            margin: "0 auto 20px",
          }}
        />

        <h1
          className="font-heading"
          style={{
            fontSize: "clamp(40px, 7vw, 88px)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            marginBottom: 0,
          }}
        >
          {title}
        </h1>

        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            className="breadcrumb"
            aria-label="Breadcrumb"
            style={{ marginTop: 20 }}
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ opacity: 0.4 }}
                  >
                    <path
                      d="M6 3l5 5-5 5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    style={{
                      fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.22s ease",
                    }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    style={{
                      fontFamily: "var(--font-lexend-var), 'Lexend', sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.38)",
                    }}
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          background: "linear-gradient(to top, rgba(0,0,0,0.12) 0%, transparent 100%)",
          zIndex: 2,
        }}
      />
    </section>
  );
}
