"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    )
      .to(textRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.4,
        ease: "power2.in",
        delay: 0.3,
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: "power4.inOut",
      });
  }, []);

  if (done) return null;

  return (
    <div ref={loaderRef} className="page-loader">
      <span ref={textRef} className="loader-text">
        Noor.
      </span>
    </div>
  );
}
