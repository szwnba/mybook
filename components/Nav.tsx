"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#frameworks", label: "理论基础" },
    { href: "#types", label: "人格类型" },
    { href: "#quiz", label: "开始测评" },
    { href: "#resources", label: "资料库" },
    { href: "#faq", label: "常见问题" },
  ];

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-brand">
        <div className="nav-logo" />
        <div className="nav-title">
          心栖 <small>MindNest</small>
        </div>
      </div>
      <ul
        className="nav-links"
        style={
          mobileOpen
            ? {
                display: "flex",
                position: "absolute",
                top: "72px",
                left: "0",
                right: "0",
                flexDirection: "column",
                background: "rgba(255,255,255,0.98)",
                padding: "1rem",
                borderBottom: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-md)",
              }
            : {}
        }
      >
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#quiz" className="nav-cta" onClick={() => setMobileOpen(false)}>
            免费测评
          </a>
        </li>
      </ul>
      <button
        className="nav-mobile-btn"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="菜单"
      >
        ☰
      </button>
    </nav>
  );
}
