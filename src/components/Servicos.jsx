import React from 'react';

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
    <section id="servicos" className="py-16 px-[5%] bg-secondary text-center">
      <h2 className="text-4xl mb-12 text-dark font-bold">Tratamentos</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 max-w-[1200px] mx-auto">
        {/* Mapeia o array 'servicesList' para renderizar um card para cada serviço */}
        {servicesList.map((service, index) => (
          <div
            className="bg-white p-8 rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
            key={index}
            data-aos="fade-up"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl mb-2 text-primary font-bold">{service.title}</h3>
            <p className="text-base leading-[1.6] text-text-color">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;
