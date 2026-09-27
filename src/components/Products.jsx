import capaMentoria from "../assets/capaproduto1site.png"
import capaBolsas from "../assets/capaproduto2site.png"
import capaUniversidades from "../assets/capaproduto3site.png"

function Products() {
  return (
    <section className="products-section">
      <h2>Conheça a Rotta</h2>

      <p className="products-intro">
        Encontre o caminho que combina com o seu objetivo de estudar na Itália.
      </p>

      <div className="products-grid">

        <article className="product-card">
          <img
            src={capaMentoria}
            alt="Mentoria Rotta Italy"
          />

          <h3>Mentoria</h3>

          <p>
            Orientação personalizada para transformar seu plano de estudar
            na Itália em realidade.
          </p>
        </article>

        <article className="product-card">
          <img
            src={capaBolsas}
            alt="Bolsas de estudo na Itália"
          />

          <h3>Bolsas de estudo</h3>

          <p>
            Descubra as possibilidades de bolsas e auxílios disponíveis
            para estudantes na Itália.
          </p>
        </article>

        <article className="product-card">
          <img
            src={capaUniversidades}
            alt="Universidades na Itália"
          />

          <h3>Universidades</h3>

          <p>
            Pesquise universidades, cursos e possibilidades para encontrar
            a opção ideal para sua jornada.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Products