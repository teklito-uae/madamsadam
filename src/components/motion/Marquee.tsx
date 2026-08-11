import { type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: ReactNode
  direction?: 'left' | 'right'
  /** Seconds for one full loop. */
  duration?: number
  className?: string
  itemClassName?: string
}

export function Marquee({
  children,
  direction = 'left',
  duration = 30,
  className,
  itemClassName,
}: MarqueeProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div className={cn('group flex overflow-hidden', className)}>
      {(reducedMotion ? [0] : [0, 1]).map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            'flex shrink-0 items-center group-hover:[animation-play-state:paused]',
            itemClassName,
          )}
          style={
            reducedMotion
              ? undefined
              : { animation: `marquee-${direction} ${duration}s linear infinite` }
          }
        >
          {children}
        </div>
      ))}
    </div>
  )
}
