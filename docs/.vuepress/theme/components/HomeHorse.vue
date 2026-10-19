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
 * 3. 位移：每 13s 从页尾左边跑到右边，两端用 mask 淡出。
 * 只在滚进视野时跑（IntersectionObserver 控制 play-state）。
 * prefers-reduced-motion：停住不动。
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vuepress/client'

const rootRef = ref(null)
const running = ref(false)
let io = null

const spriteSrc = withBase('/horse-sprite.webp')

onMounted(() => {
  if (!rootRef.value) return
  io = new IntersectionObserver(([entry]) => {
    running.value = entry.isIntersecting
  }, { threshold: 0.05 })
  io.observe(rootRef.value)
})

onBeforeUnmount(() => {
  io?.disconnect()
  io = null
})
</script>

<template>
  <div
    ref="rootRef"
    class="trace-horse"
    :class="{ 'is-running': running }"
    aria-hidden="true"
  >
    <div class="trace-horse__track">
      <div
        class="trace-horse__sprite"
        :style="{ backgroundImage: `url(${spriteSrc})` }"
      />
    </div>
  </div>
</template>
