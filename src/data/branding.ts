import { placeholderImage } from '@/lib/placeholder'

export interface BrandingVisual {
  image: string
  /** Tailwind positioning classes — placement, size, rotation, z-index. */
  className: string
  delay: number
}

/** No real brand identity/campaign photography supplied yet — swap 1:1 once it lands. */
export const brandingVisuals: BrandingVisual[] = [
  {
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23262019'/%3E%3Cstop offset='100%25' stop-color='%230d0b08'/%3E",
    ),
    className:
      'left-[2%] top-0 z-20 w-[52%] -rotate-3 aspect-[3/4] sm:left-[6%] sm:w-[38%]',
    delay: 0,
  },
  {
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%231a1f26'/%3E%3Cstop offset='100%25' stop-color='%23090a0d'/%3E",
    ),
    className:
      'right-[4%] top-[8%] z-10 w-[46%] rotate-2 aspect-square sm:right-[8%] sm:w-[30%]',
    delay: 0.15,
  },
  {
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23211a26'/%3E%3Cstop offset='100%25' stop-color='%230b090d'/%3E",
    ),
    className:
      'left-[18%] top-[38%] z-30 w-[40%] rotate-1 aspect-[4/5] sm:left-[30%] sm:w-[24%]',
    delay: 0.3,
  },
  {
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23202626'/%3E%3Cstop offset='100%25' stop-color='%23090d0d'/%3E",
    ),
    className:
      'right-[2%] top-[44%] z-10 w-[50%] -rotate-2 aspect-[16/10] sm:right-[10%] sm:w-[34%]',
    delay: 0.45,
  },
  {
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23261a1e'/%3E%3Cstop offset='100%25' stop-color='%230d090a'/%3E",
    ),
    className:
      'left-[6%] top-[68%] z-20 w-[42%] rotate-3 aspect-[3/4] sm:left-[14%] sm:w-[26%]',
    delay: 0.6,
  },
]
