// 1. Importe 'useEffect' do React e 'Aos' da biblioteca
import React, { useEffect } from 'react';
import Aos from 'aos';

// Seus outros imports (Header, Hero, etc.) continuam aqui...
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Servicos from './components/Servicos.jsx';
import Sobre from './components/Sobre.jsx';
import Contato from './components/Contato.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // 2. Adicione este bloco de código
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true,      // Animação acontece apenas uma vez
    });
  }, []);

  // 3. O resto do seu return continua igual
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;