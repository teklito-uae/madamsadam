import { ParallaxImage, RevealText } from '@/components/motion'
import { memoryCategories } from '@/data/memory'
import { pexelsUrl } from '@/lib/pexels'

// Hands holding a polaroid — a multi-generational moment, standing in for
// "some moments deserve more than a photo."
const HERO_IMAGE = pexelsUrl(5638336)

export function MemorySection() {
  return (
    <section id="memory" className="bg-bg-0 py-32 lg:py-44">
      <div className="px-6 text-center sm:px-10 lg:px-16">
        <RevealText
          as="h2"
          lines={['SOME MOMENTS', 'DESERVE', 'MORE THAN', 'A PHOTO.']}
          className="mx-auto max-w-4xl font-display text-[12vw] leading-[1] text-ivory uppercase sm:text-[6.5vw] lg:text-[5rem]"
          stagger={0.25}
          delay={0.2}
        />
        <p className="mx-auto mt-10 max-w-lg font-display text-xl text-ivory/90 italic sm:text-2xl">
          &ldquo;We turn moments into stories, and stories into
          memories.&rdquo;
        </p>
      </div>

      <div className="mt-20 h-[70vh] min-h-[420px] px-6 sm:px-10 lg:mt-28 lg:h-[80vh] lg:px-16">
        <ParallaxImage
          src={HERO_IMAGE}
          alt=""
          speed={0.08}
          containerClassName="h-full w-full rounded-sm"
        />
      </div>

      <div className="mt-20 lg:mt-28">
        <div
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:px-10 lg:px-16 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {memoryCategories.map((category) => (
            <div
              key={category.label}
              className="relative aspect-[3/4] w-[62vw] shrink-0 snap-start overflow-hidden rounded-sm sm:w-[32vw] lg:w-[18vw]"
            >
              <img
                src={category.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
              />
              <span className="absolute bottom-4 left-4 text-xs tracking-[0.2em] text-ivory uppercase">
                {category.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
