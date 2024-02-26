/* //?Forma simplificada del if-else
let edad = 20;

let mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje); */

/* //?Una forma de hacerlo pero sin la posibilidad de marcar mas de dos resultados
//!Math es un objeto con propiedades
//!Math.floor es una propiedad que redondea hasta numeros enteros
//!Math.random es una propiedad que genera un numero pseudoaleatorio entre 0 y 1
let numero = Math.floor(Math.random() * (45-0) + 0);

let validacion = numero >= 21 ? "Ganaste, es mas de 21" : "Perdiste, es menos de 21";
console.log("Sacaste " + numero);
console.log(validacion); */

/* //?Version buena, marca cuando es menor, igual o superior a 21
let numero = Math.floor(Math.random() * (45-0) + 0);
console.log("Tu numero fue "+numero);
 if(numero<21){
    console.log("No ganaste es menos de 21");
 }
 else if(numero == 21){
    console.log("Ganaste, sacaste 21!!!");
 }
 else if(numero>21){
    console.log("Te pasaste wuerito");
 } */

/*  console.log(typeof(3)); */

