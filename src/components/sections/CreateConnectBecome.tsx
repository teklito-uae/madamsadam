import { useState } from 'react'
import { motion } from 'framer-motion'
import { RevealText, RevealImage } from '@/components/motion'
import { pillars } from '@/data/pillars'
import { cn } from '@/lib/utils'

export function CreateConnectBecome() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="create-connect-become" className="bg-bg-0">
      <div className="hidden h-[90vh] md:flex">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.number}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            animate={{ flexGrow: active === null ? 1 : active === i ? 1.6 : 0.7 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-1 overflow-hidden border-r border-border last:border-r-0"
          >
            <RevealImage
              src={pillar.image}
              alt=""
              containerClassName="absolute inset-0"
              className={cn(
                'transition-[filter,transform] duration-700 ease-out',
                active === i && 'scale-105 brightness-110',
                active !== null && active !== i && 'brightness-50',
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/40" />

            <div
              className={cn(
                'relative flex h-full flex-col justify-between p-8 lg:p-10',
                pillar.align === 'left' && 'items-start text-left',
                pillar.align === 'center' && 'items-center text-center',
                pillar.align === 'right' && 'items-end text-right',
              )}
            >
              <span className="font-display text-sm tracking-widest text-grey">
                {pillar.number}
              </span>

              <div>
                <RevealText
                  as="h3"
                  lines={[pillar.title]}
                  className="font-display text-5xl text-ivory uppercase lg:text-6xl"
                />
                <p className="mt-4 max-w-[16ch] text-sm tracking-wide text-grey uppercase">
                  {pillar.keywords}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col md:hidden">
        {pillars.map((pillar) => (
          <div
            key={pillar.number}
            className="relative h-[70vh] min-h-[420px] overflow-hidden"
          >
            <RevealImage src={pillar.image} alt="" containerClassName="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/40" />

            <div className="relative flex h-full flex-col justify-between p-6">
              <span className="font-display text-sm tracking-widest text-grey">
                {pillar.number}
              </span>
              <div>
                <RevealText
                  as="h3"
                  lines={[pillar.title]}
                  className="font-display text-5xl text-ivory uppercase"
                />
                <p className="mt-4 max-w-[20ch] text-sm tracking-wide text-grey uppercase">
                  {pillar.keywords}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
