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
  title: "Rent Scaffolding | 777 Scaffolding Supply - Same Day Delivery in Semenyih",
  description:
    "Rent and buy scaffolding in Semenyih, Selangor. Quick and easy all-in-one scaffolding supply with same day delivery, cheap rental, and high-quality equipment. Contact us now!",
  keywords: "scaffolding, rent scaffolding, sewa, buy, same day delivery, scaffolding for sale, scaffolding near me",
  openGraph: {
    title: "Scaffolding Supply",
    description: "We sell and rent both new and used scaffolding.",
    type: "website",
    images: [{ url: "/img/share-image.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-poppins">
        <AOSInit />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
