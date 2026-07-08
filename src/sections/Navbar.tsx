import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Magnetic from '../components/Magnetic'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/products'

const LINKS = [
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const dark = (pathname === '/' && !scrolled) || false

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
        dark
          ? 'border-b border-transparent bg-transparent py-6'
          : 'hairline border-b bg-masa/85 py-3.5 backdrop-blur-md'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[88rem] items-center justify-between px-6 sm:px-10 ${
          dark ? 'text-masa' : 'text-espresso'
        }`}
      >
        <Link to="/" className="flex items-baseline gap-2.5 whitespace-nowrap">
          <span className="font-display text-[1.35rem] font-bold italic leading-none">El Loco</span>
          <span className={`hidden text-[0.6rem] font-semibold uppercase tracking-[0.28em] sm:inline ${dark ? 'text-masa/50' : 'text-espresso/45'}`}>
            Enterprise
          </span>
        </Link>

        <div className="flex items-center gap-5 sm:gap-12">
          {LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `link-line text-[0.8rem] font-medium uppercase tracking-[0.18em] ${isActive ? 'is-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Magnetic strength={0.25}>
            <a
              href={PHONE_TEL}
              className={`block rounded-full border px-5 py-2.5 text-[0.8rem] font-semibold tracking-wide transition-colors duration-300 ${
                dark
                  ? 'border-masa/30 hover:bg-masa hover:text-espresso'
                  : 'border-espresso/25 hover:bg-espresso hover:text-masa'
              }`}
            >
              <span className="sm:hidden">Call us</span>
              <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            </a>
          </Magnetic>
        </div>
      </nav>
    </header>
  )
}
