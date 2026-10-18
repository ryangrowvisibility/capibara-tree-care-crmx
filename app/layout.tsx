import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const heading = Archivo({ variable: "--font-heading", subsets: ["latin"], weight: ["700", "800"] });
const body = Hanken_Grotesk({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Capibara Tree Care | Tree Removal & Trimming in Toronto, 24/7",
  description:
    "Toronto tree removal, trimming, stump grinding and 24/7 emergency tree service. Free estimates, careful crews and a spotless clean-up. 5.0 stars on Google. Call (437) 428-0281.",
  openGraph: {
    title: "Capibara Tree Care | Toronto Tree Service, 24/7",
    description: "Tree removal and trimming in Toronto and the GTA. Free estimates, 5.0 on Google. Call (437) 428-0281.",
    type: "website",
    locale: "en_CA",
    images: ["/images/p4.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
