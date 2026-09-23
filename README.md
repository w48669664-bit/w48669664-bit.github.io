# Peilin Xie | 个人作品集

谢沛霖的个人主页，展示 AI 应用、Agent 工作流与数据科学实践。

## 本地预览

需要 Node.js 22.12+。

```sh
npm ci
npm run dev
```

访问 http://127.0.0.1:4321 。生产构建：`npm run build`，产物位于 `dist/`。

## 修改内容

- `src/content.js`：个人信息、重点项目、探索项目、实习、技能和奖项。
- `src/main.jsx`：页面结构及项目详情交互。
- `src/styles.css`：响应式布局、深浅色主题和动效。
- `public/projects/`：真实项目截图与 WorkRelay 演示视频。
- `public/Peilin-Xie-Resume.pdf`：用户提供的完整简历。

## 发布

GitHub Pages 使用 `.github/workflows/deploy.yml`，推送到 `main` 自动构建发布。所有资产使用相对路径，兼容根站点和项目子路径。GitHub 仓库设置中的 Pages 来源应为 GitHub Actions。

本站为静态作品集，不运行项目的后端或调用模型接口。项目详情说明当前能力与限制；代码按钮只链接已公开仓库。

## 内容来源

教育和实习根据个人简历整理，奖项根据本人补充；项目说明依据对应本地项目的 README 与代码。交易复盘台截图来自原项目的合成示例演示，不包含个人持仓数据。WorkRelay 视频为原项目已有演示。

参考：[GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。
