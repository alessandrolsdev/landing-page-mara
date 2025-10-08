import React from 'react';
import './Footer.css';

/**
 * Renderiza o rodapé do site.
 * Contém links para redes sociais e informações de copyright.
 */

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.instagram.com/mara_carvalh_" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://wa.me/5538984078448" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
      <p className="copyright">
        © 2025 Dra. Mara | Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;