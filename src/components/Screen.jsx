import React, { useContext, useEffect } from "react";
import ContenedorItem from "./ContenedorItem";
import ContenedorStats from "./ContenedorStats";
import { ThemeContext } from "../context/context";
import Botones from "./Botones";
import "../css/screen.css";

const Screen = () => {
  const { numRandom } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // lógica para detectar el desplazamiento de página
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const distanceFromTop = scrollTop + windowHeight;

    // si se ha llegado al final de la página, ejecuta la animación y la acción
    if (distanceFromTop >= document.documentElement.offsetHeight) {
      doAnimationAndAction();
    }
  };

  const doAnimationAndAction = () => {
    // lógica para la animación y la acción
    // por ejemplo:
    const element = document.querySelector(".main");
    element.classList.add("animate");
    // otra acción que quieras realizar
    numRandom();
  };

  return (
    <main className="App page">
      <ContenedorItem />
      <ContenedorStats />
      <Botones numRandom={numRandom} nombre1="Anterior" nombre2="Siguiente" />
    </main>
  );
};

export default Screen;
