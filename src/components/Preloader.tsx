import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import CountUp from './reactbits/CountUp'
import { lenis } from './SmoothScroll'

// Branded intro loader — plays once per session, curtain lifts on completion
export default function Preloader() {
  const [done, setDone] = useState(() => sessionStorage.getItem('elloco-intro') === '1')

  useEffect(() => {
    if (done) return
    lenis?.stop()
    document.documentElement.style.overflow = 'hidden'
    return () => {
      lenis?.start()
      document.documentElement.style.overflow = ''
    }
  }, [done])

  const finish = () => {
    sessionStorage.setItem('elloco-intro', '1')
    setTimeout(() => setDone(true), 350)
  }

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-espresso px-6 py-8 text-masa sm:px-12"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-baseline justify-between">
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-masa/50">
              El Loco Enterprise Pte. Ltd.
            </span>
            <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.3em] text-masa/50 sm:block">
              Singapore
            </span>
          </div>

          <div className="flex items-end justify-between">
            <motion.p
              className="font-display text-[14vw] leading-none font-bold italic sm:text-[9vw]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Hundreds of flavors<span className="text-sunset">.</span>
            </motion.p>
            <p className="font-display text-2xl font-bold tabular-nums text-masa/60 sm:text-4xl">
              <CountUp to={100} duration={1.6} onEnd={finish} />
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
