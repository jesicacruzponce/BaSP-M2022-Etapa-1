//2.Strings

//2.a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('Exercise 2.a)');

var textoMiniscula= 'hoy es un dia soleado';
var textoMayuscula= textoMiniscula.toUpperCase();
console.log('Variable de tipo string en mayuscula ' + textoMayuscula);

/*2.b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el
resultado en una nueva variable (utilizar substring).*/

console.log('Exercise 2.b)');

var fecha='sabado 16 de abril';
var cincoCaracteresFecha= fecha.substring(0,5);
console.log('Los primeros cinco caracteres de la string "fecha" son: ' + cincoCaracteresFecha)

/*2.c)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando
el resultado en una nueva variable (utilizar substring).*/

console.log('Exercise 2.c)');
var FECHA= 'domingo 17 de abril';
var tresCaracteresFECHA= FECHA.substring(19-3);
console.log('Los ultimos tres caracteres de la string "FECHA" son: ' + tresCaracteresFECHA);
/**si el numero de inicio es igual o supera la cantidad de caracteres, el start se invierte y cuenta los caracteres
de atras hacia adelante**/

/*2.d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula
y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('Exercise 2.d)');

var lunes= 'lunes 18 de abril';
var Lunes= lunes.substring(0,1).toUpperCase() + lunes.substring(1)
console.log('String con la primera letra en mayuscula y las restantes en minuscula= ' + Lunes );

/*2.e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio
en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('Exercise 2.e)');

var martes= 'martes 19 de abril';
var espacioMartes= martes.indexOf(' ');
console.log('La posición del primer espacio en blanco del string "martes 19 de abril" es ' + espacioMartes);

/*2.f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras
en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('Exercise 2.f)');

var electro= 'electrodomesticos reacondicionados';
var espacioElectro= electro.indexOf(' ');
// el especio esta en la posicion nº 17
var Electro= electro.substring(0,1).toUpperCase()
+ electro.substring(1,17).toLowerCase()+ electro.substring(17,18) + electro.substring(18,19).toUpperCase() + electro.substring(19,35).toLowerCase();
console.log(Electro);
