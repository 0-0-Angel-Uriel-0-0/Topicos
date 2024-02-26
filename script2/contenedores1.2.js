const colores = [
  "red", //0
  "blue", //1
  "green", //2
  "brown", //3
  "purple", //4
  "yellow", //5
  "pink", //6
  "orange", //7
  "silver", //8
  "maroon", //9
  "lime", //10
  "olive", //11
  "teal", //12
  "aquamarine", //13
  "antiquewhite", //14
  "blueviolet", //15
  "cadetblue", //16
  "chartreuse", //17
  "chocolate", //18
  "coral", //19
];
const coloresRepetidos = [];
let bandera = 1;

while (bandera <= 10) {
  let indiceColor;
  do {
    indiceColor = Math.floor(Math.random() * (20 - 0));
  } while (coloresRepetidos.includes(indiceColor));

  coloresRepetidos.push(indiceColor);

  let contenedor = document.createElement("div");
  contenedor.style.width = "100px";
  contenedor.style.height = "100px";
  contenedor.style.background = colores[indiceColor];
  contenedor.innerHTML =
    "Soy el contenedor " +
    bandera +
    " y soy el color " +
    coloresRepetidos[bandera - 1];
  document.body.appendChild(contenedor);

  bandera++;
}
