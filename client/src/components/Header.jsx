
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../IMG/logo.PNG";

const links = [
  ["/", "Home"],
  ["/products", "Products"],
  ["/export-info", "Export Info"],
  ["/certifications", "Certifications"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-[13px] font-medium transition-colors duration-200
    ${
      isActive
        ? "text-gray-950"
        : "text-gray-500 hover:text-gray-950"
    }
    after:absolute after:bottom-0 after:left-0 after:h-[1.5px]
    after:bg-gray-900 after:transition-all after:duration-200
    ${
      isActive
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md">

      {/* Main Header */}

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">

        {/* Brand */}

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex min-w-0 items-center gap-3"
        >
          <div
            className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              overflow-hidden
              sm:h-14 sm:w-14
            "
          >
            <img
              src={logo}
              alt="Shri Savai Bhaoj Marble & Granite"
              className="
                h-full w-full
                object-contain
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />
          </div>

          <div className="flex min-w-0 flex-col">

            <strong
              className="
                truncate
                font-serif
                text-[15px]
                font-semibold
                tracking-tight
                text-gray-900
                sm:text-[18px]
              "
            >
              Shri Savai Bhaoj
            </strong>

            <span
              className="
                mt-1
                text-[7px]
                font-medium
                tracking-[0.18em]
                text-gray-500
                sm:text-[9px]
                sm:tracking-[0.22em]
              "
            >
              MARBLE & GRANITE
            </span>

          </div>
        </Link>


        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">

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


          {/* Divider */}

          <span className="ml-1 h-6 w-px bg-gray-200" />


          {/* Desktop Admin */}

          <Link
            to="/admin"
            className="
              group flex items-center gap-2
              rounded-md
              border border-gray-900
              bg-white
              px-4 py-2.5
              text-[12px]
              font-medium
              text-gray-900
              transition-all
              duration-200
              hover:bg-gray-900
              hover:text-white
            "
          >
           

            <span
              className="
                text-gray-900
                transition-transform
                duration-200
                group-hover:translate-x-1
                group-hover:text-white
              "
            >
            Admin →
            </span>
          </Link>

        </nav>


        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-md
            border border-gray-200
            bg-white
            text-gray-900
            transition-all
            duration-200
            hover:border-gray-400
            hover:bg-gray-50
            lg:hidden
          "
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >

          {menuOpen ? (

            /* Close Icon */

            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

          ) : (

            /* Hamburger Icon */

            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>

          )}

        </button>

      </div>


      {/* Mobile Navigation */}

      <div
        className={`
          overflow-hidden
          border-t border-gray-100
          bg-white
          transition-all
          duration-300
          lg:hidden
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

          <div className="flex flex-col gap-1">

            {links.map(([to, label]) => (

              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `
                  flex items-center justify-between
                  rounded-md
                  px-4 py-3
                  text-[13px]
                  font-medium
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-gray-100 text-gray-950"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"
                  }
                  `
                }
              >
                {label}

                <span className="text-gray-400">
                  →
                </span>

              </NavLink>

            ))}


            {/* Mobile Admin */}

            <Link
              to="/admin"
              onClick={() => setMenuOpen(false)}
              className="
                group mt-3
                flex items-center
                justify-center
                gap-2
                rounded-md
                border border-gray-900
                bg-white
                px-4 py-3
                text-[12px]
                font-medium
                text-gray-900
                transition-all
                duration-200
                hover:bg-gray-900
                hover:text-white
              "
            >
              <span>Admin Portal</span>

              <span
                className="
                  text-gray-900
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                  group-hover:text-white
                "
              >
                →
              </span>
            </Link>

          </div>

        </nav>

      </div>

    </header>
  );
}

