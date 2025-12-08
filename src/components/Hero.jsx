import React from 'react';
import heroBackground from '../assets/hero-background2.png';

/**
 * Renderiza a seção Hero principal da página.
 * Apresenta o título de impacto, um subtítulo e o principal botão de chamada para ação.
 */
function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[90vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)), url(${heroBackground})`
      }}
    >
      <div className="max-w-[800px] px-4">
        <h1 className="text-4xl md:text-[3.5rem] font-bold mb-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          Onde Cada Sorriso Cresce Forte e Feliz
        </h1>
        <p className="text-lg md:text-[1.2rem] mb-10 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]">
          Um espaço de Odontopediatria que une ciência e carinho para promover bem-estar e uma relação saudável com a saúde bucal desde os primeiros dentes.
        </p>
        <a href="#contato" className="px-10 py-4 bg-primary text-white rounded-[5px] font-bold text-[1.1rem] transition-all duration-300 hover:scale-105 hover:bg-[#a18241] inline-block no-underline">
          Agendar minha Avaliação
        </a>
      </div>
    </section>
  );
}

export default Hero;
