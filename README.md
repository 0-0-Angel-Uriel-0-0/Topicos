Documentacion de cada script de mi codigo

Script 1: Empieza estableciendo un arreglo para guardar una x cantidad de colores, que se usaran para que cada 
contenedor tenga color de fondo, luego creo una bandera para manejar un ciclo while que creo posteriormente para 
manejar la cantidad de contenedores deseados, ya dentro del while creo un elemento div, le asigno sus dimensiones 
solicitadas 100x100, le agrego un color usando el arreglo de antes, y elijo un indice apoyandome de dos propiedades de Math,
una para redondear a un numero entero, y otra para crear un pseudo numero aleatorio, le agrego un contenido al contenedor div 
con la propiedad innerHTML y por ultimo lo agrego a cuerpo del html.

Script 2: El segundo script es similar, lo que cambia en la estructura son que se agregan mas colores al arreglo de colores, y se 
requiere algo nuevo, que no se repitan los colores, para esto cree un nuevo arreglo llamado coloresRepetidos, aqui se guardaran los 
colores que ya allan salido y se usara para verificar el que no se repitan los colores, se crea una nueva variable y un ciclo do-while,
esta variable es para guardar el indice de el arreglo colores que alla salido y hacerle un push al arreglo de coloresRepetidos, esto 
validando antes que el indice generado no este dentro de los indices guardados en coloresRepetidos, y el resto es igual.

Script 3: Primero creo una funcion que retorna palabras de un arreglo que creee, usando la misma logica de los indices pseudo aleatorios,
despues creo otra funcion para generar ya los parrafos, creo una constante para definir el rango de palabras que se generara, esto igual 
con el objeto Math y sus mismas propiedades de antes, a continuacion creo una variable parrafo donde se estaran guardando todas las palabras,
creo un ciclo for para repetir tantas veces como el rango pseudo aleatorio se haya definido, y dentro del ciclo voy llamando a la funcion del 
principio y gurdando las palabras en parrafo, luego simplemente con un .length saco la longitud de sus caracteres y la guardo en otra constante,
para ya acabar solo lo agrego nuevamente a parrafo, con un salto de linea y retorno el parrafo, al final solo llamo 5 veces la funcion para que 
cree 5 parrafos pseudo aleatorios
