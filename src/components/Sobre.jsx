import React from 'react';
import './Sobre.css';
// Lembre-se de colocar uma imagem da dentista na pasta 'src/assets'
// import fotoDentista from '../assets/foto-dentista.jpg'; 

function Sobre() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-image">
          {/* <img src={fotoDentista} alt="Dra. Joana Silva" /> */}
          <div className="image-placeholder"></div> {/* Use isso como placeholder se não tiver a imagem */}
        </div>
        <div className="about-content">
          <h2>Sobre a Dra. Joana Silva</h2>
          <p>
            Com mais de 15 anos de experiência, a Dra. Joana é apaixonada por transformar sorrisos e melhorar a qualidade de vida de seus pacientes. Formada pela Universidade de São Paulo (USP), possui especialização em Implantodontia e Estética Dental.
          </p>
          <p>
            Nossa clínica utiliza tecnologia de ponta para garantir diagnósticos precisos e tratamentos confortáveis, sempre com um atendimento humanizado e focado nas suas necessidades individuais.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;