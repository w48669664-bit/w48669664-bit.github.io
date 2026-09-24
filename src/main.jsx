import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {
  ArrowUpRight, ArrowDown, ArrowRight, ArrowLeft, ArrowUp, GithubLogo, Sun, Moon,
  List, X, DownloadSimple, Play, CornersOut, Code, TreeStructure,
  ChartLineUp, ChartBar, Check, Copy, GraduationCap, MapPin,
  EnvelopeSimple, Medal, Trophy,
} from '@phosphor-icons/react';
import '@fontsource-variable/manrope';
import {profile, projects, experiences, skills, techStack, awards} from './content';
import './styles.css';
import './profile.css';

const asset = path => `${import.meta.env.BASE_URL}${path}`;
const photo = path => asset(`projects/${path}`);
const nav = [['关于我','about'],['实习经历','experience'],['技能','skills'],['作品集','work'],['荣誉奖项','honors']];
const skillIcons = [Code, TreeStructure, ChartLineUp, ChartBar];

function OutLink({href, children, className = ''}) {
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}<ArrowUpRight size={17}/></a>;
}
function SectionHeading({en, title, children}) {
  return <div className="section-heading"><div><p className="eyebrow">{en}</p><h2>{title}</h2></div>{children && <div className="section-intro">{children}</div>}</div>;
}
function Metrics({items, className = ''}) {
  return <div className={`metrics ${className}`}>{items.map(item => <div key={item.label}><span className="metric-label">{item.label}</span><strong>{item.value}</strong>{item.note && <small>{item.note}</small>}</div>)}</div>;
}
function Experience({item}) {
  return <article className={`experience-entry experience-${item.id}`} id={`experience-${item.id}`}>
    <aside className="company-profile">
      <div className={`company-logo company-logo-${item.id}`}><img src={asset(`companies/${item.logo}`)} alt={`${item.company}标志`} loading="lazy"/></div>
      <h3>{item.company}</h3>
      <p className="company-role">{item.role}</p>
      <p className="company-team">{item.team}</p>
      <div className="company-period"><span>{item.date}</span><span>{item.location}</span></div>
      <div className="company-focus">{item.focus.map(f => <span key={f}>{f}</span>)}</div>
    </aside>
    <div className="experience-content">
      <p className="experience-lead">{item.intro}</p>
      {item.metrics && <Metrics items={item.metrics}/>}
      {item.comparison && <div className="effect-comparison" aria-label="延迟登录的人群差异"><div className="effect-title"><span>同一策略，不同人群</span><strong>延迟登录的异质性效果</strong></div>{item.comparison.map(group => <div className="effect-group" key={group.audience}><span>{group.audience}</span><strong>{group.positive ? <ArrowUpRight size={23}/> : <ArrowDown size={23}/>} {group.direction}</strong><p>{group.description}</p></div>)}<p className="effect-note">方向性结论来自简历中的因果森林分析。</p></div>}
      <div className="contribution-list">{item.contributions.map(c => <section className="contribution" key={c.title}>
        <div className="contribution-heading"><h4>{c.title}</h4><span>{c.label}</span></div>
        <div className="contribution-body">{c.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
        {c.workflow && <ol className="workflow" aria-label="分析工作流">{c.workflow.map((step, i) => <li key={step}>{step}{i < c.workflow.length - 1 && <ArrowRight size={14} aria-hidden="true"/>}</li>)}</ol>}
        {c.result && <div className="contribution-result"><span><Check size={17} weight="bold" aria-hidden="true"/>项目成果</span><p>{c.result}</p></div>}
      </section>)}</div>
      {item.caseStudy && <section className="business-case" aria-labelledby="business-case-title">
        <div className="case-heading"><span>代表业务项目</span><span>{item.caseStudy.period}</span></div>
        <h4 id="business-case-title">{item.caseStudy.title}</h4><p className="case-intro">{item.caseStudy.description}</p>
        <div className="case-steps">{item.caseStudy.steps.map(step => <div key={step.title}><h5>{step.title}</h5><p>{step.text}</p></div>)}</div>
        <Metrics items={item.caseStudy.results} className="case-metrics"/>
        <p className="case-conclusion">{item.caseStudy.conclusion}</p>
      </section>}
    </div>
  </article>;
}
function Project({project: p, openProject}) {
  const [currentImage, setCurrentImage] = useState(0);
  const touchStart = useRef(null);
  const changeImage = step => setCurrentImage(current => (current + step + p.images.length) % p.images.length);
  return <article className="project" id={`project-${p.id}`}>
    <div className="project-gallery" role="region" aria-roledescription="轮播图" aria-label={`${p.name}产品界面`}>
      <div className="gallery-top"><span>{p.english}</span><button className="gallery-expand" onClick={() => openProject(p, false, currentImage)} aria-label={`放大${p.name}当前截图`}><CornersOut size={19}/><span>放大</span></button></div>
      <div className="gallery-stage" tabIndex={0} aria-label="产品截图，使用左右方向键翻页" onKeyDown={event => {if(event.key === 'ArrowRight' || event.key === 'ArrowLeft'){event.preventDefault();changeImage(event.key === 'ArrowRight' ? 1 : -1);}}} onTouchStart={event => {touchStart.current={x:event.touches[0].clientX,y:event.touches[0].clientY};}} onTouchEnd={event => {if(!touchStart.current)return;const dx=event.changedTouches[0].clientX-touchStart.current.x;const dy=event.changedTouches[0].clientY-touchStart.current.y;if(Math.abs(dx)>45 && Math.abs(dx)>Math.abs(dy))changeImage(dx<0?1:-1);touchStart.current=null;}} onTouchCancel={() => {touchStart.current=null;}}>
        <img key={p.images[currentImage]} src={photo(p.images[currentImage])} alt={`${p.name}：${p.imageLabels[currentImage]}`} width="1440" height="960" loading="lazy" draggable="false"/>
      </div>
      <div className="gallery-controls"><button className="gallery-arrow" onClick={() => changeImage(-1)} aria-label={`${p.name}上一张`}><ArrowLeft size={21}/></button><div className="gallery-caption" aria-live="polite" aria-atomic="true"><span>{p.imageLabels[currentImage]}</span><small>{String(currentImage + 1).padStart(2,'0')} <i>/</i> {String(p.images.length).padStart(2,'0')}</small></div><button className="gallery-arrow" onClick={() => changeImage(1)} aria-label={`${p.name}下一张`}><ArrowRight size={21}/></button></div>
      <div className="gallery-progress" role="group" aria-label={`${p.name}选择截图`}>{p.images.map((image,i)=><button key={image} className={currentImage===i?'selected':''} aria-label={`查看${p.name}第${i+1}张：${p.imageLabels[i]}`} aria-pressed={currentImage===i} onClick={()=>setCurrentImage(i)}><span/></button>)}</div>
    </div>
    <div className="project-copy">
      <div className="project-topline"><span>{p.category}</span><span>{p.state}</span></div>
      <h3>{p.name}</h3><p className="project-tagline">{p.tagline}</p><p className="project-description">{p.description}</p>
      <div className="project-features">{p.details.map(detail => <div key={detail.title}><h4>{detail.title}</h4><p>{detail.text}</p></div>)}</div>
      <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
      <div className="project-links"><button className="text-link" onClick={() => openProject(p)}>项目详情 <ArrowUpRight size={18}/></button>{p.url && <OutLink href={p.url}>在线体验</OutLink>}{p.repo && <OutLink href={p.repo}><GithubLogo size={16}/>源码</OutLink>}{p.video && <button className="text-link muted" onClick={() => openProject(p, true)}><Play size={15}/>演示视频</button>}</div>
    </div>
  </article>;
}
function App() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  const [filter, setFilter] = useState('全部');
  const [selected, setSelected] = useState(null);
  const [slide, setSlide] = useState(0);
  const [video, setVideo] = useState(false);
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState('about');
  const dialog = useRef(null);
  const copyTimer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, {rootMargin:'-15% 0px -60% 0px'});
    document.querySelectorAll('main > section[id]').forEach(e => observer.observe(e));
    return () => { observer.disconnect(); clearTimeout(copyTimer.current); };
  }, []);
  useEffect(() => {
    if (selected) { dialog.current?.showModal(); document.body.style.overflow = 'hidden'; }
    else { dialog.current?.close(); document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);
  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)');
    const update = e => {
      try { if (localStorage.getItem('peilin-theme')) return; } catch {}
      const next = e.matches ? 'dark' : 'light';
      setTheme(next); document.documentElement.dataset.theme = next;
    };
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (!menu) return;
    const closeOnEscape = e => { if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menu]);
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next); document.documentElement.dataset.theme = next;
    try { localStorage.setItem('peilin-theme', next); } catch {}
  };
  const openProject = (project, play = false, initialSlide = 0) => { setSlide(initialSlide); setVideo(play); setSelected(project); };
  const closeProject = () => { setSelected(null); setVideo(false); };
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email); setCopied(true); clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2200);
    } catch { window.location.href = `mailto:${profile.email}`; }
  };
  const visible = filter === '全部' ? projects : projects.filter(p => p.category === filter);

  return <>
    <a className="skip-link" href="#main">跳到主要内容</a>
    <header className="site-header"><div className="nav-shell">
      <a href="#about" className="brand"><span className="brand-mark">px<span>.</span></span><span className="brand-name">谢沛霖<span>PEILIN XIE</span></span></a>
      <nav id="site-navigation" className={menu ? 'navigation is-open' : 'navigation'} aria-label="主导航">
        {nav.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => {setMenu(false); setActive(id);}} aria-current={active === id ? 'location' : undefined}>{label}</a>)}
      </nav>
      <div className="nav-actions"><button className="icon-button" onClick={toggleTheme} aria-label={theme === 'light' ? '切换为深色模式' : '切换为浅色模式'}>{theme === 'light' ? <Moon size={19}/> : <Sun size={19}/>}</button><a className="resume-nav" href={asset('Peilin-Xie-Resume.pdf')} target="_blank" rel="noreferrer">PDF 简历 <ArrowUpRight size={16}/></a><button className="icon-button menu-toggle" aria-label={menu ? '关闭导航' : '打开导航'} aria-expanded={menu} aria-controls="site-navigation" onClick={() => setMenu(!menu)}>{menu ? <X size={22}/> : <List size={22}/>}</button></div>
    </div></header>
    <main id="main">
      <section id="about" className="about-section shell">
        <div className="hero-copy">
          <div className="hero-kicker"><span>个人简历 · 作品集</span><span>2027 届</span></div>
          <div className="hero-identity">
          <div className="hero-name"><h1>谢沛霖<span>Peilin Xie</span></h1></div>
        <figure className="hero-portrait"><img src={asset('portrait.jpg')} alt="谢沛霖正装证件照" width="1780" height="2359" fetchPriority="high"/><figcaption><span>PEILIN XIE</span><span>同济大学 · 2027 届</span></figcaption></figure>
          </div>
          <p className="hero-role">数据科学 <span>×</span> AI 应用 <span>×</span> Agent</p>
          <p className="hero-description">{profile.introduction}</p>
          <div className="hero-actions"><a href="#experience" className="button primary">了解我的经历 <ArrowDown size={17}/></a><a href={asset('Peilin-Xie-Resume.pdf')} className="text-link" download>下载完整简历 <DownloadSimple size={18}/></a></div>
          <div className="hero-contact"><span><MapPin size={15}/>上海</span><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={14}/></a></div>
        </div>
        <aside className="academic-panel" aria-label="教育背景">
          <div className="academic-heading"><GraduationCap size={21} weight="light"/><h2>教育背景</h2></div>
          <article className="academic-school">
            <div className="academic-identity"><div className="school-emblem"><img src={asset('schools/tongji.png')} width="56" height="56" alt="同济大学校徽"/></div><div><h3>同济大学 <span>（985）</span></h3><p>经济与管理学院</p></div><span className="degree-label">硕士</span></div>
            <div className="academic-major"><h4>管理科学与工程</h4><p>工业工程与管理硕士</p><time>2024.09 - 2027.03</time></div>
            <div className="academic-results"><div><span>硕士 GPA</span><strong>4.8 <small>/ 5.0</small></strong></div><div><span>专业排名</span><strong>Top 1<small>%</small></strong></div></div>
          </article>
          <article className="academic-school">
            <div className="academic-identity"><div className="school-emblem"><img src={asset('schools/soochow.webp')} width="56" height="56" alt="苏州大学校徽"/></div><div><h3>苏州大学 <span>（211）</span></h3><p>管理学院</p></div><span className="degree-label">本科</span></div>
            <div className="academic-major"><h4>管理科学与工程</h4><time>2020.09 - 2024.06</time></div>
            <div className="academic-results"><div><span>本科 GPA</span><strong>4.0 <small>/ 4.0</small></strong></div><div><span>专业排名</span><strong>1 <small>/ 95</small></strong></div></div>
            <p className="academic-distinction"><Medal size={20}/><strong>连续三年专业第一</strong><span>保送同济大学</span></p>
            <div className="academic-awards"><p><Medal size={17}/><span>本科生国家奖学金 · 苏州大学学业特等奖学金</span></p><p><Trophy size={17}/><span>美国大学生数学建模竞赛<br/><strong>F 题特等奖提名奖 · 队长 · 全球前 1%</strong></span></p></div>
          </article>
            <div className="core-courses"><h3>核心课程</h3><p>高级运筹学、优化理论、多元统计、Python 基础、数据库原理、机器学习算法、系统工程与方法</p></div>
        </aside>
        <div className="personal-profile">
          <div className="strengths-heading"><h2>能力优势</h2><p>连接业务理解、数据方法与产品实践。</p></div>
          <div className="strengths-list">{profile.strengths.map((item, i) => {const Icon = skillIcons[i];return <article key={item.title}><Icon size={23} weight="light"/><h3>{item.title}</h3><p>{item.text}</p></article>;})}</div>
          <div className="self-evaluation"><h2>自我评价</h2><div>{profile.selfEvaluation.map(text=><p key={text}>{text}</p>)}</div></div>
        </div>
      </section>

      <section id="experience" className="experience-section shell">
        <SectionHeading en="PROFESSIONAL EXPERIENCE" title="实习经历"><p>从分析问题，到推动策略落地。<br/>在真实业务中积累方法，也让 AI 成为工作的一部分。</p></SectionHeading>
        <div className="experience-list">{experiences.map(item => <Experience item={item} key={item.id}/>)}</div>
        <p className="content-source">以上实习职责、项目成果及数据根据个人简历整理。</p>
      </section>

      <section id="skills" className="skills-section"><div className="shell">
        <SectionHeading en="SKILLS & CAPABILITIES" title="技能"><p>以数据分析为基础，<br/>向 AI 应用与 Agent 工程延伸。</p></SectionHeading>
        <div className="skills-layout"><div className="skills-statement"><TreeStructure size={40} weight="light"/><h3>从定义问题，<br/>到交付结果。</h3><p>以业务目标为起点，让数据分析、模型实验与 AI 工程形成一条可以复核、持续改进的工作路径。</p><ol className="method-steps">{[{title:'定义问题',text:'明确目标、人群与约束，统一数据口径，选择能够支持决策的核心指标。'},{title:'分析与验证',text:'通过数据探索、实验设计和因果推断，区分相关性与真实增量，解释人群差异。'},{title:'构建与交付',text:'把有效方法沉淀为脚本、Skill 或应用，连接工具与上下文，完成可运行的交付。'},{title:'复盘与迭代',text:'检查数据质量、使用体验和业务结果，记录取舍，持续优化策略与工作流程。'}].map((step,i)=><li key={step.title}><span>{String(i+1).padStart(2,'0')}</span><div><h4>{step.title}</h4><p>{step.text}</p></div></li>)}</ol><a href="#work">查看项目实践 <ArrowUpRight size={18}/></a></div>
          <div className="skill-list">{skills.map((s,i) => {const Icon=skillIcons[i];return <article className="skill-item" key={s.title}><div className="skill-icon"><Icon size={24} weight="light"/></div><div><div className="skill-heading"><h3>{s.title}</h3><span>{s.english}</span></div><p>{s.text}</p><ul>{s.items.map(t => <li key={t}>{t}</li>)}</ul><p className="skill-evidence">实践：{s.evidence}</p></div></article>;})}</div>
        </div>
        <section className="tech-stack" aria-labelledby="tech-stack-title"><div className="tech-stack-heading"><h3 id="tech-stack-title">技术栈</h3><p>从数理分析到应用开发，把方法落实到具体工具。</p></div><div className="tech-stack-grid">{techStack.map(group=><article key={group.title}><h4>{group.title}</h4><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
      </div></section>

      <section id="work" className="work-section shell">
        <SectionHeading en="SELECTED PROJECTS" title="作品集"><p>从具体需求出发，完成可以运行的产品。<br/>以 AI 应用与 Agent 协作为核心的个人开发实践。</p></SectionHeading>
        <div className="filter-bar" aria-label="作品分类">{['全部','AI 应用','Agent','数据工具'].map(item => <button key={item} className={filter === item ? 'selected' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item==='全部' && <span>{projects.length}</span>}</button>)}<span className="filter-note">VIBE CODING & BUILDING</span></div>
        <div className="project-list">{visible.map(p => <Project key={p.id} project={p} openProject={openProject}/>)}</div>
      </section>

      <section id="honors" className="honors-section shell">
        <SectionHeading en="HONORS & AWARDS" title="荣誉与奖项"><p>学业积累与竞赛实践。</p></SectionHeading>
        <div className="honors-grid">{[{id:'scholarship',name:'学业与奖学金',icon:Medal},{id:'competition',name:'竞赛荣誉',icon:Trophy}].map(group => {const Icon=group.icon;return <div className="honor-group" key={group.id}><div className="honor-group-heading"><Icon size={23} weight="light"/><h3>{group.name}</h3></div><div>{awards.filter(a => a.group === group.id).map(a => <article className={a.featured ? 'honor-item featured' : 'honor-item'} key={a.title}><div><h4>{a.title}</h4>{a.prize && <strong>{a.prize}</strong>}</div><span>{a.type}</span></article>)}</div></div>;})}</div>
        <div className="certificates"><span className="certificate-label">证书与语言</span><div><span>ACCA 高级商业会计证书</span><span>IELTS <strong>6.5</strong></span><span>CET-6 <strong>568</strong></span><span>CET-4 <strong>588</strong></span></div></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-inner">
          <div className="contact-copy"><p className="eyebrow">CONTACT & RESUME</p><h2>联系与简历</h2><p>如果你正在寻找兼具数据分析能力与 AI 应用实践的伙伴，欢迎进一步了解我的经历与作品。</p><p>关于岗位机会、项目实现或技术交流，可以通过邮件联系我。</p><div className="contact-profile"><span>谢沛霖 · 2027 届</span><span>同济大学硕士 · 上海</span></div><div className="contact-topics"><span>数据科学</span><span>AI 应用</span><span>Agent 工程</span></div></div>
          <div className="contact-links">
            <div className="contact-row"><EnvelopeSimple size={24} weight="light"/><div><span>邮件联系</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div><button className="icon-button" onClick={copyEmail} aria-label={copied ? '邮箱已复制' : '复制邮箱'}>{copied ? <Check size={19}/> : <Copy size={19}/>}</button><span role="status" className="copy-status">{copied ? '已复制' : ''}</span></div>
            <a className="contact-row resource-row" href={asset('Peilin-Xie-Resume.pdf')} download><DownloadSimple size={24} weight="light"/><div><span>完整经历与项目成果</span><strong>下载 PDF 简历</strong></div><ArrowUpRight size={22}/></a>
            <a className="contact-row resource-row" href={profile.github} target="_blank" rel="noreferrer"><GithubLogo size={24} weight="light"/><div><span>代码、实践与持续迭代</span><strong>在 GitHub 查看我的项目</strong></div><ArrowUpRight size={22}/></a>
          </div>
        </div>
        <footer className="shell"><span>© {new Date().getFullYear()} Peilin Xie</span><span>数据科学 / AI 应用 / Agent</span><a href="#about">回到顶部 <ArrowUp size={15}/></a></footer>
      </section>
    </main>

    <dialog ref={dialog} className="project-dialog" onCancel={closeProject} onClose={() => {if(selected) closeProject();}} onClick={e => {if(e.target===e.currentTarget) closeProject();}} aria-labelledby="dialog-title">
      {selected && <><div className="dialog-header"><div><span>{selected.category}</span><h2 id="dialog-title">{selected.name}</h2></div><button className="icon-button" onClick={closeProject} autoFocus aria-label="关闭项目详情"><X size={23}/></button></div><div className="dialog-content"><div className="dialog-media">{video && selected.video ? <video controls autoPlay playsInline preload="metadata" src={photo(selected.video)} poster={photo(selected.image)} aria-label={`${selected.name}项目演示`}/> : <img src={photo(selected.images[slide])} alt={`${selected.name}：${selected.imageLabels[slide]}`}/>}</div><div className="dialog-media-controls"><span>{video ? '项目演示视频' : selected.imageLabels[slide]}</span><div>{selected.images.length>1 && selected.images.map((_,i) => <button key={i} onClick={() => {setVideo(false);setSlide(i);}} className={slide===i && !video ? 'selected' : ''}>{selected.imageLabels[i]}</button>)}{selected.video && <button className={video ? 'selected' : ''} onClick={() => setVideo(!video)}>{video ? '查看截图' : '播放演示'}</button>}</div></div><div className="dialog-description"><p className="dialog-tagline">{selected.tagline}</p><div className="case-columns"><div><h3>从什么问题出发</h3><p>{selected.problem}</p></div><div><h3>如何实现</h3><p>{selected.approach}</p></div></div><h3>主要能力</h3><ul>{selected.features.map(f => <li key={f}>{f}</li>)}</ul><div className="project-boundary"><h3>当前状态</h3><p>{selected.boundary}</p></div><p className="stack">{selected.stack}</p><div className="dialog-links">{selected.url && <OutLink className="button primary" href={selected.url}>打开在线应用</OutLink>}{selected.repo && <OutLink className="button primary" href={selected.repo}>查看 GitHub 项目</OutLink>}<button className="button secondary" onClick={closeProject}>返回作品集</button></div></div></div></>}
    </dialog>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
