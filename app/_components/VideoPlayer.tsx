"use client";

import { useState } from "react";
import Image from "next/image";

export function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  if (playing) {
    return (
      <div className="video-shell">
        <iframe
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          src="https://www.youtube-nocookie.com/embed/O9CJtPqVROc?autoplay=1&rel=0"
          title="Horalix product tour"
        />
      </div>
    );
  }

  return (
    <button
      className="video-poster"
      data-track="video_play"
      onClick={() => setPlaying(true)}
      aria-label="Watch the full Horalix product tour"
    >
      <span className="product-frame compact video-tour-frame">
        <span className="product-topbar">
          <span className="product-word"><i /> HORALIX / PRODUCT TOUR</span>
          <span className="study-state"><span /> Loads after selection</span>
        </span>
        <span className="product-media">
          <Image src="/media/echo-contour-poster.webp" alt="" fill sizes="(max-width: 1024px) 100vw, 1200px" />
        </span>
        <span className="product-flow">
          <span><b>01</b>DICOM study</span><i aria-hidden="true">→</i>
          <span><b>02</b>AI-assisted preparation</span><i aria-hidden="true">→</i>
          <span><b>03</b>Clinician review</span>
        </span>
      </span>
      <span className="play-button" aria-hidden="true">▶</span>
      <span className="watch-label">Watch the 2:16 product tour</span>
    </button>
  );
}
