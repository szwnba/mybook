"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLDivElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const classes = [
    "reveal",
    delay > 0 ? `reveal-d${delay}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div ref={ref} className={classes}>{children}</div>;
}
