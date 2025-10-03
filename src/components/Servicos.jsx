import React from 'react';
import './Servicos.css';

// Lista de serviços para ser mais fácil de gerenciar
const servicesList = [
  {
    icon: '🦷',
    title: 'Clareamento Dental',
    description: 'Deixe seu sorriso mais branco e brilhante com nossas técnicas seguras e eficazes.'
  },
  {
    icon: '🔩',
    title: 'Implantes Dentários',
    description: 'Recupere a função e a estética do seu sorriso com implantes de titânio de alta qualidade.'
  },
  {
    icon: '😁',
    title: 'Lentes de Contato',
    description: 'Transforme seu sorriso com facetas de porcelana finas que corrigem cor, formato e tamanho.'
  },
  {
    icon: '🔧',
    title: 'Ortodontia',
    description: 'Alinhamento dos dentes com aparelhos modernos e discretos para crianças e adultos.'
  }
];

function Servicos() {
  return (
    <section id="servicos" className="services-section">
      <h2>Nossos Serviços</h2>
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;