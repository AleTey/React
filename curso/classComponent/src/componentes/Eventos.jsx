import React from 'react';
import { Component } from 'react';

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
    this.reset = this.reset.bind(this);
  }

  sumar(e) {
    console.log("sumando");
    this.setState({
      contador: this.state.contador + 1
    });
    // console.log(this.state.contador);
  }

  restar(e) {
    console.log("restando");
    this.state.contador > 0 &&
      this.setState({
        contador: this.state.contador - 1
      })
  }

  reset(e) {
    this.setState({
      contador: this.state.contador = 0
    })
  }

  render() {
    return (
      <>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={(this.sumar)}>+</button>
          <button onClick={this.restar}>-</button>
          <button onClick={this.reset}>reset</button>
        </nav>
      </>
    )
  }
}



// Properties Initializer
// Ya no es necesario el constructor
export class EventosES7 extends Component {
  state = {
    contador: 0
  }

  sumar = e => {
    // console.log(e);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = e => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  reset = e => {
    this.setState({
      contador: this.state.contador = 0,
    })
  }


  render() {
    return (
      <>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <h3>{this.state.contador}</h3>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
        <button onClick={this.reset}>reset</button>
      </>
    )
  }
}



function Boton(props){
  return(
    <button onClick={props.myOnClick}>Boton</button>
  );
};


export class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target.innerText);
    console.log(e.nativeEvent.target);
    console.log(msg);
  };

  render() {
    return (
      <>
      <h2>Mas sobre Eventos</h2>
      <button onClick={(e) => this.handleClick(e,"Hola Mundo! pasando parametro desde evento")}>Click!</button>
      {/* Evento Personalizado */}
      < Boton myOnClick={(e) => this.handleClick(e,"Pasando por props un handleClick")} />
      </>
    );
  };
};