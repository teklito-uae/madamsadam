import { placeholderImage } from '@/lib/placeholder'

export interface Project {
  title: string
  category: string
  year?: string
  image: string
}

export const projects: Project[] = [
  {
    title: 'MIDNIGHT DUBAI',
    category: 'EVENT / CULTURE / FILM',
    year: '2024',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23262019'/%3E%3Cstop offset='100%25' stop-color='%230d0b08'/%3E",
    ),
  },
  {
    title: 'THE AFTER HOURS',
    category: 'NIGHTLIFE / PHOTOGRAPHY',
    year: '2024',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%231a1f26'/%3E%3Cstop offset='100%25' stop-color='%23090a0d'/%3E",
    ),
  },
  {
    title: 'FORM & FUNCTION',
    category: 'BRAND / CREATIVE DIRECTION',
    year: '2023',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23211a26'/%3E%3Cstop offset='100%25' stop-color='%230b090d'/%3E",
    ),
  },
  {
    title: 'AFTERGLOW',
    category: 'EVENT / STORYTELLING',
    year: '2023',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23261a1e'/%3E%3Cstop offset='100%25' stop-color='%230d090a'/%3E",
    ),
  },
]
