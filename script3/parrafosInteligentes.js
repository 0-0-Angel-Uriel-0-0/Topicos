function generarPalabraAleatoria() {
  const palabras = [
    "gatos",
    "telefono",
    "mouse",
    "chocolate",
    "control",
    "escuela",
    "tareas",
    "huevos",
    "desayuno",
    "gimnasio",
    "cielo",
    "atomos",
    "hilos",
    "osos",
    "aviones",
    "cuchara",
    "salsa",
    "lapiz",
  ];
  return palabras[Math.floor(Math.random() * palabras.length)];
}

function generarParrafoAleatorio() {
  const numeroPalabras = Math.floor(Math.random() * (100 - 50) + 50);
  let parrafo = "";

  for (let i = 0; i < numeroPalabras; i++) {
    parrafo = parrafo + generarPalabraAleatoria() + " ";
  }

  const numeroDeCaracteres = parrafo.length;
  parrafo =
    parrafo + "\n[Tamaño del párrafo: " + numeroDeCaracteres + " caracteres]";

  return parrafo;
}

const parrafoAleatorio0 = generarParrafoAleatorio();
const parrafoAleatorio1 = generarParrafoAleatorio();
const parrafoAleatorio2 = generarParrafoAleatorio();
const parrafoAleatorio3 = generarParrafoAleatorio();
const parrafoAleatorio4 = generarParrafoAleatorio();

console.log(parrafoAleatorio0);
console.log(parrafoAleatorio1);
console.log(parrafoAleatorio2);
console.log(parrafoAleatorio3);
console.log(parrafoAleatorio4);
