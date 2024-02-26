#Documentacion
###Script1
Empieza estableciendo un arreglo para guardar una x cantidad de colores, que se usaran para que cada contenedor tenga color de fondo.
```
const colores = ["red", "blue", "green", "brown", "purple", "yellow", "pink", "orange",];
```
Luego creo una bandera para manejar un ciclo while que creo posteriormente para manejar la cantidad de contenedores deseados.
```
let bandera = 1
while(bandera<=10){
bandera++
}
```
Ya dentro del ciclo creo los contenedores con sus caracteristicas especificadas en la actividad
```
while (bandera <= 10) {
  let contenedor = document.createElement("div");
  contenedor.style.width = "100px";
  contenedor.style.height = "100px";
  bandera++;
}
```
Despues le asigno le agrego color al fondo apoyandome de el arreglo de colores y de un par de propiedades del objeto Math
```
while (bandera <= 10) {
  let contenedor = document.createElement("div");
  contenedor.style.width = "100px";
  contenedor.style.height = "100px";
  contenedor.style.background = colores[Math.floor(Math.random() * (8 - 0))];
  bandera++;
}
```
Y por ultimo solo agrego informacion al contenedor con la propiedad innerHTML y uso el metodo appendChild para integrar el contenedor al cuerpo del DOM.
```
while (bandera <= 10) {
  let contenedor = document.createElement("div");
  contenedor.style.width = "100px";
  contenedor.style.height = "100px";
  contenedor.style.background = colores[Math.floor(Math.random() * (8 - 0))];
  contenedor.innerHTML = "Soy el contenedor " + bandera;
  document.body.appendChild(contenedor);
  bandera++;
}
```