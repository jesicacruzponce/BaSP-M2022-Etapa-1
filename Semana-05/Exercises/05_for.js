// 5. FOR

/*5.a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta
utilizando cada una de las palabras.*/

var i= ["lunes", "martes", "miercoles", "jueves", "viernes"]

for (x=0;x<i.length;x++){
    alert(i[x]) 
}

/*5.b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
*/

for (x=0;x<i.length;x++){
    i[x] = i [x].charAt(0).toUpperCase() + i [x].slice(1)
    alert(i[x]) 
};

*5.c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para
ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

var sentence= ' ';
for (x=0;x<i.length;x++){
    alert(i + sentence) 
}

/*5.d) Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al
final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por
la consola del navegador el array final (utilizar console.log).
.*/

var vacio;
 for (var i=0; i<10; i=i++){
     console.log (vacio)
 }



