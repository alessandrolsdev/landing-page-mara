import React from 'react';

// Importe TODOS os componentes que você criou, com a extensão .jsx
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Servicos from './components/Servicos.jsx';
import Sobre from './components/Sobre.jsx';
import Contato from './components/Contato.jsx';
import Footer from './components/Footer.jsx';

function App() {
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