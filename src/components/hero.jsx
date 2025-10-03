import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Seu Sorriso, Nossa Prioridade</h1>
        <p>Tecnologia de ponta e cuidado humanizado para a saúde do seu sorriso.</p>
        <a href="#contato" className="cta-button">Agendar Avaliação Gratuita</a>
      </div>
    </section>
  );
}

export default Hero;