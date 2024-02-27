const colores = [
  "red",
  "blue",
  "green",
  "brown",
  "purple",
  "yellow",
  "pink",
  "orange",
];
let bandera = 1;
while (bandera <= 10) {
  let contenedor = document.createElement("div");
  contenedor.style.width = "100px";
  contenedor.style.height = "100px";
  contenedor.style.background = colores[Math.floor(Math.random() * (8 - 0))];
  contenedor.innerHTML = "Soy el contenedor " + bandera;
  document.body.appendChild(contenedor);
  bandera++;
}
