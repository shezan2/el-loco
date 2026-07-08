import { Link } from 'react-router-dom'
import {
  ADDRESS,
  CATEGORIES,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PRODUCTS,
  WHATSAPP,
} from '../data/products'

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-20">
      <p className="text-sm font-semibold text-brand-deep">Wholesale &amp; retail · Sembawang, Singapore</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
        Snacks, drinks and pantry staples from around the region.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        We stock Indonesian and regional favourites like Pop Mie, Nabati, Teh Botol Sosro and Bon
        Cabe. Buy by the carton for your shop, or by the pack for your pantry. To order, call or
        WhatsApp us and we&apos;ll confirm stock and pricing on the spot.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={PHONE_TEL}
          className="rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-deep"
        >
          Call {PHONE_DISPLAY}
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-ink/20 px-5 py-3 text-sm font-semibold hover:border-ink/40"
        >
          WhatsApp us
        </a>
        <Link to="/products" className="px-2 py-3 text-sm font-semibold text-brand-deep hover:underline">
          Browse the catalog
        </Link>
      </div>
    </section>
  )
}

function Categories() {
  return (
    <section className="border-t border-ink/10 bg-cream-deep/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What we stock</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map(c => {
            const count = PRODUCTS.filter(p => p.categoryId === c.id).length
            return (
              <Link
                key={c.id}
                to={`/products?category=${c.id}`}
                className="rounded-lg border border-ink/10 bg-cream p-6 hover:border-ink/25"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <span className="text-xs font-medium text-ink-soft">{count} listed</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.blurb}</p>
              </Link>
            )
          })}
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          The catalog on this site covers our regulars. The range in store is bigger, so if you are
          after something specific, just ask.
        </p>
      </div>
    </section>
  )
}

const STEPS = [
  {
    title: 'Browse the catalog',
    body: 'Have a look through the products page and note down what you want, with quantities.',
  },
  {
    title: 'Call or WhatsApp us',
    body: 'We’ll confirm stock and give you pricing, whether it’s a few packs or a few cartons.',
  },
  {
    title: 'Collect or arrange delivery',
    body: 'Pick up from our Sembawang unit, or talk to us about delivery for larger orders.',
  },
]

function HowToOrder() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How ordering works</h2>
      <p className="mt-2 max-w-xl text-ink-soft">
        There&apos;s no online checkout. Orders are taken over the phone or WhatsApp.
      </p>
      <ol className="mt-8 grid gap-6 sm:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={s.title} className="rounded-lg border border-ink/10 bg-cream p-6">
            <span className="text-sm font-bold text-brand-deep">Step {i + 1}</span>
            <h3 className="mt-1 font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Visit() {
  return (
    <section className="border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 sm:px-8 sm:py-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Visit the shop</h2>
          <p className="mt-3 leading-relaxed text-cream/80">{ADDRESS}</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm font-semibold text-cream underline underline-offset-4 hover:text-white"
          >
            Open in Google Maps
          </a>
          <p className="mt-4 text-sm text-cream/60">
            Coming for a wholesale order? Call ahead and we&apos;ll have it packed for collection.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <a
            href={PHONE_TEL}
            className="rounded-md bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-deep"
          >
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-cream/30 px-6 py-3 font-semibold text-cream hover:border-cream/60"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HowToOrder />
      <Visit />
    </>
  )
}
