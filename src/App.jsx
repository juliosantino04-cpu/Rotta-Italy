import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Header from "./components/Header"

import Home from "./pages/Home"
import Mentoria from "./pages/Mentoria"
import Bolsas from "./pages/Bolsas"
import Universidades from "./pages/Universidades"
import Sobre from "./pages/Sobre"
import Produtos from "./pages/Produtos"
import Blog from "./pages/Blog"
import FAQ from "./pages/FAQ"

import "./App.css"
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
function App() {
  return (
    <BrowserRouter>
  <ScrollToTop />
  <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/bolsas" element={<Bolsas />} />
        <Route path="/universidades" element={<Universidades />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App