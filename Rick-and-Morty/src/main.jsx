import React from 'react'
import ReactDOM from 'react-dom/client'
import Titulo from './components/Titulo';
import ContenedorOpciones from './components/ContenedorOpciones';
import './index.css';
import Resultados from './components/Resultados';
import Global from './Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
  </React.StrictMode>,
)
