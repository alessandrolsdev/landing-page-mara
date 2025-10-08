import React from 'react';
import './Servicos.css';

// Array com os dados para os cards de serviços oferecidos.
const servicesList = [
  {
    icon: '🦷',
    title: 'Clareamento Dental',
    description: 'Deixe seu sorriso mais branco e brilhante com nossas técnicas seguras e eficazes.'
  },
  {
    icon: '🔩',
    title: 'Implantes Dentários',
    description: 'Recupere a função e a estética do seu sorriso com implantes de alta qualidade.'
  },
  {
    icon: '😁',
    title: 'Lentes de Contato',
    description: 'Transforme seu sorriso com facetas de porcelana que corrigem cor, formato e tamanho.'
  },
  {
    icon: '🔧',
    title: 'Ortodontia',
    description: 'Alinhamento dos dentes com aparelhos modernos e discretos para crianças e adultos.'
  }
];

/**
 * Renderiza a seção "Tratamentos".
 * Exibe uma grade de cards com os principais serviços da clínica.
 */
function Servicos() {
  return (
    <section id="servicos" className="services-section">
      <h2>Tratamentos</h2>
      <div className="services-grid">
        {/* Mapeia o array 'servicesList' para renderizar um card para cada serviço */}
        {servicesList.map((service, index) => (
          <div className="service-card" key={index} data-aos="fade-up">
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