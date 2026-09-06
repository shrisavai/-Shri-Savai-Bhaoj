import { useState } from "react";
import { api } from "../api";
import SectionIntro from "../components/SectionIntro";

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
    <div className="page contact-page">

      {/* =========================================
          INTRO
      ========================================== */}

      <SectionIntro
        eyebrow="GET IN TOUCH"
        title="Talk to us about your next shipment"
        text="Tell us the product, quantity and destination port. Our export team will respond with specifications, availability and a quotation."
      />

      {/* =========================================
          CONTACT LAYOUT
      ========================================== */}

      <div className="contact-luxury-grid">

        {/* =======================================
            LEFT — CONTACT INFORMATION
        ======================================== */}

        <aside className="contact-luxury-info">

          <div className="contact-info-top">

            <span className="contact-mini-label">
              EXPORT DESK
            </span>

            <h2>
              Let's move your
              <em> next shipment.</em>
            </h2>

            <p>
              From Rajasthan to international markets, our team
              coordinates sourcing, specifications and export
              requirements for every enquiry.
            </p>

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
                Info.shekharexim@gmail.com
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


        {/* =======================================
            RIGHT — FORM
        ======================================== */}

        <section className="contact-form-luxury">

          <div className="contact-form-header">

            <div>

              <span>
                ENQUIRY FORM
              </span>

              <h2>
                Request a quotation
              </h2>

            </div>

            <div className="contact-form-mark">
              SVB
            </div>

          </div>


          <form onSubmit={submit}>

            {/* =================================
                PERSONAL DETAILS
            ================================== */}

            <div className="form-section-title">

              <span>
                01
              </span>

              <div>
                <strong>
                  Your details
                </strong>

                <small>
                  Tell us who we are speaking with
                </small>
              </div>

            </div>


            <div className="contact-form-grid">

              {/* NAME */}

              <label className="luxury-field">

                <span>
                  Full name <b>*</b>
                </span>

                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                  placeholder="Your name"
                />

              </label>


              {/* COMPANY */}

              <label className="luxury-field">

                <span>
                  Company
                </span>

                <input
                  value={form.company}
                  onChange={(e) =>
                    updateField("company", e.target.value)
                  }
                  placeholder="Company name"
                />

              </label>


              {/* COUNTRY */}

              <label className="luxury-field">

                <span>
                  Country
                </span>

                <input
                  value={form.country}
                  onChange={(e) =>
                    updateField("country", e.target.value)
                  }
                  placeholder="Country / market"
                />

              </label>


              {/* PHONE */}

              <label className="luxury-field">

                <span>
                  Phone
                </span>

                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    updateField("phone", e.target.value)
                  }
                  placeholder="+91"
                />

              </label>


              {/* EMAIL */}

              <label className="luxury-field full">

                <span>
                  Business email <b>*</b>
                </span>

                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                  placeholder="you@company.com"
                />

              </label>

            </div>


            {/* =================================
                REQUIREMENTS
            ================================== */}

            <div className="form-section-title form-section-second">

              <span>
                02
              </span>

              <div>
                <strong>
                  Shipment requirements
                </strong>

                <small>
                  Help us understand what you need
                </small>
              </div>

            </div>


            <div className="contact-form-grid">

              {/* PRODUCT */}

              <label className="luxury-field full">

                <span>
                  Product / material <b>*</b>
                </span>

                <input
                  required
                  value={form.product}
                  onChange={(e) =>
                    updateField("product", e.target.value)
                  }
                  placeholder="Marble, Granite, Limestone, Gypsum..."
                />

              </label>


              {/* MESSAGE */}

              <label className="luxury-field full">

                <span>
                  Shipment details <b>*</b>
                </span>

                <textarea
                  required
                  value={form.message}
                  onChange={(e) =>
                    updateField("message", e.target.value)
                  }
                  placeholder="Quantity, dimensions, finish, destination port, packaging requirements..."
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

              <p>
                <span>*</span>
                Required fields
              </p>

              <button
                className="contact-submit"
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

    </div>
  );
}