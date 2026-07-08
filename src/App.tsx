import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
