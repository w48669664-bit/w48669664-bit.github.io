import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {
  ArrowUpRight, ArrowDown, ArrowRight, ArrowUp, GithubLogo, Sun, Moon,
  List, X, DownloadSimple, Play, CornersOut, Code, TreeStructure,
  ChartLineUp, ChartBar, Check, Copy, GraduationCap, MapPin,
  EnvelopeSimple, Medal, Trophy,
} from '@phosphor-icons/react';
import '@fontsource-variable/manrope';
import {profile, projects, experiences, skills, awards} from './content';
import './styles.css';

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
  return <div className={`metrics ${className}`}>{items.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>;
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
      <div className="contribution-list">{item.contributions.map(c => <section className="contribution" key={c.title}>
        <div className="contribution-heading"><h4>{c.title}</h4><span>{c.label}</span></div>
        <p>{c.description}</p>
        {c.workflow && <ol className="workflow" aria-label="分析工作流">{c.workflow.map((step, i) => <li key={step}>{step}{i < c.workflow.length - 1 && <ArrowRight size={14} aria-hidden="true"/>}</li>)}</ol>}
        {c.result && <p className="contribution-result"><ArrowUpRight size={16} aria-hidden="true"/><span>{c.result}</span></p>}
      </section>)}</div>
      {item.caseStudy && <section className="business-case" aria-labelledby="business-case-title">
        <div className="case-heading"><span>代表业务项目</span><span>{item.caseStudy.period}</span></div>
        <h4 id="business-case-title">{item.caseStudy.title}</h4><p className="case-intro">{item.caseStudy.description}</p>
        <div className="case-steps">{item.caseStudy.steps.map(step => <div key={step.title}><h5>{step.title}</h5><p>{step.text}</p></div>)}</div>
        <Metrics items={item.caseStudy.results} className="case-metrics"/>
      </section>}
    </div>
  </article>;
}
function Project({project: p, openProject}) {
  return <article className="project" id={`project-${p.id}`}>
    <button className={`project-preview preview-${p.id}`} onClick={() => openProject(p)}>
      <div className="preview-heading"><span>{p.english}</span><CornersOut size={18}/></div>
      <div className="screenshot-frame"><img src={photo(p.image)} alt={`${p.name}：${p.imageLabels[0]}`} width="1440" height="1000" loading="lazy"/></div>
      <div className="preview-foot"><span>{p.imageLabels[0]}</span><span>查看项目 <ArrowUpRight size={15}/></span></div>
    </button>
    <div className="project-copy">
      <div className="project-topline"><span>{p.category}</span><span>{p.state}</span></div>
      <h3>{p.name}</h3><p className="project-tagline">{p.tagline}</p><p className="project-description">{p.description}</p>
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
  const openProject = (project, play = false) => { setSlide(0); setVideo(play); setSelected(project); };
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
        <div className="hero-copy"><p className="eyebrow">ABOUT ME</p><div className="hero-name"><h1>谢沛霖<span>Peilin Xie</span></h1><span className="graduate-label">2027 届</span></div>
          <p className="hero-role">数据科学 <span>×</span> AI 应用 <span>×</span> Agent</p>
          <p className="hero-description">以数据理解业务，用 AI 构建解决方案。<br/>在京东科技、eBay 与哈啰出行的实践中，<br className="desktop-break"/>连接策略分析、因果推断与 Agent 工作流。</p>
          <div className="hero-actions"><a href="#experience" className="button primary">查看实习经历 <ArrowDown size={17}/></a><a href={asset('Peilin-Xie-Resume.pdf')} className="text-link" download>下载简历 <DownloadSimple size={18}/></a></div>
          <div className="hero-contact"><span><MapPin size={15}/>上海</span><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={14}/></a></div>
        </div>
        <aside className="education-panel" aria-label="教育背景"><div className="education-heading"><span><GraduationCap size={22} weight="light"/>教育背景</span><span>EDUCATION</span></div>
          <article className="education-school"><div className="school-name"><h2>同济大学</h2><span>2024.09 - 2027.03</span></div><p>经济与管理学院</p><h3>管理科学与工程<small>工业工程与管理硕士</small></h3><div className="education-stats"><div><strong>4.8<span>/ 5.0</span></strong><p>硕士 GPA</p></div><div><strong>Top 1<span>%</span></strong><p>专业排名</p></div></div></article>
          <article className="education-school undergraduate"><div className="school-name"><h2>苏州大学</h2><span>2020.09 - 2024.06</span></div><p>管理学院 / 物流管理与工程</p><div className="undergraduate-stats"><span>GPA <strong>4.0 / 4.0</strong></span><span>专业排名 <strong>1 / 95</strong></span></div><div className="education-note">连续三年专业第一 · 保送同济大学</div></article>
        </aside>
        <div className="profile-summary"><span>关注方向</span><p>AI 应用开发、Agent 工程与数据科学</p><a href="#work">查看实践作品 <ArrowUpRight size={17}/></a></div>
      </section>

      <section id="experience" className="experience-section shell">
        <SectionHeading en="PROFESSIONAL EXPERIENCE" title="实习经历"><p>从分析问题，到推动策略落地。<br/>在真实业务中积累方法，也让 AI 成为工作的一部分。</p></SectionHeading>
        <div className="experience-list">{experiences.map(item => <Experience item={item} key={item.id}/>)}</div>
        <p className="content-source">以上实习职责、项目成果及数据根据个人简历整理。</p>
      </section>

      <section id="skills" className="skills-section"><div className="shell">
        <SectionHeading en="SKILLS & CAPABILITIES" title="技能"><p>以数据分析为基础，<br/>向 AI 应用与 Agent 工程延伸。</p></SectionHeading>
        <div className="skills-layout"><div className="skills-statement"><TreeStructure size={40} weight="light"/><h3>分析、构建，<br/>再验证。</h3><p>将业务理解、数据方法与<br/>AI 工具连接成完整的工作过程。</p><div className="skill-process"><span>理解需求</span><ArrowDown size={16}/><span>构建方案</span><ArrowDown size={16}/><span>验证与迭代</span></div><a href="#work">查看项目实践 <ArrowUpRight size={18}/></a></div>
          <div className="skill-list">{skills.map((s,i) => {const Icon=skillIcons[i];return <article className="skill-item" key={s.title}><div className="skill-icon"><Icon size={24} weight="light"/></div><div><div className="skill-heading"><h3>{s.title}</h3><span>{s.english}</span></div><p>{s.text}</p><ul>{s.items.map(t => <li key={t}>{t}</li>)}</ul><p className="skill-evidence">实践：{s.evidence}</p></div></article>;})}</div>
        </div>
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

      <section id="contact" className="contact-section"><div className="shell contact-inner"><div><p className="eyebrow">CONTACT & RESUME</p><h2>联系与简历</h2><p>更多经历与项目细节，欢迎通过邮件联系。</p></div><div className="contact-links"><div className="email-line"><EnvelopeSimple size={21} weight="light"/><a href={`mailto:${profile.email}`}>{profile.email}</a><button className="icon-button" onClick={copyEmail} aria-label={copied ? '邮箱已复制' : '复制邮箱'}>{copied ? <Check size={18}/> : <Copy size={18}/>}</button><span role="status" className="copy-status">{copied ? '已复制' : ''}</span></div><div className="contact-resources"><a href={asset('Peilin-Xie-Resume.pdf')} download><DownloadSimple size={18}/>下载 PDF 简历<ArrowUpRight size={15}/></a><OutLink href={profile.github}><GithubLogo size={18}/>GitHub</OutLink></div></div></div><footer className="shell"><span>© {new Date().getFullYear()} Peilin Xie</span><span>数据科学 / AI 应用 / Agent</span><a href="#about">回到顶部 <ArrowUp size={15}/></a></footer></section>
    </main>

    <dialog ref={dialog} className="project-dialog" onCancel={closeProject} onClose={() => {if(selected) closeProject();}} onClick={e => {if(e.target===e.currentTarget) closeProject();}} aria-labelledby="dialog-title">
      {selected && <><div className="dialog-header"><div><span>{selected.category}</span><h2 id="dialog-title">{selected.name}</h2></div><button className="icon-button" onClick={closeProject} autoFocus aria-label="关闭项目详情"><X size={23}/></button></div><div className="dialog-content"><div className="dialog-media">{video && selected.video ? <video controls autoPlay playsInline preload="metadata" src={photo(selected.video)} poster={photo(selected.image)} aria-label={`${selected.name}项目演示`}/> : <img src={photo(selected.images[slide])} alt={`${selected.name}：${selected.imageLabels[slide]}`}/>}</div><div className="dialog-media-controls"><span>{video ? '项目演示视频' : selected.imageLabels[slide]}</span><div>{selected.images.length>1 && selected.images.map((_,i) => <button key={i} onClick={() => {setVideo(false);setSlide(i);}} className={slide===i && !video ? 'selected' : ''}>{selected.imageLabels[i]}</button>)}{selected.video && <button className={video ? 'selected' : ''} onClick={() => setVideo(!video)}>{video ? '查看截图' : '播放演示'}</button>}</div></div><div className="dialog-description"><p className="dialog-tagline">{selected.tagline}</p><div className="case-columns"><div><h3>从什么问题出发</h3><p>{selected.problem}</p></div><div><h3>如何实现</h3><p>{selected.approach}</p></div></div><h3>主要能力</h3><ul>{selected.features.map(f => <li key={f}>{f}</li>)}</ul><div className="project-boundary"><h3>当前状态</h3><p>{selected.boundary}</p></div><p className="stack">{selected.stack}</p><div className="dialog-links">{selected.url && <OutLink className="button primary" href={selected.url}>打开在线应用</OutLink>}{selected.repo && <OutLink className="button primary" href={selected.repo}>查看 GitHub 项目</OutLink>}<button className="button secondary" onClick={closeProject}>返回作品集</button></div></div></div></>}
    </dialog>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
