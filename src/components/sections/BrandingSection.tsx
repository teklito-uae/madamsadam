import { RevealImage, RevealText } from '@/components/motion'
import { brandingVisuals } from '@/data/branding'

export function BrandingSection() {
  return (
    <section id="branding" className="relative overflow-hidden bg-bg-1 py-24 lg:py-32">
      <div className="px-6 sm:px-10 lg:px-16">
        <RevealText
          as="h2"
          lines={['MAKE YOUR', 'BRAND', 'UNFORGETTABLE.']}
          className="max-w-3xl font-display text-[13vw] leading-[0.95] text-ivory uppercase sm:text-[7vw] lg:text-[5.5rem]"
          stagger={0.1}
        />
      </div>

      <div className="relative mt-16 h-[130vh] min-h-[720px] sm:h-[110vh] lg:h-[900px]">
        {brandingVisuals.map((visual, i) => (
          <div key={i} className={`absolute overflow-hidden rounded-sm shadow-2xl shadow-black/60 ${visual.className}`}>
            <RevealImage
              src={visual.image}
              alt=""
              containerClassName="h-full w-full"
              delay={visual.delay}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
