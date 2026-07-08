import { Link } from 'react-router-dom'
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL, UEN } from '../data/products'

export default function Footer() {
  return (
    <footer className="bg-espresso pt-16 pb-10 text-masa">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 border-b border-masa/10 pb-12 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="font-display text-3xl font-bold italic">El Loco</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-mango">
              Enterprise Pte. Ltd.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-masa/60">
              Hundreds of flavors under one roof — wholesale &amp; retail, Singapore.
            </p>
          </div>

          <div className="text-sm leading-relaxed text-masa/70">
            <p className="kicker mb-3 !text-mango">Explore</p>
            <Link to="/" className="block py-0.5 transition-colors hover:text-mango">Home</Link>
            <Link to="/products" className="block py-0.5 transition-colors hover:text-mango">Products</Link>
            <Link to="/about" className="block py-0.5 transition-colors hover:text-mango">About Us</Link>
          </div>

          <div className="text-sm leading-relaxed">
            <p className="kicker mb-3 !text-mango">Talk to Us</p>
            <a href={PHONE_TEL} className="block font-semibold text-sunset transition-colors hover:text-mango">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="mt-2 block text-masa/70 transition-colors hover:text-mango">
              {EMAIL}
            </a>
            <p className="mt-3 text-masa/50">{ADDRESS}</p>
            <p className="mt-1 text-masa/50">UEN: {UEN}</p>
          </div>
        </div>

        <p className="pt-8 text-center text-xs text-masa/40">
          © {new Date().getFullYear()} El Loco Enterprise Pte. Ltd. · All product names are
          trademarks of their respective owners.
        </p>
      </div>
    </footer>
  )
}
