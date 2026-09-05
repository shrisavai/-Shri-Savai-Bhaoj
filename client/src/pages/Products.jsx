import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, imageUrl } from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get("/products"),
      api.get("/categories"),
    ])
      .then(([productsRes, categoriesRes]) => {
        setProducts(productsRes.data || []);
        setCategories(categoriesRes.data || []);
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filtered =
    active === "All"
      ? products
      : products.filter(
          (product) =>
            String(product.category || "")
              .trim()
              .toLowerCase() ===
            String(active || "")
              .trim()
              .toLowerCase()
        );

  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#171717]">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section className="border-b border-[#ddd7ce] bg-[#f5f3ef]">

        <div className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-10 lg:pb-20">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">

            {/* LEFT */}

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#8b7355]" />

                <span className="text-[10px] font-bold tracking-[0.22em] text-[#76634d]">
                  OUR COLLECTION
                </span>

              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#91897e]">
                Natural Stone & Industrial Minerals
              </p>

              <h1 className="max-w-xl text-4xl font-light leading-[1.02] tracking-[-0.045em] text-[#111111] sm:text-5xl lg:text-6xl">

                Materials built for

                <span className="block font-serif italic text-[#806d56]">
                  global projects.
                </span>

              </h1>

            </div>


            {/* RIGHT */}

            <div className="lg:pb-1">

              <p className="max-w-2xl text-sm leading-7 text-[#65615b] sm:text-base sm:leading-8">
                Explore our range of premium natural stones and industrial
                minerals. Each material is sourced with attention to
                consistency, finish and export requirements.
              </p>

              <div className="mt-6 flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#777067]">

                <div>
                  <span className="block text-xl font-semibold tracking-normal text-[#111111]">
                    {products.length}+
                  </span>
                  Products
                </div>

                <div className="border-l border-[#d4cec5] pl-6">
                  <span className="block text-xl font-semibold tracking-normal text-[#111111]">
                    {categories.length}+
                  </span>
                  Categories
                </div>

                <div className="border-l border-[#d4cec5] pl-6">
                  <span className="block text-xl font-semibold tracking-normal text-[#111111]">
                    India
                  </span>
                  Origin
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FILTERS
      ====================================================== */}

      <section className="sticky top-0 z-20 border-b border-[#ddd7ce] bg-[#f5f3ef]/95 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-5 py-4 sm:px-8 lg:px-10">

          <span className="mr-2 shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a8278]">
            Filter
          </span>


          {/* ALL */}

          <button
            type="button"
            onClick={() => setActive("All")}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
              active === "All"
                ? "border-[#111111] bg-[#111111] !text-white shadow-md"
                : "border-[#cfc8be] bg-white !text-[#4f4a44] hover:border-[#111111] hover:bg-[#111111] hover:!text-white"
            }`}
          >
            All
          </button>


          {/* CATEGORIES */}

          {categories.map((category) => (

            <button
              type="button"
              key={category._id}
              onClick={() => setActive(category.name)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                active === category.name
                  ? "border-[#111111] bg-[#111111] !text-white shadow-md"
                  : "border-[#cfc8be] bg-white !text-[#4f4a44] hover:border-[#111111] hover:bg-[#111111] hover:!text-white"
              }`}
            >
              {category.name}
            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">


          {/* RESULTS HEADER */}

          <div className="mb-8">

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8b7355]">
              {active === "All" ? "Complete collection" : active}
            </p>

            <h2 className="mt-1 text-2xl font-light tracking-[-0.03em] text-[#171717] sm:text-3xl">
              {filtered.length}{" "}
              <span className="text-[#a29b91]">
                {filtered.length === 1 ? "material" : "materials"}
              </span>
            </h2>

          </div>


          {/* =================================================
              LOADING
          ================================================== */}

          {loading && (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {[1, 2, 3, 4, 5, 6].map((item) => (

                <div
                  key={item}
                  className="overflow-hidden rounded-2xl border border-[#e5e0d9] bg-white"
                >

                  <div className="aspect-[4/3] animate-pulse bg-[#e9e5df]" />

                  <div className="space-y-3 p-6">

                    <div className="h-5 w-2/3 animate-pulse rounded bg-[#e9e5df]" />

                    <div className="h-3 w-1/2 animate-pulse rounded bg-[#e9e5df]" />

                    <div className="h-12 w-full animate-pulse rounded bg-[#e9e5df]" />

                  </div>

                </div>

              ))}

            </div>

          )}


          {/* =================================================
              EMPTY
          ================================================== */}

          {!loading && filtered.length === 0 && (

            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-[#d7d0c6] bg-[#f8f6f2] px-6 text-center">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                ◇
              </div>

              <h3 className="text-xl font-medium text-[#171717]">
                No materials found
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-[#777067]">
                There are currently no products in this category.
              </p>

              <button
                type="button"
                onClick={() => setActive("All")}
                className="mt-5 rounded-full bg-[#111111] px-6 py-3 text-xs font-bold !text-white transition hover:-translate-y-0.5 hover:bg-black"
              >
                View all products
              </button>

            </div>

          )}


          {/* =================================================
              PRODUCT GRID
          ================================================== */}

          {!loading && filtered.length > 0 && (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filtered.map((product, index) => (

                <article
                  key={product._id}
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
                    hover:border-[#c7beb2]
                    hover:shadow-2xl
                  "
                >

                  {/* =========================================
                      IMAGE
                  ========================================== */}

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e4de]">

                    {product.images?.[0] ? (

                      <img
                        src={imageUrl(product.images[0])}
                        alt={product.name}
                        loading={index < 3 ? "eager" : "lazy"}
                        decoding="async"
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                    ) : (

                      <div className="flex h-full items-center justify-center bg-[#e4e0d8]">

                        <div className="text-center">

                          <div className="text-4xl text-[#aaa197]">
                            ◇
                          </div>

                          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b8378]">
                            Natural Stone
                          </p>

                        </div>

                      </div>

                    )}


                    {/* IMAGE OVERLAY */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


                    {/* CATEGORY */}

                    <div className="absolute left-5 top-5">

                      <span className="rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] !text-white backdrop-blur-md">
                        {product.category}
                      </span>

                    </div>


                    {/* PRODUCT NAME */}

                    <div className="absolute bottom-5 left-5 right-5">

                      <h2 className="text-2xl font-medium tracking-[-0.02em] !text-white">
                        {product.name}
                      </h2>

                    </div>

                  </div>


                  {/* =========================================
                      PRODUCT BODY
                  ========================================== */}

                  <div className="p-6">


                    {/* ORIGIN + FINISH */}

                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a8278]">

                      {product.origin && (
                        <>
                          <span>
                            {product.origin}
                          </span>

                          <span className="text-[#c5beb5]">
                            •
                          </span>
                        </>
                      )}

                      <span>
                        {product.finish || "As specified"}
                      </span>

                    </div>


                    {/* DESCRIPTION */}

                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#69645d]">
                      {product.description ||
                        "Premium material supplied according to project specifications and export requirements."}
                    </p>


                    {/* FOOTER */}

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#ebe7e1] pt-5">

                      {/* PRICE */}

                      <div className="min-w-0">

                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#928a80]">
                          Pricing
                        </p>

                        <strong className="mt-1 block truncate text-sm font-semibold text-[#171717]">
                          {product.price || "Price on request"}
                        </strong>

                      </div>


                      {/* ENQUIRE BUTTON */}

                      <Link
                        to={`/contact?product=${encodeURIComponent(
                          product.name
                        )}`}
                        className="
                          inline-flex
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#111111]
                          bg-[#111111]
                          px-5
                          py-3
                          text-xs
                          font-bold
                          !text-white
                          no-underline
                          shadow-md
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:bg-black
                          hover:!text-white
                          hover:shadow-lg
                          focus:!text-white
                        "
                      >
                        Enquire
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="bg-[#111111] !text-white">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#b6a48d]" />

                <span className="text-[10px] font-bold tracking-[0.22em] text-[#c5bbb0]">
                  NEED A SPECIFIC MATERIAL?
                </span>

              </div>


              <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.035em] !text-white sm:text-5xl lg:text-6xl">

                Tell us what you're

                <span className="font-serif italic text-[#c7b59d]">
                  {" "}looking for.
                </span>

              </h2>


              <p className="mt-5 max-w-xl text-base leading-7 text-[#b5aea5]">
                Share the material, quantity and destination. We'll help you
                with specifications, availability and quotation.
              </p>

            </div>


            {/* CTA BUTTON */}

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