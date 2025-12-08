import React from 'react';

/**
 * Renderiza a seção de Contato.
 * Inclui um formulário (integrado com Formspree) e um mapa do Google incorporado.
 */
function Contato() {
  return (
    <section id="contato" className="py-16 pb-0">
      <div className="flex flex-col-reverse lg:flex-row max-w-[1400px] mx-auto">
        <div className="flex-1 px-[5%] py-12 lg:px-[5%] lg:py-12" data-aos="fade-right">
          <h2 className="text-[2.5rem] mb-4 text-dark font-bold">Agende sua Avaliação</h2>
          <p className="text-[1.1rem] mb-8 text-text-color">Preencha o formulário e nossa equipe entrará em contato o mais breve possível.</p>
          {/* O atributo 'action' deve conter o endpoint do seu formulário Formspree */}
          <form className="flex flex-col gap-4" action="https://formspree.io/f/mwprnbqr" method="POST">
            <input type="text" name="name" placeholder="Seu Nome" required className="w-full p-4 border border-[#ddd] rounded-[5px] text-base font-sans bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
            <input type="email" name="email" placeholder="Seu Melhor E-mail" required className="w-full p-4 border border-[#ddd] rounded-[5px] text-base font-sans bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
            <input type="tel" name="phone" placeholder="Seu WhatsApp" required className="w-full p-4 border border-[#ddd] rounded-[5px] text-base font-sans bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
            <textarea name="message" placeholder="Mensagem (opcional)" rows="4" className="w-full p-4 border border-[#ddd] rounded-[5px] text-base font-sans bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"></textarea>
            <button type="submit" className="w-full border-none text-[1.1rem] p-4 bg-primary text-white rounded-[5px] font-bold cursor-pointer transition-colors duration-300 hover:bg-[#a18241]">Enviar e Agendar</button>
          </form>
        </div>
        <div className="flex-1 min-h-[350px] lg:min-h-[500px] flex flex-col" data-aos="fade-left">
          {/* O atributo 'src' deve conter o link de incorporação do Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.1526760940583!2d-54.596836024935286!3d-20.458921481051625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e89615309549%3A0x653014c7a93814de!2sR.%20Paran%C3%A1%2C%202-66%20-%20Centro%2C%20Campo%20Grande%20-%20MS%2C%2079020-290!5e0!3m2!1spt-BR!2sbr!4v1759882116156!5m2!1spt-BR!2sbr"
            className="w-full grow border-none"
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Vitta Clinic"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contato;
