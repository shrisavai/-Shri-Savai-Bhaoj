import { useEffect, useState } from "react";
import { api, imageUrl } from "../api";
import logo from "../IMG/logo.PNG";

const emptyProduct = {
  name: "",
  category: "",
  origin: "",
  finish: "",
  price: "",
  description: "",
  featured: false,
  imageUrl: ""
};

const emptyCategory = {
  name: "",
  description: ""
};

export default function AdminDashboard() {
  const [tab, setTab] = useState("products");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [product, setProduct] = useState(emptyProduct);
  const [category, setCategory] = useState(emptyCategory);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const headers = () => ({
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`
  });

  const load = async () => {
    try {
      const [p, c] = await Promise.all([
        api.get("/products"),
        api.get("/categories")
      ]);

      setProducts(p.data);
      setCategories(c.data);
    } catch (err) {
      console.error(err);
      setError("Could not load admin data.");
    }
  };

  useEffect(() => {
    load();
  }, []);

  const clearMessages = () => {
    setMessage("");
    setError("");
  };

  /* ================= PRODUCT ================= */

  const saveProduct = async (e) => {
    e.preventDefault();

    clearMessages();

    if (!product.category) {
      setError("Please select a category.");
      return;
    }

    if (!product.imageUrl.trim()) {
      setError("Please enter a product image URL.");
      return;
    }

    try {
      setLoading(true);

      const data = {
        name: product.name,
        category: product.category,
        origin: product.origin,
        finish: product.finish,
        price: product.price,
        description: product.description,
        featured: product.featured,
        images: [product.imageUrl.trim()]
      };

      await api.post("/products", data, {
        headers: {
          ...headers(),
          "Content-Type": "application/json"
        }
      });

      setProduct(emptyProduct);

      setMessage("Product added successfully.");

      await load();
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Could not add product."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ================= CATEGORY ================= */

  const saveCategory = async (e) => {
    e.preventDefault();

    clearMessages();

    try {
      setLoading(true);

      await api.post("/categories", category, {
        headers: headers()
      });

      setCategory(emptyCategory);

      setMessage("Category added successfully.");

      await load();
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Could not add category."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE ================= */

  const remove = async (type, id) => {
    if (!confirm("Are you sure you want to delete this item?")) {
      return;
    }

    clearMessages();

    try {
      setLoading(true);

      await api.delete(`/${type}/${id}`, {
        headers: headers()
      });

      setMessage("Item deleted successfully.");

      await load();
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Could not delete item."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOGOUT ================= */

  const logout = () => {
    localStorage.removeItem("adminToken");
    location.href = "/admin";
  };

  const navigation = [
    {
      id: "products",
      label: "Products",
      count: products.length,
      icon: "◆"
    },
    {
      id: "categories",
      label: "Categories",
      count: categories.length,
      icon: "◇"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f1ec] text-[#1c1b18]">

      {/* ================= SIDEBAR ================= */}

      <aside
        className="
          fixed inset-y-0 left-0 z-50
          hidden w-[260px] flex-col
          bg-[#181816] text-white
          lg:flex
        "
      >

        <div className="px-7 pt-8">

          <div className="flex items-center gap-3">

            <div
              className="
                flex h-11 w-11 items-center justify-center
                overflow-hidden
                border border-white/20
                bg-white
              "
            >
              <img
                src={logo}
                alt="Shri Savai Bhaoj"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="font-serif text-lg">
                Shri Savai
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Bhaoj
              </p>
            </div>

          </div>

        </div>

        <div className="mt-12 px-4">

          <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
            Content management
          </p>

          <div className="space-y-1">

            {navigation.map((item) => (

              <button
                key={item.id}
                onClick={() => {
                  setTab(item.id);
                  clearMessages();
                }}
                className={`
                  group flex w-full items-center gap-3
                  rounded-lg px-3 py-3.5
                  text-left text-xs
                  transition
                  ${
                    tab === item.id
                      ? "bg-white/[0.08] text-white"
                      : "text-white/45 hover:bg-white/[0.04] hover:text-white"
                  }
                `}
              >

                <span
                  className={`
                    w-5 text-center text-[9px]
                    ${
                      tab === item.id
                        ? "text-[#b4a17c]"
                        : "text-white/30"
                    }
                  `}
                >
                  {item.icon}
                </span>

                <span className="flex-1">
                  {item.label}
                </span>

                <span
                  className="
                    rounded-full bg-white/[0.06]
                    px-2 py-0.5
                    text-[9px] text-white/40
                  "
                >
                  {item.count}
                </span>

              </button>

            ))}

          </div>

        </div>

        <div className="mt-auto px-5 pb-6">

          <div className="mb-4 border-t border-white/[0.08] pt-4">

            <div className="flex items-center gap-2 px-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[#879b78]" />

              <span className="text-[10px] text-white/35">
                Admin session active
              </span>

            </div>

          </div>

          <button
            onClick={logout}
            className="
              flex h-11 w-full items-center gap-3
              rounded-md border border-white/[0.08]
              px-3 text-xs text-white/45
              transition
              hover:border-white/20
              hover:text-white
            "
          >
            <span>↪</span>
            Sign out
          </button>

        </div>

      </aside>

      {/* ================= MOBILE NAV ================= */}

      <div
        className="
          sticky top-0 z-40
          border-b border-[#ddd9d0]
          bg-[#181816] text-white
          lg:hidden
        "
      >

        <div className="flex items-center justify-between px-5 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center overflow-hidden border border-white/20 bg-white">

              <img
                src={logo}
                alt="Logo"
                className="h-full w-full object-contain"
              />

            </div>

            <div>
              <p className="font-serif text-sm">
                Shri Savai Bhaoj
              </p>
            </div>

          </div>

          <button
            onClick={logout}
            className="
              text-[10px]
              uppercase
              tracking-wider
              text-white/50
            "
          >
            Sign out
          </button>

        </div>

        <div className="flex overflow-x-auto px-3 pb-3">

          {navigation.map((item) => (

            <button
              key={item.id}
              onClick={() => {
                setTab(item.id);
                clearMessages();
              }}
              className={`
                whitespace-nowrap
                rounded-md
                px-4 py-2
                text-[10px]
                ${
                  tab === item.id
                    ? "bg-white/10 text-white"
                    : "text-white/40"
                }
              `}
            >
              {item.label}
            </button>

          ))}

        </div>

      </div>

      {/* ================= MAIN ================= */}

      <main className="lg:ml-[260px]">

        <div className="mx-auto max-w-[1450px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">

          {/* HEADER */}

          <header className="mb-8 flex items-start justify-between">

            <div>

              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#96876d]">
                Administration
              </p>

              <h1 className="font-serif text-4xl font-normal capitalize tracking-tight sm:text-5xl">
                {tab}
              </h1>

              <p className="mt-2 max-w-lg text-xs text-[#858179]">
                Manage your natural stone catalogue
                and website content.
              </p>

            </div>

            <div
              className="
                hidden h-10 w-10
                items-center justify-center
                rounded-full bg-[#262621]
                text-sm text-white
                sm:flex
              "
            >
              A
            </div>

          </header>

          {/* STATS */}

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

            {[
              ["◆", products.length, "Products"],
              ["◇", categories.length, "Categories"]
            ].map(([icon, number, label]) => (

              <div
                key={label}
                className="
                  flex items-center gap-4
                  border border-[#ddd9d0]
                  bg-[#faf9f6]
                  px-5 py-4
                "
              >

                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    border border-[#d7d1c5]
                    text-[10px]
                    text-[#978a72]
                  "
                >
                  {icon}
                </div>

                <div>

                  <p className="font-serif text-2xl">
                    {number}
                  </p>

                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#918d84]">
                    {label}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* ALERTS */}

          {message && (
            <div
              className="
                mb-5 flex items-center gap-3
                border border-[#cbd8c4]
                bg-[#f3f7f0]
                px-4 py-3
                text-xs text-[#53624d]
              "
            >
              <span
                className="
                  flex h-5 w-5
                  items-center justify-center
                  rounded-full bg-[#dfe9d9]
                "
              >
                ✓
              </span>

              {message}
            </div>
          )}

          {error && (
            <div
              className="
                mb-5 flex items-center gap-3
                border border-[#dfc7c2]
                bg-[#faf1ef]
                px-4 py-3
                text-xs text-[#875048]
              "
            >
              <span
                className="
                  flex h-5 w-5
                  items-center justify-center
                  rounded-full bg-[#f0dcd8]
                "
              >
                !
              </span>

              {error}
            </div>
          )}

          {/* ================= PRODUCTS ================= */}

          {tab === "products" && (
            <>

              <section
                className="
                  mb-6
                  border border-[#ddd9d0]
                  bg-[#faf9f6]
                  p-5 sm:p-7
                "
              >

                <div className="mb-7 flex gap-4">

                  <span className="text-[9px] tracking-widest text-[#a3957b]">
                    01
                  </span>

                  <div>

                    <h2 className="font-serif text-xl">
                      Add new product
                    </h2>

                    <p className="mt-1 text-xs text-[#88847c]">
                      Add a natural stone product
                      to your catalogue.
                    </p>

                  </div>

                </div>

                <form onSubmit={saveProduct}>

                  <div className="grid gap-5 md:grid-cols-2">

                    {/* NAME */}

                    <div>

                      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-[#68645d]">
                        Product name
                      </label>

                      <input
                        required
                        value={product.name}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            name: e.target.value
                          })
                        }
                        placeholder="Rainforest Brown Marble"
                        className="
                          h-12 w-full
                          border border-[#d8d4cb]
                          bg-white px-4
                          text-xs outline-none
                          transition
                          placeholder:text-[#aaa69f]
                          focus:border-[#8e8066]
                          focus:ring-2
                          focus:ring-[#8e8066]/10
                        "
                      />

                    </div>

                    {/* CATEGORY */}

                    <div>

                      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-[#68645d]">
                        Category
                      </label>

                      <select
                        required
                        value={product.category}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            category: e.target.value
                          })
                        }
                        className="
                          h-12 w-full
                          border border-[#d8d4cb]
                          bg-white px-4
                          text-xs outline-none
                          focus:border-[#8e8066]
                          focus:ring-2
                          focus:ring-[#8e8066]/10
                        "
                      >

                        <option value="">
                          Select category
                        </option>

                        {categories.map((c) => (

                          <option
                            key={c._id}
                            value={c.name}
                          >
                            {c.name}
                          </option>

                        ))}

                      </select>

                    </div>

                    {/* ORIGIN */}

                    <div>

                      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-[#68645d]">
                        Origin
                      </label>

                      <input
                        value={product.origin}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            origin: e.target.value
                          })
                        }
                        placeholder="Rajasthan, India"
                        className="
                          h-12 w-full
                          border border-[#d8d4cb]
                          bg-white px-4
                          text-xs outline-none
                          placeholder:text-[#aaa69f]
                          focus:border-[#8e8066]
                          focus:ring-2
                          focus:ring-[#8e8066]/10
                        "
                      />

                    </div>

                    {/* FINISH */}

                    <div>

                      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-[#68645d]">
                        Finish
                      </label>

                      <input
                        value={product.finish}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            finish: e.target.value
                          })
                        }
                        placeholder="Polished"
                        className="
                          h-12 w-full
                          border border-[#d8d4cb]
                          bg-white px-4
                          text-xs outline-none
                          placeholder:text-[#aaa69f]
                          focus:border-[#8e8066]
                          focus:ring-2
                          focus:ring-[#8e8066]/10
                        "
                      />

                    </div>

                    {/* PRICE */}

                    <div>

                      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-[#68645d]">
                        Price
                      </label>

                      <input
                        value={product.price}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            price: e.target.value
                          })
                        }
                        placeholder="USD 32 / sq.m"
                        className="
                          h-12 w-full
                          border border-[#d8d4cb]
                          bg-white px-4
                          text-xs outline-none
                          placeholder:text-[#aaa69f]
                          focus:border-[#8e8066]
                          focus:ring-2
                          focus:ring-[#8e8066]/10
                        "
                      />

                    </div>

                    {/* IMAGE URL */}

                    <div>

                      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-[#68645d]">
                        Product image URL
                      </label>

                      <input
                        required
                        type="url"
                        value={product.imageUrl}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            imageUrl: e.target.value
                          })
                        }
                        placeholder="https://example.com/marble.jpg"
                        className="
                          h-12 w-full
                          border border-[#d8d4cb]
                          bg-white px-4
                          text-xs outline-none
                          placeholder:text-[#aaa69f]
                          focus:border-[#8e8066]
                          focus:ring-2
                          focus:ring-[#8e8066]/10
                        "
                      />

                    </div>

                  </div>

                  {/* IMAGE PREVIEW */}

                  {product.imageUrl && (
                    <div className="mt-5">

                      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-[#68645d]">
                        Image preview
                      </label>

                      <div className="h-48 w-full overflow-hidden border border-[#d8d4cb] bg-[#e4e0d7] sm:w-72">

                        <img
                          src={product.imageUrl}
                          alt="Preview"
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />

                      </div>

                    </div>
                  )}

                  {/* DESCRIPTION */}

                  <div className="mt-5">

                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-[#68645d]">
                      Description
                    </label>

                    <textarea
                      value={product.description}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          description: e.target.value
                        })
                      }
                      placeholder="Describe the stone, appearance, applications and key characteristics..."
                      className="
                        min-h-[125px]
                        w-full resize-y
                        border border-[#d8d4cb]
                        bg-white p-4
                        text-xs leading-6
                        outline-none
                        placeholder:text-[#aaa69f]
                        focus:border-[#8e8066]
                        focus:ring-2
                        focus:ring-[#8e8066]/10
                      "
                    />

                  </div>

                  {/* FEATURED */}

                  <div className="mt-5">

                    <label
                      className="
                        flex cursor-pointer
                        items-center gap-3
                        text-xs text-[#68645d]
                      "
                    >

                      <input
                        type="checkbox"
                        checked={product.featured}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            featured: e.target.checked
                          })
                        }
                        className="h-4 w-4 accent-[#1b1b18]"
                      />

                      <span>
                        Mark as featured product
                      </span>

                    </label>

                  </div>

                  {/* FOOTER */}

                  <div
                    className="
                      mt-5 flex
                      flex-col gap-5
                      border-t border-[#e5e1d9]
                      pt-5
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >

                    <p className="text-[9px] text-[#99958d]">
                      Use a direct image URL ending in .jpg, .jpeg, .png or .webp.
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        flex h-12
                        items-center
                        justify-center gap-6
                        bg-[#1b1b18]
                        px-6
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-white
                        transition
                        hover:bg-[#38372f]
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      "
                    >

                      {loading
                        ? "Saving..."
                        : "Add product"}

                      <span className="text-base text-[#b7a98d]">
                        →
                      </span>

                    </button>

                  </div>

                </form>

              </section>

              {/* PRODUCT LIST */}

              <section
                className="
                  overflow-hidden
                  border border-[#ddd9d0]
                  bg-[#faf9f6]
                "
              >

                <div
                  className="
                    flex items-end
                    justify-between
                    border-b border-[#e1ddd5]
                    p-5 sm:p-7
                  "
                >

                  <div>

                    <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#96876d]">
                      Catalogue
                    </p>

                    <h2 className="font-serif text-xl">
                      Products
                    </h2>

                  </div>

                  <span className="text-[9px] uppercase tracking-wider text-[#99958d]">
                    {products.length} items
                  </span>

                </div>

                {products.length === 0 ? (

                  <div className="px-5 py-16 text-center">

                    <div className="mb-4 text-[#a99c84]">
                      ◆
                    </div>

                    <h3 className="font-serif">
                      No products yet
                    </h3>

                    <p className="mt-1 text-[11px] text-[#99958d]">
                      Add your first stone product above.
                    </p>

                  </div>

                ) : (

                  <div>

                    {products.map((p) => (

                      <div
                        key={p._id}
                        className="
                          flex flex-col gap-4
                          border-b border-[#e7e3dc]
                          p-4 last:border-0
                          sm:flex-row sm:items-center
                        "
                      >

                        <div
                          className="
                            h-20 w-full
                            shrink-0 overflow-hidden
                            bg-[#e4e0d7]
                            sm:h-16 sm:w-20
                          "
                        >

                          {p.images?.[0] ? (

                            <img
                              src={imageUrl(p.images[0])}
                              alt={p.name}
                              className="
                                h-full w-full
                                object-cover
                              "
                            />

                          ) : (

                            <div
                              className="
                                flex h-full
                                items-center
                                justify-center
                                text-[#9e927b]
                              "
                            >
                              ◆
                            </div>

                          )}

                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex flex-wrap items-center gap-2">

                            <h3 className="font-serif text-sm">
                              {p.name}
                            </h3>

                            {p.featured && (

                              <span
                                className="
                                  border border-[#d6cbb8]
                                  px-2 py-1
                                  text-[7px]
                                  uppercase
                                  tracking-wider
                                  text-[#8d7e61]
                                "
                              >
                                Featured
                              </span>

                            )}

                          </div>

                          <div
                            className="
                              mt-2 flex
                              flex-wrap gap-2
                              text-[8px]
                              uppercase
                              tracking-wider
                              text-[#99958d]
                            "
                          >

                            <span>
                              {p.category}
                            </span>

                            {p.origin && (
                              <>
                                <span>•</span>
                                <span>{p.origin}</span>
                              </>
                            )}

                            {p.finish && (
                              <>
                                <span>•</span>
                                <span>{p.finish}</span>
                              </>
                            )}

                          </div>

                        </div>

                        <div className="text-xs text-[#756d5e]">
                          {p.price || "—"}
                        </div>

                        <button
                          onClick={() =>
                            remove("products", p._id)
                          }
                          className="
                            h-9
                            border border-[#dfdad1]
                            px-3
                            text-[9px]
                            uppercase
                            tracking-wider
                            text-[#9a716b]
                            transition
                            hover:border-[#b88880]
                            hover:bg-[#faf2f0]
                          "
                        >
                          Delete
                        </button>

                      </div>

                    ))}

                  </div>

                )}

              </section>

            </>
          )}

          {/* ================= CATEGORIES ================= */}

          {tab === "categories" && (
            <>

              <section
                className="
                  mb-6
                  border border-[#ddd9d0]
                  bg-[#faf9f6]
                  p-5 sm:p-7
                "
              >

                <div className="mb-7 flex gap-4">

                  <span className="text-[9px] text-[#a3957b]">
                    01
                  </span>

                  <div>

                    <h2 className="font-serif text-xl">
                      Add new category
                    </h2>

                    <p className="mt-1 text-xs text-[#88847c]">
                      Organise your stone collection into categories.
                    </p>

                  </div>

                </div>

                <form onSubmit={saveCategory}>

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-[#68645d]">
                        Category name
                      </label>

                      <input
                        required
                        value={category.name}
                        onChange={(e) =>
                          setCategory({
                            ...category,
                            name: e.target.value
                          })
                        }
                        placeholder="e.g. Marble"
                        className="
                          h-12 w-full
                          border border-[#d8d4cb]
                          bg-white px-4
                          text-xs outline-none
                          placeholder:text-[#aaa69f]
                          focus:border-[#8e8066]
                          focus:ring-2
                          focus:ring-[#8e8066]/10
                        "
                      />

                    </div>

                    <div>

                      <label className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-[#68645d]">
                        Description
                      </label>

                      <input
                        value={category.description}
                        onChange={(e) =>
                          setCategory({
                            ...category,
                            description: e.target.value
                          })
                        }
                        placeholder="Short category description"
                        className="
                          h-12 w-full
                          border border-[#d8d4cb]
                          bg-white px-4
                          text-xs outline-none
                          placeholder:text-[#aaa69f]
                          focus:border-[#8e8066]
                          focus:ring-2
                          focus:ring-[#8e8066]/10
                        "
                      />

                    </div>

                  </div>

                  <div
                    className="
                      mt-5 flex
                      justify-end
                      border-t border-[#e5e1d9]
                      pt-5
                    "
                  >

                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        flex h-12
                        items-center gap-6
                        bg-[#1b1b18]
                        px-6
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-white
                        transition
                        hover:bg-[#38372f]
                        disabled:opacity-50
                      "
                    >

                      {loading
                        ? "Saving..."
                        : "Add category"}

                      <span className="text-[#b7a98d]">
                        →
                      </span>

                    </button>

                  </div>

                </form>

              </section>

              <section
                className="
                  overflow-hidden
                  border border-[#ddd9d0]
                  bg-[#faf9f6]
                "
              >

                <div
                  className="
                    flex items-end
                    justify-between
                    border-b border-[#e1ddd5]
                    p-5 sm:p-7
                  "
                >

                  <div>

                    <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#96876d]">
                      Organisation
                    </p>

                    <h2 className="font-serif text-xl">
                      Categories
                    </h2>

                  </div>

                  <span className="text-[9px] uppercase tracking-wider text-[#99958d]">
                    {categories.length} items
                  </span>

                </div>

                {categories.length === 0 ? (

                  <div className="px-5 py-16 text-center">

                    <div className="mb-4 text-[#a99c84]">
                      ◇
                    </div>

                    <h3 className="font-serif">
                      No categories yet
                    </h3>

                    <p className="mt-1 text-[11px] text-[#99958d]">
                      Create a category above.
                    </p>

                  </div>

                ) : (

                  categories.map((c, index) => (

                    <div
                      key={c._id}
                      className="
                        flex items-center gap-4
                        border-b border-[#e7e3dc]
                        p-5 last:border-0
                      "
                    >

                      <span className="w-7 text-[9px] text-[#aaa59b]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">

                        <h3 className="font-serif text-sm">
                          {c.name}
                        </h3>

                        <p className="mt-1 truncate text-[10px] text-[#96928a]">
                          {c.description || "No description"}
                        </p>

                      </div>

                      <button
                        onClick={() =>
                          remove("categories", c._id)
                        }
                        className="
                          h-9
                          border border-[#dfdad1]
                          px-3
                          text-[9px]
                          uppercase
                          tracking-wider
                          text-[#9a716b]
                          transition
                          hover:border-[#b88880]
                          hover:bg-[#faf2f0]
                        "
                      >
                        Delete
                      </button>

                    </div>

                  ))

                )}

              </section>

            </>
          )}

        </div>

      </main>

    </div>
  );
}