import "../css/charts.css";
import React, { useContext } from "react";
import { ThemeContext } from "../context/context";
import styled from "styled-components";
import { motion } from "framer-motion";

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.div
      className="contenedor_stats_charts"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <section>
        <p>{HP_STAT_POKEMON.name}: </p>
        <Pil primary={HP_STAT_POKEMON.rate} color={color}>
          {HP_STAT_POKEMON.rate}/300
        </Pil>
        <p>{ATTACK_STAT_POKEMON.name}: </p>
        <Pil primary={ATTACK_STAT_POKEMON.rate} color={color}>
          {HP_STAT_POKEMON.rate}/300
        </Pil>
        <p>{DEFENSE_STAT_POKEMON.name}: </p>
        <Pil primary={DEFENSE_STAT_POKEMON.rate} color={color}>
          {HP_STAT_POKEMON.rate}/300
        </Pil>
      </section>
      <section>
        <p>{ESATTACK_STAT_POKEMON.name}: </p>
        <Pil primary={ESATTACK_STAT_POKEMON.rate} color={color}>
          {HP_STAT_POKEMON.rate}/300
        </Pil>
        <p>{ESDEFE_STAT_POKEMON.name}: </p>
        <Pil primary={ESDEFE_STAT_POKEMON.rate} color={color}>
          {HP_STAT_POKEMON.rate}/300
        </Pil>
        <p>{SPEED_STAT_POKEMON.name}: </p>
        <Pil primary={SPEED_STAT_POKEMON.rate} color={color}>
          {HP_STAT_POKEMON.rate}/300
        </Pil>
      </section>
    </motion.div>
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
  margin: 0px 0px;
  border-radius: 20px;
  height: auto;
  width: 100%;
  font-size: 2.5vmin;
  color: black;
  font-size: 2vmin;
`;

export default Charts;
// content: ${(props) => (props.primary ? `"${props.primary} / 300"` : "")};
