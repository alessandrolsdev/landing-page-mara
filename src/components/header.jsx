import React, { useState } from 'react';
import './Header.css';
import logoIcon from '../assets/logo-icon.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

/**
 * Renderiza o cabeçalho do site.
 * Inclui o logo, navegação principal (desktop e mobile) e ícones de redes sociais.
 */
function Header() {
  // Estado para controlar a visibilidade do menu mobile (aberto/fechado).
  const [menuAberto, setMenuAberto] = useState(false);

  /**
   * Função para fechar o menu mobile.
   * Usada nos links do menu para melhorar a experiência do usuário.
   */
  const handleLinkClick = () => {
    setMenuAberto(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logoIcon} alt="Ícone da Vitta Clinic" />
        <span>Vitta Clinic</span>
      </div>

      {/*-- Navegação para telas grandes --*/}
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
      
      <div className="header-social-icons">
        <a href="https://www.instagram.com/mara_carvalh_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/5538984078448" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
      
      <a href="https://wa.me/5538984078448" target="_blank" className="cta-button cta-desktop">
        Agende sua Consulta
      </a>

      {/*-- Botão que controla a abertura e fechamento do menu mobile --*/}
      <button 
        className={`botao-hamburguer ${menuAberto ? 'aberto' : ''}`} 
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        <div className="linha"></div>
        <div className="linha"></div>
        <div className="linha"></div>
      </button>

      {/*-- Navegação para telas pequenas (menu lateral) --*/}
      <nav className={menuAberto ? "nav-mobile aberto" : "nav-mobile"}>
        <ul>
          <li><a href="#inicio" onClick={handleLinkClick}>Início</a></li>
          <li><a href="#sobre" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#servicos" onClick={handleLinkClick}>Tratamentos</a></li>
          <li><a href="#espaco" onClick={handleLinkClick}>Nosso Espaço</a></li>
          <li><a href="#depoimentos" onClick={handleLinkClick}>Depoimentos</a></li>
          <li><a href="#contato" onClick={handleLinkClick}>Contato</a></li>
          <li>
            <a href="https://wa.me/5538984078448" target="_blank" className="cta-button-mobile" onClick={handleLinkClick}>
              Agende no WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;