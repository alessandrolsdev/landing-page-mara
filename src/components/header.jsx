import React from 'react';
import './Header.css'; // Vamos criar este CSS depois

function Header() {
  return (
    <header className="header">
      <div className="logo">Dra. Mara</div>
      <nav>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <a href="https://wa.me/553884078448" target="_blank" className="cta-button">
        Agende sua Consulta
      </a>
    </header>
  );
}

export default Header;