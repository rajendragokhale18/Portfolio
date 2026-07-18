"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
      if (outlineRef.current) {
        // Slight lag for outline
        requestAnimationFrame(() => {
          if (outlineRef.current) {
            outlineRef.current.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
          }
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    document.addEventListener("mousemove", moveCursor, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (isTouch || prefersReduced) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        aria-hidden="true"
        style={{
          width: 8,
          height: 8,
          background: "var(--color-accent-cyan)",
          boxShadow: "0 0 8px var(--color-accent-cyan)",
          transition: "transform 0.05s ease-out",
        }}
      />
      {/* Outer ring */}
      <div
        ref={outlineRef}
        className="custom-cursor-outline"
        aria-hidden="true"
        style={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          border: "1px solid",
          borderColor: isHovering
            ? "var(--color-accent-violet)"
            : "var(--color-accent-cyan)",
          opacity: 0.6,
          marginLeft: isHovering ? -8 : 0,
          marginTop: isHovering ? -8 : 0,
          transition: "width 0.2s, height 0.2s, border-color 0.2s, margin 0.2s",
        }}
      />
    </>
  );
}
