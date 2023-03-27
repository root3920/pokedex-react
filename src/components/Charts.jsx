import "../css/charts.css";
import React, { useContext } from "react";
import { ThemeContext } from "../context/context";
import styled from "styled-components";

const Charts = () => {
  const { pokemons, color } = useContext(ThemeContext);

  const HP_STAT_POKEMON = {
    name: pokemons.stats[0].stat.name.toUpperCase(),
    rate: pokemons.stats[0].base_stat,
  };

  const ATTACK_STAT_POKEMON = {
    name:
      pokemons.stats[1].stat.name.charAt(0).toUpperCase() +
      pokemons.stats[1].stat.name.slice(1).toLowerCase(),
    rate: pokemons.stats[1].base_stat,
  };

  const DEFENSE_STAT_POKEMON = {
    name:
      pokemons.stats[2].stat.name.charAt(0).toUpperCase() +
      pokemons.stats[2].stat.name.slice(1).toLowerCase(),
    rate: pokemons.stats[2].base_stat,
  };

  const ESATTACK_STAT_POKEMON = {
    name:
      pokemons.stats[3].stat.name.charAt(0).toUpperCase() +
      pokemons.stats[3].stat.name.slice(1).toLowerCase(),
    rate: pokemons.stats[3].base_stat,
  };

  const ESDEFE_STAT_POKEMON = {
    name:
      pokemons.stats[4].stat.name.charAt(0).toUpperCase() +
      pokemons.stats[4].stat.name.slice(1).toLowerCase(),
    rate: pokemons.stats[4].base_stat,
  };

  const SPEED_STAT_POKEMON = {
    name:
      pokemons.stats[5].stat.name.charAt(0).toUpperCase() +
      pokemons.stats[5].stat.name.slice(1).toLowerCase(),
    rate: pokemons.stats[5].base_stat,
  };

  return (
    <div className="contenedor_stats_charts">
      <section>
        <p>{HP_STAT_POKEMON.name}: </p>
        <Pil primary={HP_STAT_POKEMON.rate} color={color}></Pil>
        <p>{ATTACK_STAT_POKEMON.name}: </p>
        <Pil primary={ATTACK_STAT_POKEMON.rate} color={color}></Pil>
        <p>{DEFENSE_STAT_POKEMON.name}: </p>
        <Pil primary={DEFENSE_STAT_POKEMON.rate} color={color}></Pil>
      </section>
      <section>
        <p>{ESATTACK_STAT_POKEMON.name}: </p>
        <Pil primary={ESATTACK_STAT_POKEMON.rate} color={color}></Pil>
        <p>{ESDEFE_STAT_POKEMON.name}: </p>
        <Pil primary={ESDEFE_STAT_POKEMON.rate} color={color}></Pil>
        <p>{SPEED_STAT_POKEMON.name}: </p>
        <Pil primary={SPEED_STAT_POKEMON.rate} color={color}></Pil>
      </section>
    </div>
  );
};

const Pil = styled.div`
  background-image: ${(props) =>
    props.primary
      ? `linear-gradient(to right, ${props.color} ${
          props.primary / 3
        }%, #fff 0%)`
      : ""};
  padding: 0px 100px;
  margin: 5px 0px;
  border-radius: 20px;
  height: 15px;
  width: 100%;

  &::before {
    content: ${(props) => (props.primary ? `"${props.primary} / 300"` : "")};
    font-size: 1.8vmin;
    position: relative;
    top: -18px;
    right: 90px;
    color: black;

    @media screen and (max-width: 550px) {
      top: -14px;
  }
`;

export default Charts;
