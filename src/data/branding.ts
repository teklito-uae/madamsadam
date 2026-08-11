import { pexelsUrl } from '@/lib/pexels'

export interface BrandingVisual {
  image: string
  /** Tailwind positioning classes — placement, size, rotation, z-index. */
  className: string
  delay: number
}

export const brandingVisuals: BrandingVisual[] = [
  {
    image: pexelsUrl(35587808),
    className:
      'left-[2%] top-0 z-20 w-[52%] -rotate-3 aspect-[3/4] sm:left-[6%] sm:w-[38%]',
    delay: 0,
  },
  {
    image: pexelsUrl(29940495),
    className:
      'right-[4%] top-[8%] z-10 w-[46%] rotate-2 aspect-square sm:right-[8%] sm:w-[30%]',
    delay: 0.15,
  },
  {
    image: pexelsUrl(30213865),
    className:
      'left-[18%] top-[38%] z-30 w-[40%] rotate-1 aspect-[4/5] sm:left-[30%] sm:w-[24%]',
    delay: 0.3,
  },
  {
    image: pexelsUrl(5138715),
    className:
      'right-[2%] top-[44%] z-10 w-[50%] -rotate-2 aspect-[16/10] sm:right-[10%] sm:w-[34%]',
    delay: 0.45,
  },
  {
    image: pexelsUrl(4355345),
    className:
      'left-[6%] top-[68%] z-20 w-[42%] rotate-3 aspect-[3/4] sm:left-[14%] sm:w-[26%]',
    delay: 0.6,
  },
]
