import { type ImgHTMLAttributes, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

type NativeImgProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'
>

interface ParallaxImageProps extends NativeImgProps {
  containerClassName?: string
  /** Higher = more movement. 0.15–0.4 reads as subtle-to-strong. */
  speed?: number
}

export function ParallaxImage({
  containerClassName,
  className,
  speed = 0.2,
  alt,
  ...imgProps
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const range = speed * 100
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`])

  return (
    <div ref={containerRef} className={cn('overflow-hidden', containerClassName)}>
      <motion.img
        alt={alt ?? ''}
        className={cn('h-[130%] w-full object-cover', className)}
        style={reducedMotion ? undefined : { y }}
        {...imgProps}
      />
    </div>
  )
}
