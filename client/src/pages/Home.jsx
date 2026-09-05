import { Link } from "react-router-dom";
import img1 from "../IMG/img1.jpeg";
import img2 from "../IMG/img2.jpeg";
import img3 from "../IMG/img3.jpeg";
import img4 from "../IMG/img4.jpeg";

const materials = [
  {
    title: "Marble",
    description:
      "Premium marble selected for architectural, hospitality and interior applications.",
    image:
      "https://plus.unsplash.com/premium_photo-1681414728775-7aa0607c41cc?q=90&w=1200&auto=format&fit=crop",
  },
  {
    title: "Granite",
    description:
      "Durable natural granite for demanding architectural and commercial projects.",
    image:
      "https://plus.unsplash.com/premium_photo-1675838735501-2eb9b3c999a8?q=90&w=1200&auto=format&fit=crop",
  },
  {
    title: "Limestone",
    description:
      "Natural limestone supplied to defined specifications and project requirements.",
    image:
      "https://images.unsplash.com/photo-1783189424051-1d81dcb97382?q=90&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gypsum",
    description:
      "Industrial minerals sourced with a focus on consistency and reliable supply.",
    image:
      "https://plus.unsplash.com/premium_photo-1681589434478-b3122f353b44?q=90&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-[#171717]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#f5f3ef]">
        <div
          className="
            mx-auto grid
            min-h-[calc(100svh-80px)]
            max-w-7xl
            items-center
            gap-8
            px-5
            py-6
            sm:px-8
            sm:py-8
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-12
            lg:px-10
            lg:py-8
          "
        >

          {/* ================= HERO CONTENT ================= */}

          <div className="order-2 lg:order-1">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-px w-8 bg-[#8b7355] sm:w-10" />

              <span
                className="
                  text-[9px]
                  font-bold
                  tracking-[0.18em]
                  text-[#76634d]
                  sm:text-[10px]
                  sm:tracking-[0.22em]
                "
              >
                EXPORTERS OF NATURAL STONE & INDUSTRIAL MINERALS
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-3xl
                text-[2.7rem]
                font-light
                leading-[0.98]
                tracking-[-0.045em]
                text-[#111111]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.4rem]
                xl:text-[5rem]
              "
            >
              Stone quarried in

              <span className="block font-medium">
                Rajasthan,
              </span>

              <span
                className="
                  mt-2
                  block
                  font-serif
                  italic
                  font-normal
                  text-[#806d56]
                "
              >
                shipped to the world.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-[#5f5b55]
                sm:mt-6
                sm:text-base
                sm:leading-7
                lg:max-w-lg
              "
            >
              A leading exporter of premium natural stones and industrial
              minerals, serving customers across global markets with quality
              and reliability — granite, marble, limestone and gypsum, sourced
              from trusted manufacturers to international standards.
            </p>

            {/* ================= BUTTONS ================= */}

            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">

              {/* VIEW PRODUCTS */}
              <Link
                to="/products"
                className="
                  group
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#111111]
                  px-7
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#292929]
                  hover:shadow-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#806d56]
                  focus:ring-offset-2
                "
              >
                <span className="text-white">
                  View products
                </span>

                <span
                  className="
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>

              {/* SEND ENQUIRY */}
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border-2
                  border-[#111111]
                  bg-white
                  px-7
                  py-3
                  text-sm
                  font-bold
                  text-[#111111]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#111111]
                  hover:text-white
                  hover:shadow-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#806d56]
                  focus:ring-offset-2
                "
              >
                <span className="text-[#111111] group-hover:text-white">
                  Send an enquiry
                </span>

                <span
                  className="
                    text-[#111111]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                >
                  →
                </span>
              </Link>
            </div>

            {/* ================= TRUST STATS ================= */}

            <div
              className="
                mt-7
                grid
                max-w-lg
                grid-cols-3
                border-t
                border-[#d9d4cc]
                pt-4
                sm:mt-8
                sm:pt-5
              "
            >
              <div className="pr-3 sm:pr-4">
                <p className="text-lg font-semibold text-[#111111] sm:text-xl">
                  100%
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#817a70]
                    sm:text-[10px]
                    sm:tracking-[0.16em]
                  "
                >
                  Export focus
                </p>
              </div>

              <div
                className="
                  border-l
                  border-[#d9d4cc]
                  px-3
                  sm:px-4
                "
              >
                <p className="text-lg font-semibold text-[#111111] sm:text-xl">
                  4+
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#817a70]
                    sm:text-[10px]
                    sm:tracking-[0.16em]
                  "
                >
                  Materials
                </p>
              </div>

              <div
                className="
                  border-l
                  border-[#d9d4cc]
                  pl-3
                  sm:pl-4
                "
              >
                <p className="text-lg font-semibold text-[#111111] sm:text-xl">
                  Global
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#817a70]
                    sm:text-[10px]
                    sm:tracking-[0.16em]
                  "
                >
                  Market reach
                </p>
              </div>
            </div>
          </div>

          {/* ================= HERO IMAGE ================= */}

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Decorative border */}
              <div
                className="
                  absolute
                  -right-2
                  -top-2
                  h-full
                  w-full
                  rounded-[1.5rem]
                  border
                  border-[#cfc7bb]
                  sm:-right-4
                  sm:-top-4
                  sm:rounded-[2rem]
                "
              />

              {/* Image */}
              <div
                className="
                  relative
                  aspect-[16/10]
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-gray-200
                  shadow-2xl
                  sm:aspect-[16/10]
                  lg:aspect-[4/3]
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1550053808-52a75a05955d?q=90&w=1400&auto=format&fit=crop"
                  alt="Natural stone quarry in Rajasthan"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    hover:scale-105
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/65
                    via-black/5
                    to-transparent
                  "
                />

                {/* Image information */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex
                    items-end
                    justify-between
                    sm:bottom-7
                    sm:left-7
                    sm:right-7
                  "
                >
                  <div>
                    <p
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/75
                        sm:text-[10px]
                        sm:tracking-[0.2em]
                      "
                    >
                      Rajasthan, India
                    </p>

                    <p className="mt-1 text-lg font-medium text-white sm:text-xl">
                      Natural Stone
                    </p>
                  </div>

                  <Link
                    to="/products"
                    aria-label="View products"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-white/15
                      text-base
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-[#111111]
                      sm:h-12
                      sm:w-12
                      sm:text-lg
                    "
                  >
                    ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO + AUTOMATIC IMAGE SHOWCASE
      ====================================================== */}

      <section className="border-b border-[#e4e1dc] bg-white">
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-14
            sm:px-8
            sm:py-20
            lg:px-10
            lg:py-24
          "
        >
          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-[0.85fr_1.15fr]
              lg:gap-16
            "
          >

            {/* ================= IMAGE SHOWCASE ================= */}

            <div className="relative">

              {/* Decorative border */}
              <div
                className="
                  absolute
                  -left-3
                  -top-3
                  h-full
                  w-full
                  rounded-[1.5rem]
                  border
                  border-[#cfc7bb]
                  sm:-left-4
                  sm:-top-4
                  sm:rounded-[2rem]
                "
              />

              {/* Image container */}
              <div
                className="
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-[#e9e6df]
                  shadow-xl
                  sm:rounded-[2rem]
                "
              >

                {/* Automatic slideshow */}
                <div className="absolute inset-0">

                  <img
                    src={img1}
                    alt="Premium natural stone"
                    className="
                      stone-slide
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                    style={{ animationDelay: "0s" }}
                  />

                  <img
                    src={img2}
                    alt="Natural marble stone"
                    className="
                      stone-slide
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                    style={{ animationDelay: "4s" }}
                  />

                  <img
                    src={img3}
                    alt="Natural granite stone"
                    className="
                      stone-slide
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                    style={{ animationDelay: "8s" }}
                  />

                  <img
                    src={img4}
                    alt="Natural stone processing"
                    className="
                      stone-slide
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                    style={{ animationDelay: "12s" }}
                  />
                </div>

                {/* Image overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/5
                    to-transparent
                  "
                />

                {/* Image information */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex
                    items-end
                    justify-between
                    sm:bottom-6
                    sm:left-6
                    sm:right-6
                  "
                >
                  <div>
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-white/75
                      "
                    >
                      
                    </p>

                    <p className="mt-1 text-lg font-medium text-white sm:text-xl">
                      FROM RAJASTHAN
                     
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-white/15
                      text-sm
                      text-white
                      backdrop-blur-md
                      sm:h-11
                      sm:w-11
                    "
                  >
                    ↗
                  </div>
                </div>
              </div>
            </div>

            {/* ================= INTRO CONTENT ================= */}

            <div>

              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#8b7355]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.22em]
                    text-[#76634d]
                    sm:text-xs
                  "
                >
                  FROM RAJASTHAN TO GLOBAL MARKETS
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  max-w-4xl
                  text-3xl
                  font-light
                  leading-tight
                  tracking-[-0.035em]
                  text-[#171717]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Reliable sourcing.

                <span className="text-[#9a9287]">
                  {" "}Clear specifications.
                </span>

                <br className="hidden sm:block" />

                Export-ready supply.
              </h2>

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-[#65615b]
                  sm:text-lg
                  sm:leading-8
                "
              >
                Tell us the stone, quantity and destination port. We will
                respond with specifications and a quotation.
              </p>

              {/* Button */}
              <Link
                to="/contact"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#111111]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#292929]
                  hover:shadow-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#806d56]
                  focus:ring-offset-2
                "
              >
                <span className="text-white">
                  Start an enquiry
                </span>

                <span
                  className="
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Slideshow animation */}
        <style>{`
          .stone-slide {
            opacity: 0;
            transform: scale(1.04);
            animation: stoneFade 16s infinite ease-in-out;
          }

          @keyframes stoneFade {
            0% {
              opacity: 0;
              transform: scale(1.04);
            }

            5% {
              opacity: 1;
              transform: scale(1);
            }

            25% {
              opacity: 1;
              transform: scale(1);
            }

            30% {
              opacity: 0;
              transform: scale(1.03);
            }

            100% {
              opacity: 0;
              transform: scale(1.04);
            }
          }
        `}</style>
      </section>

      {/* =====================================================
          MATERIALS
      ====================================================== */}

      <section className="bg-[#f5f3ef]">
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-14
            sm:px-8
            sm:py-20
            lg:px-10
            lg:py-24
          "
        >

          {/* Materials heading */}
          <div
            className="
              mb-10
              flex
              flex-col
              justify-between
              gap-6
              sm:flex-row
              sm:items-end
            "
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#8b7355]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.22em]
                    text-[#76634d]
                  "
                >
                  OUR MATERIALS
                </span>
              </div>

              <h2
                className="
                  max-w-2xl
                  text-3xl
                  font-light
                  leading-tight
                  tracking-[-0.035em]
                  text-[#171717]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Natural materials,

                <span className="font-serif italic text-[#806d56]">
                  {" "}globally supplied.
                </span>
              </h2>
            </div>

            {/* Explore button */}
            <Link
              to="/products"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border-2
                border-[#111111]
                bg-white
                px-5
                py-2.5
                text-sm
                font-bold
                text-[#111111]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#111111]
                hover:text-white
              "
            >
              <span className="text-[#111111] group-hover:text-white">
                Explore all products
              </span>

              <span
                className="
                  text-[#111111]
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:text-white
                "
              >
                →
              </span>
            </Link>
          </div>

          {/* ================= MATERIAL CARDS ================= */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((material) => (
              <Link
                key={material.title}
                to="/products"
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#ded9d1]
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#c8c0b5]
                  hover:shadow-2xl
                "
              >

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Arrow */}
                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      text-gray-900
                      shadow-md
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:bg-[#111111]
                      group-hover:text-white
                    "
                  >
                    ↗
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-5">
                    <h3 className="text-2xl font-medium text-white">
                      {material.title}
                    </h3>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  <p className="text-sm leading-6 text-[#69645d]">
                    {material.description}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#ebe7e1]
                      pt-4
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#70685d]
                      "
                    >
                      Explore material
                    </span>

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-[#111111]
                        transition-transform
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#111111] text-white">
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-14
            sm:px-8
            sm:py-20
            lg:px-10
            lg:py-24
          "
        >
          <div
            className="
              flex
              flex-col
              justify-between
              gap-10
              lg:flex-row
              lg:items-end
            "
          >
            <div>

              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b6a48d]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.22em]
                    text-[#c5bbb0]
                  "
                >
                  READY TO SOURCE?
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  max-w-3xl
                  text-4xl
                  font-light
                  leading-tight
                  tracking-[-0.035em]
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Let's discuss your

                <span className="font-serif italic text-[#c7b59d]">
                  {" "}next shipment.
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-[#b5aea5]
                "
              >
                Tell us what you need and where it needs to go. Our team will
                get back to you with specifications and a quotation.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="
                group
                inline-flex
                min-h-12
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-full
                bg-white
                px-8
                py-3.5
                text-sm
                font-bold
                text-[#111111]
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#f0ede8]
                hover:shadow-2xl
                focus:outline-none
                focus:ring-2
                focus:ring-white
                focus:ring-offset-2
                focus:ring-offset-[#111111]
              "
            >
              <span className="text-[#111111]">
                Send an enquiry
              </span>

              <span
                className="
                  text-[#111111]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}