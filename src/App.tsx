import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SmoothScroll, { lenis } from './components/SmoothScroll'
import Preloader from './components/Preloader'
import { IntroContext } from './components/introContext'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'

// Route-level code splitting — each page (and its animation deps) loads on demand
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
    const t = setTimeout(() => ScrollTrigger.refresh(), 120)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Suspense fallback={<div className="min-h-svh bg-espresso" />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [introDone, setIntroDone] = useState(() => sessionStorage.getItem('elloco-intro') === '1')

  return (
    <BrowserRouter>
      <IntroContext.Provider value={introDone}>
        <SmoothScroll />
        <Preloader onDone={() => setIntroDone(true)} />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
      </IntroContext.Provider>
    </BrowserRouter>
  )
}
