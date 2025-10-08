import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Importação dos arquivos de estilo globais e de bibliotecas
import './index.css';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Renderiza o componente principal <App> na div #root do index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);