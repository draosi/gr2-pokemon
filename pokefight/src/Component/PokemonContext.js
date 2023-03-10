import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonController = (props) => {
  const [pokemon, setPokemon] = useState([
    {
      name: "",
      id: "",
      hp: "",
      attack: "",
      defense: "",
      specialAttack: "",
      specialDefense: "",
      speed : "",
    },
  ]);

  

  return (
    <PokemonContext.Provider value={[pokemon, setPokemon]}>
      {props.children}
    </PokemonContext.Provider>
  );
};
