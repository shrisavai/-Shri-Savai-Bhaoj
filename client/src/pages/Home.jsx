import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import img1 from "../IMG/img1.jpeg";
import img2 from "../IMG/img2.jpeg";
import img3 from "../IMG/img3.jpeg";
import img4 from "../IMG/img4.jpeg";

/* =========================================================
   MARBLE HERO IMAGES
========================================================= */

const marbleHeroImages = [
  "https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1764687932208-94e4e86e4800?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1764687639053-f6525e305420?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1706838707088-e3b4170054e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

/* =========================================================
   MATERIALS
========================================================= */

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
    title: "limestone",
    description:
      "Reliable limestone supplied for flooring, architectural and commercial applications.",
    image:
      "https://kotastone.online/wp-content/uploads/2022/07/Whisk_16c1b64a3ffaf81bb7141c85186e77e1dr.jpg",
  },
  {
    title: "Tiles",
    description:
      "Quality tiles supplied to defined specifications for residential and commercial projects.",
    image:
      "https://m.media-amazon.com/images/I/61GlFjev59L._AC_UF1000,1000_QL80_.jpg",
  },
];

/* =========================================================
   ICONS
========================================================= */

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5 sm:h-6 sm:w-6"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.3 2.4 3.5 5.4 3.5 9s-1.2 6.6-3.5 9" />
      <path d="M12 3c-2.3 2.4-3.5 5.4-3.5 9s1.2 6.6 3.5 9" />
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5 sm:h-6 sm:w-6"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5 sm:h-6 sm:w-6"
    >
      <path d="M12 3 20 6v5.5c0 4.8-3.2 8-8 9.5-4.8-1.5-8-4.7-8-9.5V6l8-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5 sm:h-6 sm:w-6"
    >
      <path d="M3 6h11v11H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
      <path d="M17 13h4" />
    </svg>
  );
}

/* =========================================================
   COUNTER
========================================================= */

function Counter({ end, suffix = "", duration = 1600 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  /* =======================================================
     HERO SLIDESHOW
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(
        (current) => (current + 1) % marbleHeroImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-x-hidden bg-white text-[#111111]">

      {/* =====================================================
          HERO
      ====================================================== */}

    {/* =====================================================
    HERO
====================================================== */}

<section className="relative min-h-[90vh] overflow-hidden bg-white">

 <div
  className="
    mx-auto
    grid
    min-h-[90vh]
    max-w-[1500px]
    items-center
    gap-y-10
    px-5
    py-4

    sm:gap-y-12
    sm:px-8
    sm:py-5

    lg:grid-cols-[0.82fr_1.18fr]
    lg:gap-x-16
    lg:gap-y-0
    lg:px-10
    lg:py-4

    xl:gap-x-20
  "
>

    {/* =================================================
        HERO CONTENT
    ================================================= */}

    <div className="order-2 lg:order-1">

      <h1
        className="
          max-w-[650px]
          text-[2.35rem]
          font-light
          uppercase
          leading-[0.93]
          tracking-[-0.055em]
          text-[#111111]

          min-[400px]:text-[2.6rem]

          sm:text-[3.15rem]

          md:text-[3.45rem]

          lg:text-[3.25rem]

          xl:text-[3.75rem]

          2xl:text-[4rem]
        "
      >
        Stone Quarried

        <span className="block font-semibold">
          In Rajasthan,
        </span>

        <span className="mt-1.5 block font-normal text-[#555555] sm:mt-2">
          Shipped To The World.
        </span>
      </h1>

      <p
        className="
          mt-4
          max-w-[570px]
          text-[13px]
          leading-5
          text-[#333333]

          sm:mt-5
          sm:text-sm
          sm:leading-6

          lg:mt-4
          xl:text-base
          xl:leading-7
        "
      >
        A trusted exporter of premium natural stones,
        serving international customers with consistent
        quality, reliable sourcing and export-ready supply.
      </p>

      {/* HERO BUTTONS */}

      <div
        className="
          mt-4
          flex
          flex-col
          gap-2.5

          sm:mt-5
          sm:flex-row
          sm:gap-3
        "
      >

        <Link
          to="/products"
          className="
            group
            inline-flex
            min-h-[44px]
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#111111]
            px-6
            py-2.5
            text-xs
            font-bold
            uppercase
            tracking-[0.06em]
            !text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-black
            hover:shadow-xl

            sm:min-h-[46px]
            sm:px-7
            sm:text-sm
          "
        >
          <span className="!text-white">
            View Products
          </span>

          <span
            className="
              !text-white
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </Link>

        <Link
          to="/contact"
          className="
            group
            inline-flex
            min-h-[44px]
            items-center
            justify-center
            gap-2
            rounded-full
            border-2
            border-[#111111]
            bg-white
            px-6
            py-2.5
            text-xs
            font-bold
            uppercase
            tracking-[0.06em]
            !text-[#111111]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#111111]
            hover:!text-white

            sm:min-h-[46px]
            sm:px-7
            sm:text-sm
          "
        >
          <span className="!text-[#111111] group-hover:!text-white">
            Send An Enquiry
          </span>

          <span
            className="
              !text-[#111111]
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:!text-white
            "
          >
            →
          </span>
        </Link>

      </div>

    </div>


    {/* =================================================
        HERO IMAGE
    ================================================= */}

    <div className="order-1 mb-4 lg:order-2 lg:mb-0">

      <div className="relative w-full">

        {/* BACK BORDER */}

        <div
          className="
            absolute
            -right-2
            -top-2
            h-full
            w-full
            rounded-[1.5rem]
            border
            border-[#111111]

            sm:-right-4
            sm:-top-4
            sm:rounded-[2rem]
          "
        />

        {/* IMAGE */}

        <div
          className="
            relative
            h-[310px]
            overflow-hidden
            rounded-[1.5rem]
            bg-[#eeeeee]
            shadow-[0_25px_60px_rgba(0,0,0,0.15)]

            min-[400px]:h-[350px]

            sm:h-[400px]
            sm:rounded-[2rem]

            md:h-[460px]

            lg:h-[75vh]
            lg:min-h-[400px]
            lg:max-h-[680px]

            xl:h-[78vh]
          "
        >

          {marbleHeroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="Premium Marble"
              className={`
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-all
                duration-[1400ms]
                ease-in-out

                ${
                  index === heroIndex
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }
              `}
            />
          ))}

          {/* DARK GRADIENT */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/75
              via-black/10
              to-transparent
            "
          />

          {/* IMAGE CONTENT */}

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
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white/75

                  sm:text-[10px]
                "
              >
                INDIA
              </p>

              <p
                className="
                  mt-1.5
                  text-lg
                  font-medium
                  uppercase
                  text-white

                  sm:mt-2
                  sm:text-2xl
                "
              >
                Premium Stones
              </p>

            </div>

            <Link
              to="/products"
              aria-label="View Products"
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/50
                bg-white
                text-base
                !text-[#111111]
                shadow-lg
                transition-all
                duration-300
                hover:scale-105

                sm:h-14
                sm:w-14
                sm:text-lg
              "
            >
              ↗
            </Link>

          </div>

          {/* SLIDESHOW INDICATORS */}

          <div
            className="
              absolute
              bottom-5
              left-1/2
              flex
              -translate-x-1/2
              gap-1.5

              sm:bottom-6
              sm:gap-2
            "
          >

            {marbleHeroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setHeroIndex(index)}
                aria-label={`Show Marble Image ${index + 1}`}
                className={`
                  h-1
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    index === heroIndex
                      ? "w-7 bg-white sm:w-9"
                      : "w-1.5 bg-white/50 sm:w-2"
                  }
                `}
              />
            ))}

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          SECOND SECTION
      ====================================================== */}

    <section className="border-y border-[#dddddd] bg-white">

  <div
    className="
      mx-auto
      max-w-7xl
      px-5
      py-8

      sm:px-8
      sm:py-10

      lg:px-10
      lg:py-12

      xl:py-14
    "
  >

    <div
      className="
        grid
        items-center
        gap-8

        lg:grid-cols-[1fr_1fr]
        lg:gap-10

        xl:gap-14
      "
    >

      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative">

        <div
          className="
            absolute
            -left-2
            -top-2
            h-full
            w-full
            rounded-[1.25rem]
            border
            border-[#111111]

            sm:-left-3
            sm:-top-3
            sm:rounded-[1.75rem]
          "
        />

        <div
          className="
            relative
            aspect-[5/3.7]
            overflow-hidden
            rounded-[1.25rem]
            bg-[#eeeeee]
            shadow-[0_18px_45px_rgba(0,0,0,0.12)]

            sm:rounded-[1.75rem]

            lg:aspect-[5/3.6]
          "
        >

          <div className="absolute inset-0">

            <img
              src={img1}
              alt="Premium Natural Stone"
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
              alt="Natural Marble"
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
              alt="Natural Granite"
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
              alt="Natural Stone Processing"
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

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/5
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-4
              left-4
              right-4
              flex
              items-end
              justify-between

              sm:bottom-5
              sm:left-5
              sm:right-5
            "
          >

            <div>

              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/75

                  sm:text-[9px]
                "
              >
                INDIA
              </p>

              <p
                className="
                  mt-1
                  text-base
                  font-medium
                  uppercase
                  text-white

                  sm:text-xl
                "
              >
                Natural Stone
              </p>

            </div>

            <Link
              to="/products"
              aria-label="View Products"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/40
                bg-white
                text-sm
                !text-[#111111]
                shadow-lg
                transition-all
                duration-300
                hover:scale-105

                sm:h-10
                sm:w-10
              "
            >
              ↗
            </Link>

          </div>

        </div>

      </div>


      {/* =====================================================
          TRACK RECORD
      ====================================================== */}

      <div>

        <div className="mb-3 flex items-center gap-3">

          <span className="h-px w-8 bg-[#111111]" />

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#111111]

              sm:text-[9px]
            "
          >
            PROVEN TRACK RECORD
          </span>

        </div>


        <h2
          className="
            max-w-xl
            text-2xl
            font-light
            uppercase
            leading-[1.05]
            tracking-[-0.04em]
            text-[#111111]

            sm:text-3xl

            lg:text-[2.35rem]

            xl:text-[2.7rem]
          "
        >
          Proven Track Record

          <span className="block font-semibold">
            In Export Business.
          </span>
        </h2>


        <p
          className="
            mt-3
            max-w-lg
            text-xs
            leading-5
            text-[#444444]

            sm:mt-4
            sm:text-sm
            sm:leading-6
          "
        >
          Tell us what you need. We&apos;ll handle the rest.
        </p>


        {/* =================================================
            EXPORT CARDS
        ================================================== */}

        <div
          className="
            mt-4
            grid
            grid-cols-2
            gap-2

            sm:mt-5
            sm:gap-2.5
          "
        >

          {/* COUNTRIES */}

          <div
            className="
              rounded-xl
              border
              border-[#dddddd]
              bg-white
              p-2.5

              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#111111]
              hover:shadow-lg

              sm:p-3
            "
          >

            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#111111]
                !text-white

                sm:h-8
                sm:w-8
              "
            >
              <GlobeIcon />
            </div>

            <p
              className="
                mt-2
                text-lg
                font-semibold
                text-[#111111]

                sm:text-xl
              "
            >
              <Counter end={5} suffix="+" />
            </p>

            <p
              className="
                mt-0.5
                text-[7px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#555555]

                sm:text-[8px]
              "
            >
              Countries Reached
            </p>

          </div>


          {/* EXPERIENCE */}

          <div
            className="
              rounded-xl
              border
              border-[#dddddd]
              bg-white
              p-2.5

              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#111111]
              hover:shadow-lg

              sm:p-3
            "
          >

            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#111111]
                !text-white

                sm:h-8
                sm:w-8
              "
            >
              <ExperienceIcon />
            </div>

            <p
              className="
                mt-2
                text-lg
                font-semibold
                text-[#111111]

                sm:text-xl
              "
            >
              <Counter end={2} suffix="+" />
            </p>

            <p
              className="
                mt-0.5
                text-[7px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#555555]

                sm:text-[8px]
              "
            >
              Years Experience
            </p>

          </div>


          {/* QUALITY */}

          <div
            className="
              rounded-xl
              border
              border-[#dddddd]
              bg-white
              p-2.5

              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#111111]
              hover:shadow-lg

              sm:p-3
            "
          >

            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#111111]
                !text-white

                sm:h-8
                sm:w-8
              "
            >
              <QualityIcon />
            </div>

            <p
              className="
                mt-2
                text-lg
                font-semibold
                text-[#111111]

                sm:text-xl
              "
            >
              <Counter end={100} suffix="%" />
            </p>

            <p
              className="
                mt-0.5
                text-[7px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#555555]

                sm:text-[8px]
              "
            >
              Assured Quality
            </p>

          </div>


          {/* DELIVERY */}

          <div
            className="
              rounded-xl
              border
              border-[#dddddd]
              bg-white
              p-2.5

              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#111111]
              hover:shadow-lg

              sm:p-3
            "
          >

            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#111111]
                !text-white

                sm:h-8
                sm:w-8
              "
            >
              <DeliveryIcon />
            </div>

            <p
              className="
                mt-2
                text-base
                font-semibold
                uppercase
                text-[#111111]

                sm:text-lg
              "
            >
              On Time
            </p>

            <p
              className="
                mt-0.5
                text-[7px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#555555]

                sm:text-[8px]
              "
            >
              On-Time Delivery
            </p>

          </div>

        </div>


        {/* =================================================
            CTA
        ================================================== */}

        <Link
          to="/contact"
          className="
            group
            mt-5
            inline-flex
            min-h-[40px]
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#111111]
            px-5
            py-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.05em]
            !text-white
            shadow-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-black
            hover:shadow-lg

            sm:mt-6
            sm:min-h-[42px]
            sm:px-6
            sm:text-xs
          "
        >

          <span className="!text-white">
            Start An Enquiry
          </span>

          <span
            className="
              !text-white
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

</section>

      {/* =====================================================
          MATERIALS
      ====================================================== */}

     <section className="bg-[#f7f7f7]">

  <div
    className="
      mx-auto
      flex
      min-h-[90vh]
      max-w-7xl
      flex-col
      justify-center
      px-5
      py-8

      sm:px-8
      sm:py-10

      lg:px-10
      lg:py-12
    "
  >

    {/* =====================================================
        HEADER
    ====================================================== */}

    <div
      className="
        mb-6
        flex
        flex-col
        justify-between
        gap-4

        sm:mb-7

        md:flex-row
        md:items-end
      "
    >

      <div>

        <div className="mb-3 flex items-center gap-3">

          <span className="h-px w-8 bg-[#111111] sm:w-9" />

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#111111]

              sm:text-[9px]
            "
          >
            OUR MATERIALS
          </span>

        </div>

        <h2
          className="
            max-w-2xl
            text-2xl
            font-light
            uppercase
            leading-[1.05]
            tracking-[-0.035em]
            text-[#111111]

            sm:text-3xl

            lg:text-[2.6rem]

            xl:text-4xl
          "
        >
          Natural Materials,

          <span className="block font-normal text-[#666666]">
            Globally Supplied.
          </span>
        </h2>

      </div>


      {/* EXPLORE BUTTON */}

      <Link
        to="/products"
        className="
          group
          inline-flex
          min-h-[40px]
          w-fit
          shrink-0
          items-center
          gap-2
          rounded-full
          border
          border-[#111111]
          bg-white
          px-4
          py-2
          text-[10px]
          font-bold
          uppercase
          tracking-[0.05em]
          !text-[#111111]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#111111]
          hover:!text-white

          sm:min-h-[42px]
          sm:px-5
          sm:text-xs
        "
      >

        <span className="!text-[#111111] group-hover:!text-white">
          Explore All Products
        </span>

        <span
          className="
            !text-[#111111]
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:!text-white
          "
        >
          →
        </span>

      </Link>

    </div>


    {/* =====================================================
        MATERIAL CARDS
    ====================================================== */}

    <div
      className="
        grid
        gap-3

        sm:grid-cols-2
        sm:gap-4

        lg:grid-cols-4
      "
    >

      {materials.map((material) => (

        <Link
          key={material.title}
          to="/products"
          className="
            group
            overflow-hidden
            rounded-xl
            border
            border-[#dddddd]
            bg-white
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#111111]
            hover:shadow-xl

            sm:rounded-2xl
          "
        >

          {/* IMAGE */}

          <div
            className="
              relative
              aspect-[4/2.7]
              overflow-hidden
              bg-[#eeeeee]

              sm:aspect-[4/2.8]
            "
          >

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
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/5
                to-transparent
              "
            />


            {/* ARROW */}

            <div
              className="
                absolute
                right-3
                top-3
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-white
                text-xs
                !text-[#111111]
                shadow-md
                transition-all
                duration-300
                group-hover:bg-[#111111]
                group-hover:!text-white

                sm:h-9
                sm:w-9
              "
            >
              ↗
            </div>


            {/* TITLE */}

            <div className="absolute bottom-3 left-4 right-4">

              <h3
                className="
                  text-lg
                  font-medium
                  uppercase
                  leading-tight
                  !text-white

                  sm:text-xl
                "
              >
                {material.title}
              </h3>

            </div>

          </div>


          {/* CARD CONTENT */}

          <div className="p-3.5 sm:p-4">

            <p
              className="
                line-clamp-2
                text-xs
                leading-5
                text-[#444444]

                sm:text-sm
                sm:leading-5
              "
            >
              {material.description}
            </p>


            {/* CARD FOOTER */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-between
                border-t
                border-[#e5e5e5]
                pt-3
              "
            >

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#555555]

                  sm:text-[9px]
                "
              >
                Explore Material
              </span>

              <span
                className="
                  text-xs
                  font-semibold
                  text-[#111111]
                  transition-transform
                  group-hover:translate-x-1

                  sm:text-sm
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
          FINAL CTA
      ====================================================== */}

     <section className="bg-[#111111] text-white">

  <div
    className="
      mx-auto
      flex
      min-h-[50vh]
      max-w-7xl
      items-center
      px-5
      py-10

      sm:px-8
      sm:py-12

      lg:px-10
      lg:py-14
    "
  >

    <div
      className="
        flex
        w-full
        flex-col
        justify-between
        gap-6

        lg:flex-row
        lg:items-center
        lg:gap-12
      "
    >

      {/* CONTENT */}

      <div className="max-w-3xl">

        <div className="mb-3 flex items-center gap-3 sm:mb-4">
          <span className="h-px w-8 bg-white sm:w-10" />

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-white

              sm:text-[9px]
            "
          >
            READY TO SOURCE?
          </span>
        </div>

        <h2
          className="
            text-3xl
            font-light
            uppercase
            leading-[1.05]
            tracking-[-0.04em]
            text-white

            sm:text-4xl

            lg:text-5xl
            xl:text-[3.5rem]
          "
        >
          Let&apos;s Discuss Your

          <span className="block font-semibold">
            Next Shipment.
          </span>
        </h2>

        <p
          className="
            mt-4
            max-w-xl
            text-xs
            leading-5
            text-[#cccccc]

            sm:mt-5
            sm:text-sm
            sm:leading-6

            lg:text-base
          "
        >
          Share Your Requirements And Destination Port.
          We&apos;ll Respond With Specifications And A
          Competitive Quotation.
        </p>

      </div>


      {/* CTA */}

      <Link
        to="/contact"
        className="
          group
          inline-flex
          w-fit
          shrink-0
          items-center
          justify-center
          gap-2.5
          rounded-full
          bg-white
          px-5
          py-2.5
          text-[10px]
          font-bold
          uppercase
          tracking-[0.06em]
          !text-[#111111]
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#eeeeee]
          hover:shadow-xl

          sm:px-6
          sm:py-3
          sm:text-xs

          lg:px-7
          lg:py-3.5
        "
      >

        <span className="!text-[#111111]">
          Send An Enquiry
        </span>

        <span
          className="
            !text-[#111111]
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
      {/* =====================================================
          SECOND IMAGE SHOWCASE ANIMATION
      ====================================================== */}

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

        @media (prefers-reduced-motion: reduce) {
          .stone-slide {
            animation: none;
            opacity: 0;
          }

          .stone-slide:first-child {
            opacity: 1;
          }
        }
      `}</style>

    </main>
  );
}