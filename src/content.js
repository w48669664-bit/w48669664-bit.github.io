export const profile = {name:'谢沛霖',english:'Peilin Xie',email:'xiepeilin123@sina.cn',github:'https://github.com/w48669664-bit'};
export const projects = [
 {id:'lumiframe',name:'智帧华象',english:'Lumiframe',category:'AI 应用',tagline:'让一个想法，成为一段看得见的表达。',description:'从一句话到分镜、配音与动画，把创作过程放进一个可以持续编辑的工作室。让复杂知识的表达，不再止于一段文字。',image:'lumiframe.webp',images:['lumiframe.webp','lumiframe-editor.webp'],imageLabels:['创作展厅','动画剪辑台'],tags:['多模态创作','分镜编排','视频导出'],state:'独立应用',url:'https://lumiframe-dxps.onrender.com',background:'#e7e5e0',problem:'内容创作需要在脚本、画面、配音和剪辑工具间反复切换，修改一个想法往往意味着重做多个环节。',approach:'将文本生成、分镜规划、语音合成与时间线编辑串成一个工作流。支持逐镜修改源码和画面，按真实配音时长组织动画，再通过浏览器与 FFmpeg 渲染导出。',features:['SVG 动效、HTML 讲解短片与交互网页创作','分镜、源码、图层、配音与时间线编辑','SVG / HTML / PNG / GIF / MP4 / WebM 导出'],boundary:'在线服务使用免费实例，首次打开可能需要等待唤醒。复杂视频的生成与渲染耗时取决于作品规模。',stack:'React / TypeScript / Node.js / Chromium / FFmpeg'},
 {id:'workrelay',name:'WorkRelay',english:'工作接力',category:'Agent',tagline:'项目变了，工作也能接得上。',description:'围绕同一份项目记录，连接会议、反馈、需求变更与交付。比较方案、追溯影响、确认修复，让 Agent 协作有依据，也有边界。',image:'workrelay.webp',images:['workrelay.webp'],imageLabels:['决策工作台'],tags:['MCP','项目上下文','可追溯决策'],state:'开源项目',repo:'https://github.com/w48669664-bit/WorkRelay',video:'workrelay-demo.mp4',background:'#e3ece6',problem:'需求散落在会议、聊天与文档中，项目发生变化后，团队很难准确判断哪些任务和交付需要同步更新。',approach:'把来源、要求、任务和文档连接起来。共享领域引擎通过网页与 MCP 提供能力，先展示变化及影响，再由用户确认应用，并保存版本和工作断点。',features:['有来源的方案比较与变更影响分析','文档修复、任务依赖与交付一致性检查','工作断点恢复、项目交接与导出'],boundary:'当前为本地项目工作台，包含 Alexa+ 方向的规则引导体验模拟；未连接真实 Alexa 服务。',stack:'React / TypeScript / Node.js / MCP SDK'},
 {id:'collagent',name:'Colla Agent',english:'多 Agent 协作工作台',category:'Agent',tagline:'不只让 Agent 协作，还让过程清晰可见。',description:'为 Codex 与 Antigravity 的协作提供同一个观察窗口。把实施、独立审查、验证和交接串起来，让每轮迭代都可以回看。',image:'collagent.webp',images:['collagent.webp'],imageLabels:['协作过程与产物工作台'],tags:['Agentic Engineering','独立审查','过程回放'],state:'开源项目',repo:'https://github.com/w48669664-bit/colla-agent',background:'#e8e9f0',problem:'多个 Agent 一起工作时，责任划分、修改权限和停止条件容易变得模糊，最终结果也难以复核。',approach:'保持 Codex 为唯一实现者，让 Antigravity 承担只读规划与审查。记录公开活动、命令、验证与交接，并设置轮次上限及明确停止条件。',features:['唯一写入者与独立只读审查','按轮展示公开活动、验证证据和交接','网页、图片、文档等真实产物预览'],boundary:'本地优先，需要相应 CLI 环境。展示的是公开活动摘要和工具输出，不是模型私有思维链。',stack:'React / TypeScript / Local broker / Agent CLI'},
 {id:'xiange',name:'弦歌',english:'吉他和弦工作室',category:'AI 应用',tagline:'从听见一首歌，到试着弹出来。',description:'为自己的吉他练习做一个工具：上传音频，分析调性与基础和弦，把歌词、指法和播放位置放在一起，边听边校对。',image:'xiange.webp',images:['xiange.webp'],imageLabels:['和弦与歌词练习工作室'],tags:['浏览器音频分析','和弦识别','Whisper'],state:'应用原型',background:'#e9e7e0',problem:'会弹基础和弦，却不容易从一首歌中听出调性和每句对应的和弦。',approach:'在浏览器 Worker 内提取音高特征，结合和弦模板、平滑算法与调性估计生成草稿。分开处理原调与演奏指法，并允许编辑歌词时间和和弦结果。',features:['本地音频解码、调性与基础和弦估计','变调夹建议、吉他指法与慢速播放','歌词时间校准与可选本地 Whisper 识词'],boundary:'自动分析结果为练习草稿，需要人工听辨校正；复杂和声、转调和人声会影响结果。',stack:'React / Web Audio / Web Worker / Meyda / Transformers.js'},
 {id:'review-desk',name:'交易复盘台',english:'Portfolio Review Desk',category:'数据工具',tagline:'把一张截图，变成有依据的复盘。',description:'从持仓截图到结构化账簿，再到仓位、风险与盈亏归因。通过本地 OCR 和人工核对，让每个指标都有明确来源。',image:'review-desk.webp',images:['review-desk.webp'],imageLabels:['复盘看板 · 合成示例数据'],tags:['本地 OCR','数据校验','风险可视化'],state:'本地应用',background:'#e0e7ed',problem:'账户信息留在零散截图中，手动录入成本高，长期收益与风险口径也容易混乱。',approach:'截图解析先进入待确认草稿，保留来源、置信度与修改记录。确认后写入 SQLite，再通过确定性计算生成持仓、净值和风险视图。',features:['截图去重、OCR 草稿与逐字段核对','净值、回撤、持仓分布与盈亏归因','本地存储、审计记录与一致性备份'],boundary:'展示为合成示例数据。本地应用不连接券商、不提供下单能力；当前版本使用 OCR 与规则计算，未启用 AI 服务。',stack:'React / Python / SQLite / OCR'},
 {id:'flowquant',name:'FlowQuant',english:'A 股主力资金图谱',category:'数据工具',tagline:'让资金流向，成为可以阅读的时间线。',description:'将板块资金流向放进同一条盘中时间轴。结合图表、焦点板块和行情回放，探索金融数据更直观的表达方式。',image:'flowquant.webp',images:['flowquant.webp'],imageLabels:['资金流向可视化终端'],tags:['数据可视化','行情回放','市场观察'],state:'可视化原型',background:'#e2e8ec',problem:'多个板块的资金流向分散在表格里，很难直观比较流入流出与变化节奏。',approach:'围绕统一交易时间轴组织资金曲线、板块焦点和回放控制，保留数据来源、日期与模拟状态提示。',features:['板块资金流入流出与时间光标联动','重点板块观察和盘中回放交互','真实数据与回退演示状态区分'],boundary:'原型依赖公开数据可用性；截图中的数据仅展示界面，不代表实时行情或投资建议。',stack:'HTML / CSS / JavaScript / Canvas'}
];
export const experiences = [
 {
  id:'jd',company:'京东科技',english:'JD Technology',logo:'jdt.svg',role:'数据分析师',team:'平台量化策略组',date:'2026.03 - 2026.08',location:'北京',
  focus:['Multi-Agent','Uplift 建模','增长策略'],
  intro:'将数据分析能力产品化，连接智能工作流、人群策略与业务增长。',
  contributions:[
   {title:'Multi-Agent 自动化分析工作流',label:'AI 应用实践',description:'针对日常取数繁琐、异动归因耗时长、建模流程重复的问题，构建从自然语言需求到数据洞察的 Multi-Agent 系统。将 SQL 提数、PSM、Uplift、XGBoost / 随机森林特征选择封装为标准化 Skill，串联取数、建模、异动归因和结果解读。',result:'常规取数响应效率提升 85%，异动分析与报告生成周期缩短 75%。',workflow:['自然语言需求','SQL 取数','建模与归因','结果解读']},
   {title:'首页活跃场域差异化流量分发',label:'策略建模与实验',description:'面对签到场景下的人群重叠、流量失衡与补贴低效，主导复杂人群分层与收敛。引入 LightGBM 构建 Uplift 模型，量化现金、业务钩子及活动权益的增量转化；设计算法、人工、随机三轨 A/B 实验，验证模型收益并推动全量上线。',result:'低频用户活跃度提升 15%–20%，流量分发整体 ROI 提升 17%。'},
   {title:'大 V 价值评估与创作者分层',label:'用户价值分析',description:'应用 XGBoost 构建创作者差异化补贴与流量分发模型，识别高留存价值作者；引入随机森林测算创作者 LTV 转化价值（R² = 0.61），支持资源分配与精细化运营。',result:'流量与补贴差异化分发的投放精准度提升 20%。'}
  ],
  metrics:[{value:'+85%',label:'常规取数响应效率'},{value:'−75%',label:'异动分析与报告周期'},{value:'+17%',label:'流量分发 ROI'}],
  caseStudy:{title:'社区直播场域重构',period:'2026.03 - 2026.06',description:'推动京东金融社区视频 Tab 向专业财经直播场域转型，兼顾内容定位、社区活跃与留存。',steps:[{title:'规模测算与实验设计',text:'交叉分析视频与直播用户画像，识别约 1/4–1/3 的潜在迁移用户。自主编写 SQL 哈希与加盐取模分桶逻辑，经 AA 校验与最小样本量计算后，启动 10% 灰度 A/B 实验。'},{title:'异质性归因与策略迭代',text:'使用 Causal Forest 发现不同人群的效果差异：持仓超过 1 万元的交易用户，日均停留时长提升 25%、跟投转化率提升 3.2pp。协同算法强化高潜人群推荐，联合运营补充低净值用户的入门内容与激励。'}],results:[{value:'+2.1pp',label:'社区次日留存'},{value:'+35%',label:'直播 Tab 渗透率'},{value:'近 60%',label:'大 V 跟投 GMV 环比增长'}]}
 },
 {
  id:'ebay',company:'eBay',english:'eBay',logo:'ebay.svg',role:'数据科学实习生',team:'中国数据分析中心 CAC',date:'2025.08 - 2026.02',location:'上海',
  focus:['A/B 实验','Causal Forest','用户体验'],
  intro:'用因果推断识别用户差异，为跨境业务的产品策略提供依据。',
  contributions:[
   {title:'用户登录链路优化与策略评估',label:'产品实验',description:'针对跨境业务新客占比超过 70%、前置登录引发结算流失的问题，主导延迟登录策略的效果评估。设计 A/B 实验，对比延迟登录与原前置登录方案，评估登录时机对结算链路的影响。'},
   {title:'新老用户的异质性处理效应分析',label:'因果推断',description:'使用 Causal Forest 因果森林分析新老用户在结算链路中的异质性处理效应（HTE），量化延迟登录对新用户的正向增益与对老用户的负面影响。',result:'为平台落地差异化登录策略提供数据支撑，避免仅依据整体平均效果做统一决策。'}
  ]
 },
 {
  id:'hello',company:'哈啰出行',english:'Hello Inc.',logo:'hello.png',role:'数据分析师',team:'四轮顺风车事业部',date:'2025.03 - 2025.08',location:'上海',
  focus:['渠道增长','合成控制法','补贴优化'],
  intro:'从获客成本到补贴增量，评估每一份投入带来的实际价值。',
  contributions:[
   {title:'获客渠道结构与预算优化',label:'增长分析',description:'针对外部获客渠道占比达 45%、投放结构需要优化的问题，收集各渠道 CAC 数据、估算用户 LTV 与潜在 ROI，制定按 ROI 排序的每两周预算微调策略。',result:'外部获客渠道整体 ROI 从 1.5 提升至 1.8，获客 CPC 下降 8%。'},
   {title:'新车主首单补贴优化实验',label:'因果推断',description:'考虑同城补贴敏感性及传统 A/B 实验可能违反 SUTVA 假设的问题，使用合成控制法（SCM）选取新一线城市构成权重池，经高维特征权重寻优构建虚拟对照组。测算 30 / 40 / 50 元补贴下的平均处理效应与边际 ROI。',result:'识别 40 元补贴的收益拐点，推动试点城市首单完成率达到 80%，7 日留存提升至 55%。'}
  ],
  metrics:[{value:'1.5 → 1.8',label:'外部获客渠道 ROI'},{value:'−8%',label:'获客 CPC'},{value:'80%',label:'试点城市首单完成率'}]
 }
];
export const skills = [
 {title:'AI 应用开发',english:'AI Application Development',text:'从需求拆解、原型搭建到功能验证，借助 AI 编程工具将想法转化为可运行的应用。',items:['Vibe Coding / Codex','React / TypeScript','多模态集成 / Whisper / TTS','Git / GitHub / 网页部署'],evidence:'智帧华象、弦歌与个人应用开发'},
 {title:'Agent 与工作流设计',english:'Agentic Engineering',text:'设计角色分工、上下文与工具接口，将可复用能力封装成 Skill，让工作过程可追溯、可审查。',items:['Multi-Agent 协作','MCP / Skill 封装','上下文管理 / 结构化输出','独立审查 / 验证闭环'],evidence:'京东分析工作流、WorkRelay、Colla Agent'},
 {title:'数据科学与因果推断',english:'Data Science & Causal Inference',text:'围绕业务问题，结合实验与机器学习评估策略增量，识别不同人群的异质性收益。',items:['SQL / Python / Pandas / NumPy','A/B 实验 / PSM / SCM','Uplift / Causal Forest','LightGBM / XGBoost / 随机森林'],evidence:'京东科技、eBay 与哈啰出行实习'},
 {title:'分析表达与业务协作',english:'Analytics & Communication',text:'建立清晰的指标口径，用可视化与结果解读支持决策，将分析结论转化为可执行的建议。',items:['Tableau / Power BI / Excel','Matplotlib / 数据可视化','指标体系 / 用户分层 / LTV','英语工作沟通 / IELTS 6.5'],evidence:'增长分析、策略复盘与数据产品实践'}
];
export const awards = [
 {title:'本科生国家奖学金',type:'国家级奖学金',group:'scholarship',featured:true},
 {title:'苏州大学学业特等奖学金',type:'校级奖学金',group:'scholarship'},
 {title:'苏州大学创新创业特等奖学金',type:'校级奖学金',group:'scholarship'},
 {title:'黄贤亨捐助类奖学金',type:'捐助类奖学金',group:'scholarship'},
 {title:'美国大学生数学建模竞赛',prize:'F 题特等奖提名奖',type:'国际竞赛 / 队长',group:'competition',featured:true},
 {title:'华数杯全国大学生数学建模竞赛',prize:'全国特等奖',type:'全国竞赛',group:'competition'},
 {title:'全国大学生市场调研大赛',prize:'全国三等奖',type:'全国竞赛',group:'competition'},
 {title:'挑战杯全国大学生课外学术科技作品竞赛',prize:'省级三等奖',type:'省级竞赛',group:'competition'}
];
