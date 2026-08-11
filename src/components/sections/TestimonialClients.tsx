import { RevealText } from '@/components/motion'
import { clientCategories } from '@/data/clients'
import { testimonials } from '@/data/testimonials'

export function TestimonialClients() {
  const testimonial = testimonials[0]

  return (
    <section id="testimonial" className="bg-bg-0">
      <div className="px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-36">
        <RevealText
          as="blockquote"
          lines={[testimonial.quote.toUpperCase()]}
          className="mx-auto max-w-4xl font-display text-[9vw] leading-[1.1] text-ivory uppercase sm:text-[5vw] lg:text-[3.5rem]"
        />
        <p className="mt-8 text-xs tracking-[0.2em] text-grey uppercase italic">
          {testimonial.attribution}
        </p>
      </div>

      <div className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <RevealText
          as="h2"
          lines={['MADE WITH PEOPLE', 'WHO MOVE CULTURE.']}
          className="mx-auto max-w-2xl text-center font-display text-4xl text-ivory uppercase sm:text-5xl"
        />

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {clientCategories.map((client) => (
            <div
              key={client.category}
              className="group flex items-center justify-center border-b border-white/10 pb-6"
            >
              <span className="font-display text-sm tracking-[0.15em] text-grey uppercase opacity-50 transition-opacity duration-500 ease-out group-hover:text-ivory group-hover:opacity-100">
                {client.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
