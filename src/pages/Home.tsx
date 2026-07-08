import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Aurora from '../components/reactbits/Aurora'
import SplitText from '../components/reactbits/SplitText'
import RotatingText from '../components/reactbits/RotatingText'
import ScrollVelocity from '../components/reactbits/ScrollVelocity'
import CountUp from '../components/reactbits/CountUp'
import Magnetic from '../components/Magnetic'
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
  return (
    <section className="relative overflow-hidden bg-espresso text-masa">
      <div className="absolute inset-0 opacity-70">
        <Aurora colorStops={['#f4640a', '#ffb24d', '#ce2c1d']} amplitude={1.0} blend={0.6} speed={0.55} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-espresso/10 via-espresso/40 to-espresso" />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[88rem] flex-col justify-end px-6 pb-10 sm:px-10">
        <div className="mb-auto" />

        <p className="kicker-light mb-8">Wholesale &amp; Retail — Sembawang, Singapore</p>

        <h1 className="font-display font-bold leading-[0.93]">
          <SplitText
            text="Hundreds of"
            tag="span"
            className="block text-[13.5vw] sm:text-[9.5vw]"
            splitType="chars"
            delay={26}
            duration={1.1}
            ease="power4.out"
            from={{ opacity: 0, y: 110 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
          />
          <span className="block text-[13.5vw] italic text-sunset sm:text-[9.5vw]">
            <RotatingText
              texts={FLAVOR_WORDS}
              mainClassName="inline-flex overflow-hidden py-[0.12em] -my-[0.12em]"
              staggerFrom="first"
              staggerDuration={0.018}
              rotationInterval={2600}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-110%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            />
          </span>
          <SplitText
            text="under one roof."
            tag="span"
            className="block text-[13.5vw] sm:text-[9.5vw]"
            splitType="chars"
            delay={26}
            duration={1.1}
            ease="power4.out"
            from={{ opacity: 0, y: 110 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
          />
        </h1>

        {/* Editorial info rail */}
        <div className="hairline-light mt-14 grid grid-cols-2 gap-6 border-t pt-6 sm:grid-cols-4">
          <div>
            <p className="kicker-light mb-2">The shop</p>
            <p className="text-sm text-masa/75">One-stop wholesale &amp; retail. Snacks, drinks, pantry heroes.</p>
          </div>
          <div className="hidden sm:block">
            <p className="kicker-light mb-2">The range</p>
            <p className="text-sm text-masa/75">{PRODUCTS.length} favourites on this site — far more in store.</p>
          </div>
          <div className="hidden sm:block">
            <p className="kicker-light mb-2">The catalog</p>
            <Link to="/products" className="link-line text-sm text-masa/90">Browse the shelves</Link>
          </div>
          <div className="text-right sm:text-left">
            <p className="kicker-light mb-2">To order</p>
            <a href={PHONE_TEL} className="link-line text-sm font-semibold text-mango">{PHONE_DISPLAY}</a>
          </div>
        </div>
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
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory items-stretch gap-[6vw] overflow-x-auto px-6 py-20 lg:h-screen lg:snap-none lg:items-center lg:overflow-visible lg:px-[8vw] lg:py-0"
      >
        {/* Intro panel */}
        <div className="flex w-[80vw] shrink-0 snap-start flex-col justify-center lg:w-[30vw]">
          <p className="kicker mb-5">N°1 — The shelves</p>
          <h2 className="font-display text-5xl font-bold leading-[1.02] sm:text-6xl">
            Taste your way <em className="text-sunset">down the aisle.</em>
          </h2>
          <p className="mt-6 max-w-sm text-base font-light leading-relaxed text-espresso-soft/80">
            Six of the shelves&apos; most-raided flavors. Keep scrolling — the shop keeps going.
          </p>
        </div>

        {FEATURED.map((p, i) => {
          const cat = CATEGORIES.find(c => c.id === p.categoryId)!
          return (
            <figure key={p.name} className="w-[72vw] shrink-0 snap-start sm:w-[48vw] lg:w-[26vw]">
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
        <div className="flex w-[70vw] shrink-0 snap-start flex-col items-start justify-center lg:w-[26vw]">
          <p className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            …and {PRODUCTS.length - FEATURED.length}+ more waiting.
          </p>
          <Magnetic>
            <Link
              to="/products"
              className="mt-8 block rounded-full bg-espresso px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-masa transition-colors duration-300 hover:bg-sunset"
            >
              Full catalog
            </Link>
          </Magnetic>
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
            <p className="font-display text-5xl font-black tracking-tight sm:text-6xl">
              <CountUp to={s.to} duration={1.6} className="tabular-nums" separator={s.year ? '' : ','} />
              <span className="text-sunset">{s.suffix}</span>
            </p>
            <p className="kicker mt-3">{s.label}</p>
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
          {STEPS.map(s => (
            <div key={s.n} className="hairline-light group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t py-8 transition-colors duration-500 hover:bg-masa/[0.04] sm:grid-cols-[8rem_1fr_1.2fr] sm:gap-10">
              <span className="font-display text-2xl font-bold italic text-masa/30 transition-colors duration-500 group-hover:text-sunset sm:text-4xl">
                {s.n}
              </span>
              <h3 className="font-display text-2xl font-bold sm:text-4xl">{s.title}</h3>
              <p className="col-span-2 max-w-md text-sm font-light leading-relaxed text-masa/60 sm:col-span-1 sm:text-base">
                {s.body}
              </p>
            </div>
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
          <Magnetic strength={0.2}>
            <a
              href={PHONE_TEL}
              className="block font-display text-[9vw] font-black tracking-tight text-masa transition-colors duration-300 hover:text-sunset sm:text-[6.5vw]"
            >
              {PHONE_DISPLAY}
            </a>
          </Magnetic>
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
