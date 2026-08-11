import { type ElementType, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealTextProps {
  /** Each entry renders as its own animated line. */
  lines: ReactNode[]
  as?: ElementType
  className?: string
  lineClassName?: string
  /** Seconds between each line's animation start. */
  stagger?: number
  /** Seconds before the first line starts. */
  delay?: number
}

export function RevealText({
  lines,
  as: Tag = 'div',
  className,
  lineClassName,
  stagger = 0.08,
  delay = 0,
}: RevealTextProps) {
  const reducedMotion = useReducedMotion()

  return (
    <Tag className={cn('block', className)}>
      {lines.map((line, i) => (
        // The outer span is the whileInView target: it never moves, so
        // IntersectionObserver can measure it correctly. The inner span (which
        // does move) only inherits the parent's variant state — it must not be
        // the observed element itself, since its own translateY(110%) start
        // position would clip it out of the overflow-hidden box and
        // IntersectionObserver would report 0% intersection forever.
        <motion.span
          key={i}
          className="block overflow-hidden"
          initial="hidden"
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.span
            className={cn('block', lineClassName)}
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: { y: '0%', opacity: 1 },
            }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  )
}
