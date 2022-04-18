//3.Arrays

/*3.a)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/


console.log('Exercise 3.a)');
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Mostrar en consola los meses 5 y 11: ' + meses[4] + ' y '+ meses[10]);

//3.b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('Exercise 3.b)');
meses.sort((a, b) => {
    if (a == b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    return 1;
  });
console.log('Meses ordenados alfabeticamente: ' + meses)

//3.c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Exercise 3.c)');
meses.unshift('Inicio');
meses.push('Fin');
console.log('Agregar un elemento al principio y otro al final: ' + meses);

//3.d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('Exercise 3.d)');
meses.shift();
meses.pop();
console.log('Quitar un elemento al principio y otro al final: ' + meses);

//3.e) Invertir el orden del array (utilizar reverse).
console.log('Exercise 3.e)');
console.log('Invertir el orden del array:  ' + meses.reverse());


//3.f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('Exercise 3.f)');
console.log('Unir todos los elementos del array en un único string donde cada mes este separado por un guión: ' + meses.join('-'));

//3.g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('Exercise 3.g)');
var mayoHastaNoviembre= meses.slice(4,11);
console.log('Copia del array que contiene de mayo a noviembre: ' + mayoHastaNoviembre);



