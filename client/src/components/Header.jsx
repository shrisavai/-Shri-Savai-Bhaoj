import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../IMG/logo.PNG";

const links = [
  ["/", "Home"],
  ["/products", "Products"],
  ["/export-info", "Export Info"],
  ["/certifications", "About Us"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `
      group
      relative
      py-2
      text-[11px]
      font-medium
      uppercase
      tracking-[0.12em]
      transition-colors
      duration-300

      ${
        isActive
          ? "text-white"
          : "text-white/55 hover:text-white"
      }

      after:absolute
      after:bottom-0
      after:left-0
      after:h-px
      after:bg-white
      after:transition-all
      after:duration-300

      ${
        isActive
          ? "after:w-full"
          : "after:w-0 group-hover:after:w-full"
      }
    `;

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-white/[0.08]
        bg-[#0d0d0d]/95
        text-white
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        backdrop-blur-xl
      "
    >

      {/* HEADER */}

      <div
        className="
          mx-auto
          flex
          h-[72px]
          max-w-7xl
          items-center
          justify-between
          px-5

          sm:h-[78px]
          sm:px-7

          lg:px-10
        "
      >

        {/* =================================================
            BRAND
        ================================================= */}

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="
            group
            flex
            items-center
            gap-3.5
          "
        >

          {/* LOGO */}

          <div
            className="
              relative
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white
              p-[3px]
              shadow-[0_4px_20px_rgba(0,0,0,0.25)]
              transition-all
              duration-500

              sm:h-12
              sm:w-12
              sm:p-1

              group-hover:border-white/40
              group-hover:shadow-[0_6px_25px_rgba(255,255,255,0.08)]
            "
          >

            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-full
                bg-white
              "
            >
              <img
                src={logo}
                alt="Shri Savai Bhaoj Marble & Granite"
                className="
                  h-full
                  w-full
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

          </div>


          {/* BRAND TEXT */}

          <div className="flex flex-col">

            <strong
              className="
                font-serif
                text-[14px]
                font-medium
                leading-none
                tracking-[-0.01em]
                text-white

                sm:text-[17px]
              "
            >
              Shri Savai Bhaoj
            </strong>

            <div
              className="
                mt-1.5
                flex
                items-center
                gap-2
              "
            >

              <span className="h-px w-3 bg-white/30" />

              <span
                className="
                  text-[6px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/45

                  sm:text-[7px]
                  sm:tracking-[0.25em]
                "
              >
                Marble & Granite
              </span>

            </div>

          </div>

        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="
            hidden
            items-center
            gap-7

            lg:flex

            xl:gap-9
          "
        >

          {links.map(([to, label]) => (

            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={navLinkClass}
            >
              {label}
            </NavLink>

          ))}

        </nav>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-white/[0.04]
            text-white
            transition-all
            duration-300

            hover:border-white/30
            hover:bg-white/[0.08]

            lg:hidden
          "
        >

          {menuOpen ? (

            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

          ) : (

            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M5 8h14M5 12h14M5 16h14"
              />
            </svg>

          )}

        </button>

      </div>


      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      <div
        className={`
          overflow-hidden
          border-t
          border-white/[0.06]
          bg-[#0d0d0d]
          transition-all
          duration-500
          lg:hidden

          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <nav
          className="
            mx-auto
            max-w-7xl
            px-5
            py-4
            sm:px-7
          "
        >

          <div className="flex flex-col gap-1">

            {links.map(([to, label], index) => (

              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-white/[0.09] text-white"
                        : "text-white/50 hover:bg-white/[0.04] hover:text-white"
                    }
                  `
                }
              >

                <span className="flex items-center gap-3">

                  <span
                    className="
                      text-[8px]
                      text-white/20
                    "
                  >
                    0{index + 1}
                  </span>

                  {label}

                </span>

                <span
                  className="
                    text-white/25
                    transition-transform
                    duration-300
                  "
                >
                  →
                </span>

              </NavLink>

            ))}

          </div>

        </nav>

      </div>

    </header>
  );
}