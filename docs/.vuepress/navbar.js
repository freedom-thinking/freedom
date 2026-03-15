/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.js` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '项目', link: '/project/' },
  { text: '随笔', link: '/personal/' },
  { text: '面试', link: '/interview/' },
  { text: '简历', link: '/resume/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [
      { text: '示例', link: '/note/README.md' },
      { text: 'Node.js', link: '/note/Node.js/README.md' },
      { text: '博客网站搭建', link: '/note/零基础如何搭建个人博客网站/README.md' },
      { text: 'JAVA', link: '/note/JAVA/README.md' },
      { text: 'CAD入门', link: '/note/CAD入门/README.md' },
      { text: '单片机', link: '/note/单片机/README.md' },
    ]
  },
])
