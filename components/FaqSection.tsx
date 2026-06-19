"use client";

import { useState } from "react";
import { faqs } from "../lib/data";
import Reveal from "./Reveal";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <div className="faq-list">
      {faqs.map((f, i) => {
        const isOpen = openIdx === i;
        return (
          <Reveal
            key={f.q}
            delay={i}
            className={isOpen ? "faq-item open" : "faq-item"}
          >
            <button
              className="faq-question"
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
            >
              <span>{f.q}</span>
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">{f.a}</div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
