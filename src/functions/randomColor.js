const getRandomColor = () => {
  /* Lista de colores de ejemplo */
  let colors = [
    "#EEB718",
    "#18EEB1",
    "#DF5BF3",
    "#D61B81",
    "#F7D45D",
    "#62FF77",
    "#7762FF",
    "#FF7A62",
    "#FCCBCB",
    "#11956B",
    "#656CFF",
    "#FF65B4",
    "#FF5C5C",
    "#ABB9D5",
    "#CCE189",
    "#F5FA87",
  ];

  /* Generar 5 colores aleatorios */


  let randomIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomIndex];
  return randomColor;
}


export default getRandomColor;
