import { placeholderImage } from '@/lib/placeholder'

export interface Service {
  number: string
  title: string
  image: string
}

export const services: Service[] = [
  {
    number: '01',
    title: 'STORYTELLING',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23262019'/%3E%3Cstop offset='100%25' stop-color='%230d0b08'/%3E",
    ),
  },
  {
    number: '02',
    title: 'EVENTS',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%231a1f26'/%3E%3Cstop offset='100%25' stop-color='%23090a0d'/%3E",
    ),
  },
  {
    number: '03',
    title: 'PHOTOGRAPHY',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23211a26'/%3E%3Cstop offset='100%25' stop-color='%230b090d'/%3E",
    ),
  },
  {
    number: '04',
    title: 'FILM & VIDEO',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23261a1e'/%3E%3Cstop offset='100%25' stop-color='%230d090a'/%3E",
    ),
  },
  {
    number: '05',
    title: 'BRANDING',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23202626'/%3E%3Cstop offset='100%25' stop-color='%23090d0d'/%3E",
    ),
  },
  {
    number: '06',
    title: 'WEB EXPERIENCES',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23262619'/%3E%3Cstop offset='100%25' stop-color='%230d0d08'/%3E",
    ),
  },
  {
    number: '07',
    title: 'SOCIAL CONTENT',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23241a26'/%3E%3Cstop offset='100%25' stop-color='%230c090d'/%3E",
    ),
  },
  {
    number: '08',
    title: 'CREATIVE DIRECTION',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23262223'/%3E%3Cstop offset='100%25' stop-color='%230d0b0b'/%3E",
    ),
  },
]
