import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { RevealText } from '@/components/motion'
import heroBg from '@/assets/hero-bg/pexels-george-charry-2643329-4218024.jpg'

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-bg-0 sm:h-[110vh]"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        style={reducedMotion ? undefined : { y: bgY, scale: bgScale }}
      >
        <img
          src={heroBg}
          alt=""
          aria-hidden
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 45% at 50% 42%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)',
        }}
      />

      <motion.div
        className="relative flex h-full flex-col items-center justify-center px-6 text-center"
        style={reducedMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-xs tracking-[0.3em] text-grey uppercase"
        >
          MADAMS ADAM
        </motion.p>

        <RevealText
          as="h1"
          lines={['MADAMS', 'ADAM']}
          className="font-display text-[16vw] leading-[0.9] text-ivory uppercase sm:text-[10vw] lg:text-[8rem]"
          delay={0.4}
          stagger={0.12}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-6 text-sm tracking-[0.25em] text-grey uppercase sm:text-base"
        >
          Create. Connect. Become.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-6 max-w-md font-display text-lg text-ivory/90 italic sm:text-xl"
        >
          &ldquo;Stories, experiences and identities built to be remembered.&rdquo;
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute inset-x-0 bottom-8 flex items-center justify-between px-6 text-[11px] tracking-[0.2em] text-grey uppercase sm:px-10"
      >
        <span>UAE / Creative House</span>
        <motion.span
          className="flex items-center gap-2"
          animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll to explore ↓
        </motion.span>
      </motion.div>
    </section>
  )
}
