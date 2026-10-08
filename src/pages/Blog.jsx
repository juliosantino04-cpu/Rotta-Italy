import React from "react";
import "../App.css";
import heroBlog from "../assets/heroblog.png";
import capaArtigo1 from "../assets/capaartigo1.png";

const articles = [
  {
    category: "MEDICINA",
    title: "Medicina na Itália para Brasileiros",
    image: capaArtigo1,
    link: "https://rottaitaly.blogspot.com/2026/10/medicina-na-italia-para-brasileiros.html",
  },
];

export default function Blog() {
  return (
    <main className="blog-page">

      {/* HERO */}
      <section className="blog-hero">
  <img
    className="blog-hero-image"
    src={heroBlog}
    alt="Rotta Italy"
  />
  
   <div className="blog-hero-gradient"></div>

</section>

      {/* ARTIGOS */}
      <section className="blog-articles">

        <div className="blog-section-heading">
          <span>CONTEÚDOS</span>
          <h2>Artigos recentes</h2>
        </div>

        <div className="blog-grid">

          {articles.map((article) => (
            <article
              className="blog-card"
              key={article.title}
            >

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card-image"
              >
                <img
                  src={article.image}
                  alt={article.title}
                />
              </a>

              <div className="blog-card-content">

                <span className="blog-card-category">
                  {article.category}
                </span>

                <h3>{article.title}</h3>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card-link"
                >
                  Ler artigo
                  <span>→</span>
                </a>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* CTA MENTORIA */}
      <section className="blog-mentoria">

        <div className="blog-mentoria-content">

          <span className="blog-eyebrow">
            ROTTA ITALY
          </span>

          <h2>
            Sua jornada para a Itália
            <br />
            pode começar agora.
          </h2>

          <p>
            Conheça a Mentoria Rotta Italy e descubra
            como transformar seu projeto de estudar
            e viver na Itália em um plano possível.
          </p>

          <a
            href="/mentoria"
            className="blog-mentoria-button"
          >
            Conhecer a Mentoria
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}