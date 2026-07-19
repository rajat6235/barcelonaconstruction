import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  bgImage?: string;
}

export default function PageHero({ title, breadcrumbs, bgImage = "/uploads/2022/04/top_page.jpg" }: PageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "420px",
        overflow: "hidden",
        display: "flex",
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
        style={{ objectPosition: "center" }}
        priority
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(15,20,18,0.42)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 30px",
        }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: "clamp(48px, 7vw, 90px)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          {title}
        </h1>

        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-60">
                    <path d="M6 3l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
                {crumb.href ? (
                  <Link href={crumb.href} className="text-white/70 hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
