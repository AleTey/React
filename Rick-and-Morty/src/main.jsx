import React from 'react'
import ReactDOM from 'react-dom/client'
import Titulo from './components/Titulo';
import ContenedorOpciones from './components/ContenedorOpciones';
import './index.css';
import Resultados from './components/Resultados';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Titulo />
    <ContenedorOpciones />
    <Resultados />
  </React.StrictMode>,
)
