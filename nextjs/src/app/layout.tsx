import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://777scaffolding.com"),
  title: "777 Scaffolding | Quality Scaffolding Solutions in Semenyih",
  description:
    "777 Scaffolding provides high-quality scaffolding products. Fast delivery, certified safety, and expert support.",
  keywords: "scaffolding, rent scaffolding, buy scaffolding, certified, delivery, construction, 777scaffolding",
  openGraph: {
    title: "777 Scaffolding | Quality Scaffolding Solutions in Semenyih",
    description: "777 Scaffolding provides high-quality scaffolding products. Fast delivery, certified safety, and expert support.",
    url: "https://777scaffolding.com",
    siteName: "777 Scaffolding",
    images: [
      {
        url: "/img/share-image.webp",
        width: 1200,
        height: 630,
        alt: "777 Scaffolding - Quality Scaffolding Solutions in Semenyih",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@777scaffolding",
    title: "777 Scaffolding | Quality Scaffolding Solutions in Semenyih",
    description: "777 Scaffolding provides high-quality scaffolding products. Fast delivery, certified safety, and expert support.",
    images: ["/img/share-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        {/* GEO meta tags for SEO */}
        <meta name="geo.region" content="MY" />
        <meta name="geo.placename" content="Semenyih, Malaysia" />
        <meta name="geo.position" content="2.9521890536794544;101.84469641051648" />
        <meta name="ICBM" content="2.9521890536794544, 101.84469641051648" />
      </head>
      <body className="min-h-full flex flex-col font-poppins">
        <AOSInit />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
