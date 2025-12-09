import React from 'react';
import fotoDentista from '../assets/mara.jpeg'; 

/**
 * Renderiza a seção "Sobre".
 * Apresenta uma foto e uma biografia da profissional responsável.
 */
function Sobre() {
  return (
    <section id="sobre" className="py-16 px-[5%] bg-white">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-[1100px] mx-auto text-center md:text-left">
        <div className="flex-1 max-w-[400px]" data-aos="fade-right">
          {/* AQUI USAMOS A VARIÁVEL QUE IMPORTAMOS, EM VEZ DO CAMINHO COMO TEXTO */}
          <img src={fotoDentista} alt="Dra. Mara, dentista na Vitta Clinic" className="w-full rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="flex-[1.5]" data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-6 text-dark">Sobre a Dra. Mara Luísa</h2>
          <p className="text-[1.1rem] leading-[1.7] mb-4 text-text-color"> Sou Mara Luísa Carvalho, cirurgiã-dentista com dedicação especial à Odontopediatria, área que me encanta por unir técnica, cuidado e afeto. Minha missão é transformar a experiência no consultório em um momento leve e acolhedor, ajudando a construir desde cedo uma relação saudável das crianças com a saúde bucal.
          </p> 

          <p className="text-[1.1rem] leading-[1.7] mb-4 text-text-color"> Acredito que cada sorriso tem uma história única, e por isso busco oferecer um atendimento individualizado, baseado em conhecimento científico atualizado, prevenção e respeito às necessidades de cada paciente e família.
          </p>

          <p className="text-[1.1rem] leading-[1.7] mb-4 text-text-color"> Mais do que cuidar de dentes, meu propósito é promover confiança, bem-estar e saúde para que cada sorriso possa crescer forte e feliz.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
