import { CursorTarget, RevealImage, RevealText } from '@/components/motion'
import { projects, type Project } from '@/data/projects'
import { cn } from '@/lib/utils'

interface LayoutSpec {
  wrapperClassName: string
  aspectClassName: string
}

/** Distinct span/aspect/offset per slot so no two adjacent tiles match. */
const LAYOUT: LayoutSpec[] = [
  { wrapperClassName: 'md:col-span-7', aspectClassName: 'aspect-[4/5]' },
  { wrapperClassName: 'md:col-span-5 md:mt-24', aspectClassName: 'aspect-square' },
  { wrapperClassName: 'md:col-span-5', aspectClassName: 'aspect-[3/4]' },
  { wrapperClassName: 'md:col-span-7 md:mt-16', aspectClassName: 'aspect-[16/9]' },
]

function ProjectTile({ project, layout }: { project: Project; layout: LayoutSpec }) {
  return (
    <div className={cn('group', layout.wrapperClassName)}>
      <CursorTarget label="VIEW">
        <div className={cn('relative overflow-hidden', layout.aspectClassName)}>
          <RevealImage
            src={project.image}
            alt=""
            containerClassName="absolute inset-0"
            className="transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <RevealText
              as="h3"
              lines={[project.title]}
              className="font-display text-2xl text-ivory uppercase sm:text-3xl"
            />
            <p className="mt-2 text-xs tracking-[0.15em] text-grey uppercase">
              {project.category}
              {project.year ? ` — ${project.year}` : ''}
            </p>
          </div>
        </div>
      </CursorTarget>
    </div>
  )
}

export function SelectedStories() {
  return (
    <section id="work" className="bg-bg-0 px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mb-12 max-w-xl lg:mb-20">
        <RevealText
          as="h2"
          lines={['SELECTED STORIES']}
          className="font-display text-4xl text-ivory uppercase sm:text-5xl lg:text-6xl"
        />
        <p className="mt-4 text-sm tracking-[0.05em] text-grey uppercase sm:text-base">
          A collection of moments, people, brands and experiences we&rsquo;ve
          brought to life.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
        {projects.map((project, i) => (
          <ProjectTile key={project.title} project={project} layout={LAYOUT[i % LAYOUT.length]} />
        ))}
      </div>
    </section>
  )
}
