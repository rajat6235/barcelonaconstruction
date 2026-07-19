import type { Metadata } from "next";
import { Jost, Parisienne, Libre_Caslon_Text, Lexend } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost-var",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  variable: "--font-parisienne-var",
  weight: "400",
  display: "swap",
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  variable: "--font-libre-caslon-var",
  weight: ["400", "700"],
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend-var",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Barcelona Constructions | Interior & Construction Design",
    template: "%s | Barcelona Constructions",
  },
  description:
    "Barcelona Constructions — uniting modern construction methods with deep respect for traditional craftsmanship. Interior design, office design, and home advising.",
  keywords: ["construction", "interior design", "office design", "home advising", "Barcelona Constructions"],
  authors: [{ name: "Barcelona Constructions" }],
  openGraph: {
    type: "website",
    siteName: "Barcelona Constructions",
    title: "Barcelona Constructions | Interior & Construction Design",
    description:
      "Uniting modern construction methods with a deep respect for traditional craftsmanship.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${parisienne.variable} ${libreCaslon.variable} ${lexend.variable}`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
