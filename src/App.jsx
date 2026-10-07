import { useState } from "react";
import mara from "./assets/mara.jpeg";
import logo from "./assets/logo-icon.png";
import room1 from "./assets/clinica-01.jpg";
import room2 from "./assets/clinica-02.jpg";
import room3 from "./assets/clinica-03.png";
const treatments = [
  [
    "Clareamento Dental",
    "Conheça as opções de clareamento em uma avaliação individual.",
  ],
  [
    "Implantes Dentários",
    "Planejamento para recuperar função e estética do sorriso.",
  ],
  [
    "Lentes de Contato",
    "Avaliação de facetas, cor e formato para cada necessidade.",
  ],
  [
    "Ortodontia",
    "Orientação sobre o alinhamento dos dentes de crianças e adultos.",
  ],
];
function Smile({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 130"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 55C40 117 115 117 145 40"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M37 27L39 39M112 18L115 30"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M132 90L139 99M120 102L123 114"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
export default function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="mara-page">
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="clinic-header shell">
        <a href="#inicio" className="clinic-brand">
          <img src={logo} alt="" width="40" height="40" />
          <span>
            Vitta Clinic<small>DRA. MARA LUÍSA</small>
          </span>
        </a>
        <button
          className="menu-button"
          aria-expanded={menu}
          aria-controls="clinic-nav"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "Fechar" : "Menu"}
        </button>
        <nav
          id="clinic-nav"
          aria-label="Navegação principal"
          className={menu ? "open" : ""}
        >
          {[
            ["sobre", "A Dra. Mara"],
            ["servicos", "Tratamentos"],
            ["espaco", "Nosso espaço"],
            ["contato", "Agendar ↗"],
          ].map(([id, text]) => (
            <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
              {text}
            </a>
          ))}
        </nav>
      </header>
      <main id="conteudo">
        <section id="inicio" className="clinic-hero shell">
          <div className="clinic-copy">
            <p className="kicker">CIÊNCIA, CARINHO E PRIMEIROS SORRISOS</p>
            <h1>
              Um sorriso cresce
              <br />
              onde encontra
              <br />
              <em>cuidado.</em>
              <Smile className="smile" />
            </h1>
            <p>
              Odontopediatria com uma abordagem leve e acolhedora. Para as
              crianças, uma boa experiência. Para a família, confiança em cada
              etapa.
            </p>
            <a className="clinic-button" href="#contato">
              Agendar uma avaliação <span aria-hidden="true">↗</span>
            </a>
            <div className="hero-note">
              <span>♡</span>
              <p>
                Cada sorriso tem uma história.
                <br />
                Vamos cuidar da sua.
              </p>
            </div>
          </div>
          <figure className="mara-portrait">
            <img
              src={mara}
              alt="Dra. Mara Luísa Carvalho"
              width="650"
              height="850"
              fetchPriority="high"
            />
            <figcaption>
              <span>Dra. Mara Luísa Carvalho</span>
              <small>Cirurgiã-dentista</small>
            </figcaption>
          </figure>
        </section>
        <div className="care-strip">
          <span>Escuta atenta</span>
          <span aria-hidden="true">✳</span>
          <span>Cuidado individual</span>
          <span aria-hidden="true">✳</span>
          <span>Uma relação de confiança</span>
        </div>
        <section id="sobre" className="about-clinic shell">
          <p className="kicker">01 / QUEM CUIDA</p>
          <div>
            <h2>
              Técnica nas mãos.
              <br />
              <em>Afeto no atendimento.</em>
            </h2>
            <p>
              Sou Mara Luísa Carvalho, cirurgiã-dentista com dedicação especial
              à Odontopediatria. Minha missão é transformar a experiência no
              consultório em um momento leve e acolhedor, construindo uma
              relação saudável das crianças com a saúde bucal.
            </p>
            <p>
              Cada sorriso tem uma história única. Por isso, o atendimento
              considera as necessidades de cada paciente e família, com
              prevenção, respeito e conhecimento científico.
            </p>
            <a
              className="text-link"
              href="https://www.instagram.com/mara_carvalh_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conheça mais do meu trabalho ↗
            </a>
          </div>
        </section>
        <section id="servicos" className="treatments">
          <div className="shell">
            <div className="treatment-heading">
              <p className="kicker">02 / TRATAMENTOS</p>
              <h2>
                O cuidado começa
                <br />
                <em>com uma conversa.</em>
              </h2>
              <p>
                Uma avaliação ajuda a entender as necessidades e as
                possibilidades de tratamento.
              </p>
            </div>
            <div className="treatment-list">
              {treatments.map(([name, description], i) => (
                <article key={name}>
                  <span>0{i + 1}</span>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a
                    href="#contato"
                    aria-label={"Agendar avaliação para " + name}
                  >
                    ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="espaco" className="clinic-space shell">
          <div className="space-heading">
            <p className="kicker">03 / NOSSO ESPAÇO</p>
            <h2>
              Venha com calma.
              <br />
              <em>Sinta-se em casa.</em>
            </h2>
            <p>
              Conheça o ambiente da Vitta Clinic, preparado para receber você e
              sua família.
            </p>
          </div>
          <div className="space-photos">
            <figure>
              <img
                src={room1}
                alt="Recepção da Vitta Clinic"
                width="1000"
                height="700"
                loading="lazy"
              />
              <figcaption>Um lugar para receber.</figcaption>
            </figure>
            <figure>
              <img
                src={room2}
                alt="Sala de atendimento da Vitta Clinic"
                width="700"
                height="700"
                loading="lazy"
              />
              <figcaption>Um lugar para cuidar.</figcaption>
            </figure>
            <figure>
              <img
                src={room3}
                alt="Equipamentos odontológicos da Vitta Clinic"
                width="1000"
                height="700"
                loading="lazy"
              />
              <figcaption>Cuidado em cada detalhe.</figcaption>
            </figure>
          </div>
        </section>
        <section id="contato" className="clinic-contact">
          <div className="shell contact-grid">
            <div>
              <p className="kicker">04 / VAMOS CONVERSAR</p>
              <h2>
                O próximo sorriso
                <br />
                <em>começa aqui.</em>
              </h2>
              <p>
                Envie seus dados para solicitar uma avaliação. A equipe entrará
                em contato para combinar o atendimento.
              </p>
              <a
                className="clinic-button"
                href="https://wa.me/5538984078448"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar no WhatsApp ↗
              </a>
              <Smile className="contact-smile" />
            </div>
            <form action="https://formspree.io/f/mwprnbqr" method="POST">
              <label htmlFor="nome">Seu nome</label>
              <input id="nome" name="name" autoComplete="name" required />
              <label htmlFor="email">Seu e-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <label htmlFor="telefone">Seu WhatsApp</label>
              <input
                id="telefone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
              />
              <label htmlFor="mensagem">
                Mensagem <span>(opcional)</span>
              </label>
              <textarea id="mensagem" name="message" rows="3" />
              <button className="clinic-button" type="submit">
                Solicitar avaliação <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="clinic-footer shell">
        <a href="#inicio" className="clinic-brand">
          Vitta Clinic
        </a>
        <a
          href="https://www.instagram.com/mara_carvalh_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram ↗
        </a>
        <span>© {new Date().getFullYear()} Dra. Mara Luísa.</span>
      </footer>
    </div>
  );
}
