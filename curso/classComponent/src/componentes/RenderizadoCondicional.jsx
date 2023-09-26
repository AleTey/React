import React from 'react';
import { Component } from 'react';

function Login() {
  return (
    <h4>login</h4>
  )
}

const Logout = () => {
  return (
    <h4>logout</h4>
  )
}

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conectado: true,
    }
  }
  render() {
    return (
      <>
        <h2>Renderizado Condicional</h2>
        {this.state.conectado ? <Logout /> : <Login />}
      </>
    );
  }
}