import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SmoothScroll, { lenis } from './components/SmoothScroll'
import Preloader from './components/Preloader'
import { IntroContext } from './components/introContext'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'

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
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
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
