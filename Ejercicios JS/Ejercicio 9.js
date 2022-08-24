/*
Crea una función que a partir de un objeto de entrada, 
retorne un objeto asegurándose que las claves del objeto estén en lowercase.

La función debe tener un objeto como único parámetro.
*/

function toLowercaseKeys(obj) {

    const lowerObject = {};
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    for (let i = 0; i < keys.length; i++) {
        lowerObject[keys[i].toLocaleLowerCase()] = values[i]
    }

    return lowerObject;

}
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase);//{name:'Charles',address:'Home Street'}