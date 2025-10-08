import React from 'react';
import Slider from 'react-slick';
import './NossoEspaco.css';

// Importação das imagens para o carrossel
import foto1 from '../assets/clinica-01.jpg';
import foto2 from '../assets/clinica-02.jpg';
import foto3 from '../assets/clinica-03.png';

// Array com os dados das fotos que serão exibidas no carrossel.
const photos = [
  { id: 1, src: foto1, alt: 'Recepção da Vitta Clinic' },
  { id: 2, src: foto2, alt: 'Sala de atendimento moderna da Vitta Clinic' },
  { id: 3, src: foto3, alt: 'Equipamentos odontológicos da Vitta Clinic' }
];

/**
 * Renderiza a seção "Nosso Espaço".
 * Apresenta um carrossel de imagens da clínica.
 */
function NossoEspaco() {
  // Objeto de configuração para a biblioteca react-slick (carrossel).
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
          {/* Mapeia o array 'photos' para renderizar cada slide do carrossel */}
          {photos.map(photo => (
            <div key={photo.id}>
              <img src={photo.src} alt={photo.alt} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>

      <a href="https://wa.me/55NUMERO" target="_blank" className="cta-button">
        Fale Conosco
      </a>
    </section>
  );
}

export default NossoEspaco;