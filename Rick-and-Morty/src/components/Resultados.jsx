import React from 'react';
import { useState, useEffect } from 'react';
import '../components/Resultados.css';
import Personaje from './Personaje';

export default function Resultados(props) {

  const [resultados, setResultados] = useState([]);

  // useEffect(() => {
  //   const url = "https://rickandmortyapi.com/api/character";
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => {
  //       // let personajes = [];
  //       json.results.forEach((el) => {
  //         console.log(el.image);
  //         let personaje = {
  //           id: el.id,
  //           name: el.name,
  //           species: el.species,
  //           gender: el.gender,
  //           location: el.location.name,
  //           img: el.image,
  //         }

  //           // personajes.push(personaje);
  //           // console.log(personaje);
  //             setResultados(resultados => [...resultados, personaje]);

  //       });
  //     });
  // }, []);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const personajes = json.results.map((el) => ({
          id: el.id,
          name: el.name,
          status: el.status,
          species: el.species,
          gender: el.gender,
          location: el.location.name,
          img: el.image,
        }));
  
        setResultados(personajes);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, []);


  return (
    <>
      <div className="resultados-container">
        {resultados.map((el) => (
          <Personaje key={el.id} 
                     name={el.name} 
                     id={el.id}
                     status = {el.status} 
                     species={el.species} 
                     gender={el.gender} 
                     location={el.location} 
                     img={el.img} />
        ))};
      </div>
    </>
  );
}


