<script setup>
/**
 * 首页正文区块（「痕迹手账」布局）
 * ---------------------------------------------------------------
 * 改文案 / 换项目 / 换最近文章，直接改下面这几个数组就行，
 * 模板和样式不用动。样式在 theme/styles/custom.css 里。
 */
import HomeInk from './HomeInk.vue'
import HomeHorse from './HomeHorse.vue'
import { ref } from 'vue'

const inked = ref(false)

// 02 做过的东西
const projects = [
  {
    title: '加油鸭考研平台',
    to: '/project/vjhjstw5/',
    year: '2025',
    kind: '全栈',
    desc: '查院校、刷题、计划打卡、资料分享、论坛，想让人少打开几个 App。踩过跨域、预检请求和 SPA 路由回退。',
    tags: ['Vue', 'SpringBoot', 'MySQL'],
  },
  {
    title: '教师工作量管理系统',
    to: '/project/ruxbt4co/',
    year: '2025',
    kind: '前端',
    desc: '把课时、论文、带班、指导这些零散的事，学期末一次性算清。我负责页面和接口对接。',
    tags: ['Vue3', 'Element Plus'],
  },
  {
    title: '跑腿小程序',
    to: '/project/a31sk4ar/',
    year: '2024',
    kind: '小程序',
    desc: '取快递、带饭、买东西——把「想找人帮忙」和「愿意赚点零花钱」接起来。',
    tags: ['uni-app', '微信小程序'],
  },
  {
    title: '红色影院小程序',
    to: '/project/4eh0tzs8/',
    year: '2024',
    kind: '小程序',
    desc: '课程设计。排片、约场次、活动报名，顺带一点党史内容，把小程序知识点串了一遍。',
    tags: ['微信小程序'],
  },
  {
    title: '学成在线',
    to: '/project/1qv0sgbp/',
    year: '2025',
    kind: '跟练复盘',
    desc: '跟着教程做的在线教育平台。不为写代码，想知道企业级项目到底怎么从 0 走到 1。',
    tags: ['SpringCloud', '微服务'],
  },
]

// 03 最近写的
const notes = [
  {
    title: '慢即是快',
    to: '/personal/vm826x6p/',
    date: '2026.03.26',
    excerpt: '网课开 2 倍速、跳过实操，最后花了两倍时间倒回去补。',
  },
  {
    title: '加油鸭考研平台',
    to: '/project/vjhjstw5/',
    date: '2026.02.27',
    excerpt: '把五件事塞进一个网站，然后跟部署较劲的一整段日子。',
  },
  {
    title: '疑似 2026 朝我开了第一枪',
    to: '/personal/mlo3kryu/',
    date: '2026.02.26',
    excerpt: '蚂蚱、麻将、胡闹厨房，和一个躲在房间里哭完的自己。',
  },
]

</script>

<template>
  <div class="trace-home">
    <!-- ── 首屏 ───────────────────────────────────────────── -->
    <section class="trace-hero">
      <div class="trace-hero__inner">
        <div class="trace-hero__text">
          <p class="trace-eyebrow">
            Trace · 迷途小狗
          </p>
          <h1 class="trace-h1">
            一路走来，<br>总得留下点痕迹
          </h1>
          <p class="trace-hero__lead">
            项目、笔记，还有一些不太像技术博客的碎碎念，都留在这里。
          </p>
          <div class="trace-hero__actions">
            <RouterLink class="trace-btn trace-btn--brand" to="/project/">
              看项目
            </RouterLink>
            <RouterLink class="trace-btn" to="/personal/">
              读随笔
            </RouterLink>
            <a
              class="trace-btn"
              href="https://github.com/freedom-thinking"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div class="trace-hero__art">
          <figure class="trace-paper">
            <span class="trace-paper__tape" aria-hidden="true" />
            <span class="trace-paper__note" aria-hidden="true">
              <span>不写下来</span><span>就会忘</span>
            </span>
            <HomeInk @ink="inked = true" />
            <span class="trace-paper__seal" aria-hidden="true">痕迹</span>
            <figcaption class="trace-paper__cap">
              INK · 01
            </figcaption>
          </figure>
          <p class="trace-hint" :class="{ 'is-done': inked }">
            <span class="trace-hint__dash" aria-hidden="true" />
            把鼠标放上来，划一笔
          </p>
        </div>
      </div>
    </section>

    <!-- ── 01 关于我 ───────────────────────────────────────── -->
    <section class="trace-sec trace-about">
      <div class="trace-about__main">
        <p class="trace-kicker">
          <span class="trace-kicker__num">01</span>关于我
        </p>
        <h2 class="trace-h2">
          一个还在路上的人
        </h2>
        <p>我是银银子，也可以叫我「迷途小狗」。</p>
        <p>
          计算机专业，2027 届。写过小程序、点过单片机、做过前后端都自己扛的项目，
          现在在实验室跟机器视觉打交道。
        </p>
        <p>
          我不是那种一次就能做对的人。代码跑不通、方案推翻重来、计划被打乱，都是常事。
          所以我习惯把过程写下来——不是因为写得好，是因为不写就会忘，忘了就白走一遍。
        </p>
        <p class="trace-about__sig">
          这个博客叫「痕迹」，收的就是这些。
        </p>
      </div>

      <aside class="trace-now">
        <p class="trace-kicker">
          <span class="trace-kicker__num">NOW</span>此刻
        </p>
        <dl>
          <div>
            <dt>在做</dt>
            <dd>实验室的机器视觉项目，和一个总也调不完的检测模型。</dd>
          </div>
          <div>
            <dt>在学</dt>
            <dd>CAD 画图、Python 数据分析，补基础。</dd>
          </div>
          <div>
            <dt>在找</dt>
            <dd>2027 秋招 · 嵌入式 / 前端 / 全栈。</dd>
          </div>
          <div>
            <dt>在写</dt>
            <dd>
              学过的都往 <RouterLink to="/note/">
                笔记
              </RouterLink> 里堆。
            </dd>
          </div>
        </dl>
        <span class="trace-seal" aria-hidden="true">痕迹</span>
      </aside>
    </section>

    <!-- ── 02 做过的东西 ───────────────────────────────────── -->
    <section class="trace-sec">
      <header class="trace-sec__head">
        <div>
          <p class="trace-kicker">
            <span class="trace-kicker__num">02</span>项目
          </p>
          <h2 class="trace-h2">
            做过的东西
          </h2>
        </div>
        <RouterLink class="trace-more" to="/project/">
          全部 {{ projects.length }} 个 <span aria-hidden="true">→</span>
        </RouterLink>
      </header>

      <div class="trace-projects">
        <RouterLink
          v-for="p in projects"
          :key="p.to"
          class="trace-card"
          :to="p.to"
        >
          <div class="trace-card__meta">
            <span>{{ p.year }}</span>
            <i aria-hidden="true" />
            <span>{{ p.kind }}</span>
            <span class="trace-card__arrow" aria-hidden="true">↗</span>
          </div>
          <h3>{{ p.title }}</h3>
          <p class="trace-card__desc">
            {{ p.desc }}
          </p>
          <ul class="trace-tags">
            <li v-for="t in p.tags" :key="t">
              {{ t }}
            </li>
          </ul>
        </RouterLink>
      </div>
    </section>

    <!-- ── 03 最近写的 ────────────────────────────────────── -->
    <section class="trace-sec">
      <header class="trace-sec__head">
        <div>
          <p class="trace-kicker">
            <span class="trace-kicker__num">03</span>随笔
          </p>
          <h2 class="trace-h2">
            最近的痕迹
          </h2>
        </div>
        <RouterLink class="trace-more" to="/personal/">
          全部随笔 <span aria-hidden="true">→</span>
        </RouterLink>
      </header>

      <ol class="trace-notes">
        <li v-for="n in notes" :key="n.to">
          <RouterLink :to="n.to">
            <time>{{ n.date }}</time>
            <span class="trace-notes__title">{{ n.title }}</span>
            <span class="trace-notes__ex">{{ n.excerpt }}</span>
          </RouterLink>
        </li>
      </ol>
    </section>

    <!-- ── 04 收尾 ───────────────────────────────────────── -->
    <section class="trace-sec trace-quote">
      <div class="trace-quote__main">
        <blockquote>
          <p>纵使慢，驰而不息。</p>
          <p class="trace-quote__sub">
            人生没有白走的路，你走的每一步都算数。
          </p>
        </blockquote>

        <HomeHorse />
      </div>

      <div class="trace-colophon">
        <span class="trace-colophon__end" aria-hidden="true">
          <i />完<i />
        </span>
      </div>
    </section>
  </div>
</template>
