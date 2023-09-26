import React from 'react';
import { Component } from 'react';
import data from '../helper/data.json';

function ElementoLista(props) {
  return(
    <li>
      <a href={props.el.web} target='_blank' > {props.el.name} </a>
    </li>
  );
}


export default class RenderizadoDeElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primaver", "Verano", "Otoño", "Invierno"],
    }
  }

  render() {
    return (
      <>
        <h2>Renderizado de Elementos</h2>

        <ol>
          {
            this.state.seasons.map((el, index) =>
              <li key={index} >{el}</li>)
          }
        </ol>
        <h3>Frameworkd Frontend JavaScript</h3>
        <ul>
          {
            data.frameworkd.map(el=> <ElementoLista key={el.id} el={el} />)
          }
        </ul>
      </>
    );
  }
}