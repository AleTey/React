import {React, Component} from 'react';
// import { Component } from 'react';

// NOTA: Este ejemplo es para comunicacion entre padre e hijo. Para comunicacion
//       entre componentes no relacionados investigar => Emisor de eventos / Destino / Despachador
//                                                    => Publicacion / Suscripcion
//                                                    => Señales
//                                                    => Portales                                            

export default class ComunicacionEntrComponentes extends Component {
    state = {
        contador: 0,
    }

    incrementarContador = (e) => {
        console.log('click');
        this.setState({
            contador: this.state.contador + 1,
        })
    }
    render() {
        return(
            <>
            <h2>Comunicacion Entre Componentes</h2>
            <Hijo incrementarContador={this.incrementarContador} msg1="msg 1" msg2="msg1" />
            <Hijo incrementarContador={this.incrementarContador} msg1="msg 2" msg2="msg1" />
            <h4>{this.state.contador}</h4>
            </>
        )
    }
}

let Hijo= ({incrementarContador, msg1, msg2}) => {
    return(
        <>
            <h3>{msg1} {msg2}</h3>
            <button onClick={incrementarContador}>+</button>
        </>
    )
}