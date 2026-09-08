import { useState } from "react";
import { api } from "../api";
import logo from "../IMG/logo.PNG";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const updateField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      await api.post("/enquiries", form);

      setStatus("success");

      setForm({
        name: "",
        company: "",
        country: "",
        phone: "",
        email: "",
        product: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen  text-[#111111]">

      {/* =====================================================
          CONTACT LAYOUT
      ====================================================== */}

      <div className="contact-luxury-grid">

        {/* ===================================================
            LEFT — CONTACT INFORMATION
        ==================================================== */}

        <aside className="contact-luxury-info">

          <div className="contact-info-top">

            <span className="contact-mini-label">
              EXPORT DESK
            </span>

            <h2>
              Let's move your
              <span> next shipment.</span>
            </h2>

          </div>


          {/* OFFICE */}

          <div className="contact-info-item">

            <span className="contact-info-number">
              01
            </span>

            <div>
              <small>
                REGISTERED OFFICE
              </small>

              <p>
                Shri Savai Bhaoj Marble & Granite
                <br />
                Industrial Area Phase 4
                <br />
                Kishangarh, Ajmer
                <br />
                Rajasthan, India
              </p>
            </div>

          </div>


          {/* PHONE */}

          <div className="contact-info-item">

            <span className="contact-info-number">
              02
            </span>

            <div>
              <small>
                SPEAK TO US
              </small>

              <p>
                +91 77339 90502
                <br />
                +91 98259 78589
                <br />
                +91 82905 33589
              </p>
            </div>

          </div>


          {/* EMAIL */}

          <div className="contact-info-item">

            <span className="contact-info-number">
              03
            </span>

            <div>
              <small>
                EMAIL
              </small>

              <p>
                INFO.SAVAIBHAOJMARBLE.COM
              </p>
            </div>

          </div>


          {/* EXPORT NOTE */}

          <div className="contact-export-note">

            <div className="contact-note-mark">
              <span />
              EXPORT READY
              <span />
            </div>

            <p>
              Specifications, packaging, Incoterms and
              documentation can be discussed according
              to your shipment requirements.
            </p>

          </div>

        </aside>


        {/* ===================================================
            RIGHT — BLACK FORM
        ==================================================== */}

        <section
          className="
            contact-form-luxury
            !bg-black
            !text-white
          "
        >

          {/* FORM HEADER */}

          <div
            className="
              contact-form-header
              !border-white/10
            "
          >

            <div>

              <span className="!text-[#b58a3b]">
                ENQUIRY FORM
              </span>

              <h2 className="!text-white">
                Request a quotation
              </h2>

            </div>


            {/* LOGO / SVB MARK */}

            <div
              className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-white/20
                bg-white
                p-2
                shadow-lg
              "
            >
              <img
                src={logo}
                alt="Shri Savai Bhaoj Marble"
                className="
                  h-full
                  w-full
                  object-contain
                "
              />
            </div>

          </div>


          {/* =================================================
              FORM
          ================================================== */}

          <form onSubmit={submit}>

            {/* =================================
                PERSONAL DETAILS
            ================================== */}

            <div className="form-section-title">

              <span className="!bg-white !text-black">
                01
              </span>

              <div>

                <strong className="!text-white">
                  Your details
                </strong>

                <small className="!text-white/50">
                  Tell us who we are speaking with
                </small>

              </div>

            </div>


            <div className="contact-form-grid">

              {/* NAME */}

              <label className="luxury-field">

                <span className="!text-white/75">
                  Full name <b className="!text-[#b58a3b]">*</b>
                </span>

                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                  placeholder="Your name"
                  className="
                    !border-white/20
                    !bg-white/[0.06]
                    !text-white
                    placeholder:!text-white/30
                    focus:!border-[#b58a3b]
                  "
                />

              </label>


              {/* COMPANY */}

              <label className="luxury-field">

                <span className="!text-white/75">
                  Company
                </span>

                <input
                  value={form.company}
                  onChange={(e) =>
                    updateField("company", e.target.value)
                  }
                  placeholder="Company name"
                  className="
                    !border-white/20
                    !bg-white/[0.06]
                    !text-white
                    placeholder:!text-white/30
                    focus:!border-[#b58a3b]
                  "
                />

              </label>


              {/* COUNTRY */}

              <label className="luxury-field">

                <span className="!text-white/75">
                  Country
                </span>

                <input
                  value={form.country}
                  onChange={(e) =>
                    updateField("country", e.target.value)
                  }
                  placeholder="Country / market"
                  className="
                    !border-white/20
                    !bg-white/[0.06]
                    !text-white
                    placeholder:!text-white/30
                    focus:!border-[#b58a3b]
                  "
                />

              </label>


              {/* PHONE */}

              <label className="luxury-field">

                <span className="!text-white/75">
                  Phone
                </span>

                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    updateField("phone", e.target.value)
                  }
                  placeholder="+91"
                  className="
                    !border-white/20
                    !bg-white/[0.06]
                    !text-white
                    placeholder:!text-white/30
                    focus:!border-[#b58a3b]
                  "
                />

              </label>


              {/* EMAIL */}

              <label className="luxury-field full">

                <span className="!text-white/75">
                  Business email{" "}
                  <b className="!text-[#b58a3b]">*</b>
                </span>

                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                  placeholder="you@company.com"
                  className="
                    !border-white/20
                    !bg-white/[0.06]
                    !text-white
                    placeholder:!text-white/30
                    focus:!border-[#b58a3b]
                  "
                />

              </label>

            </div>


            {/* =================================
                REQUIREMENTS
            ================================== */}

            <div
              className="
                form-section-title
                form-section-second
              "
            >

              <span className="!bg-white !text-black">
                02
              </span>

              <div>

                <strong className="!text-white">
                  Shipment requirements
                </strong>

                <small className="!text-white/50">
                  Help us understand what you need
                </small>

              </div>

            </div>


            <div className="contact-form-grid">

              {/* PRODUCT */}

              <label className="luxury-field full">

                <span className="!text-white/75">
                  Product / material{" "}
                  <b className="!text-[#b58a3b]">*</b>
                </span>

                <input
                  required
                  value={form.product}
                  onChange={(e) =>
                    updateField("product", e.target.value)
                  }
                  placeholder="Marble, Granite, Limestone, Gypsum..."
                  className="
                    !border-white/20
                    !bg-white/[0.06]
                    !text-white
                    placeholder:!text-white/30
                    focus:!border-[#b58a3b]
                  "
                />

              </label>


              {/* MESSAGE */}

              <label className="luxury-field full">

                <span className="!text-white/75">
                  Shipment details{" "}
                  <b className="!text-[#b58a3b]">*</b>
                </span>

                <textarea
                  required
                  value={form.message}
                  onChange={(e) =>
                    updateField("message", e.target.value)
                  }
                  placeholder="Quantity, dimensions, finish, destination port, packaging requirements..."
                  className="
                    !border-white/20
                    !bg-white/[0.06]
                    !text-white
                    placeholder:!text-white/30
                    focus:!border-[#b58a3b]
                  "
                />

              </label>

            </div>


            {/* =================================
                STATUS
            ================================== */}

            {status === "success" && (

              <div className="contact-status contact-status-success">

                <span>
                  ✓
                </span>

                <div>

                  <strong>
                    Enquiry received
                  </strong>

                  <p>
                    Thank you. Our export team will review
                    your requirements and get back to you.
                  </p>

                </div>

              </div>

            )}


            {status === "error" && (

              <div className="contact-status contact-status-error">

                <span>
                  !
                </span>

                <div>

                  <strong>
                    Unable to send enquiry
                  </strong>

                  <p>
                    Please try again or contact our team
                    directly.
                  </p>

                </div>

              </div>

            )}


            {/* =================================
                SUBMIT
            ================================== */}

            <div className="contact-submit-area">

              <p className="!text-white/45">
                <span className="!text-[#b58a3b]">
                  *
                </span>{" "}
                Required fields
              </p>


              <button
                className="
                  contact-submit
                  !border
                  !border-white
                  !bg-white
                  !text-black
                  transition-all
                  duration-300
                  hover:!border-[#b58a3b]
                  hover:!bg-[#b58a3b]
                  hover:!text-white
                "
                type="submit"
                disabled={sending}
              >

                <span>
                  {sending
                    ? "Sending enquiry..."
                    : "Send enquiry"}
                </span>

                {!sending && (
                  <strong>
                    →
                  </strong>
                )}

              </button>

            </div>

          </form>

        </section>

      </div>

    </main>
  );
}