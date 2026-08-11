import { RevealText, RevealImage, CursorTarget } from '@/components/motion'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

// Four-item zigzag: large/small pairing per row, no two adjacent items
// share an aspect ratio or column span.
const layout = [
  { span: 'md:col-span-7', aspect: 'aspect-[4/3] md:aspect-[3/4]', offset: '' },
  { span: 'md:col-span-5', aspect: 'aspect-[4/3] md:aspect-square', offset: 'md:mt-20' },
  { span: 'md:col-span-5', aspect: 'aspect-[4/3] md:aspect-[4/5]', offset: '' },
  { span: 'md:col-span-7', aspect: 'aspect-[4/3] md:aspect-[16/10]', offset: 'md:-mt-16' },
]

export function SelectedStories() {
  return (
    <section id="work" className="bg-bg-0 px-6 py-32 sm:px-10">
      <div className="mb-16 flex flex-col gap-6 sm:mb-24 sm:flex-row sm:items-end sm:justify-between">
        <RevealText
          as="h2"
          lines={['SELECTED STORIES']}
          className="font-display text-4xl text-ivory uppercase sm:text-5xl"
        />
        <p className="max-w-xs text-sm text-grey">
          A collection of moments, people, brands and experiences we&rsquo;ve
          brought to life.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
        {projects.map((project, i) => {
          const l = layout[i % layout.length]
          return (
            <div key={project.title} className={cn(l.span, l.offset)}>
              <CursorTarget label="VIEW">
                <div className={cn('group relative overflow-hidden', l.aspect)}>
                  <RevealImage
                    src={project.image}
                    alt={project.title}
                    containerClassName="absolute inset-0"
                    className="transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-1 lg:p-8">
                    <h3 className="font-display text-2xl text-ivory uppercase lg:text-3xl">
                      {project.title}
                    </h3>
                    <span className="text-right text-[11px] tracking-[0.2em] text-grey uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>
              </CursorTarget>
            </div>
          )
        })}
      </div>
    </section>
  )
}
