
const DATA = {
  semester: { day: 13, total: 90 },
  courses: [
    {
      id:"jp", icon:"🇯🇵", name:"日本语言学院", short:"Japanese",
      progress:18, color:"#b64d4d",
      desc:"从零基础开始，按 JLPT N5 → N1 逐级推进，同时强化真实阅读、听力与表达。",
      modules:[
        ["Foundation","五十音、发音、长音、促音、拗音与基础句型",85],
        ["JLPT N5","词汇、汉字、语法、阅读、听力、题型训练",32],
        ["JLPT N4","核心语法与日常阅读能力",0],
        ["JLPT N3","中级阅读、听力与表达",0],
        ["JLPT N2","高级语法与长文阅读",0],
        ["JLPT N1","高阶词汇、复杂阅读、听力与应试",0],
        ["Practical Japanese","工作、电商、新闻与商务场景",3]
      ]
    },
    {
      id:"ai", icon:"🤖", name:"AI & Technology", short:"AI",
      progress:14, desc:"先建立计算机与互联网基础，再进入 LLM、RAG、Agent、MCP 与 AI 产品构建。",
      modules:[
        ["Digital Foundation","计算机、操作系统、程序、客户端与服务器",55],
        ["Internet","IP、DNS、HTTP、HTTPS、URL、Cookie、API、JSON",22],
        ["Programming","Python、数据结构、函数、模块、HTTP、OOP",5],
        ["LLM Foundation","Token、Embedding、Attention、Transformer、Inference",12],
        ["Applied LLM","Prompt、Structured Output、Function Calling、Multimodal",0],
        ["AI Engineering","RAG、Vector DB、Reranking、Evaluation、Guardrails",0],
        ["Agent Engineering","Tool、Planning、Memory、Workflow、MCP",0],
        ["AI Product","AI UX、成本、延迟、SaaS、Automation、创业",0]
      ]
    },
    {
      id:"ec", icon:"🛒", name:"电商学院", short:"Ecommerce",
      progress:11, desc:"从商业模型和选品逻辑出发，重点覆盖日本电商、Amazon JP、Rakuten、Yahoo 等平台。",
      modules:[
        ["Ecommerce Foundation","Marketplace、SKU、GMV、AOV、CVR、Margin、Inventory",46],
        ["Product","需求、品类、选品、竞品、差异化、生命周期",15],
        ["Sourcing","供应商、MOQ、采购、质检、物流、关税",0],
        ["Marketplace","Amazon JP、Rakuten、Yahoo、Mercari、Qoo10",6],
        ["Growth","SEO、广告、CTR、CVR、ROAS、内容营销",0],
        ["Data","销量、广告、库存、利润、竞品与价格监控",0],
        ["Japan Ecommerce","消费者、定价、物流、节日、客服、法规",4]
      ]
    },
    {
      id:"biz", icon:"💼", name:"商业学院", short:"Business",
      progress:9, desc:"训练商业判断力：财务基础、商业模式、单位经济、增长、战略与真实公司案例。",
      modules:[
        ["Business Foundation","收入、成本、利润、毛利、现金流、ROI",41],
        ["Business Model","Marketplace、SaaS、Subscription、DTC、Platform",8],
        ["Economics","CAC、LTV、ARPU、Churn、Unit Economics",0],
        ["Strategy","市场、竞争、定位、护城河、规模效应",0],
        ["Growth","Acquisition、Activation、Retention、Revenue、Referral",0],
        ["Case Study","Amazon、Costco、Uniqlo、Mercari、Rakuten、OpenAI",3]
      ]
    }
  ],
  today:[
    {id:"jp13",course:"jp", icon:"🇯🇵", title:"助词「に・で・へ」", minutes:35, status:"current", type:"lesson"},
    {id:"ai13",course:"ai", icon:"🤖", title:"LLM 为什么需要 Token？", minutes:30, status:"next", type:"lesson"},
    {id:"it13",course:"ai", icon:"💻", title:"HTTP 请求到底发生了什么？", minutes:30, status:"next", type:"lesson"},
    {id:"ec13",course:"ec", icon:"🛒", title:"Amazon Buy Box 的基本机制", minutes:25, status:"next", type:"lesson"},
    {id:"biz13",course:"biz", icon:"💼", title:"什么是单位经济模型？", minutes:25, status:"next", type:"lesson"}
  ],
  lessons:{
    jp13:{
      title:"助词「に・で・へ」", subtitle:"Japanese · Foundation / JLPT N5",
      why:"这三个助词都与地点或方向有关，是初级日语最容易混淆的一组。掌握它们，才能准确表达“去哪里、在哪里做事、在什么时候发生”。",
      concepts:[
        ["に","表示到达点、存在地点、时间点。例：学校に行きます。7時に起きます。"],
        ["で","表示动作发生的场所或手段。例：図書館で勉強します。電車で行きます。"],
        ["へ","强调移动的方向，常与行く・来る・帰る搭配。例：日本へ行きます。"]
      ],
      example:"私は朝7時に起きます。8時に電車で会社へ行きます。会社で日本語を勉強します。",
      mistake:"地点后面不能机械地都用「に」。如果强调“在某处做动作”，通常要用「で」。",
      cards:[
        ["に","到达点 / 存在地点 / 时间点","学校に行く・机の上に本がある・7時に起きる"],
        ["で","动作场所 / 手段","図書館で読む・電車で行く"],
        ["へ","移动方向","日本へ行く"]
      ],
      quiz:{
        q:"「我在咖啡店学习日语」最自然的是哪一句？",
        options:["カフェに日本語を勉強します。","カフェで日本語を勉強します。","カフェへ日本語を勉強します。"],
        answer:1,
        explain:"「学习」是发生在咖啡店这个场所里的动作，因此使用表示动作场所的「で」。"
      }
    },
    ai13:{
      title:"LLM 为什么需要 Token？", subtitle:"AI · LLM Foundation",
      why:"大语言模型并不是直接阅读“单词”或“汉字”，它处理的是 Token 序列。Token 决定上下文长度、成本、推理速度，也影响模型如何理解文本。",
      concepts:[
        ["Token","模型处理文本的基本离散单位。它可能是一个完整单词、词的一部分、一个汉字或标点。"],
        ["Tokenizer","把原始文本转换成 Token ID 序列，再把 Token ID 转回文本的组件。"],
        ["Context Window","模型一次推理可处理的 Token 总量上限，包括输入与输出。"]
      ],
      example:"“ChatGPT 很强”不会被模型直接当成三个概念读取，而会先经过 tokenizer 切分并映射成整数 ID。",
      mistake:"不要把 Token 等同于“单词”。不同语言、不同 tokenizer 的切分方式可能差异很大。",
      cards:[
        ["Token","LLM 处理文本的基本单位","关联：Tokenizer / Context Window / Cost"],
        ["Tokenizer","文本 ↔ Token ID 的转换器","训练与推理必须使用兼容的 tokenizer"],
        ["Context Window","一次推理可处理的 Token 上限","输入、历史消息、工具结果、输出都会占用"]
      ],
      quiz:{
        q:"下面哪项最准确？",
        options:["一个英文单词永远等于一个 Token。","Token 是模型处理文本时使用的离散单位。","Token 只影响模型价格，不影响上下文。"],
        answer:1,
        explain:"Token 是模型的基本文本处理单位，并且会直接影响上下文窗口、计算与成本。"
      }
    },
    it13:{
      title:"HTTP 请求到底发生了什么？", subtitle:"IT · Internet",
      why:"几乎所有网页、API、AI 服务与电商数据抓取都建立在 HTTP 之上。不了解 HTTP，你会长期停留在“会调用工具，但不知道发生了什么”的层面。",
      concepts:[
        ["Request","客户端发送给服务器的请求，通常包含 method、URL、headers 与可选 body。"],
        ["Response","服务器返回 status code、headers 与 body。"],
        ["Method","GET 获取资源；POST 提交数据；PUT/PATCH 更新；DELETE 删除。"]
      ],
      example:"浏览器访问商品页 → DNS 找到服务器 → 建立连接 → 发送 GET 请求 → 服务器返回 HTML → 浏览器解析页面。",
      mistake:"HTTP 不是“互联网本身”。它是应用层协议，依赖底层 DNS、TCP/IP 或 QUIC 等组件。",
      cards:[
        ["HTTP Request","客户端发送的请求","Method + URL + Headers + Body"],
        ["Status Code","服务器对请求结果的标准化表达","200 / 404 / 500 等"],
        ["GET","常用于获取资源","应尽量不产生修改服务器状态的副作用"]
      ],
      quiz:{
        q:"访问一个普通商品详情页时，最常见的 HTTP method 是？",
        options:["GET","DELETE","PATCH"],
        answer:0,
        explain:"读取网页或资源最常见的是 GET。"
      }
    },
    ec13:{
      title:"Amazon Buy Box 的基本机制", subtitle:"Ecommerce · Marketplace",
      why:"同一个 ASIN 可能有多个卖家。谁获得主要“加入购物车”入口，会极大影响成交量，因此 Buy Box 是 Amazon Marketplace 的核心竞争机制之一。",
      concepts:[
        ["Buy Box","商品详情页上的主要购买入口，Amazon 会在符合资格的报价中动态选择。"],
        ["Landed Price","商品价格与配送相关成本共同形成的消费者实际购买成本。"],
        ["Fulfillment","配送方式、履约稳定性与时效会影响报价竞争力。"]
      ],
      example:"两个卖家销售同一 ASIN：A 更便宜但配送慢，B 使用 FBA、库存稳定、配送快。Buy Box 并不必然只给最低价。",
      mistake:"不要把 Buy Box 理解成“最低价自动获胜”。价格重要，但履约、库存、账户表现等也会影响竞争。",
      cards:[
        ["Buy Box","Amazon 商品页主要购买入口","决定主要成交入口归属"],
        ["Landed Price","商品价 + 与购买相关的配送成本","不是只看标价"],
        ["FBA","Amazon 负责仓储与履约","常能改善配送体验，但会产生相应费用"]
      ],
      quiz:{
        q:"关于 Buy Box，哪项更准确？",
        options:["永远由最低价卖家获得。","只与 Review 数量有关。","是多因素动态竞争结果。"],
        answer:2,
        explain:"价格重要，但履约、库存、账户表现等也可能影响结果。"
      }
    },
    biz13:{
      title:"什么是单位经济模型？", subtitle:"Business · Economics",
      why:"如果每新增一个客户或订单都在亏钱，规模越大可能死得越快。单位经济模型用于判断单个客户、订单或商品在经济上是否成立。",
      concepts:[
        ["Unit","你选择分析的最小商业单位，可以是客户、订单、订阅账户或商品。"],
        ["Contribution Margin","单位收入减去与该单位直接相关的变动成本后的贡献。"],
        ["LTV / CAC","长期客户价值与获客成本的关系，是订阅与互联网业务常见判断框架。"]
      ],
      example:"一个订单收入 ¥10,000，商品、物流、平台费、广告等可变成本合计 ¥8,200，则该订单贡献毛利约 ¥1,800。",
      mistake:"不要只看 GMV 或营收。营收增长不能证明商业模型健康。",
      cards:[
        ["Unit Economics","分析单个经济单位是否赚钱","客户 / 订单 / SKU 都可以是 unit"],
        ["Contribution Margin","收入减去相关变动成本","用于判断规模扩大是否创造价值"],
        ["LTV","客户生命周期价值","应与 CAC、毛利和留存共同判断"]
      ],
      quiz:{
        q:"如果每新增一个订单的贡献毛利持续为负，扩大销量通常意味着什么？",
        options:["必然更赚钱","可能扩大亏损","与商业模型完全无关"],
        answer:1,
        explain:"若单位经济持续为负，规模扩大很可能把亏损同步放大。"
      }
    }
  },
  knowledge:[
    ["Token","AI","模型处理文本的基本离散单位",3],
    ["HTTP Request","IT","客户端发送给服务器的请求",3],
    ["に","Japanese","到达点 / 存在地点 / 时间点",2],
    ["で","Japanese","动作发生场所 / 手段",2],
    ["Buy Box","Ecommerce","Amazon 商品页主要购买入口",2],
    ["Unit Economics","Business","判断单个经济单位是否成立",2],
    ["Context Window","AI","一次推理可处理的 Token 范围",1],
    ["Contribution Margin","Business","单位收入减去相关变动成本",1]
  ],
  reviews:[
    ["Token","AI","今天",3],
    ["HTTP Request","IT","今天",3],
    ["に","Japanese","今天",2],
    ["で","Japanese","今天",2],
    ["Buy Box","Ecommerce","明天",2],
    ["Unit Economics","Business","明天",2]
  ],
  projects:[
    {title:"日本 Amazon 商品价格监控器",status:"准备中",progress:18,
     desc:"使用日本语、电商、HTTP、Python 与数据分析知识，构建一个商品价格监控原型。",
     skills:["日本语","HTTP","Python","Amazon","数据分析"]},
    {title:"日本市场产品研究报告",status:"未开始",progress:0,
     desc:"选择一个日本电商品类，完成需求、竞品、价格、利润与市场进入分析。",
     skills:["市场研究","电商","商业","日本语"]}
  ]
};

const STORAGE_KEY = "releo_university_v1";
let state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
state.completed = state.completed || [];
state.quizScores = state.quizScores || {};
state.reviewed = state.reviewed || {};

function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); cloudPushDebounced(); }

// ---------------- Cloud Sync ----------------
// Fully automatic, no login: every device running this exact file talks to
// the same personal backend using the built-in token below. Works only once
// deployed on Cloudflare Pages with /api/state configured (see
// functions/api/state.js + README-CLOUD.md). On plain local hosting or
// file:// it fails silently and the app behaves exactly as local-only.
//
// This token only needs to match the APP_PASSCODE you set in Cloudflare.
// It is not a personal password — anyone with a copy of this file could
// read it, so don't put private/sensitive info in your notes if you share
// this file with anyone.
const CLOUD_TOKEN = "HXCCFNZY8UE7js3bVRbkM_3cQ0IsTICH";
let cloudOnline = false;
let cloudSyncTimer = null;

function updateCloudBadge(){
  const el = document.getElementById("cloudBtn");
  if (!el) return;
  el.textContent = cloudOnline ? "☁️ 已同步" : "☁️ 本机保存（未连接云端）";
}

async function cloudPull(){
  try{
    const res = await fetch("/api/state", { headers: { "x-passcode": CLOUD_TOKEN } });
    if (!res.ok) { cloudOnline = false; return false; }
    const data = await res.json();
    cloudOnline = true;
    if (data.state) {
      state = data.state;
      state.completed = state.completed || [];
      state.quizScores = state.quizScores || {};
      state.reviewed = state.reviewed || {};
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
    return true;
  }catch(e){ cloudOnline = false; return false; }
}

function cloudPushDebounced(){
  clearTimeout(cloudSyncTimer);
  cloudSyncTimer = setTimeout(cloudPush, 800);
}

async function cloudPush(){
  try{
    const res = await fetch("/api/state", {
      method: "PUT",
      headers: { "content-type": "application/json", "x-passcode": CLOUD_TOKEN },
      body: JSON.stringify({ state })
    });
    cloudOnline = res.ok;
  }catch(e){ cloudOnline = false; }
  updateCloudBadge();
}

function $(sel){ return document.querySelector(sel); }
function $all(sel){ return [...document.querySelectorAll(sel)]; }

function pageTitle(name){ $("#pageTitle").textContent = name; }
function setDate(){
  const d = new Date();
  $("#todayDate").textContent = new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",weekday:"short"}).format(d);
  const pct = DATA.semester.day / DATA.semester.total * 100;
  $("#semesterBar").style.width = pct+"%";
  $("#semesterText").textContent = `Day ${DATA.semester.day} / ${DATA.semester.total}`;
}

function renderToday(){
  pageTitle("Today");
  const completedCount = DATA.today.filter(x=>state.completed.includes(x.id)).length;
  const remaining = DATA.today.filter(x=>!state.completed.includes(x.id));
  const current = remaining[0] || DATA.today[0];

  $("#page").innerHTML = `
    <div class="card hero">
      <div class="hero-row">
        <div>
          <div class="muted">Semester 1 · Day ${DATA.semester.day}</div>
          <div class="hero-title" style="margin-top:8px">${remaining.length ? "今天不用选课。系统已经排好顺序。" : "今天的课程已经完成。"}</div>
          <p class="muted">${remaining.length ? `下一课：${current.icon} ${current.title} · ${current.minutes} min` : "复习队列仍可继续处理，也可以查看知识地图与项目。"}</p>
        </div>
        <button class="primary" onclick="${remaining.length ? `openLesson('${current.id}')` : `navigate('review')`}">${remaining.length ? "继续学习" : "进入复习"}</button>
      </div>
    </div>

    <div class="grid grid-4 section">
      <div class="card"><div class="kpi">${completedCount}/${DATA.today.length}</div><div class="kpi-label">今日课程</div></div>
      <div class="card"><div class="kpi">${DATA.reviews.filter(x=>x[2]==='今天').length}</div><div class="kpi-label">今日复习知识</div></div>
      <div class="card"><div class="kpi">${Object.keys(state.quizScores).length}</div><div class="kpi-label">已完成 Quiz</div></div>
      <div class="card"><div class="kpi">${DATA.knowledge.length}</div><div class="kpi-label">知识节点</div></div>
    </div>

    <div class="section">
      <div class="section-head"><h2>今日课程</h2><span class="muted">系统自动编排</span></div>
      <div class="lesson-list">
        ${DATA.today.map((x,i)=>{
          const done = state.completed.includes(x.id);
          const label = done ? "完成" : (x.id===current.id ? "当前" : "等待");
          const cls = done ? "done" : (x.id===current.id ? "current" : "");
          return `<div class="lesson-row">
            <div class="lesson-icon">${x.icon}</div>
            <div><div class="lesson-title">${x.title}</div><div class="lesson-meta">${x.minutes} min · ${DATA.courses.find(c=>c.id===x.course)?.short || ""}</div></div>
            <span class="status ${cls}">${label}</span>
            <button class="secondary" onclick="openLesson('${x.id}')">${done?"复习":"学习"}</button>
          </div>`
        }).join("")}
      </div>
    </div>

    <div class="grid grid-2 section">
      <div class="card">
        <div class="section-head"><h2>今日复习</h2><button class="secondary" onclick="navigate('review')">进入 Review</button></div>
        <p class="muted">复习不是额外任务，而是课程系统的一部分。今天优先处理高遗忘风险知识。</p>
        <div class="timeline">
          ${DATA.reviews.filter(x=>x[2]==="今天").map(x=>`<span class="step">${x[1]} · ${x[0]}</span>`).join("")}
        </div>
      </div>
      <div class="card">
        <div class="section-head"><h2>Semester Project</h2><button class="secondary" onclick="navigate('projects')">查看项目</button></div>
        <div class="lesson-title">日本 Amazon 商品价格监控器</div>
        <p class="muted">把日本语、HTTP、Python、电商与数据分析串成一个真实能力项目。</p>
        <div class="progress-line"><span style="width:18%"></span></div>
      </div>
    </div>
  `;
}

function renderUniversity(){
  pageTitle("University");
  $("#page").innerHTML = `
    <div class="card">
      <div class="section-head"><h2>四大学院</h2><span class="muted">统一课程树 · 统一评估标准</span></div>
      <p class="muted">课程不按兴趣随机推荐，而按前置知识、掌握程度、项目需求与考试结果逐级解锁。</p>
    </div>
    <div class="grid grid-2 section">
      ${DATA.courses.map(c=>`
        <div class="card course-card" onclick="openCourse('${c.id}')">
          <div class="course-head"><div class="course-icon">${c.icon}</div><span class="tag">${c.progress}%</span></div>
          <div class="course-title">${c.name}</div>
          <div class="course-desc">${c.desc}</div>
          <div class="progress-line"><span style="width:${c.progress}%"></span></div>
          <div class="progress-label">总体掌握度 ${c.progress}%</div>
        </div>
      `).join("")}
    </div>
  `;
}

function openCourse(id){
  const c = DATA.courses.find(x=>x.id===id);
  showModal(`
    <div class="course-icon">${c.icon}</div>
    <h1 style="margin-top:10px">${c.name}</h1>
    <p class="muted">${c.desc}</p>
    <div class="progress-line"><span style="width:${c.progress}%"></span></div>
    <div class="progress-label">总体掌握度 ${c.progress}%</div>
    <hr>
    <h2>课程树</h2>
    ${c.modules.map((m,i)=>`
      <div class="module">
        <div class="module-title">${String(i+1).padStart(2,"0")} · ${m[0]}</div>
        <div class="module-meta">${m[1]}</div>
        <div class="progress-line"><span style="width:${m[2]}%"></span></div>
        <div class="progress-label">${m[2]}%</div>
      </div>
    `).join("")}
  `)
}

function renderKnowledge(){
  pageTitle("Knowledge");
  const groups = [...new Set(DATA.knowledge.map(x=>x[1]))];
  $("#page").innerHTML = `
    <div class="grid grid-4">
      ${groups.map(g=>{
        const count = DATA.knowledge.filter(x=>x[1]===g).length;
        return `<div class="card"><div class="kpi">${count}</div><div class="kpi-label">${g} 知识节点</div></div>`
      }).join("")}
    </div>
    <div class="section">
      <div class="section-head"><h2>Knowledge Graph · 节点视图</h2><span class="muted">V1 先用卡片表达，后续升级为关系图谱</span></div>
      <div class="grid grid-3">
        ${DATA.knowledge.map(k=>`
          <div class="card knowledge-card">
            <span class="tag">${k[1]}</span>
            <h3>${k[0]}</h3>
            <div class="muted">${k[2]}</div>
            <div class="mastery">${[1,2,3,4,5,6].map(n=>`<span class="${n<=k[3]?'on':''}"></span>`).join("")}</div>
            <div class="progress-label">掌握等级 ${k[3]} / 6</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderReview(){
  pageTitle("Review");
  $("#page").innerHTML = `
    <div class="grid grid-3">
      <div class="card"><div class="kpi">${DATA.reviews.filter(x=>x[2]==='今天').length}</div><div class="kpi-label">今日到期</div></div>
      <div class="card"><div class="kpi">${Object.keys(state.reviewed).length}</div><div class="kpi-label">已复习</div></div>
      <div class="card"><div class="kpi">${DATA.reviews.filter(x=>x[2]==='明天').length}</div><div class="kpi-label">明日队列</div></div>
    </div>
    <div class="card section">
      <div class="section-head"><h2>Universal Review Queue</h2><span class="muted">按遗忘风险排序</span></div>
      ${DATA.reviews.map((r,i)=>{
        const done = !!state.reviewed[r[0]];
        return `<div class="review-item">
          <div><div class="lesson-title">${r[0]}</div><div class="lesson-meta">${r[1]} · ${r[2]} · 当前掌握 ${r[3]}/6</div></div>
          <div class="review-actions">
            ${done ? `<span class="status done">已复习</span>` :
              `<button onclick="review('${r[0]}',1)">忘了</button><button onclick="review('${r[0]}',2)">模糊</button><button onclick="review('${r[0]}',3)">记得</button>`}
          </div>
        </div>`
      }).join("")}
    </div>
  `;
}
function review(name,level){ state.reviewed[name]=level; save(); renderReview(); }

function renderExam(){
  pageTitle("Exam");
  $("#page").innerHTML = `
    <div class="card hero">
      <div class="hero-title">考试不是为了记录分数，而是决定你能不能继续学下一层。</div>
      <p class="muted">V1 已实现 Lesson Quiz。Weekly / Module / Semester Exam 将共享同一题库与能力模型。</p>
    </div>
    <div class="grid grid-3 section">
      <div class="card"><h3>Lesson Quiz</h3><p class="muted">每课 1–10 题。已启用。</p><span class="tag">ACTIVE</span></div>
      <div class="card"><h3>Weekly Test</h3><p class="muted">每 7 天覆盖本周课程。</p><span class="status">PLANNED</span></div>
      <div class="card"><h3>Module Exam</h3><p class="muted">未通过则触发补强课，不解锁下一模块。</p><span class="status">PLANNED</span></div>
    </div>
  `;
}

function renderProjects(){
  pageTitle("Projects");
  $("#page").innerHTML = `
    <div class="card">
      <h2>Project Lab</h2>
      <p class="muted">考试证明“记得”，项目证明“会”。项目会跨学院调用知识，并反向影响每日课程优先级。</p>
    </div>
    <div class="grid grid-2 section">
      ${DATA.projects.map(p=>`
        <div class="card project-card">
          <span class="tag">${p.status}</span>
          <div class="project-title" style="margin-top:14px">${p.title}</div>
          <p class="muted">${p.desc}</p>
          <div class="project-meta">${p.skills.map(s=>`<span class="chip">${s}</span>`).join("")}</div>
          <div class="progress-line"><span style="width:${p.progress}%"></span></div>
          <div class="progress-label">项目进度 ${p.progress}%</div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderIntelligence(){
  pageTitle("Intelligence");
  $("#page").innerHTML = `
    <div class="card">
      <h2>现实世界教材</h2>
      <p class="muted">这一页的原则不是“刷新闻”，而是把重要新闻加工成：事实 → 机制 → 风险/机会 → 相关课程 → 知识卡 → Quiz。</p>
    </div>
    <div class="card section">
      ${[
        ["Ecommerce","Amazon JP / Rakuten / Yahoo 等平台变化将转为短课，而不是信息流。"],
        ["AI & Tech","重要模型、产品、协议和开发工具更新会关联到已有知识节点。"],
        ["Business","公司财报、商业模式变化与市场案例将作为 Case Study。"]
      ].map(x=>`<div class="intel-item"><span class="tag">${x[0]}</span><h3 style="margin:10px 0 4px">${x[1]}</h3><div class="muted">实时内容接口将在后续版本接入。</div></div>`).join("")}
    </div>
  `;
}

function renderProgress(){
  pageTitle("Progress");
  const avg = Math.round(DATA.courses.reduce((a,c)=>a+c.progress,0)/DATA.courses.length);
  $("#page").innerHTML = `
    <div class="grid grid-4">
      <div class="card"><div class="kpi">${DATA.knowledge.length}</div><div class="kpi-label">知识节点</div></div>
      <div class="card"><div class="kpi">${avg}%</div><div class="kpi-label">平均课程掌握度</div></div>
      <div class="card"><div class="kpi">${state.completed.length}</div><div class="kpi-label">已完成今日课</div></div>
      <div class="card"><div class="kpi">${Object.keys(state.quizScores).length}</div><div class="kpi-label">Quiz 记录</div></div>
    </div>
    <div class="card section">
      <h2>能力进度</h2>
      ${DATA.courses.map(c=>`
        <div class="module">
          <div class="section-head"><div class="module-title">${c.icon} ${c.name}</div><strong>${c.progress}%</strong></div>
          <div class="progress-line"><span style="width:${c.progress}%"></span></div>
        </div>
      `).join("")}
    </div>
    <div class="card section">
      <h2>V1 的反虚荣指标</h2>
      <p class="muted">不重点展示连续打卡、点击次数或“学习了多少小时”。真正应该增长的是：能识别 → 能理解 → 能解释 → 能应用 → 熟练掌握。</p>
    </div>
  `;
}

function openLesson(id){
  const l = DATA.lessons[id];
  const done = state.completed.includes(id);
  showModal(`
    <div class="lesson-content">
      <div class="eyebrow">${l.subtitle}</div>
      <h1>${l.title}</h1>
      <div class="callout"><strong>为什么值得学</strong><br>${l.why}</div>

      <h2>核心概念</h2>
      ${l.concepts.map(c=>`<div class="module"><div class="module-title">${c[0]}</div><div class="module-meta" style="font-size:14px;line-height:1.65">${c[1]}</div></div>`).join("")}

      <h2>真实例子</h2>
      <div class="example">${l.example}</div>

      <h2>常见误区</h2>
      <div class="callout">${l.mistake}</div>

      <h2>Knowledge Cards</h2>
      <div class="grid grid-3">
        ${l.cards.map(c=>`<div class="card"><span class="tag">CARD</span><h3 style="margin-top:10px">${c[0]}</h3><p class="muted">${c[1]}</p><div class="lesson-meta">${c[2]}</div></div>`).join("")}
      </div>

      <h2>Mini Quiz</h2>
      <div id="quiz-${id}">
        <div class="lesson-title" style="margin-bottom:8px">${l.quiz.q}</div>
        ${l.quiz.options.map((o,i)=>`<button class="quiz-option" onclick="answerQuiz('${id}',${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join("")}
        <div id="quiz-result-${id}"></div>
      </div>

      <hr>
      <button class="primary dark" onclick="completeLesson('${id}')">${done ? "已完成 · 再次标记" : "完成本课"}</button>
    </div>
  `);
}

function answerQuiz(id, idx){
  const q = DATA.lessons[id].quiz;
  const box = document.getElementById(`quiz-${id}`);
  const opts = [...box.querySelectorAll(".quiz-option")];
  opts.forEach((b,i)=>{
    b.disabled = true;
    if(i===q.answer) b.classList.add("correct");
    if(i===idx && idx!==q.answer) b.classList.add("wrong");
  });
  const ok = idx===q.answer;
  state.quizScores[id] = ok ? 100 : 0;
  save();
  document.getElementById(`quiz-result-${id}`).innerHTML =
    `<div class="callout" style="margin-top:10px"><strong>${ok?"正确":"不正确"}</strong><br>${q.explain}</div>`;
}

function completeLesson(id){
  if(!state.completed.includes(id)) state.completed.push(id);
  save(); closeModal(); renderToday();
}

function showModal(content){
  $("#modalContent").innerHTML = content;
  $("#modal").classList.remove("hidden");
}
function closeModal(){ $("#modal").classList.add("hidden"); }

function navigate(page){
  $all(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  const map = {
    today:renderToday, university:renderUniversity, knowledge:renderKnowledge,
    review:renderReview, exam:renderExam, projects:renderProjects,
    intelligence:renderIntelligence, progress:renderProgress
  };
  map[page]();
  window.scrollTo({top:0,behavior:"smooth"});
}

$all(".nav-item").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.page)));
$all("[data-close-modal]").forEach(x=>x.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeModal(); });
$("#resetBtn").addEventListener("click",()=>{ localStorage.removeItem(STORAGE_KEY); location.reload(); });

setDate();
(async () => {
  await cloudPull();
  renderToday();
  updateCloudBadge();
})();

// PWA install + offline cache
let deferredInstallPrompt = null;
const installBtn = document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (installBtn) installBtn.classList.remove('hidden');
});
if (installBtn) installBtn.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installBtn.classList.add('hidden');
});
window.addEventListener('appinstalled', () => {
  if (installBtn) installBtn.classList.add('hidden');
});
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}
