import React from "react";
import "../App.css";
import fotoia4 from "../assets/fotoia4.png";
import { NavLink } from "react-router-dom"


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
    {/* INTRODUÇÃO */}
      <section className="universidades-intro" id="sobre">

        <span className="universidades-section-tag">
          MAIS POSSIBILIDADES
        </span>

        <h2>
          Uma universidade pode
          <br />
          mudar o caminho da sua história.
        </h2>

        <p>
          A Itália reúne universidades tradicionais, centros de pesquisa,
          cursos internacionais e diferentes formas de construir sua
          experiência acadêmica.
        </p>

        <p>
          Mas encontrar uma boa universidade não é apenas escolher
          uma instituição famosa. É entender qual opção realmente
          combina com você, com seu curso e com os seus objetivos.
        </p>

      </section>


      {/* UNIVERSIDADES */}
      <section className="universidades-explore" id="universidades">

        <div className="universidades-explore-header">
          <div>
            <h2>
              Conheça alguns dos grandes nomes da Itália.
            </h2>
          </div>

          <p>
            Cada universidade tem uma história, um perfil e oportunidades
            diferentes. Essas são apenas algumas das possibilidades que
            você pode encontrar pelo caminho.
          </p>
        </div>


        <div className="universidades-grid">

          <article className="universidade-card">
            <div className="universidade-card-number">01</div>

            <div>
              <span>EMILIA-ROMAGNA</span>
              <h3>Università di Bologna</h3>
              <p>
                Tradição acadêmica, pesquisa e uma das experiências
                universitárias mais conhecidas da Itália.
              </p>
            </div>

            <a
                  href="https://www.unibo.it/it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="universidade-card-link"
                >
                  Decobrir →
                </a>

          </article>


          <article className="universidade-card">
            <div className="universidade-card-number">02</div>

            <div>
              <span>LOMBARDIA</span>
              <h3>Politecnico di Milano</h3>
              <p>
                Uma referência italiana para quem busca inovação,
                tecnologia, design e engenharia.
              </p>
            </div>

            <a
                  href="https://www.polimi.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="universidade-card-link"
                >
                  Decobrir →
                </a>
          </article>


          <article className="universidade-card">
            <div className="universidade-card-number">03</div>

            <div>
              <span>LAZIO</span>
              <h3>Sapienza Università di Roma</h3>
              <p>
                Uma grande comunidade acadêmica no coração de uma das
                cidades mais marcantes da Itália.
              </p>
            </div>

            <a
                  href="https://www.uniroma1.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="universidade-card-link"
                >
                  Decobrir →
                </a>
          </article>


          <article className="universidade-card universidade-card-featured">
            <div className="universidade-card-number">04</div>

            <div>
              <span>UMA ITÁLIA DE POSSIBILIDADES</span>
              <h3>E existem muitas outras.</h3>
              <p>
                A universidade ideal para você pode estar em uma cidade,
                região ou curso que você ainda nem considerou.
              </p>
            </div>

            <a
                href="/mentoria"
                className="universidade-card-link"
              >
                Encontrar a minha →
              </a>
          </article>

        </div>

      </section>


      {/* CTA */}
      <section className="universidades-cta">

        <div className="universidades-cta-content">

          <span className="universidades-section-tag">
            E AGORA?
          </span>

          <h2>
            Você não precisa descobrir
            <br />
            tudo isso sozinho.
          </h2>

          <p>
            Existem muitas universidades, cursos, cidades e caminhos
            possíveis. A questão é descobrir qual deles faz sentido
            para a sua história.
          </p>

          <a href="/mentoria" className="universidades-cta-button">
            Quero encontrar meu caminho →
          </a>

        </div>

      </section>

    </main>
  );
}