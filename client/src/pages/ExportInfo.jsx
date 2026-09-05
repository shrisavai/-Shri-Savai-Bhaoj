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
    <main className="min-h-screen bg-[#f5f3ef] text-[#171717]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="border-b border-[#ddd7ce] bg-[#f5f3ef]">

        <div className="mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 sm:pb-18 sm:pt-14 lg:px-10 lg:pb-20 lg:pt-16">

          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-20">

            {/* LEFT */}

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#8b7355]" />

                <span className="text-[10px] font-bold tracking-[0.22em] text-[#76634d]">
                  EXPORT INFORMATION
                </span>

              </div>

              <h1 className="max-w-2xl text-4xl font-light leading-[1.02] tracking-[-0.045em] text-[#111111] sm:text-5xl lg:text-6xl">

                Simple terms.

                <span className="block font-serif italic text-[#806d56]">
                  Global trade.
                </span>

              </h1>

            </div>


            {/* RIGHT */}

            <div>

              <p className="max-w-xl text-base leading-7 text-[#65615b] sm:text-lg sm:leading-8">
                Clear commercial terms for international buyers, with
                straightforward trade and payment options designed for
                reliable global shipments.
              </p>


              {/* QUICK INFO */}

              <div className="mt-7 flex flex-wrap gap-4">

                <div className="rounded-xl border border-[#d9d2c8] bg-white px-5 py-4">

                  <p className="text-xl font-semibold text-[#111111]">
                    {tradeTerms.length}
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#817a70]">
                    Trade terms
                  </p>

                </div>


                <div className="rounded-xl border border-[#d9d2c8] bg-white px-5 py-4">

                  <p className="text-xl font-semibold text-[#111111]">
                    {paymentOptions.length}
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#817a70]">
                    Payment options
                  </p>

                </div>


                <div className="rounded-xl border border-[#d9d2c8] bg-white px-5 py-4">

                  <p className="text-xl font-semibold text-[#111111]">
                    Global
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#817a70]">
                    Buyer focused
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">

          {/* =================================================
              LOADING
          ================================================== */}

          {loading && (

            <div className="grid gap-10 lg:grid-cols-2">

              {[1, 2].map((column) => (

                <div key={column}>

                  <div className="mb-6 h-8 w-48 animate-pulse rounded bg-[#e8e4de]" />

                  <div className="space-y-4">

                    {[1, 2, 3].map((item) => (

                      <div
                        key={item}
                        className="h-32 animate-pulse rounded-2xl bg-[#f1eee9]"
                      />

                    ))}

                  </div>

                </div>

              ))}

            </div>

          )}


          {!loading && (

            <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">


              {/* =================================================
                  INCOTERMS
              ================================================== */}

              <section>

                {/* SECTION HEADING */}

                <div className="mb-7">

                  <div className="mb-4 flex items-center gap-3">

                    <span className="h-px w-8 bg-[#8b7355]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#76634d]">
                      SHIPPING
                    </span>

                  </div>

                  <h2 className="text-3xl font-light tracking-[-0.035em] text-[#171717] sm:text-4xl">
                    Trade terms
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#777067]">
                    Incoterms used to define responsibilities, costs and
                    delivery obligations between buyer and seller.
                  </p>

                </div>


                {/* CARDS */}

                <div className="space-y-4">

                  {tradeTerms.length > 0 ? (

                    tradeTerms.map((item, index) => (

                      <div
                        key={index}
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          border-[#ded9d1]
                          bg-[#faf9f7]
                          p-5
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[#c8c0b5]
                          hover:bg-white
                          hover:shadow-xl
                          sm:p-6
                        "
                      >

                        <div className="flex gap-5">

                          {/* CODE */}

                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-sm font-bold tracking-wide text-white shadow-md">
                            {item.code}
                          </div>


                          {/* CONTENT */}

                          <div className="min-w-0 flex-1">

                            <h3 className="text-lg font-semibold text-[#171717]">
                              {item.name}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#6d675f]">
                              {item.description}
                            </p>

                          </div>

                        </div>

                      </div>

                    ))

                  ) : (

                    <div className="rounded-2xl border border-dashed border-[#d8d1c7] bg-[#faf9f7] p-8 text-center">

                      <p className="text-sm text-[#777067]">
                        Trade terms will be available soon.
                      </p>

                    </div>

                  )}

                </div>

              </section>


              {/* =================================================
                  PAYMENT OPTIONS
              ================================================== */}

              <section>

                {/* SECTION HEADING */}

                <div className="mb-7">

                  <div className="mb-4 flex items-center gap-3">

                    <span className="h-px w-8 bg-[#8b7355]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#76634d]">
                      PAYMENT
                    </span>

                  </div>

                  <h2 className="text-3xl font-light tracking-[-0.035em] text-[#171717] sm:text-4xl">
                    Payment options
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#777067]">
                    Flexible payment arrangements to support international
                    transactions and shipment planning.
                  </p>

                </div>


                {/* CARDS */}

                <div className="space-y-4">

                  {paymentOptions.length > 0 ? (

                    paymentOptions.map((item, index) => (

                      <div
                        key={index}
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          border-[#ded9d1]
                          bg-[#faf9f7]
                          p-5
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[#c8c0b5]
                          hover:bg-white
                          hover:shadow-xl
                          sm:p-6
                        "
                      >

                        <div className="flex gap-5">

                          {/* CODE */}

                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#d8d0c5] bg-white text-xs font-bold tracking-wide text-[#111111] shadow-sm">
                            {item.code}
                          </div>


                          {/* CONTENT */}

                          <div className="min-w-0 flex-1">

                            <h3 className="text-lg font-semibold text-[#171717]">
                              {item.name}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#6d675f]">
                              {item.description}
                            </p>

                          </div>

                        </div>

                      </div>

                    ))

                  ) : (

                    <div className="rounded-2xl border border-dashed border-[#d8d1c7] bg-[#faf9f7] p-8 text-center">

                      <p className="text-sm text-[#777067]">
                        Payment options will be available soon.
                      </p>

                    </div>

                  )}

                </div>

              </section>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          PROCESS STRIP
      ====================================================== */}

      <section className="border-y border-[#ded9d1] bg-[#f5f3ef]">

        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">

          <div className="grid gap-8 md:grid-cols-3">

            {/* STEP 1 */}

            <div className="flex gap-4">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-white">
                01
              </span>

              <div>

                <h3 className="font-semibold text-[#171717]">
                  Share your requirement
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#777067]">
                  Tell us the material, quantity and destination.
                </p>

              </div>

            </div>


            {/* STEP 2 */}

            <div className="flex gap-4">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-white">
                02
              </span>

              <div>

                <h3 className="font-semibold text-[#171717]">
                  Confirm specifications
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#777067]">
                  We align material specifications and commercial terms.
                </p>

              </div>

            </div>


            {/* STEP 3 */}

            <div className="flex gap-4">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-white">
                03
              </span>

              <div>

                <h3 className="font-semibold text-[#171717]">
                  Prepare the shipment
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#777067]">
                  Finalize documentation and shipment arrangements.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#111111] text-white">

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#b6a48d]" />

                <span className="text-[10px] font-bold tracking-[0.22em] text-[#c5bbb0]">
                  READY TO SHIP?
                </span>

              </div>


              <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">

                Let's discuss your

                <span className="font-serif italic text-[#c7b59d]">
                  {" "}next shipment.
                </span>

              </h2>


              <p className="mt-5 max-w-xl text-sm leading-7 text-[#b5aea5] sm:text-base">
                Share your material requirements, quantity and destination.
                We'll help you with the appropriate commercial terms.
              </p>

            </div>


            {/* BUTTON */}

            <Link
              to="/contact"
              className="
                inline-flex
                min-h-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                px-8
                py-3.5
                text-sm
                font-bold
                !text-[#111111]
                no-underline
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#f0ede8]
                hover:!text-[#111111]
                hover:shadow-2xl
              "
            >
              Send an enquiry
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}