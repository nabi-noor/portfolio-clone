"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Hide until first mouse move
    let hasMoved = false;

    const onMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        cursor.style.opacity = "1";
      }
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const onEnter = () => cursor.classList.add("hovering");
    const onLeave = () => cursor.classList.remove("hovering");

    window.addEventListener("mousemove", onMove);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden md:block"
      style={{ opacity: 0 }}
    />
  );
}
