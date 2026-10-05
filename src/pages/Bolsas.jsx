import "../App.css";
import fotoia3 from "../assets/fotoia3.png";
import { bolsas } from "../data/bolsasdata";

function Bolsas() {
  // Mostramos somente uma pequena seleção pública.
  // O restante do mapeamento fica reservado para a mentoria.
  const bolsasPublicas = bolsas.slice(0, 5);

  return (
    <main className="bolsas-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="bolsas-hero">

        <div className="bolsas-hero-content">

          <div className="bolsas-hero-tag">
            🎓 Bolsas de estudo na Itália
          </div>

          <h1>
            Seu futuro pode começar na Itália.
          </h1>

          <p>
            Existem bolsas regionais, universitárias e programas
            específicos para estudantes internacionais. Comece
            conhecendo algumas das principais oportunidades.
          </p>

          <div className="bolsas-hero-buttons">

            <button
              onClick={() =>
                document
                  .getElementById("lista-bolsas")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explorar bolsas
            </button>

            <button
              className="btn-secundario"
              onClick={() =>
                document
                  .getElementById("como-funciona")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Como funciona?
            </button>

          </div>

        </div>

        <div className="bolsas-hero-visual">
          <img
            src={fotoia3}
            alt="Estudantes estudando na Itália"
          />
        </div>

      </section>


      {/* =========================
          BOLSAS
      ========================= */}

      <section
        className="bolsas-lista"
        id="lista-bolsas"
      >

        <div className="bolsas-lista-header">

          <div>

            <h2>
              Comece pelas principais bolsas
            </h2>

            <p>
              Estas são algumas das oportunidades que você pode encontrar
              ao pesquisar o sistema de bolsas para estudar na Itália.
            </p>

          </div>

          <div className="bolsas-contador">
           Algumas oportunidades
          </div>

        </div>


        <div className="bolsas-grid">

          {bolsasPublicas.map((bolsa) => (

            <article
              className="bolsa-card"
              key={bolsa.id}
            >

              <div className="bolsa-card-top">

                <span className="bolsa-tipo">
                  {bolsa.tipo}
                </span>

              </div>


              <h3>
                {bolsa.nome}
              </h3>


              <p className="bolsa-descricao">
                {bolsa.descricao}
              </p>


              <div className="bolsa-info">

                <div>
                  <span>🏛️ Universidade</span>
                  <strong>
                    {bolsa.universidade}
                  </strong>
                </div>

                <div>
                  <span>📍 Região</span>
                  <strong>
                    {bolsa.regiao}
                  </strong>
                </div>

                <div>
                  <span>🎓 Nível</span>
                  <strong>
                    {bolsa.nivel.join(" • ")}
                  </strong>
                </div>

              </div>


              <div className="bolsa-card-footer">

                <a
                  href={bolsa.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba mais →
                </a>

              </div>

            </article>

          ))}


          {/* =========================
              CARD BLOQUEADO
          ========================= */}

          <article className="bolsa-card bolsa-unlock-card">

            <div className="bolsa-unlock-blur">

              <div className="fake-line large"></div>
              <div className="fake-line"></div>
              <div className="fake-line"></div>

              <div className="fake-info">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>


            <div className="bolsa-unlock-content">

              <div className="bolsa-lock-icon">
                🔒
              </div>

              <span className="unlock-label">
                MAPEAMENTO COMPLETO
              </span>

              <h3>
                Existem muito mais oportunidades.
              </h3>

              <p>
                Essas são apenas algumas das bolsas que você pode
                encontrar. Desbloqueie nosso mapeamento completo
                e descubra quais oportunidades podem fazer sentido
                para o seu perfil.
              </p>

              <a
                href="#mentoria"
                className="unlock-button"
              >
                Desbloquear mapeamento →
              </a>

            </div>

          </article>

        </div>

      </section>


      {/* =========================
          COMO FUNCIONA
      ========================= */}

      <section
        className="como-funciona"
        id="como-funciona"
      >

        <span className="section-label">
          COMO FUNCIONA
        </span>

        <h2>
          Encontrar uma bolsa é só o começo.
        </h2>

        <div className="como-funciona-grid">

          <div>

            <span>01</span>

            <h3>
              Descubra as oportunidades
            </h3>

            <p>
              Existem bolsas regionais, universitárias e programas
              específicos espalhados por toda a Itália.
            </p>

          </div>


          <div>

            <span>02</span>

            <h3>
              Entenda quais fazem sentido
            </h3>

            <p>
              Cada oportunidade possui requisitos, prazos, regiões,
              universidades e critérios diferentes.
            </p>

          </div>


          <div>

            <span>03</span>

            <h3>
              Monte sua estratégia
            </h3>

            <p>
              Na mentoria, você recebe orientação para organizar
              sua busca e entender quais caminhos podem fazer sentido
              para o seu projeto de estudar na Itália.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CTA MENTORIA
      ========================= */}

      <section
  className="bolsas-mentoria"
  id="mentoria"
>
  <div className="bolsas-mentoria-content">

    <span className="mentoria-label">
      QUER IR ALÉM?
    </span>

    <h2>
      Descubra quais oportunidades podem fazer sentido para você.
      </h2>

    <p>
      As cinco bolsas que mostramos são apenas o começo.
      Na mentoria, você recebe orientação para entender
      as oportunidades, organizar sua estratégia e dar
      os próximos passos para estudar na Itália.
    </p>

    <a
      href="#contato"
      className="mentoria-button"
    >
      Quero conhecer a mentoria →
    </a>

  </div>
</section>
    </main>
  );
}

export default Bolsas;