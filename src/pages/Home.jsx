import Products from "../components/Products"
import banner from "../assets/capa site comp.png"

function Home() {
  return (
    <main>
      <img
        src={banner}
        alt="Rotta Italy"
        className="hero-image"
      />

      <h1>O seu caminho para estudar na Italia começa aqui</h1>
      <p>Seu caminho para estudar na Itália.</p>

      <Products />
    </main>
  )
}

export default Home