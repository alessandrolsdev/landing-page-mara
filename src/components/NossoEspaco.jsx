import React from 'react';
import Slider from 'react-slick';

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
    // Add custom classes via props isn't directly supported by react-slick for dots/arrows in the standard way easily without custom components,
    // but we can rely on global overrides or specific nesting.
    // Tailwind doesn't easily style 3rd party components without deep selectors or global css.
    // However, I can wrap the slider in a div with specific class names to target them if using Arbitrary variants or just keep the global css for slick?
    // The instructions said "Remover completamente arquivos .css".
    // So I should use global styles in index.css or arbitrary values.
    // Let's try to use a wrapper with arbitrary child selectors in Tailwind or just inline styles for the arrow components if possible,
    // but react-slick uses pseudo-elements for arrows by default.
    // The cleanest way is to use arbitrary variants on the wrapper `[&_.slick-dots_li_button:before]:text-primary` etc.
  };

  return (
    <section id="espaco" className="py-16 px-[5%] bg-white text-center">
      <h2 className="text-[2.5rem] mb-4 text-dark font-bold">Nosso Espaço</h2>
      <p className="text-[1.1rem] mb-12 text-text-color">Um ambiente pensado para o seu conforto e bem-estar.</p>
      
      <div
        className="max-w-[800px] mx-auto mb-12 [&_.slick-dots_li_button:before]:text-primary [&_.slick-dots_li.slick-active_button:before]:opacity-100 [&_.slick-prev:before]:text-primary [&_.slick-prev:before]:text-[25px] [&_.slick-next:before]:text-primary [&_.slick-next:before]:text-[25px]"
        data-aos="fade-up"
      >
        <Slider {...settings}>
          {/* Mapeia o array 'photos' para renderizar cada slide do carrossel */}
          {photos.map(photo => (
            <div key={photo.id} className="outline-none">
              <img src={photo.src} alt={photo.alt} className="w-full rounded-[10px] object-cover max-h-[500px] mx-auto" />
            </div>
          ))}
        </Slider>
      </div>

      <a href="https://wa.me/5538984078448" target="_blank" className="px-6 py-3 bg-primary text-white rounded-[5px] font-bold cursor-pointer transition-colors duration-300 hover:bg-[#a18241] inline-block no-underline">
        Fale Conosco
      </a>
    </section>
  );
}

export default NossoEspaco;
