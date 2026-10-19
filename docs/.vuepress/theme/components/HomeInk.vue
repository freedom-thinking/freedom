<script setup>
/**
 * 首屏右侧那张「纸」上的墨迹层
 * ---------------------------------------------------------------
 * 1. 进页面时，一笔手绘线自己慢慢画出来（像有人刚写完）；
 * 2. 鼠标/手指在纸上划过，会留下墨迹，停手后几秒慢慢淡掉；
 * 3. 尊重 prefers-reduced-motion：不做自动动画，也不做淡出。
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'

const wrapRef = ref(null)
const canvasRef = ref(null)

const emit = defineEmits(['ink'])
let inked = false

let ctx = null
let dpr = 1
let w = 0
let h = 0
let raf = 0
let ro = null

let inkColor = '#2b2620'
let reduced = false

// 自动那一笔
let path = []
let introIndex = 0
let introStart = 0
let introDone = false
let introHold = 0

// 淡出控制
let fadeCount = 0
let fading = false
let lastPaintAt = 0

// 用户笔迹
let drawing = false
let last = null

const INTRO_MS = 1800
const FADE_ALPHA = 0.006
const HOLD_FRAMES = 130

/* 控制点（0~1 归一化），画出一条带回勾的手绘线 */
const CTRL = [
  [0.16, 0.78],
  [0.29, 0.55],
  [0.41, 0.61],
  [0.49, 0.41],
  [0.60, 0.35],
  [0.69, 0.47],
  [0.63, 0.60],
  [0.75, 0.63],
  [0.84, 0.28],
]

function normalize(ctrl, steps) {
  const out = []
  for (let i = 0; i < ctrl.length - 1; i++) {
    const p0 = ctrl[i - 1] || ctrl[i]
    const p1 = ctrl[i]
    const p2 = ctrl[i + 1]
    const p3 = ctrl[i + 2] || p2
    for (let s = 0; s < steps; s++) {
      const t = s / steps
      const t2 = t * t
      const t3 = t2 * t
      const x = 0.5 * ((2 * p1[0]) + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3)
      const y = 0.5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)
      out.push([x, y])
    }
  }
  out.push(ctrl[ctrl.length - 1])
  return out
}

function readInk() {
  const v = getComputedStyle(document.documentElement).getPropertyValue('--trace-ink').trim()
  if (v)
    inkColor = v
}

/* ── Catmull-Rom 采样 + 轻微抖动，像手画的 ─────────────────────── */
function makePath() {
  return normalize(CTRL, 18).map(([x, y], i, arr) => {
    const jitter = i === 0 || i === arr.length - 1 ? 0 : 1.6
    return [x * w + (Math.random() - 0.5) * jitter, y * h + (Math.random() - 0.5) * jitter]
  })
}

/* ── 笔画：起笔重、收笔轻，两端包一个圆点 ─────────────────────── */
function dab(x, y, r, alpha) {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fillStyle = inkColor
  ctx.globalAlpha = alpha
  ctx.fill()
}

function segment(a, b, widthA, widthB, alpha) {
  ctx.beginPath()
  ctx.strokeStyle = inkColor
  ctx.globalAlpha = alpha
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.lineWidth = (widthA + widthB) / 2
  ctx.moveTo(a[0], a[1])
  ctx.lineTo(b[0], b[1])
  ctx.stroke()
}

function introWidth(i) {
  const total = path.length - 1 || 1
  const p = i / total
  // 起笔粗 → 中间细 → 收笔微微一顿
  const taper = 1 - Math.pow(p, 0.7) * 0.72
  return Math.max(1.1, taper * 5.2)
}

function drawIntroTo(target) {
  for (let i = introIndex; i < target && i < path.length - 1; i++) {
    const a = path[i]
    const b = path[i + 1]
    segment(a, b, introWidth(i), introWidth(i + 1), 0.62)
  }
  const done = Math.min(target, path.length - 1)
  if (done > introIndex && done === path.length - 1) {
    const end = path[path.length - 1]
    dab(end[0], end[1], 2.6, 0.62)
  }
  introIndex = done
}

function fadeStep() {
  ctx.globalCompositeOperation = 'destination-out'
  ctx.globalAlpha = 1
  ctx.fillStyle = `rgba(0,0,0,${FADE_ALPHA})`
  ctx.fillRect(0, 0, w, h)
  ctx.globalCompositeOperation = 'source-over'
}

function loop(now) {
  raf = requestAnimationFrame(loop)
  let busy = false

  // 开场那一笔
  if (!introDone && path.length) {
    const p = Math.min(1, (now - introStart) / INTRO_MS)
    const eased = 1 - (1 - p) ** 2
    const target = Math.floor(eased * (path.length - 1)) + 1
    if (target > introIndex) {
      drawIntroTo(target)
      busy = true
    }
    if (p >= 1) {
      introDone = true
      introHold = HOLD_FRAMES
    }
  }

  // 停手之后才开始淡
  const idle = now - lastPaintAt
  if (introDone && !drawing && idle > 260) {
    if (introHold > 0) {
      introHold--
      busy = true
    }
    else if (fading) {
      fadeStep()
      fadeCount++
      // 淡到看不见了就直接清空收工，别让 rAF 空转
      if (fadeCount > 520) {
        ctx.clearRect(0, 0, w, h)
        fading = false
      }
      busy = true
    }
  }

  if (!busy && introDone && !fading && !drawing) {
    cancelAnimationFrame(raf)
    raf = 0
  }
}

function wake() {
  // 每次落笔都把淡出计时重置，正在写的东西不该被擦掉
  fading = true
  fadeCount = 0
  if (!raf) raf = requestAnimationFrame(loop)
}

function resize() {
  const el = wrapRef.value
  const canvas = canvasRef.value
  if (!el || !canvas || !ctx) return
  const rect = el.getBoundingClientRect()
  if (!rect.width || !rect.height) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  w = rect.width
  h = rect.height
  canvas.width = Math.round(w * dpr)
  canvas.height = Math.round(h * dpr)
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, w, h)
  path = makePath()

  if (reduced) {
    // 减少动态：直接画完整一笔，留在纸上当静态痕迹
    introIndex = 0
    drawIntroTo(path.length)
    introDone = true
    fading = false
    fadeCount = 0
    return
  }

  introIndex = 0
  introDone = false
  introStart = performance.now()
  wake()
}

function pos(e) {
  const rect = canvasRef.value.getBoundingClientRect()
  return [e.clientX - rect.left, e.clientY - rect.top]
}

function onDown(e) {
  if (!inked) {
    inked = true
    emit('ink')
  }
  if (e.pointerType === 'touch') {
    // 触屏：按住才画，避免影响页面滚动
    drawing = true
    last = pos(e)
    canvasRef.value.setPointerCapture?.(e.pointerId)
  }
  else {
    drawing = true
    last = pos(e)
  }
  lastPaintAt = performance.now()
  wake()
}

function onMove(e) {
  if (e.pointerType === 'touch' && !drawing) return
  const p = pos(e)
  if (!last) last = p
  const dist = Math.hypot(p[0] - last[0], p[1] - last[1])
  if (dist < 0.6) return

  if (!inked) {
    inked = true
    emit('ink')
  }

  // 走得快就细，走得慢就粗，像真的笔
  const width = Math.max(1.2, 4.6 - dist * 0.06)
  const steps = Math.min(6, Math.max(1, Math.round(dist / 6)))
  let prev = last
  for (let s = 1; s <= steps; s++) {
    const t = s / steps
    const x = prev[0] + (p[0] - last[0]) * t
    const y = prev[1] + (p[1] - last[1]) * t
    segment(prev, [x, y], width, width, 0.5)
    prev = [x, y]
  }
  last = p
  lastPaintAt = performance.now()
  drawing = true
  wake()
}

function onUp() {
  drawing = false
  last = null
  lastPaintAt = performance.now()
}

function onLeave() {
  drawing = false
  last = null
  lastPaintAt = performance.now() - 300
}

let themeObserver = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')
  if (!ctx) return
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  readInk()
  resize()

  ro = new ResizeObserver(() => {
    readInk()
    resize()
  })
  ro.observe(wrapRef.value)

  themeObserver = new MutationObserver(() => {
    readInk()
    resize()
  })
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
})

onBeforeUnmount(() => {
  if (raf) cancelAnimationFrame(raf)
  raf = 0
  ro?.disconnect()
  themeObserver?.disconnect()
})
</script>

<template>
  <div
    ref="wrapRef"
    class="trace-ink"
    aria-hidden="true"
  >
    <canvas
      ref="canvasRef"
      class="trace-ink__canvas"
      @pointerdown="onDown"
      @pointermove="onMove"
      @pointerup="onUp"
      @pointercancel="onUp"
      @pointerleave="onLeave"
    />
  </div>
</template>
