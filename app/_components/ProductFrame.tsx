"use client";

import { useRef, useState } from "react";

type ProductFrameProps = {
  compact?: boolean;
  interactive?: boolean;
};

export function ProductFrame({ compact = false, interactive = true }: ProductFrameProps) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const startFilm = async () => {
    if (!video.current) return;
    setPlaying(true);
    window.dispatchEvent(new CustomEvent("horalix:track", { detail: { event: "video_play" } }));
    try {
      await video.current.play();
    } catch {
      setPlaying(false);
    }
  };

  return (
    <figure className={compact ? "product-frame compact" : "product-frame"}>
      <div className="product-topbar">
        <div className="product-word"><i /> HORALIX / ECHO WORKFLOW</div>
        <div className="study-state"><span /> Illustrative sequence</div>
      </div>
      <div className="product-media">
        <video
          ref={video}
          controls={interactive && playing}
          onEnded={() => setPlaying(false)}
          playsInline
          poster="/media/echo-contour-poster.webp"
          preload="none"
          width={1280}
          height={720}
        >
          <source src="/media/echo-contour.mp4" type="video/mp4" />
          <track default kind="captions" src="/media/echo-contour-captions.vtt" srcLang="en" label="English" />
        </video>
        {interactive && !playing && (
          <button className="film-trigger" type="button" onClick={startFilm} aria-label="Play the 10-second Horalix echo contour sequence">
            <span className="film-play" aria-hidden="true">▶</span>
            {/* claim-audit: allow — media duration, not product performance */}<span><b>See the contour sequence</b><small>10 seconds · silent</small></span>
          </button>
        )}
        <div className="media-corner media-corner-top" aria-hidden="true" />
        <div className="media-corner media-corner-bottom" aria-hidden="true" />
      </div>
      <div className="product-flow" aria-label="Horalix workflow">
        <span><b>01</b>DICOM study</span><i aria-hidden="true">→</i>
        <span><b>02</b>AI-assisted preparation</span><i aria-hidden="true">→</i>
        <span><b>03</b>Clinician review</span>
      </div>
      <figcaption>Synthetic workflow visualization · No patient data · Not for diagnostic use</figcaption>
    </figure>
  );
}
