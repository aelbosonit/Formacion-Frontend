/*
Dado un array de ciudades, sacar en un nuevo array las ciudades 
no capitales con unos nuevos parámetros que sean city y isSpain.
El valor de isSpain será un booleano indicando si es una ciudad de España.

Ejemplo: {city: "Logroño", isSpain: "true"}
*/

const arrCities = [
    { city: 'Logroño', country: 'Spain', capital: false, isSpain: true },
    { city: 'Paris', country: 'France', capital: true, isSpain: false },
    { city: 'Madrid', country: 'Spain', capital: true, isSpain: true },
    { city: 'Rome', country: 'Italy', capital: true, isSpain: false },
    { city: 'Oslo', country: 'Norway', capital: true, isSpain: false },
    { city: 'Jaén', country: 'Spain', capital: false, isSpain: true }
]

const result =  [];

arrCities.forEach(element => {
    if(element.capital === false) {
        result.push(element)
    }
});

console.log(result);
