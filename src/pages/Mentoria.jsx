
import { useEffect } from "react"
import fotoJs3 from "../assets/fotojs3.png"
import logo from "../assets/logo rotta italy azul.png"
import bannerMentoria from "../assets/bannermentoria.png"
function Mentoria() {
    useEffect(() => {

    const cards = document.querySelectorAll(".mentoria-card")

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            const card = entry.target
            const index = Array.from(cards).indexOf(card)
            const column = index % 4

            setTimeout(() => {
              card.classList.add("card-visible")
            }, column * 120)

            observer.unobserve(card)
          }

        })

      },
      {
        threshold: 0.15
      }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()

  }, [])

  return (
    <main className="mentoria-page">
      <section className="mentoria-banner">

  <img
    src={bannerMentoria}
    alt="Mentoria Rotta Italy"
    className="mentoria-banner-image"
  />

  <div className="mentoria-banner-gradient"></div>

</section>
      <section className="mentoria-hero">
  
<div className="mentoria-hero-content">

  <span className="mentoria-label">
    MENTORIA ROTTA ITALY
  </span>

  <h1>
    Seu caminho para estudar na Itália começa aqui.
  </h1>

  <p>
    Um acompanhamento personalizado para transformar seu projeto
    de estudar na Itália em um plano claro, estratégico e possível.
  </p>

  <div className="mentoria-hero-buttons">

  <a
    href="https://wa.me/qr/M24N44KQAVO5G1"
    target="_blank"
    rel="noopener noreferrer"
    className="mentoria-button-whatsapp"
  >
    Tirar dúvidas no WhatsApp
  </a>

  <a
    href="https://pay.kiwify.com.br/6DPQAnr"
    target="_blank"
    rel="noopener noreferrer"
    className="mentoria-button-checkout"
  >
    Quero ser um mentorado
  </a>

</div>

</div>


</section>
<section className="mentoria-about">

  <div className="mentoria-about-card">

    <div className="mentoria-about-photo">
      <img
        src={fotoJs3}
        alt="Julio, fundador da Rotta Italy"
      />
    </div>

    <div className="mentoria-about-content">

      

      <h2>
        Você não precisa descobrir tudo sozinho.
      </h2>

      <p>
        Estudar na Itália envolve escolhas, prazos e muitos detalhes.
        Na Rotta Italy, você encontra orientação para entender o caminho,
        organizar cada etapa e transformar seu projeto em um plano possível.
      </p>

    </div>

  </div>

</section>

      <section className="mentoria-method">
        <h2>Nosso método</h2>

        <div className="mentoria-steps">

          <article>
            <span>01</span>
            <h3>Entender seu objetivo</h3>
            <p>
              Conhecemos seu perfil, seus objetivos acadêmicos e o que
              você busca na Itália.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Planejar sua jornada</h3>
            <p>
              Organizamos as etapas necessárias para transformar seu
              objetivo em um plano claro.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Orientar suas escolhas</h3>
            <p>
              Você recebe orientação para tomar decisões sobre cursos,
              universidades, documentos e oportunidades.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Acompanhar seu processo</h3>
            <p>
              Durante a jornada, você conta com acompanhamento para
              avançar com mais organização e segurança.
            </p>
          </article>

        </div>
      </section>

      
<section className="mentoria-support">

  <h2>O que você encontra na mentoria?</h2>

  <div className="mentoria-cards">

    <article className="mentoria-card">
      <span>✦</span>
      <h3>Planejamento inicial</h3>
      <p>
        Um plano claro para organizar sua jornada desde o primeiro passo.
      </p>
    </article>

    <article className="mentoria-card">
      <span>◌</span>
      <h3>Chamadas de acompanhamento</h3>
      <p>
        Encontros para acompanhar seu progresso e orientar os próximos passos.
      </p>
    </article>

    <article className="mentoria-card">
      <span>▶</span>
      <h3>Aulas ao vivo em grupo</h3>
      <p>
        Conteúdos e orientações ao vivo para aprender junto com outros alunos.
      </p>
    </article>

    <article className="mentoria-card">
      <span>◍</span>
      <h3>Comunidade no WhatsApp</h3>
      <p>
        Um espaço para trocar experiências, tirar dúvidas e compartilhar a jornada.
      </p>
    </article>

    <article className="mentoria-card">
      <span>◇</span>
      <h3>Materiais para testes de proficiência</h3>
      <p>
        Materiais de estudo para ajudar você na preparação para os testes.
      </p>
    </article>

    <article className="mentoria-card">
      <span>↗</span>
      <h3>Acompanhamento individual</h3>
      <p>
        Orientação personalizada durante as diferentes etapas do processo.
      </p>
    </article>

    <article className="mentoria-card">
      <span>▣</span>
      <h3>Plataforma completa de aulas</h3>
      <p>
        Aulas organizadas com o passo a passo para você saber o que fazer.
      </p>
    </article>

    <article className="mentoria-card">
      <span>✓</span>
      <h3>Checklist de documentos</h3>
      <p>
        Uma lista organizada para ajudar você a acompanhar toda a documentação.
      </p>
    </article>

    <article className="mentoria-card">
      <span>◷</span>
      <h3>Encontros mensais</h3>
      <p>
        Momentos para revisar sua evolução e conferir se você está no caminho certo.
      </p>
    </article>

    <article className="mentoria-card">
      <span>⌁</span>
      <h3>Suporte completo pelo WhatsApp</h3>
      <p>
        Suporte para suas dúvidas e orientações ao longo da sua jornada.
      </p>
    </article>

    <article className="mentoria-card">
      <span>◆</span>
      <h3>Materiais exclusivos para provas</h3>
      <p>
        Conteúdos preparados para apoiar seus estudos para provas de admissão.
      </p>
    </article>

    <article className="mentoria-card mentoria-card-bonus">
      <span>★</span>
      <h3>E-book completo da jornada</h3>
      <p>
        Um e-book com o passo a passo e os principais detalhes para estudar na Itália.
      </p>
    </article>

  </div>

</section>


      <section className="mentoria-cta">

  <div className="mentoria-cta-content">

    <span>
      SUA JORNADA COMEÇA AQUI
    </span>

    <h2>
      Seu projeto de estudar na Itália
      merece um plano.
    </h2>

    <p>
      Você não precisa ter todas as respostas agora.
      Precisa saber qual é o próximo passo — e ter alguém
      ao seu lado para construir esse caminho com você.
    </p>

    <a
      href="https://pay.kiwify.com.br/6DPQAnr"
      target="_blank"
      rel="noopener noreferrer"
    >
      Quero fazer parte da Mentoria
    </a>

    <small>
      Comece agora sua jornada com a Rotta Italy.
    </small>

  </div>

</section>
<footer className="mentoria-footer">

  <div className="mentoria-footer-content">

    <div className="mentoria-footer-brand">
      <div className="mentoria-footer-social">

  <span>REDES SOCIAIS</span>

  <div className="mentoria-social-links">

    <a
      href="https://www.instagram.com/rotta.italy/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
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

      <img
        src={logo}
        alt="Rotta Italy"
      />

    </div>

<div className="mentoria-footer-description">

  <p>
    Seu caminho para estudar na Itália,
    com clareza e orientação.
  </p>

</div>

    <div className="mentoria-footer-links">

      <a href="/">A Rotta</a>

      <a href="/mentoria">Mentoria</a>

      <a href="/universidades">Universidades</a>

      <a href="/sobre">Sobre</a>

      <a href="/blog">Blog</a>

      <a href="/faq">FAQ</a>

    </div>

  </div>

  <div className="mentoria-footer-bottom">

    <span>
      © 2026 Rotta Italy. Todos os direitos reservados.
    </span>

    <span>
      Feito para quem quer construir sua jornada na Itália.
    </span>

  </div>

</footer>

    </main>
  )
}

export default Mentoria