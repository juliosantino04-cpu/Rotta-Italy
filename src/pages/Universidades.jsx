import React from "react";
import "../App.css";
import fotoia4 from "../assets/fotoia4.png";

export default function Universidades() {
  return (
    <main className="universidades-page">
      <section
        className="universidades-hero"
        style={{ backgroundImage: `url(${fotoia4})` }}
      >
        <div className="universidades-hero-overlay"></div>

        <div className="universidades-hero-content">
          <span className="universidades-hero-tag">
            ESTUDE NA ITÁLIA
          </span>

          <h1>
            Encontre a universidade
            <br />
            <span>certa para o seu futuro.</span>
          </h1>

          <p>
            Descubra as melhores universidades da Itália e encontre
            o curso ideal para transformar seus planos de estudo
            em uma experiência internacional.
          </p>

          <div className="universidades-hero-buttons">
            <a href="#universidades" className="btn-primary">
              Explorar universidades
            </a>

            <a href="#sobre" className="btn-secondary">
              Como funciona?
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}