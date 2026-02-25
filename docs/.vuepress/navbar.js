/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.js` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '个人随笔', link: '/personal/'},
  { text: '简历编写', link: '/resume/' },
  { text: '面试技巧', link: '/interview/' },
  {
    text: '学习笔记',
    items: [{ text: '示例', link: '/demo/README.md' }]
  },
])
