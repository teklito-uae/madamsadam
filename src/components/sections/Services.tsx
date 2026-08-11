import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { RevealText } from '@/components/motion'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [pointerFine, setPointerFine] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 32, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 32, mass: 0.5 })

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setPointerFine(mq.matches)
    const onChange = () => setPointerFine(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-bg-0 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      onMouseMove={pointerFine ? handleMouseMove : undefined}
    >
      <RevealText
        as="h2"
        lines={['WHAT WE CREATE']}
        className="mb-12 font-display text-4xl text-ivory uppercase sm:text-5xl lg:mb-20 lg:text-6xl"
      />

      <div className="border-t border-white/10">
        {services.map((service, i) => (
          <div
            key={service.number}
            className="group relative border-b border-white/10 py-6 sm:py-7"
            onMouseEnter={() => pointerFine && setHovered(i)}
            onMouseLeave={() => pointerFine && setHovered(null)}
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="font-display text-sm tracking-[0.2em] text-grey">
                  {service.number}
                </span>
                <span
                  className={cn(
                    'font-display text-3xl text-ivory uppercase transition-transform duration-500 ease-out sm:text-5xl lg:text-6xl',
                    hovered === i && 'translate-x-3 sm:translate-x-6',
                  )}
                >
                  {service.title}
                </span>
              </div>
              <ArrowUpRight
                className={cn(
                  'h-6 w-6 shrink-0 text-grey transition-transform duration-500 ease-out sm:h-8 sm:w-8',
                  hovered === i && '-translate-y-1 translate-x-1 text-ivory',
                )}
              />
            </div>

            <div className="relative mt-4 h-px w-full overflow-hidden bg-white/10">
              <div
                className={cn(
                  'absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-ivory transition-transform duration-500 ease-out',
                  hovered === i && 'scale-x-100',
                )}
              />
            </div>
          </div>
        ))}
      </div>

      {pointerFine && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 z-10 h-40 w-32 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm sm:h-56 sm:w-44"
          style={{ x: springX, y: springY }}
        >
          <AnimatePresence>
            {hovered !== null && (
              <motion.img
                key={hovered}
                src={services[hovered].image}
                alt=""
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full object-cover"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  )
}
