/**
 * No real photography/video supplied yet (see task 00 asset inventory).
 * Produces a gradient-wash data URI standing in for an image plate — swap
 * the data source for real photography once it lands, 1:1, no layout
 * changes needed. Inline data URIs also mean hover-follow images never have
 * a network round trip to flash on.
 */
export function placeholderImage(stops: string) {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E${stops}%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E`
}
