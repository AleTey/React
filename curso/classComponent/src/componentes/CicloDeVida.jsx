import { React, Component } from 'react';

// CICLO DE VIDA DE UN COMPONENTE de Clase
// Son metodos que se ejecutan automaticamente en un Componente de Clase

//  1. Montaje
//      - constructor()
//      - render()
//      - componentDidMount()
//  2. Actualizacion
//      - render()
//      - componentDidUpdate()
//  3. Desmontaje
//      - componentWillUnmount()

export default class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "Constructor() ==> Aqui se inicializa el componente PERO AUN NO ESTA EN EL DOM")

    this.state = {
      hora: new Date().toLocaleTimeString(),
    }

    this.temporalizador = null;
  }

  componentDidMount() {
    console.log(1, "componentDidMount() ==> El componente ya se monto")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las porps del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    console.log(3, "componentWillUnmount() ==> El componente ha sido eliminado del DOM")
  };

  ticTac = (e) => {
    this.temporalizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      })
    }, 1000)
  }

  iniciar = (e) => {
    this.ticTac();
  };

  detener = (e) => {
    clearInterval(this.temporalizador);
  }

  render() {
    console.log(4, "render() ==> El componente se dibuja (o se redibuja por algun cambio en el DOM")
    return (
      <>
        <h2>Ciclo de Vida de un Componente</h2>
        <h3>{this.state.hora}</h3>
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    )
  }
}