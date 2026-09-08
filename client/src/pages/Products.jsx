import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, imageUrl } from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);

        const [productsRes, categoriesRes] = await Promise.all([
          api.get("/products"),
          api.get("/categories"),
        ]);

        setProducts(productsRes.data || []);
        setCategories(categoriesRes.data || []);
      } catch (error) {
        console.error("Failed to load products:", error);
        setProducts([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts =
    active === "All"
      ? products
      : products.filter((product) => {
          const categoryName =
            typeof product.category === "string"
              ? product.category
              : product.category?.name;

          return (
            categoryName?.toLowerCase() === active.toLowerCase()
          );
        });

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          PAGE HEADER — 30VH
      ====================================================== */}

      <section className="flex min-h-[30vh] items-center border-b border-[#dddddd] bg-white text-[#111111]">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">

            {/* LEFT */}

            <div>

              <div className="mb-4 flex items-center gap-3">

                <span className="h-px w-9 bg-[#111111]" />

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-[#555555]
                    sm:text-[10px]
                  "
                >
                  Our Collection
                </span>

              </div>

              <p
                className="
                  mb-2
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#888888]
                  sm:text-[10px]
                "
              >
                Natural Stone
              </p>

              <h1
                className="
                  max-w-2xl
                  text-4xl
                  font-light
                  leading-[1]
                  tracking-[-0.045em]
                  text-[#111111]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Materials built for

                <span className="block text-[#555555]">
                  global projects.
                </span>
              </h1>

            </div>


            {/* RIGHT */}

            <div className="lg:pb-1">

              <p
                className="
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#666666]
                  sm:text-base
                  sm:leading-7
                "
              >
                Explore our collection of premium natural stones,
                carefully sourced and prepared for international
                projects and export requirements.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          STICKY FILTER NAV
      ====================================================== */}

      <div
        className="
          sticky
          top-[76px]
          z-40
          border-b
          border-[#dddddd]
          bg-white
          shadow-[0_4px_20px_rgba(0,0,0,0.06)]
          sm:top-20
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            gap-2
            overflow-x-auto
            px-5
            py-3
            scrollbar-hide
            sm:px-8
            sm:py-4
            lg:px-10
          "
        >

          {/* FILTER LABEL */}

          <span
            className="
              mr-2
              shrink-0
              text-[9px]
              font-normal
              uppercase
              tracking-[0.16em]
              text-[#777777]
              sm:text-[10px]
            "
          >
            Filter
          </span>


          {/* ALL BUTTON */}

          <button
            type="button"
            onClick={() => setActive("All")}
            className={`
              shrink-0
              rounded-full
              border
              px-5
              py-2.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.08em]
              transition-all
              duration-300
              sm:px-6
              sm:py-3
              sm:text-xs

              ${
                active === "All"
                  ? "border-[#111111] bg-[#111111] !text-white shadow-md"
                  : "border-[#dddddd] bg-white !text-[#111111] hover:border-[#111111] hover:bg-[#f7f7f7]"
              }
            `}
          >
            All
          </button>


          {/* CATEGORY BUTTONS */}

          {categories.map((category) => {
            const categoryName =
              typeof category === "string"
                ? category
                : category.name;

            return (
              <button
                key={
                  category._id ||
                  category.id ||
                  categoryName
                }
                type="button"
                onClick={() => setActive(categoryName)}
                className={`
                  shrink-0
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  transition-all
                  duration-300
                  sm:px-6
                  sm:py-3
                  sm:text-xs

                  ${
                    active === categoryName
                      ? "border-[#111111] bg-[#111111] !text-white shadow-md"
                      : "border-[#dddddd] bg-white !text-[#111111] hover:border-[#111111] hover:bg-[#f7f7f7]"
                  }
                `}
              >
                {categoryName}
              </button>
            );
          })}

        </div>

      </div>


      {/* =====================================================
          PRODUCTS SECTION — BLACK BACKGROUND
      ====================================================== */}

      <section className="bg-[#111111]">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-12
            sm:px-8
            sm:py-16
            lg:px-10
            lg:py-20
          "
        >

          {/* SECTION HEADING */}

          <div className="mb-8 sm:mb-10">

            <div className="mb-4 flex items-center gap-3">

              <span className="h-px w-9 bg-white/60" />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white/60
                  sm:text-[10px]
                "
              >
                Complete Collection
              </span>

            </div>


            <div
              className="
                flex
                flex-col
                justify-between
                gap-4
                sm:flex-row
                sm:items-end
              "
            >

              <h2
                className="
                  text-3xl
                  font-light
                  tracking-[-0.04em]
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {filteredProducts.length}

                <span className="ml-2 text-white/40">
                  {filteredProducts.length === 1
                    ? "material"
                    : "materials"}
                </span>
              </h2>


              {active !== "All" && (
                <div
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white/50
                  "
                >
                  Showing:{" "}

                  <span className="text-white">
                    {active}
                  </span>
                </div>
              )}

            </div>

          </div>


          {/* =================================================
              LOADING
          ================================================== */}

          {loading ? (

            <div
              className="
                grid
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {[1, 2, 3, 4, 5, 6].map((item) => (

                <div
                  key={item}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white
                  "
                >

                  <div
                    className="
                      aspect-[4/3]
                      animate-pulse
                      bg-[#e8e5e0]
                    "
                  />

                  <div className="space-y-3 p-5">

                    <div
                      className="
                        h-5
                        w-2/3
                        animate-pulse
                        rounded
                        bg-[#e8e5e0]
                      "
                    />

                    <div
                      className="
                        h-3
                        w-full
                        animate-pulse
                        rounded
                        bg-[#eeeeee]
                      "
                    />

                    <div
                      className="
                        h-3
                        w-4/5
                        animate-pulse
                        rounded
                        bg-[#eeeeee]
                      "
                    />

                  </div>

                </div>

              ))}

            </div>

          ) : filteredProducts.length > 0 ? (

            /* =================================================
               PRODUCT GRID
            ================================================== */

            <div
              className="
                grid
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
                xl:gap-6
              "
            >

              {filteredProducts.map((product) => {

                const productImage =
                  product.images?.length > 0
                    ? imageUrl(product.images[0])
                    : null;

                const productCategory =
                  typeof product.category === "string"
                    ? product.category
                    : product.category?.name;

                const enquiryUrl =
                  `/contact?product=${encodeURIComponent(
                    product.name || ""
                  )}`;

                return (

                  <article
                    key={product._id || product.id}
                    className="
                      group
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-white
                      text-[#111111]
                      shadow-[0_15px_45px_rgba(0,0,0,0.25)]
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-white/30
                      hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]
                    "
                  >

                    {/* =================================================
                        IMAGE
                    ================================================== */}

                    <div
                      className="
                        relative
                        aspect-[4/3]
                        overflow-hidden
                        bg-[#eeeeee]
                      "
                    >

                      {productImage ? (

                        <img
                          src={productImage}
                          alt={
                            product.name ||
                            "Natural stone"
                          }
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

                      ) : (

                        <div
                          className="
                            flex
                            h-full
                            items-center
                            justify-center
                            bg-[#e9e6e1]
                          "
                        >
                          <span
                            className="
                              text-xs
                              font-semibold
                              uppercase
                              tracking-[0.15em]
                              text-[#999999]
                            "
                          >
                            No Image
                          </span>
                        </div>

                      )}


                      {/* IMAGE OVERLAY */}

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


                      {/* CATEGORY */}

                      {productCategory && (

                        <div
                          className="
                            absolute
                            left-4
                            top-4
                          "
                        >

                          <span
                            className="
                              rounded-full
                              border
                              border-white/30
                              bg-black/40
                              px-3
                              py-1.5
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.15em]
                              text-white
                              backdrop-blur-md
                            "
                          >
                            {productCategory}
                          </span>

                        </div>

                      )}


                      {/* TOP ENQUIRY BUTTON */}

                      <Link
                        to={enquiryUrl}
                        aria-label={`Enquire about ${
                          product.name || "this product"
                        }`}
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
                          bg-white
                          text-sm
                          font-medium
                          !text-[#111111]
                          shadow-lg
                          transition-all
                          duration-300
                          hover:scale-110
                          hover:bg-[#111111]
                          hover:!text-white
                        "
                      >
                        ↗
                      </Link>


                      {/* PRODUCT NAME */}

                      <div
                        className="
                          absolute
                          bottom-4
                          left-4
                          right-4
                        "
                      >

                        <h3
                          className="
                            text-xl
                            font-medium
                            uppercase
                            leading-tight
                            !text-white
                            drop-shadow-md
                            sm:text-2xl
                          "
                        >
                          {product.name}
                        </h3>

                      </div>

                    </div>


                    {/* =================================================
                        CARD CONTENT
                    ================================================== */}

                    <div className="p-5">

                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-[#999999]
                        "
                      >
                        Natural Stone
                      </p>


                      {product.description && (

                        <p
                          className="
                            mt-2
                            line-clamp-2
                            text-xs
                            leading-5
                            text-[#666666]
                            sm:text-sm
                          "
                        >
                          {product.description}
                        </p>

                      )}


                      {/* =================================================
                          PREMIUM ENQUIRY BUTTON
                      ================================================== */}

                      <Link
                        to={enquiryUrl}
                        className="
                          group/enquiry
                          mt-5
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-xl
                          border
                          border-[#d8d5d0]
                          bg-[#f7f6f3]
                          px-4
                          py-3.5
                          transition-all
                          duration-300
                          hover:border-[#111111]
                          hover:bg-[#111111]
                        "
                      >

                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >

                          {/* ICON */}

                          <span
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#111111]
                              text-sm
                              !text-white
                              transition-all
                              duration-300
                              group-hover/enquiry:bg-white
                              group-hover/enquiry:!text-[#111111]
                            "
                          >
                            ↗
                          </span>


                          {/* TEXT */}

                          <div>

                            <p
                              className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                !text-[#111111]
                                transition-colors
                                duration-300
                                group-hover/enquiry:!text-white
                              "
                            >
                              Make An Enquiry
                            </p>

                            <p
                              className="
                                mt-0.5
                                text-[8px]
                                !text-[#888888]
                                transition-colors
                                duration-300
                                group-hover/enquiry:!text-white/60
                              "
                            >
                              Request specifications & pricing
                            </p>

                          </div>

                        </div>


                        {/* RIGHT ARROW */}

                        <span
                          className="
                            text-sm
                            !text-[#111111]
                            transition-all
                            duration-300
                            group-hover/enquiry:translate-x-1
                            group-hover/enquiry:!text-white
                          "
                        >
                          →
                        </span>

                      </Link>

                    </div>

                  </article>

                );
              })}

            </div>

          ) : (

            /* =================================================
               EMPTY STATE
            ================================================== */

            <div
              className="
                rounded-[2rem]
                border
                border-white/10
                bg-[#f7f5f1]
                px-6
                py-20
                text-center
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                sm:py-24
                lg:py-28
              "
            >

              {/* ICON */}

              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-2xl
                  text-[#111111]
                  shadow-md
                "
              >
                ◇
              </div>


              <h3
                className="
                  mt-7
                  text-2xl
                  font-medium
                  tracking-[-0.02em]
                  text-[#111111]
                  sm:text-3xl
                "
              >
                No materials found
              </h3>


              <p
                className="
                  mx-auto
                  mt-3
                  max-w-md
                  text-sm
                  leading-6
                  text-[#777777]
                  sm:text-base
                "
              >
                There are currently no products in this
                category.
              </p>


              <button
                type="button"
                onClick={() => setActive("All")}
                className="
                  mt-7
                  rounded-full
                  bg-[#111111]
                  px-7
                  py-3.5
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  !text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-black
                  hover:shadow-xl
                "
              >
                View All Products
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section
        className="
          border-t
          border-white/10
          bg-[#111111]
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-6
            px-5
            py-12
            sm:px-8
            sm:py-16
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-10
            lg:py-20
          "
        >

          {/* CTA CONTENT */}

          <div>

            <div className="mb-4 flex items-center gap-3">

              <span className="h-px w-8 bg-white/50" />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/50
                "
              >
                Need Something Specific?
              </span>

            </div>


            <h2
              className="
                max-w-2xl
                text-3xl
                font-light
                uppercase
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Let's discuss your

              <span className="block font-semibold">
                next shipment.
              </span>
            </h2>


            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-white/50
              "
            >
              Share your requirements and destination port.
              We'll respond with specifications and a
              competitive quotation.
            </p>

          </div>


          {/* CTA BUTTON */}

          <Link
            to="/contact"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-3
              rounded-full
              bg-white
              px-7
              py-3.5
              text-xs
              font-bold
              uppercase
              tracking-[0.08em]
              !text-[#111111]
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#eeeeee]
              hover:shadow-2xl
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

      </section>

    </main>
  );
}