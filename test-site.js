const { chromium } = require("playwright");

const URL = "https://mybook-orpin.vercel.app";
const results = [];

function log(type, msg) {
  const prefix = { pass: "✅", fail: "❌", info: "ℹ️ ", warn: "⚠️ " }[type] || "";
  console.log(`${prefix} ${msg}`);
  results.push({ type, msg });
}

async function runTests() {
  const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 }
  });
  const page = await context.newPage();

  const errors = [];
  page.on("console", msg => {
    if (msg.type() === "error") {
      errors.push(msg.text());
    }
  });

  // ── 1. 首页加载 ──────────────────────────────────────────────
  log("info", `正在访问: ${URL}`);
  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
  log("pass", `页面加载成功 (${page.url()})`);

  const title = await page.title();
  log("info", `页面标题: ${title}`);

  // ── 2. 检查关键 DOM 元素 ───────────────────────────────────
  const heroTitle = await page.locator("h1").first().textContent().catch(() => null);
  log(heroTitle ? "pass" : "fail", `Hero 标题存在: "${heroTitle?.slice(0,40)}..."`);

  const nav = await page.locator("nav").first().isVisible().catch(() => false);
  log(nav ? "pass" : "fail", "导航栏可见");

  const trustBar = await page.locator(".trust-bar").isVisible().catch(() => false);
  log(trustBar ? "pass" : "fail", "信任条可见");

  // ── 3. 检查各章节 ────────────────────────────────────────────
  const sections = [
    ["#frameworks", ".methods-grid", "理论基础 / 测评体系 章节"],
    ["#types", ".types-tabs", "人格类型 章节"],
    ["#quiz", ".quiz-wrapper", "人格测评 章节"],
    ["#resources", ".resources-layout", "资料库 章节"],
    ["#faq", ".faq-list", "FAQ 章节"],
  ];
  for (const [sectionId, selector, name] of sections) {
    const el = await page.locator(selector).first().isVisible().catch(() => false);
    log(el ? "pass" : "fail", `${name} (${selector})`);
  }

  // ── 4. 滚动交互 ─────────────────────────────────────────────
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(500);
  const navScrolled = await page.locator(".nav.scrolled").isVisible().catch(() => false);
  log(navScrolled ? "pass" : "fail", "滚动后导航栏添加 .scrolled 样式");

  // ── 5. 滚动到人格类型，过滤 Tab 切换 ─────────────────────────
  await page.locator("#types").scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  const tabAnalyst = await page.locator(".types-tab").nth(1);
  await tabAnalyst.click();
  await page.waitForTimeout(500);
  const analystTypes = await page.locator(".type-card").count();
  log(analystTypes > 0 && analystTypes <= 4 ? "pass" : "warn",
    `切换到分析家 Tab，显示 ${analystTypes} 个类型卡片（期望 ≤4）`);

  // 切回全部
  await page.locator(".types-tab").first().click();
  await page.waitForTimeout(300);
  const allTypes = await page.locator(".type-card").count();
  log(allTypes === 16 ? "pass" : "fail",
    `切回全部 Tab，显示 ${allTypes} 个类型卡片（期望 16）`);

  // ── 6. 滚动到测评区域 ────────────────────────────────────────
  await page.locator("#quiz").scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  const quizCard = await page.locator(".quiz-card").isVisible().catch(() => false);
  log(quizCard ? "pass" : "fail", "测评卡片可见");

  const progressBar = await page.locator(".quiz-bar-fill").isVisible().catch(() => false);
  log(progressBar ? "pass" : "fail", "进度条可见");

  // ── 7. 答题流程测试 ───────────────────────────────────────────
  // 选择第一题答案 A
  const firstChoice = await page.locator(".quiz-choice").first();
  await firstChoice.click();
  await page.waitForTimeout(300);
  const selectedChoice = await page.locator(".quiz-choice.selected").isVisible().catch(() => false);
  log(selectedChoice ? "pass" : "fail", "点击选项后添加 .selected 样式");

  // 点击下一题
  await page.locator("text=下一题").click();
  await page.waitForTimeout(500);
  const stepLabel = await page.locator(".quiz-step-label").textContent().catch(() => "");
  log(stepLabel.includes("2 /") ? "pass" : "fail", `进入第2题: "${stepLabel.trim()}"`);

  // 快速答完剩余题目
  for (let i = 2; i <= 10; i++) {
    await page.locator(".quiz-choice").first().click();
    await page.waitForTimeout(200);
    const nextBtn = i < 10 ? page.locator("text=下一题") : page.locator("text=查看结果");
    await nextBtn.click();
    await page.waitForTimeout(400);
  }

  // ── 8. 结果页验证 ────────────────────────────────────────────
  await page.waitForTimeout(600);
  const resultPanel = await page.locator(".quiz-result-panel.show").isVisible().catch(() => false);
  log(resultPanel ? "pass" : "fail", "测评完成，显示结果面板");

  if (resultPanel) {
    const resultCode = await page.locator(".result-type-code").textContent().catch(() => null);
    const resultName = await page.locator(".result-type-name").textContent().catch(() => null);
    log("info", `测评结果: ${resultCode} · ${resultName}`);

    const traitsGrid = await page.locator(".result-traits-grid").isVisible().catch(() => false);
    log(traitsGrid ? "pass" : "fail", "四维度分布图表可见");

    const resetBtn = await page.locator("text=重新测试").isVisible().catch(() => false);
    log(resetBtn ? "pass" : "fail", "「重新测试」按钮可见");
  }

  // ── 9. 重新测试按钮 ──────────────────────────────────────────
  await page.locator("text=重新测试").click();
  await page.waitForTimeout(500);
  const backToQ1 = await page.locator(".quiz-step-label").textContent().catch(() => "");
  log(backToQ1.includes("1 /") ? "pass" : "fail", "点击重新测试后回到第1题");

  // ── 10. FAQ 手风琴测试 ────────────────────────────────────────
  await page.locator("#faq").scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);

  const firstFaq = await page.locator(".faq-question").first();
  await firstFaq.click();
  await page.waitForTimeout(500);
  const openFaq = await page.locator(".faq-item.open").isVisible().catch(() => false);
  log(openFaq ? "pass" : "fail", "点击 FAQ 问题展开答案");

  // ── 11. 订阅表单测试 ─────────────────────────────────────────
  await page.locator(".cta-form").scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);

  const emailInput = await page.locator(".cta-input").isVisible().catch(() => false);
  log(emailInput ? "pass" : "fail", "订阅邮箱输入框可见");

  if (emailInput) {
    await page.locator(".cta-input").fill("test@example.com");
    await page.locator(".cta-form .btn-primary").click();
    await page.waitForTimeout(500);
    const subscribed = await page.locator("text=已订阅").isVisible().catch(() => false);
    log(subscribed ? "pass" : "fail", "订阅表单提交成功，显示「已订阅 ✓」");
  }

  // ── 12. 控制台错误检查 ────────────────────────────────────────
  const criticalErrors = errors.filter(e =>
    !e.includes("favicon") &&
    !e.includes("404") &&
    !e.includes("net::ERR_")
  );
  log(criticalErrors.length === 0 ? "pass" : "warn",
    `控制台错误数: ${criticalErrors.length}${criticalErrors.length > 0 ? " → " + criticalErrors[0].slice(0, 100) : ""}`);

  // ── 13. 响应式：移动端 ────────────────────────────────────────
  await context.close();
  const mobileContext = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(URL, { waitUntil: "networkidle", timeout: 30000 });

  const mobileNav = await mobilePage.locator(".nav-mobile-btn").isVisible().catch(() => false);
  log(mobileNav ? "pass" : "fail", "移动端：显示汉堡菜单按钮");

  const desktopNavLinks = await mobilePage.locator(".nav-links").isHidden().catch(() => true);
  log(desktopNavLinks ? "pass" : "warn", "移动端：桌面导航链接默认隐藏");

  await mobilePage.locator(".nav-mobile-btn").click();
  await page.waitForTimeout(400);
  const navOpen = await mobilePage.locator(".nav-links").isVisible().catch(() => false);
  log(navOpen ? "pass" : "warn", "移动端：点击汉堡菜单展开导航");

  await mobileContext.close();

  // ── 结果汇总 ─────────────────────────────────────────────────
  await browser.close();

  console.log("\n" + "═".repeat(50));
  console.log("测试汇总");
  console.log("═".repeat(50));
  const passed = results.filter(r => r.type === "pass").length;
  const failed = results.filter(r => r.type === "fail").length;
  const warned = results.filter(r => r.type === "warn").length;
  console.log(`✅ 通过: ${passed}`);
  console.log(`❌ 失败: ${failed}`);
  console.log(`⚠️  警告: ${warned}`);
  console.log(`总计: ${results.length} 项`);

  process.exit(failed > 0 ? 1 : 0);
}

runTests().catch(err => {
  console.error("❌ 测试脚本执行出错:", err.message);
  process.exit(1);
});
