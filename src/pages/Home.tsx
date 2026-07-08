import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Aurora from '../components/reactbits/Aurora'
import SplitText from '../components/reactbits/SplitText'
import RotatingText from '../components/reactbits/RotatingText'
import ShinyText from '../components/reactbits/ShinyText'
import ScrollVelocity from '../components/reactbits/ScrollVelocity'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import CountUp from '../components/reactbits/CountUp'
import ClickSpark from '../components/reactbits/ClickSpark'
import HowToOrder from '../sections/HowToOrder'
import {
  CATEGORIES,
  FLAVOR_WORDS,
  PHONE_DISPLAY,
  PHONE_TEL,
  PRODUCTS,
  TICKER_ROW_A,
  TICKER_ROW_B,
} from '../data/products'

const ACCENT_CHIP = {
  sunset: 'bg-sunset',
  chili: 'bg-chili',
  mango: 'bg-mango',
  pandan: 'bg-pandan',
} as const

function Hero() {
  return (
    <section className="relative overflow-hidden bg-espresso text-masa">
      <div className="absolute inset-0 opacity-90">
        <Aurora colorStops={['#f4640a', '#ffb24d', '#ce2c1d']} amplitude={1.1} blend={0.55} speed={0.7} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-espresso/40 to-espresso" />

      <ClickSpark sparkColor="#ffb24d" sparkRadius={28} sparkCount={10}>
        <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-center px-5 pt-28 pb-24 sm:px-8">
          <p className="kicker mb-8 !text-mango">Wholesale &amp; Retail · Sembawang, Singapore</p>

          <SplitText
            text="Hundreds of"
            tag="h1"
            className="font-display text-[13vw] font-bold leading-[0.95] sm:text-7xl lg:text-[6.5rem]"
            splitType="chars"
            delay={30}
            duration={0.9}
            from={{ opacity: 0, y: 70, rotateX: -50 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
            textAlign="left"
          />
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            <RotatingText
              texts={FLAVOR_WORDS}
              mainClassName="inline-flex items-center overflow-hidden rounded-2xl bg-sunset px-5 py-2 font-display text-[10vw] font-bold leading-[1.25] text-masa sm:px-7 sm:py-3 sm:text-6xl lg:text-7xl"
              staggerFrom="last"
              staggerDuration={0.02}
              rotationInterval={2400}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 380 }}
            />
            <SplitText
              text="under one roof."
              tag="h1"
              className="font-display text-[11vw] font-bold leading-none sm:text-6xl lg:text-8xl"
              splitType="chars"
              delay={30}
              duration={0.9}
              from={{ opacity: 0, y: 70, rotateX: -50 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              textAlign="left"
            />
          </div>

          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-base font-light leading-relaxed text-masa/75 sm:text-lg">
              El Loco Enterprise is your one-stop wholesale and retail shop for high-quality,
              affordable snacks, drinks and pantry heroes from across the region.
            </p>
            <div className="flex flex-col items-start gap-3">
              <a
                href={PHONE_TEL}
                className="rounded-full bg-sunset px-8 py-4 text-base font-semibold text-masa shadow-xl shadow-sunset/30 transition-all hover:scale-[1.03] hover:bg-sunset-deep"
              >
                Call us to order · {PHONE_DISPLAY}
              </a>
              <Link to="/products" className="px-2 py-1">
                <ShinyText
                  text="Browse all products →"
                  className="text-sm font-medium"
                  color="#c9b8a8"
                  shineColor="#ffe8d6"
                  speed={2.5}
                />
              </Link>
            </div>
          </div>
        </div>
      </ClickSpark>

      {/* React Bits ScrollVelocity — two counter-scrolling flavor rows */}
      <div className="relative z-10 border-t border-masa/10 bg-espresso/70 py-5 backdrop-blur-sm">
        <ScrollVelocity
          texts={[TICKER_ROW_A, TICKER_ROW_B]}
          velocity={45}
          className="pr-2 font-display text-xl font-bold italic text-masa/40 sm:text-2xl"
          numCopies={8}
          parallaxClassName="py-1"
        />
      </div>
    </section>
  )
}

function CategoryTeasers() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="kicker mb-4">What we stock</p>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Four shelves. <em className="text-sunset">Zero boring bites.</em>
          </h2>
        </div>
        <Link
          to="/products"
          className="rounded-full border-2 border-espresso px-6 py-3 text-sm font-semibold transition-colors hover:bg-espresso hover:text-masa"
        >
          See the full catalog →
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {CATEGORIES.map((c, i) => {
          const count = PRODUCTS.filter(p => p.categoryId === c.id).length
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={i % 2 === 1 ? 'sm:mt-10' : ''}
            >
              <Link to={`/products?category=${c.id}`}>
                <SpotlightCard
                  spotlightColor="rgba(244, 100, 10, 0.12)"
                  className="group rounded-[1.75rem] border border-espresso/8 bg-white/70 p-8 shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-espresso/10"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">{c.title}</h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold text-masa ${ACCENT_CHIP[c.accent]}`}
                    >
                      {count} items
                    </span>
                  </div>
                  <p className="mt-3 max-w-sm leading-relaxed text-espresso-soft/80">{c.blurb}</p>
                  <p className="mt-6 text-sm font-semibold text-sunset-deep transition-transform duration-300 group-hover:translate-x-1">
                    Browse {c.title.toLowerCase()} →
                  </p>
                </SpotlightCard>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { to: 100, suffix: '+', label: 'flavors on the shelves' },
    { to: 4, suffix: '', label: 'product ranges, one roof' },
    { to: 1, suffix: '', label: 'phone call to order' },
  ]
  return (
    <section className="border-y border-espresso/10 bg-masa-deep py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 text-center sm:grid-cols-3 sm:px-8">
        {stats.map(s => (
          <div key={s.label}>
            <p className="font-display text-6xl font-black text-sunset sm:text-7xl">
              <CountUp to={s.to} duration={1.4} className="tabular-nums" />
              {s.suffix}
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-espresso-soft/70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryTeasers />
      <Stats />
      <HowToOrder />
    </>
  )
}
