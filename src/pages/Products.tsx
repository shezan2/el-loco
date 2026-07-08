import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import DotGrid from '../components/reactbits/DotGrid'
import GradientText from '../components/reactbits/GradientText'
import TiltedCard from '../components/reactbits/TiltedCard'
import ShinyText from '../components/reactbits/ShinyText'
import { CATEGORIES, PHONE_DISPLAY, PHONE_TEL, PRODUCTS, type Accent } from '../data/products'

const ACCENT_CHIP: Record<Accent, string> = {
  sunset: 'bg-sunset',
  chili: 'bg-chili',
  mango: 'bg-mango',
  pandan: 'bg-pandan',
}

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
      {/* Header band with React Bits DotGrid */}
      <section className="relative overflow-hidden bg-espresso pt-36 pb-20 text-masa">
        <div className="absolute inset-0 opacity-60">
          <DotGrid
            dotSize={4}
            gap={26}
            baseColor="#3b2a20"
            activeColor="#f4640a"
            proximity={130}
            shockRadius={220}
          />
        </div>
        <div className="pointer-events-none relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
          <p className="kicker mb-4 !text-mango">The Full Catalog</p>
          <h1 className="font-display text-5xl font-bold leading-tight sm:text-6xl">
            Every product,{' '}
            <GradientText
              colors={['#f4640a', '#ffb24d', '#ce2c1d', '#ffb24d', '#f4640a']}
              animationSpeed={5}
              className="font-display font-bold italic"
            >
              every flavor.
            </GradientText>
          </h1>
          <p className="mt-5 max-w-xl text-lg font-light leading-relaxed text-masa/70">
            Browse the shelves, note what you want, then call{' '}
            <a href={PHONE_TEL} className="pointer-events-auto font-semibold text-mango underline-offset-4 hover:underline">
              {PHONE_DISPLAY}
            </a>{' '}
            to order. View-only catalog — the checkout is a conversation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        {/* Category filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          <button
            onClick={() => setCategory('all')}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              active === 'all'
                ? 'bg-espresso text-masa shadow-lg'
                : 'border border-espresso/15 bg-white/60 hover:border-espresso/40'
            }`}
          >
            All ({PRODUCTS.length})
          </button>
          {CATEGORIES.map(c => {
            const count = PRODUCTS.filter(p => p.categoryId === c.id).length
            return (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === c.id
                    ? `${ACCENT_CHIP[c.accent]} text-masa shadow-lg`
                    : 'border border-espresso/15 bg-white/60 hover:border-espresso/40'
                }`}
              >
                {c.title} ({count})
              </button>
            )
          })}
        </div>

        {/* Product grid — React Bits TiltedCard imagery */}
        <motion.div layout className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map(p => {
              const cat = CATEGORIES.find(c => c.id === p.categoryId)!
              return (
                <motion.article
                  key={p.name}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltedCard
                    imageSrc={p.image}
                    altText={p.name}
                    containerHeight="240px"
                    containerWidth="100%"
                    imageHeight="240px"
                    imageWidth="100%"
                    rotateAmplitude={9}
                    scaleOnHover={1.06}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent
                    overlayContent={
                      <span
                        className={`m-3 inline-block rounded-full px-3 py-1 text-xs font-bold text-masa ${ACCENT_CHIP[cat.accent]}`}
                      >
                        {cat.title}
                      </span>
                    }
                  />
                  <div className="mt-4 px-1">
                    <h3 className="font-display text-xl font-bold leading-snug">{p.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-espresso-soft/80">{p.note}</p>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA strip */}
        <div className="mt-20 rounded-[2rem] bg-espresso px-8 py-12 text-center text-masa sm:px-14">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Spotted something you like?
          </h2>
          <a
            href={PHONE_TEL}
            className="mt-6 inline-block rounded-full bg-sunset px-9 py-4 text-lg font-bold text-masa shadow-xl shadow-sunset/30 transition-transform hover:scale-[1.04]"
          >
            Call us directly · {PHONE_DISPLAY}
          </a>
          <div className="mt-4">
            <ShinyText
              text="Wholesale cartons or retail packs — we do both"
              className="text-sm"
              color="#8a7565"
              shineColor="#ffe8d6"
              speed={3}
            />
          </div>
          <p className="mt-6 text-sm text-masa/50">
            Can&apos;t find what you need?{' '}
            <Link to="/about" className="text-mango underline-offset-4 hover:underline">
              Ask the team
            </Link>{' '}
            — the full range in-store is far bigger than this page.
          </p>
        </div>
      </section>
    </>
  )
}
