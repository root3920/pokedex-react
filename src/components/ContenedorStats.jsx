import Charts from "./Charts";
import React, { useContext } from "react";
import { ThemeContext } from "../context/context";
import "../css/colors.css";

const ContenedorStats = () => {
  const { typePokemons1, typePokemons2, pokemons } = useContext(ThemeContext);

  return (
    <>
      <div className="contenedor_stats">
        {pokemons.sprites ? (
          <section>
            <p>
              {pokemons.name.charAt(0).toUpperCase() +
                pokemons.name.slice(1).toLowerCase()}
            </p>
          </section>
        ) : (
          ""
        )}

        {pokemons.sprites && pokemons.types.length == 1 ? (
          <section className="pokemon_type">{typePokemons1()}</section>
        ) : pokemons.sprites && pokemons.types.length == 2 ? (
          <section className="pokemon_type">
            <section className="pokemon_type">{typePokemons1()}</section>
            <section className="pokemon_type">{typePokemons2()}</section>
          </section>
        ) : (
          ""
        )}
        {pokemons.stats ? <Charts /> : ""}
      </div>
    </>
  );
};

export default ContenedorStats;
