// Panel backgrounds are tonal gradient placeholders — no per-pillar photography
// or video has been supplied yet. Swap `image` for real photography/video per
// pillar when available; keep using the RevealImage primitive.
import createImg from '@/assets/placeholders/pillar-create.svg'
import connectImg from '@/assets/placeholders/pillar-connect.svg'
import becomeImg from '@/assets/placeholders/pillar-become.svg'

export interface Pillar {
  number: string
  title: string
  keywords: string
  image: string
  align: 'left' | 'center' | 'right'
}

export const pillars: Pillar[] = [
  {
    number: '01',
    title: 'CREATE',
    keywords: 'Ideas. Brands. Films. Experiences.',
    image: createImg,
    align: 'left',
  },
  {
    number: '02',
    title: 'CONNECT',
    keywords: 'People. Culture. Community. Business.',
    image: connectImg,
    align: 'center',
  },
  {
    number: '03',
    title: 'BECOME',
    keywords: 'Growth. Ambition. Transformation. Memories.',
    image: becomeImg,
    align: 'right',
  },
]
