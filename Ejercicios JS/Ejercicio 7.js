/*
Crea una función que retorne los campos de un objeto 
que equivalgan a un valor “falsy” después de ser ejecutados 
por una función específica.

La función debe tener dos parámetros:
    - Primer parámetro es un objeto con x número de campos y valores
    - Segundo parametro es una funcion que retorne un booleano, que se
     tiene que aplicar al objeto del primer parámetro
*/
function returnFalsyValues(obj, func) {
    for (const key in obj) { //Recorro todo el objeto
        const element = obj[key]; //Guardo el valor de la llave en ese momento
        if (func(element) === true) { //Le paso a la función el valor de la propiedad/llave
            delete obj[key]; //Si es true borra el atributo completo
        }
    }
    return obj; //Devuelve el objeto modificado
}

const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string') //Si especifico 'number', borra todos los números
console.log(result);//{a: 1, c: 3}