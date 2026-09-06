import { useEffect, useState } from "react";
import SectionIntro from "../components/SectionIntro";

import GSTCertificate from "../PDF/GSTCertificate.pdf";
import ImporterExporterCode from "../PDF/ImporterExporterCode.pdf";
import UdyamRegistrationCertificate from "../PDF/UdyamRegistrationCertificate.pdf";

export default function Certifications() {
  const [selected, setSelected] = useState(null);

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
     CLOSE VIEWER
  ========================================================= */

  const closeDocument = () => {
    setSelected(null);
  };

  /* =========================================================
     ESC KEY
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeDocument();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =========================================================
     LOCK BODY SCROLL
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
    <div className="min-h-screen bg-[#f5f2eb] text-[#171717]">

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative overflow-hidden">

        {/* Decorative background */}

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#b08d57]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">

          <SectionIntro
            eyebrow="TRUST & COMPLIANCE"
            title="Certifications"
            text="Documentation held for export, quality and manufacturing compliance — copies available on request for tender submissions."
          />

        </div>

      </section>

      {/* =====================================================
          CERTIFICATE GRID
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="group relative overflow-hidden rounded-sm border border-[#171717]/10 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.13)]"
            >

              {/* =================================================
                  CARD TOP
              ================================================== */}

              <div className="relative flex items-center justify-between border-b border-[#171717]/10 bg-[#faf9f6] px-6 py-4">

                <div className="flex items-center gap-3">

                  <span className="font-serif text-lg text-[#9a7948]">
                    {certificate.number}
                  </span>

                  <span className="h-4 w-px bg-[#171717]/15" />

                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#171717]/50">
                    CERTIFICATION
                  </span>

                </div>

                <span className="flex items-center gap-2 rounded-full border border-green-700/20 bg-green-50 px-3 py-1.5 text-[8px] font-bold tracking-[0.12em] text-green-700">

                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />

                  VERIFIED

                </span>

              </div>

              {/* =================================================
                  PDF PREVIEW
              ================================================== */}

              <div
                className="group/preview relative h-[440px] cursor-pointer overflow-hidden bg-[#dedbd4]"
                onClick={() => setSelected(certificate)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelected(certificate);
                  }
                }}
                aria-label={`View ${certificate.name}`}
              >

                {/* PDF */}

                <iframe
                  src={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=0`}
                  title={`${certificate.name} preview`}
                  className="pointer-events-none absolute inset-0 h-full w-full border-0 bg-white"
                />

                {/* Dark hover overlay */}

                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover/preview:bg-black/35" />

                {/* Center hover button */}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover/preview:opacity-100">

                  <div className="flex items-center gap-3 rounded-sm bg-white px-7 py-4 shadow-2xl">

                    <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#171717]">
                      VIEW CERTIFICATE
                    </span>

                    <span className="text-xl leading-none text-[#9a7948]">
                      ↗
                    </span>

                  </div>

                </div>

                {/* Bottom preview label */}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">

                  <span className="rounded-sm bg-black/75 px-3 py-2 text-[8px] font-bold tracking-[0.16em] text-white backdrop-blur-sm">
                    OFFICIAL DOCUMENT
                  </span>

                  <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#171717] shadow-lg">
                    ↗
                  </span>

                </div>

              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <div className="p-7">

                {/* Category */}

                <div className="flex items-center gap-3">

                  <span className="h-px w-7 bg-[#9a7948]" />

                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#9a7948]">
                    QUALITY & COMPLIANCE
                  </span>

                </div>

                {/* Title */}

                <h3 className="mt-4 font-serif text-[26px] leading-[1.15] text-[#171717]">
                  {certificate.name}
                </h3>

                {/* Issuer */}

                <div className="mt-6 rounded-sm border border-[#171717]/10 bg-[#faf9f6] p-4">

                  <span className="block text-[8px] font-bold tracking-[0.2em] text-[#171717]/40">
                    ISSUED BY
                  </span>

                  <span className="mt-1 block text-sm font-semibold text-[#171717]">
                    {certificate.issuer}
                  </span>

                </div>

                {/* Description */}

                <p className="mt-5 text-sm leading-7 text-[#171717]/55">
                  {certificate.description}
                </p>

                {/* Buttons */}

                <div className="mt-7 flex flex-col gap-3">

                  {/* View button */}

                  <button
                    type="button"
                    onClick={() => setSelected(certificate)}
                    className="flex w-full items-center justify-between rounded-sm bg-[#171717] px-5 py-4 text-left text-white transition-all duration-300 hover:bg-[#9a7948]"
                  >

                    <span className="text-[10px] font-bold tracking-[0.16em] text-white">
                      VIEW CERTIFICATE
                    </span>

                    <span className="text-lg font-normal text-white">
                      ↗
                    </span>

                  </button>

                  {/* Request button */}

                  <a
                    href={`/contact?certificate=${encodeURIComponent(
                      certificate.name
                    )}`}
                    className="flex w-full items-center justify-between rounded-sm border-2 border-[#171717] bg-white px-5 py-3.5 text-left no-underline transition-all duration-300 hover:bg-[#f5f2eb]"
                  >

                    <span className="text-[10px] font-bold tracking-[0.13em] text-[#171717]">
                      REQUEST DOCUMENTATION
                    </span>

                    <span className="text-lg text-[#9a7948]">
                      →
                    </span>

                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-[#171717]/10 bg-[#1b1b19]">

        {/* Decorative circles */}

        <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-[#b08d57]/20" />

        <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-[#b08d57]/20" />

        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">

          {/* Label */}

          <div className="mb-8 flex items-center justify-center gap-4">

            <span className="h-px w-12 bg-[#b08d57]/50" />

            <span className="text-[9px] font-bold tracking-[0.3em] text-[#c5a46d]">
              DOCUMENTATION
            </span>

            <span className="h-px w-12 bg-[#b08d57]/50" />

          </div>

          {/* Heading */}

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">

            Need a certificate

            <em className="mt-1 block font-normal text-[#c5a46d]">
              for your shipment?
            </em>

          </h2>

          {/* Text */}

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Contact our export team for certificate copies,
            compliance documentation and tender requirements.
          </p>

          {/* CTA */}

          <a
            href="/contact"
            className="group mt-9 inline-flex items-center gap-8 rounded-sm bg-[#b08d57] px-8 py-4 no-underline shadow-lg transition-all duration-300 hover:bg-[#c19c63] hover:shadow-xl"
          >

            <span className="text-[10px] font-extrabold tracking-[0.18em] text-white">
              REQUEST DOCUMENTATION
            </span>

            <span className="text-xl text-white transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </a>

        </div>

      </section>

      {/* =====================================================
          PDF LIGHTBOX
      ===================================================== */}

      {selected && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 p-2 backdrop-blur-md sm:p-5 lg:p-8"
          onClick={closeDocument}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} viewer`}
        >

          <div
            className="flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-sm bg-[#f5f2eb] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* =================================================
                VIEWER HEADER
            ================================================== */}

            <div className="flex shrink-0 items-center justify-between border-b border-black/10 bg-white px-5 py-4 sm:px-7">

              <div className="min-w-0 pr-5">

                <div className="flex items-center gap-3">

                  <span className="h-2 w-2 rounded-full bg-green-600" />

                  <span className="text-[8px] font-bold tracking-[0.25em] text-black/40">
                    OFFICIAL DOCUMENT
                  </span>

                </div>

                <h2 className="mt-1 truncate font-serif text-xl text-black sm:text-2xl">
                  {selected.name}
                </h2>

                <p className="mt-1 text-xs text-black/45">
                  Issued by {selected.issuer}
                </p>

              </div>

              {/* Close */}

              <button
                type="button"
                onClick={closeDocument}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border-2 border-black bg-white text-2xl leading-none text-black transition-all duration-300 hover:bg-black hover:text-white"
                aria-label="Close document"
              >
                ×
              </button>

            </div>

            {/* =================================================
                PDF
            ================================================== */}

            <div className="min-h-0 flex-1 bg-[#cbc7be] p-2 sm:p-4">

              <iframe
                src={`${selected.file}#toolbar=1&navpanes=0`}
                title={`${selected.name} full certificate`}
                className="h-full w-full border-0 bg-white shadow-xl"
              />

            </div>

            {/* =================================================
                VIEWER FOOTER
            ================================================== */}

            <div className="flex shrink-0 flex-col gap-4 border-t border-black/10 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">

              <div>

                <span className="block text-[9px] font-medium tracking-[0.1em] text-black/40">
                  CERTIFICATE DOCUMENT
                </span>

                <span className="mt-1 block text-xs text-black/55">
                  Open the PDF in a new tab for full browser controls.
                </span>

              </div>

              <div className="flex flex-wrap gap-3">

                {/* Open PDF */}

                <a
                  href={selected.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm border-2 border-[#171717] bg-white px-6 py-3.5 no-underline transition-all duration-300 hover:bg-[#171717]"
                >
                  <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#171717] hover:text-white">
                    OPEN PDF ↗
                  </span>
                </a>

                {/* Request */}

                <a
                  href={`/contact?certificate=${encodeURIComponent(
                    selected.name
                  )}`}
                  className="inline-flex items-center justify-center rounded-sm bg-[#171717] px-6 py-3.5 no-underline transition-all duration-300 hover:bg-[#9a7948]"
                >
                  <span className="text-[10px] font-extrabold tracking-[0.14em] text-white">
                    REQUEST A COPY →
                  </span>
                </a>

                {/* Close */}

                <button
                  type="button"
                  onClick={closeDocument}
                  className="inline-flex items-center justify-center rounded-sm border-2 border-[#171717]/20 bg-[#f5f2eb] px-6 py-3.5 transition-all duration-300 hover:border-[#171717] hover:bg-[#171717]"
                >
                  <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#171717]">
                    CLOSE
                  </span>
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}