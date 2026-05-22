import Image from "next/image";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Scaffolding Products | 777 Scaffolding Supply - Rent and Buy in Semenyih",
  description:
    "Browse our wide range of scaffolding products for rent and sale in Semenyih, Selangor. Main frames, cross braces, clamps, and more with same day delivery.",
  openGraph: {
    title: "Scaffolding Supply",
    description: "We sell and rent both new and used scaffolding.",
    type: "website",
    images: [{ url: "/img/share-image.webp" }],
  },
};

const products = [
  {
    name: "Main Frame",
    desc: ["1219 x 1700 x 2.5", "1219 x 914 x 2.5"],
    img: "/img/product/frame.png",
    alt: "Main Frame scaffolding component for structural support",
  },
  {
    name: "Cross Brace",
    desc: ["1829mm x 1219mm x 2.0", "1829mm x 610mm x 2.0"],
    img: "/img/product/cross-brace.jpg",
    alt: "Cross Brace scaffolding component for stability",
  },
  {
    name: "Joint Pin",
    desc: ["225 x 2.2 (MS)"],
    img: "/img/product/joint-pin.png",
    alt: "Joint Pin for connecting scaffolding frames",
  },
  {
    name: "U-head",
    desc: ["600 x 32(MS)", "900 x 32(MS)"],
    img: "/img/product/u-head.png",
    alt: "U-head connector for scaffolding assembly",
  },
  {
    name: "Jack base",
    desc: ["600 x 32(MS)", "900 x 32(MS)"],
    img: "/img/product/jack-base.png",
    alt: "Jack base for stable scaffolding foundation",
  },
  {
    name: "Caster wheel",
    desc: ["6” wheel", "8” wheel"],
    img: "/img/product/caster-wheel.png",
    alt: "Caster wheel with brake system for mobile scaffolding",
    extra: <span className="text-yellow-500"> Brake system</span>,
  },
  {
    name: "Step ladder",
    desc: ["450 x 1829"],
    img: "/img/product/step-ladder.png",
    alt: "Step ladder for safe scaffolding access",
  },
  {
    name: "Catwalk",
    desc: ["500mm x 1829mm"],
    img: "/img/product/cat-walk.png",
    alt: "Catwalk platform for scaffolding work area",
  },
  {
    name: "G.I Pipe",
    desc: ["48.6mm x 6M x 2.0", "48.6mm x 6M x 2.5"],
    img: "/img/product/gi-pipe.png",
    alt: "Galvanized Iron Pipe for scaffolding construction",
  },
  {
    name: "Hollow section",
    desc: ["2 x 2 x 6M", "2 x 4 x 6M"],
    img: "/img/product/hollow-section.png",
    alt: "Hollow section steel for scaffolding frames",
  },
  {
    name: "Bracket",
    desc: ["1.8m", "2.0m", "2.4m"],
    img: "/img/product/bracket.png",
    alt: "Bracket support for scaffolding structures",
  },
  {
    name: "Steel prop",
    desc: [],
    img: "/img/product/steel-prop.png",
    alt: "Steel prop for temporary support in scaffolding",
  },
  {
    name: "Swivel clamp",
    desc: [],
    img: "/img/product/swivel.png",
    alt: "Swivel clamp for adjustable scaffolding connections",
  },
  {
    name: "Rigid clamp",
    desc: [],
    img: "/img/product/rigid.png",
    alt: "Rigid clamp for fixed scaffolding connections",
  },
  {
    name: "Wing nut",
    desc: ["100mm"],
    img: "/img/product/wing-nut.png",
    alt: "Wing nut fastener for scaffolding assembly",
  },
];

export default function ProductsPage() {
  return (
    <>
      <HeroSection
        badge="Product Catalog"
        highlight="Our"
        title="Products"
        subtitle="Quality components ready for rent and sale"
      />

      {/* Products grid */}
      <div className="container px-4 lg:px-8 mx-auto max-w-7xl text-gray-700 overflow-x-hidden pb-20">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <span className="brand-pill mx-auto mb-4">Complete Set</span>
              <h2 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR PRODUCTS</h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We provide huge variety of item for scaffolding</p>
            </div>
            <div className="flex flex-wrap -m-4 justify-center lg:justify-start md:justify-start">
              {products.map((p) => (
                <div key={p.name} className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center brand-card p-4">
                    <Image
                      alt={p.alt}
                      className="shrink-0 border rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={p.img}
                      width={220}
                      height={220}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900 mb-3">
                        {p.name}
                        {p.extra ? p.extra : null}
                      </h2>
                      {p.desc.length > 0 && (
                        <p className="mb-4">
                          {p.desc.map((d, j) => (
                            <span key={j}>
                              {d}
                              <br />
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
