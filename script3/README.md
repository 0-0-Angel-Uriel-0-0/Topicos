# Documentacion
### Script 3
Primero creo una funcion que retorna palabras de un arreglo que cree, usando la misma logica de los indices pseudo aleatorios.
```
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
```
Despues creo otra funcion para generar ya los parrafos, creo una constante para definir el rango de palabras que se generara, esto con el objeto Math y sus mismas propiedades de antes, a continuacion creo una variable parrafo donde se estaran guardando todas las palabras.
```
function generarParrafoAleatorio() {
  const numeroPalabras = Math.floor(Math.random() * (100 - 50) + 50);
  let parrafo = "";
  }
```
Creo un ciclo for para repetir tantas veces como el rango pseudo aleatorio se haya definido, y dentro del ciclo voy llamando a la funcion del principio y gurdando las palabras en parrafo.
```
function generarParrafoAleatorio() {
  const numeroPalabras = Math.floor(Math.random() * (100 - 50) + 50);
  let parrafo = "";
  
  for (let i = 0; i < numeroPalabras; i++) {
    parrafo = parrafo + generarPalabraAleatoria() + " ";
  }
  }
```
Luego simplemente con length saco la longitud de sus caracteres y la guardo en otra constante.
```
function generarParrafoAleatorio() {
  const numeroPalabras = Math.floor(Math.random() * (100 - 50) + 50);
  let parrafo = "";
  
  for (let i = 0; i < numeroPalabras; i++) {
    parrafo = parrafo + generarPalabraAleatoria() + " ";
  }
  const numeroDeCaracteres = parrafo.length;
  }
```
A continuacion lo agrego nuevamente a parrafo, con un salto de linea y retorno el parrafo.
```
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
```
Para el final llamo la cantidad de parrafos que deseo, y creo la misma cantidad de contenedores para presentar la informacion de los parrafos en el DOM.
```
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
```
Dandole algunos detalles al contenedor.