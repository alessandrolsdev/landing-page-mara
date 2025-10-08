import React, { useEffect } from 'react';
import Aos from 'aos';

// Importação dos componentes principais da página
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sobre from './components/Sobre.jsx';
import Servicos from './components/Servicos.jsx';
import NossoEspaco from './components/NossoEspaco.jsx';
import Depoimentos from './components/Depoimentos.jsx';
import Contato from './components/Contato.jsx';
import Footer from './components/Footer.jsx';

/**
 * Componente principal da aplicação.
 * Organiza o layout da página e inicializa bibliotecas globais.
 */
function App() {
  // Efeito para inicializar a biblioteca de animações (AOS) uma única vez.
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true,      // Animação acontece apenas uma vez por elemento
    });
  }, []); // O array vazio garante que este efeito rode apenas na montagem do componente.

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <NossoEspaco />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;