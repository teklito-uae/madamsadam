import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'

const CursorContext = createContext<{
  setLabel: (label: string | null) => void
} | null>(null)

export function useCursor() {
  const ctx = useContext(CursorContext)
  return ctx?.setLabel ?? (() => {})
}

/** Desktop-only cursor label ("VIEW", "EXPLORE", "→"). Mount once at the app root. */
export function CustomCursorProvider({ children }: { children: ReactNode }) {
  const [label, setLabel] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setEnabled(mq.matches)
    const onChange = () => setEnabled(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return
    function handleMove(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [enabled, x, y])

  return (
    <CursorContext.Provider value={{ setLabel }}>
      {children}
      {enabled && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2"
          style={{ x: springX, y: springY }}
        >
          <AnimatePresence>
            {label && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-ivory text-[11px] font-sans tracking-widest text-bg-0 uppercase"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </CursorContext.Provider>
  )
}

/** Wrap any hoverable element to set the cursor label while hovered. */
export function CursorTarget({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  const setLabel = useCursor()
  return (
    <div
      onMouseEnter={() => setLabel(label)}
      onMouseLeave={() => setLabel(null)}
      className="contents"
    >
      {children}
    </div>
  )
}
