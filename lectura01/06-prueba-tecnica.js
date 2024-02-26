class Persona {
  constructor(nombre, direccion, telefono, edad) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }
}

const almacenDePersonas = [];

while (almacenDePersonas.length < 1) {
  let unaPersona = [];
  let nombre = prompt("Ingresa un nombre: ");
  let direccion = prompt("Dame su direccion: ");
  let telefono = prompt("Ingresa su numero telefonico: ");
  let edad = prompt("Dime su edad actual: ");

  const validandoEspaciosVacios = () => {
    if (nombre != "" && direccion != "" && telefono != "" && edad != "") {
      unaPersona.push(nombre, direccion, telefono, edad);
      almacenDePersonas.push(unaPersona);
      console.log(almacenDePersonas);
    } else {
      console.log("Hay un campo vacio");
    }
  };

  const validandoEdad = () => {
    if (!isNaN(edad)) {
      console.log("La edad es un numero");
    } else {
      console.log("La edad no es un numero, ingresa una edad valida");
    }
  };

  const promedioEdad = () => {
    let suma = 0;
    let cantidadEdades = 0;

    almacenDePersonas.forEach((elemento) => {
      let edad = parseInt(elemento[3]);
      if (!isNaN(edad)) {
        suma += edad;
        cantidadEdades++;
      }
    });

    if (suma > 0) {
      let promedio = suma / cantidadEdades;
      return console.log(`El promedio es igual a: ${promedio}`);
    }
  };

  const nombresAlfabeticos = () => {
    console.log("Personas registrados");
    let ordenarPersonas = almacenDePersonas.map((e) => {
      return e[0];
    });
    let personasOrdenadas = ordenarPersonas.sort();
    personasOrdenadas.map((persona) => {
      let mayusculas = persona.toUpperCase();
      console.log(mayusculas);
    });
  };

  validandoEspaciosVacios();
  validandoEdad();
  promedioEdad();
  nombresAlfabeticos();
}
