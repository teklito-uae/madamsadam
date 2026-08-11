import { pexelsUrl } from '@/lib/pexels'

export interface MemoryCategory {
  label: string
  image: string
}

export const memoryCategories: MemoryCategory[] = [
  { label: 'PEOPLE', image: pexelsUrl(29004174, 800) },
  { label: 'PLACES', image: pexelsUrl(35062740, 800) },
  { label: 'NIGHTS', image: pexelsUrl(2905700, 800) },
  { label: 'CELEBRATIONS', image: pexelsUrl(266429, 800) },
  { label: 'MILESTONES', image: pexelsUrl(12385872, 800) },
  { label: 'MOMENTS', image: pexelsUrl(30736117, 800) },
]
