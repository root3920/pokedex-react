import { CgPokemon } from "react-icons/cg";
import { useContext } from "react";
import { ThemeContext } from "../context/context";

const ContenedorItem = () => {
  const { pokemons, color } = useContext(ThemeContext);

  return pokemons.sprites ? (
    <div className="contenedor_item" style={{ backgroundColor: color }}>
      <img
        src={pokemons.sprites.front_default}
        alt=""
        height={200}
        width={200}
      />
      <p className="id">#{pokemons.id}</p>

      <p className="id2">
        <CgPokemon size={40} style={{ marginBottom: "-14px" }} />
        Pokedex
      </p>
    </div>
  ) : (
    <div className="contenedor_item" style={{ backgroundColor: color }}>
      Cargando
    </div>
  );
};

export default ContenedorItem;
