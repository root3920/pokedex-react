import Charts from "./Charts";
import React, { useContext } from "react";
import { ThemeContext } from "../context/context";
import "../css/colors.css";
import styled from "styled-components";

const ContenedorStats = () => {
  const { typePokemons1, typePokemons2, pokemons } = useContext(ThemeContext);
  const POKEMON_HEIGHT = pokemons.height;
  const POKEMON_WEIGHT = pokemons.weight;
  if (pokemons.sprites)
    return (
      <div className="contenedor_stats">
        {/* Pokemon Name */}
        {
          <section>
            <p>
              {pokemons.name.charAt(0).toUpperCase() +
                pokemons.name.slice(1).toLowerCase()}
            </p>
          </section>
        }

        {/* Pokemon Type */}
        {pokemons.types.length === 1 ? (
          <section className="pokemon_type">{typePokemons1()}</section>
        ) : pokemons.types.length === 2 ? (
          <section className="pokemon_type">
            <section className="pokemon_type">{typePokemons1()}</section>
            <section className="pokemon_type">{typePokemons2()}</section>
          </section>
        ) : (
          ""
        )}

        {/* Height & Weight */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Info>
            {"Height"}
            <p style={{ fontSize: "3.8vmin", color: "white" }}>
              {POKEMON_HEIGHT.toString().length > 1
                ? POKEMON_HEIGHT.toString().slice(0, 1) +
                  "." +
                  POKEMON_HEIGHT.toString().slice(1)
                : POKEMON_HEIGHT}{" "}
              M
            </p>
          </Info>

          <Info>
            {"Weight"}
            <p style={{ fontSize: "3.8vmin", color: "white" }}>
              {POKEMON_WEIGHT} LB
            </p>
          </Info>
        </div>

        {/* Charts */}
        {pokemons.stats ? <Charts /> : ""}
      </div>
    );
};

const Info = styled.div`
  display: flex;
  width: 23%;
  flex-direction: column-reverse;
  font-size: 2vmin;
  color: #A2A2A2;
`;

export default ContenedorStats;
