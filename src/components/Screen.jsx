import React, { useContext } from "react";
import ContenedorItem from "./ContenedorItem";
import ContenedorStats from "./ContenedorStats";
import { ThemeContext } from "../context/context";
import Botones from "./Botones";

const Screen = () => {
  const { numRandom } = useContext(ThemeContext);

  return (
    <main className="App">
      <ContenedorItem />
      <ContenedorStats />
      <Botones numRandom={numRandom} nombre1="Anterior" nombre2="Siguiente" />
    </main>
  );
};

export default Screen;
