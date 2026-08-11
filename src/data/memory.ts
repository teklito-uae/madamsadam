import { placeholderImage } from '@/lib/placeholder'

export interface MemoryCategory {
  label: string
  image: string
}

/** No real photography supplied yet — swap `image` 1:1 once it lands. */
export const memoryCategories: MemoryCategory[] = [
  {
    label: 'PEOPLE',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23262019'/%3E%3Cstop offset='100%25' stop-color='%230d0b08'/%3E",
    ),
  },
  {
    label: 'PLACES',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%231a1f26'/%3E%3Cstop offset='100%25' stop-color='%23090a0d'/%3E",
    ),
  },
  {
    label: 'NIGHTS',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23211a26'/%3E%3Cstop offset='100%25' stop-color='%230b090d'/%3E",
    ),
  },
  {
    label: 'CELEBRATIONS',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23261a1e'/%3E%3Cstop offset='100%25' stop-color='%230d090a'/%3E",
    ),
  },
  {
    label: 'MILESTONES',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23202626'/%3E%3Cstop offset='100%25' stop-color='%23090d0d'/%3E",
    ),
  },
  {
    label: 'MOMENTS',
    image: placeholderImage(
      "%3Cstop offset='0%25' stop-color='%23262619'/%3E%3Cstop offset='100%25' stop-color='%230d0d08'/%3E",
    ),
  },
]
