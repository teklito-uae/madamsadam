import { pexelsUrl } from '@/lib/pexels'

export interface Service {
  number: string
  title: string
  image: string
}

export const services: Service[] = [
  { number: '01', title: 'STORYTELLING', image: pexelsUrl(32728012, 800) },
  { number: '02', title: 'EVENTS', image: pexelsUrl(25016471, 800) },
  { number: '03', title: 'PHOTOGRAPHY', image: pexelsUrl(821738, 800) },
  { number: '04', title: 'FILM & VIDEO', image: pexelsUrl(34084878, 800) },
  { number: '05', title: 'BRANDING', image: pexelsUrl(19352210, 800) },
  { number: '06', title: 'WEB EXPERIENCES', image: pexelsUrl(30231780, 800) },
  { number: '07', title: 'SOCIAL CONTENT', image: pexelsUrl(34623018, 800) },
  { number: '08', title: 'CREATIVE DIRECTION', image: pexelsUrl(4327409, 800) },
]
