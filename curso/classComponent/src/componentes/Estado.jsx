import React from 'react';
import { Component } from 'react';


// Componente hijo que se le pasa un state como prop

function EstadoAHijo(props) {
  return(
    <p>{props.estado}</p>
  );

  
}


export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    // setInterval(()=>{
    //   this.setState({
    //     contador: this.state.contador + 1
    //   });
    // }, 1000
    // )
  }

  render() {
    return (
      <>
        <h2>State</h2>
        <h3>Contador</h3>
        <p>{this.state.contador}</p>
        <EstadoAHijo estado={this.state.contador} /> 
      </>
    );
  };
};

