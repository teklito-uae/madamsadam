export interface Testimonial {
  quote: string
  /**
   * No real client quote/name has been supplied yet. Never fabricate an
   * attributed name — keep this a clearly-marked placeholder until real
   * testimonial data lands.
   */
  attribution: string
}

export const testimonials: Testimonial[] = [
  {
    quote: "They didn't just capture the event. They captured the energy.",
    attribution: 'Client name pending — placeholder testimonial',
  },
]
