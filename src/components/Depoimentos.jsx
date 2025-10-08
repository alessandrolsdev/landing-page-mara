import React from 'react';
import Slider from 'react-slick';
import './Depoimentos.css';

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

function Depoimentos() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (
        <section id="depoimentos" className="testimonials-section">
            <h2>O que nossos pacientes dizem</h2>
            <div className="testimonials-container" data-aos="fade-up">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <span className="testimonial-author">- {testimonial.author}</span>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Depoimentos;