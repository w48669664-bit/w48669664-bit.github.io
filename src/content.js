export const profile = {name:'谢沛霖',english:'Peilin Xie',email:'xiepeilin123@sina.cn',github:'https://github.com/w48669664-bit'};
export const projects = [
 {id:'lumiframe',name:'智帧华象',english:'Lumiframe',category:'AI 应用',tagline:'让一个想法，成为一段看得见的表达。',description:'从一句话到分镜、配音与动画，把创作过程放进一个可以持续编辑的工作室。让复杂知识的表达，不再止于一段文字。',image:'lumiframe.webp',images:['lumiframe.webp','lumiframe-editor.webp'],imageLabels:['创作展厅','动画剪辑台'],tags:['多模态创作','分镜编排','视频导出'],state:'独立应用',url:'https://lumiframe-dxps.onrender.com',background:'#e7e5e0',problem:'内容创作需要在脚本、画面、配音和剪辑工具间反复切换，修改一个想法往往意味着重做多个环节。',approach:'将文本生成、分镜规划、语音合成与时间线编辑串成一个工作流。支持逐镜修改源码和画面，按真实配音时长组织动画，再通过浏览器与 FFmpeg 渲染导出。',features:['SVG 动效、HTML 讲解短片与交互网页创作','分镜、源码、图层、配音与时间线编辑','SVG / HTML / PNG / GIF / MP4 / WebM 导出'],boundary:'在线服务使用免费实例，首次打开可能需要等待唤醒。复杂视频的生成与渲染耗时取决于作品规模。',stack:'React / TypeScript / Node.js / Chromium / FFmpeg'},
 {id:'workrelay',name:'WorkRelay',english:'工作接力',category:'Agent',tagline:'项目变了，工作也能接得上。',description:'围绕同一份项目记录，连接会议、反馈、需求变更与交付。比较方案、追溯影响、确认修复，让 Agent 协作有依据，也有边界。',image:'workrelay.webp',images:['workrelay.webp'],imageLabels:['决策工作台'],tags:['MCP','项目上下文','可追溯决策'],state:'开源项目',repo:'https://github.com/w48669664-bit/WorkRelay',video:'workrelay-demo.mp4',background:'#e3ece6',problem:'需求散落在会议、聊天与文档中，项目发生变化后，团队很难准确判断哪些任务和交付需要同步更新。',approach:'把来源、要求、任务和文档连接起来。共享领域引擎通过网页与 MCP 提供能力，先展示变化及影响，再由用户确认应用，并保存版本和工作断点。',features:['有来源的方案比较与变更影响分析','文档修复、任务依赖与交付一致性检查','工作断点恢复、项目交接与导出'],boundary:'当前为本地项目工作台，包含 Alexa+ 方向的规则引导体验模拟；未连接真实 Alexa 服务。',stack:'React / TypeScript / Node.js / MCP SDK'},
 {id:'collagent',name:'Colla Agent',english:'多 Agent 协作工作台',category:'Agent',tagline:'不只让 Agent 协作，还让过程清晰可见。',description:'为 Codex 与 Antigravity 的协作提供同一个观察窗口。把实施、独立审查、验证和交接串起来，让每轮迭代都可以回看。',image:'collagent.webp',images:['collagent.webp'],imageLabels:['协作过程与产物工作台'],tags:['Agentic Engineering','独立审查','过程回放'],state:'开源项目',repo:'https://github.com/w48669664-bit/colla-agent',background:'#e8e9f0',problem:'多个 Agent 一起工作时，责任划分、修改权限和停止条件容易变得模糊，最终结果也难以复核。',approach:'保持 Codex 为唯一实现者，让 Antigravity 承担只读规划与审查。记录公开活动、命令、验证与交接，并设置轮次上限及明确停止条件。',features:['唯一写入者与独立只读审查','按轮展示公开活动、验证证据和交接','网页、图片、文档等真实产物预览'],boundary:'本地优先，需要相应 CLI 环境。展示的是公开活动摘要和工具输出，不是模型私有思维链。',stack:'React / TypeScript / Local broker / Agent CLI'},
 {id:'xiange',name:'弦歌',english:'吉他和弦工作室',category:'AI 应用',tagline:'从听见一首歌，到试着弹出来。',description:'为自己的吉他练习做一个工具：上传音频，分析调性与基础和弦，把歌词、指法和播放位置放在一起，边听边校对。',image:'xiange.webp',images:['xiange.webp'],imageLabels:['和弦与歌词练习工作室'],tags:['浏览器音频分析','和弦识别','Whisper'],state:'应用原型',background:'#e9e7e0',problem:'会弹基础和弦，却不容易从一首歌中听出调性和每句对应的和弦。',approach:'在浏览器 Worker 内提取音高特征，结合和弦模板、平滑算法与调性估计生成草稿。分开处理原调与演奏指法，并允许编辑歌词时间和和弦结果。',features:['本地音频解码、调性与基础和弦估计','变调夹建议、吉他指法与慢速播放','歌词时间校准与可选本地 Whisper 识词'],boundary:'自动分析结果为练习草稿，需要人工听辨校正；复杂和声、转调和人声会影响结果。',stack:'React / Web Audio / Web Worker / Meyda / Transformers.js'},
 {id:'review-desk',name:'交易复盘台',english:'Portfolio Review Desk',category:'数据工具',tagline:'把一张截图，变成有依据的复盘。',description:'从持仓截图到结构化账簿，再到仓位、风险与盈亏归因。通过本地 OCR 和人工核对，让每个指标都有明确来源。',image:'review-desk.webp',images:['review-desk.webp'],imageLabels:['复盘看板 · 合成示例数据'],tags:['本地 OCR','数据校验','风险可视化'],state:'本地应用',background:'#e0e7ed',problem:'账户信息留在零散截图中，手动录入成本高，长期收益与风险口径也容易混乱。',approach:'截图解析先进入待确认草稿，保留来源、置信度与修改记录。确认后写入 SQLite，再通过确定性计算生成持仓、净值和风险视图。',features:['截图去重、OCR 草稿与逐字段核对','净值、回撤、持仓分布与盈亏归因','本地存储、审计记录与一致性备份'],boundary:'展示为合成示例数据。本地应用不连接券商、不提供下单能力；当前版本使用 OCR 与规则计算，未启用 AI 服务。',stack:'React / Python / SQLite / OCR'},
 {id:'flowquant',name:'FlowQuant',english:'A 股主力资金图谱',category:'数据工具',tagline:'让资金流向，成为可以阅读的时间线。',description:'将板块资金流向放进同一条盘中时间轴。结合图表、焦点板块和行情回放，探索金融数据更直观的表达方式。',image:'flowquant.webp',images:['flowquant.webp'],imageLabels:['资金流向可视化终端'],tags:['数据可视化','行情回放','市场观察'],state:'可视化原型',background:'#e2e8ec',problem:'多个板块的资金流向分散在表格里，很难直观比较流入流出与变化节奏。',approach:'围绕统一交易时间轴组织资金曲线、板块焦点和回放控制，保留数据来源、日期与模拟状态提示。',features:['板块资金流入流出与时间光标联动','重点板块观察和盘中回放交互','真实数据与回退演示状态区分'],boundary:'原型依赖公开数据可用性；截图中的数据仅展示界面，不代表实时行情或投资建议。',stack:'HTML / CSS / JavaScript / Canvas'}
];
export const explorations = [
 {name:'CourtEdge',type:'预测市场原型',text:'探索 NBA 裁判特征与预测市场信号的可视化，包含信号列表、历史表现和模拟扫描。当前界面使用模拟数据与模拟执行，不代表真实收益。',repo:'https://github.com/w48669664-bit/court-edge'},
 {name:'Scheduled',type:'微信小程序',text:'围绕时间线的日程管理，探索任务拆分、排期预览、依赖检查、番茄钟与日周月视图。采用 Taro、React 与 TypeScript。'},
 {name:'Flavorie / 评价精灵',type:'AI 内容工具',text:'面向用餐记录的微信小程序，探索菜品图片分析、评价草稿生成与历史记录。通过云函数连接生成能力，内容仍需使用者核实。'},
 {name:'LocalMotion Studio',type:'营销工作室原型',text:'面向精品健身与康复工作室，将营销活动内容、线索记录和 Remotion 视频预览放在同一工作界面。'},
 {name:'Lumina',type:'品牌网页与视频',text:'AI 视频与联盟营销主题的品牌页面设计，探索首页表达、产品叙事和配套 Remotion 宣传视频。'},
 {name:'交易复盘工作台 2.0',type:'本地数据应用',text:'以 macOS Vision 完成截图 OCR，结合账户勾稽、每日快照、风险规则与明日执行卡，探索个人交易记录的自动化整理。'},
 {name:'Dream Museum',type:'交互网页实验',text:'围绕梦境与展览主题的独立交互页面，探索叙事、视觉氛围与浏览体验。'},
 {name:'Snake Game',type:'网页游戏实验',text:'用浏览器实现经典贪吃蛇玩法，练习游戏状态、键盘交互与即时反馈。'}
];
export const experiences = [
 {company:'京东科技',english:'JD Technology',role:'数据分析师',team:'平台量化策略组',date:'2026.03 — 2026.08',text:'从人群分层到策略实验，再把重复分析流程封装成 Agent 能力。',details:['使用 LightGBM Uplift 模型评估不同权益的增量转化，设计算法、人工与随机分发三轨 A/B 实验。','构建创作者价值评估与分层体系，使用 XGBoost、随机森林辅助资源分配。','将 SQL、PSM、Uplift 与归因能力封装为 Skill，组织取数、建模、归因和结果解读工作流。'],metric:'流量分发 ROI +17%',metric2:'常规取数响应效率 +85%'},
 {company:'eBay',english:'eBay',role:'数据科学实习生',team:'中国数据分析中心 CAC',date:'2025.08 — 2026.02',text:'用实验与因果推断，理解同一个产品策略对不同用户的影响。',details:['设计延迟登录与前置登录的 A/B 实验，评估跨境业务用户结算链路。','使用 Causal Forest 分析新老用户的异质性处理效应，为差异化登录策略提供依据。'],metric:'A/B 实验',metric2:'异质性处理效应 HTE'},
 {company:'哈啰出行',english:'Hello',role:'数据分析师',team:'四轮顺风车事业部',date:'2025.03 — 2025.08',text:'把获客预算与补贴策略，建立在可量化的增量价值之上。',details:['结合 CAC、LTV 与潜在 ROI，制定获客渠道预算微调策略。','使用合成控制法构建虚拟对照组，评估不同新车主首单补贴水平的处理效应与边际 ROI。'],metric:'渠道 ROI 1.5 → 1.8',metric2:'获客 CPC −8%'}
];
export const skills = [
 {title:'从想法到可用产品',english:'Vibe Coding',text:'把需求拆成可验证的小步骤，借助 Codex 等 AI 编程工具完成原型、交互实现、调试与迭代。',items:['需求拆解与产品原型','React / TypeScript 应用实践','GitHub 与网页部署'],evidence:'智帧华象 / 弦歌'},
 {title:'让 Agent 有序协作',english:'Agentic Engineering',text:'设计角色边界、上下文与工具接口，让 Agent 的工作过程可追溯、可复核，也可以及时停止。',items:['MCP 工具接口与 Skill 封装','多 Agent 分工、审查与验证','上下文管理与工作流编排'],evidence:'WorkRelay / Colla Agent'},
 {title:'把 AI 接进真实流程',english:'AI Application',text:'将文本、音频、图像与代码能力组织成具体工作流，关注输出质量、失败反馈和人的校验环节。',items:['提示词与结构化输出设计','分镜生成、TTS 与视频渲染','Whisper / OCR 应用集成'],evidence:'智帧华象 / 交易复盘台'},
 {title:'让决策有数据依据',english:'Data Science',text:'从业务指标出发，结合实验、因果推断与机器学习，识别策略对不同人群的真实增量。',items:['SQL / Python / Pandas / scikit-learn','A/B 实验 / PSM / Uplift / 因果森林','LightGBM / XGBoost / 可视化'],evidence:'京东科技 / eBay / 哈啰出行'}
];
export const awards = [
 ['本科生国家奖学金','国家级奖学金'],
 ['美国大学生数学建模竞赛 F 题特等奖提名奖','国际竞赛 / 队长'],
 ['华数杯全国大学生数学建模竞赛全国特等奖','全国竞赛'],
 ['全国大学生市场调研大赛全国三等奖','全国竞赛'],
 ['挑战杯全国大学生课外学术科技作品竞赛省级三等奖','省级竞赛'],
 ['苏州大学学业特等奖学金','校级奖学金'],
 ['苏州大学创新创业特等奖学金','校级奖学金'],
 ['黄贤亨捐助类奖学金','捐助类奖学金']
];
