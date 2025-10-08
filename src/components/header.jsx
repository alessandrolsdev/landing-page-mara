import React, { useState } from 'react';
import './Header.css';
import logoIcon from '../assets/logo-icon.png';

// NOVIDADE: Importando os ícones do Instagram e WhatsApp
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const handleLinkClick = () => {
    setMenuAberto(false);
  };

  return (
    // REMOVEMOS A BARRA PRETA QUE FICAVA AQUI EM CIMA
    <header className="header">
      <div className="logo">
        <img src={logoIcon} alt="Ícone da Vitta Clinic" />
        <span>Vitta Clinic</span>
      </div>

      <nav className="nav-desktop">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Tratamentos</a></li>
          <li><a href="#espaco">Nosso Espaço</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      
      {/* NOVIDADE: Adicionamos os ícones sociais aqui no header principal */}
      <div className="header-social-icons">
        <a href="https://instagram.com/SEU_USUARIO" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/55NUMERO" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
      
      <a href="https://wa.me/55NUMERO" target="_blank" className="cta-button cta-desktop">
        Agende sua Consulta
      </a>

      <button 
        className={`botao-hamburguer ${menuAberto ? 'aberto' : ''}`} 
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        <div className="linha"></div>
        <div className="linha"></div>
        <div className="linha"></div>
      </button>

      {/* O menu mobile continua igual, pois já tem o botão de WhatsApp */}
      <nav className={menuAberto ? "nav-mobile aberto" : "nav-mobile"}>
        <ul>
          <li><a href="#inicio" onClick={handleLinkClick}>Início</a></li>
          <li><a href="#sobre" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#servicos" onClick={handleLinkClick}>Tratamentos</a></li>
          <li><a href="#espaco" onClick={handleLinkClick}>Nosso Espaço</a></li>
          <li><a href="#depoimentos" onClick={handleLinkClick}>Depoimentos</a></li>
          <li><a href="#contato" onClick={handleLinkClick}>Contato</a></li>
          <li>
            <a href="https://wa.me/55NUMERO" target="_blank" className="cta-button-mobile" onClick={handleLinkClick}>
              Agende no WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;