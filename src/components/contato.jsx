import React from 'react';
import './Contato.css';

/**
 * Renderiza a seção de Contato.
 * Inclui um formulário (integrado com Formspree) e um mapa do Google incorporado.
 */
function Contato() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-form-container" data-aos="fade-right">
          <h2>Agende sua Avaliação</h2>
          <p>Preencha o formulário e nossa equipe entrará em contato o mais breve possível.</p>
          {/* O atributo 'action' deve conter o endpoint do seu formulário Formspree */}
          <form className="contact-form" action="https://formspree.io/f/SEU_CODIGO_UNICO" method="POST">
            <input type="text" name="name" placeholder="Seu Nome" required />
            <input type="email" name="email" placeholder="Seu Melhor E-mail" required />
            <input type="tel" name="phone" placeholder="Seu WhatsApp" required />
            <textarea name="message" placeholder="Mensagem (opcional)" rows="4"></textarea>
            <button type="submit" className="cta-button">Enviar e Agendar</button>
          </form>
        </div>
        <div className="contact-map-container" data-aos="fade-left">
          {/* O atributo 'src' deve conter o link de incorporação do Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=..." 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Vitta Clinic"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contato;