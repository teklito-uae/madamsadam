import { Marquee, RevealImage, RevealText } from '@/components/motion'
import { pexelsUrl } from '@/lib/pexels'

// Dubai skyline at night, Burj Khalifa long exposure.
const UAE_IMAGE = pexelsUrl(17914739)

function MarqueeItem({ children }: { children: string }) {
  return (
    <span className="mx-6 font-display text-2xl tracking-[0.05em] text-ivory uppercase sm:text-4xl">
      {children}
    </span>
  )
}

export function UAESection() {
  return (
    <section id="uae" className="bg-bg-1">
      <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <RevealImage src={UAE_IMAGE} alt="" containerClassName="absolute inset-0" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"
        />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <RevealText
            as="h2"
            lines={['BASED IN UAE.', 'BUILT FOR THE WORLD.']}
            className="font-display text-[10vw] leading-[1] text-ivory uppercase sm:text-[6vw] lg:text-[4.5rem]"
            stagger={0.15}
          />
        </div>
      </div>

      <Marquee direction="left" duration={26} className="border-y border-white/10 py-6">
        <MarqueeItem>CREATE ✦ CONNECT ✦ BECOME ✦ CREATE ✦ CONNECT ✦ BECOME ✦</MarqueeItem>
      </Marquee>

      <Marquee direction="right" duration={34} className="border-b border-white/10 py-6">
        <MarqueeItem>
          EVENTS — STORIES — PEOPLE — BRANDS — CULTURE — EXPERIENCES —
        </MarqueeItem>
      </Marquee>
    </section>
  )
}
