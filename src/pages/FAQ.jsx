import { useState } from "react";
import "../App.css";
import logofax from "../assets/logofax.png";

const faqData = [
  {
    category: "A Mentoria",
    questions: [
      {
        question: "O que é a Mentoria Rotta Italy?",
        answer:
          "A Rotta Italy é uma mentoria personalizada para quem deseja estudar na Itália com mais clareza, organização e segurança. Acompanhamos você nas principais etapas do processo, desde o planejamento e escolha do curso até a preparação da documentação e demais etapas necessárias para sua jornada acadêmica.",
      },
      {
        question: "Para quem é a mentoria?",
        answer:
          "A mentoria é indicada para estudantes brasileiros que desejam fazer graduação, pós-graduação, mestrado, doutorado ou outros percursos acadêmicos na Itália e precisam de orientação para entender as possibilidades e organizar o processo.",
      },
      {
        question: "Preciso já saber qual universidade quero cursar?",
        answer:
          "Não. Se você ainda está em dúvida sobre curso, universidade ou cidade, podemos começar justamente pelo planejamento. A ideia é entender seu perfil, objetivos acadêmicos e possibilidades para construir uma estratégia adequada ao seu projeto.",
      },
    ],
  },
  {
    category: "Universidades e cursos",
    questions: [
      {
        question: "Como escolher uma universidade na Itália?",
        answer:
          "A escolha depende de diversos fatores, como área de estudo, idioma do curso, requisitos de admissão, localização, custos, calendário acadêmico e seu perfil acadêmico. Durante a mentoria, analisamos esses pontos para ajudar você a tomar uma decisão mais consciente.",
      },
      {
        question: "Existem cursos em inglês na Itália?",
        answer:
          "Sim. Existem diversos cursos ministrados total ou parcialmente em inglês, especialmente em programas de mestrado e outras formações internacionais. A disponibilidade depende da universidade e do curso escolhido.",
      },
      {
        question: "Posso estudar em italiano mesmo sem falar italiano?",
        answer:
          "Depende dos requisitos do curso. Alguns programas exigem comprovação de proficiência em italiano, enquanto outros possuem requisitos diferentes. Por isso, é importante verificar as exigências específicas antes de realizar a candidatura.",
      },
    ],
  },
  {
    category: "Documentação e candidatura",
    questions: [
      {
        question: "Quais documentos preciso para estudar na Itália?",
        answer:
          "A documentação varia conforme o nível de ensino, universidade e curso. Entre os documentos que podem ser solicitados estão histórico escolar, diploma, documentos de identificação, comprovantes acadêmicos, certificados de idioma e outros documentos específicos do processo.",
      },
      {
        question: "Meu diploma brasileiro é válido na Itália?",
        answer:
          "A validade e o reconhecimento dependem da finalidade e do procedimento exigido pela instituição ou autoridade italiana. Cada processo possui requisitos próprios, por isso analisamos o caso e orientamos sobre os documentos e procedimentos aplicáveis.",
      },
      {
        question: "A Rotta Italy faz a candidatura pela universidade?",
        answer:
          "A mentoria orienta você durante o processo e ajuda a organizar as etapas, documentos e informações necessárias. O procedimento exato depende da universidade e do programa escolhido.",
      },
    ],
  },
  {
    category: "Bolsas e custos",
    questions: [
      {
        question: "É possível conseguir bolsa para estudar na Itália?",
        answer:
          "Sim. Existem diferentes oportunidades de bolsas e benefícios estudantis na Itália. Os critérios, valores e modalidades variam conforme a região, instituição e situação do estudante. Durante o planejamento, podemos identificar as oportunidades compatíveis com seu perfil.",
      },
      {
        question: "Quanto custa estudar na Itália?",
        answer:
          "Os custos variam bastante de acordo com universidade, curso, cidade e situação financeira do estudante. Além das taxas acadêmicas, é importante considerar moradia, alimentação, transporte, documentação, seguro e demais despesas do dia a dia.",
      },
      {
        question: "É possível estudar na Itália com orçamento limitado?",
        answer:
          "É possível planejar uma experiência acadêmica considerando diferentes faixas de orçamento. Bolsas, benefícios estudantis, escolha da cidade e planejamento financeiro podem fazer uma diferença importante no custo total da experiência.",
      },
    ],
  },
  {
    category: "Visto e chegada",
    questions: [
      {
        question: "Preciso de visto para estudar na Itália?",
        answer:
          "Para estudantes brasileiros, a necessidade e o tipo de visto dependem da duração e das características do programa de estudos. Quando aplicável, o processo deve ser realizado antes da viagem, seguindo as exigências oficiais.",
      },
      {
        question: "A mentoria ajuda com o processo de visto?",
        answer:
          "Sim. A mentoria pode orientar você sobre a organização das etapas e dos documentos relacionados ao seu projeto de estudos. Os requisitos devem sempre ser conferidos junto às autoridades italianas competentes.",
      },
      {
        question: "A Rotta Italy ajuda com moradia?",
        answer:
          "Podemos orientar você sobre planejamento de chegada, regiões, tipos de acomodação e pontos que merecem atenção na busca por moradia. O nível de suporte depende do plano de mentoria contratado.",
      },
    ],
  },
  {
    category: "Trabalho e vida na Itália",
    questions: [
      {
        question: "Posso trabalhar enquanto estudo na Itália?",
        answer:
          "Estudantes internacionais podem ter possibilidades de trabalho de acordo com as regras aplicáveis ao seu status migratório. Como regras podem mudar, recomendamos sempre conferir as condições vigentes junto às autoridades italianas.",
      },
      {
        question: "Preciso morar em uma cidade grande?",
        answer:
          "Não. A Itália possui universidades e oportunidades acadêmicas em diferentes cidades e regiões. A melhor localização depende do seu curso, orçamento, estilo de vida e objetivos.",
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>

        <span className="faq-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (categoryIndex, questionIndex) => {
    const id = `${categoryIndex}-${questionIndex}`;

    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <main className="faq-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="faq-hero">

        {/* LOGO FLUTUANTE */}
        <img
          src={logofax}
          alt=""
          className="faq-hero-logo"
          aria-hidden="true"
        />

        <div className="faq-container hero-content">

          <span className="eyebrow">
            ROTTA ITALY · MENTORIA
          </span>

          <h1>
            Perguntas
            <br />
            <em>frequentes.</em>
          </h1>

          <p className="hero-description">
            Tudo o que você precisa saber para transformar o seu projeto de
            estudar na Itália em um plano claro e possível.
          </p>

          <a href="#faq" className="hero-button">
            Encontre sua resposta
            <span>↓</span>
          </a>

        </div>
      </section>


      {/* =========================
          INTRO
      ========================= */}
      <section className="faq-intro">

        <div className="faq-container intro-grid">

          <div>
            <span className="section-label">
              FAQ
            </span>

            <h2>
              Comece sua jornada
              <br />
              <em>com clareza.</em>
            </h2>
          </div>

          <div className="intro-text">

            <p>
              Estudar na Itália pode parecer um processo complexo quando você
              não sabe por onde começar.
            </p>

            <p>
              Reunimos aqui as principais dúvidas de quem está planejando essa
              mudança para ajudar você a entender melhor cada etapa.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          FAQ
      ========================= */}
      <section className="faq-section" id="faq">

        <div className="faq-container">

          {faqData.map((category, categoryIndex) => (

            <div
              className="faq-category"
              key={category.category}
            >

              <div className="category-heading">

                <span>
                  0{categoryIndex + 1}
                </span>

                <h3>
                  {category.category}
                </h3>

              </div>

              <div className="faq-list">

                {category.questions.map((item, questionIndex) => {

                  const id = `${categoryIndex}-${questionIndex}`;

                  return (
                    <FAQItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openItem === id}
                      onClick={() =>
                        handleToggle(
                          categoryIndex,
                          questionIndex
                        )
                      }
                    />
                  );

                })}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}
      <section className="faq-cta">

        <div className="faq-container">

          <div className="cta-card">

            <div className="cta-content">

              <span className="section-label">
                PRÓXIMO PASSO
              </span>

              <h2>
                Sua história na Itália
                <br />
                <em>pode começar agora.</em>
              </h2>

              <p>
                Ainda ficou com alguma dúvida? Converse com a nossa equipe e
                descubra como a Mentoria Rotta Italy pode ajudar no seu projeto
                de estudos.
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

            <div className="cta-mark">
              R
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}