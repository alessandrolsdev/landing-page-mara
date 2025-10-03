import React from 'react';
import './Contato.css';

function Contato() {
  return (
    <section id="contato" className="contact-section">
      <h2>Entre em Contato</h2>
      <p className="contact-subtitle">Agende sua avaliação ou tire suas dúvidas. Estamos prontos para atender você!</p>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Informações de Contato</h3>
          <p><strong>📍 Endereço:</strong><br/> Rua das Flores, 123, Sala 45<br/> Bairro Centro, São Paulo - SP</p>
          <p><strong>📞 Telefone / WhatsApp:</strong><br/> (11) 99999-8888</p>
          <p><strong>📧 Email:</strong><br/> contato@drajoana.com.br</p>
        </div>
        <form className="contact-form">
          <h3>Envie uma Mensagem</h3>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu Email" required />
          <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
          <button type="submit" className="cta-button">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default Contato;