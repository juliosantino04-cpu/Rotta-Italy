import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"

import Home from "./pages/Home"
import Mentoria from "./pages/Mentoria"
import Bolsas from "./pages/Bolsas"
import Sobre from "./pages/Sobre"
import Blog from "./pages/Blog"
import FAQ from "./pages/FAQ"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/bolsas" element={<Bolsas />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App