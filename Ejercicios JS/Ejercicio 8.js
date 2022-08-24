/*
Crea una función que convierta un número de bytes en un formato 
con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')

La función debe tener 2 parámetros:
    - Primer parámetro debe ser el número de bytes
    - Segundo parámetro debe ser un número especificando la cantidad de
     dígitos a los que se debe truncar el resultado 
     (esto se puede hacer con Number.prototype.toPrecision()). 
     Por defecto, este parámetro debe de tener un valor de 3.
*/

function fromBytesToFormattedSizeUnits(bytes, trunc = 3) {
    var zeros = 1;
    for (let i = 0; i < 100; i++) {
        bytes = Math.abs(bytes) / 1000;

        if(bytes >= 1 && bytes <= 99){ //Si es inferior a 2 dígitos devuelve KB
            return bytes.toPrecision(trunc) + 'KB';
        } else if(bytes > 99 && bytes <= 999) { //Si tiene 3 dígitos devuelve MB
            return Math.floor(bytes.toPrecision(trunc))  + 'MB';
        } else if(bytes > 999 && bytes <= 9999){ //Si tiene 4 dígitos devuelve GB 
            return Math.floor(bytes.toPrecision(trunc))  + 'GB';
        } 
    }
}

const result = fromBytesToFormattedSizeUnits(1000);
console.log(result);// 1KB
const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2);// 123MB
const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3);// -12.145GB

console.log(Math.floor(123.456789));