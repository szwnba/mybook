"use client";

import { useState } from "react";

export default function CtaSection() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="cta-banner reveal visible">
      <div className="cta-banner-content">
        <h2 className="cta-banner-title">让理解成为一种习惯</h2>
        <p className="cta-banner-desc">
          订阅我们的月度通讯，接收最新的人格心理学研究、深度解读文章与实用成长建议。
        </p>
        <form
          className="cta-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubscribed(true);
          }}
        >
          <input
            type="email"
            className="cta-input"
            placeholder="输入你的邮箱地址"
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={
              subscribed
                ? { background: "var(--sage-dark)" }
                : undefined
            }
          >
            {subscribed ? "已订阅 ✓" : "订阅通讯"}
          </button>
        </form>
      </div>
    </div>
  );
}
