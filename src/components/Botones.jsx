const Botones = ({ numRandom, nombre1, nombre2 }) => {
  return (
    <div className="contenedor_botones">
      <button className="boton rojo" onClick={numRandom}>
        {nombre1}
      </button>
      <button className="boton verde" onClick={numRandom}>
        {nombre2}
      </button>
    </div>
  );
};

export default Botones;
