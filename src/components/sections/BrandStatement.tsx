import { RevealText } from '@/components/motion'

export function BrandStatement() {
  return (
    <section
      id="brand-statement"
      className="flex min-h-[70vh] items-center justify-center bg-bg-0 px-6 py-32 text-center sm:min-h-[80vh]"
    >
      <RevealText
        as="h2"
        lines={['WE CREATE', 'WHAT PEOPLE', 'REMEMBER.']}
        className="font-display text-[13vw] leading-[0.95] text-ivory uppercase sm:text-[8vw] lg:text-[6rem]"
        stagger={0.12}
      />
    </section>
  )
}
