import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section className="page-title-section">
      <div className="container-custom">
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
