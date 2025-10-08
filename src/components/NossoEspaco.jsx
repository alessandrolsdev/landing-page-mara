import React from 'react';
import Slider from 'react-slick';
import './NossoEspaco.css';

// Importa as imagens da pasta assets
import foto1 from '../assets/clinica-01.jpg';
import foto2 from '../assets/clinica-02.jpg';
// PROBLEMA 2 CORRIGIDO: A extensão foi alterada para .png
import foto3 from '../assets/clinica-03.png'; 

// Lista de objetos que o carrossel vai usar para criar os slides
const photos = [
  { id: 1, src: foto1, alt: 'Recepção da Vitta Clinic' },
  { id: 2, src: foto2, alt: 'Sala de atendimento moderna da Vitta Clinic' },
  { id: 3, src: foto3, alt: 'Equipamentos odontológicos da Vitta Clinic' }
];

function NossoEspaco() {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // <-- PROBLEMA 1 CORRIGIDO: VÍRGULA ADICIONADA
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="espaco" className="space-section">
      <h2>Nosso Espaço</h2>
      <p>Um ambiente pensado para o seu conforto e bem-estar.</p>
      
      <div className="carousel-container" data-aos="fade-up">
        <Slider {...settings}>
          {photos.map(photo => (
            <div key={photo.id}>
              <img src={photo.src} alt={photo.alt} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>

      <a href="https://wa.me/5538984078448" target="_blank" className="cta-button">
        Fale Conosco
      </a>
    </section>
  );
}

export default NossoEspaco;