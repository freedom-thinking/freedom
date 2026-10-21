<script setup>
/**
 * 页尾那匹跑过去的马（水墨 · 四帧雪碧图）
 * ---------------------------------------------------------------
 * 素材：docs/.vuepress/public/horse-sprite.webp
 *       AI 生成的四帧奔跑分解图，裁成 4×1 的雪碧图，白底已抠成透明。
 *
 * 三层动作：
 * 1. 帧动画：background-position 每 0.56s 走完四格（steps(4)），四条腿真在蹬；
 * 2. 起伏：整匹随节奏上下 4px + 点头，比帧动画慢一点，避免机械感；
 * 3. 位移：8s 从纸的左边缘跑到右边，两端用 mask 淡出。
 *
 * 什么时候跑：滚到页面最底下就开跑（马进了视野也算），
 * 而且开跑那一瞬间把动画拨回第一帧——马是从纸边直接蹬出来的，
 * 不会先在画面外面空等几秒再慢慢挪进来。
 * prefers-reduced-motion：停住不动。
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vuepress/client'

const rootRef = ref(null)
const trackRef = ref(null)
const spriteRef = ref(null)
const running = ref(false)

let io = null
// 离真正到底还差多少像素就算"到底了"，留一点余量，滑到底的瞬间就能触发
const NEAR_BOTTOM = 60

const spriteSrc = withBase('/horse-sprite.webp')

function reachedBottom() {
  const doc = document.documentElement
  return window.scrollY + window.innerHeight >= doc.scrollHeight - NEAR_BOTTOM
}

/**
 * 开跑。这里必须把动画时间拨回 0：
 * animation-play-state 暂停只是"停住"，恢复时是从停下的地方接着走，
 * 所以如果上一次停在了画面外，再滚回来它还是从画面外接着走，看着就像没动。
 */
function run() {
  if (running.value) return
  running.value = true
  requestAnimationFrame(() => {
    for (const el of [trackRef.value, spriteRef.value]) {
      el?.getAnimations().forEach((anim) => {
        anim.currentTime = 0
      })
    }
  })
}

function stop() {
  running.value = false
}

function onScroll() {
  if (reachedBottom()) run()
}

onMounted(() => {
  if (!rootRef.value) return
  io = new IntersectionObserver(
    ([entry]) => {
      // 进视野就开跑；滑过底部的短页面没有这个事件，靠下面的 scroll 兜住
      if (entry.isIntersecting) run()
      else stop()
    },
    { threshold: 0.05, rootMargin: '0px 0px 96px 0px' },
  )
  io.observe(rootRef.value)

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  io?.disconnect()
  io = null
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div
    ref="rootRef"
    class="trace-horse"
    :class="{ 'is-running': running }"
    aria-hidden="true"
  >
    <div ref="trackRef" class="trace-horse__track">
      <div
        ref="spriteRef"
        class="trace-horse__sprite"
        :style="{ backgroundImage: `url(${spriteSrc})` }"
      />
    </div>
  </div>
</template>
