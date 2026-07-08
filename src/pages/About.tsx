import { Link } from 'react-router-dom'
import {
  ADDRESS,
  EMAIL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  UEN,
  WHATSAPP,
} from '../data/products'

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8 sm:pt-20">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">About us</h1>
        <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-ink-soft">
          <p>
            El Loco Enterprise Pte. Ltd. is a wholesale and retail business in Sembawang,
            Singapore, set up in 2021. We started with a simple observation: the snacks and drinks
            many of us grew up with, especially Indonesian and Malay favourites, were either hard
            to find here or marked up heavily.
          </p>
          <p>
            Today we supply shops, canteens and minimarts by the carton, and sell the same products
            to walk-in customers by the pack. Snacks, instant noodles, beverages and condiments
            make up the bulk of it, alongside a rotating mix of household and pantry items.
          </p>
          <p>
            We keep things simple on purpose. There is no online checkout on this site. You browse,
            you call or WhatsApp, and we sort out stock, pricing and collection directly with you.
          </p>
        </div>
        <Link
          to="/products"
          className="mt-6 inline-block text-sm font-semibold text-brand-deep hover:underline"
        >
          See what we stock
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <iframe
          title="Map showing El Loco Enterprise at Nordcom 1, Gambas Crescent"
          src="https://maps.google.com/maps?q=3%20Gambas%20Cres%2C%20Nordcom%201%2C%20Singapore%20757088&output=embed"
          className="h-72 w-full rounded-lg border border-ink/10"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="mt-4 grid gap-4 rounded-lg border border-ink/10 bg-cream-deep/40 p-6 sm:grid-cols-2 sm:p-8">
          <div>
            <h2 className="text-lg font-bold">Where to find us</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{ADDRESS}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-sm font-semibold text-brand-deep hover:underline"
            >
              Open in Google Maps
            </a>
            <p className="mt-3 text-xs text-ink-soft/70">UEN {UEN}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Get in touch</h2>
            <div className="mt-2 space-y-1 text-sm text-ink-soft">
              <p>
                Phone:{' '}
                <a href={PHONE_TEL} className="font-semibold text-brand-deep hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand-deep hover:underline"
                >
                  message us
                </a>
              </p>
              <p>
                Email:{' '}
                <a href={`mailto:${EMAIL}`} className="font-semibold text-brand-deep hover:underline">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
