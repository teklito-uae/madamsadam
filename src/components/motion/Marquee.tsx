import { type ReactNode } from 'react'
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
  return (
    <div className={cn('group flex overflow-hidden', className)}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            'flex shrink-0 items-center motion-reduce:animate-none group-hover:[animation-play-state:paused]',
            itemClassName,
          )}
          style={{
            animation: `marquee-${direction} ${duration}s linear infinite`,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
