"use client";

import { useEffect, useRef } from "react";

export function CursorEcho() {
  const echo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = echo.current;
    if (!element) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    let frame = 0;
    const move = (event: PointerEvent) => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        element.classList.add("is-active");
      });
    };
    const leave = () => element.classList.remove("is-active");
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={echo} className="cursor-echo" aria-hidden="true"><span /></div>;
}
