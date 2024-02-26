//Las clases deben empezar en mayusculas
class Libro {
  //Para iniciar las propiedades de la clase ocupamos un constructor
  constructor(titulo, autor, año, genero) {
    //Se usa this para referenciar el valor de las propiedades
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;
  }
  //este es el metodo para regresar la informacion,
  //el backstick se usa para hacer templateString
  informacionTotalDelLibro(titulo, autor, año, genero) {
    return `El libro se llama ${titulo} y lo escribio ${autor}, 
    en el año de ${año} y pertenece al genero ${genero}`;
  }
}
const libros = [];
const guardados = { titulo: "", autor: "", año: "", genero: "" };

/* //!Idea de arreglos mia
while (libros.length < 2) {
  const newArray = [];
  let titulo = prompt("Dame el titulo");
  let autor = prompt("Dame al autor");
  let año = prompt("Año del libro");
  let genero = prompt("Genero del libro");

  if (titulo != "" && autor != "" && año != "" && genero != "") {
    if (!isNaN(año) && año.length === 4) {
      if (
        genero === "aventura" ||
        genero === "fantasia" ||
        genero === "terror"
      ) {
        newArray.push(titulo, autor, año, genero);
        libros.push(newArray);
      } else {
        console.log(
          "Introduciste un genero no valido, prueba con, aventura, terror o fantasia"
        );
      }
    } else {
      console.log("Introduciste mal el año");
    }
  } else {
    console.log("Un campo esta vacio");
  }
  console.log(libros);
} */
//!Mejora de lo mio con ayuda de la maestra
while (libros.length < 3) {
  const newArray = [];
  let titulo = prompt("Dame el titulo: ");
  let autor = prompt("Dame al autor: ");
  let año = prompt("Año del libro: ");
  let genero = prompt(
    "Genero del libro, puede ser aventura, terror, fantasia: "
  );

  if (
    titulo != "" &&
    autor != "" &&
    !isNaN(año) &&
    año.length === 4 &&
    (genero === "aventura" || genero === "fantasia" || genero === "terror")
  ) {
    newArray.push(titulo, autor, año, genero);
    libros.push(newArray);
  } else {
    console.log(
      "Ocurrio un error, un campo esta vacio, introdusiste mal el año o el genero"
    );
  }
  console.log(libros);
}
//alt+164 = ñ

const mostrarTodosLibros = () => {
  console.log("Los libros registrados son: ");
  libros.map((e) => {
    console.log(e[0]);
  });
};
const mostarAutoresAlfabeticamente = () => {
  console.log("Autores registrados");
  let autoresOrdenados = libros.map((e) => {
    return e[1];
  });
  let informacion = autoresOrdenados.sort();
  informacion.map((e) => {
    console.log(e);
  });
};
const mostrarPorGenero = () => {
  let libroRequerido = prompt("Cual genero buscas?");
  let genero = libros.filter((e) => {
    return e[3] === libroRequerido;
  });
  console.log("Libros de: " + libroRequerido);
  console.log(genero);
};

mostrarTodosLibros();
mostarAutoresAlfabeticamente();
mostrarPorGenero();
