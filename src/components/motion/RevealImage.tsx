import { type ImgHTMLAttributes } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type NativeImgProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'
>

interface RevealImageProps extends NativeImgProps {
  containerClassName?: string
  delay?: number
}

export function RevealImage({
  containerClassName,
  className,
  delay = 0,
  alt,
  ...imgProps
}: RevealImageProps) {
  const reducedMotion = useReducedMotion()

  return (
    // The container is the whileInView target — it never transforms itself, so
    // IntersectionObserver measures it correctly. The image (which scales) only
    // inherits the parent's variant state; observing the image directly would
    // let its own scale/clip-path start state throw off the intersection ratio.
    <motion.div
      className={cn('overflow-hidden', containerClassName)}
      initial="hidden"
      whileInView={reducedMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.img
        alt={alt ?? ''}
        className={cn('h-full w-full object-cover', className)}
        variants={{
          hidden: { scale: 1.12, clipPath: 'inset(10% 10% 10% 10%)', opacity: 0 },
          visible: { scale: 1, clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 },
        }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        {...imgProps}
      />
    </motion.div>
  )
}
