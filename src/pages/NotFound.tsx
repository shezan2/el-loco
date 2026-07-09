import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/products'

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center bg-espresso px-6 text-center text-masa">
      <p className="kicker-light mb-6">Error 404</p>
      <h1 className="font-display text-[22vw] leading-none font-black sm:text-[12rem]">
        4<span className="italic text-sunset">0</span>4
      </h1>
      <p className="mt-6 font-display text-2xl font-bold sm:text-3xl">This shelf is empty.</p>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-masa/60">
        The page you&apos;re after isn&apos;t stocked here — but the good stuff is only a click
        (or a call to <a href={PHONE_TEL} className="link-line text-mango">{PHONE_DISPLAY}</a>) away.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        <Link
          to="/products"
          className="block rounded-full bg-sunset px-8 py-4 text-sm font-semibold text-espresso transition-colors duration-300 hover:bg-mango"
        >
          Browse the catalog
        </Link>
        <Link to="/" className="link-line text-sm font-medium text-masa/80 hover:text-masa">
          Back to home →
        </Link>
      </div>
    </section>
  )
}
