import React from "react";
import "../App.css";

import capaMentoria from "../assets/capaproduto1.png";
import capaPlanejamento from "../assets/capaproduto2.png";
import capaEbook from "../assets/capaproduto3.png";

export default function Products() {
  return (
    <main className="produtos-page">

      {/* HERO */}
      <section className="produtos-hero">
        <div className="produtos-hero-content">
          <span className="produtos-section-tag">
            SEU PROJETO COMEÇA AQUI
          </span>

          <h1>
            Escolha o suporte
            <br />
            <span>certo para a sua jornada.</span>
          </h1>

          <p>
            Da primeira decisão até a preparação para estudar na Itália,
            encontre a opção que combina com o momento do seu projeto.
          </p>
        </div>
      </section>


      {/* MENTORIA */}
      <section className="produto-mentoria">

        <div className="produto-mentoria-header">
          <div>
            <span className="produtos-section-tag">
              NOSSA EXPERIÊNCIA COMPLETA
            </span>

            <h2>
              Mentoria
              <br />
              <span>Rotta Italy</span>
            </h2>
          </div>

          <div className="produto-mentoria-intro">
            <p>
              Para quem quer transformar o desejo de estudar na Itália
              em um projeto planejado, acompanhado e possível.
            </p>
          </div>
        </div>


        <div className="mentoria-produto-card">

          {/* CAPA */}
          <div className="mentoria-capa">
            <img
              src={capaMentoria}
              alt="Capa da Mentoria Rotta Italy"
            />
          </div>


          {/* TOPO */}
          <div className="mentoria-produto-top">

            <span className="mentoria-badge">
              MAIS COMPLETA
            </span>

            <h3>
              Você não precisa
              <br />
              fazer isso sozinho.
            </h3>

            <p>
              Um acompanhamento completo para transformar seu projeto
              de estudar na Itália em um caminho mais claro,
              organizado e seguro.
            </p>

          </div>


          {/* BENEFÍCIOS */}
          <div className="mentoria-beneficios">

            <div className="beneficio">
              <span>01</span>

              <div>
                <h4>Planejamento inicial</h4>
                <p>
                  Uma chamada para entender seu momento,
                  seus objetivos e construir os primeiros passos.
                </p>
              </div>
            </div>


            <div className="beneficio">
              <span>02</span>

              <div>
                <h4>Acompanhamento completo</h4>
                <p>
                  Orientação durante sua jornada para que você
                  saiba o que fazer em cada etapa.
                </p>
              </div>
            </div>


            <div className="beneficio">
              <span>03</span>

              <div>
                <h4>Plataforma de aulas</h4>
                <p>
                  Conteúdos, aulas e explicações para entender
                  o processo de estudar na Itália.
                </p>
              </div>
            </div>


            <div className="beneficio">
              <span>04</span>

              <div>
                <h4>Materiais exclusivos</h4>
                <p>
                  Materiais de apoio para organizar sua preparação
                  e avançar com mais segurança.
                </p>
              </div>
            </div>


            <div className="beneficio">
              <span>05</span>

              <div>
                <h4>Preparação para provas</h4>
                <p>
                  Suporte na preparação para provas de ingresso
                  e testes de proficiência.
                </p>
              </div>
            </div>


            <div className="beneficio">
              <span>06</span>

              <div>
                <h4>Suporte e comunidade</h4>
                <p>
                  WhatsApp disponível para suas dúvidas e uma
                  comunidade de membros para compartilhar experiências.
                </p>
              </div>
            </div>

          </div>


          {/* FINAL */}
          <div className="mentoria-produto-bottom">

            <p>
              Um acompanhamento pensado para quem quer mais
              clareza, segurança e direção.
            </p>

            <div className="mentoria-produto-buttons">

              <a
                href="https://pay.kiwify.com.br/6DPQAnr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mentoria-primary"
              >
                Quero entrar para a Mentoria →
              </a>

              <a
                href="/mentoria"
                className="btn-mentoria-secondary"
              >
                Conhecer a Mentoria →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* OUTROS PRODUTOS */}
      <section className="outros-produtos">

        <div className="outros-produtos-header">

          <span className="produtos-section-tag">
            OUTRAS FORMAS DE COMEÇAR
          </span>

          <h2>
            Talvez você ainda
            <br />
            esteja dando os primeiros passos.
          </h2>

          <p>
            Por isso, também criamos opções para quem precisa
            de uma orientação mais pontual ou prefere começar sozinho.
          </p>

        </div>


        <div className="produtos-grid">

          {/* PLANEJAMENTO */}
          <article className="produto-card">

            <div className="produto-card-image">
              <img
                src={capaPlanejamento}
                alt="Capa do Planejamento Individual"
              />
            </div>

            <div className="produto-card-number">
              01
            </div>

            <div className="produto-card-content">

              <span>
                ORIENTAÇÃO PONTUAL
              </span>

              <h3>
                Chamada de
                <br />
                Planejamento
              </h3>

              <p>
                Uma conversa para organizar suas ideias,
                tirar dúvidas e entender quais caminhos podem
                fazer sentido para o seu projeto na Itália.
              </p>

              <ul>
                <li>Chamada individual</li>
                <li>Orientação personalizada</li>
                <li>Esclarecimento de dúvidas</li>
                <li>Direcionamento inicial</li>
              </ul>

            </div>

            <div className="produto-card-footer">

              <a
                href="https://pay.kiwify.com.br/HOXulq9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero meu planejamento →
              </a>

            </div>

          </article>


          {/* EBOOK */}
          <article className="produto-card">

            <div className="produto-card-image">
              <img
                src={capaEbook}
                alt="Capa do Ebook Estudar na Itália"
              />
            </div>

            <div className="produto-card-number">
              02
            </div>

            <div className="produto-card-content">

              <span>
                PARA FAZER SOZINHO
              </span>

              <h3>
                Ebook
                <br />
                Estudar na Itália
              </h3>

              <p>
                Um passo a passo completo para quem quer entender
                como funciona o processo e começar a construir
                seu próprio caminho.
              </p>

              <ul>
                <li>Passo a passo completo</li>
                <li>Informações essenciais</li>
                <li>Organização do processo</li>
                <li>Para quem quer começar sozinho</li>
              </ul>

            </div>

            <div className="produto-card-footer">

              <a
                href="https://pay.kiwify.com.br/HLmTaAo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero começar →
              </a>

            </div>

          </article>

        </div>

      </section>


      {/* QUAL É PARA VOCÊ */}
      <section className="produtos-escolha">

        <div className="produtos-escolha-content">

          <span className="produtos-section-tag">
            QUAL É PARA VOCÊ?
          </span>

          <h2>
            O melhor caminho depende
            <br />
            de onde você está agora.
          </h2>

          <div className="escolha-lista">

            <div>
              <strong>
                Quero acompanhamento completo
              </strong>

              <span>
                → Mentoria Rotta Italy
              </span>
            </div>


            <div>
              <strong>
                Preciso de ajuda para organizar meu caminho
              </strong>

              <span>
                → Chamada de Planejamento
              </span>
            </div>


            <div>
              <strong>
                Quero entender o processo e fazer sozinho
              </strong>

              <span>
                → Ebook
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* CTA FINAL */}
      <section className="produtos-cta">

        <div className="produtos-cta-content">

          <span className="produtos-section-tag">
            PRONTO PARA COMEÇAR?
          </span>

          <h2>
            Seu sonho de estudar
            <br />
            na Itália merece um plano.
          </h2>

          <p>
            Se você quer mais do que informações soltas e procura
            alguém para caminhar com você durante o processo,
            a Mentoria Rotta Italy foi feita para você.
          </p>

          <a href="/mentoria">
            Conhecer a Mentoria →
          </a>

        </div>

      </section>

    </main>
  );
}