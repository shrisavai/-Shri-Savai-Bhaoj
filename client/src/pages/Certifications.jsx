import { useEffect, useState } from "react";

import GSTCertificate from "../PDF/GSTCertificate.pdf";
import ImporterExporterCode from "../PDF/ImporterExporterCode.pdf";
import UdyamRegistrationCertificate from "../PDF/UdyamRegistrationCertificate.pdf";

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  /* =========================================================
     CERTIFICATES
  ========================================================= */

  const certificates = [
    {
      id: 1,
      number: "01",
      name: "GST Registration Certificate",
      issuer: "Government of India",
      description:
        "Official GST registration documentation supporting our business and commercial operations.",
      file: GSTCertificate,
    },
    {
      id: 2,
      number: "02",
      name: "Importer Exporter Code",
      issuer: "Government of India",
      description:
        "Official Importer Exporter Code documentation supporting international trade and export activities.",
      file: ImporterExporterCode,
    },
    {
      id: 3,
      number: "03",
      name: "Udyam Registration Certificate",
      issuer: "Government of India",
      description:
        "Official Udyam registration documentation supporting business registration and compliance.",
      file: UdyamRegistrationCertificate,
    },
  ];

  /* =========================================================
     LEGAL DETAILS
  ========================================================= */

  const legalDetails = [
    {
      title: "Brand & Group Name",
      value: "Shri Savai Bhaoj Marble",
      icon: "◇",
    },
    {
      title: "Founder",
      value: "Kanhaiya Lal",
      icon: "♙",
    },
    {
      title: "Account Name",
      value: "Shri Savai Bhaoj Marble",
      icon: "▣",
    },
    {
      title: "Bank",
      value: "HDFC Bank",
      icon: "⌂",
    },
    {
      title: "Account Number",
      value: "5020 0094 6796 23",
      icon: "▤",
    },
    {
      title: "IFSC Code",
      value: "HDFC0002587",
      icon: "▥",
    },
  ];

  /* =========================================================
     CLOSE DOCUMENT
  ========================================================= */

  const closeDocument = () => {
    setSelected(null);
  };

  /* =========================================================
     ESC KEY + PDF PROTECTION
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      /* CLOSE WITH ESC */
      if (event.key === "Escape") {
        closeDocument();
        return;
      }

      /*
       * BLOCK COMMON SAVE / PRINT / VIEW-SOURCE SHORTCUTS
       * WHILE PDF IS OPEN
       */
      if (selected) {
        const key = event.key.toLowerCase();

        if (
          (event.ctrlKey || event.metaKey) &&
          ["s", "p", "u"].includes(key)
        ) {
          event.preventDefault();
          event.stopPropagation();
        }

        /* BLOCK F12 / DEVTOOLS SHORTCUTS */
        if (
          event.key === "F12" ||
          ((event.ctrlKey || event.metaKey) &&
            event.shiftKey &&
            ["i", "j", "c"].includes(key))
        ) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    const handleContextMenu = (event) => {
      if (selected) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [selected]);

  /* =========================================================
     LOCK BODY SCROLL WHEN DOCUMENT IS OPEN
  ========================================================= */

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* =====================================================
          INTRO — WHITE / 20VH
      ====================================================== */}

      <section
        className="
          flex
          min-h-[20vh]
          items-center
          border-b
          border-[#dedbd5]
          bg-white
          text-[#111111]
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-5
            py-7
            sm:px-8
            lg:px-10
          "
        >
          <div className="max-w-3xl">

            {/* SMALL LABEL */}

            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#b58a3b]" />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#806d56]
                "
              >
                TRUST & COMPLIANCE
              </span>
            </div>

            {/* TITLE */}

            <h1
              className="
                text-3xl
                font-semibold
                leading-tight
                tracking-[-0.025em]
                text-[#111111]
                sm:text-4xl
              "
            >
              Our Certifications
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-[#62686d]
                sm:text-base
              "
            >
              Government-verified registrations and documentation supporting
              our business and international trade operations.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          CERTIFICATIONS — BLACK BACKGROUND
      ====================================================== */}

      <section className="min-h-[90vh] bg-black text-white">

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

          {/* =================================================
              CERTIFICATE CARDS
          ================================================== */}

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-5
            "
          >

            {certificates.map((certificate, index) => (

              <article
                key={certificate.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white
                  text-[#111111]
                  shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                "
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >

                {/* =================================================
                    VERIFIED BADGE
                ================================================== */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    z-10
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#48c878]
                    text-white
                    shadow-md
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      d="M5 12.5 9.5 17 19 7.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>


                {/* =================================================
                    NUMBER
                ================================================== */}

                <div
                  className="
                    absolute
                    right-4
                    top-4
                    text-[9px]
                    font-semibold
                    tracking-[0.16em]
                    text-black/25
                  "
                >
                  {certificate.number}
                </div>


                {/* =================================================
                    DOCUMENT ICON
                ================================================== */}

                <div
                  className="
                    flex
                    h-[155px]
                    items-center
                    justify-center
                    bg-white
                    px-6
                    pt-5
                    sm:h-[165px]
                    lg:h-[170px]
                  "
                >

                  <div
                    className="
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f6f5f2]
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:bg-[#efede8]
                      sm:h-28
                      sm:w-28
                    "
                  >

                    <svg
                      className="
                        h-16
                        w-16
                        text-[#111111]
                        transition-transform
                        duration-500
                        group-hover:scale-105
                        sm:h-18
                        sm:w-18
                      "
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >

                      <rect
                        x="20"
                        y="10"
                        width="27"
                        height="36"
                        rx="2"
                      />

                      <rect
                        x="11"
                        y="17"
                        width="27"
                        height="36"
                        rx="2"
                        fill="white"
                      />

                      <path d="M18 27h14" />
                      <path d="M18 34h14" />
                      <path d="M18 41h14" />
                      <path d="M18 48h10" />

                    </svg>

                  </div>

                </div>


                {/* =================================================
                    CARD CONTENT
                ================================================== */}

                <div
                  className="
                    flex
                    min-h-[190px]
                    flex-col
                    px-5
                    pb-5
                    text-center
                    sm:min-h-[200px]
                  "
                >

                  <h3
                    className="
                      mx-auto
                      max-w-[260px]
                      text-base
                      font-semibold
                      leading-5
                      tracking-[-0.01em]
                      text-[#111111]
                      sm:text-lg
                    "
                  >
                    {certificate.name}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-[11px]
                      leading-5
                      text-[#747a7f]
                    "
                  >
                    Issued by{" "}

                    <span className="font-medium text-[#42474b]">
                      {certificate.issuer}
                    </span>
                  </p>


                  <p
                    className="
                      mx-auto
                      mt-2
                      max-w-[270px]
                      text-[10px]
                      leading-4
                      text-[#858b90]
                      sm:text-[11px]
                      sm:leading-5
                    "
                  >
                    {certificate.description}
                  </p>


                  {/* =================================================
                      VIEW BUTTON
                  ================================================== */}

                  <div className="mt-auto pt-4">

                    <button
                      type="button"
                      onClick={() => setSelected(certificate)}
                      className="
                        inline-flex
                        min-w-[105px]
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-black
                        px-5
                        py-2.5
                        text-xs
                        font-semibold
                        !text-white
                        shadow-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#b58a3b]
                        hover:shadow-lg
                      "
                    >

                      <span className="!text-white">
                        View
                      </span>

                      <span
                        className="
                          text-sm
                          font-normal
                          !text-white
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        ↗
                      </span>

                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPLIANCE STRIP
      ====================================================== */}

      <section
        className="
          border-y
          border-white/10
          bg-black
          text-white
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-9
            sm:px-8
            lg:px-10
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <div>

              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#b58a3b]
                "
              >
                VERIFIED DOCUMENTATION
              </p>

              <h3
                className="
                  mt-1
                  text-lg
                  font-semibold
                  tracking-[-0.02em]
                  text-white
                "
              >
                Transparency in every transaction.
              </h3>

            </div>


            <div
              className="
                flex
                items-center
                gap-3
                text-sm
                text-white/70
              "
            >

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                "
              >

                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M5 12.5 9.5 17 19 7.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </span>

              <span>
                Official business documentation
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEGAL DETAILS
      ====================================================== */}

      <section
        className="
          min-h-[80vh]
          border-t
          border-white/10
          bg-black
          text-white
          flex
          items-center
        "
      >

        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-5
            py-10
            sm:px-8
            sm:py-12
            lg:px-10
            lg:py-14
          "
        >

          {/* HEADER */}

          <div className="mb-7 sm:mb-8">

            <div className="flex items-center gap-3">

              <span className="h-px w-9 bg-[#b58a3b]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#c5b49b]
                "
              >
                BUSINESS INFORMATION
              </span>

            </div>


            <h2
              className="
                mt-3
                text-2xl
                font-light
                tracking-[-0.025em]
                text-white
                sm:text-3xl
              "
            >
              Our Legal Details
            </h2>


            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-white/55
              "
            >
              Official business and banking information for commercial
              verification and international transactions.
            </p>

          </div>


          {/* LEGAL CARDS */}

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {legalDetails.map((item, index) => (

              <div
                key={item.title}
                className="
                  group
                  min-h-[165px]
                  rounded-[18px]
                  border
                  border-white/10
                  bg-white
                  px-5
                  py-5
                  text-[#111111]
                  shadow-[0_8px_25px_rgba(0,0,0,0.3)]
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:border-[#b58a3b]/50
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.45)]
                "
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >

                {/* ICON */}

                <div
                  className="
                    mx-auto
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    text-lg
                    text-white
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:bg-[#b58a3b]
                  "
                >
                  {item.icon}
                </div>


                {/* TEXT */}

                <div className="mt-4 text-center">

                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-[#111111]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      break-words
                      text-xs
                      leading-5
                      text-[#777777]
                    "
                  >
                    {item.value}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DOCUMENT VIEWER — VIEW ONLY
      ====================================================== */}

      {selected && (

        <div
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-black/90
            p-2
            backdrop-blur-md
            sm:p-5
            lg:p-8
            select-none
          "
          onClick={closeDocument}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} viewer`}
        >

          <div
            className="
              flex
              h-full
              w-full
              max-w-7xl
              flex-col
              overflow-hidden
              rounded-2xl
              bg-[#f5f5f3]
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
            onContextMenu={(event) => event.preventDefault()}
          >

            {/* =================================================
                VIEWER HEADER
            ================================================== */}

            <div
              className="
                flex
                shrink-0
                items-center
                justify-between
                border-b
                border-black/10
                bg-white
                px-5
                py-4
                sm:px-7
              "
            >

              <div className="min-w-0 pr-5">

                <div className="flex items-center gap-3">

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#48c878]
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-black/40
                    "
                  >
                    Official Document
                  </span>

                </div>


                <h2
                  className="
                    mt-1
                    truncate
                    text-lg
                    font-semibold
                    text-black
                    sm:text-xl
                  "
                >
                  {selected.name}
                </h2>


                <p className="mt-1 text-xs text-black/45">
                  Issued by {selected.issuer}
                </p>

              </div>


              {/* CLOSE */}

              <button
                type="button"
                onClick={closeDocument}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-black
                  bg-white
                  text-2xl
                  leading-none
                  text-black
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                "
                aria-label="Close document"
              >
                ×
              </button>

            </div>


            {/* =================================================
                PDF VIEWER — DOWNLOAD/PRINT UI HIDDEN
            ================================================== */}

            <div
              className="
                relative
                min-h-0
                flex-1
                overflow-hidden
                bg-[#d8d9da]
                p-2
                sm:p-4
              "
              onContextMenu={(event) => event.preventDefault()}
            >

              <iframe
                src={`${selected.file}#toolbar=0&navpanes=0&scrollbar=1&statusbar=0&messages=0`}
                title={`${selected.name} certificate`}
                className="
                  h-full
                  w-full
                  border-0
                  bg-white
                  shadow-xl
                  select-none
                "
                style={{
                  pointerEvents: "auto",
                }}
                onLoad={(event) => {
                  /*
                   * Attempt to disable context menu inside
                   * same-origin PDF iframe where possible.
                   */
                  try {
                    const iframeDocument =
                      event.currentTarget.contentDocument;

                    if (iframeDocument) {
                      iframeDocument.addEventListener(
                        "contextmenu",
                        (e) => e.preventDefault()
                      );
                    }
                  } catch {
                    /*
                     * Browser security may prevent access
                     * to the PDF viewer document.
                     */
                  }
                }}
              />

              {/* Invisible protection layer over iframe controls area */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-2
                "
              />

            </div>


            {/* =================================================
                VIEWER FOOTER
            ================================================== */}

            <div
              className="
                flex
                shrink-0
                flex-col
                gap-4
                border-t
                border-black/10
                bg-white
                px-5
                py-4
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-7
              "
            >

              <div>

                <span
                  className="
                    block
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.1em]
                    text-black/40
                  "
                >
                  Certificate Document
                </span>

                <span className="mt-1 block text-xs text-black/55">
                  Official document available for viewing only.
                </span>

              </div>


              {/* ONLY CLOSE BUTTON — NO DOWNLOAD / OPEN BUTTON */}

              <button
                type="button"
                onClick={closeDocument}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-black
                  px-6
                  py-3
                  transition-all
                  duration-300
                  hover:bg-[#b58a3b]
                "
              >

                <span
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.12em]
                    text-white
                  "
                >
                  CLOSE
                </span>

              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}