import React from 'react';
import Slider from 'react-slick';

// Array com os dados para os slides de depoimentos.
const testimonials = [
    {
        text: "Atendimento incrível e super profissional! A Dra. Mara me deixou muito à vontade e o resultado ficou perfeito. Recomendo de olhos fechados!",
        author: "Maria S."
    },
    {
        text: "Tinha muito medo de dentista, mas a equipe da Vitta Clinic mudou minha percepção. Cuidado e paciência em cada detalhe. Muito obrigado!",
        author: "João P."
    },
    {
        text: "Clínica com estrutura impecável e tecnologia de ponta. Senti muita segurança no tratamento. Meu sorriso é outro!",
        author: "Ana C."
    }
];

/**
 * Renderiza a seção "Depoimentos".
 * Exibe feedbacks de pacientes em um formato de carrossel.
 */
function Depoimentos() {
    // CORREÇÃO: O objeto de configuração para o carrossel DEVE ser definido aqui dentro.
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (
        // Removemos o padding horizontal da section, mantendo apenas o vertical e fundo.
        <section id="depoimentos" className="py-16 bg-secondary text-center">
            
            {/* ADICIONAMOS O PADDING E CENTRALIZAMOS O CONTEÚDO AQUI */}
            <div className="px-[5%] max-w-[1400px] mx-auto">
                <h2 className="text-[2.5rem] mb-12 text-dark font-bold">O que nossos pacientes dizem</h2>
                
                {/* O 'overflow-x-hidden' AQUI CORTA AS SETAS QUE VAZAM DO CARROSSEL */}
                <div
                    className="max-w-[700px] mx-auto overflow-x-hidden [&_.slick-dots_li_button:before]:text-primary [&_.slick-dots_li.slick-active_button:before]:opacity-100 [&_.slick-prev:before]:text-primary [&_.slick-prev:before]:text-[25px] [&_.slick-next:before]:text-primary [&_.slick-next:before]:text-[25px]"
                    data-aos="fade-up"
                >
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-8 outline-none">
                                <p className="text-[1.2rem] italic leading-[1.6] mb-6 text-text-color">"{testimonial.text}"</p>
                                <span className="font-bold text-primary">- {testimonial.author}</span>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Depoimentos;