import Products from "../components/Products"
import banner from "../assets/capa site comp.png"
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <main>

      <picture>
  <source media="(max-width: 768px)" srcSet="/bannersite.mob.png" />

  <img
    src={banner}
    alt="Rotta Italy"
    className="hero-image"
  />
</picture>

      <section className="intro-section">

        <h1>
          Sua rotta para estudar na Itália começa aqui
        </h1>

        <p>
          Descubra bolsas, universidades e tudo o que você precisa
          para transformar o sonho de estudar na Itália em realidade.
        </p>

      </section>

      <div className="ticker">
        <div className="ticker-track">

          <div className="ticker-group">
            <span>Rotta Italy</span>
            <span>°</span>
            <span>Bolsas</span>
            <span>°</span>
            <span>Aplicações</span>
            <span>°</span>
            <span>Documentos</span>
            <span>°</span>
            <span>Universidades</span>
            <span>°</span>
            <span>Mentoria</span>
            <span>°</span>
            <span>Estude na Itália</span>
            <span>°</span>
          </div>

          <div className="ticker-group">
            <span>Rotta Italy</span>
            <span>°</span>
            <span>Bolsas</span>
            <span>°</span>
            <span>Aplicações</span>
            <span>°</span>
            <span>Documentos</span>
            <span>°</span>
            <span>Universidades</span>
            <span>°</span>
            <span>Mentoria</span>
            <span>°</span>
            <span>Estude na Itália</span>
            <span>°</span>
          </div>

        </div>
      </div>
<section className="about-section">

  <div className="about-text">

    <span className="section-label">
      A ROTTA ITALY
    </span>

    <h2>
      Estudar na Itália começa com uma boa rotta.
    </h2>

    <p>
      Encontre universidades, bolsas e informações para
      planejar sua jornada acadêmica na Itália.
    </p>

  </div>

  <div className="about-image">
    <img
      src="/foto-estudante-italia.jpg"
      alt="Estudante em uma universidade na Itália"
    />
  </div>

</section>
<section className="services-section">

  <div className="services-header">

    <span className="section-label">
      ENCONTRE SUA ROTTA
    </span>

    <h2>
      Tudo o que você precisa para começar.
    </h2>

  </div>

  <div className="services-grid">

    <div className="service-card">
      <span className="service-number">01</span>

      <h3>
        Bolsas de estudo
      </h3>

      <p>
        Descubra oportunidades de bolsas e entenda
        como funciona o processo para estudar na Itália.
      </p>

      <NavLink to="/bolsas">
  Conhecer bolsas →
</NavLink>
    </div>

    <div className="service-card">
      <span className="service-number">02</span>

      <h3>
        Universidades
      </h3>

      <p>
        Conheça universidades italianas e encontre
        opções que combinam com seus objetivos.
      </p>

      <NavLink to="/universidades">
  Explorar universidades →
</NavLink>
    </div>

    <div className="service-card">
      <span className="service-number">03</span>

      <h3>
        Mentoria
      </h3>

      <p>
        Tenha acompanhamento para organizar sua
        aplicação e seguir sua jornada com mais segurança.
      </p>

      <NavLink to="/mentoria">
  Conhecer a mentoria →
</NavLink>
    </div>

  </div>

</section>
<section className="journey-section">

  <div className="journey-header">

    <span className="section-label">
      POR ONDE COMEÇAR?
    </span>

    <h2>
      Sua jornada para a Itália, passo a passo.
    </h2>

    <p>
      Estudar na Itália envolve diferentes etapas. A Rotta reúne
      as principais informações para você entender cada uma delas
      e começar a construir o seu caminho.
    </p>

  </div>

  <div className="journey-grid">

    <div className="journey-card">
      <span className="journey-number">01</span>

      <h3>
        Escolha seu caminho
      </h3>

      <p>
        Entenda quais cursos, universidades e cidades podem
        fazer sentido para os seus objetivos.
      </p>
    </div>

    <div className="journey-card">
      <span className="journey-number">02</span>

      <h3>
        Encontre oportunidades
      </h3>

      <p>
        Conheça bolsas, possibilidades de apoio financeiro
        e oportunidades para estudantes internacionais.
      </p>
    </div>

    <div className="journey-card">
      <span className="journey-number">03</span>

      <h3>
        Organize sua aplicação
      </h3>

      <p>
        Descubra quais documentos são necessários e entenda
        as principais etapas do processo de candidatura.
      </p>
    </div>

    <div className="journey-card">
      <span className="journey-number">04</span>

      <h3>
        Prepare sua chegada
      </h3>

      <p>
        Planeje os próximos passos para chegar à Itália
        preparado para começar essa nova fase.
      </p>
    </div>

  </div>

</section>
<section className="mid-cta">

  <div className="mid-cta-content">

    <span className="section-label">
      CONHEÇA A MENTORIA ROTTA ITALY
    </span>

    <h2>
      Sua rotta para a Itália pode começar agora.
    </h2>

    <p>
      Estudar na Itália não precisa ser um caminho que você percorre
      sozinho. Na mentoria Rotta Italy, você encontra orientação,
      conteúdos e acompanhamento para organizar cada etapa da sua
      jornada — do planejamento à chegada.
    </p>

    <a
  href="/mentoria"
  className="mid-cta-button"
>
  Conhecer a mentoria →
</a>

  </div>

</section>
<section className="story-home-section">

  <div className="story-home-image">
    <img
  src="/fotojs1.jpeg"
  alt="Fundadora da Rotta Italy estudando na Itália"
/>
  </div>

  <div className="story-home-content">

    <span className="section-label">
      POR TRÁS DA ROTTA
    </span>

    <h2>
      Eu também precisei encontrar o caminho.
    </h2>

    <p>
      A Rotta nasceu de uma experiência real. Eu também precisei
      entender como estudar na Itália sendo uma estudante internacional,
      sem cidadania italiana e passando por todas as etapas do processo.
    </p>

    <p>
      Passei por provas, testes de proficiência, documentação,
      candidaturas e por todas aquelas dúvidas que aparecem quando
      você está tentando construir uma nova vida em outro país.
    </p>

    <p>
      Foi dessa experiência que nasceu a vontade de criar um espaço
      onde outras pessoas pudessem encontrar informação, orientação
      e acompanhamento de uma forma muito mais próxima.
    </p>

    <a
      href="/sobre"
      className="story-home-button"
    >
      Conhecer minha história →
    </a>

  </div>

</section>
<div className="inside-rotta-content">

  <details className="rotta-accordion">
    <summary>
      <span>Uma plataforma inteira para você.</span>
      <strong>+</strong>
    </summary>

    <div className="rotta-accordion-content">
      <p>
        Aulas gravadas, materiais e conteúdos organizados para você
        acessar no seu ritmo e voltar sempre que precisar.
      </p>
    </div>
  </details>

  <details className="rotta-accordion">
    <summary>
      <span>Uma Rotta construída para você.</span>
      <strong>+</strong>
    </summary>

    <div className="rotta-accordion-content">
      <p>
        Na chamada inicial, entendemos onde você está, o que precisa
        fazer e quais são os próximos passos para construir um
        planejamento personalizado.
      </p>
    </div>
  </details>

  <details className="rotta-accordion">
    <summary>
      <span>Chamadas comigo ao longo do caminho.</span>
      <strong>+</strong>
    </summary>

    <div className="rotta-accordion-content">
      <p>
        Encontros mensais para organizar seu planejamento, conversar
        sobre suas dúvidas e ajustar sua estratégia conforme o seu
        processo avança.
      </p>
    </div>
  </details>

  <details className="rotta-accordion">
    <summary>
      <span>Orientação para provas e proficiência.</span>
      <strong>+</strong>
    </summary>

    <div className="rotta-accordion-content">
      <p>
        Orientação direcionada para testes de proficiência em italiano
        ou inglês, provas de entrada e outras avaliações que possam
        fazer parte do seu processo.
      </p>
    </div>
  </details>

  <details className="rotta-accordion">
    <summary>
      <span>Documentação antes e depois da chegada.</span>
      <strong>+</strong>
    </summary>

    <div className="rotta-accordion-content">
      <p>
        O acompanhamento também considera a chegada à Itália, quando
        novas documentações e etapas burocráticas precisam ser
        organizadas.
      </p>
    </div>
  </details>

</div>
<section className="mentoria-home-section">

  <div className="mentoria-home-text">

    <span className="section-label">
      MENTORIA ROTTA ITALY
    </span>

    <h2>
      Você não precisa descobrir tudo sozinho.
    </h2>

    <p>
      O processo de estudar na Itália pode parecer complexo quando
      você não sabe por onde começar. A mentoria existe para ajudar
      você a organizar sua jornada, entender as etapas e tomar
      decisões com mais clareza.
    </p>

    <a
  href="https://wa.me/qr/M24N44KQAVO5G1"
  className="mentoria-home-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Falar comigo pelo WhatsApp →
</a>
  </div>

  <div className="mentoria-home-list">

    <div className="mentoria-home-item">

      <span>01</span>

      <div>
        <h3>
          Clareza para começar
        </h3>

        <p>
          Entenda quais caminhos podem fazer sentido
          para o seu momento e seus objetivos.
        </p>
      </div>

    </div>

    <div className="mentoria-home-item">

      <span>02</span>

      <div>
        <h3>
          Organização do processo
        </h3>

        <p>
          Organize documentos, prazos e etapas para
          não se perder durante a candidatura.
        </p>
      </div>

    </div>

    <div className="mentoria-home-item">

      <span>03</span>

      <div>
        <h3>
          Acompanhamento
        </h3>

        <p>
          Tenha orientação ao longo da sua jornada
          para estudar na Itália.
        </p>
      </div>

    </div>

  </div>

</section>
<section className="final-cta">

  <div className="final-cta-content">

    <span className="section-label">
      SUA ROTTA COMEÇA AQUI
    </span>

    <h2>
      Pronto para começar sua jornada na Itália?
    </h2>

    <p>
      Conheça a mentoria Rotta Italy e descubra como podemos
      te acompanhar nesse caminho.
    </p>

    <a
  href="https://pay.kiwify.com.br/6DPQAnr"
  className="final-cta-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Quero ser um mentorado →
</a>
  </div>

</section>
<footer className="site-footer">

  <div className="footer-main">

    <div className="footer-brand">

      <h2>Rotta Italy</h2>

      <p>
        Sua rotta para estudar, viver e construir uma nova
        experiência na Itália.
      </p>

    </div>

    <div className="footer-column">

      <span>EXPLORE</span>

      <a href="/">Início</a>
      <a href="/mentoria">Mentoria</a>
      <a href="/bolsas">Bolsas</a>
      <a href="/universidades">Universidades</a>

    </div>

    <div className="footer-column">

      <span>ROTTA</span>

      <a href="/sobre">Sobre</a>
      <a href="/blog">Blog</a>
      <a href="/faq">FAQ</a>

    </div>

    <div className="footer-column">

      <span>SIGA A ROTTA</span>

      <a
        href="https://www.instagram.com/rotta.italy?igsi=MWx6OW9sNmw0OHd2aw=="
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram ↗
      </a>

      <a
        href="https://www.tiktok.com/@rotta.italy?_r=1&_t=ZS-99Jwu2Ax2Ie"
        target="_blank"
        rel="noopener noreferrer"
      >
        TikTok ↗
      </a>

      <a
        href="https://youtube.com/@juliosantinoo?si=EZEBXt1cd8h2I-lC"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube ↗
      </a>

    </div>

  </div>

  <div className="footer-cta">

    <span>
      PRONTO PARA COMEÇAR?
    </span>

    <a
      href="https://pay.kiwify.com.br/6DPQAnr"
      target="_blank"
      rel="noopener noreferrer"
    >
      Quero ser um mentorado →
    </a>

  </div>

  <div className="footer-bottom">

    <span>
      © 2026 Rotta Italy
    </span>

    <span>
      Feito para quem está construindo sua rotta.
    </span>

  </div>

</footer>

    </main>
    
  )
}

export default Home