# 迷途小狗 · Trace

个人博客：项目复盘、学习笔记、随笔。

- 站点：https://freedom-thinking.github.io/freedom/
- 技术：VuePress 2 + [vuepress-theme-plume](https://theme-plume.vuejs.press/)
- 视觉：自绘「痕迹手账」纸感主题，样式集中在 `docs/.vuepress/theme/styles/custom.css`

## 本地开发

```sh
npm i                 # 安装依赖
npm run docs:dev      # 开发服务器
npm run docs:build    # 生产构建，产物在 docs/.vuepress/dist
npm run docs:preview  # 预览构建产物
```

## 目录

| 路径 | 内容 |
|------|------|
| `docs/README.md` | 首页（由 `HomeTrace.vue` 渲染，不是普通 markdown 页） |
| `docs/project/` | 项目复盘 |
| `docs/personal/` | 随笔 |
| `docs/note/` | 学习笔记（带侧边栏，`sidebar: 'auto'`） |
| `docs/resume/`、`docs/interview/` | 简历与面试相关，导航栏暂时隐藏（**隐藏 ≠ 下线，URL 仍能访问且会进 sitemap**） |
| `docs/.vuepress/` | 站点配置、自定义组件、样式 |

## 写新文章

1. 在对应目录新建 `xxx.md`，frontmatter 至少要有 `title` 和 `permalink`
2. 图片放同级 `static/` 下，用 `<img src="./static/xxx.png" alt="...">` 引用（别漏 alt）
3. 首页的项目卡片和「最近的痕迹」是 `HomeTrace.vue` 里手写的数组，新文章要手动加进去

## 部署

推送到 `main` 触发 `.github/workflows/deploy.yml`，构建产物发布到 **`blog-pages`** 分支（不是 `gh-pages`）。

首次配置需要在仓库里设两处：

- `Settings → Actions → General → Workflow permissions` 选 **Read and write permissions**
- `Settings → Pages → Build and deployment` 的 Source 选 **Deploy from a branch**，Branch 选 **`blog-pages`**

`base` 在 `docs/.vuepress/config.js` 顶部统一声明为 `/freedom/`，同时作用于站点路径和 favicon 等手写资源路径，换部署位置只改这一处。

## 依赖说明

`three` / `ogl` / `postprocessing` 是 plume 主题的 peerDependencies（用于可选的 WebGL 背景特效）。当前站点没用任何特效组件，保留是为了将来启用特效时不因缺依赖而构建失败。
