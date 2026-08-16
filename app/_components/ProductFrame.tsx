type ProductFrameProps = { compact?: boolean };

export function ProductFrame({ compact = false }: ProductFrameProps) {
  return (
    <figure className={compact ? "product-frame compact" : "product-frame"}>
      <div className="product-topbar">
        <div className="product-word"><i /> HORALIX / ECHO WORKFLOW</div>
        <div className="study-state"><span /> Illustrative sequence</div>
      </div>
      <div className="product-media brand-film-media">
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          poster="/media/horalix-brand-film-poster.webp"
          // The poster is preloaded at high priority and carries the first paint; the video
          // itself must not compete with LCP, so only its metadata is fetched eagerly.
          preload="metadata"
          width={1280}
          height={720}
          aria-label="Illustrative particle sequence of a human heart"
          tabIndex={-1}
        >
          <source src="/media/horalix-brand-film.mp4" type="video/mp4" />
        </video>
        <div className="media-corner media-corner-top" aria-hidden="true" />
        <div className="media-corner media-corner-bottom" aria-hidden="true" />
        <div className="scan-line" aria-hidden="true" />
      </div>
      <div className="product-flow" aria-label="Horalix workflow">
        <span><b>01</b>DICOM study</span><i aria-hidden="true">→</i>
        <span><b>02</b>AI-assisted preparation</span><i aria-hidden="true">→</i>
        <span><b>03</b>Clinician review</span>
      </div>
      <figcaption>Illustrative sequence · Synthetic visualization · No patient data · Not for diagnostic use</figcaption>
    </figure>
  );
}
