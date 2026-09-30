import "../App.css";
import banner from "../assets/bannersobre.png" 

function Sobre() {
  return (
    <main className="sobre-page">

      {/* HERO */}

      <section className="sobre-hero">

        <div className="sobre-banner">
          <img src={banner} alt="Sobre a Rota" />
        </div>

      </section>


      {/* HISTÓRIA */}

     {/* HISTÓRIA */}

<section className="sobre-historia">

  <h2 className="sobre-historia-titulo">
    Quem está por trás
    <br />
    da Rotta?
  </h2>

  <div className="sobre-historia-grid">

    <div className="sobre-historia-fotos">

      <div className="foto-card foto-card-1">
        <img src="/src/assets/fotojs4.png" alt="Júlio Santino" />
      </div>

      <div className="foto-card foto-card-2">
        <img src="/src/assets/fotojs5.png" alt="Júlio Santino" />
      </div>

      <div className="foto-card foto-card-3">
        <img src="/src/assets/fotojs6.png" alt="Júlio Santino" />
      </div>

    </div>


   <div className="sobre-historia-card">

  <div className="sobre-historia-conteudo">

    <h3>
      Júlio Santino, criador e mentor da Rotta Italy
    </h3>

    <div className="sobre-historia-texto">

      <p>
        Eu sou Júlio Santino, brasileiro e apaixonado pela ideia de
        conhecer o mundo e construir meu próprio caminho através dos
        estudos.
      </p>

      <p>
        Minha história com a Itália começou com um objetivo: estudar
        Medicina fora do Brasil. No começo, eu também tinha muitas
        dúvidas. Não sabia exatamente por onde começar, quais documentos
        precisava, os processos seletivos, as bolsas ou todas as etapas
        necessárias para realmente sair do Brasil e chegar até uma
        universidade italiana.
      </p>

      <p>
        Foi estudando, pesquisando e vivendo esse processo que fui
        descobrindo que era possível. Passei por provas, inscrições,
        documentos, Universitaly, visto, burocracias e todas aquelas
        etapas que, quando você está começando, parecem muito mais
        complicadas do que realmente são.
      </p>

      <p>
        Hoje, estou vivendo essa experiência de perto, na Itália, e
        continuo aprendendo todos os dias. E é justamente por ter passado
        por esse caminho que quero ajudar outras pessoas a entenderem que
        estudar na Itália pode ser uma possibilidade real — desde que
        você saiba onde está pisando e qual caminho seguir.
      </p>

    </div>

  </div>

</div>
  </div>

</section>
{/* NASCIMENTO DA ROTTA */}

<section className="sobre-nascimento">

  <div className="sobre-nascimento-conteudo">

    <span className="sobre-nascimento-tag">
      O NASCIMENTO DA ROTTA
    </span>

    <h2>
      No meio desse caminho,
      <br />
      percebi uma coisa.
    </h2>

    <div className="sobre-nascimento-texto">

      <p>
        No meio desse caminho, percebi uma coisa: muita gente também tinha
        o mesmo sonho, mas não sabia por onde começar.
      </p>

      <p className="sobre-nascimento-destaque">
        Foi daí que nasceu a Rotta Italy.
      </p>

      <p>
        A Rotta não nasceu apenas como uma ideia de negócio, mas como uma
        forma de transformar tudo aquilo que eu precisei aprender sozinho
        em um caminho mais claro para quem também quer estudar na Itália.
      </p>

    </div>

  </div>

</section>
{/* CTA */}

<section className="sobre-cta">

  <div className="sobre-cta-conteudo">

    <span className="sobre-cta-tag">
      SEU PRÓXIMO PASSO
    </span>

    <h2>
      Talvez a Itália também seja a sua Rotta.
    </h2>

    <p>
      Se você tem o sonho de estudar na Itália, não precisa descobrir
      tudo sozinho. A Rotta existe para te ajudar a entender o caminho
      e transformar esse sonho em um plano possível.
    </p>

    <a href="/mentoria" className="sobre-cta-botao">
      Conheça a mentoria
      <span>→</span>
    </a>

  </div>

</section>
    </main>
  );
}

export default Sobre;