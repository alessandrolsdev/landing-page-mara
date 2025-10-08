import React from 'react';
import './Sobre.css';

/**
 * Renderiza a seção "Sobre".
 * Apresenta uma foto e uma biografia da profissional responsável.
 */

function Sobre() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-image" data-aos="fade-right">
          { <img src="/src/assets/mara.jpeg" alt="Dra. Mara" /> } {/* Imagem da Dra. Mara Luísa */}
        </div>
        <div className="about-content" data-aos="fade-left">
          <h2>Sobre a Dra. Mara Luísa</h2>
          <p>
            Sou Mara Luísa Carvalho, cirurgiã-dentista com dedicação especial à Odontopediatria, área que me encanta por unir técnica, cuidado e afeto. Minha missão é transformar a experiência no consultório em um momento leve e acolhedor, ajudando a construir desde cedo uma relação saudável das crianças com a saúde bucal.


          </p>
          <p>
            Acredito que cada sorriso tem uma história única, e por isso busco oferecer um atendimento individualizado, baseado em conhecimento científico atualizado, prevenção e respeito às necessidades de cada paciente e família.

          </p>
          <p>
            Mais do que cuidar de dentes, meu propósito é promover confiança, bem-estar e saúde para que cada sorriso possa crescer forte e feliz.
          </p>  
        </div>
      </div>
    </section>
  );
}

export default Sobre;