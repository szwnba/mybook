"use client";

import { useMemo, useState } from "react";
import { quizData, typeInfo } from "../lib/data";

export default function Quiz() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState(
    new Array(quizData.length).fill(null) as (null | "a" | "b")[]
  );
  const [showResult, setShowResult] = useState(false);

  const current = quizData[idx];
  const answered = answers[idx];
  const progress = ((idx + 1) / quizData.length) * 100;

  const result = useMemo(() => {
    const scores: Record<string, number> = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
    };
    quizData.forEach((q, i) => {
      if (answers[i]) scores[q[answers[i]!].dim]++;
    });
    const type =
      (scores.E > scores.I ? "E" : "I") +
      (scores.S > scores.N ? "S" : "N") +
      (scores.T > scores.F ? "T" : "F") +
      (scores.J > scores.P ? "J" : "P");
    return { scores, type };
  }, [answers]);

  const info = typeInfo[result.type];

  const dims = [
    { label: "E/I", left: "外倾 E", right: "内倾 I", scores: result.scores },
    { label: "S/N", left: "实感 S", right: "直觉 N", scores: result.scores },
    { label: "T/F", left: "思考 T", right: "情感 F", scores: result.scores },
    { label: "J/P", left: "判断 J", right: "感知 P", scores: result.scores },
  ];

  const pickAnswer = (val: "a" | "b") => {
    const next = [...answers];
    next[idx] = val;
    setAnswers(next);
  };

  const goNext = () => {
    if (idx === quizData.length - 1) {
      setShowResult(true);
      return;
    }
    setIdx(idx + 1);
  };

  const goPrev = () => {
    if (idx > 0) setIdx(idx - 1);
  };

  const reset = () => {
    setIdx(0);
    setAnswers(new Array(quizData.length).fill(null));
    setShowResult(false);
    const el = document.getElementById("quiz");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (showResult) {
    return (
      <div className="quiz-result-panel show">
        <div className="result-badge">{info?.emoji || "✨"}</div>
        <div className="result-type-code">{result.type}</div>
        <div className="result-type-name">{info?.name || result.type}</div>
        <div
          className="result-category"
          style={{ background: info?.catBg, color: info?.catColor }}
        >
          {info?.cat || ""}
        </div>
        <div className="result-desc">{info?.desc || ""}</div>

        <div className="result-traits-grid">
          {dims.map((d) => {
            const leftKey = d.left.split(" ")[1];
            const rightKey = d.right.split(" ")[1];
            const total = result.scores[leftKey] + result.scores[rightKey] || 1;
            const leftP = Math.round((result.scores[leftKey] / total) * 100);
            const rightP = 100 - leftP;
            return (
              <div className="result-trait-card" key={d.label}>
                <div className="result-trait-label">
                  {d.left} / {rightKey}
                </div>
                <div
                  className="result-trait-value"
                  style={{ fontSize: "0.95rem", marginTop: "4px" }}
                >
                  <span
                    style={{
                      color: leftP >= rightP ? "var(--sage-dark)" : "var(--text-muted)",
                    }}
                  >
                    {leftP}%
                  </span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}> · </span>
                  <span
                    style={{
                      color: rightP > leftP ? "var(--sage-dark)" : "var(--text-muted)",
                    }}
                  >
                    {rightP}%
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "8px",
                    height: "6px",
                    borderRadius: "3px",
                    background: "var(--bg-muted)",
                    overflow: "hidden",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: `${leftP}%`,
                      background: "var(--sage)",
                      borderRadius: "3px 0 0 3px",
                    }}
                  />
                  <div
                    style={{
                      width: `${rightP}%`,
                      background: "var(--border)",
                      borderRadius: "0 3px 3px 0",
                    }}
                  />
                </div>
              </div>
            );
          })}

          <div className="result-trait-card">
            <div className="result-trait-label">核心优势</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px",
                marginTop: "8px",
              }}
            >
              {(info?.strengths || []).map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "3px 10px",
                    background: "var(--sage-bg)",
                    color: "var(--sage-dark)",
                    borderRadius: "100px",
                    fontSize: "0.75rem",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="result-actions">
          <button className="btn btn-primary" onClick={reset}>
            重新测试
          </button>
          <a href="#types" className="btn btn-ghost">
            浏览所有类型
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="quiz-progress-row">
        <span className="quiz-step-label">
          问题 {idx + 1} / {quizData.length}
        </span>
        <div className="quiz-bar">
          <div className="quiz-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="quiz-card">
        <div className="quiz-question-text">{current.q}</div>
        {current.hint ? (
          <div className="quiz-question-hint">{current.hint}</div>
        ) : (
          <div style={{ marginBottom: "1.5rem" }} />
        )}

        <div className="quiz-choices">
          {(["a", "b"] as const).map((opt) => (
            <div
              key={opt}
              className={`quiz-choice ${answered === opt ? "selected" : ""}`}
              onClick={() => pickAnswer(opt)}
            >
              <div className="quiz-choice-marker">
                {opt === "a" ? "A" : "B"}
              </div>
              <span>{current[opt].text}</span>
            </div>
          ))}
        </div>

        <div className="quiz-nav-row">
          <div className="quiz-dim-indicators">
            {["E/I", "S/N", "T/F", "J/P"].map((d, i) => {
              const active = i === Math.floor(idx / 2.5);
              return (
                <div
                  key={d}
                  className={`quiz-dim-dot ${active ? "active" : ""}`}
                />
              );
            })}
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {idx > 0 && (
              <button className="btn btn-ghost btn-sm" onClick={goPrev}>
                ← 上一题
              </button>
            )}
            <button
              className={`btn ${answered ? "btn-primary" : "btn-ghost"} btn-sm`}
              onClick={goNext}
              disabled={!answered}
            >
              {idx === quizData.length - 1 ? "查看结果" : "下一题 →"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
