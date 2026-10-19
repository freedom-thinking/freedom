---
pageLayout: home
externalLinkIcon: false
config:
  # 首屏 + 正文全部由 HomeTrace 组件渲染（含那张可以划出墨迹的纸）
  # 想换回主题自带的满屏闪电首屏：把这里换回
  #   - type: hero
  #     full: true
  #     effect: lightning
  #     hero: { name: ..., tagline: ..., text: ..., actions: [...] }
  # 并在 HomeTrace.vue 里删掉 <section class="trace-hero"> 那一段
  - type: custom
---

<HomeTrace />
