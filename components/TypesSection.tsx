"use client";

import { useState } from "react";
import { typesList } from "../lib/data";
import Reveal from "./Reveal";

const tabs = [
  { filter: "all", label: "全部类型" },
  { filter: "analyst", label: "分析家 NT" },
  { filter: "diplomat", label: "外交家 NF" },
  { filter: "sentinel", label: "守卫者 SJ" },
  { filter: "explorer", label: "探险家 SP" },
];

const groupStyles: Record<string, { accent: string; bg: string }> = {
  analyst: { accent: "var(--sky)", bg: "var(--sky-bg)" },
  diplomat: { accent: "var(--sage)", bg: "var(--sage-bg)" },
  sentinel: { accent: "var(--warm-gold)", bg: "var(--warm-gold-bg)" },
  explorer: { accent: "var(--terracotta)", bg: "var(--terracotta-bg)" },
};

const emojiMap: Record<string, string> = {
  INTJ: "🏗️", INTP: "🔬", ENTJ: "👑", ENTP: "⚡",
  INFJ: "🌌", INFP: "🦋", ENFJ: "🌟", ENFP: "🎭",
  ISTJ: "📋", ISFJ: "🛡️", ESTJ: "📊", ESFJ: "🤝",
  ISTP: "🔧", ISFP: "🎨", ESTP: "🚀", ESFP: "🎤",
};

export default function TypesSection() {
  const [filter, setFilter] = useState("all");

  const visible = typesList.filter(
    (t) => filter === "all" || t.group === filter
  );

  return (
    <>
      <div className="types-tabs reveal visible">
        {tabs.map((t) => (
          <button
            key={t.filter}
            className={`types-tab ${filter === t.filter ? "active" : ""}`}
            onClick={() => setFilter(t.filter)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="types-grid">
        {visible.map((t, i) => {
          const s = groupStyles[t.group];
          return (
            <Reveal key={t.code} delay={i % 4}>
              <div
                className="type-card"
                style={
                  {
                    "--type-accent": s.accent,
                    "--type-bg": s.bg,
                  } as React.CSSProperties
                }
              >
                <div className="type-card-top">
                  <span className="type-code">{t.code}</span>
                  <span className="type-emoji">{emojiMap[t.code]}</span>
                </div>
                <div className="type-name-zh">{t.nameZh}</div>
                <div className="type-name-en">{t.nameEn}</div>
                <div className="type-desc-short">{t.desc}</div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
