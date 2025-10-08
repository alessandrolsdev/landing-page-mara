import React, { useEffect } from 'react';
import Aos from 'aos';

// VERIFICAÇÃO FINAL: Garanta que todas as linhas abaixo terminam com .jsx
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sobre from './components/Sobre.jsx';
import Servicos from './components/Servicos.jsx';
import NossoEspaco from './components/NossoEspaco.jsx'; // <-- Principal suspeito
import Depoimentos from './components/Depoimentos.jsx';
import Contato from './components/Contato.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

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