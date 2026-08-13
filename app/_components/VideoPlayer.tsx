"use client";

import { useState } from "react";
import { ProductFrame } from "./ProductFrame";

export function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  if (playing) return <div className="video-shell"><iframe allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen src="https://www.youtube-nocookie.com/embed/O9CJtPqVROc?autoplay=1&rel=0" title="Horalix product tour" /></div>;
  return <button className="video-poster" data-track="video_play" onClick={() => { setPlaying(true); window.dispatchEvent(new CustomEvent("horalix:track", { detail: { event: "video_play" } })); }}><ProductFrame compact /><span className="play-button">▶</span><span className="watch-label">Watch the 2:16 product tour</span></button>;
}
