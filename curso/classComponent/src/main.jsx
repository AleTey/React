import React from 'react'
import ReactDOM from 'react-dom/client'
import Componente from './componentes/Componente';
import Props from './componentes/Props';
import Estado from './componentes/Estado';
import RenderizadoCondicional from './componentes/RenderizadoCondicional';
import RenderizadoDeElementos from './componentes/RenderizadoDeElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './componentes/Eventos';
import ComunicacionEntrComponentes from './componentes/ComunicacionEntreComponentes';
import CicloDeVida from './componentes/CicloDeVida';
import AjaxApis from './componentes/AjaxApis';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Componente msg='Hola mundo!'/>
    <Props />
    <Estado />
    <RenderizadoCondicional />
    <RenderizadoDeElementos />
    <hr />
    <EventosES6 />
    <hr />
    <EventosES7 />
    <hr />
    <MasSobreEventos />
    <hr />
    <ComunicacionEntrComponentes />
    <hr />
    <CicloDeVida />
    <hr />
    <AjaxApis />

  </React.StrictMode>,
)
