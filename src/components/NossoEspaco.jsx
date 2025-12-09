import React from 'react';
import Slider from 'react-slick';

// CORREÇÃO: Usando os nomes de arquivos reais (clinica-01.jpg, etc.)
import photo1 from '../assets/clinica-01.jpg';
import photo2 from '../assets/clinica-02.jpg';
import photo3 from '../assets/clinica-03.png'; // Atenção ao .png aqui

// Array com os dados das fotos que serão exibidas no carrossel.
const photos = [
    { id: 1, src: photo1, alt: 'Recepção da Vitta Clinic' },
    { id: 2, src: photo2, alt: 'Sala de atendimento moderna da Vitta Clinic' },
    { id: 3, src: photo3, alt: 'Equipamentos odontológicos da Vitta Clinic' }
];

/**
 * Renderiza a seção "Nosso Espaço".
 * Apresenta um carrossel de imagens da clínica.
 */
function NossoEspaco() {
    // Objeto de configuração para o carrossel.
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // Telas menores que 768px (Mobile)
                settings: {
                    arrows: false, // Desativa setas no mobile
                    dots: true
                }
            }
        ]
    };

    return (
        // REMOVEMOS O PADDING HORIZONTAL DA SECTION
        <section id="espaco" className="py-16 bg-white text-center">
            
            {/* ADICIONAMOS O PADDING E CENTRALIZAMOS O CONTEÚDO AQUI */}
            <div className="px-[5%] max-w-[1400px] mx-auto">
                <h2 className="text-[2.5rem] mb-4 text-dark font-bold">Nosso Espaço</h2>
                <p className="text-[1.1rem] mb-12 text-text-color">
                    Conheça o ambiente que preparamos para você e sua família.
                </p>

                {/* O 'overflow-x-hidden' CORTA AS SETAS QUE VAZAM DO CARROSSEL */}
                <div 
                    className="max-w-[900px] mx-auto overflow-x-hidden" 
                    data-aos="fade-up"
                >
                    <Slider {...settings}>
                        {photos.map(photo => (
                            <div key={photo.id} className="outline-none p-2">
                                <img 
                                    src={photo.src} 
                                    alt={photo.alt} 
                                    className="w-full h-auto rounded-[10px] shadow-lg" 
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default NossoEspaco;