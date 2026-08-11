import { useLenis } from 'lenis/react'
import { useReducedMotion } from 'framer-motion'
import logo from '@/assets/mds-logo.webp'

const NAV_ITEMS = [
  { label: 'WORK', href: '#work' },
  { label: 'SERVICES', href: '#services' },
  { label: 'STORY', href: '#story' },
  { label: 'CONTACT', href: '#contact' },
]

// No real social URLs supplied yet — omit rather than link to `#` or a guess.
const SOCIAL_LINKS: { label: string; href: string }[] = []

export function Footer() {
  const lenis = useLenis()
  const reducedMotion = useReducedMotion()

  function handleBackToTop() {
    if (lenis) {
      lenis.scrollTo(0)
    } else {
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
    }
  }

  return (
    <footer className="border-t border-white/10 bg-bg-0 px-6 py-16 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <img src={logo} alt="MADAMS ADAM" className="h-6 w-auto invert" />
          <p className="mt-4 text-xs tracking-[0.2em] text-grey uppercase">
            Create. Connect. Become.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.2em] text-grey uppercase transition-colors hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {SOCIAL_LINKS.length > 0 && (
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs tracking-[0.2em] text-grey uppercase transition-colors hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
        <p className="text-xs tracking-[0.1em] text-grey/70 uppercase">
          MADAMS ADAM — Creative House — UAE · © {new Date().getFullYear()}
        </p>
        <button
          type="button"
          onClick={handleBackToTop}
          className="text-xs tracking-[0.2em] text-grey uppercase transition-colors hover:text-ivory"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
