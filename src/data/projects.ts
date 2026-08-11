// Placeholder entries per CONTENT_GUIDE.md — replace with real work when
// supplied. Images are hotlinked from Pexels (free stock, no attribution
// required) as stand-ins for real photography/video.
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
    image:
      'https://images.pexels.com/photos/36675302/pexels-photo-36675302.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    title: 'THE AFTER HOURS',
    category: 'NIGHTLIFE / PHOTOGRAPHY',
    image:
      'https://images.pexels.com/photos/7715524/pexels-photo-7715524.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    title: 'FORM & FUNCTION',
    category: 'BRAND / CREATIVE DIRECTION',
    image:
      'https://images.pexels.com/photos/3648062/pexels-photo-3648062.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    title: 'AFTERGLOW',
    category: 'EVENT / STORYTELLING',
    image:
      'https://images.pexels.com/photos/510299/pexels-photo-510299.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
]
