const contenedores = document.querySelectorAll("div");
const colores = ["blue", "green", "red", "gray", "brown", "purple", "pink"];

contenedores.forEach((elemento) => {
  console.log(elemento.id);
  if (elemento.id % 2 != 0) {
    elemento.style.color = "bisque";
    elemento.style.background = colores[Math.floor(Math.random() * (7 - 0))];
  }
  elemento.style.height = "200px";
});
