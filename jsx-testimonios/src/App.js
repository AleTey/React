import './App.css';
import Testimonio from './Componentes/Testimonio';
import Testimonios from './objetos/Testimonios';
import AleTei from './objetos/Testimonios';
// import Testimonio from './objetos/Testimonios';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre='Emma B'
          pais='Suecia'
          imagen='2'
          alt = 'foto1'
          cargo='Ingeniera Software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='1'
          alt = 'foto2'
          cargo='Analista'
          empresa='Amazon'
          testimonio= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        <Testimonio 
          nombre='Juan Chima'
          pais='Nigeria'
          imagen='3'
          alt = 'foto3'
          cargo='Ingeniero Software'
          empresa='ChatDesk'
          testimonio= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        <Testimonio 
          nombre = {AleTei.nombre}
          pais = {AleTei.pais}
          imagen = {AleTei.imagen}
          alt = {AleTei.alt}
          cargo = {AleTei.cargo}
          empresa = {AleTei.empresa}
          testimonio = {AleTei.testimonio}
        />
      </div>
    </div>
  );
}

export default App;
