import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://nexlyticssolutions.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nexlytics Solutions — Web, Mobile & AI Development Studio",
    template: "%s | Nexlytics Solutions",
  },
  description:
    "Nexlytics Solutions is a development studio building websites, mobile apps, and AI-powered tools for businesses worldwide. Get a free quote for your next project.",
  keywords: [
    "web development company",
    "mobile app development company",
    "AI development company",
    "custom software development",
    "Next.js development agency",
    "startup web design",
  ],
  authors: [{ name: "Nexlytics Solutions" }],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Nexlytics Solutions — Web, Mobile & AI Development Studio",
    description:
      "We design and build websites, mobile apps, and AI-powered tools for businesses that need software done right the first time.",
    url: siteUrl,
    siteName: "Nexlytics Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nexlytics Solutions — Web, Mobile & AI Development Studio",
    description:
      "We design and build websites, mobile apps, and AI-powered tools for businesses that need software done right the first time.",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nexlytics Solutions",
  url: siteUrl,
  description:
    "Development studio building websites, mobile apps, and AI-powered tools for businesses worldwide.",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  telephone: "+92-333-4886288",
  email: "info@nexlytics.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}