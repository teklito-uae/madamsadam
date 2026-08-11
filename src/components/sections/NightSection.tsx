import { Marquee, RevealImage, RevealText } from '@/components/motion'
import { nightImages } from '@/data/night'

export function NightSection() {
  return (
    <section id="night" className="relative bg-bg-0">
      <div className="relative h-[85vh] min-h-[560px] overflow-hidden">
        <RevealImage
          src={nightImages[0]}
          alt=""
          containerClassName="absolute inset-0"
          className="scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85"
        />

        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <RevealText
            as="h2"
            lines={['THE NIGHT', 'IS A STORY.']}
            className="font-display text-[14vw] leading-[0.9] text-ivory uppercase sm:text-[8vw] lg:text-[6rem]"
            stagger={0.12}
          />
          <p className="mt-6 text-sm tracking-[0.15em] text-grey uppercase sm:text-base">
            Clubs. People. Energy. Moments.
          </p>
          <p className="mt-3 max-w-md font-display text-lg text-ivory/90 italic sm:text-xl">
            We capture the atmosphere, not just the moment.
          </p>
        </div>
      </div>

      <Marquee duration={70} className="border-y border-white/10 py-3">
        {nightImages.map((src, i) => (
          <div
            key={i}
            aria-hidden
            className="mx-2 h-32 w-48 shrink-0 overflow-hidden rounded-sm sm:h-44 sm:w-64"
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
