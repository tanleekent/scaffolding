import Image from "next/image";

type HeroSectionProps = {
  badge: string;
  highlight: string;
  title: string;
  subtitle: string;
};

export default function HeroSection({ badge, highlight, title, subtitle }: HeroSectionProps) {
  return (
    <div className="bg-cream hero-shell overflow-hidden" id="hero">
      <div className="max-w-7xl px-0 sm:px-8 mx-auto flex flex-col lg:flex-row items-start pt-4 sm:pt-0">
        <div className="w-full lg:w-6/12 lg:-mt-10 relative h-64 sm:h-80 lg:h-96">
          <Image
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor="#hero"
            className="w-full max-w-md mt-4 sm:mt-10 lg:mt-14 object-cover mx-auto rounded-2xl"
            src="/img/scaffolding-main-1.webp"
            alt="Professional scaffolding rental service with same day delivery"
            width={600}
            height={600}
          />
        </div>

        <div className="z-40 md:z-50 px-4 pb-4 hero-text-glass backdrop-blur-sm pt-4 flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-center lg:items-start text-center lg:text-left mb-8 md:mb-0">
            <div className="w-full max-w-md lg:max-w-none flex flex-col items-center lg:items-start justify-center lg:justify-start">
            <span className="brand-pill" data-aos="fade-right" data-aos-once="true">
              {badge}
            </span>
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-anchor="#hero"
              className="mt-4 mb-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-darken"
            >
              <span className="text-yellow-500">{highlight}</span> {title}
            </h1>
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-anchor="#hero"
              data-aos-delay="300"
              className="leading-snug sm:leading-normal text-lg sm:text-xl lg:text-2xl mb-6 text-gray-700"
            >
              {subtitle}
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor="#hero"
            data-aos-delay="700"
            className="w-full max-w-md md:flex items-center justify-center lg:justify-start md:space-x-5 mb-6 sm:mb-12"
          >
            <a
              href="https://wa.me/+60182728777?text=Rent%20Scaffolding"
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 brand-button w-full sm:w-auto inline-flex justify-center text-lg sm:text-xl py-3 sm:py-4 px-8 sm:px-9 focus:outline-none"
            >
              Whatsapp Now
            </a>
          </div>
        </div>
      </div>

      <div className="text-white -mt-18 sm:-mt-24 lg:-mt-28 z-41 relative">
        <svg
          className="xl:h-40 xl:w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          />
        </svg>
        <div className="bg-white w-full h-32 -mt-px" />
      </div>
    </div>
  );
}