import { AnimatePresence, motion } from 'framer-motion'
import icon from '@/assets/madams-adams-favicon.webp'

interface PageTransitionProps {
  show: boolean
  onExitComplete?: () => void
}

/** Black overlay + mark, used for the preloader and (later) route changes. Keep total time under ~700ms. */
export function PageTransition({ show, onExitComplete }: PageTransitionProps) {
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {show && (
        <motion.div
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="bg-bg-0 fixed inset-0 z-[200] flex items-center justify-center"
        >
          <motion.img
            src={icon}
            alt=""
            className="invert h-10 w-10"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
