# Documentacion
### Script2
Este segundo script es muy similar, empezando porque se agregan mas colores
```
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
```
Se crea un nuevo arreglo, este contendra los indices que ya hayan salido, para manejar que no haya contenedores con colores repetidos.
```
const coloresRepetidos = [];
```
Nuestro ciclo while sigue practicamente igual,  las unicas diferencias son que dentro de este usamos un ciclo do-while y creamos una nueva variable, en este ciclo se creara un indice, el mismo se validara si esta contenido en el arreglo mensionado antes, si no lo esta se hace un push en el
```
while (bandera <= 10) {
  let indiceColor;
  do {
    indiceColor = Math.floor(Math.random() * (20 - 0));
  } while (coloresRepetidos.includes(indiceColor));

  coloresRepetidos.push(indiceColor);
  }
  ```
  El resto del script funciona de manera similar al script1, crando nuestro elemento div, asignandole sus caracteristicas y usando el indice de antes para darle un color
  ```
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
  ```
  Al final solo se agrega al DOM y esta todo listo