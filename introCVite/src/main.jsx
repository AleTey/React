import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Hook } from './Hook';
import { Hook } from './Hook';
import { MapsYTernarios } from './MapsYTernarios';
import { Formulario } from '../src/components/Formulario';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hook value={0} />
    <MapsYTernarios />
    {/* <Formulario /> */}
  </React.StrictMode>,
)
