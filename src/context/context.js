import { createContext, useState, useEffect } from "react";
import getRandomColor from "../functions/randomColor";
import "../css/colors.css";
const ThemeContext = createContext();

const Provedor = ({ children }) => {
  const [num, setNum] = useState(Math.floor(Math.random() * 1008) + 1);
  const [pokemons, setPokemons] = useState({});
  const [color, setColor] = useState("#0ac1d0");

  //Funcion para elegir un pokemon random
  const numRandom = () => {
    setNum(Math.floor(Math.random() * 1008) + 1);
    setColor(getRandomColor());
  };

  // API URL
  const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/";
  const POKE_API_POKEMON_URL = `${POKE_API_URL}${num}`;

  //Llamada a la POKEAPI
  useEffect(() => {
    fetch(POKE_API_POKEMON_URL)
      .then((response) => response.json())
      .then((pokemones) => setPokemons(pokemones));
  }, [num]);

  const typePokemons1 = () => {
    if (pokemons.types)
      switch (pokemons.types[0].type.name) {
        case "normal":
          return <p className="normal">{pokemons.types[0].type.name}</p>;

        case "water":
          return <p className="water">{pokemons.types[0].type.name}</p>;

        case "flying":
          return <p className="flying">{pokemons.types[0].type.name}</p>;

        case "poison":
          return <p className="poison">{pokemons.types[0].type.name}</p>;

        case "psychic":
          return <p className="psychic">{pokemons.types[0].type.name}</p>;

        case "fairy":
          return <p className="fairy">{pokemons.types[0].type.name}</p>;
        case "electric":
          return <p className="electric">{pokemons.types[0].type.name}</p>;
        case "ground":
          return <p className="ground">{pokemons.types[0].type.name}</p>;
        case "steel":
          return <p className="steel">{pokemons.types[0].type.name}</p>;
        case "fire":
          return <p className="fire">{pokemons.types[0].type.name}</p>;
        case "dragon":
          return <p className="dragon">{pokemons.types[0].type.name}</p>;
        case "grass":
          return <p className="grass">{pokemons.types[0].type.name}</p>;
        case "bug":
          return <p className="bug">{pokemons.types[0].type.name}</p>;
        case "dark":
          return <p className="dark">{pokemons.types[0].type.name}</p>;
        case "fighting":
          return <p className="fighting">{pokemons.types[0].type.name}</p>;
        case "rock":
          return <p className="rock">{pokemons.types[0].type.name}</p>;
        case "ice":
          return <p className="ice">{pokemons.types[0].type.name}</p>;
        default:
          return <p className="pil_type">{pokemons.types[0].type.name}</p>;
      }
  };

  const typePokemons2 = () => {
    if (pokemons.types)
      switch (pokemons.types[1].type.name) {
        case "normal":
          return <p className="normal">{pokemons.types[1].type.name}</p>;

        case "water":
          return <p className="water">{pokemons.types[1].type.name}</p>;

        case "flying":
          return <p className="flying">{pokemons.types[1].type.name}</p>;

        case "poison":
          return <p className="poison">{pokemons.types[1].type.name}</p>;

        case "psychic":
          return <p className="psychic">{pokemons.types[1].type.name}</p>;

        case "fairy":
          return <p className="fairy">{pokemons.types[1].type.name}</p>;
        case "electric":
          return <p className="electric">{pokemons.types[1].type.name}</p>;
        case "ground":
          return <p className="ground">{pokemons.types[1].type.name}</p>;
        case "steel":
          return <p className="steel">{pokemons.types[1].type.name}</p>;
        case "fire":
          return <p className="fire">{pokemons.types[1].type.name}</p>;
        case "dragon":
          return <p className="dragon">{pokemons.types[1].type.name}</p>;
        case "grass":
          return <p className="grass">{pokemons.types[1].type.name}</p>;
        case "bug":
          return <p className="bug">{pokemons.types[1].type.name}</p>;
        case "dark":
          return <p className="dark">{pokemons.types[1].type.name}</p>;
        case "fighting":
          return <p className="fighting">{pokemons.types[1].type.name}</p>;
        case "rock":
          return <p className="rock">{pokemons.types[1].type.name}</p>;
        case "ice":
          return <p className="ice">{pokemons.types[1].type.name}</p>;
        default:
          return <p className="pil_type">{pokemons.types[1].type.name}</p>;
      }
  };

  return (
    <ThemeContext.Provider
      value={{
        pokemons,
        numRandom,
        color,
        typePokemons1,
        typePokemons2,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { Provedor, ThemeContext };
