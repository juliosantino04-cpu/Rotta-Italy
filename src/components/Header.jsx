import { useState } from "react"
import logo from "../assets/logo rotta italy azul.png"
import { NavLink } from "react-router-dom"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">

      <div className="header-left">

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <NavLink to="/" className="logo">
  <img src={logo} alt="Rotta Italy" />
</NavLink>
      </div>

      <div className="header-buttons">

        <NavLink
          to="/mentoria"
          className="options-button"
        >
          Conhecer opções
        </NavLink>

        <a
          href="https://members.kiwify.com/?club=040aa48d-afc4-4fa0-9575-8ee26c8f7343"
          target="_blank"
          rel="noopener noreferrer"
          className="student-access"
        >
          Já é mentorado? Acessar página do aluno
        </a>

      </div>

      {/* MENU LATERAL */}

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>

        <button
          className="close-menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        <nav className="side-menu-links">

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            A Rotta
          </NavLink>

          <NavLink to="/mentoria" onClick={() => setMenuOpen(false)}>
            Mentoria
          </NavLink>

          <NavLink to="/bolsas" onClick={() => setMenuOpen(false)}>
            Bolsas
          </NavLink>

<NavLink to="/universidades" onClick={() => setMenuOpen(false)}>
  Universidades
</NavLink>
          <NavLink to="/sobre" onClick={() => setMenuOpen(false)}>
            Sobre
          </NavLink>

          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>

          <NavLink to="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </NavLink>

        </nav>

      </div>

      {/* FUNDO ESCURO */}

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

    </header>
   
  )
}

export default Header