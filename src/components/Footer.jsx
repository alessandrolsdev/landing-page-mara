import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://wa.me/5511999998888" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
      <p className="copyright">
        © 2025 Dra. Joana Silva | Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;