import { Link } from 'react-router-dom'
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL, UEN } from '../data/products'

export default function Footer() {
  return (
    <footer className="hairline-light overflow-hidden border-t bg-espresso text-masa">
      <div className="mx-auto max-w-[88rem] px-6 pt-16 sm:px-10">
        <div className="grid gap-12 pb-16 sm:grid-cols-3">
          <div>
            <p className="kicker-light mb-4">Explore</p>
            <div className="space-y-1.5 text-sm">
              <Link to="/" className="link-line block w-fit text-masa/70 hover:text-masa">Home</Link>
              <Link to="/products" className="link-line block w-fit text-masa/70 hover:text-masa">Products</Link>
              <Link to="/about" className="link-line block w-fit text-masa/70 hover:text-masa">About Us</Link>
            </div>
          </div>
          <div>
            <p className="kicker-light mb-4">Visit</p>
            <p className="max-w-[26ch] text-sm leading-relaxed text-masa/70">{ADDRESS}</p>
            <p className="mt-2 text-xs text-masa/40">UEN {UEN}</p>
          </div>
          <div>
            <p className="kicker-light mb-4">Order</p>
            <a href={PHONE_TEL} className="link-line block w-fit text-sm font-semibold text-mango">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="link-line mt-1.5 block w-fit text-sm text-masa/70 hover:text-masa">{EMAIL}</a>
          </div>
        </div>
      </div>

      {/* Giant wordmark cropped at the fold */}
      <div className="relative select-none" aria-hidden="true">
        <p className="mx-auto -mb-[0.24em] max-w-[88rem] px-6 text-center font-display text-[21vw] font-black leading-none tracking-tight text-masa/[0.07] sm:px-10">
          El Loco
        </p>
      </div>

      <div className="hairline-light border-t py-5 text-center text-[0.65rem] uppercase tracking-[0.2em] text-masa/35">
        © {new Date().getFullYear()} El Loco Enterprise Pte. Ltd. — All product names are trademarks of their respective owners
      </div>
    </footer>
  )
}
