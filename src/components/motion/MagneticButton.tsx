import { type ButtonHTMLAttributes, type MouseEvent, useRef } from 'react'
import { motion, useReducedMotion, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'
>

interface MagneticButtonProps extends NativeButtonProps {
  /** How far the button travels toward the cursor, in px. */
  strength?: number
}

export function MagneticButton({
  strength = 16,
  className,
  children,
  ...buttonProps
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const reducedMotion = useReducedMotion()
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - (rect.left + rect.width / 2)
    const offsetY = e.clientY - (rect.top + rect.height / 2)
    x.set((offsetX / rect.width) * strength)
    y.set((offsetY / rect.height) * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'inline-flex items-center gap-2 border border-border px-6 py-3 text-sm uppercase tracking-widest text-ivory transition-colors hover:bg-ivory hover:text-bg-0',
        className,
      )}
      {...buttonProps}
    >
      {children}
    </motion.button>
  )
}
