// docs/.vuepress/config.js
import { webpackBundler } from "@vuepress/bundler-webpack";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
var config_default = defineUserConfig({
  base: "/freedom/",
  lang: "zh-CN",
  title: "\u8FF7\u9014\u5C0F\u72D7",
  description: "\u6211\u7684\u4E2A\u4EBA\u535A\u5BA2",
  head: [
    // 配置站点图标
    ["link", { rel: "icon", type: "image/png", href: "smallSheep.svg" }]
  ],
  bundler: webpackBundler(),
  shouldPrefetch: false,
  // 站点较大，页面数量较多时，不建议启用
  theme: plumeTheme({
    // 自定义配置文件路径
    // configFile: path.join(__dirname, 'custom/config.ts'), 
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    hostname: "https://github.com/freedom-thinking/freedom",
    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',
    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,
    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/theme/#cache
     */
    cache: "filesystem",
    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/theme/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // },
    /* 本地搜索, 默认启用 */
    search: { provider: "local" },
    /**
     * Algolia DocSearch
     * 启用此搜索需要将 本地搜索 search 设置为 false
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indices: [''],
    // },
    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    // codeHighlighter: {
    //   twoslash: true, // 启用 twoslash
    //   whitespace: true, // 启用 空格/Tab 高亮
    //   lineNumbers: true, // 启用行号
    // },
    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    // readingTime: true,
    /**
     * markdown
     * @see https://theme-plume.vuejs.press/config/markdown/
     */
    // markdown: {
    //   abbr: true,         // 启用 abbr 语法  *[label]: content
    //   annotation: true,   // 启用 annotation 语法  [+label]: content
    //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
    //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
    //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
    //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
    //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
    //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
    //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
    //   icon: { provider: 'iconify' },        // 启用内置图标语法  ::icon-name::
    //   table: true,        // 启用表格增强容器语法 ::: table
    //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
    //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
    //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
    //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
    //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
    //   demo: true,         // 启用 demo 容器  ::: demo
    //   collapse: true,     // 启用折叠容器  ::: collapse
    //   repl: {             // 启用 代码演示容器
    //     go: true,         // ::: go-repl
    //     rust: true,       // ::: rust-repl
    //     kotlin: true,     // ::: kotlin-repl
    //     python: true,     // ::: python-repl
    //   },
    //   math: {             // 启用数学公式
    //     type: 'katex',
    //   },
    //   chartjs: true,      // 启用 chart.js
    //   echarts: true,      // 启用 ECharts
    //   mermaid: true,      // 启用 mermaid
    //   flowchart: true,    // 启用 flowchart
    //   image: {
    //     figure: true,     // 启用 figure
    //     lazyload: true,   // 启用图片懒加载
    //     mark: true,       // 启用图片标记
    //     size: true,       // 启用图片大小
    //   },
    //   include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
    //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
    // },
    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: true,
    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    // comment: {
    //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
    //   comment: true,
    //   repo: '',
    //   repoId: '',
    //   category: '',
    //   categoryId: '',
    //   mapping: 'pathname',
    //   reactionsEnabled: true,
    //   inputPosition: 'top',
    // },
    /**
     * 资源链接替换
     * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
     */
    // replaceAssets: 'https://cdn.example.com',
    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
    /**
     * 启用 llmstxt 插件，用于为大语言模型提供更友好的内容
     * @see https://theme-plume.vuejs.press/guide/features/llmstxt/
     */
    // llmstxt: {
    //   locale: '/',    // 默认仅为主语言生成 llms 友好内容
    // }
    // 页脚
    footer: "MIT Licensed | Copyright \xA9 2026-\u81F3\u4ECA freedom-thinking",
    displayFooter: true
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovc3R1ZHkvYmxvZy9oZXItYmxvZy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcc3R1ZHlcXFxcYmxvZ1xcXFxoZXItYmxvZ1xcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3N0dWR5L2Jsb2cvaGVyLWJsb2cvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7LyoqXG4gKiBcdTY3RTVcdTc3MEJcdTRFRTVcdTRFMEJcdTY1ODdcdTY4NjNcdTRFODZcdTg5RTNcdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcbiAqIC0gQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9pbnRyby8gXHU5MTREXHU3RjZFXHU4QkY0XHU2NjBFXG4gKiAtIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvdGhlbWUvIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVx1OTg3OVxuICpcbiAqIFx1OEJGN1x1NkNFOFx1NjEwRlx1RkYwQ1x1NUJGOVx1NkI2NFx1NjU4N1x1NEVGNlx1NzY4NFx1NEZFRVx1NjUzOVx1OTBGRFx1NEYxQVx1OTFDRFx1NTQyRiB2dWVwcmVzcyBcdTY3MERcdTUyQTFcdTMwMDJcbiAqIFx1OTBFOFx1NTIwNlx1OTE0RFx1N0Y2RVx1OTg3OVx1NzY4NFx1NjZGNFx1NjVCMFx1NkNBMVx1NjcwOVx1NUZDNVx1ODk4MVx1OTFDRFx1NTQyRiB2dWVwcmVzcyBcdTY3MERcdTUyQTFcdUZGMENcdTVFRkFcdThCQUVcdThCRjdcdTU3MjggYC52dWVwcmVzcy9jb25maWcuanNgIFx1NjU4N1x1NEVGNlx1NEUyRFx1OTE0RFx1N0Y2RVxuICpcbiAqIFx1NzI3OVx1NTIyQlx1NzY4NFx1RkYwQ1x1OEJGN1x1NEUwRFx1ODk4MVx1NTcyOFx1NEUyNFx1NEUyQVx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlx1NEUyRFx1OTFDRFx1NTkwRFx1OTE0RFx1N0Y2RVx1NzZGOFx1NTQwQ1x1NzY4NFx1OTg3OVx1RkYwQ1x1NUY1M1x1NTI0RFx1NjU4N1x1NEVGNlx1NzY4NFx1OTE0RFx1N0Y2RVx1OTg3OVx1NEYxQVx1ODhBQlx1ODk4Nlx1NzZENlxuICovXG5cbmltcG9ydCB7IHdlYnBhY2tCdW5kbGVyIH0gZnJvbSAnQHZ1ZXByZXNzL2J1bmRsZXItd2VicGFjaydcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tICd2dWVwcmVzcydcbmltcG9ydCB7IHBsdW1lVGhlbWUgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1wbHVtZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6ICcvZnJlZWRvbS8nLFxuICBsYW5nOiAnemgtQ04nLFxuICB0aXRsZTogJ1x1OEZGN1x1OTAxNFx1NUMwRlx1NzJENycsXG4gIGRlc2NyaXB0aW9uOiAnXHU2MjExXHU3Njg0XHU0RTJBXHU0RUJBXHU1MzVBXHU1QkEyJyxcblxuICBoZWFkOiBbXG4gICAgLy8gXHU5MTREXHU3RjZFXHU3QUQ5XHU3MEI5XHU1NkZFXHU2ODA3XG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgdHlwZTogJ2ltYWdlL3BuZycsIGhyZWY6ICdzbWFsbFNoZWVwLnN2ZycgfV0sXG4gIF0sXG5cbiAgYnVuZGxlcjogd2VicGFja0J1bmRsZXIoKSxcbiAgc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLCAvLyBcdTdBRDlcdTcwQjlcdThGODNcdTU5MjdcdUZGMENcdTk4NzVcdTk3NjJcdTY1NzBcdTkxQ0ZcdThGODNcdTU5MUFcdTY1RjZcdUZGMENcdTRFMERcdTVFRkFcdThCQUVcdTU0MkZcdTc1MjhcblxuICB0aGVtZTogcGx1bWVUaGVtZSh7XG4gICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU4REVGXHU1Rjg0XG4gICAgLy8gY29uZmlnRmlsZTogcGF0aC5qb2luKF9fZGlybmFtZSwgJ2N1c3RvbS9jb25maWcudHMnKSwgXG4gIFxuICAgIC8qIFx1NkRGQlx1NTJBMFx1NjBBOFx1NzY4NFx1OTBFOFx1N0Y3Mlx1NTdERlx1NTQwRCwgXHU2NzA5XHU1MkE5XHU0RThFIFNFTywgXHU3NTFGXHU2MjEwIHNpdGVtYXAgKi9cbiAgICBob3N0bmFtZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mcmVlZG9tLXRoaW5raW5nL2ZyZWVkb20nLFxuXG4gICAgLyogXHU2NTg3XHU2ODYzXHU0RUQzXHU1RTkzXHU5MTREXHU3RjZFXHVGRjBDXHU3NTI4XHU0RThFIGVkaXRMaW5rICovXG4gICAgLy8gZG9jc1JlcG86ICcnLFxuICAgIC8vIGRvY3NEaXI6ICdkb2NzJyxcbiAgICAvLyBkb2NzQnJhbmNoOiAnJyxcblxuICAgIC8qIFx1OTg3NVx1NTE4NVx1NEZFMVx1NjA2RiAqL1xuICAgIC8vIGVkaXRMaW5rOiB0cnVlLFxuICAgIC8vIGxhc3RVcGRhdGVkOiB0cnVlLFxuICAgIC8vIGNvbnRyaWJ1dG9yczogdHJ1ZSxcbiAgICAvLyBjaGFuZ2Vsb2c6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogXHU3RjE2XHU4QkQxXHU3RjEzXHU1QjU4XHVGRjBDXHU1MkEwXHU1RkVCXHU3RjE2XHU4QkQxXHU5MDFGXHU1RUE2XG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy90aGVtZS8jY2FjaGVcbiAgICAgKi9cbiAgICBjYWNoZTogJ2ZpbGVzeXN0ZW0nLFxuXG4gICAgLyoqXG4gICAgICogXHU0RTNBIG1hcmtkb3duIFx1NjU4N1x1NEVGNlx1ODFFQVx1NTJBOFx1NkRGQlx1NTJBMCBmcm9udG1hdHRlciBcdTkxNERcdTdGNkVcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3RoZW1lLyNhdXRvZnJvbnRtYXR0ZXJcbiAgICAgKi9cbiAgICAvLyBhdXRvRnJvbnRtYXR0ZXI6IHtcbiAgICAvLyAgIHBlcm1hbGluazogdHJ1ZSwgIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NkMzOFx1NEU0NVx1OTRGRVx1NjNBNVxuICAgIC8vICAgY3JlYXRlVGltZTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwXHU1MjFCXHU1RUZBXHU2NUY2XHU5NUY0XG4gICAgLy8gICB0aXRsZTogdHJ1ZSwgICAgICAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTY4MDdcdTk4OThcbiAgICAvLyB9LFxuXG4gICAgLyogXHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyLCBcdTlFRDhcdThCQTRcdTU0MkZcdTc1MjggKi9cbiAgICBzZWFyY2g6IHsgcHJvdmlkZXI6ICdsb2NhbCcgfSxcblxuICAgIC8qKlxuICAgICAqIEFsZ29saWEgRG9jU2VhcmNoXG4gICAgICogXHU1NDJGXHU3NTI4XHU2QjY0XHU2NDFDXHU3RDIyXHU5NzAwXHU4OTgxXHU1QzA2IFx1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMiBzZWFyY2ggXHU4QkJFXHU3RjZFXHU0RTNBIGZhbHNlXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL3NlYXJjaC8jYWxnb2xpYS1kb2NzZWFyY2hcbiAgICAgKi9cbiAgICAvLyBzZWFyY2g6IHtcbiAgICAvLyAgIHByb3ZpZGVyOiAnYWxnb2xpYScsXG4gICAgLy8gICBhcHBJZDogJycsXG4gICAgLy8gICBhcGlLZXk6ICcnLFxuICAgIC8vICAgaW5kaWNlczogWycnXSxcbiAgICAvLyB9LFxuXG4gICAgLyoqXG4gICAgICogU2hpa2kgXHU0RUUzXHU3ODAxXHU5QUQ4XHU0RUFFXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL2NvZGUtaGlnaGxpZ2h0L1xuICAgICAqL1xuICAgIC8vIGNvZGVIaWdobGlnaHRlcjoge1xuICAgIC8vICAgdHdvc2xhc2g6IHRydWUsIC8vIFx1NTQyRlx1NzUyOCB0d29zbGFzaFxuICAgIC8vICAgd2hpdGVzcGFjZTogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4IFx1N0E3QVx1NjgzQy9UYWIgXHU5QUQ4XHU0RUFFXG4gICAgLy8gICBsaW5lTnVtYmVyczogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4XHU4ODRDXHU1M0Y3XG4gICAgLy8gfSxcblxuICAgIC8qIFx1NjU4N1x1N0FFMFx1NUI1N1x1NjU3MFx1N0VERlx1OEJBMVx1MzAwMVx1OTYwNVx1OEJGQlx1NjVGNlx1OTVGNFx1RkYwQ1x1OEJCRVx1N0Y2RVx1NEUzQSBmYWxzZSBcdTUyMTlcdTc5ODFcdTc1MjggKi9cbiAgICAvLyByZWFkaW5nVGltZTogdHJ1ZSxcblxuICAgIC8qKlxuICAgICAqIG1hcmtkb3duXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9tYXJrZG93bi9cbiAgICAgKi9cbiAgICAvLyBtYXJrZG93bjoge1xuICAgIC8vICAgYWJicjogdHJ1ZSwgICAgICAgICAvLyBcdTU0MkZcdTc1MjggYWJiciBcdThCRURcdTZDRDUgICpbbGFiZWxdOiBjb250ZW50XG4gICAgLy8gICBhbm5vdGF0aW9uOiB0cnVlLCAgIC8vIFx1NTQyRlx1NzUyOCBhbm5vdGF0aW9uIFx1OEJFRFx1NkNENSAgWytsYWJlbF06IGNvbnRlbnRcbiAgICAvLyAgIHBkZjogdHJ1ZSwgICAgICAgICAgLy8gXHU1NDJGXHU3NTI4IFBERiBcdTVENENcdTUxNjUgQFtwZGZdKC94eHgucGRmKVxuICAgIC8vICAgY2FuaXVzZTogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjggY2FuaXVzZSBcdThCRURcdTZDRDUgIEBbY2FuaXVzZV0oZmVhdHVyZV9uYW1lKVxuICAgIC8vICAgcGxvdDogdHJ1ZSwgICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTk2OTBcdTc5RDhcdTY1ODdcdTY3MkNcdThCRURcdTZDRDUgISF4eHh4ISFcbiAgICAvLyAgIGJpbGliaWxpOiB0cnVlLCAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGJpbGliaWxpXHU4OUM2XHU5ODkxIFx1OEJFRFx1NkNENSBAW2JpbGliaWxpXShiaWQpXG4gICAgLy8gICB5b3V0dWJlOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSB5b3V0dWJlXHU4OUM2XHU5ODkxIFx1OEJFRFx1NkNENSBAW3lvdXR1YmVdKHZpZGVvX2lkKVxuICAgIC8vICAgYXJ0UGxheWVyOiB0cnVlLCAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgYXJ0UGxheWVyIFx1NjcyQ1x1NTczMFx1ODlDNlx1OTg5MSBcdThCRURcdTZDRDUgQFthcnRQbGF5ZXJdKHVybClcbiAgICAvLyAgIGF1ZGlvUmVhZGVyOiB0cnVlLCAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1XHU5N0YzXHU5ODkxXHU2NzE3XHU4QkZCXHU1MjlGXHU4MEZEIFx1OEJFRFx1NkNENSBAW2F1ZGlvUmVhZGVyXSh1cmwpXG4gICAgLy8gICBpY29uOiB7IHByb3ZpZGVyOiAnaWNvbmlmeScgfSwgICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTE4NVx1N0Y2RVx1NTZGRVx1NjgwN1x1OEJFRFx1NkNENSAgOjppY29uLW5hbWU6OlxuICAgIC8vICAgdGFibGU6IHRydWUsICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTg4NjhcdTY4M0NcdTU4OUVcdTVGM0FcdTVCQjlcdTU2NjhcdThCRURcdTZDRDUgOjo6IHRhYmxlXG4gICAgLy8gICBjb2RlcGVuOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSBjb2RlcGVuIFx1OEJFRFx1NkNENSBAW2NvZGVwZW5dKHVzZXIvc2xhc2gpXG4gICAgLy8gICByZXBsaXQ6IHRydWUsICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSByZXBsaXQgXHU4QkVEXHU2Q0Q1IEBbcmVwbGl0XSh1c2VyL3JlcGwtbmFtZSlcbiAgICAvLyAgIGNvZGVTYW5kYm94OiB0cnVlLCAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGNvZGVTYW5kYm94IFx1OEJFRFx1NkNENSBAW2NvZGVTYW5kYm94XShpZClcbiAgICAvLyAgIGpzZmlkZGxlOiB0cnVlLCAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGpzZmlkZGxlIFx1OEJFRFx1NkNENSBAW2pzZmlkZGxlXSh1c2VyL2lkKVxuICAgIC8vICAgbnBtVG86IHRydWUsICAgICAgICAvLyBcdTU0MkZcdTc1MjggbnBtLXRvIFx1NUJCOVx1NTY2OCAgOjo6IG5wbS10b1xuICAgIC8vICAgZGVtbzogdHJ1ZSwgICAgICAgICAvLyBcdTU0MkZcdTc1MjggZGVtbyBcdTVCQjlcdTU2NjggIDo6OiBkZW1vXG4gICAgLy8gICBjb2xsYXBzZTogdHJ1ZSwgICAgIC8vIFx1NTQyRlx1NzUyOFx1NjI5OFx1NTNFMFx1NUJCOVx1NTY2OCAgOjo6IGNvbGxhcHNlXG4gICAgLy8gICByZXBsOiB7ICAgICAgICAgICAgIC8vIFx1NTQyRlx1NzUyOCBcdTRFRTNcdTc4MDFcdTZGMTRcdTc5M0FcdTVCQjlcdTU2NjhcbiAgICAvLyAgICAgZ286IHRydWUsICAgICAgICAgLy8gOjo6IGdvLXJlcGxcbiAgICAvLyAgICAgcnVzdDogdHJ1ZSwgICAgICAgLy8gOjo6IHJ1c3QtcmVwbFxuICAgIC8vICAgICBrb3RsaW46IHRydWUsICAgICAvLyA6Ojoga290bGluLXJlcGxcbiAgICAvLyAgICAgcHl0aG9uOiB0cnVlLCAgICAgLy8gOjo6IHB5dGhvbi1yZXBsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbWF0aDogeyAgICAgICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTY1NzBcdTVCNjZcdTUxNkNcdTVGMEZcbiAgICAvLyAgICAgdHlwZTogJ2thdGV4JyxcbiAgICAvLyAgIH0sXG4gICAgLy8gICBjaGFydGpzOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOCBjaGFydC5qc1xuICAgIC8vICAgZWNoYXJ0czogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjggRUNoYXJ0c1xuICAgIC8vICAgbWVybWFpZDogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjggbWVybWFpZFxuICAgIC8vICAgZmxvd2NoYXJ0OiB0cnVlLCAgICAvLyBcdTU0MkZcdTc1MjggZmxvd2NoYXJ0XG4gICAgLy8gICBpbWFnZToge1xuICAgIC8vICAgICBmaWd1cmU6IHRydWUsICAgICAvLyBcdTU0MkZcdTc1MjggZmlndXJlXG4gICAgLy8gICAgIGxhenlsb2FkOiB0cnVlLCAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjFEMlx1NTJBMFx1OEY3RFxuICAgIC8vICAgICBtYXJrOiB0cnVlLCAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTY4MDdcdThCQjBcbiAgICAvLyAgICAgc2l6ZTogdHJ1ZSwgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1NkZFXHU3MjQ3XHU1OTI3XHU1QzBGXG4gICAgLy8gICB9LFxuICAgIC8vICAgaW5jbHVkZTogdHJ1ZSwgICAgICAvLyBcdTU3MjggTWFya2Rvd24gXHU2NTg3XHU0RUY2XHU0RTJEXHU1QkZDXHU1MTY1XHU1MTc2XHU0RUQ2IG1hcmtkb3duIFx1NjU4N1x1NEVGNlx1NTE4NVx1NUJCOVxuICAgIC8vICAgaW1hZ2VTaXplOiAnbG9jYWwnLCAvLyBcdTU0MkZcdTc1MjggXHU4MUVBXHU1MkE4XHU1ODZCXHU1MTQ1IFx1NTZGRVx1NzI0N1x1NUJCRFx1OUFEOFx1NUM1RVx1NjAyN1x1RkYwQ1x1OTA3Rlx1NTE0RFx1OTg3NVx1OTc2Mlx1NjI5Nlx1NTJBOFxuICAgIC8vIH0sXG5cbiAgICAvKipcbiAgICAgKiBcdTZDMzRcdTUzNzBcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZ3VpZGUvZmVhdHVyZXMvd2F0ZXJtYXJrL1xuICAgICAqL1xuICAgIC8vIHdhdGVybWFyazogdHJ1ZSxcblxuICAgIC8qKlxuICAgICAqIFx1OEJDNFx1OEJCQSBjb21tZW50c1xuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy9jb21tZW50cy9cbiAgICAgKi9cbiAgICAvLyBjb21tZW50OiB7XG4gICAgLy8gICBwcm92aWRlcjogJycsIC8vIFwiQXJ0YWxrXCIgfCBcIkdpc2N1c1wiIHwgXCJUd2lrb29cIiB8IFwiV2FsaW5lXCJcbiAgICAvLyAgIGNvbW1lbnQ6IHRydWUsXG4gICAgLy8gICByZXBvOiAnJyxcbiAgICAvLyAgIHJlcG9JZDogJycsXG4gICAgLy8gICBjYXRlZ29yeTogJycsXG4gICAgLy8gICBjYXRlZ29yeUlkOiAnJyxcbiAgICAvLyAgIG1hcHBpbmc6ICdwYXRobmFtZScsXG4gICAgLy8gICByZWFjdGlvbnNFbmFibGVkOiB0cnVlLFxuICAgIC8vICAgaW5wdXRQb3NpdGlvbjogJ3RvcCcsXG4gICAgLy8gfSxcblxuICAgIC8qKlxuICAgICAqIFx1OEQ0NFx1NkU5MFx1OTRGRVx1NjNBNVx1NjZGRlx1NjM2MlxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy9yZXBsYWNlLWFzc2V0cy9cbiAgICAgKi9cbiAgICAvLyByZXBsYWNlQXNzZXRzOiAnaHR0cHM6Ly9jZG4uZXhhbXBsZS5jb20nLFxuXG4gICAgLyoqXG4gICAgICogXHU1MkEwXHU1QkM2XHU1MjlGXHU4MEZEXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL2VuY3J5cHRpb24vXG4gICAgICovXG4gICAgLy8gZW5jcnlwdDoge30sXG5cbiAgICAvKipcbiAgICAgKiBcdTU0MkZcdTc1MjggbGxtc3R4dCBcdTYzRDJcdTRFRjZcdUZGMENcdTc1MjhcdTRFOEVcdTRFM0FcdTU5MjdcdThCRURcdThBMDBcdTZBMjFcdTU3OEJcdTYzRDBcdTRGOUJcdTY2RjRcdTUzQ0JcdTU5N0RcdTc2ODRcdTUxODVcdTVCQjlcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZ3VpZGUvZmVhdHVyZXMvbGxtc3R4dC9cbiAgICAgKi9cbiAgICAvLyBsbG1zdHh0OiB7XG4gICAgLy8gICBsb2NhbGU6ICcvJywgICAgLy8gXHU5RUQ4XHU4QkE0XHU0RUM1XHU0RTNBXHU0RTNCXHU4QkVEXHU4QTAwXHU3NTFGXHU2MjEwIGxsbXMgXHU1M0NCXHU1OTdEXHU1MTg1XHU1QkI5XG4gICAgLy8gfVxuXG4gICAgLy8gXHU5ODc1XHU4MTFBXG4gICAgZm9vdGVyOiAnTUlUIExpY2Vuc2VkIHwgQ29weXJpZ2h0IFx1MDBBOSAyMDI2LVx1ODFGM1x1NEVDQSBmcmVlZG9tLXRoaW5raW5nJyxcbiAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuICB9KSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBV0EsU0FBUyxzQkFBc0I7QUFDL0IsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxrQkFBa0I7QUFFM0IsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFFYixNQUFNO0FBQUE7QUFBQSxJQUVKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGFBQWEsTUFBTSxpQkFBaUIsQ0FBQztBQUFBLEVBQ3JFO0FBQUEsRUFFQSxTQUFTLGVBQWU7QUFBQSxFQUN4QixnQkFBZ0I7QUFBQTtBQUFBLEVBRWhCLE9BQU8sV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBLElBS2hCLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaUJWLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYVAsUUFBUSxFQUFFLFVBQVUsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBb0g1QixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsRUFDakIsQ0FBQztBQUNILENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
