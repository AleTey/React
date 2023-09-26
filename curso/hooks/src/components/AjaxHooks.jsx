import React, { useState, useEffect } from 'react';

const crearId = () =>{
  return Math.random() * 1000;
}

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then(res => res.json())
      .then(json => {
        let pokemons = [];
        console.log(json);
        json.results.forEach((poke) => {
          fetch(poke.url)
            .then((res) => res.json())
            .then((json) => {
              console.log(json)

              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              // pokemons.push(pokemon);
              // setPokemons(pokemons);

              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        });
      });
  }, []);

  const pokemonsArray = Array.from(pokemons);

  return (
    <>
      <h2>Ajax: Peticiones Asincronas en Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map(({id, name, avatar}) => (
          <Pokemon key={crearId()} name={name} avatar={avatar} />
        ))
      )}
    </>
  )
};