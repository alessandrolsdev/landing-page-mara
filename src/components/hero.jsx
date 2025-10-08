import React from 'react';
import './Hero.css';

function Hero() {
  return (
    // A imagem será aplicada a esta seção via CSS
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