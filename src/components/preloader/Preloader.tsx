import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import logo from '@/assets/mds-logo.webp'
import { RevealText } from '@/components/motion'

interface PreloaderProps {
  onComplete: () => void
}

const HOLD_MS = 1400
const HOLD_MS_REDUCED = 450
const EXIT_S = 0.6

export function Preloader({ onComplete }: PreloaderProps) {
  const reducedMotion = useReducedMotion()
  const [count, setCount] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const holdMs = reducedMotion ? HOLD_MS_REDUCED : HOLD_MS
    const start = performance.now()
    let raf: number

    function tick(now: number) {
      const progress = Math.min((now - start) / holdMs, 1)
      setCount(Math.round(progress * 100))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    const exitTimer = setTimeout(() => setExiting(true), holdMs)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(exitTimer)
    }
  }, [reducedMotion])

  return (
    <motion.div
      role="status"
      aria-label="Loading"
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      animate={exiting ? { clipPath: 'inset(0% 0% 100% 0%)' } : undefined}
      transition={{ duration: reducedMotion ? 0.3 : EXIT_S, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (exiting) onComplete()
      }}
      className="bg-bg-0 fixed inset-0 z-[300] flex flex-col items-center justify-center gap-6"
    >
      <motion.img
        src={logo}
        alt="MADAMS ADAM"
        className="w-48 invert sm:w-64"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <RevealText
        lines={['CREATE.', 'CONNECT.', 'BECOME.']}
        className="flex flex-row gap-3 text-xs tracking-[0.3em] text-grey uppercase sm:text-sm"
        stagger={0.1}
        delay={0.35}
      />

      <div className="absolute bottom-10 font-display text-sm tracking-widest text-grey tabular-nums">
        {String(count).padStart(2, '0')} — 100
      </div>
    </motion.div>
  )
}
