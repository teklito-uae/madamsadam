/** Builds a direct Pexels CDN URL for a given photo id — free stock, no attribution required. */
export function pexelsUrl(id: number, width = 1600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`
}
