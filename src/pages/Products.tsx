import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import GlareHover from '../components/reactbits/GlareHover'
import Magnet from '../components/reactbits/Magnet'
import AnimatedContent from '../components/reactbits/AnimatedContent'
import SplitLine from '../components/SplitLine'
import { CATEGORIES, PHONE_DISPLAY, PHONE_TEL, PRODUCTS } from '../data/products'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Products() {
  const [params, setParams] = useSearchParams()
  const active = params.get('category') ?? 'all'

  const filtered = useMemo(
    () => (active === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.categoryId === active)),
    [active]
  )

  const setCategory = (id: string) => {
    if (id === 'all') setParams({}, { replace: true })
    else setParams({ category: id }, { replace: true })
  }

  return (
    <>
      {/* Editorial header */}
      <section className="mx-auto max-w-[88rem] px-6 pt-40 pb-14 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="kicker mb-6">The Catalog — {PRODUCTS.length} products</p>
            <h1 className="font-display font-bold leading-[1.02]">
              <SplitLine text="Every product," className="text-6xl sm:text-8xl" />
              <SplitLine text="every flavor." className="text-6xl italic text-sunset sm:text-8xl" />
            </h1>
          </div>
          <p className="max-w-xs pb-2 text-sm font-light leading-relaxed text-espresso-soft/70">
            A view-only catalog — the checkout is a conversation. Note what you like, then call{' '}
            <a href={PHONE_TEL} className="link-line font-semibold text-espresso">{PHONE_DISPLAY}</a>.
          </p>
        </div>

        {/* Filter rail */}
        <div className="hairline mt-14 flex flex-wrap gap-x-9 gap-y-4 border-t pt-6">
          {[{ id: 'all', title: 'All' }, ...CATEGORIES].map(c => {
            const count = c.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.categoryId === c.id).length
            const isActive = active === c.id
            return (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`link-line pb-1 text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive ? 'is-active text-espresso' : 'text-espresso/40 hover:text-espresso'
                }`}
              >
                {c.title}
                <sup className="ml-1 text-[0.6rem] font-bold text-sunset">{count}</sup>
              </button>
            )
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-[88rem] px-6 pb-28 sm:px-10">
        <motion.div layout className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const cat = CATEGORIES.find(c => c.id === p.categoryId)!
              return (
                <motion.article
                  key={p.name}
                  layout
                  initial={{ opacity: 0, y: 40, clipPath: 'inset(12% 0% 12% 0%)' }}
                  animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
                  exit={{ opacity: 0, y: -24, clipPath: 'inset(12% 0% 12% 0%)' }}
                  transition={{ duration: 0.7, delay: (i % 3) * 0.07, ease: EASE }}
                  className="group"
                >
                  <div className="img-frame relative aspect-[4/5] bg-masa-deep">
                    <GlareHover
                      width="100%"
                      height="100%"
                      background="transparent"
                      borderRadius="0"
                      borderColor="transparent"
                      glareColor="#fff8ee"
                      glareOpacity={0.35}
                      glareAngle={-30}
                      glareSize={260}
                      transitionDuration={850}
                      className="!absolute !inset-0 !border-0"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </GlareHover>
                  </div>
                  <div className="hairline mt-5 flex items-baseline justify-between gap-4 border-t pt-4">
                    <div>
                      <h3 className="font-display text-xl font-bold leading-snug">{p.name}</h3>
                      <p className="mt-1.5 max-w-[34ch] text-xs leading-relaxed text-espresso-soft/65">{p.note}</p>
                    </div>
                    <span className="kicker whitespace-nowrap">
                      {String(i + 1).padStart(2, '0')} — {cat.title}
                    </span>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Editorial CTA */}
        <AnimatedContent distance={50} duration={0.9} ease="power3.out">
          <div className="hairline mt-28 border-t pt-16 text-center">
          <p className="kicker mb-6">Spotted something you like?</p>
          <Magnet padding={110} magnetStrength={5}>
            <a
              href={PHONE_TEL}
              className="block font-display text-[10vw] font-black tracking-tight transition-colors duration-300 hover:text-sunset sm:text-[6vw]"
            >
              {PHONE_DISPLAY}
            </a>
          </Magnet>
          <p className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-espresso-soft/70">
            Wholesale cartons or retail packs — we do both. The in-store range is far bigger than
            this page; if you don&apos;t see it, ask.
          </p>
          </div>
        </AnimatedContent>
      </section>
    </>
  )
}
