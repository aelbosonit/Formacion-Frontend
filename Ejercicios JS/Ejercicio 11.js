/*
Crea una función que tome un array como parametro y lo divida 
en arrays nuevos con tantos elementos como sean especificados.

La función debe tener dos parámetros:
    - El primer parámetro es el array entero que se quiere dividir.
    - El segundo parámetro es el número de elementos que deben tener
     los arrays en los que se divida el array original del primer parámetro.
*/

function splitArrayIntoChunks(arr, num) {
    var container = [], sub = [], pieces = Math.floor(arr.length / num); //Para saber cuántos enteros tiene que tener el contenedor
    for (let i = 0; i < arr.length; i++) { //Recorro todo el array
        sub.push(arr[i]); //Y voy añadiendo a un sub-array los valores
        if (sub.length === num) { //Cuando el sub-array tenga el mismo tamaño que el número que me pasan
            container.push(sub); //Lo meto en el contenedor, que será lo que devuelva en el return
            sub = []; //Y dejo el sub-array vacío, para poder meter valores nuevos
        } else if (container.length === pieces) { //En caso de que el contenedor tenga el tamaño de pieces
            container.push(sub); //Añado los valores que faltan al contenedor (si no pongo esto no se añaden los últimos valores)
        }
    }
    return container;
}

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result);//[[1,2,3],[4,5,6],[7]]