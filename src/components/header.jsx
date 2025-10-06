// 1. Importamos o 'useState' do React para guardar o estado do menu (aberto/fechado)
import React, { useState } from 'react';
import './Header.css';

function Header() {
  // 2. Criamos o estado. 'menuAberto' guarda o valor (true/false), e 'setMenuAberto' é a função para trocar esse valor.
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para fechar o menu quando um link for clicado (melhora a experiência no mobile)
  const handleLinkClick = () => {
    setMenuAberto(false);
  };
console.log('Estado atual do menu:', menuAberto);
  return (
    <header className="header">
      <div className="logo">Dra. Mara</div>

      {/* --- MENU PARA DESKTOP --- */}
      {/* Este é o menu que já tínhamos. Adicionamos a classe 'nav-desktop' */}
      <nav className="nav-desktop">
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      {/* --- BOTÃO HAMBÚRGUER (só aparece no mobile) --- */}
      {/* Este botão usa o onClick para inverter o estado 'menuAberto' */}
      <button 
        className="botao-hamburguer" 
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {/* Este é o ícone do hambúrguer, feito com divs */}
        <div className="linha"></div>
        <div className="linha"></div>
        <div className="linha"></div>
      </button>

      {/* --- MENU MOBILE --- */}
      {/* Este menu só será exibido na tela se 'menuAberto' for true */}
      {menuAberto && (
         <nav className={menuAberto ? "nav-mobile aberto" : "nav-mobile"}>
        <button 
          className="botao-fechar" 
          onClick={() => setMenuAberto(false)}
        >
          X
        </button>
        <ul>
          <li><a href="#servicos" onClick={handleLinkClick}>Serviços</a></li>
          <li><a href="#sobre" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#contato" onClick={handleLinkClick}>Contato</a></li>
          <li>
              <a 
                  href="https://wa.me/55NUMEROAQUI" 
                  target="_blank" 
                  className="cta-button-mobile"
                  onClick={handleLinkClick}
              >
                  Agende sua Consulta
              </a>
          </li>
        </ul>
      </nav>
      )}

      {/* O botão CTA principal do header, que agora será escondido no mobile */}
      <a href="https://wa.me/55NUMEROAQUI" target="_blank" className="cta-button cta-desktop">
        Agende sua Consulta
      </a>
    </header>
  );
}

export default Header;