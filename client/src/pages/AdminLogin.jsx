import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../api";
import img from "../IMG/img1.jpeg";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const submit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", data.token);

      const destination =
        location.state?.from?.pathname || "/admin/dashboard";

      navigate(destination, { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f5f3ef] text-[#171717]">
      <div className="grid min-h-screen w-full lg:grid-cols-2">

        {/* =====================================================
            LEFT — BRAND / IMAGE PANEL
        ====================================================== */}

        <section className="hidden min-h-screen p-8 lg:flex xl:p-10">

          {/* =================================================
              IMAGE CONTAINER
              Image + text are BOTH contained here
          ================================================== */}

          <div
            className="
              relative
              h-full
              min-h-0
              w-full
              overflow-hidden
              rounded-[2rem]
            "
          >

            {/* Background Image */}
            <img
              src={img}
              alt="Natural stone"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/20
                via-transparent
                to-black/70
              "
            />

            {/* =================================================
                DECORATIVE INNER BORDER
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-5
                rounded-[1.5rem]
                border
                border-white/15
                sm:inset-7
                sm:rounded-[1.75rem]
              "
            />

            {/* =================================================
                CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                h-full
                min-h-[calc(100vh-5rem)]
                w-full
                flex-col
                justify-between
                p-10
                sm:p-12
                xl:p-16
              "
            >

              {/* =================================================
                  TOP CONTENT
              ================================================== */}

              <div>

                {/* Rajasthan */}
                <div className="flex items-center gap-3">

                  <span className="h-px w-10 bg-[#b6a48d]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#d6cabb]
                      sm:text-xs
                    "
                  >
                    RAJASTHAN
                  </span>

                </div>


                {/* Main Heading */}
                <h2
                  className="
                    mt-5
                    max-w-lg
                    text-3xl
                    font-light
                    leading-[1.05]
                    tracking-[-0.035em]
                    text-white
                    sm:text-4xl
                    xl:text-5xl
                  "
                >
                  Natural stone,

                  <span
                    className="
                      block
                      font-serif
                      italic
                      text-[#c7b59d]
                    "
                  >
                    delivered globally.
                  </span>
                </h2>

              </div>


              {/* =================================================
                  BOTTOM CONTENT
              ================================================== */}

              <div className="max-w-md">

                <div className="mb-4 h-px w-12 bg-white/20" />

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-white/60
                    sm:text-[10px]
                  "
                >
                  ADMINISTRATION PORTAL
                </p>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-white/65
                    sm:leading-7
                  "
                >
                  Manage products, enquiries and business operations
                  from one secure workspace.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            RIGHT — LOGIN
        ====================================================== */}

        <section
          className="
            flex
            min-h-screen
            w-full
            items-center
            justify-center
            overflow-y-auto
            overflow-x-hidden
            px-4
            py-8
            sm:px-6
            sm:py-10
            lg:px-10
            xl:px-16
          "
        >

          <div className="w-full max-w-[440px]">

            {/* =================================================
                MOBILE BRAND
            ================================================== */}

            <div className="mb-8 lg:hidden">

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-[#8b7355]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#76634d]
                  "
                >
                  RAJASTHAN
                </span>

              </div>

              <h2
                className="
                  mt-3
                  text-2xl
                  font-light
                  leading-tight
                  tracking-[-0.025em]
                "
              >
                Natural stone,

                <span
                  className="
                    font-serif
                    italic
                    text-[#806d56]
                  "
                >
                  {" "}globally supplied.
                </span>
              </h2>

            </div>


            {/* =================================================
                LOGIN CARD
            ================================================== */}

            <div
              className="
                w-full
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#ded9d1]
                bg-white
                p-6
                shadow-[0_25px_70px_rgba(17,17,17,0.08)]
                sm:rounded-[2rem]
                sm:p-9
              "
            >

              {/* =================================================
                  HEADER
              ================================================== */}

              <div className="mb-8">

                <div className="mb-5 flex items-center gap-3">

                  <span className="h-px w-9 bg-[#8b7355]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-[#76634d]
                    "
                  >
                    PRIVATE AREA
                  </span>

                </div>

                <h1
                  className="
                    text-3xl
                    font-light
                    tracking-[-0.04em]
                    text-[#111111]
                    sm:text-4xl
                  "
                >
                  Welcome back.
                </h1>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-[#77716a]
                  "
                >
                  Sign in to access your administration dashboard.
                </p>

              </div>


              {/* =================================================
                  FORM
              ================================================== */}

              <form onSubmit={submit} className="space-y-5">

                {/* =================================================
                    EMAIL
                ================================================== */}

                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#5f5a54]
                    "
                  >
                    Email address
                  </label>

                  <div className="relative">

                    <span
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-sm
                        text-[#9b948b]
                      "
                    >
                      @
                    </span>

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      placeholder="admin@example.com"
                      className="
                        h-12
                        w-full
                        min-w-0
                        rounded-xl
                        border
                        border-[#ddd8d0]
                        bg-[#faf9f7]
                        pl-11
                        pr-4
                        text-sm
                        text-[#171717]
                        outline-none
                        transition-all
                        placeholder:text-[#aaa49c]
                        focus:border-[#806d56]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#806d56]/10
                      "
                    />

                  </div>

                </div>


                {/* =================================================
                    PASSWORD
                ================================================== */}

                <div>

                  <label
                    htmlFor="password"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#5f5a54]
                    "
                  >
                    Password
                  </label>

                  <div className="relative">

                    <span
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#9b948b]
                      "
                    >
                      •
                    </span>

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="
                        h-12
                        w-full
                        min-w-0
                        rounded-xl
                        border
                        border-[#ddd8d0]
                        bg-[#faf9f7]
                        pl-11
                        pr-16
                        text-sm
                        text-[#171717]
                        outline-none
                        transition-all
                        placeholder:text-[#aaa49c]
                        focus:border-[#806d56]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#806d56]/10
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        rounded-lg
                        px-2
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#766f67]
                        transition-colors
                        hover:bg-[#eeeae4]
                        hover:text-[#111111]
                      "
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>

                  </div>

                </div>


                {/* =================================================
                    ERROR
                ================================================== */}

                {error && (
                  <div
                    className="
                      overflow-hidden
                      rounded-xl
                      border
                      border-red-200
                      bg-red-50
                      px-4
                      py-3
                    "
                  >

                    <div className="flex items-start gap-3">

                      <span
                        className="
                          mt-0.5
                          shrink-0
                          text-sm
                          font-bold
                          text-red-500
                        "
                      >
                        !
                      </span>

                      <p
                        className="
                          min-w-0
                          break-words
                          text-sm
                          leading-5
                          text-red-700
                        "
                      >
                        {error}
                      </p>

                    </div>

                  </div>
                )}


                {/* =================================================
                    SIGN IN BUTTON
                ================================================== */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    mt-2
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#111111]
                    px-6
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#292929]
                    hover:shadow-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#806d56]
                    focus:ring-offset-2
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    disabled:hover:translate-y-0
                  "
                >

                  {loading ? (
                    <>
                      <span
                        className="
                          h-4
                          w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                        "
                      />

                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in

                      <span
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </>
                  )}

                </button>

              </form>


              {/* =================================================
                  SECURITY NOTE
              ================================================== */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-3
                  border-t
                  border-[#ebe7e1]
                  pt-5
                "
              >

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f2eee8]
                    text-xs
                    text-[#806d56]
                  "
                >
                  ✓
                </div>

                <p
                  className="
                    text-[11px]
                    leading-5
                    text-[#8a847c]
                  "
                >
                  Secure administration access.
                  <br />
                  Authorized users only.
                </p>

              </div>

            </div>


            {/* =================================================
                FOOTER
            ================================================== */}

            <p
              className="
                mt-5
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#aaa39a]
              "
            >
              Natural Stone & Industrial Minerals
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}