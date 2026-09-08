import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";

export default function ExportInfo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/export-info")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Failed to load export information:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const tradeTerms = data?.tradeTerms || [];
  const paymentOptions = data?.paymentOptions || [];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-white text-[#111111]">

        <div
          className="
            mx-auto
            max-w-7xl
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
              grid
              gap-7

              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-end
              lg:gap-14
            "
          >

            {/* LEFT */}

            <div>

              <div className="mb-4 flex items-center gap-3">

                <span className="h-px w-8 bg-[#b58a3b] sm:w-10" />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#806d56]

                    sm:text-[10px]
                  "
                >
                  EXPORT INFORMATION
                </span>

              </div>

              <h1
                className="
                  max-w-2xl
                  text-4xl
                  font-light
                  leading-[1]
                  tracking-[-0.045em]

                  sm:text-5xl

                  lg:text-[3.7rem]
                "
              >
                Simple terms.

                <span className="block font-serif text-[#806d56]">
                  Global trade.
                </span>
              </h1>

            </div>


            {/* RIGHT */}

            <div>

              <p
                className="
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#625e58]

                  sm:text-base
                  sm:leading-7
                "
              >
                Clear commercial terms for international buyers, with
                straightforward trade and payment options designed for
                reliable global shipments.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRADE + PAYMENT
      ====================================================== */}

      <section className="bg-black">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-11

            sm:px-8
            sm:py-14

            lg:px-10
            lg:py-16
          "
        >

          {/* =================================================
              LOADING
          ================================================== */}

          {loading && (

            <div className="space-y-12">

              <div>

                <div className="mb-6 h-6 w-44 animate-pulse rounded bg-[#222222]" />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="
                        h-48
                        animate-pulse
                        rounded-2xl
                        bg-[#181818]
                      "
                    />
                  ))}

                </div>

              </div>


              <div>

                <div className="mb-6 h-6 w-52 animate-pulse rounded bg-[#222222]" />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="
                        h-52
                        animate-pulse
                        rounded-2xl
                        bg-[#181818]
                      "
                    />
                  ))}

                </div>

              </div>

            </div>

          )}


          {!loading && (

            <div className="space-y-14 sm:space-y-16">


              {/* =================================================
                  TRADE TERMS
              ================================================== */}

              <section>

                <div className="mb-6 sm:mb-7">

                  <div className="mb-3 flex items-center gap-3">

                    <span className="h-px w-8 bg-[#b58a3b] sm:w-9" />

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-[#b58a3b]

                        sm:text-[10px]
                      "
                    >
                      SHIPPING
                    </span>

                  </div>

                  <h2
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.035em]
                      text-white

                      sm:text-3xl

                      lg:text-4xl
                    "
                  >
                    Accepted Incoterms
                  </h2>

                  <div className="mt-3 h-px w-24 bg-[#b58a3b] sm:w-32" />

                </div>


                {tradeTerms.length > 0 ? (

                  <div
                    className="
                      grid
                      gap-3

                      sm:grid-cols-2
                      sm:gap-4

                      lg:grid-cols-4
                    "
                  >

                    {tradeTerms.map((item, index) => (

                      <div
                        key={index}
                        className="
                          group
                          relative
                          flex
                          min-h-[190px]
                          flex-col
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-2xl
                          border
                          border-white/10
                          bg-white
                          px-5
                          py-6
                          text-center
                          shadow-[0_15px_40px_rgba(0,0,0,0.2)]
                          transition-all
                          duration-300

                          hover:-translate-y-1
                          hover:border-[#b58a3b]
                          hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]

                          sm:min-h-[205px]
                          sm:px-6
                        "
                      >

                        {/* GOLD LINE */}

                        <div
                          className="
                            absolute
                            left-1/2
                            top-0
                            h-1
                            w-12
                            -translate-x-1/2
                            rounded-b-full
                            bg-[#b58a3b]

                            sm:w-14
                          "
                        />


                        {/* ICON */}

                        <div
                          className="
                            mb-4
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-full
                            bg-black
                            text-white
                            shadow-md
                            transition-transform
                            duration-300
                            group-hover:scale-105

                            sm:h-14
                            sm:w-14
                          "
                        >

                          <svg
                            className="h-6 w-6 sm:h-7 sm:w-7"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3v18M3 12h18"
                            />

                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                            />
                          </svg>

                        </div>


                        <p
                          className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#111111]

                            sm:text-xs
                          "
                        >
                          {item.code}
                        </p>


                        <h3
                          className="
                            mt-1.5
                            max-w-[200px]
                            text-sm
                            font-medium
                            leading-5
                            text-[#333333]
                          "
                        >
                          {item.name}
                        </h3>


                        {item.description && (
                          <p
                            className="
                              mt-1.5
                              max-w-[220px]
                              text-[11px]
                              leading-4
                              text-[#777067]

                              sm:text-xs
                              sm:leading-5
                            "
                          >
                            {item.description}
                          </p>
                        )}

                      </div>

                    ))}

                  </div>

                ) : (

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#111111]
                      p-8
                      text-center
                    "
                  >

                    <p className="text-sm text-[#aaa49c]">
                      Trade terms will be available soon.
                    </p>

                  </div>

                )}

              </section>


              {/* =================================================
                  PAYMENT OPTIONS
              ================================================== */}

              <section>

                <div className="mb-6 sm:mb-7">

                  <div className="mb-3 flex items-center gap-3">

                    <span className="h-px w-8 bg-[#b58a3b] sm:w-9" />

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-[#b58a3b]

                        sm:text-[10px]
                      "
                    >
                      PAYMENT
                    </span>

                  </div>

                  <h2
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.035em]
                      text-white

                      sm:text-3xl

                      lg:text-4xl
                    "
                  >
                    Flexible Payment Options
                  </h2>

                  <div className="mt-3 h-px w-32 bg-[#b58a3b] sm:w-44" />

                </div>


                {paymentOptions.length > 0 ? (

                  <div
                    className="
                      grid
                      gap-3

                      sm:grid-cols-2
                      sm:gap-4

                      lg:grid-cols-4
                    "
                  >

                    {paymentOptions.map((item, index) => (

                      <div
                        key={index}
                        className="
                          group
                          relative
                          flex
                          min-h-[205px]
                          flex-col
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-2xl
                          bg-white
                          px-5
                          py-7
                          text-center
                          shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                          transition-all
                          duration-300

                          hover:-translate-y-1
                          hover:shadow-[0_22px_55px_rgba(0,0,0,0.4)]

                          sm:min-h-[220px]
                          sm:px-6
                        "
                      >

                        {/* GOLD LINE */}

                        <div
                          className="
                            absolute
                            left-1/2
                            top-0
                            h-1
                            w-14
                            -translate-x-1/2
                            rounded-b-full
                            bg-[#b58a3b]

                            sm:w-16
                          "
                        />


                        {/* ICON */}

                        <div
                          className="
                            mb-4
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            bg-black
                            text-white
                            shadow-md
                            transition-transform
                            duration-300
                            group-hover:scale-105

                            sm:h-16
                            sm:w-16
                          "
                        >

                          {index === 0 ? (

                            <svg
                              className="h-7 w-7"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <ellipse
                                cx="12"
                                cy="6"
                                rx="7"
                                ry="3"
                              />

                              <path d="M5 6v4c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />

                              <path d="M5 10v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" />

                              <path d="M5 14v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" />
                            </svg>

                          ) : index === 1 ? (

                            <svg
                              className="h-7 w-7"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path d="M3 21h18" />
                              <path d="M5 21V9l7-5 7 5v12" />
                              <path d="M9 21v-6h6v6" />
                              <path d="M9 10h6" />
                            </svg>

                          ) : index === 2 ? (

                            <svg
                              className="h-7 w-7"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 3h8l4 4v14H7z"
                              />

                              <path d="M15 3v5h4" />

                              <path d="M10 12h6M10 16h6" />
                            </svg>

                          ) : (

                            <svg
                              className="h-7 w-7"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <rect
                                x="3"
                                y="6"
                                width="13"
                                height="10"
                                rx="1"
                              />

                              <path d="M16 9h3l2 3v4h-5" />

                              <circle
                                cx="7"
                                cy="18"
                                r="2"
                              />

                              <circle
                                cx="18"
                                cy="18"
                                r="2"
                              />
                            </svg>

                          )}

                        </div>


                        <p
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.14em]
                            text-[#806d56]

                            sm:text-xs
                          "
                        >
                          {item.code}
                        </p>


                        <h3
                          className="
                            mt-2
                            max-w-[230px]
                            text-sm
                            font-semibold
                            leading-5
                            text-[#111111]

                            sm:text-base
                            sm:leading-6
                          "
                        >
                          {item.name}
                        </h3>


                        {item.description && (
                          <p
                            className="
                              mt-2
                              max-w-[240px]
                              text-[11px]
                              leading-4
                              text-[#706b64]

                              sm:text-xs
                              sm:leading-5
                            "
                          >
                            {item.description}
                          </p>
                        )}

                      </div>

                    ))}

                  </div>

                ) : (

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#111111]
                      p-8
                      text-center
                    "
                  >

                    <p className="text-sm text-[#aaa49c]">
                      Payment options will be available soon.
                    </p>

                  </div>

                )}

              </section>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
    EXPORT PROCESS
===================================================== */}
      <section className="border-t border-white/10 bg-[#050505] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          {/* =====================================================
        HEADER
    ====================================================== */}

          <div className="mb-10 animate-[fadeUp_0.7s_ease-out_both] sm:mb-12 lg:mb-14">

            <div className="mb-4 flex items-center gap-3">
              <span
                className="
            h-px
            w-9
            origin-left
            animate-[lineGrow_0.8s_ease-out_0.2s_both]
            bg-[#b58a3b]
            sm:w-10
          "
              />

              <span
                className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#b58a3b]
            animate-[fadeIn_0.6s_ease-out_0.3s_both]
            sm:text-[10px]
          "
              >
                HOW IT WORKS
              </span>
            </div>

            <h2
              className="
          text-3xl
          font-light
          uppercase
          leading-[1.05]
          tracking-[-0.035em]
          text-white
          animate-[fadeUp_0.7s_ease-out_0.15s_both]
          sm:text-4xl
          lg:text-5xl
        "
            >
              Our Export Process
            </h2>

            <p
              className="
          mt-3
          max-w-xl
          text-sm
          leading-6
          text-[#a5a5a5]
          animate-[fadeUp_0.7s_ease-out_0.3s_both]
          sm:text-base
        "
            >
              A straightforward process from enquiry to final delivery.
            </p>
          </div>


          {/* =====================================================
        PROCESS
    ====================================================== */}

          <div className="relative">

            {/* DESKTOP CONNECTING LINE */}

            <div
              className="
          absolute
          left-[6%]
          right-[6%]
          top-[31px]
          hidden
          h-px
          origin-left
          animate-[lineGrowFull_1.4s_ease-out_0.6s_both]
          bg-white/20
          lg:block
        "
            />


            <div
              className="
          grid
          gap-10
          sm:grid-cols-2
          lg:grid-cols-4
          lg:gap-x-8
          lg:gap-y-14
        "
            >

              {[
                {
                  number: "01",
                  title: "Quotation Issued",
                  text: "You request a quote, and we send a customized quotation based on your product needs.",
                },
                {
                  number: "02",
                  title: "Official Documents Shared",
                  text: "You receive our Proforma Invoice and Full Corporate Offer (FCO).",
                },
                {
                  number: "03",
                  title: "Free Sample Sent",
                  text: "After documentation, we ship a free sample. Courier cost is covered by buyer.",
                },
                {
                  number: "04",
                  title: "Buyer Confirms & Pays Advance",
                  text: "You sign the FCO, place an order, and pay the advance to kick off production.",
                },
                {
                  number: "05",
                  title: "Production & Branding",
                  text: "We begin packaging and labeling, with your company branding if needed.",
                },
                {
                  number: "06",
                  title: "Final Approval & Payment",
                  text: "You review photos/videos of the final goods and complete payment.",
                },
                {
                  number: "07",
                  title: "Shipping Arranged",
                  text: "We load the goods and ship them. You receive all required documents.",
                },
                {
                  number: "08",
                  title: "Delivery & Quality Check",
                  text: "You receive and inspect the goods. If anything is off, we fix it fast.",
                },
              ].map((step, index) => (

                <div
                  key={step.number}
                  className="
              group
              relative
              flex
              flex-col
              items-center
              text-center
              opacity-0
              animate-[stepReveal_0.7s_ease-out_both]
            "
                  style={{
                    animationDelay: `${0.8 + index * 0.12}s`,
                  }}
                >

                  {/* =================================================
                NUMBER CIRCLE
            ================================================== */}

                  <div
                    className="
                relative
                z-10
                flex
                h-[62px]
                w-[62px]
                items-center
                justify-center
                rounded-full
                border-[5px]
                border-white
                bg-[#050505]
                shadow-[0_0_0_1px_rgba(255,255,255,0.08)]
                transition-all
                duration-500
                ease-out

                group-hover:scale-110
                group-hover:border-[#b58a3b]
                group-hover:shadow-[0_0_30px_rgba(181,138,59,0.18)]

                sm:h-[66px]
                sm:w-[66px]
              "
                  >

                    {/* GOLD INNER RING */}

                    <div
                      className="
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#b58a3b]
                  transition-all
                  duration-500
                  group-hover:rotate-180
                  group-hover:bg-[#b58a3b]
                "
                    >

                      <span
                        className="
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:text-[#050505]
                  "
                      >
                        {step.number}
                      </span>

                    </div>

                  </div>


                  {/* =================================================
                CONTENT
            ================================================== */}

                  <div
                    className="
                mt-5
                max-w-[250px]
                transition-transform
                duration-500
                ease-out
                group-hover:-translate-y-1
              "
                  >

                    <h3
                      className="
                  text-sm
                  font-bold
                  uppercase
                  leading-5
                  tracking-[-0.01em]
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-[#c5a76d]
                  sm:text-[15px]
                "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                  mt-2
                  text-[11px]
                  leading-5
                  text-[#9b9b9b]
                  transition-colors
                  duration-300
                  group-hover:text-[#c4c4c4]
                  sm:text-xs
                  sm:leading-5
                "
                    >
                      {step.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
      ANIMATIONS
  ====================================================== */}

        <style>
          {`
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes lineGrow {
        from {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }

      @keyframes lineGrowFull {
        from {
          transform: scaleX(0);
          opacity: 0;
        }
        to {
          transform: scaleX(1);
          opacity: 1;
        }
      }

      @keyframes stepReveal {
        from {
          opacity: 0;
          transform: translateY(30px) scale(0.96);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}
        </style>

      </section>




      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        className="
          border-t
          border-white/10
          bg-[#0b0b0b]
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-11

            sm:px-8
            sm:py-14

            lg:px-10
            lg:py-16
          "
        >

          <div className="mb-7 sm:mb-9">

            <div className="mb-3 flex items-center gap-3">

              <span className="h-px w-8 bg-[#b58a3b] sm:w-9" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#b58a3b]

                  sm:text-[10px]
                "
              >
                HOW IT WORKS
              </span>

            </div>

            <h2
              className="
                text-2xl
                font-light
                tracking-[-0.035em]
                text-white

                sm:text-3xl

                lg:text-4xl
              "
            >
              From enquiry to shipment.
            </h2>

          </div>


          <div className="grid gap-3 md:grid-cols-3 md:gap-4">

            {[
              {
                number: "01",
                title: "Share your requirement",
                text: "Tell us the material, quantity and destination.",
              },
              {
                number: "02",
                title: "Confirm specifications",
                text: "We align material specifications and commercial terms.",
              },
              {
                number: "03",
                title: "Prepare the shipment",
                text: "Finalize documentation and shipment arrangements.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white
                  p-5
                  text-[#111111]
                  transition-all
                  duration-300

                  hover:-translate-y-1

                  sm:p-6
                "
              >

                <div className="mb-5 flex items-center justify-between">

                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.15em]
                      text-[#806d56]
                    "
                  >
                    STEP
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-[10px]
                      font-bold
                      text-white
                    "
                  >
                    {step.number}
                  </span>

                </div>

                <h3 className="text-base font-semibold sm:text-lg">
                  {step.title}
                </h3>

                <p
                  className="
                    mt-1.5
                    text-xs
                    leading-5
                    text-[#716b64]

                    sm:text-sm
                    sm:leading-6
                  "
                >
                  {step.text}
                </p>

              </div>

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
            py-12

            sm:px-8
            sm:py-14

            lg:px-10
            lg:py-16
          "
        >

          <div
            className="
              flex
              flex-col
              gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-12
            "
          >

            {/* CONTENT */}

            <div className="max-w-3xl">

              <div className="mb-3 flex items-center gap-3">

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
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-white

                  sm:text-4xl

                  lg:text-5xl
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


            {/* BUTTON */}

            <Link
              to="/contact"
              className="
                group
                inline-flex
                w-fit
                shrink-0
                items-center
                justify-center
                gap-2
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

    </main>
  );
}