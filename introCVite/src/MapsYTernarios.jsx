import { useState } from "react";
import { Formulario } from "./components/Formulario";

let key = 0;
const keyGenerator = () => {
  key++;
  return key;
}

const Items = ({ nombre, visto }) => {
  return (
    <li>{nombre}
      {visto ? '✅' : '❌'}
      {/* El caso de abajo es un ternario sin condicion falsa. Si la condicion no es verdadera sale */}
      {/* {visto && '✅'} */}
    </li>
  );
};

export const MapsYTernarios = () => {
  const addTask = () => {
    setArreglo([...arreglo, { nombre: 'nuevo', visto: false }]);
  }


  let listadoSecciones = [
    { nombre: "Instalacion", visto: true },
    { nombre: "Uso de Vite", visto: true },
    { nombre: "Componentes", visto: true },
    { nombre: "Variables en JSX", visto: true },
    { nombre: "Props", visto: true },
    { nombre: "Eventos", visto: true },
    { nombre: "useState", visto: true },
    { nombre: "Redux", visto: false },
    { nombre: "customHooks", visto: false },
  ];

  const [arreglo, setArreglo] = useState(listadoSecciones);

  const onAddTask = val => {
    let v = val.trim();
    const envio = {
      nombre: v,
      visto: false
    }
    if (v != "" && v && " ") {
      setArreglo([...arreglo, envio]);
    }else {
      alert("debe ingresar un texto para poder agregar")
    }


  }

  return (
    <>
      <h1>Listado temas del curso</h1>
      <Formulario agregarTarea={onAddTask} />
      {/* envia a formulario (hijo) la funcion setArreglo */}
      {/* <Formulario agregarTarea={setArreglo}></Formulario> */}
      {/* <button onClick={addTask}>Add</button> */}

      <ol>
        {arreglo.map(item => <Items key={keyGenerator()} nombre={item.nombre} visto={item.visto}></Items>)}
      </ol>
    </>
  )
}
