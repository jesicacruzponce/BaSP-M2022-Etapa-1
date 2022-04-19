// 6. Functions

/*6.a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en
una variable, mostrando el valor de dicha variable en la consola del navegador.*/
console.log('Exercise 6.a)')
function suma(a,b)
{ return (a + b);
}
var resultado= suma(4,5);
console.log('El resultado de la suma es: ' + resultado)

/*6.b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una
alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('Exercise 6.b)')
function suma(a,b){
var resultado = a + b 
  if (a !== Number || b !== Number) {
    alert (' Error. Debe ingresar numeros');
    resultado= NaN
    console.log(resultado)
  };
}
suma(1,'f')

    
/*6.c)Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

console.log('Exercise 6.c)')
function validate(x){
  return(Number.isInteger(x))
}
console.log(validate(5,5))  
/*6.d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya
decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

console.log('Exercise 6.d)')
function suma(a,b){
var resultado = a + b

if  (a !== Number.isInteger || b !== Number.isInteger) {
      return suma (a,b);
  }
else{
    alert('Error' + Math.round());
  };
suma(1,4.5)

/*6.e)Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo
siga funcionando igual.*/


function numerosEnteros(a,b){
  var a= Number.isInteger;
  var b= Number.isInteger;
}

function suma(a,b){
  var resultado = a + b
  
  if  (numerosEnteros){
      return suma (a,b);
    }
  else{
      alert('Error' + Math.round());
    };
  suma(1,4.5)
