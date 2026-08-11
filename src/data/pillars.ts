// Panel backgrounds are hotlinked from Pexels (free stock, no attribution
// required) as stand-ins for real photography/video — swap `image` for real
// per-pillar photography/video when supplied; keep using RevealImage.
const createImg =
  'https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg?auto=compress&cs=tinysrgb&w=1600'
const connectImg =
  'https://images.pexels.com/photos/1047443/pexels-photo-1047443.jpeg?auto=compress&cs=tinysrgb&w=1600'
const becomeImg =
  'https://images.pexels.com/photos/28639224/pexels-photo-28639224.jpeg?auto=compress&cs=tinysrgb&w=1600'

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
