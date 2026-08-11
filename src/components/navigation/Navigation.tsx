import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '@/assets/Asset 6.webp'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'WORK', href: '#work' },
  { label: 'SERVICES', href: '#services' },
  { label: 'STORY', href: '#story' },
  { label: 'CONTACT', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!open) toggleRef.current?.focus()
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-[100] border-b transition-colors duration-500',
          scrolled
            ? 'border-border bg-bg-0/80 backdrop-blur-md'
            : 'border-transparent bg-transparent',
        )}
      >
        <div
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10"
          style={{ paddingTop: 'max(1.25rem, env(safe-area-inset-top))' }}
        >
          <a href="#" aria-label="MADAMS ADAM — home" className="flex items-center">
            <img src={logo} alt="" className="h-5 w-auto invert sm:h-6" />
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-10 text-xs tracking-[0.2em] text-ivory uppercase md:flex"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-opacity hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative z-[160] flex h-6 w-7 flex-col items-end justify-center gap-1.5"
          >
            <motion.span
              className="h-px w-full bg-ivory"
              animate={open ? { rotate: 45, y: 3.5, width: '100%' } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="h-px w-4/5 bg-ivory"
              animate={open ? { rotate: -45, y: -3.5, width: '100%' } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="bg-bg-0 fixed inset-0 z-[150] flex flex-col justify-center gap-2 px-6 sm:px-10"
            style={{
              paddingLeft: 'max(1.5rem, env(safe-area-inset-left))',
              paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display text-5xl text-ivory uppercase transition-opacity hover:opacity-60 sm:text-7xl"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
