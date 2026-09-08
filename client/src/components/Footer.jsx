import { Link } from "react-router-dom";
import logo from "../IMG/logo.png";

export default function Footer() {
  const cities = [
    "Ahmedabad",
    "Jaipur",
    "Jodhpur",
    "Udaipur",
    "Kota",
    "Bikaner",
    "Ajmer",
  ];

  return (
    <footer className="bg-[#050505] text-white">

      <div
        className="
          mx-auto
          flex
          min-h-[80svh]
          max-w-[1500px]
          flex-col

          px-4
          py-6

          xs:px-5

          sm:px-7
          sm:py-7

          md:px-8

          lg:px-10
          lg:py-8
        "
      >

        {/* =====================================================
            TOP BRAND + OFFICE
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6

            sm:gap-7

            md:grid-cols-[0.8fr_1.2fr]
            md:gap-10

            lg:gap-14
          "
        >

          {/* BRAND */}

          <div className="min-w-0">

            <div
              className="
                inline-flex
                items-center
                rounded-lg
                bg-white

                px-2.5
                py-2

                sm:px-3
                sm:py-2.5
              "
            >
              <img
                src={logo}
                alt="Shri Savai Bhaoj Marble & Granite"
                className="
                  block
                  h-auto
                  w-[95px]
                  object-contain

                  sm:w-[110px]

                  md:w-[115px]
                "
              />
            </div>

            <p
              className="
                mt-2
                max-w-[290px]

                text-[9px]
                leading-4
                text-white/55

                sm:text-[10px]
                sm:leading-5
              "
            >
              Premium natural stone from Rajasthan, India —
              responsibly sourced and supplied to international
              markets.
            </p>

          </div>


          {/* OFFICE */}

          <div className="min-w-0">

            <h3
              className="
                mb-2
                inline-block
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white
                underline
                underline-offset-4

                sm:text-[10px]
              "
            >
              Our Office
            </h3>

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                text-white

                sm:text-[10px]
              "
            >
              Registered Office
            </p>

            <p
              className="
                mt-1
                max-w-[300px]
                text-[8px]
                leading-4
                text-white/55

                sm:text-[9px]
                sm:leading-5
              "
            >
              Industrial Area Phase 4
              <br />
              Kishangarh, Ajmer
              <br />
              Rajasthan, India
            </p>

          </div>

        </div>


        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <div
          className="
            mt-6
            grid
            grid-cols-2
            overflow-hidden
            rounded-lg
            border
            border-white/15

            sm:mt-7

            md:grid-cols-4
          "
        >

          {/* COMPANY */}

          <div
            className="
              min-w-0
              border-b
              border-white/15
              p-3

              sm:p-4

              md:border-b-0
              md:border-r
            "
          >

            <h4
              className="
                mb-2
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white

                sm:text-[9px]
              "
            >
              Company
            </h4>

            <div
              className="
                space-y-1
                text-[9px]
                text-white/55

                sm:text-[10px]
              "
            >

              <Link
                to="/"
                className="block transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="block transition hover:text-white"
              >
                Products
              </Link>

              <Link
                to="/certifications"
                className="block transition hover:text-white"
              >
                Certifications
              </Link>

              <Link
                to="/contact"
                className="block transition hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* QUICK LINKS */}

          <div
            className="
              min-w-0
              border-b
              border-white/15
              p-3

              sm:p-4

              md:border-b-0
              md:border-r
            "
          >

            <h4
              className="
                mb-2
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white

                sm:text-[9px]
              "
            >
              Quick Links
            </h4>

            <div
              className="
                space-y-1
                text-[9px]
                text-white/55

                sm:text-[10px]
              "
            >

              <Link
                to="/"
                className="block transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="block transition hover:text-white"
              >
                What We Do
              </Link>

              <Link
                to="/export-info"
                className="block transition hover:text-white"
              >
                Export Information
              </Link>

              <Link
                to="/certifications"
                className="block transition hover:text-white"
              >
                Certifications
              </Link>

              <Link
                to="/contact"
                className="block transition hover:text-white"
              >
                Enquire Now
              </Link>

            </div>

          </div>


          {/* EXPORTS */}

          <div
            className="
              min-w-0
              border-b
              border-white/15
              p-3

              sm:p-4

              md:border-b-0
              md:border-r
            "
          >

            <h4
              className="
                mb-2
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white

                sm:text-[9px]
              "
            >
              Exports
            </h4>

            <div
              className="
                space-y-1
                text-[9px]
                text-white/55

                sm:text-[10px]
              "
            >

              <Link
                to="/export-info"
                className="block transition hover:text-white"
              >
                Export Process
              </Link>

              <Link
                to="/export-info"
                className="block transition hover:text-white"
              >
                Trade Terms
              </Link>

              <Link
                to="/products"
                className="block transition hover:text-white"
              >
                Our Materials
              </Link>

              <Link
                to="/contact"
                className="block transition hover:text-white"
              >
                Shipping Enquiry
              </Link>

            </div>

          </div>


          {/* CONTACT */}

          <div
            className="
              min-w-0
              p-3

              sm:p-4
            "
          >

            <h4
              className="
                mb-2
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white

                sm:text-[9px]
              "
            >
              Contact Info
            </h4>

            <div
              className="
                space-y-1
                text-[9px]
                leading-4
                text-white/55

                sm:text-[10px]
                sm:leading-5
              "
            >

              <Link
                to="/contact"
                className="
                  block
                  font-medium
                  text-white/80
                  transition
                  hover:text-white
                "
              >
                Send An Enquiry →
              </Link>

              <a
                href="tel:+918290533589"
                className="block transition hover:text-white"
              >
                +91 82905 33589
              </a>

              <a
                href="tel:+917733990502"
                className="block transition hover:text-white"
              >
                +91 77339 90502
              </a>

              <a
                href="tel:+919825978589"
                className="block transition hover:text-white"
              >
                +91 98259 78589
              </a>

              <a
                href="mailto:INFO.SAVAIBHOJMARBLE.COM"
                className="
                  block
                  break-all
                  transition
                  hover:text-white
                "
              >
                INFO.SAVAIBHOJMARBLE.COM
              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            CITIES
        ====================================================== */}

        <div
          className="
            mt-4
            border-t
            border-white/10
            pt-2.5
            text-center
          "
        >

          <p
            className="
              text-[6.5px]
              leading-3
              text-white/30

              sm:text-[7px]
              sm:leading-4

              md:text-[8px]
            "
          >

            <span className="font-semibold text-white/45">
              Supplying across:
            </span>{" "}

            {cities.map((city, index) => (
              <span key={city} className="whitespace-nowrap">

                {city}

                {index !== cities.length - 1 && (
                  <span className="mx-1">•</span>
                )}

              </span>
            ))}

          </p>

        </div>


        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            mt-auto
            flex
            flex-col
            items-center
            justify-between
            gap-2

            border-t
            border-white/10

            pt-3

            text-center

            sm:flex-row
            sm:gap-4
            sm:text-left
          "
        >

          <p
            className="
              text-[7px]
              leading-3
              text-white/30

              sm:text-[8px]
              sm:leading-4
            "
          >
            © {new Date().getFullYear()} Shri Savai Bhaoj Marble &
            Granite. All Rights Reserved.
          </p>

          <Link
            to="/admin"
            className="
              shrink-0
              text-[7px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-white/25
              transition
              hover:text-white

              sm:text-[8px]
            "
          >
            Admin →
          </Link>

        </div>

      </div>

    </footer>
  );
}