import React from 'react'
import ReactDOM from 'react-dom/client'
import { UsersApp } from './componentes/UsersApp'
import { ConsultaAEleccion } from './componentes/ConsultaAEleccion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp />
    <ConsultaAEleccion />
  </React.StrictMode>,
)
