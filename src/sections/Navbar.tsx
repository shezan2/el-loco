import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/products'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const overHero = pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        overHero ? 'bg-transparent py-6' : 'bg-espresso/90 py-3 shadow-lg shadow-espresso/20 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-baseline gap-2 text-masa">
          <span className="font-display text-2xl font-bold italic">El Loco</span>
          <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.2em] text-mango sm:inline">
            Enterprise
          </span>
        </Link>

        <div className="flex items-center gap-5 sm:gap-8">
          {LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-mango' : 'text-masa/80 hover:text-mango'
                } ${l.to === '/' ? 'hidden sm:inline' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <a
          href={PHONE_TEL}
          className="rounded-full bg-sunset px-4 py-2 text-sm font-semibold text-masa transition-transform hover:scale-105 hover:bg-sunset-deep sm:px-5"
        >
          <span className="lg:hidden">Call us</span>
          <span className="hidden lg:inline">Call {PHONE_DISPLAY}</span>
        </a>
      </nav>
    </header>
  )
}
