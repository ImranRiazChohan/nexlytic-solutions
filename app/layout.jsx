import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexlytic Solutions — Intelligent Digital Products",
  description:
    "Nexlytic Solutions is a full-service digital agency based in Karachi, Pakistan. We build data-driven web apps, mobile experiences, AI agents, and stunning designs.",
  keywords: "web development, mobile apps, AI chatbot, data services, UI UX design, graphics designing, Karachi",
  openGraph: {
    title: "Nexlytic Solutions",
    description: "Transforming Ideas into Intelligent Digital Products",
    url: "https://nexlyticsolutions.com",
    siteName: "Nexlytic Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}