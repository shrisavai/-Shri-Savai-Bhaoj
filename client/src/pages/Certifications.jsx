import { useEffect, useState } from "react";
import { api, imageUrl } from "../api";
import SectionIntro from "../components/SectionIntro";

export default function Certifications() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api.get("/certifications").then((r) => {
      setItems(r.data);
    });
  }, []);

  // Close document
  const closeDocument = () => {
    setSelected(null);
  };

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeDocument();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="page certifications-page">

      {/* =========================
          PAGE INTRO
      ========================== */}

      <SectionIntro
        eyebrow="TRUST & COMPLIANCE"
        title="Certifications"
        text="Documentation held for export, quality and manufacturing compliance — copies available on request for tender submissions."
      />

      {/* =========================
          CERTIFICATION GRID
      ========================== */}

      <div className="cert-grid-luxury">

        {items.map((c, index) => (
          <article
            className="cert-card-luxury"
            key={c._id}
          >

            {/* TOP BAR */}

            <div className="cert-card-top">

              <span className="cert-number">
                0{index + 1}
              </span>

              <span className="cert-status">
                VERIFIED DOCUMENT
              </span>

            </div>

            {/* =========================
                DOCUMENT AREA
            ========================== */}

            <div className="certificate-frame">

              <div
                className="certificate-paper"
                onClick={() => c.image && setSelected(c)}
                role={c.image ? "button" : undefined}
                tabIndex={c.image ? 0 : undefined}
                onKeyDown={(e) => {
                  if (c.image && (e.key === "Enter" || e.key === " ")) {
                    setSelected(c);
                  }
                }}
              >

                {c.image ? (
                  <>
                    <img
                      src={imageUrl(c.image)}
                      alt={`${c.name} certificate`}
                      className="certificate-image"
                    />

                    <div className="certificate-image-shade" />

                    {/* VIEW DOCUMENT */}

                    <div className="certificate-zoom">
                      <span>VIEW DOCUMENT</span>
                      <strong>⌕</strong>
                    </div>
                  </>
                ) : (
                  <div className="certificate-placeholder">

                    <div className="placeholder-inner">

                      <span className="placeholder-small">
                        CERTIFICATE
                      </span>

                      <div className="placeholder-title">
                        {c.name}
                      </div>

                      <div className="placeholder-line" />

                      <span className="placeholder-subtitle">
                        DOCUMENT AVAILABLE ON REQUEST
                      </span>

                    </div>

                  </div>
                )}

              </div>

            </div>

            {/* =========================
                CONTENT
            ========================== */}

            <div className="cert-card-content">

              <span className="cert-category">
                QUALITY & COMPLIANCE
              </span>

              <h3>
                {c.name}
              </h3>

              {/* ISSUER */}

              <div className="cert-issuer">

                <span className="issuer-line" />

                <div>
                  <small>ISSUED BY</small>

                  <strong>
                    {c.issuer || "Authorized Authority"}
                  </strong>
                </div>

              </div>

              {/* DESCRIPTION */}

              <p className="cert-description">
                {c.description ||
                  "Certification supporting quality, compliance and international export requirements."}
              </p>

              {/* REQUEST */}

              <a
                href={`/contact?certificate=${encodeURIComponent(
                  c.name
                )}`}
                className="request-certificate"
              >

                <span>
                  REQUEST DOCUMENTATION
                </span>

                <span className="request-arrow">
                  →
                </span>

              </a>

            </div>

          </article>
        ))}

      </div>

      {/* =========================
          BOTTOM CTA
      ========================== */}

      <section className="certification-bottom">

        <div className="cert-bottom-mark">
          <span />
          DOCUMENTATION
          <span />
        </div>

        <h2>
          Need a certificate
          <em> for your shipment?</em>
        </h2>

        <p>
          Contact our export team for certificate copies,
          compliance documentation and tender requirements.
        </p>

        <a
          href="/contact"
          className="cert-bottom-button"
        >
          <span>Request documentation</span>
          <strong>→</strong>
        </a>

      </section>

      {/* =================================================
          DOCUMENT VIEWER / LIGHTBOX
      ================================================= */}

      <div
        className={`certificate-viewer ${
          selected ? "certificate-viewer-active" : ""
        }`}
        onClick={closeDocument}
      >

        <div
          className="certificate-viewer-content"
          onClick={(e) => e.stopPropagation()}
        >

          {/* CLOSE */}

          <button
            className="certificate-viewer-close"
            onClick={closeDocument}
            aria-label="Close document"
          >
            ×
          </button>

          {/* DOCUMENT HEADER */}

          <div className="certificate-viewer-header">

            <div>
              <span>
                OFFICIAL DOCUMENT
              </span>

              <h2>
                {selected?.name}
              </h2>

              {selected?.issuer && (
                <p>
                  Issued by {selected.issuer}
                </p>
              )}
            </div>

          </div>

          {/* DOCUMENT */}

          {selected?.image && (
            <div className="certificate-viewer-paper">

              <img
                src={imageUrl(selected.image)}
                alt={`${selected.name} certificate full view`}
              />

            </div>
          )}

          {/* FOOTER */}

          <div className="certificate-viewer-footer">

            <span>
              Click outside or press ESC to close
            </span>

            <a
              href={`/contact?certificate=${encodeURIComponent(
                selected?.name || ""
              )}`}
              className="viewer-request-button"
            >
              Request a copy →
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}