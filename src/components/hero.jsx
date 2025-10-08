import React from 'react';
import './Hero.css';

/**
 * Renderiza a seção Hero principal da página.
 * Apresenta o título de impacto, um subtítulo e o principal botão de chamada para ação.
 */
function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <h1>Onde Cada Sorriso Cresce Forte e Feliz</h1>
        <p>Um espaço de Odontopediatria que une ciência e carinho para promover bem-estar e uma relação saudável com a saúde bucal desde os primeiros dentes.</p>
        <a href="#contato" className="cta-button hero-button">
          Agendar minha Avaliação
        </a>
      </div>
    </section>
  );
}

export default Hero;