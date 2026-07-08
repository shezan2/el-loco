import { Link, NavLink } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/products'

const LINKS = [
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="text-lg font-extrabold tracking-tight">
          El Loco <span className="font-medium text-ink-soft">Enterprise</span>
        </Link>

        <div className="flex items-center gap-5 sm:gap-8">
          {LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-brand-deep' : 'text-ink-soft hover:text-ink'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={PHONE_TEL}
            className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-deep"
          >
            <span className="sm:hidden">Call us</span>
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
