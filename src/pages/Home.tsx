import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import RotatingText from '../components/reactbits/RotatingText'
import ScrollVelocity from '../components/reactbits/ScrollVelocity'
import CountUp from '../components/reactbits/CountUp'
import Magnet from '../components/reactbits/Magnet'
import AnimatedContent from '../components/reactbits/AnimatedContent'
import SplitLine from '../components/SplitLine'
import CallButton from '../components/CallButton'
import ShelfCarousel from '../components/ShelfCarousel'
import { IntroContext } from '../components/introContext'
import { FLAVOR_WORDS, PHONE_DISPLAY, PHONE_TEL, PRODUCTS, CATEGORIES } from '../data/products'

gsap.registerPlugin(ScrollTrigger)

const FEATURED = [
  'Pop Mie Rasa Baso',
  'Nabati Wafer Pink Lava',
  'Luwak White Koffie',
  'Bon Cabe Macaroni Level 10',
  'Teh Botol Sosro',
  'Serunding Beef Floss',
].map(n => PRODUCTS.find(p => p.name === n)!)

function Hero() {
  const introDone = useContext(IntroContext)
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: introDone ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section className="relative overflow-hidden bg-espresso text-masa">
      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[88rem] flex-col items-center justify-center px-6 py-28 text-center sm:px-10">
        <motion.p className="kicker-light mb-8" {...fade(0.1)}>
          Wholesale &amp; Retail — Sembawang, Singapore
        </motion.p>

        <h1 className="font-display font-bold leading-[1.02] tracking-[-0.01em]">
          <SplitLine text="Hundreds of" align="center" className="text-[11.5vw] sm:text-[8.5vw]" />
          <span className="flex justify-center overflow-hidden pb-[0.14em] text-[11.5vw] italic text-sunset sm:text-[8.5vw]">
            <RotatingText
              texts={FLAVOR_WORDS}
              mainClassName="inline-flex justify-center overflow-hidden py-[0.22em] -my-[0.22em] px-[0.22em] -mx-[0.22em]"
              staggerFrom="center"
              staggerDuration={0.02}
              rotationInterval={3000}
              initial={{ y: '115%' }}
              animate={{ y: 0 }}
              exit={{ y: '-115%' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
          <SplitLine text="under one roof." align="center" className="text-[11.5vw] sm:text-[8.5vw]" />
        </h1>

        <motion.p
          className="mt-8 max-w-xl text-base leading-relaxed font-normal text-masa/70 sm:text-lg"
          {...fade(0.35)}
        >
          Your one-stop wholesale and retail shop for high-quality, affordable snacks, drinks and
          pantry heroes from across the region.
        </motion.p>

        <motion.div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4" {...fade(0.5)}>
          <CallButton />
          <Link
            to="/products"
            className="link-line text-sm font-medium tracking-wide text-masa/80 hover:text-masa"
          >
            Browse the products →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function Marquee() {
  return (
    <div className="hairline overflow-hidden border-b bg-masa py-8 sm:py-10">
      <ScrollVelocity
        texts={['Pop Mie ✦ Teh Botol ✦ Bon Cabe ✦ Nabati ✦ Luwak Koffie ✦ Momogi ✦ Serunding ✦ Kakarak ✦ ']}
        velocity={35}
        className="pr-3 font-display text-4xl font-bold italic text-espresso/12 sm:text-6xl"
        numCopies={6}
      />
    </div>
  )
}

function Showcase() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px)', () => {
        const track = trackRef.current!
        const distance = () => track.scrollWidth - window.innerWidth

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })

        // Inner parallax — each photo drifts inside its frame as the shelf slides
        gsap.utils.toArray<HTMLElement>('.hs-img').forEach(img => {
          gsap.fromTo(
            img,
            { xPercent: -7 },
            {
              xPercent: 7,
              ease: 'none',
              scrollTrigger: {
                trigger: img.parentElement,
                containerAnimation: tween,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            }
          )
        })
      })
      return () => mm.revert()
    },
    { scope: wrapRef }
  )

  return (
    <section ref={wrapRef} className="bg-masa">
      {/* Desktop: GSAP-pinned horizontal shelf */}
      <div
        ref={trackRef}
        className="hidden h-screen items-center gap-[6vw] px-[8vw] lg:flex"
      >
        {/* Intro panel */}
        <div className="flex w-[30vw] shrink-0 flex-col justify-center">
          <p className="kicker mb-5">N°1 — The shelves</p>
          <h2 className="font-display text-6xl font-bold leading-[1.02]">
            Taste your way <em className="text-sunset">down the aisle.</em>
          </h2>
          <p className="mt-6 max-w-sm text-base font-light leading-relaxed text-espresso-soft/80">
            Six of the shelves&apos; most-raided flavors. Keep scrolling — the shop keeps going.
          </p>
        </div>

        {FEATURED.map((p, i) => {
          const cat = CATEGORIES.find(c => c.id === p.categoryId)!
          return (
            <figure key={p.name} className="w-[26vw] shrink-0">
              <div className="img-frame relative aspect-[4/5]">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="hs-img h-full w-full scale-[1.16] object-cover"
                />
              </div>
              <figcaption className="hairline mt-5 flex items-baseline justify-between border-t pt-4">
                <div>
                  <p className="font-display text-xl font-bold">{p.name}</p>
                  <p className="mt-1 max-w-[26ch] text-xs leading-relaxed text-espresso-soft/65">{p.note}</p>
                </div>
                <span className="kicker whitespace-nowrap">
                  {String(i + 1).padStart(2, '0')} / {cat.title}
                </span>
              </figcaption>
            </figure>
          )
        })}

        {/* Outro panel */}
        <div className="flex w-[26vw] shrink-0 flex-col items-start justify-center">
          <p className="font-display text-5xl font-bold leading-tight">
            …and {PRODUCTS.length - FEATURED.length}+ more waiting.
          </p>
          <Magnet padding={70} magnetStrength={3.5}>
            <Link
              to="/products"
              className="mt-8 block rounded-full bg-espresso px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-masa transition-colors duration-300 hover:bg-sunset"
            >
              Full catalog
            </Link>
          </Magnet>
        </div>
      </div>

      {/* Mobile / tablet: snap carousel */}
      <div className="px-6 py-16 sm:px-10 lg:hidden">
        <p className="kicker mb-4">N°1 — The shelves</p>
        <h2 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
          Taste your way <em className="text-sunset">down the aisle.</em>
        </h2>
        <p className="mt-4 mb-8 max-w-sm text-sm font-light leading-relaxed text-espresso-soft/80">
          Six of the shelves&apos; most-raided flavors — swipe through.
        </p>

        <ShelfCarousel items={FEATURED} />

        <div className="hairline mt-10 flex items-center justify-between border-t pt-6">
          <p className="font-display text-xl font-bold">
            …and {PRODUCTS.length - FEATURED.length}+ more waiting.
          </p>
          <Link
            to="/products"
            className="block shrink-0 rounded-full bg-espresso px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-masa active:bg-sunset"
          >
            Full catalog
          </Link>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { to: 100, suffix: '+', label: 'Flavors on the shelves' },
    { to: 4, suffix: '', label: 'Ranges under one roof' },
    { to: 2021, suffix: '', label: 'Serving Singapore since', year: true },
    { to: 1, suffix: '', label: 'Call is all it takes' },
  ]
  return (
    <section className="hairline border-t bg-masa">
      <div className="mx-auto grid max-w-[88rem] grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`hairline px-6 py-12 sm:px-10 ${i > 0 ? 'lg:border-l' : ''} ${i % 2 === 1 ? 'border-l lg:border-l' : ''}`}>
            <AnimatedContent distance={44} duration={0.9} ease="power3.out" delay={i * 0.09}>
              <p className="font-display text-5xl font-black tracking-tight sm:text-6xl">
                <CountUp to={s.to} duration={1.6} className="tabular-nums" separator={s.year ? '' : ','} />
                <span className="text-sunset">{s.suffix}</span>
              </p>
              <p className="kicker mt-3">{s.label}</p>
            </AnimatedContent>
          </div>
        ))}
      </div>
    </section>
  )
}

const STEPS = [
  { n: '01', title: 'Browse the catalog', body: 'Take the tour or go straight to the grid — every product, categorised.' },
  { n: '02', title: 'Pick your flavors', body: 'Wholesale cartons or retail packs. Note down names and quantities.' },
  { n: '03', title: 'Call us directly', body: 'Stock, pricing and collection confirmed in one conversation.' },
]

function OrderRitual() {
  return (
    <section className="relative overflow-hidden bg-espresso pb-28 text-masa">
      <div className="mx-auto max-w-[88rem] px-6 pt-24 sm:px-10">
        <p className="kicker-light mb-5">N°2 — How to order</p>
        <h2 className="max-w-3xl font-display text-5xl font-bold leading-[1.02] sm:text-7xl">
          No carts. No checkouts. <em className="text-mango">A phone call.</em>
        </h2>

        <div className="mt-16">
          {STEPS.map((s, i) => (
            <AnimatedContent key={s.n} distance={50} duration={0.9} ease="power3.out" delay={i * 0.08}>
              <div className="hairline-light group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t py-8 transition-colors duration-500 hover:bg-masa/[0.04] sm:grid-cols-[8rem_1fr_1.2fr] sm:gap-10">
                <span className="font-display text-2xl font-bold italic text-masa/30 transition-colors duration-500 group-hover:text-sunset sm:text-4xl">
                  {s.n}
                </span>
                <h3 className="font-display text-2xl font-bold sm:text-4xl">{s.title}</h3>
                <p className="col-span-2 max-w-md text-sm font-light leading-relaxed text-masa/60 sm:col-span-1 sm:text-base">
                  {s.body}
                </p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>

      {/* Giant magnetic phone number over a drifting marquee */}
      <div className="relative mt-24">
        <div className="pointer-events-none absolute inset-0 flex items-center" aria-hidden="true">
          <ScrollVelocity
            texts={['CALL TO ORDER ✦ CALL TO ORDER ✦ ']}
            velocity={25}
            className="pr-3 font-display text-6xl font-black text-masa/[0.06] sm:text-8xl"
            numCopies={6}
          />
        </div>
        <div className="relative flex justify-center py-10">
          <Magnet padding={110} magnetStrength={5}>
            <a
              href={PHONE_TEL}
              className="block font-display text-[9vw] font-black tracking-tight text-masa transition-colors duration-300 hover:text-sunset sm:text-[6.5vw]"
            >
              {PHONE_DISPLAY}
            </a>
          </Magnet>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Showcase />
      <Stats />
      <OrderRitual />
    </>
  )
}
