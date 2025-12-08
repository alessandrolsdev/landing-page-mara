import React from 'react';

/**
 * Renderiza o rodapé do site.
 * Contém links para redes sociais e informações de copyright.
 */

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-8 px-[5%]">
      <div className="mb-4">
        <a href="https://www.instagram.com/mara_carvalh_" target="_blank" rel="noopener noreferrer" className="text-white no-underline mx-4 text-[1.1rem] transition-colors duration-300 hover:text-primary">Instagram</a>
                <a href="https://wa.me/5538984078448" target="_blank" rel="noopener noreferrer" className="text-white no-underline mx-4 text-[1.1rem] transition-colors duration-300 hover:text-primary">WhatsApp</a>
      </div>
      <p className="text-[0.9rem] opacity-80">
        © 2025 Dra. Mara | Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
