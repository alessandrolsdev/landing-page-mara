import React from 'react';
import './Contato.css';

function Contato() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-form-container" data-aos="fade-right">
          <h2>Agende sua Avaliação</h2>
          <p>Preencha o formulário e nossa equipe entrará em contato o mais breve possível.</p>
          <form className="contact-form" action="https://formspree.io/f/mwprnbqr" method="POST">
            <input type="text" name="name" placeholder="Seu Nome" required />
            <input type="email" name="email" placeholder="Seu Melhor E-mail" required />
            <input type="tel" name="phone" placeholder="Seu WhatsApp" required />
            <textarea name="message" placeholder="Mensagem (opcional)" rows="4"></textarea>
            <button type="submit" className="cta-button">Enviar e Agendar</button>
          </form>
        </div>
        <div className="contact-map-container" data-aos="fade-left">
          {/*
            A MÁGICA ESTÁ AQUI:
            O style={{...}} força o mapa a ter 100% de largura e altura do seu container pai.
            Isso tem prioridade máxima e vai resolver o problema.
          */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.1526760940583!2d-54.596836024935286!3d-20.458921481051625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e89615309549%3A0x653014c7a93814de!2sR.%20Paran%C3%A1%2C%202-66%20-%20Centro%2C%20Campo%20Grande%20-%20MS%2C%2079020-290!5e0!3m2!1spt-BR!2sbr!4v1759882116156!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
            style={{ border: 0, width: '100%', height: '100%' }}
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