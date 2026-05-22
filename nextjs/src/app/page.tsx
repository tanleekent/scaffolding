import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection
        badge="Trusted Scaffolding Supplier"
        highlight="Rent"
        title="Scaffolding"
        subtitle="3-Hours Same Day Instant Delivery"
      />

      {/* Main content */}
      <div className="container px-4 lg:px-8 mx-auto max-w-7xl text-gray-700 overflow-hidden pb-20">

        {/* All-in-one heading */}
        <div data-aos="flip-up" className="max-w-xl mx-auto text-center mt-24">
          <span className="brand-pill">Why Choose 777</span>
          <h2 className="font-bold text-darken my-3 text-3xl">
            All-In-One <span className="text-yellow-500">Scaffolding Supply.</span>
          </h2>
          <p className="leading-relaxed text-gray-500">
            We provide the tools to complete tasks you need with Scaffolding.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
          <div data-aos="fade-up" className="brand-card p-6 text-center rounded-xl">
            <div
              style={{ background: "#898989" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <Image src="/img/delivery.svg" alt="Delivery icon" width={32} height={32} />
            </div>
            <h3 className="font-medium text-xl mb-3 lg:px-14 text-darken">Instant Delivery</h3>
            <p className="px-4 text-gray-500">Same day delivery services</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" className="brand-card p-6 text-center rounded-xl">
            <div
              style={{ background: "#F48C06" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <Image src="/img/money.svg" alt="Money icon" width={32} height={32} />
            </div>
            <h3 className="font-medium text-xl mb-3 lg:px-14 text-darken">Cheap &amp; Easy Rental</h3>
            <p className="px-4 text-gray-500">Easy booking &amp; Lowest Price Guarantee</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="brand-card p-6 text-center rounded-xl">
            <div
              style={{ background: "#fa7373" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <Image src="/img/thumb-up.svg" alt="Thumbs up icon" width={32} height={32} />
            </div>
            <h3 className="font-medium text-xl mb-3 lg:px-14 text-darken lg:h-14 pt-3">Good Quality</h3>
            <p className="px-4 text-gray-500">All scaffoldings are checked and safety assured</p>
          </div>
        </div>

        {/* Booking steps */}
        <div className="mt-28">
          <div data-aos="flip-down" className="text-center max-w-3xl mx-auto">
            <span className="brand-pill">Quick Process</span>
            <h2 className="text-3xl font-bold text-darken mb-4">
              Easy <span className="text-yellow-500">Booking</span> in 5 Minutes
            </h2>
            <p className="text-gray-500">All you need is just 3 simple step to book your scaffoldings</p>
          </div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto flex flex-wrap">
              {/* Step 1 */}
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 md:mx-auto">
                <div data-aos="fade-down" className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div data-aos="fade-down" className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-400 text-white relative z-10 title-font font-medium text-sm">
                  1
                </div>
                <div data-aos="fade-down" className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div style={{ backgroundColor: "#F48C06" }} className="shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center">
                    <Image src="/img/whatsapp.svg" alt="WhatsApp" width={48} height={48} />
                  </div>
                  <div className="grow sm:pl-6 mt-6 sm:mt-0">
                    <h3 className="font-medium title-font mb-1 text-xl text-darken">WhatsApp Us</h3>
                    <p className="leading-relaxed text-gray-500 mb-8">
                      Send us a message and we will reply you in the shortest time.
                    </p>
                    <a
                      href="https://wa.me/+60182728777?text=Rent%20Scaffolding"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lg:mx-0 brand-button text-xl py-2 px-9 focus:outline-none"
                    >
                      Whatsapp Now
                    </a>
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex relative pb-20 sm:items-center md:w-2/3 md:mx-auto">
                <div data-aos="fade-down" className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div data-aos="fade-down" className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-400 text-white relative z-10 title-font font-medium text-sm">
                  2
                </div>
                <div data-aos="fade-down" className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div style={{ backgroundColor: "#898989" }} className="shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center">
                    <Image src="/img/order-details.svg" alt="Order details" width={48} height={48} />
                  </div>
                  <div className="grow sm:pl-6 mt-6 sm:mt-0">
                    <h3 className="font-medium title-font text-darken mb-1 text-xl">Order Details</h3>
                    <p className="leading-relaxed text-gray-500">Tell us the quantity, date and location.</p>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex relative pb-20 sm:items-center md:w-2/3 md:mx-auto">
                <div data-aos="fade-down" className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div data-aos="fade-down" className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-400 text-white relative z-10 title-font font-medium text-sm">
                  3
                </div>
                <div data-aos="fade-down" className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div style={{ background: "#fa7373" }} className="shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center">
                    <Image src="/img/bank-transfer.svg" alt="Bank transfer" width={48} height={48} />
                  </div>
                  <div className="grow sm:pl-6 mt-6 sm:mt-0">
                    <h3 className="font-medium title-font text-darken mb-1 text-xl">Pay &amp; Collect</h3>
                    <p className="leading-relaxed text-gray-500">
                      Make payment via online payment and wait us delivered it to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Standard package */}
        <div className="sm:flex items-center sm:space-x-8 mt-36">
          <div data-aos="fade-right" className="sm:w-1/2 relative">
            <div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse" />
            <h2 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
              Standard Scaffolding <span className="text-yellow-500">basic item to start with</span>
            </h2>
            <p className="text-gray-500 my-4 lg:pr-32">
              <span className="text-yellow-500">2x</span> main frame,{" "}
              <span className="text-yellow-500">2x</span> cross brace,{" "}
              <span className="text-yellow-500">4x</span> joint pin
            </p>
          </div>
          <div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
            <div style={{ background: "#898989" }} className="floating w-24 h-24 absolute rounded-lg z-0 -top-1 -right-3" />
            <Image
              className="rounded-xl z-40 relative"
              src="/img/standard-package.webp"
              alt="Standard scaffolding package including main frames, cross braces, and joint pins"
              width={600}
              height={400}
            />
            <div className="bg-yellow-500 w-40 h-40 floating absolute rounded-lg z-10 -bottom-1 -left-3" />
          </div>
        </div>

        {/* Cat walk */}
        <div className="md:flex mt-40 md:space-x-10 items-start">
          <div data-aos="fade-down" className="md:w-7/12 relative">
            <div style={{ background: "#F48C06" }} className="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse" />
            <div style={{ background: "#898989" }} className="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping" />
            <Image
              className="relative z-50 floating"
              src="/img/cat-walk.webp"
              alt="Cat walk scaffolding platform for safe access"
              width={600}
              height={400}
            />
            <div style={{ background: "#898989" }} className="w-28 h-28 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse" />
            <div style={{ background: "#F56666" }} className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping" />
          </div>
          <div data-aos="fade-down" className="md:w-5/12 mt-20 md:mt-0 text-gray-500">
            <h2 className="text-2xl font-semibold text-darken lg:pr-40">
              <span className="text-yellow-500">Cat Walk</span>
            </h2>
            <p className="text-gray-500 my-4 lg:pr-32">
              Size <span className="text-yellow-500">500mm</span> x <span className="text-yellow-500">1829mm</span>
            </p>
          </div>
        </div>

        {/* Step ladder */}
        <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-16">
          <div data-aos="fade-right" className="md:w-1/2 lg:pl-14">
            <h2 className="text-darken font-semibold text-3xl lg:pr-56">
              <span className="text-yellow-500">Step Ladder</span>
            </h2>
            <p className="text-gray-500 my-4 lg:pr-32">
              Size <span className="text-yellow-500">450mm</span> x <span className="text-yellow-500">1829mm</span>
            </p>
          </div>
          <div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
            <div style={{ background: "#fa7373" }} className="animate-pulse w-24 h-24 absolute rounded-lg z-0" />
            <Image
              className="rounded-xl z-40 relative floating"
              src="/img/staircase.webp"
              alt="Step ladder for scaffolding access"
              width={600}
              height={400}
            />
            <div className="bg-yellow-500 w-32 h-32 floating absolute rounded-lg z-10 bottom-5 right-3" />
          </div>
        </div>

        {/* Components grid */}
        <div data-aos="zoom-in-up" className="my-14 flex flex-col lg:flex-row lg:space-x-20">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div data-aos="zoom-out-up" className="p-4 lg:w-1/2 w-full">
                <div className="h-full flex flex-row items-center justify-start text-left">
                  <Image
                    alt="Jack base scaffolding component"
                    className="shrink-0 rounded-lg w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover object-center"
                    src="/img/jack-base.webp"
                    width={192}
                    height={192}
                  />
                  <div className="grow sm:pl-8 pl-6">
                    <h3 className="title-font font-medium text-lg text-yellow-500">Jack Base</h3>
                    <p className="text-darken mb-3">2 Units</p>
                    <p className="mb-4 text-gray-500">
                      <span className="font-bold">Available size</span>
                      <br />600 x 32(MS)
                      <br />900 x 32(MS)
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-out-up" data-aos-delay="50" className="p-4 lg:w-1/2 w-full">
                <div className="h-full flex flex-row items-center justify-start text-left">
                  <Image
                    alt="U-head scaffolding connector"
                    className="shrink-0 rounded-lg w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover object-center"
                    src="/img/u-head.webp"
                    width={192}
                    height={192}
                  />
                  <div className="grow sm:pl-8 pl-6">
                    <h3 className="title-font font-medium text-lg text-yellow-500">U-Head</h3>
                    <p className="text-darken mb-3">2 Units</p>
                    <p className="mb-4 text-gray-500">
                      <span className="font-bold">Available size</span>
                      <br />600 x 32(MS)
                      <br />900 x 32(MS)
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-out-up" data-aos-delay="100" className="p-4 lg:w-1/2 w-full">
                <div className="h-full flex flex-row items-center justify-start text-left">
                  <Image
                    alt="Scaffolding clamp"
                    className="shrink-0 rounded-lg w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover object-center"
                    src="/img/clamp.webp"
                    width={192}
                    height={192}
                  />
                  <div className="grow sm:pl-8 pl-6">
                    <h3 className="title-font font-medium text-lg text-yellow-500">Clamp</h3>
                    <p className="text-darken mb-3">8 Units</p>
                    <p className="mb-4 text-gray-500">
                      <span className="font-bold">Available variant</span>
                      <br />Rigid clamp
                      <br />Swivel clamp
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-out-up" data-aos-delay="150" className="p-4 lg:w-1/2 w-full">
                <div className="h-full flex flex-row items-center justify-start text-left">
                  <Image
                    alt="Caster wheels with brake system"
                    className="shrink-0 rounded-lg w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover object-center"
                    src="/img/wheel.webp"
                    width={192}
                    height={192}
                  />
                  <div className="grow sm:pl-8 pl-6">
                    <h3 className="title-font font-medium text-lg text-yellow-500">
                      Caster Wheels <span className="text-gray-400">Brake system</span>
                    </h3>
                    <p className="text-darken mb-3">2 Units</p>
                    <p className="mb-4 text-gray-500">
                      <span className="font-bold">Available size</span>
                      <br />6&quot; wheel
                      <br />8&quot; wheel
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-out-up" className="w-full items-center justify-center text-center max-w-3xl mx-auto mt-12">
              <a
                href="/products"
                className="mx-0 brand-button text-xl py-4 px-9 focus:outline-none"
              >
                View More Products
              </a>
            </div>
          </div>
        </div>

        {/* Warehouse gallery */}
        <div data-aos="zoom-in-up" className="my-14">
          <div data-aos="flip-down" className="text-center max-w-3xl mx-auto">
            <span className="brand-pill">Our Inventory</span>
            <h2 className="text-3xl font-bold text-darken mb-4">
              Our <span className="text-yellow-500">Warehouse</span>
            </h2>
            <p className="text-gray-500">
              Warehouse that big enough to provide all you need with your projects
            </p>
          </div>
          <div className="text-gray-500 body-font">
            <div className="px-5 py-10 mx-auto flex flex-wrap">
              <div className="flex flex-col lg:flex-row md:-m-2 -m-1">
                <div className="flex flex-wrap lg:w-1/2 w-full">
                  <div data-aos="zoom-in-up" className="md:p-2 p-1 w-1/2">
                    <Image alt="Warehouse view 1" className="w-full object-cover h-full object-center block" src="/img/warehouse/3.webp" width={400} height={300} />
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="50" className="md:p-2 p-1 w-1/2">
                    <Image alt="Warehouse view 2" className="w-full object-cover h-full object-center block" src="/img/warehouse/8.webp" width={400} height={300} />
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="100" className="md:p-2 p-1 w-full">
                    <Image alt="Warehouse view 3" className="w-full h-full object-cover object-center block" src="/img/warehouse/4.webp" width={800} height={400} />
                  </div>
                </div>
                <div className="flex flex-wrap lg:w-1/2 w-full">
                  <div data-aos="zoom-in-up" className="md:p-2 p-1 w-full">
                    <Image alt="Warehouse view 4" className="w-full h-full object-cover object-center block" src="/img/warehouse/7.webp" width={800} height={400} />
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="50" className="md:p-2 p-1 w-1/2">
                    <Image alt="Warehouse view 5" className="w-full object-cover h-full object-center block" src="/img/warehouse/2.webp" width={400} height={300} />
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="100" className="md:p-2 p-1 w-1/2">
                    <Image alt="Warehouse view 6" className="w-full object-cover h-full object-center block" src="/img/warehouse/10.webp" width={400} height={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

