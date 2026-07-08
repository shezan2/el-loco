import { Link } from 'react-router-dom'
import { ADDRESS, EMAIL, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, UEN, WHATSAPP } from '../data/products'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-deep/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-3 sm:px-8">
        <div>
          <p className="text-lg font-extrabold tracking-tight">El Loco Enterprise</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
            Wholesale and retail snacks, drinks and pantry goods in Sembawang, Singapore.
          </p>
          <p className="mt-3 text-xs text-ink-soft/70">UEN {UEN}</p>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-semibold">Pages</p>
          <div className="space-y-1.5 text-ink-soft">
            <Link to="/" className="block hover:text-ink">Home</Link>
            <Link to="/products" className="block hover:text-ink">Products</Link>
            <Link to="/about" className="block hover:text-ink">About us</Link>
          </div>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-semibold">Contact</p>
          <div className="space-y-1.5 text-ink-soft">
            <a href={PHONE_TEL} className="block hover:text-ink">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="block hover:text-ink">
              WhatsApp us
            </a>
            <a href={`mailto:${EMAIL}`} className="block hover:text-ink">{EMAIL}</a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="block hover:text-ink">
              {ADDRESS}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10 py-4 text-center text-xs text-ink-soft/70">
        © {new Date().getFullYear()} El Loco Enterprise Pte. Ltd. Product names belong to their
        respective brands.
      </div>
    </footer>
  )
}
