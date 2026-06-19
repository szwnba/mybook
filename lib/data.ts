export const quizData = [
  {
    q: "一个完全空闲的周末，你最可能选择？",
    hint: "选让你感到放松和充实的那个",
    a: { text: "约朋友出去活动，或者参加聚会社交", dim: "E" },
    b: { text: "在家看书、听播客，或者一个人做点喜欢的事", dim: "I" },
  },
  {
    q: "你在学习或工作时，更偏好？",
    hint: "不是能力问题，而是天然倾向",
    a: { text: "按照清晰的步骤和时间表执行", dim: "J" },
    b: { text: "保持灵活性，根据进展随时调整方向", dim: "P" },
  },
  {
    q: "当朋友向你描述一个新想法时，你首先会想到？",
    hint: "你的第一反应",
    a: { text: "这个具体怎么落地？需要什么条件？", dim: "S" },
    b: { text: "这让我联想到什么更大可能性？", dim: "N" },
  },
  {
    q: "做一个重要决定时，你更看重？",
    hint: "两种方式都是合理的",
    a: { text: "逻辑分析，权衡利弊", dim: "T" },
    b: { text: "内心感受，以及对相关人员的影响", dim: "F" },
  },
  {
    q: "在团队中，你通常自然地？",
    hint: "不是你想不想，而是你自然而然会做的",
    a: { text: "表达想法、发起讨论，推动团队行动", dim: "E" },
    b: { text: "先倾听和观察，在有把握时再发言", dim: "I" },
  },
  {
    q: "阅读一篇文章时，你更容易注意到？",
    hint: "",
    a: { text: "具体的事实、数据和案例", dim: "S" },
    b: { text: "文章背后的主题、隐喻和深层含义", dim: "N" },
  },
  {
    q: "如果两个朋友发生冲突来找你调解，你会？",
    hint: "",
    a: { text: "客观分析双方的对错，找出公正的解决方案", dim: "T" },
    b: { text: "先关注双方的感受，帮助他们互相理解", dim: "F" },
  },
  {
    q: "你的桌面（物理或电脑）通常是？",
    hint: "诚实地描述，不是理想状态",
    a: { text: "有条理，东西放在固定位置", dim: "J" },
    b: { text: "有一定秩序但比较随意，有时会比较乱", dim: "P" },
  },
  {
    q: "在社交场合结束时，你通常感到？",
    hint: "即使你很享受社交",
    a: { text: "精力充沛，还想继续聊", dim: "E" },
    b: { text: "虽然开心但需要独处来恢复能量", dim: "I" },
  },
  {
    q: "面对一个从未做过的新任务，你更倾向于？",
    hint: "",
    a: { text: "先参考已有的成功案例和方法", dim: "S" },
    b: { text: "自己构思一套全新的思路和方案", dim: "N" },
  },
];

export const typeInfo: Record<string, {
  name: string;
  emoji: string;
  cat: string;
  catColor: string;
  catBg: string;
  desc: string;
  strengths: string[];
  growth: string[];
}> = {
  INTJ: { name: "建筑师", emoji: "🏗️", cat: "分析家", catColor: "var(--sky)", catBg: "var(--sky-bg)", desc: "你是一个独立而有远见的战略思考者。你善于看到事物的全貌，将复杂理论转化为系统化的行动方案。你追求效率和深度，喜欢在安静中构建属于自己的思想体系。", strengths: ["战略思维", "独立自主", "高效执行", "深度分析"], growth: ["灵活性", "情感表达", "团队协作", "耐心倾听"] },
  INTP: { name: "逻辑学家", emoji: "🔬", cat: "分析家", catColor: "var(--sky)", catBg: "var(--sky-bg)", desc: "你是一个充满好奇心的创新者，沉浸在理论和逻辑的世界中。你喜欢拆解问题、发现规律，在知识的海洋中寻找真理。你的内心世界丰富而精密。", strengths: ["逻辑分析", "创新思维", "客观理性", "知识深度"], growth: ["实践落地", "时间管理", "社交连接", "情感关注"] },
  ENTJ: { name: "指挥官", emoji: "👑", cat: "分析家", catColor: "var(--sky)", catBg: "var(--sky-bg)", desc: "你是一个果断高效的领导者，天然具备组织资源、制定策略和推动目标达成的能力。你有清晰的愿景，并且有将愿景变为现实的执行力。", strengths: ["领导力", "战略规划", "果断决策", "推动执行"], growth: ["倾听耐心", "灵活性", "情感体察", "授权放手"] },
  ENTP: { name: "辩论家", emoji: "⚡", cat: "分析家", catColor: "var(--sky)", catBg: "var(--sky-bg)", desc: "你机智灵活，热爱思想的碰撞与挑战。你总能从不同角度看问题，找到别人想不到的可能性。你是天生的创新者和可能性探索者。", strengths: ["创新思维", "灵活应变", "辩论能力", "开阔视野"], growth: ["深度专注", "完成项目", "情感敏感度", "细节关注"] },
  INFJ: { name: "提倡者", emoji: "🌌", cat: "外交家", catColor: "var(--sage)", catBg: "var(--sage-bg)", desc: "你是一个富有洞察力的理想主义者，安静而坚定地追求有意义的人生。你能感知他人未说出口的需求，并用自己的方式默默让世界变得更好。", strengths: ["深度洞察", "共情能力", "理想驱动", "坚定信念"], growth: ["自我关怀", "设定界限", "接受不完美", "行动力"] },
  INFP: { name: "调停者", emoji: "🦋", cat: "外交家", catColor: "var(--sage)", catBg: "var(--sage-bg)", desc: "你是一个诗意而深沉的灵魂，拥有强烈的个人价值观和丰富的内在世界。你追求真实与和谐，渴望在生命中找到深层的意义和连接。", strengths: ["创造力", "深度共情", "价值坚守", "想象力"], growth: ["面对冲突", "实际执行", "自我肯定", "情绪管理"] },
  ENFJ: { name: "主人公", emoji: "🌟", cat: "外交家", catColor: "var(--sage)", catBg: "var(--sage-bg)", desc: "你是一个富有感召力的引导者，天生关注他人的成长与潜能。你善于激励和带领身边的人，同时也在这种连接中找到自己的价值。", strengths: ["激励他人", "组织能力", "人际敏感度", "愿景传达"], growth: ["自我需求", "拒绝他人", "独立判断", "休息充电"] },
  ENFP: { name: "竞选者", emoji: "🎭", cat: "外交家", catColor: "var(--sage)", catBg: "var(--sage-bg)", desc: "你热情洋溢、充满创意，总能在平凡中发现非凡。你对生活充满好奇心和感染力，能带动周围的人看到更多可能性。", strengths: ["创意灵感", "人际感染力", "热情乐观", "适应变化"], growth: ["深度坚持", "时间管理", "情绪稳定", "细节执行"] },
  ISTJ: { name: "物流师", emoji: "📋", cat: "守卫者", catColor: "var(--warm-gold)", catBg: "var(--warm-gold-bg)", desc: "你是一个可靠务实的执行者，重视责任、传统和秩序。你的组织能力出色，是任何团队中最值得信赖的那个人。说到做到是你的标签。", strengths: ["可靠性", "组织能力", "细节把控", "坚持不懈"], growth: ["灵活性", "接受变化", "创新思维", "情感表达"] },
  ISFJ: { name: "守护者", emoji: "🛡️", cat: "守卫者", catColor: "var(--warm-gold)", catBg: "var(--warm-gold-bg)", desc: "你是一个温暖而忠诚的守护者，默默关注身边人的需要并用实际行动表达关爱。你是关系中的稳定力量，让人感到安心和被照顾。", strengths: ["细心体贴", "忠诚可靠", "实际帮助", "观察力"], growth: ["自我优先", "表达需求", "接受赞美", "说\"不\""] },
  ESTJ: { name: "总经理", emoji: "📊", cat: "守卫者", catColor: "var(--warm-gold)", catBg: "var(--warm-gold-bg)", desc: "你是一个高效的组织管理者，擅长建立秩序、分配任务和推动目标达成。你注重规则和标准，是可靠的组织支柱和团队核心。", strengths: ["执行力", "组织协调", "标准制定", "责任担当"], growth: ["倾听他人", "灵活变通", "情感关怀", "创新尝试"] },
  ESFJ: { name: "执政官", emoji: "🤝", cat: "守卫者", catColor: "var(--warm-gold)", catBg: "var(--warm-gold-bg)", desc: "你是一个热心周到的协调者，重视和谐与归属感。你善于营造温暖的氛围，让每个人都感到被重视和欢迎。你常常是团队的情感粘合剂。", strengths: ["人际协调", "关怀照顾", "组织能力", "氛围营造"], growth: ["自我关怀", "独立决策", "面对冲突", "接纳差异"] },
  ISTP: { name: "鉴赏家", emoji: "🔧", cat: "探险家", catColor: "var(--terracotta)", catBg: "var(--terracotta-bg)", desc: "你是一个冷静灵活的实操者，享受用双手解决问题。你适应力极强，在压力下依然能保持冷静和理性。你更喜欢做而不是说。", strengths: ["问题解决", "冷静应变", "实际操作", "独立自主"], growth: ["长期规划", "情感沟通", "团队合作", "表达感受"] },
  ISFP: { name: "探险家", emoji: "🎨", cat: "探险家", catColor: "var(--terracotta)", catBg: "var(--terracotta-bg)", desc: "你是一个安静而敏感的艺术灵魂，善于感受生活中的美。你用行动和体验表达内心世界，活在当下，珍视每一个真实的感受。", strengths: ["审美敏感", "温和善良", "灵活适应", "真实自然"], growth: ["长期规划", "主动表达", "面对冲突", "自我推广"] },
  ESTP: { name: "企业家", emoji: "🚀", cat: "探险家", catColor: "var(--terracotta)", catBg: "var(--terracotta-bg)", desc: "你是一个充满活力的行动派，善于把握当下的机会。你反应敏捷、果断干脆，是天生的问题解决者和冒险家。", strengths: ["行动力", "危机处理", "务实高效", "社交能力"], growth: ["长期视角", "深度思考", "耐心等待", "情感细腻"] },
  ESFP: { name: "表演者", emoji: "🎤", cat: "探险家", catColor: "var(--terracotta)", catBg: "var(--terracotta-bg)", desc: "你是一个热情开朗的活力源泉，总能让周围的人感到快乐和被感染。你活在当下，善于发现生活中的乐趣和惊喜。", strengths: ["感染力", "乐观精神", "实际帮助", "随机应变"], growth: ["长期规划", "独处能力", "面对严肃话题", "坚持目标"] },
};

export const typesList = [
  { code: "INTJ", group: "analyst", nameZh: "建筑师", nameEn: "Architect", desc: "独立、有远见的战略思考者，擅长将复杂理论系统化为可执行计划。" },
  { code: "INTP", group: "analyst", nameZh: "逻辑学家", nameEn: "Logician", desc: "充满好奇心的创新者，沉浸在理论与逻辑的世界中寻找真理。" },
  { code: "ENTJ", group: "analyst", nameZh: "指挥官", nameEn: "Commander", desc: "果断高效的领导者，天然具备制定策略并推动团队达成目标。" },
  { code: "ENTP", group: "analyst", nameZh: "辩论家", nameEn: "Debater", desc: "机智灵活的思想挑战者，享受智力碰撞，总能找到新的可能性。" },
  { code: "INFJ", group: "diplomat", nameZh: "提倡者", nameEn: "Advocate", desc: "富有洞察力的理想主义者，安静而坚定地追求有意义的人生。" },
  { code: "INFP", group: "diplomat", nameZh: "调停者", nameEn: "Mediator", desc: "诗意的灵魂与深沉的共情者，用内在价值观指引人生方向。" },
  { code: "ENFJ", group: "diplomat", nameZh: "主人公", nameEn: "Protagonist", desc: "富有感召力的引导者，天生关注他人成长并激发潜能。" },
  { code: "ENFP", group: "diplomat", nameZh: "竞选者", nameEn: "Campaigner", desc: "热情洋溢的自由灵魂，总能在平凡中发现创意与惊喜。" },
  { code: "ISTJ", group: "sentinel", nameZh: "物流师", nameEn: "Logistician", desc: "可靠务实的执行者，重视责任与秩序，值得托付的行动派。" },
  { code: "ISFJ", group: "sentinel", nameZh: "守护者", nameEn: "Defender", desc: "温暖而忠诚的守护者，默默用行动照顾身边每一个人。" },
  { code: "ESTJ", group: "sentinel", nameZh: "总经理", nameEn: "Executive", desc: "高效的组织管理者，擅长建立秩序和推动目标落地执行。" },
  { code: "ESFJ", group: "sentinel", nameZh: "执政官", nameEn: "Consul", desc: "热心周到的协调者，善于营造温暖氛围让每个人被重视。" },
  { code: "ISTP", group: "explorer", nameZh: "鉴赏家", nameEn: "Virtuoso", desc: "冷静灵活的实操者，享受用双手解决问题，适应力极强。" },
  { code: "ISFP", group: "explorer", nameZh: "探险家", nameEn: "Adventurer", desc: "安静而敏感的艺术灵魂，用行动和体验表达内心世界之美。" },
  { code: "ESTP", group: "explorer", nameZh: "企业家", nameEn: "Entrepreneur", desc: "充满活力的行动派，善于把握当下机会，反应敏捷果断。" },
  { code: "ESFP", group: "explorer", nameZh: "表演者", nameEn: "Entertainer", desc: "热情开朗的活力源泉，用感染力让每个场合更有趣。" },
];

export const frameworksList = [
  { icon: "🧩", color: "var(--sage)", bg: "var(--sage-bg)", name: "MBTI 人格类型", fullName: "Myers-Briggs Type Indicator", desc: "基于荣格心理类型理论发展而来，通过四个二元维度（E/I、S/N、T/F、J/P）划分出 16 种人格类型，是全球应用最广泛的人格评估工具之一。", features: ["16 种人格类型分类", "认知功能栈深度分析", "适用于自我认知与职业探索"] },
  { icon: "🔬", color: "var(--terracotta)", bg: "var(--terracotta-bg)", name: "大五人格模型", fullName: "Big Five / OCEAN Model", desc: "学术界最受认可的人格框架，将人格分解为开放性、尽责性、外倾性、宜人性和神经质五个维度，提供连续谱系而非二元分类。", features: ["高信度与效度的科学验证", "连续维度而非类型划分", "学术研究首选工具"] },
  { icon: "💎", color: "var(--warm-gold)", bg: "var(--warm-gold-bg)", name: "九型人格", fullName: "Enneagram of Personality", desc: "从核心动机与恐惧出发，识别九种基本人格类型及其内在成长路径。深层关注「为什么」而非「是什么」，是自我成长的有力工具。", features: ["9 种核心人格 + 18 种翼型", "整合与瓦解方向图谱", "深层动机与恐惧分析"] },
  { icon: "⚡", color: "var(--sky)", bg: "var(--sky-bg)", name: "DISC 行为风格", fullName: "DISC Assessment", desc: "聚焦可观察的行为模式，将行为风格分为支配(D)、影响(I)、稳健(S)、谨慎(C)四类，广泛应用于职场沟通与团队建设。", features: ["简单易用的四象限模型", "职场沟通优化利器", "团队配置与领导力发展"] },
  { icon: "🎯", color: "var(--lavender)", bg: "var(--lavender-bg)", name: "霍兰德职业兴趣", fullName: "Holland Code (RIASEC)", desc: "将职业兴趣分为现实型、研究型、艺术型、社会型、企业型和常规型六类，帮助找到与人格最匹配的职业方向。", features: ["6 种职业兴趣类型", "人格-环境匹配理论", "职业规划必备参考"] },
  { icon: "🌊", color: "var(--rose)", bg: "var(--rose-bg)", name: "气质类型理论", fullName: "Four Temperaments", desc: "源自古希腊的四种气质分类（多血质、胆汁质、粘液质、抑郁质），与现代神经科学形成呼应，帮助理解情绪反应的基本模式。", features: ["4 种基本气质类型", "情绪反应模式分析", "理解人际互动风格"] },
];

export const faqs = [
  { q: "人格测试的结果准确吗？", a: "人格测试提供的是一个自我理解的框架，而非绝对的科学定论。它的价值在于帮你组织和表达那些你已经隐约感知到的模式。测评结果会受到你当天状态、自我认知程度等因素影响。建议把结果视为「当前最接近的画像」，而非一成不变的标签。多次测评、结合不同框架来看，会获得更完整的画面。" },
  { q: "MBTI 和大五人格，应该信哪个？", a: "它们从不同角度描述人格，并非非此即彼。大五人格在学术研究中信效度更高，以连续维度呈现特质差异；MBTI 在自我反思和团队沟通中更容易理解和应用。最理想的方式是将两者结合使用：用大五了解自己的特质分布，用 MBTI 理解自己的思维和决策偏好。" },
  { q: "我的结果和上次不一样，正常吗？", a: "完全正常。首先，人格的一些维度本身就处于连续谱上，你可能处于两个偏好之间。其次，你对自己的理解在不断深化，更真实的回答自然会带来不同的结果。这不代表测试不准确，恰恰说明你在不断地认识自己。建议关注那些反复出现的模式，而非纠结于单个字母。" },
  { q: "人格测评可以用来筛选人才吗？", a: "不建议将人格类型作为招聘筛选的唯一或主要标准。人格类型没有好坏之分，每种类型都有适合的岗位和环境。更科学的做法是：用它来帮助已入职的员工更好地理解自己的工作风格、优化团队沟通和协作方式。在职业规划方面，它是很好的自我探索工具，但不应该是唯一的决策依据。" },
  { q: "测评结果可以作为心理诊断依据吗？", a: "不能。人格类型测评与临床心理诊断是完全不同的工具。MBTI、九型人格等测评旨在描述正常的人格差异，不涉及心理障碍的评估与诊断。如果你正在经历心理困扰，请寻求专业心理咨询师或精神科医生的帮助。心理测评是一个自我了解的工具，而不是医疗或临床诊断工具。" },
];
