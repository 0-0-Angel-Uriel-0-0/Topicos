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

let parrafo0 = document.createElement("div");
parrafo0.style.padding = "10px";
parrafo0.innerHTML = parrafoAleatorio0;
document.body.appendChild(parrafo0);

let parrafo1 = document.createElement("div");
parrafo1.style.padding = "10px";
parrafo1.innerHTML = parrafoAleatorio1;
document.body.appendChild(parrafo1);

let parrafo2 = document.createElement("div");
parrafo2.style.padding = "10px";
parrafo2.innerHTML = parrafoAleatorio2;
document.body.appendChild(parrafo2);

let parrafo3 = document.createElement("div");
parrafo3.style.padding = "10px";
parrafo3.innerHTML = parrafoAleatorio3;
document.body.appendChild(parrafo3);

let parrafo4 = document.createElement("div");
parrafo4.style.padding = "10px";
parrafo4.innerHTML = parrafoAleatorio4;
document.body.appendChild(parrafo4);
