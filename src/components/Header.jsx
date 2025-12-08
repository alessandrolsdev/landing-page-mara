import React, { useState } from 'react';
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
    <header className="flex items-center px-[5%] py-4 bg-white shadow-md sticky top-0 z-[1000] justify-between">
      <div className="flex items-center gap-2.5 text-2xl font-bold text-dark mr-auto">
        <img src={logoIcon} alt="Ícone da Vitta Clinic" className="h-[35px]" />
        <span>Vitta Clinic</span>
      </div>

      {/*-- Navegação para telas grandes --*/}
      <nav className="hidden lg:block mr-8">
        <ul className="list-none flex gap-8 m-0">
          <li><a href="#inicio" className="text-text-color font-semibold hover:text-primary transition-colors duration-300">Início</a></li>
          <li><a href="#sobre" className="text-text-color font-semibold hover:text-primary transition-colors duration-300">Sobre</a></li>
          <li><a href="#servicos" className="text-text-color font-semibold hover:text-primary transition-colors duration-300">Tratamentos</a></li>
          <li><a href="#espaco" className="text-text-color font-semibold hover:text-primary transition-colors duration-300">Nosso Espaço</a></li>
          <li><a href="#depoimentos" className="text-text-color font-semibold hover:text-primary transition-colors duration-300">Depoimentos</a></li>
          <li><a href="#contato" className="text-text-color font-semibold hover:text-primary transition-colors duration-300">Contato</a></li>
        </ul>
      </nav>
      
      <div className="hidden lg:flex items-center gap-6 mr-8">
        <a href="https://www.instagram.com/mara_carvalh_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-color text-2xl flex items-center transition-all duration-300 hover:text-primary hover:scale-110">
          <FaInstagram />
        </a>
        <a href="https://wa.me/5538984078448" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-text-color text-2xl flex items-center transition-all duration-300 hover:text-primary hover:scale-110">
          <FaWhatsapp />
        </a>
      </div>
      
      <a href="https://wa.me/5538984078448" target="_blank" className="hidden lg:inline-block px-6 py-3 bg-primary text-white rounded-[5px] font-bold cursor-pointer transition-colors duration-300 hover:bg-[#a18241] border-none whitespace-nowrap no-underline">
        Agende sua Consulta
      </a>

      {/*-- Botão que controla a abertura e fechamento do menu mobile --*/}
      <button 
        className={`flex lg:hidden bg-transparent border-none cursor-pointer p-0 z-[3000] flex-col justify-around w-[25px] h-[21px] group ${menuAberto ? 'aberto' : ''}`}
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        <div className={`w-[25px] h-[3px] bg-text-color rounded-[2px] transition-all duration-300 origin-center ${menuAberto ? 'bg-white translate-y-[8px] rotate-45' : ''}`}></div>
        <div className={`w-[25px] h-[3px] bg-text-color rounded-[2px] transition-all duration-300 origin-center ${menuAberto ? 'bg-white opacity-0' : ''}`}></div>
        <div className={`w-[25px] h-[3px] bg-text-color rounded-[2px] transition-all duration-300 origin-center ${menuAberto ? 'bg-white -translate-y-[8px] -rotate-45' : ''}`}></div>
      </button>

      {/*-- Navegação para telas pequenas (menu lateral) --*/}
      <nav className={`fixed top-0 w-[80%] max-w-[350px] h-full bg-dark shadow-[-5px_0_15px_rgba(0,0,0,0.25)] z-[2000] transition-all duration-400 ease-in-out flex flex-col justify-center px-4 py-8 ${menuAberto ? 'right-0' : '-right-full'}`}>
        <ul className="list-none p-0 m-0 w-full">
          <li className="mb-4"><a href="#inicio" onClick={handleLinkClick} className="block p-4 text-white text-lg font-semibold text-center border border-[#555] rounded-[5px] transition-colors duration-300 hover:bg-white/10 hover:text-primary no-underline">Início</a></li>
          <li className="mb-4"><a href="#sobre" onClick={handleLinkClick} className="block p-4 text-white text-lg font-semibold text-center border border-[#555] rounded-[5px] transition-colors duration-300 hover:bg-white/10 hover:text-primary no-underline">Sobre</a></li>
          <li className="mb-4"><a href="#servicos" onClick={handleLinkClick} className="block p-4 text-white text-lg font-semibold text-center border border-[#555] rounded-[5px] transition-colors duration-300 hover:bg-white/10 hover:text-primary no-underline">Tratamentos</a></li>
          <li className="mb-4"><a href="#espaco" onClick={handleLinkClick} className="block p-4 text-white text-lg font-semibold text-center border border-[#555] rounded-[5px] transition-colors duration-300 hover:bg-white/10 hover:text-primary no-underline">Nosso Espaço</a></li>
          <li className="mb-4"><a href="#depoimentos" onClick={handleLinkClick} className="block p-4 text-white text-lg font-semibold text-center border border-[#555] rounded-[5px] transition-colors duration-300 hover:bg-white/10 hover:text-primary no-underline">Depoimentos</a></li>
          <li className="mb-4"><a href="#contato" onClick={handleLinkClick} className="block p-4 text-white text-lg font-semibold text-center border border-[#555] rounded-[5px] transition-colors duration-300 hover:bg-white/10 hover:text-primary no-underline">Contato</a></li>
          <li>
            <a href="https://wa.me/5538984078448" target="_blank" className="block w-full mt-6 bg-primary !text-dark font-bold p-4 text-center border border-primary rounded-[5px] hover:bg-[#a18241] hover:!text-dark hover:border-[#a18241] no-underline" onClick={handleLinkClick}>
              Agende no WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
